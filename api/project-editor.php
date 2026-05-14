<?php
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';
$images_dir = '../assets/images/projects/';
$project_data_file = '../project-data.js';

if ($action === 'list_images') {
    $images = [];
    if (is_dir($images_dir)) {
        $files = scandir($images_dir);
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..' && !is_dir($images_dir . $file)) {
                $images[] = [
                    'name' => $file,
                    'url' => 'assets/images/projects/' . $file
                ];
            }
        }
    }
    echo json_encode(['success' => true, 'images' => $images]);
    exit;
}

if ($action === 'save_data') {
    $json_input = file_get_contents('php://input');
    $data = json_decode($json_input, true);

    if (!$data) {
        echo json_encode(['success' => false, 'message' => 'Invalid data provided']);
        exit;
    }

    // Prepare the JS file content
    $js_content = "const projectData = " . json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . ";\n\n";
    $js_content .= "// Export to window for global access\n";
    $js_content .= "window.projectData = projectData;\n\n";
    $js_content .= "// Backward Compatibility Alias\n";
    $js_content .= "window.PORTFOLIO_DATA = {\n";
    $js_content .= "    projects: projectData\n";
    $js_content .= "};\n";

    if (file_put_contents($project_data_file, $js_content)) {
        echo json_encode(['success' => true, 'message' => 'Project data updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to write to project-data.js']);
    }
    exit;
}

echo json_encode(['success' => false, 'message' => 'Unknown action']);
?>
