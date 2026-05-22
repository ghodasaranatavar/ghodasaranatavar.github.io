/**
 * ================================================================================
 * MODULE SPECIFICATION (RULE[user_global]): Case Study Dynamic Platform Logic
 * 1. Implementation Code: c:/xampp/htdocs/profile/project-detail.js
 * 2. Folder Structure:
 *    c:/xampp/htdocs/profile/
 *      - project-detail.js
 *      - project-detail.html
 *      - project-data.js
 * 3. API Routes: N/A (Frontend Javascript)
 * 4. Browser Testing Instructions:
 *    - Open project-detail.html?id=1 in a browser.
 *    - Open the browser developer console and verify no JS errors are present.
 *    - Verify that all new data elements (Executive Summary, Before vs After, AI opportunities) render properly.
 * 5. Expected Output: Flawless dynamic rendering of rich project details.
 * ================================================================================
 */

/**
 * Project Detail Module
 * Handles loading project-specific data, rendering layout sections,
 * managing interactive animations, dynamic SEO metadata, and scroll-to-top indicators.
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId || !window.projectData) {
        window.location.href = 'case-studies.html';
        return;
    }

    const data = window.projectData.find(p => p.id == projectId);
    if (!projectId || !data) {
        window.location.replace('404.html');
        return;
    }

    // Dynamic enrichment for specific case studies (1, 2, 3) to show custom narrative
    if (projectId == 1) {
        data.executiveSummary = {
            businessProblem: "Manual real estate outreach was leading to 40% of high-value inbound leads going cold due to response latency.",
            transformation: "Architected a metadata-driven Twilio SMS integration within Salesforce Flow and Apex Queueables, enabling autonomous, keyword-based lead follow-ups.",
            businessImpact: "Accelerated lead engagement speed by 85%, increased monthly lead qualifications by 60%, and fully automated 10k+ daily messages."
        };
        data.challengeDetail = {
            inefficiencies: "Sales representatives spent an average of 3 hours per day manually typing, tracking, and coordinating SMS follow-ups.",
            manualProcesses: "Lead qualification, response categorization, and routing in Salesforce were entirely manual, causing lead leakage.",
            bottlenecks: "Standard Salesforce governor limits were exceeded during peak lead hours due to synchronous HTTP calls to third-party endpoints."
        };
        data.beforeAfter = [
            { before: "Agents manually sent and tracked SMS outreach, losing up to 40% of cold leads.", after: "AI-ready response-branching engine qualifies leads 24/7 with zero agent effort." },
            { before: "SMS delivery tracking was siloed outside Salesforce with no central dashboards.", after: "Real-time delivery status tracking and engagement dashboards built directly in Salesforce LWC." }
        ];
        data.technicalImplementation = {
            apexArchitecture: "Engineered Queueable Apex classes with self-chaining algorithms to process outbound messages asynchronously in bulk.",
            lwcStructure: "Built a reactive LWC panel for templates mapping, utilizing custom properties and event-driven data streaming.",
            scalability: "Implemented platform cache and dynamic API key rotation to handle 10,000+ daily outbound payloads without database lockups."
        };
        data.aiOpportunities = [
            "Integrate generative AI to draft hyper-personalized SMS responses based on lead interaction history.",
            "Deploy autonomous agentic workflows to schedule calendar events automatically upon detecting positive intent.",
            "Utilize sentiment analysis on inbound SMS responses to automatically flag hot leads."
        ];
    } else if (projectId == 2) {
        data.executiveSummary = {
            businessProblem: "Enterprise sales representatives were wasting over 10 hours per week doing manual background research on prospect companies.",
            transformation: "Designed a native LWC utilizing Google Gemini Pro API to execute real-time company research, OCR analysis on uploaded pitch decks, and dynamic prompt engineering.",
            businessImpact: "Saved 12+ hours per week per sales rep, automated 100% of OCR parsing of intake documents, and enhanced data accuracy by 95%."
        };
        data.challengeDetail = {
            inefficiencies: "Account information was scattered across LinkedIn, company websites, and PDF reports, requiring manual copy-pasting.",
            manualProcesses: "OCR reading of prospect decks was done via third-party desktop apps, then typed manually into Salesforce fields.",
            bottlenecks: "Sales reps could not run analysis in real-time during live calls, causing delays in generating follow-up strategies."
        };
        data.beforeAfter = [
            { before: "Sales reps manually researched prospects, taking 30+ minutes per account.", after: "One-click Gemini AI panel generates a full, structured dossier in less than 5 seconds." },
            { before: "Manual upload and transcription of prospect pitch decks.", after: "Drag-and-drop OCR tool reads PDF text and automatically populates custom fields." }
        ];
        data.technicalImplementation = {
            apexArchitecture: "Developed highly optimized Apex callout handlers managing token-based authorization and payload compression for the Gemini API.",
            lwcStructure: "Designed a clean, tabbed LWC card that displays AI insights, raw OCR text, and suggested prompts with skeleton loaders.",
            scalability: "Implemented an Apex retry framework with custom exceptions to handle third-party AI rate limiting gracefully."
        };
        data.aiOpportunities = [
            "Enable autonomous matching of competitor keywords in prospect decks to trigger defensive battlecards.",
            "Apply predictive lead scoring by comparing Gemini-extracted account insights with historical win patterns.",
            "Deploy voice-to-text AI agents to listen to sales calls and automatically update CRM fields."
        ];
    } else if (projectId == 3) {
        data.executiveSummary = {
            businessProblem: "Hardcoded routing logic and tightly-coupled integrations were creating high technical debt and frequent deployment failures.",
            transformation: "Architected a fully metadata-driven configuration engine that allows business analysts to change routing and validation rules without code deployment.",
            businessImpact: "Reduced deployment cycles from weeks to minutes, cut code maintenance costs by 75%, and eliminated routing errors entirely."
        };
        data.challengeDetail = {
            inefficiencies: "Every new business routing rule required a full developer lifecycle: Apex coding, test classes writing, and sandbox deployment.",
            manualProcesses: "Validation audits were performed manually by running queries on transaction logs.",
            bottlenecks: "The deployment pipeline was blocked constantly by failing unit tests in legacy systems, halting urgent business changes."
        };
        data.beforeAfter = [
            { before: "Hardcoded Apex triggers required deployment windows and code coverage checks for minor changes.", after: "Business analyst dashboard allows point-and-click edits to active routing records." },
            { before: "Database lockups and governor limit failures during bulk record updates.", after: "Metadata engine dynamically queues execution pathways, preventing limit overflows." }
        ];
        data.technicalImplementation = {
            apexArchitecture: "Engineered a metadata reflection engine in Apex that parses Custom Metadata Types and executes dynamic class instantiations.",
            lwcStructure: "Created an administrative UI for rule creation, featuring drag-and-drop rule ordering and syntax highlighting.",
            scalability: "Leveraged Custom Cache partitions to store configuration data, reducing database query overhead to near zero."
        };
        data.aiOpportunities = [
            "Train an AI model to detect optimization bottlenecks in routing metadata and suggest rule merges.",
            "Deploy self-healing code generators that write and deploy XML metadata files based on verbal business requirements.",
            "Use anomaly detection algorithms to flag routing cycles or infinite loops before they execute."
        ];
    }

    // Fallbacks for all other projects to ensure high-fidelity layouts
    if (!data.executiveSummary) {
        data.executiveSummary = {
            businessProblem: data.operationalProblem || "Manual, error-prone workflows leading to high lead/data latency and low operational efficiency.",
            transformation: data.solutionStrategy || data.solution?.description || "Architected a scalable, custom Salesforce integration designed to automate core business logic and streamline data flows.",
            businessImpact: data.results?.[0] ? `${data.results[0].metric} improvement in ${data.results[0].label}.` : "Substantial reduction in manual overhead and enhanced system responsiveness."
        };
    }
    if (!data.challengeDetail) {
        data.challengeDetail = {
            inefficiencies: "Manual copy-pasting of data across siloed platforms and communication gaps between teams.",
            manualProcesses: "Record creation, notifications, and updates were executed manually without systemic checks.",
            bottlenecks: "Sync delays and lack of real-time visibility caused critical transactions to stall."
        };
    }
    if (!data.beforeAfter || data.beforeAfter.length === 0) {
        data.beforeAfter = [
            { before: "Siloed, manual processes causing operational delays and data entry errors.", after: "Centralized automation running in real-time within Salesforce CRM." },
            { before: "Fragmented visibility with no unified reporting structure.", after: "Live analytics dashboards showing key performance metrics instantly." }
        ];
    }
    if (!data.technicalImplementation) {
        data.technicalImplementation = {
            apexArchitecture: "Developed custom Apex triggers, helper classes, and queueable batch structures following separation of concerns.",
            lwcStructure: "Designed lightning web components with responsive design, error boundaries, and modern utility hooks.",
            scalability: "Built with a bulk-safe architecture, optimizing queries and resource consumption under governor limits."
        };
    }
    if (!data.aiOpportunities || data.aiOpportunities.length === 0) {
        data.aiOpportunities = [
            "Implement generative AI summaries for account interactions and status tracking.",
            "Deploy Einstein Predictive Analytics to forecast operational bottlenecks before they occur.",
            "Incorporate automated AI agents for automated response handling and routing workflows."
        ];
    }

    // 1. Hero, Titles & SEO
    document.title = `${data.title} | Salesforce Solution Case Study`;

    // Dynamic Meta Tags
    if (data.seo) {
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) descMeta.setAttribute('content', data.seo.description);
        
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) keywordsMeta.setAttribute('content', data.seo.keywords);

        // Open Graph Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', data.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', data.seo.description);

        if (data.gallery && data.gallery.length > 0) {
            const ogImage = document.querySelector('meta[property="og:image"]');
            const validOgImage = data.gallery.find(img => !img.url.includes('XXXXXX'));
            if (ogImage && validOgImage) {
                ogImage.setAttribute('content', window.location.origin + '/' + validOgImage.url);
            }
        }
    }

    document.getElementById('project-title').innerText = data.title;
    document.getElementById('client-industry').innerText = data.client.industry;

    // 2. Client Overview
    document.getElementById('overview-industry').innerText = data.client.industry;
    document.getElementById('overview-size').innerText = data.client.size;
    document.getElementById('overview-location').innerText = data.client.location;

    // 3. Problem Statement & Niche
    document.getElementById('who-is-this-for').innerText = data.whoIsThisFor;

    // New Storytelling Fields
    if (data.businessContext) document.getElementById('business-context').innerText = data.businessContext;
    if (data.operationalProblem) document.getElementById('operational-problem').innerText = data.operationalProblem;
    if (data.solutionStrategy) document.getElementById('solution-strategy').innerText = data.solutionStrategy;

    // Render Executive Summary
    if (data.executiveSummary) {
        const execSection = document.getElementById('executive-summary-section');
        if (execSection) {
            execSection.style.display = 'block';
            if (data.executiveSummary.businessProblem) document.getElementById('exec-business-problem').innerText = data.executiveSummary.businessProblem;
            if (data.executiveSummary.transformation) document.getElementById('exec-transformation').innerText = data.executiveSummary.transformation;
            if (data.executiveSummary.businessImpact) document.getElementById('exec-business-impact').innerText = data.executiveSummary.businessImpact;
        }
    }

    // Render Detailed Challenge
    if (data.challengeDetail) {
        const challengeSection = document.getElementById('challenge-detail-section');
        if (challengeSection) {
            challengeSection.style.display = 'block';
            if (data.challengeDetail.inefficiencies) document.getElementById('challenge-inefficiencies').innerText = data.challengeDetail.inefficiencies;
            if (data.challengeDetail.manualProcesses) document.getElementById('challenge-manual-processes').innerText = data.challengeDetail.manualProcesses;
            if (data.challengeDetail.bottlenecks) document.getElementById('challenge-bottlenecks').innerText = data.challengeDetail.bottlenecks;
        }
    }

    // Render Before vs After Comparison
    if (data.beforeAfter && data.beforeAfter.length > 0) {
        const beforeAfterSection = document.getElementById('before-after-section');
        const beforeAfterTbody = document.getElementById('before-after-tbody');
        if (beforeAfterSection && beforeAfterTbody) {
            beforeAfterSection.style.display = 'block';
            beforeAfterTbody.innerHTML = '';
            data.beforeAfter.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.before}</td>
                    <td>${row.after}</td>
                `;
                beforeAfterTbody.appendChild(tr);
            });
        }
    }

    // Render Technical Implementation Details
    if (data.technicalImplementation) {
        const techImplSection = document.getElementById('technical-implementation-section');
        if (techImplSection) {
            techImplSection.style.display = 'block';
            if (data.technicalImplementation.apexArchitecture) document.getElementById('tech-apex-architecture').innerText = data.technicalImplementation.apexArchitecture;
            if (data.technicalImplementation.lwcStructure) document.getElementById('tech-lwc-structure').innerText = data.technicalImplementation.lwcStructure;
            if (data.technicalImplementation.scalability) document.getElementById('tech-scalability').innerText = data.technicalImplementation.scalability;
        }
    }

    // Render AI Opportunity Layer
    if (data.aiOpportunities && data.aiOpportunities.length > 0) {
        const aiSection = document.getElementById('ai-opportunities-section');
        const aiList = document.getElementById('ai-opportunities-list');
        if (aiSection && aiList) {
            aiSection.style.display = 'block';
            aiList.innerHTML = '';
            data.aiOpportunities.forEach(opp => {
                const li = document.createElement('li');
                li.className = 'solution-item';
                li.innerHTML = `<i class="ph ph-sparkle" style="color:var(--lab-palette-accent-pink); font-size:1.2rem; flex-shrink:0;"></i><span>${opp}</span>`;
                aiList.appendChild(li);
            });
        }
    }

    // 4. Objectives
    const objList = document.getElementById('objective-list');
    if (objList) {
        objList.innerHTML = '';
        data.objective.forEach(obj => {
            const li = document.createElement('li');
            li.className = 'solution-item';
            li.innerHTML = `<i class="ph ph-target" style="color:var(--lab-palette-primary-main); font-size:1.2rem; flex-shrink:0;"></i><span>${obj}</span>`;
            objList.appendChild(li);
        });
    }

    // 5. Solution
    document.getElementById('solution-desc').innerText = data.solution.description;
    const solGrid = document.getElementById('solution-highlights');
    if (solGrid) {
        solGrid.innerHTML = '';
        data.solution.highlights.forEach(high => {
            const div = document.createElement('div');
            div.className = 'solution-item';
            div.innerHTML = `<i class="ph ph-check-circle" style="color:var(--lab-palette-accent-green); font-size:1.2rem; flex-shrink:0;"></i><span>${high}</span>`;
            solGrid.appendChild(div);
        });
    }

    // 6. Metrics & Results Bar
    const metricsGrid = document.getElementById('metrics-grid');
    const topBar = document.getElementById('top-results-bar');

    if (metricsGrid) metricsGrid.innerHTML = '';
    if (topBar) topBar.innerHTML = '';

    data.results.forEach((res, index) => {
        // Sidebar Metrics
        if (metricsGrid) {
            const div = document.createElement('div');
            div.className = 'metric-card-small';
            div.innerHTML = `<span class="metric-value">${res.metric}</span><span class="metric-label">${res.label}</span>`;
            metricsGrid.appendChild(div);
        }

        // Top Results Bar (First 3)
        if (index < 3 && topBar) {
            const barDiv = document.createElement('div');
            barDiv.className = 'result-impact-item';
            barDiv.innerHTML = `
                <span class="result-impact-value">${res.metric}</span>
                <span class="result-impact-label">${res.label}</span>
            `;
            topBar.appendChild(barDiv);
        }
    });

    // 6.5. System Architecture
    if (data.architecture) {
        const archSection = document.getElementById('architecture-section');
        const archDiagram = document.getElementById('architecture-diagram');
        if (archSection && archDiagram) {
            archSection.style.display = 'block';
            archDiagram.innerHTML = data.architecture;
            // Re-initialize mermaid for the dynamic content
            if (window.mermaid) {
                mermaid.init(undefined, archDiagram);
            }
        }
    }

    // 7. Dynamic Tech Stack & Role
    const techContainer = document.getElementById('tech-sections-container');

    // Populate Role Widget
    if (data.myRole) {
        const roleEl = document.getElementById('project-role');
        if (roleEl) roleEl.innerText = data.myRole;
    }
    
    const complexityContainer = document.getElementById('complexity-pills');
    if (complexityContainer) {
        complexityContainer.innerHTML = '';
        if (data.technicalComplexity) {
            data.technicalComplexity.forEach(item => {
                const span = document.createElement('span');
                span.className = 'tech-pill';
                span.style.background = 'var(--lab-palette-accent-pink)';
                span.innerText = item;
                complexityContainer.appendChild(span);
            });
        }
    }

    // Populate Gallery
    if (data.gallery && data.gallery.length > 0) {
        const gallerySection = document.getElementById('gallery-section');
        const galleryGrid = document.getElementById('project-gallery');

        // Filter images based on visibility flag and placeholder tags
        const visibleImages = data.gallery.filter(item => item.showOnDetail !== false && !item.url.includes('XXXXXX'));

        if (visibleImages.length > 0 && gallerySection && galleryGrid) {
            gallerySection.style.display = 'block';
            galleryGrid.innerHTML = '';
            visibleImages.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <img src="${item.url}" alt="${item.caption}" class="gallery-img" onerror="this.parentElement.style.display='none';">
                    <p class="gallery-caption">${item.caption}</p>
                `;
                galleryGrid.appendChild(div);
            });
        }
    }

    // Helper to add a tech section
    const addTechSection = (label, items, isAccent = false) => {
        if (!items || items.length === 0 || !techContainer) return;

        const section = document.createElement('div');
        section.style.marginBottom = '15px';

        const labelEl = document.createElement('label');
        labelEl.className = 'info-item label';
        labelEl.style.cssText = 'color:var(--lab-text-subtle); font-weight:700; display:block; margin-bottom:8px;';
        labelEl.innerText = label;

        const pillContainer = document.createElement('div');
        pillContainer.className = 'tech-pills';

        items.forEach(item => {
            const span = document.createElement('span');
            span.className = 'tech-pill';
            if (isAccent) span.style.background = 'var(--lab-palette-accent-pink)';
            span.innerText = item;
            pillContainer.appendChild(span);
        });

        section.appendChild(labelEl);
        section.appendChild(pillContainer);
        techContainer.appendChild(section);
    };

    // Populate Tech Stack
    if (techContainer) {
        techContainer.innerHTML = '';
        if (data.techStack) {
            addTechSection('Primary Platform', data.techStack.salesforce);
            const secondaryTools = [...(data.techStack.tools || []), ...(data.techStack.integrations || [])];
            addTechSection('Technical Stack', secondaryTools, true);
        }
    }

    // 8. feedback & takeaways
    if (data.feedback) {
        const feedbackEl = document.getElementById('client-feedback');
        if (feedbackEl) feedbackEl.innerText = `"${data.feedback}"`;
    }

    const takeList = document.getElementById('takeaways-list');
    if (takeList) {
        takeList.innerHTML = '';
        data.takeaways.forEach(take => {
            const div = document.createElement('div');
            div.className = 'solution-item';
            div.style.borderLeft = '4px solid var(--lab-palette-accent-green)';
            div.innerHTML = `<i class="ph ph-lightbulb" style="color:var(--lab-palette-accent-green); font-size:1.2rem; flex-shrink:0;"></i><span>${take}</span>`;
            takeList.appendChild(div);
        });
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Floating CTA Toggle Logic
    window.addEventListener('scroll', () => {
        const floatingCta = document.getElementById('floating-cta');
        if (floatingCta) {
            if (window.scrollY > 800) {
                floatingCta.classList.add('visible');
            } else {
                floatingCta.classList.remove('visible');
            }
        }
    });

    // Scroll-to-Top Button with Progress Fill
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        const updateScrollBtn = () => {
            const scrollY = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;

            if (scrollY > 300) {
                scrollTopBtn.classList.add('visible');
                scrollTopBtn.style.setProperty('--scroll-progress', scrollProgress);
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', updateScrollBtn, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        updateScrollBtn(); // run once on load
    }
});
