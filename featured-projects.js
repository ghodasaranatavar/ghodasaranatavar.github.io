document.addEventListener('DOMContentLoaded', () => {
    const featuredGrid = document.getElementById('featured-projects-grid');
    if (!featuredGrid || !window.projectData) return;

    // Render featured projects from data
    const featuredProjects = window.projectData.filter(p => p.homepageFeatured && p.homepageFeatured.isFeatured);

    featuredProjects.forEach(project => {
        const feat = project.homepageFeatured;
        const item = document.createElement('div');
        item.className = 'featured-project-card';

        // Optimized 3-Column Styles
        item.style.cssText = `
            border: 1px solid ${feat.accentColor}33;
            position: relative;
            overflow: hidden;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            padding: 30px;
            border-radius: var(--radius-lg);
            box-shadow: var(--lab-shadow-medium);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            color: var(--lab-text-primary);
            height: 100%;
        `;

        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
                <div class="portfolio-icon">
                    <i class="${feat.icon}" style="color: ${feat.accentColor}; font-size: 3rem; filter: drop-shadow(0 4px 8px ${feat.accentColor}22);"></i>
                </div>
                <span style="background: ${feat.accentColor}; color: white; font-size: 0.65rem; padding: 4px 10px; border-radius: 20px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">Featured</span>
            </div>
            
            <div style="flex-grow: 1;">
                <h3 style="color: var(--lab-palette-primary-dark); font-size: 1.4rem; margin-bottom: 12px; line-height: 1.3; font-weight: 800; text-align: left;">${project.title}</h3>
                <p style="color: var(--lab-text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: 25px; font-weight: 500; text-align: left;">${feat.outcome}</p>
                
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 30px; justify-content: flex-start;">
                    ${feat.metrics.map(m => `
                        <div style="background: ${feat.accentColor}11; border: 1px solid ${feat.accentColor}22; color: ${feat.accentColor}; padding: 8px 14px; border-radius: 10px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                            <i class="${m.icon}" style="font-size: 1rem;"></i> ${m.value}
                        </div>
                    `).join('')}
                </div>
            </div>

            <a href="project-detail.html?id=${project.id}" target="_blank" rel="noopener noreferrer" 
               style="background: ${feat.accentColor}; color: white; padding: 12px 24px; border-radius: var(--radius-sm); font-weight: 800; text-align: center; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; width: fit-content; border: none;">
                View Case Study <i class="ph ph-arrow-right"></i>
            </a>
        `;

        // Hover interaction
        item.onmouseenter = () => {
            item.style.transform = 'translateY(-10px)';
            item.style.boxShadow = `0 15px 35px rgba(0,0,0,0.1), 0 0 15px ${feat.accentColor}11`;
            item.style.borderColor = feat.accentColor;
        };
        item.onmouseleave = () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'var(--lab-shadow-medium)';
            item.style.borderColor = `${feat.accentColor}33`;
        };

        featuredGrid.appendChild(item);
    });
});
