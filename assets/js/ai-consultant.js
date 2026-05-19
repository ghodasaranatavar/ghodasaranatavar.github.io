// Smart API Base URL: switches between local dev and production automatically
const AI_API_BASE_URL = (() => {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '') {
        return `${window.location.origin}/profile/api/`;
    }
    return 'https://lightcloudcrm.com/api/';
})();

// Inline AI Panel HTML — avoids cross-origin fetch (GitHub Pages cannot send CORS headers)
const AI_PANEL_HTML = `
<!-- AI Consulting Accelerator Component -->
<div class="ai-consulting-panel" id="aiConsultingPanel">
    <div class="ai-panel-header">
        <h3><i class="ph ph-briefcase"></i> AI Consulting Accelerator</h3>
        <p>Access 8 specialized tools to architect your next Salesforce implementation.</p>
    </div>

    <!-- 8 Consulting Tools Grid -->
    <div class="ai-tools-grid" id="aiToolsGrid">
        <!-- Tools will be injected here via JS -->
    </div>

    <div class="ai-form-container">
        <!-- Active Consulting Mode Badge -->
        <div id="aiActiveMode" class="ai-active-mode-badge" style="display: none;">
            <i class="ph-fill ph-shield-star"></i>
            <span>Active Mode: AI Consulting Assistant</span>
        </div>
        
        <div class="ai-form-divider"><span>Have a Specific Requirement? Ask for a Custom Inquiry</span></div>
        <div class="ai-form-grid">
            <div class="ai-field-group">
                <label for="aiIndustry">Industry <span style="color: var(--ai-accent);">*</span></label>
                <select id="aiIndustry">
                    <option value="">Select Industry...</option>
                    <!-- Options populated by JS -->
                </select>
            </div>

            <div class="ai-field-group">
                <label>Primary Goals <span style="color: var(--ai-accent);">*</span></label>
                <div class="ai-search-container">
                    <div class="ai-tags-input" id="aiGoalTags">
                        <!-- Selected pills go here -->
                        <input type="text" id="aiGoalSearch" placeholder="Type to find goals (e.g. Automation)..." autocomplete="off">
                    </div>
                    <div class="ai-suggestions" id="aiGoalSuggestions">
                        <!-- Suggestions will appear here -->
                    </div>
                </div>
            </div>

            <div class="ai-field-group">
                <label>Target Clouds</label>
                <div class="ai-search-container">
                    <div class="ai-tags-input" id="aiCloudTags">
                        <!-- Selected pills go here -->
                        <input type="text" id="aiCloudSearch" placeholder="e.g. Sales Cloud..." autocomplete="off">
                    </div>
                    <div class="ai-suggestions" id="aiCloudSuggestions">
                        <!-- Suggestions will appear here -->
                    </div>
                </div>
            </div>

            <div class="ai-field-group">
                <label for="aiTeamSize">Team Size</label>
                <select id="aiTeamSize">
                    <option value="1-10">1\u201310</option>
                    <option value="10-50">10\u201350</option>
                    <option value="50-200">50\u2013200</option>
                    <option value="200+">200+</option>
                </select>
            </div>
        </div>

        <div class="ai-field-group">
            <label for="aiChallenge">Biggest Challenge <span style="color: var(--ai-accent);">*</span></label>
            <textarea id="aiChallenge" placeholder="e.g. We manage leads manually and need automated follow-ups..."></textarea>
        </div>

        <div class="ai-action-area">
            <button class="btn-ai-generate" id="btnAiGenerate" disabled>
                <i class="fas fa-wand-magic-sparkles"></i> Generate Recommendation
            </button>
        </div>
    </div>

    <!-- Loading State -->
    <div class="ai-loading" id="aiLoading">
        <div class="ai-spinner"></div>
        <p>Analyzing industry patterns and consulting knowledge...</p>
    </div>

    <!-- Response Area -->
    <div class="ai-response-container" id="aiResponse">
        <!-- Action Header -->
        <div class="ai-response-actions">
            <button class="ai-response-close" id="aiResponseClose" title="Close Response">
                <i class="ph ph-x"></i>
            </button>
        </div>

        <div class="ai-response-content" id="aiResultContent">
            <!-- AI Output rendered here -->
        </div>

        <!-- Unified Strategic CTA (Visible after Generation) -->
        <div class="ai-unified-cta" id="aiUnifiedCTA">
            <h2>Ready to Architect Your Success?</h2>
            <p>Your custom strategy is just the beginning. Let's discuss how to turn these recommendations into a live, high-performing Salesforce ecosystem.</p>
            <button class="btn-unified-book calendly-trigger">
                <i class="ph ph-calendar-check"></i> Book Architecture Call
            </button>
        </div>
    </div>
</div>
`;

window.aiConsultant = {
    togglePanel: function() {
        const panel = document.getElementById('aiConsultingPanel');
        if (panel) {
            panel.scrollIntoView({ behavior: 'smooth' });
            panel.classList.add('active');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('ai-panel-placeholder');
    if (!placeholder) return;

    // Inject the inline panel HTML — no cross-origin fetch needed
    placeholder.innerHTML = AI_PANEL_HTML;

    // Create and Inject FAB to Body
    const fab = document.createElement('button');
    fab.id = 'aiSideTrigger';
    fab.className = 'ai-side-trigger';
    fab.setAttribute('aria-label', 'Open AI Consultant');
    fab.innerHTML = `<i class="ph-fill ph-sparkle"></i><span>AI Consultant</span>`;
    document.body.appendChild(fab);

    initAI();

    function initAI() {
        const industrySelect = document.getElementById('aiIndustry');
        const goalTagsContainer = document.getElementById('aiGoalTags');
        const goalSearchInput = document.getElementById('aiGoalSearch');
        const goalSuggestions = document.getElementById('aiGoalSuggestions');
        
        // Cloud Tags Elements
        const cloudTagsContainer = document.getElementById('aiCloudTags');
        const cloudSearchInput = document.getElementById('aiCloudSearch');
        const cloudSuggestions = document.getElementById('aiCloudSuggestions');
        
        const teamSizeSelect = document.getElementById('aiTeamSize');
        const challengeText = document.getElementById('aiChallenge');
        const generateBtn = document.getElementById('btnAiGenerate');
        const toolsGrid = document.getElementById('aiToolsGrid');
        const sideTrigger = document.getElementById('aiSideTrigger');
        const loadingArea = document.getElementById('aiLoading');
        const responseArea = document.getElementById('aiResponse');
        const resultContent = document.getElementById('aiResultContent');
        const unifiedCTA = document.getElementById('aiUnifiedCTA');
        const activeModeBadge = document.getElementById('aiActiveMode');
        const btnDownloadPdf = document.getElementById('btnDownloadPdf');
        const aiResponseClose = document.getElementById('aiResponseClose');

        if (!generateBtn) return;
        
        // --- Form Validation Logic ---
        function checkFormValidity() {
            const ind = industrySelect.value;
            const hasGoals = selectedGoals.size > 0;
            const chall = challengeText.value.trim();
            
            if (ind !== '' && hasGoals && chall !== '') {
                generateBtn.removeAttribute('disabled');
            } else {
                generateBtn.setAttribute('disabled', 'true');
            }
        }
        
        industrySelect.addEventListener('change', checkFormValidity);
        challengeText.addEventListener('input', checkFormValidity);

        // Define Standard Goals
        const standardGoals = [
            "Lead Management", "Customer Support", "Partner Portal", 
            "Automation", "Reporting", "CRM Modernization", 
            "Integration", "Sales Operations", "Service Operations",
            "Field Service", "Marketing Automation", "CPQ Implementation",
            "Data Migration", "Security Audit", "User Training"
        ];

        let selectedGoals = new Set();

        function renderTags() {
            // Remove existing pills but keep the input
            const existingPills = goalTagsContainer.querySelectorAll('.ai-pill');
            existingPills.forEach(p => p.remove());

            selectedGoals.forEach(goal => {
                const pill = document.createElement('div');
                pill.className = 'ai-pill';
                pill.innerHTML = `${goal} <i class="ph ph-x"></i>`;
                pill.querySelector('i').addEventListener('click', () => {
                    selectedGoals.delete(goal);
                    renderTags();
                    checkFormValidity();
                });
                goalTagsContainer.insertBefore(pill, goalSearchInput);
            });
        }

        function addGoal(goal) {
            if (goal && !selectedGoals.has(goal)) {
                selectedGoals.add(goal);
                renderTags();
            }
            goalSearchInput.value = '';
            goalSuggestions.classList.remove('active');
            checkFormValidity();
        }

        function removeGoal(goal) {
            selectedGoals.delete(goal);
            renderTags();
            checkFormValidity();
        }

        // Search Logic
        goalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (!query) {
                goalSuggestions.classList.remove('active');
                return;
            }

            const matches = standardGoals.filter(g => 
                g.toLowerCase().includes(query) && !selectedGoals.has(g)
            );

            if (matches.length > 0) {
                goalSuggestions.innerHTML = matches.map(m => `
                    <div class="suggestion-item" data-value="${m}">${m}</div>
                `).join('');
                goalSuggestions.classList.add('active');
            } else {
                goalSuggestions.classList.remove('active');
            }
        });

        goalSuggestions.addEventListener('click', (e) => {
            const item = e.target.closest('.suggestion-item');
            if (item) addGoal(item.dataset.value);
        });

        // Close suggestions on blur
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#aiGoalTags') && !e.target.closest('#aiGoalSuggestions')) {
                goalSuggestions.classList.remove('active');
            }
            if (!e.target.closest('#aiCloudTags') && !e.target.closest('#aiCloudSuggestions')) {
                cloudSuggestions?.classList.remove('active');
            }
        });

        // --- Cloud Search & Tags Logic ---
        const standardClouds = [
            "Sales Cloud", "Service Cloud", "Marketing Cloud", 
            "Commerce Cloud", "Financial Services Cloud", "Health Cloud", 
            "Experience Cloud", "Data Cloud", "MuleSoft", "Tableau", "Slack"
        ];
        
        let selectedClouds = new Set();
        
        function renderCloudTags() {
            if (!cloudTagsContainer) return;
            const existingPills = cloudTagsContainer.querySelectorAll('.ai-pill');
            existingPills.forEach(p => p.remove());

            selectedClouds.forEach(cloud => {
                const pill = document.createElement('div');
                pill.className = 'ai-pill';
                pill.innerHTML = `${cloud} <i class="ph ph-x"></i>`;
                pill.querySelector('i').addEventListener('click', () => {
                    selectedClouds.delete(cloud);
                    renderCloudTags();
                });
                cloudTagsContainer.insertBefore(pill, cloudSearchInput);
            });
        }

        function addCloud(cloud) {
            if (cloud && !selectedClouds.has(cloud)) {
                selectedClouds.add(cloud);
                renderCloudTags();
            }
            if (cloudSearchInput) cloudSearchInput.value = '';
            if (cloudSuggestions) cloudSuggestions.classList.remove('active');
        }

        if (cloudSearchInput) {
            cloudSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                if (!query) {
                    cloudSuggestions.classList.remove('active');
                    return;
                }

                const matches = standardClouds.filter(c => 
                    c.toLowerCase().includes(query) && !selectedClouds.has(c)
                );

                if (matches.length > 0) {
                    cloudSuggestions.innerHTML = matches.map(m => `
                        <div class="suggestion-item" data-value="${m}">${m}</div>
                    `).join('');
                    cloudSuggestions.classList.add('active');
                } else {
                    cloudSuggestions.classList.remove('active');
                }
            });
        }

        if (cloudSuggestions) {
            cloudSuggestions.addEventListener('click', (e) => {
                const item = e.target.closest('.suggestion-item');
                if (item) addCloud(item.dataset.value);
            });
        }

        // FAB Toggle
        sideTrigger?.addEventListener('click', () => window.aiConsultant.togglePanel());

        // 1. Fetch Options (Industries & Tools)
        async function loadOptions() {
            try {
                const response = await fetch(AI_API_BASE_URL + 'ai-consultant.php?action=get_options');
                const data = await response.json();

                // Populate Industries
                if (data.industries) {
                    data.industries.forEach(ind => {
                        const opt = document.createElement('option');
                        opt.value = ind.id;
                        opt.textContent = ind.name;
                        industrySelect.appendChild(opt);
                    });
                    
                    // Contextual pre-fill
                    const currentIndustry = document.getElementById('client-industry')?.innerText;
                    if (currentIndustry) {
                        const match = Array.from(industrySelect.options).find(o => 
                            o.text.toLowerCase().includes(currentIndustry.toLowerCase())
                        );
                        if (match) industrySelect.value = match.value;
                    }
                }

                // Populate 8 Tools
                if (data.tools) {
                    const icons = {
                        'discovery-call-prep': 'ph ph-phone-call',
                        'cloud-recommendation': 'ph ph-cloud',
                        'integration-advisor': 'ph ph-plugs-connected',
                        'roi-estimator': 'ph ph-chart-line-up',
                        'consulting-assistant': 'ph ph-users-three',
                        'agenda-generator': 'ph ph-list-checks',
                        'cloud-recommender': 'ph ph-shield-check',
                        'architect-assistant': 'ph ph-sketch-logo'
                    };

                    let isInitialLoad = true;
                    data.tools.forEach(tool => {
                        const card = document.createElement('div');
                        card.className = 'ai-tool-card';
                        card.innerHTML = `
                            <div class="ai-tool-icon"><i class="${icons[tool.slug] || 'ph ph-sparkle'}"></i></div>
                            <h4>${tool.name}</h4>
                            <p>${tool.description}</p>
                        `;

                        card.addEventListener('click', () => {
                            document.querySelectorAll('.ai-tool-card').forEach(c => c.classList.remove('active'));
                            card.classList.add('active');
                            
                            // Reset tags when a specialized tool is chosen
                            selectedGoals.clear();
                            renderTags();
                            window.aiConsultant.activeTool = tool.name;
                            window.aiConsultant.activeToolSlug = tool.slug;
                            
                            // Update Active Mode Badge
                            if (activeModeBadge) {
                                activeModeBadge.style.display = 'inline-flex';
                                activeModeBadge.querySelector('span').textContent = `Active Mode: ${tool.name}`;
                            }
                            
                            challengeText.placeholder = `Describe your ${tool.name} requirements...`;
                            if (!isInitialLoad) {
                                challengeText.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        });
                        toolsGrid.appendChild(card);
                    });

                    // Set Default Tool (AI Consulting Assistant or first tool)
                    const defaultTool = data.tools.find(t => t.name.includes('Consulting Assistant')) || data.tools[0];
                    if (defaultTool) {
                        const cards = toolsGrid.querySelectorAll('.ai-tool-card');
                        const defaultCard = Array.from(cards).find(c => c.querySelector('h4').textContent === defaultTool.name);
                        if (defaultCard) defaultCard.click();
                    }
                    isInitialLoad = false;
                }
            } catch (err) {
                console.error('AI Options Load Error:', err);
            }
        }
        
        // --- Close Response Logic ---
        if (aiResponseClose) {
            aiResponseClose.addEventListener('click', () => {
                responseArea.classList.remove('active');
                if (unifiedCTA) unifiedCTA.classList.remove('active');
                // Optional: clear content so next generation doesn't show old stuff
                setTimeout(() => resultContent.innerHTML = '', 500); 
            });
        }
        
        // --- Download PDF Logic ---
        /*
        if (btnDownloadPdf) {
            btnDownloadPdf.addEventListener('click', () => {
                // Add a small loading state to button
                const originalText = btnDownloadPdf.innerHTML;
                btnDownloadPdf.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Generating...';
                btnDownloadPdf.disabled = true;

                // Clone the container to exclude buttons and CTA for the PDF
                const sourceContainer = document.getElementById('aiResponse');
                const clone = sourceContainer.cloneNode(true);
                
                // Clean up the clone for printing
                const cloneActions = clone.querySelector('.ai-response-actions');
                const cloneCTA = clone.querySelector('#aiUnifiedCTA');
                if (cloneActions) cloneActions.remove();
                if (cloneCTA) cloneCTA.remove();
                
                // Remove animation class to prevent layout shifts during render
                clone.style.animation = 'none';
                clone.style.transform = 'none';
                clone.style.boxShadow = 'none'; // Better for PDF
                
                // Wrap in a div that forces white background and proper width
                const printWrapper = document.createElement('div');
                printWrapper.style.position = 'absolute';
                printWrapper.style.left = '-9999px';
                printWrapper.style.top = '0';
                printWrapper.style.width = '800px'; 
                printWrapper.style.background = '#ffffff';
                printWrapper.style.padding = '20px'; // Give some breathing room
                
                printWrapper.appendChild(clone);
                document.body.appendChild(printWrapper);

                const opt = {
                    margin:       0.5,
                    filename:     'Enterprise_Architecture_Blueprint.pdf',
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2, useCORS: true, logging: false },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                const finishDownload = () => {
                    document.body.removeChild(printWrapper);
                    btnDownloadPdf.innerHTML = originalText;
                    btnDownloadPdf.disabled = false;
                };

                if (!window.html2pdf) {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                    script.onload = () => {
                        html2pdf().set(opt).from(clone).save().then(finishDownload);
                    };
                    document.head.appendChild(script);
                } else {
                    html2pdf().set(opt).from(clone).save().then(finishDownload);
                }
            });
        }
        */

        async function generateConsultation() {
            // Final goal is either the active tool OR the joined pills
            const finalGoal = window.aiConsultant.activeTool || Array.from(selectedGoals).join(', ');

            const payload = {
                industry_id: industrySelect.value,
                goal: finalGoal,
                tool_slug: window.aiConsultant.activeToolSlug || '',
                clouds: Array.from(selectedClouds).join(', '),
                team_size: teamSizeSelect.value,
                challenge: challengeText.value
            };

            console.log('AI Consulting Request:', payload);

            if (!payload.industry_id || !payload.goal) {
                alert('Please select an Industry and at least one Goal (or click a Tool Card above).');
                return;
            }

            generateBtn.disabled = true;
            loadingArea.classList.add('active');
            responseArea.classList.remove('active');

            try {
                const response = await fetch(AI_API_BASE_URL + 'ai-consultant.php?action=consult', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                console.log('AI Consulting Response:', data);

                if (data.success) {
                    // Improved Markdown-to-HTML formatting
                    let html = data.recommendation
                        .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
                        .replace(/^## (.*?)$/gm, '<h3>$1</h3>')
                        .replace(/^### (.*?)$/gm, '<h4>$1</h4>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/^\- (.*?)$/gm, '<li>$1</li>')
                        .replace(/^\* (.*?)$/gm, '<li>$1</li>')
                        .replace(/\n\n/g, '</p><p>')
                        .replace(/\n/g, '<br>');

                    // Wrap lists properly if they exist
                    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
                    // Remove double ULs caused by global match
                    html = html.replace(/<\/ul><ul>/g, '');
                    
                    resultContent.innerHTML = `<p>${html}</p>`;
                    responseArea.classList.add('active');
                    unifiedCTA?.classList.add('active');

                    // Hide the redundant global "Jump Start" section if it exists on the page
                    const globalCTA = document.querySelector('.cta-section, #ready-to-jump-start');
                    if (globalCTA) globalCTA.style.display = 'none';

                    responseArea.scrollIntoView({ behavior: 'smooth' });
                } else {
                    alert('Backend Error: ' + (data.error || 'Unknown error occurred.'));
                }
            } catch (err) {
                console.error('AI Consulting Fetch Error:', err);
                alert('Connection Error: Could not reach the AI Consultant API.');
            } finally {
                loadingArea.classList.remove('active');
                checkFormValidity();
            }
        }

        generateBtn.addEventListener('click', generateConsultation);
        loadOptions();
    }
});
