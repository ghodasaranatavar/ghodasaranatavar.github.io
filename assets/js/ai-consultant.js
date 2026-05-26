/**
 * ================================================================================
 * MODULE SPECIFICATION (RULE[user_global]): AI Consulting Frontend Interface
 * 1. Implementation Code: c:/xampp/htdocs/profile/assets/js/ai-consultant.js
 * 2. Folder Structure:
 *    c:/xampp/htdocs/profile/
 *      - assets/js/
 *        - ai-consultant.js
 * 3. API Routes: N/A (Frontend Javascript Client)
 * 4. Browser Testing Instructions:
 *    - Open home page, click floating AI Consultant bubble.
 *    - Click on different tools (e.g. AI Workflow Generator).
 *    - Enter industry, challenge, goals, then click "Generate Recommendation".
 * 5. Expected Output: Polished AI modal opens, displays 8 active tools with matching icons, handles inputs dynamically, and renders strategic advice.
 * ================================================================================
 */

// Smart API Base URL: switches between local dev and production automatically
const AI_API_BASE_URL = (() => {
    const host = window.location.hostname;
    if (host === 'lightcloudcrm.com' || host === 'www.lightcloudcrm.com') {
        return 'https://lightcloudcrm.com/api/';
    }
    return `${window.location.origin}/profile/api/`;
})();

// Inline AI Panel HTML — avoids cross-origin fetch (GitHub Pages cannot send CORS headers)
const AI_PANEL_HTML = `
<!-- AI Consulting Accelerator Component -->
<div class="ai-consulting-panel" id="aiConsultingPanel">
    <button class="ai-modal-close-global" id="aiModalCloseGlobal" aria-label="Close AI Consultant">
        <i class="ph ph-x"></i>
    </button>
    
    <div class="ai-panel-layout">
        <!-- Left Panel: Context & Mode Selection -->
        <div class="ai-panel-left">
            <div class="ai-form-divider" style="margin: 5px 0 15px;"><span>Select Tool</span></div>
            
            <!-- 8 Consulting Tools Grid (Left) -->
            <div class="ai-tools-grid" id="aiToolsGrid">
                <!-- Tools injected here -->
            </div>
        </div>

        <!-- Right Panel: Dynamic Inquiry Form -->
        <div class="ai-panel-right">
            <div class="ai-form-container">
                <!-- Unified Header: Replaces both Badge and Strategic Inquiry -->
                <div class="ai-panel-header" style="margin-bottom: 25px; border-bottom: 1px solid rgba(51, 96, 173, 0.08); padding-bottom: 15px;">
                    <h3 id="aiInquiryTitle" style="color: var(--ai-primary); font-size: 1.4rem; font-weight: 800; margin: 0;">
                        <i class="ph ph-strategy"></i> Strategic Inquiry
                    </h3>
                    <p id="aiInquirySubtitle" style="font-size: 0.9rem; margin-top: 5px; color: var(--lab-text-subtle);">Provide details to generate a production-grade Salesforce blueprint.</p>
                </div>

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
                                <input type="text" id="aiGoalSearch" placeholder="e.g. Automation..." autocomplete="off">
                            </div>
                            <div class="ai-suggestions" id="aiGoalSuggestions"></div>
                        </div>
                    </div>

                    <div class="ai-field-group">
                        <label>Target Clouds</label>
                        <div class="ai-search-container">
                            <div class="ai-tags-input" id="aiCloudTags">
                                <input type="text" id="aiCloudSearch" placeholder="e.g. Sales Cloud..." autocomplete="off">
                            </div>
                            <div class="ai-suggestions" id="aiCloudSuggestions"></div>
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
                    <textarea id="aiChallenge" placeholder="Describe your technical bottleneck or business requirement..."></textarea>
                </div>

                <div class="ai-action-area">
                    <button class="btn-ai-generate" id="btnAiGenerate" disabled>
                        <i class="fas fa-wand-magic-sparkles"></i> Generate Recommendation
                    </button>
                </div>
            </div>

            <!-- Loading State -->
            <div class="ai-loading" id="aiLoading">
                <div class="ai-spinner-box">
                    <div class="ai-spinner"></div>
                    <p>Analyzing industry patterns/knowledge...</p>
                </div>
            </div>

            <!-- Response Area -->
            <div class="ai-response-container" id="aiResponse">
                <div class="ai-response-actions">
                    <button class="ai-response-close" id="aiResponseClose" title="Close Response">
                        <i class="ph ph-x"></i>
                    </button>
                </div>
                <div class="ai-response-content" id="aiResultContent"></div>
                
                <div class="ai-unified-cta" id="aiUnifiedCTA">
                    <h2>Ready to Architect Your Success?</h2>
                    <p>Let's discuss how to turn these recommendations into a live, high-performing Salesforce ecosystem.</p>
                    <button class="btn-unified-book calendly-trigger">
                        <i class="ph ph-calendar-check"></i> Book Architecture Call
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

window.aiConsultant = {
    togglePanel: function (isOpen) {
        const panel = document.getElementById('aiConsultingPanel');
        const overlay = document.getElementById('aiModalOverlay');
        const isActive = panel.classList.contains('active');
        const shouldOpen = isOpen !== undefined ? isOpen : !isActive;

        if (shouldOpen) {
            panel.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Context-Aware Pre-fill Logic
            this.handleContextualPrefill();
        } else {
            panel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    handleContextualPrefill: function () {
        const industrySelect = document.getElementById('aiIndustry');
        if (!industrySelect) return;

        // 1. More robust detection: Look for 'Industry' label specifically
        let projectIndustry = "";
        const metaValues = document.querySelectorAll('.meta-item');
        metaValues.forEach(item => {
            const label = item.querySelector('label')?.innerText || "";
            if (label.toLowerCase().includes('industry')) {
                projectIndustry = item.querySelector('.meta-value')?.innerText || "";
            }
        });

        if (projectIndustry) {
            const options = Array.from(industrySelect.options);
            const match = options.find(opt =>
                projectIndustry.toLowerCase().includes(opt.text.toLowerCase()) ||
                opt.text.toLowerCase().includes(projectIndustry.toLowerCase())
            );
            if (match) {
                industrySelect.value = match.value;
                // Trigger validation after pre-fill
                if (typeof this.checkFormValidity === 'function') this.checkFormValidity();
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // BUG FIX: Initialization Guard - prevent duplicates
    if (document.getElementById('aiModalOverlay')) return;

    // Session Tracking Setup
    let sessionId = sessionStorage.getItem('tracking_session_id');
    if (!sessionId) {
        sessionId = 'sess_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('tracking_session_id', sessionId);
    }

    async function trackEvent(eventType, details = {}) {
        const payload = {
            event_type: eventType,
            session_id: sessionStorage.getItem('tracking_session_id'),
            consultation_id: sessionStorage.getItem('last_consultation_id') ? parseInt(sessionStorage.getItem('last_consultation_id')) : null,
            tool_slug: sessionStorage.getItem('last_tool_slug') || (window.aiConsultant ? window.aiConsultant.activeToolSlug : null),
            provider_used: sessionStorage.getItem('last_provider_used') || null,
            model_used: sessionStorage.getItem('last_model_used') || null,
            ...details
        };
        try {
            await fetch(AI_API_BASE_URL + 'track-conversion.php?action=track_event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            console.error('Tracking Error:', err);
        }
    }
    window.trackConversionEvent = trackEvent; // Expose globally for scheduler.js to call!

    // Click interceptor for all booking triggers on the page
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.calendly-trigger');
        if (trigger) {
            const ctaId = trigger.id || trigger.className || 'generic-cta';
            trackEvent('cta_click', { cta_element_id: ctaId });
        }
    });

    // 1. Create Modal Infrastructure
    const overlay = document.createElement('div');
    overlay.id = 'aiModalOverlay';
    overlay.className = 'ai-modal-overlay';
    document.body.appendChild(overlay);

    const panelContainer = document.createElement('div');
    panelContainer.id = 'aiPanelGlobalContainer';
    panelContainer.innerHTML = AI_PANEL_HTML;
    document.body.appendChild(panelContainer);

    // 2. Create and Inject FAB
    const fab = document.createElement('button');
    fab.id = 'aiSideTrigger';
    fab.className = 'ai-side-trigger';
    fab.setAttribute('aria-label', 'Open AI Consultant');
    fab.innerHTML = `<i class="ph-fill ph-sparkle"></i><span>AI Consultant</span>`;
    document.body.appendChild(fab);

    // 3. Event Listeners for Closing
    overlay.addEventListener('click', () => window.aiConsultant.togglePanel(false));

    const closeBtn = document.getElementById('aiModalCloseGlobal');
    if (closeBtn) closeBtn.addEventListener('click', () => window.aiConsultant.togglePanel(false));

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
        const btnDownloadPdf = document.getElementById('btnDownloadPdf');
        const aiResponseClose = document.getElementById('aiResponseClose');
        
        // Expose validation for global access
        window.aiConsultant.checkFormValidity = checkFormValidity;

        if (!generateBtn) return;

        // --- Form Validation Logic ---
        function checkFormValidity() {
            const ind = industrySelect.value;
            // Valid when explicit goals are selected OR a tool card is active (provides implicit goal context)
            const hasGoals = selectedGoals.size > 0 || !!window.aiConsultant.activeTool;
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
            "Data Migration", "Security Audit", "User Training",
            "Workforce Automation", "Billing & Invoicing", "Document Orchestration",
            "Licensing & Permitting", "E-commerce Integration", "MLS Synchronization",
            "OHS Compliance", "Asynchronous Processing", "Generative AI Integration",
            "OCR Automation"
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
            "Experience Cloud", "Data Cloud", "MuleSoft", "Tableau", "Slack",
            "Public Sector Solutions", "Field Service Lightning"
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
                        'integration-advisor': 'ph ph-plugs-connected',
                        'roi-estimator': 'ph ph-chart-line-up',
                        'consulting-assistant': 'ph ph-users-three',
                        'agenda-generator': 'ph ph-list-checks',
                        'cloud-recommender': 'ph ph-shield-check',
                        'architect-assistant': 'ph ph-sketch-logo',
                        'workflow-generator': 'ph ph-flow-arrow'
                    };

                    let isInitialLoad = true;
                    data.tools.forEach(tool => {
                        const card = document.createElement('div');
                        card.className = 'ai-tool-card';
                        card.innerHTML = `
                            <div class="ai-tool-icon"><i class="${icons[tool.slug] || 'ph ph-sparkle'}"></i></div>
                            <div class="ai-tool-content">
                                <h4>${tool.name}</h4>
                                <p>${tool.description}</p>
                            </div>
                        `;

                        card.addEventListener('click', () => {
                            document.querySelectorAll('.ai-tool-card').forEach(c => c.classList.remove('active'));
                            card.classList.add('active');

                            // Reset tags when a specialized tool is chosen
                            selectedGoals.clear();
                            renderTags();
                            window.aiConsultant.activeTool = tool.name;
                            window.aiConsultant.activeToolSlug = tool.slug;

                            // Update Header Dynamically to save space
                            const titleEl = document.getElementById('aiInquiryTitle');
                            if (titleEl) titleEl.innerHTML = `<i class="ph ph-sparkle"></i> ${tool.name}`;

                            const subtitleEl = document.getElementById('aiInquirySubtitle');
                            if (subtitleEl) subtitleEl.textContent = `Using a specialized Gen-AI tool to architect your ${tool.name} requirements.`;

                            challengeText.placeholder = `Describe your ${tool.name} requirements...`;
                            
                            // BUG FIX: Immediate validation on tool click
                            checkFormValidity();

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

        // --- Download PDF Logic (Currently Disabled) ---

        // --- AI to Scheduler Bridge ---
        const btnBookCall = document.getElementById('aiUnifiedCTA')?.querySelector('.btn-unified-book');
        
        // Use delegation for buttons inside the response area
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-unified-book')) {
                const consult = window.aiConsultant.lastConsultation;
                if (!consult) {
                    if (window.openSchedulerWithAI) window.openSchedulerWithAI("");
                    return;
                }

                const agendaLines = [
                    `<strong>Discovery Agenda: AI-Driven Architecture Review</strong>`,
                    `<ul>`,
                    `<li><strong>Industry Focus:</strong> ${consult.industry}</li>`,
                    `<li><strong>Consulting Category:</strong> ${consult.goal}</li>`,
                    `<li><strong>Target Ecosystem:</strong> ${consult.clouds || 'Not Specified'}</li>`,
                    `<li><strong>Operational Challenge:</strong> ${consult.challenge}</li>`,
                    `<li><strong>AI Preliminary Focus:</strong> ${consult.recommendation}</li>`,
                    `</ul>`,
                    `<p><i>Automated discovery notes from AI Consulting Assistant.</i></p>`
                ];

                const agendaHtml = agendaLines.join('');
                window.aiConsultant.togglePanel(false);
                if (window.openSchedulerWithAI) {
                    window.openSchedulerWithAI(agendaHtml);
                }
            }
        });

        async function generateConsultation() {
            // Prefer the user's explicit goal tags; fall back to the active tool name only if no tags are selected
            const finalGoal = selectedGoals.size > 0
                ? Array.from(selectedGoals).join(', ')
                : (window.aiConsultant.activeTool || '');
            const payload = {
                industry_id: industrySelect.value,
                goal: finalGoal,
                tool_slug: window.aiConsultant.activeToolSlug || '',
                clouds: Array.from(selectedClouds).join(', '),
                team_size: teamSizeSelect.value,
                challenge: challengeText.value,
                session_id: sessionStorage.getItem('tracking_session_id')
            };

            if (!payload.industry_id || !payload.goal) {
                alert('Please select an Industry and at least one Goal.');
                return;
            }

            generateBtn.disabled = true;
            const rightPanel = document.querySelector('.ai-panel-right');
            if (rightPanel) {
                rightPanel.scrollTop = 0;
                rightPanel.style.overflowY = 'hidden';
            }

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

                if (data.success) {
                    if (data.consultation_id) {
                        sessionStorage.setItem('last_consultation_id', data.consultation_id);
                    }
                    sessionStorage.setItem('last_tool_slug', window.aiConsultant.activeToolSlug || '');
                    sessionStorage.setItem('last_provider_used', data.metadata?.provider_used || '');
                    sessionStorage.setItem('last_model_used', data.metadata?.model_used || '');

                    window.aiConsultant.lastConsultation = {
                        industry: industrySelect.options[industrySelect.selectedIndex].text,
                        goal: finalGoal,
                        clouds: Array.from(selectedClouds).join(', '),
                        challenge: challengeText.value,
                        recommendation: data.recommendation.substring(0, 300) + '...'
                    };

                    let html = data.recommendation
                        .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
                        .replace(/^## (.*?)$/gm, '<h3>$1</h3>')
                        .replace(/^### (.*?)$/gm, '<h4>$1</h4>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/^\- (.*?)$/gm, '<li>$1</li>')
                        .replace(/^\* (.*?)$/gm, '<li>$1</li>')
                        .replace(/\n\n/g, '</p><p>')
                        .replace(/\n/g, '<br>');

                    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>').replace(/<\/ul><ul>/g, '');
                    resultContent.innerHTML = `<p>${html}</p>`;
                    responseArea.classList.add('active');
                    unifiedCTA?.classList.add('active');
                    
                    const globalCTA = document.querySelector('.cta-section, #ready-to-jump-start');
                    if (globalCTA) globalCTA.style.display = 'none';

                    responseArea.scrollIntoView({ behavior: 'smooth' });
                } else {
                    alert('Backend Error: ' + (data.error || 'Unknown error.'));
                }
            } catch (err) {
                console.error('AI Consulting Error:', err);
            } finally {
                loadingArea.classList.remove('active');
                if (rightPanel) rightPanel.style.overflowY = 'auto';
                checkFormValidity();
            }
        }

        generateBtn.addEventListener('click', generateConsultation);
        loadOptions();
    }
});
