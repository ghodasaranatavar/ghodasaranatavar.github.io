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
            if (ogImage) {
                ogImage.setAttribute('content', window.location.origin + '/' + data.gallery[0].url);
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

        // Filter images based on visibility flag
        const visibleImages = data.gallery.filter(item => item.showOnDetail !== false);

        if (visibleImages.length > 0 && gallerySection && galleryGrid) {
            gallerySection.style.display = 'block';
            galleryGrid.innerHTML = '';
            visibleImages.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <img src="${item.url}" alt="${item.caption}" class="gallery-img">
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
