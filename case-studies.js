/**
 * Case Studies Hub Logic
 * Handles dynamic rendering of challenges, featured spotlight, project grid,
 * dynamic filtering, sorting, and smooth pagination.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const PROJECTS_PER_PAGE = 6;
    
    // State Management
    let currentState = {
        filter: 'all',
        sort: 'newest',
        currentPage: 1
    };

    // DOM Elements
    const grid = document.getElementById('case-study-grid');
    const featuredContainer = document.getElementById('featured-spotlight');
    const problemsGrid = document.getElementById('problems-grid');
    const dynamicFiltersContainer = document.getElementById('dynamic-filters');
    const sortSelect = document.getElementById('project-sort');
    const paginationContainer = document.getElementById('pagination-container');

    /**
     * Intersection Observer for scroll animations
     */
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    /**
     * Render operational challenges from project data
     */
    const renderChallenges = () => {
        if (!window.projectData) return;

        // De-duplicate challenges by title to avoid repetition
        const uniqueChallenges = [];
        const seenTitles = new Set();

        window.projectData.forEach(p => {
            if (p.challenge && p.challenge.title && !seenTitles.has(p.challenge.title)) {
                uniqueChallenges.push(p.challenge);
                seenTitles.add(p.challenge.title);
            }
        });

        problemsGrid.innerHTML = uniqueChallenges
            .map(challenge => {
                return `
                    <div class="problem-card reveal">
                        <div class="problem-icon"><i class="${challenge.icon}"></i></div>
                        <h3>${challenge.title}</h3>
                        <p>${challenge.description}</p>
                    </div>
                `;
            })
            .join('');
            
        problemsGrid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    /**
     * Render the flagship implementation spotlight
     */
    const renderFeaturedProject = () => {
        if (!window.projectData) return;
        
        const featured = window.projectData.find(p => p.hubFeatured) || window.projectData.find(p => p.id == 6);
        if (!featured) return;

        // Check for a real, valid image (filtering out placeholders like XXXXXX)
        const validFeaturedImage = featured.gallery && featured.gallery.length > 0 
            ? featured.gallery.find(img => img.showOnHub !== false && !img.url.includes('XXXXXX'))
            : null;

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
                ${validFeaturedImage ? `
                <div class="spotlight-visual">
                    <img src="${validFeaturedImage.url}" alt="Architecture" style="width:100%; border-radius:var(--radius-lg); box-shadow:var(--lab-shadow-heavy);" onerror="this.parentElement.style.display='none';">
                </div>` : ''}
            </div>
        `;
        featuredContainer.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    /**
     * Generate dynamic filters from project data
     */
    const generateFilters = () => {
        if (!window.projectData) return;

        // Get unique industries
        const industries = [...new Set(window.projectData.map(p => p.client.industry))].sort();
        
        // Get unique technologies (most relevant ones)
        const allTech = [];
        window.projectData.forEach(p => {
            if (p.techStack && p.techStack.salesforce) {
                p.techStack.salesforce.forEach(t => allTech.push(t));
            }
        });
        const topTech = [...new Set(allTech)].slice(0, 8).sort();
        
        let filterHtml = `<button class="filter-chip active" data-filter="all" data-type="all">All Solutions</button>`;
        
        // Add Industry chips
        industries.forEach(industry => {
            filterHtml += `<button class="filter-chip" data-filter="${industry}" data-type="industry">${industry}</button>`;
        });

        // Add Tech chips
        topTech.forEach(tech => {
            filterHtml += `<button class="filter-chip" data-filter="${tech}" data-type="tech">${tech}</button>`;
        });

        dynamicFiltersContainer.innerHTML = filterHtml;

        // Add event listeners to chips
        dynamicFiltersContainer.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                dynamicFiltersContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                
                currentState.filter = chip.dataset.filter;
                currentState.filterType = chip.dataset.type;
                currentState.currentPage = 1;
                renderProjects();
            });
        });
    };

    /**
     * Render projects based on current filter, sort, and page
     */
    const renderProjects = () => {
        if (!window.projectData) return;
        
        // 1. Filter
        let filteredProjects = window.projectData.filter(project => {
            if (currentState.filter === 'all') return true;
            if (currentState.filterType === 'industry') {
                return project.client.industry === currentState.filter;
            }
            if (currentState.filterType === 'tech') {
                return project.techStack.salesforce.includes(currentState.filter) || 
                       project.techStack.tools.includes(currentState.filter) ||
                       project.techStack.integrations.includes(currentState.filter);
            }
            return true;
        });

        // 2. Sort
        filteredProjects.sort((a, b) => {
            if (currentState.sort === 'newest') return b.id - a.id;
            if (currentState.sort === 'oldest') return a.id - b.id;
            if (currentState.sort === 'title-asc') return a.title.localeCompare(b.title);
            if (currentState.sort === 'title-desc') return b.title.localeCompare(a.title);
            return 0;
        });

        // 3. Paginate
        const totalProjects = filteredProjects.length;
        const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
        const startIndex = (currentState.currentPage - 1) * PROJECTS_PER_PAGE;
        const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

        // Smooth visual transition
        grid.classList.add('loading');
        
        setTimeout(() => {
            grid.innerHTML = '';
            
            if (paginatedProjects.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 100px 0; color: var(--lab-text-light);">No projects found matching your selection.</div>';
            } else {
                paginatedProjects.forEach(project => {
                    const card = document.createElement('div');
                    card.className = 'case-card reveal';
                    const primaryResult = project.results[0] || { metric: 'Impact', label: 'Solution' };
                    
                    // Check for a real, valid image (filtering out placeholders like XXXXXX)
                    const validImage = project.gallery && project.gallery.length > 0 
                        ? project.gallery.find(img => img.showOnHub !== false && !img.url.includes('XXXXXX'))
                        : null;

                    card.innerHTML = `
                        <div class="card-top-metric">
                            <div class="metric-visual">
                                <span class="primary-result">${primaryResult.metric}</span>
                                <span class="result-label" style="display:block; margin-top:2px;">${primaryResult.label}</span>
                            </div>
                            <span class="tech-logo" style="background:var(--lab-palette-accent-pink); color:white; border:none; padding:4px 10px;">${project.client.industry}</span>
                        </div>
                        ${validImage ? `
                        <div class="card-visual" style="height: 200px; overflow: hidden; background: #f8fafc; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--lab-border-light);">
                            <img src="${validImage.url}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover;" onerror="this.parentElement.style.display='none';">
                        </div>` : ''}
                        <div class="case-card-body">
                            <h3>${project.title}</h3>
                            <p class="case-summary">${project.seo.description.substring(0, 120)}...</p>
                            <div class="tech-pills" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:15px;">
                                ${project.techStack.salesforce.slice(0, 2).map(t => `<span class="tech-pill" style="background:#f1f5f9; color:var(--lab-palette-primary-main); padding:4px 10px; border-radius:100px; font-size:11px; font-weight:700;">${t}</span>`).join('')}
                                ${project.techStack.integrations.length > 0 ? `<span class="tech-pill" style="background:rgba(234,23,99,0.1); color:var(--lab-palette-accent-pink); padding:4px 10px; border-radius:100px; font-size:11px; font-weight:700;">${project.techStack.integrations[0]}</span>` : ''}
                            </div>
                            <a href="project-detail.html?id=${project.id}" class="btn-primary" style="margin-top:25px; width:100%;">View Case Study <i class="ph ph-arrow-right" style="margin-left:8px;"></i></a>
                        </div>
                    `;
                    grid.appendChild(card);
                    observer.observe(card);
                });
            }

            renderPagination(totalPages);
            grid.classList.remove('loading');
        }, 300);
    };

    /**
     * Render pagination controls
     */
    const renderPagination = (totalPages) => {
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHtml = `
            <button class="pg-btn" ${currentState.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentState.currentPage - 1})">
                <i class="ph ph-caret-left"></i>
            </button>
            <div class="pg-info">Page ${currentState.currentPage} of ${totalPages}</div>
            <button class="pg-btn" ${currentState.currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentState.currentPage + 1})">
                <i class="ph ph-caret-right"></i>
            </button>
        `;
        
        paginationContainer.innerHTML = paginationHtml;
    };

    // Global function for pagination buttons
    window.changePage = (page) => {
        currentState.currentPage = page;
        renderProjects();
        // Do NOT scroll to top as requested
    };

    // Sort event listener
    sortSelect.addEventListener('change', () => {
        currentState.sort = sortSelect.value;
        currentState.currentPage = 1;
        renderProjects();
    });

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

    // Initial Render Sequence
    renderFeaturedProject();
    renderChallenges();
    generateFilters();
    renderProjects();
});
