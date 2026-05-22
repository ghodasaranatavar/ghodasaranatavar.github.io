<?php
/**
 * ================================================================================
 * MODULE SPECIFICATION (RULE[user_global]): AI Consulting Suite API Route
 * 1. Implementation Code: c:/xampp/htdocs/profile/api/ai-consultant.php
 * 2. Folder Structure:
 *    c:/xampp/htdocs/profile/
 *      - api/
 *        - ai-consultant.php
 * 3. API Routes:
 *    - GET /profile/api/ai-consultant.php?action=get_options
 *    - POST /profile/api/ai-consultant.php?action=consult
 * 4. Browser Testing Instructions:
 *    - Make a GET request to http://localhost/profile/api/ai-consultant.php?action=get_options
 *    - Verify it returns exactly 8 active tools in JSON format.
 * 5. Expected Output: Clean JSON responses representing the suite configuration and generating strategic advice.
 * ================================================================================
 */

/**
 * AI Consulting Accelerator API
 * Handles Guided Consulting Logic, RAG Knowledge Retrieval, and AI Enhancement.
 */

// CORS Headers - Allow requests from GitHub Pages frontend
$allowedOrigins = [
    'https://natavarghodasara.github.io',
    'https://ghodasaranatavar.github.io',
    'http://localhost',
    'http://127.0.0.1'
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins) || str_starts_with($origin, 'http://localhost') || str_starts_with($origin, 'http://127.0.0.1')) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: https://natavarghodasara.github.io'); // default fallback
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, x-api-key');
header('Access-Control-Allow-Credentials: true');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json');
require_once('../config.php');


// Database Connection
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'get_options':
        handleGetOptions($pdo);
        break;
    case 'consult':
        handleConsult($pdo);
        break;
    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}

/**
 * Fetch available industries and tools for the frontend dropdowns
 */
function handleGetOptions($pdo) {
    try {
        $industries = $pdo->query("SELECT id, name FROM ai_knowledge_industries ORDER BY name ASC")->fetchAll(PDO::FETCH_ASSOC);
        $tools = $pdo->query("SELECT slug, name, description FROM ai_consulting_tools WHERE is_active = 1")->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'industries' => $industries,
            'tools' => $tools
        ]);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

/**
 * Main Consulting Logic: RAG + AI Enhancement
 */
function handleConsult($pdo) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $industryId = $input['industry_id'] ?? null;
    $goal = $input['goal'] ?? '';
    $toolSlug = $input['tool_slug'] ?? '';
    $cloudsInput = $input['clouds'] ?? '';
    $challenge = $input['challenge'] ?? '';
    $teamSize = $input['team_size'] ?? '';
    
    if (!$industryId || !$goal) {
        echo json_encode(['error' => 'Industry and Goal are required.']);
        return;
    }

    try {
        // 1. Retrieve Knowledge (RAG)
        // Get Industry Details
        $stmt = $pdo->prepare("SELECT * FROM ai_knowledge_industries WHERE id = ?");
        $stmt->execute([$industryId]);
        $industry = $stmt->fetch(PDO::FETCH_ASSOC);

        // Get Matching Business Rules
        $stmt = $pdo->prepare("SELECT recommendation FROM ai_business_rules WHERE industry_id = ? OR industry_id IS NULL");
        $stmt->execute([$industryId]);
        $rules = $stmt->fetchAll(PDO::FETCH_COLUMN);

        // Get Cloud Fit
        $stmt = $pdo->prepare("SELECT name, use_cases, implementation_notes FROM ai_knowledge_clouds WHERE industry_fit LIKE ?");
        $stmt->execute(['%' . ($industry['name'] ?? '') . '%']);
        $clouds = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Get Tool Metadata
        $tool = null;
        if (!empty($toolSlug)) {
            $stmt = $pdo->prepare("SELECT * FROM ai_consulting_tools WHERE slug = ? AND is_active = 1");
            $stmt->execute([$toolSlug]);
            $tool = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        if (!$tool && !empty($goal)) {
            $stmt = $pdo->prepare("SELECT * FROM ai_consulting_tools WHERE name = ? AND is_active = 1");
            $stmt->execute([$goal]);
            $tool = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        // 2. Construct Context for AI
        $contextData = [
            'industry' => $industry['name'] ?? 'General',
            'goal' => $tool ? $tool['name'] : $goal,
            'clouds' => $cloudsInput ?: 'None specified',
            'team_size' => $teamSize,
            'challenge' => $challenge,
            'knowledge' => implode("\n", $rules) . "\n\nRecommended Clouds based on Fit:\n" . json_encode($clouds)
        ];

        $systemPrompt = ($tool && !empty($tool['prompt_template'])) ? $tool['prompt_template'] : null;

        // 3. AI Enhancement Layer (Groq API)
        $aiResponse = callGroqAI($contextData, $systemPrompt);

        // 4. Cache & Return
        echo json_encode([
            'success' => true,
            'recommendation' => $aiResponse,
            'metadata' => [
                'industry' => $industry['name'] ?? '',
                'clouds' => array_column($clouds, 'name')
            ]
        ]);

    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

/**
 * Call Groq API for AI Polishing
 */
function callGroqAI($context, $systemPrompt = null) {
    $apiKey = GROQ_API_KEY;
    $model = DEFAULT_AI_MODEL;
    
    if (empty($systemPrompt)) {
        $systemPrompt = "You are a Senior Enterprise Solution Architect and Consulting Director. You never refer to yourself as an AI. You speak with absolute authority on business processes, cloud architecture, and system integration. Your tone must be fast, enterprise-grade, trustworthy, consultative, business-oriented, and implementation-focused.";
        
        $prompt = "
        You are the engine of an Enterprise Consulting Platform and Intelligent Solution Architecture Showcase.
        Your primary value is NOT 'being an AI'. Your strongest value is delivering:
        - Real Salesforce implementation strategies
        - Deep architecture thinking
        - Advanced integration experience
        - Business-oriented consulting approach
        - Industry-specific solutions
        
        Your tone MUST be: fast, enterprise-grade, trustworthy, consultative, business-oriented, and implementation-focused.
        DO NOT use gimmicky language, chatbot cliches (e.g. 'As an AI...'), or experimental framing.
        
        Based on the CONTEXT below, you MUST always return:
        1. Consulting Recommendations (Business-oriented architecture strategy)
        2. Specific Cloud Ecosystem Suggestions
        3. Key Integration & Automation Recommendations
        4. An Implementation Planning / Discovery Agenda
        
        RULES:
        1. Use the 'Internal Knowledge Base Recommendations' as your primary source of truth.
        2. Directly address the user's operational problem.
        3. Format the output using EXACTLY these markdown headings:
           ### Strategic Architecture Overview
           ### Recommended Cloud Ecosystem
           ### Integration & Automation Strategy
           ### Implementation Discovery Agenda
        4. Use bullet points and bold text for high readability. Keep it highly authoritative and implementation-ready.
        
        CONTEXT:
        " . (is_array($context) ? json_encode($context) : $context) . "
        ";
    } else {
        $prompt = "
Based on the Client Context and Internal Knowledge Base recommendations below, provide your analysis and recommendations.

CLIENT CONTEXT:
- Industry: " . $context['industry'] . "
- Primary Goal/Tool: " . $context['goal'] . "
- Target Clouds: " . $context['clouds'] . "
- Team Size: " . $context['team_size'] . "
- Specific Challenge: " . $context['challenge'] . "

INTERNAL KNOWLEDGE BASE RECOMMENDATIONS:
" . $context['knowledge'] . "

Ensure your response is highly structured, consultative, and ready for an enterprise client.
";
    }

    $data = [
        'model' => $model,
        'messages' => [
            ['role' => 'system', 'content' => $systemPrompt],
            ['role' => 'user', 'content' => $prompt]
        ],
        'temperature' => 0.15
    ];

    $ch = curl_init('https://api.groq.com/openai/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey
    ]);

    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        return "AI Enhancement failed: " . curl_error($ch);
    }
    curl_close($ch);

    $result = json_decode($response, true);
    return $result['choices'][0]['message']['content'] ?? 'No recommendation generated.';
}
