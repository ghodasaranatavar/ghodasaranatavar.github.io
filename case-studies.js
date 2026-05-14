/**
 * Case Studies Hub Logic
 * Handles dynamic rendering of challenges, featured spotlight, and project grid.
 */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('case-study-grid');
    const featuredContainer = document.getElementById('featured-spotlight');
    const problemsGrid = document.getElementById('problems-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    /**
     * Render operational challenges from project data
     */
    const renderChallenges = () => {
        if (!window.projectData) return;

        problemsGrid.innerHTML = window.projectData
            .map(p => {
                const challenge = p.challenge;
                if (!challenge) return '';
                return `
                    <div class="problem-card reveal">
                        <div class="problem-icon"><i class="${challenge.icon}"></i></div>
                        <h3>${challenge.title}</h3>
                        <p>${challenge.description}</p>
                    </div>
                `;
            })
            .join('');
    };

    /**
     * Render the flagship implementation spotlight
     */
    const renderFeaturedProject = () => {
        if (!window.projectData) return;
        
        // Find project specifically marked as Hub Featured, fallback to ID 6
        const featured = window.projectData.find(p => p.hubFeatured) || window.projectData.find(p => p.id == 6);
        if (!featured) return;

        featuredContainer.innerHTML = `
            <div class="section-header reveal" style="text-align: center; margin: 0 auto;">
                <span class="tech-logo" style="background:var(--lab-palette-accent-pink); color:white; border:none; margin-bottom: 20px;">Flagship Implementation</span>
                <h2 style="color:white;">Featured Enterprise Solution</h2>
            </div>
            <div class="spotlight-card reveal" style="margin-top: 50px;">
                <div class="spotlight-content">
                    <span class="tech-logo" style="background:rgba(255,255,255,0.1); color:white; border:none; margin-bottom: 20px;">${featured.client.industry}</span>
                    <h3>${featured.title}</h3>
                    <p>${featured.seo.description}</p>

                    <div class="proof-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 40px;">
                        ${featured.results.slice(0, 3).map(res => `
                            <div class="proof-item">
                                <span class="proof-val">${res.metric}</span>
                                <span class="proof-label">${res.label}</span>
                            </div>
                        `).join('')}
                    </div>

                    <a href="project-detail.html?id=${featured.id}" class="btn-primary" style="background:var(--lab-palette-primary-main);">View Solution <i class="ph ph-arrow-right" style="margin-left:8px;"></i></a>
                </div>
                <div class="spotlight-visual">
                    <img src="${featured.gallery.find(img => img.showOnSpotlight)?.url || featured.gallery.find(img => img.showOnHub !== false)?.url || featured.gallery[0].url}" alt="Architecture" style="width:100%; border-radius:var(--radius-lg); box-shadow:var(--lab-shadow-heavy);">
                </div>
            </div>
        `;
    };

    /**
     * Render project grid with filtering capability
     */
    const renderProjects = (filter = 'all') => {
        if (!window.projectData) return;
        
        grid.innerHTML = '';
        window.projectData.forEach(project => {
            if (filter !== 'all') {
                const matchesNiche = project.niche.toLowerCase().includes(filter.toLowerCase());
                const matchesTech = project.technicalComplexity.some(t => t.toLowerCase().includes(filter.toLowerCase()));
                const matchesTitle = project.title.toLowerCase().includes(filter.toLowerCase());
                if (!matchesNiche && !matchesTech && !matchesTitle) return;
            }

            const card = document.createElement('div');
            card.className = 'case-card reveal';
            const primaryResult = project.results[0] || { metric: 'Impact', label: 'Solution' };
            const hasImage = project.gallery && project.gallery.length > 0;

            card.innerHTML = `
                <div class="card-top-metric">
                    <div class="metric-visual">
                        <span class="primary-result">${primaryResult.metric}</span>
                        <span class="result-label" style="display:block; margin-top:2px;">${primaryResult.label}</span>
                    </div>
                    <span class="tech-logo" style="background:var(--lab-palette-accent-pink); color:white; border:none; padding:4px 10px;">${project.client.industry}</span>
                </div>
                <div class="card-visual" style="height: 200px; overflow: hidden; background: #f8fafc; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--lab-border-light);">
                    ${hasImage 
                        ? `<img src="${project.gallery.find(img => img.showOnHub !== false)?.url || project.gallery[0].url}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover; transition: transform 0.5s ease;">`
                        : `<div style="text-align: center; color: #cbd5e1;"><i class="ph ph-image" style="font-size: 3rem; opacity: 0.5;"></i></div>`
                    }
                </div>
                <div class="case-card-body">
                    <h3>${project.title}</h3>
                    <p class="case-summary">${project.seo.description}</p>
                    <div class="tech-pills" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:15px;">
                        ${project.techStack.salesforce.slice(0, 2).map(t => `<span class="tech-pill" style="background:#f1f5f9; color:var(--lab-palette-primary-main); padding:4px 10px; border-radius:100px; font-size:11px; font-weight:700;">${t}</span>`).join('')}
                        ${project.techStack.integrations.length > 0 ? `<span class="tech-pill" style="background:rgba(234,23,99,0.1); color:var(--lab-palette-accent-pink); padding:4px 10px; border-radius:100px; font-size:11px; font-weight:700;">${project.techStack.integrations[0]}</span>` : ''}
                    </div>
                    <a href="project-detail.html?id=${project.id}" class="btn-primary" style="margin-top:25px; width:100%;">View Case Study <i class="ph ph-arrow-right" style="margin-left:8px;"></i></a>
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Re-observe revealed elements after grid update
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    // Filter button event listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Floating CTA visibility on scroll
    window.addEventListener('scroll', () => {
        const floatingCta = document.getElementById('floating-cta');
        if (!floatingCta) return;
        
        if (window.scrollY > 800) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    });

    // Initial Render
    renderFeaturedProject();
    renderChallenges();
    renderProjects();
    
    // Observe initial revealed elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
