let availableImages = [];
let currentTarget = { projectId: null, slotIndex: null };
const projectDataCopy = JSON.parse(JSON.stringify(window.projectData));

const editorGrid = document.getElementById('editor-grid');
const imageModal = document.getElementById('image-modal');
const imageBrowser = document.getElementById('image-browser');
const saveBtn = document.getElementById('save-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('image-search');

async function init() {
    if (typeof EnhancedAccessiblePortfolioApp !== 'undefined') {
        window.portfolioApp = new EnhancedAccessiblePortfolioApp();
    }

    await fetchImages();
    renderProjects();
    setupSearch();
    
    addProjectBtn.onclick = createNewProject;
}

async function fetchImages() {
    try {
        const response = await fetch('api/project-editor.php?action=list_images');
        const result = await response.json();
        if (result.success) {
            availableImages = result.images;
        }
    } catch (err) {
        console.error('Failed to fetch images:', err);
    }
}

function renderProjects() {
    editorGrid.innerHTML = '';
    projectDataCopy.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const previewImg = project.gallery[0] ? project.gallery[0].url : '';
        const detailImages = project.gallery.slice(1);

        card.innerHTML = `
            <div class="project-header">
                <span class="project-id">#${project.id}</span>
                <div class="header-title-input">
                    <input type="text" class="input-text title-edit" value="${project.title}" 
                        onchange="updateProjectField(${project.id}, 'title', this.value)" placeholder="Project Title">
                </div>
                <button class="remove-project-btn" onclick="deleteProject(${project.id})" title="Delete Project">
                    <i class="ph ph-trash"></i>
                </button>
            </div>

            <div class="project-content-tabs">
                <!-- Core Strategy -->
                <details open>
                    <summary><i class="ph ph-strategy"></i> Core Strategy & Client</summary>
                    <div class="details-content">
                        <div class="row">
                            <div class="field-group">
                                <label>Niche / Category</label>
                                <input type="text" class="input-text" value="${project.niche || ''}" onchange="updateProjectField(${project.id}, 'niche', this.value)">
                            </div>
                            <div class="field-group">
                                <label>Industry</label>
                                <input type="text" class="input-text" value="${project.client?.industry || ''}" onchange="updateProjectField(${project.id}, 'client.industry', this.value)">
                            </div>
                        </div>
                        <div class="row">
                            <div class="field-group">
                                <label>Client Size</label>
                                <input type="text" class="input-text" value="${project.client?.size || ''}" onchange="updateProjectField(${project.id}, 'client.size', this.value)">
                            </div>
                            <div class="field-group">
                                <label>Location</label>
                                <input type="text" class="input-text" value="${project.client?.location || ''}" onchange="updateProjectField(${project.id}, 'client.location', this.value)">
                            </div>
                        </div>
                        <div class="field-group">
                            <label>Target Audience (Who is this for?)</label>
                            <textarea class="input-textarea small" onchange="updateProjectField(${project.id}, 'whoIsThisFor', this.value)">${project.whoIsThisFor || ''}</textarea>
                        </div>
                        <div class="field-group">
                            <label>Business Context</label>
                            <textarea class="input-textarea small" onchange="updateProjectField(${project.id}, 'businessContext', this.value)">${project.businessContext || ''}</textarea>
                        </div>
                    </div>
                </details>

                <!-- Problem & Solution -->
                <details>
                    <summary><i class="ph ph-lightbulb"></i> Problem & Solution Strategy</summary>
                    <div class="details-content">
                        <div class="field-group">
                            <label>Operational Problem</label>
                            <textarea class="input-textarea" onchange="updateProjectField(${project.id}, 'operationalProblem', this.value)">${project.operationalProblem || ''}</textarea>
                        </div>
                        <div class="field-group">
                            <label>Solution Strategy</label>
                            <textarea class="input-textarea" onchange="updateProjectField(${project.id}, 'solutionStrategy', this.value)">${project.solutionStrategy || ''}</textarea>
                        </div>
                        <div class="field-group">
                            <label>Solution Description (Detail View)</label>
                            <textarea class="input-textarea" onchange="updateProjectField(${project.id}, 'solution.description', this.value)">${project.solution?.description || ''}</textarea>
                        </div>
                        <div class="row">
                            <div class="field-group">
                                <label>Objectives</label>
                                ${renderListEditor(project.id, 'objective', project.objective)}
                            </div>
                            <div class="field-group">
                                <label>Solution Highlights</label>
                                ${renderListEditor(project.id, 'solution.highlights', project.solution?.highlights)}
                            </div>
                        </div>
                    </div>
                </details>

                <!-- Technical Excellence -->
                <details>
                    <summary><i class="ph ph-code"></i> Technical Stack & Complexity</summary>
                    <div class="details-content">
                        <div class="field-group">
                            <label>Salesforce Products</label>
                            ${renderListEditor(project.id, 'techStack.salesforce', project.techStack?.salesforce)}
                        </div>
                        <div class="field-group">
                            <label>Tools & Frameworks</label>
                            ${renderListEditor(project.id, 'techStack.tools', project.techStack?.tools)}
                        </div>
                        <div class="field-group">
                            <label>Integrations</label>
                            ${renderListEditor(project.id, 'techStack.integrations', project.techStack?.integrations)}
                        </div>
                        <div class="field-group">
                            <label>Technical Complexity Tags</label>
                            ${renderListEditor(project.id, 'technicalComplexity', project.technicalComplexity)}
                        </div>
                    </div>
                </details>

                <!-- Outcomes & Social Proof -->
                <details>
                    <summary><i class="ph ph-chart-line"></i> Outcomes & Client Feedback</summary>
                    <div class="details-content">
                        <div class="field-group">
                            <label>Key Metrics (Homepage/Cards)</label>
                            ${renderListEditor(project.id, 'metricsPreview', project.metricsPreview)}
                        </div>
                        <div class="field-group">
                            <label>Measurable Results (Detail Page)</label>
                            ${renderObjectListEditor(project.id, 'results', project.results, ['metric', 'label'])}
                        </div>
                        <div class="field-group">
                            <label>Client Feedback</label>
                            <textarea class="input-textarea small" onchange="updateProjectField(${project.id}, 'feedback', this.value)">${project.feedback || ''}</textarea>
                        </div>
                        <div class="field-group">
                            <label>Key Takeaways</label>
                            ${renderListEditor(project.id, 'takeaways', project.takeaways)}
                        </div>
                    </div>
                </details>

                <!-- Visuals & SEO -->
                <details>
                    <summary><i class="ph ph-image"></i> Visual Assets & SEO</summary>
                    <div class="details-content">
                        <div class="image-slots">
                            <div class="slot">
                                <span class="slot-label">Portfolio Preview (Main)</span>
                                <div class="image-preview" onclick="openImagePicker(${project.id}, 0)">
                                    ${previewImg ? `<img src="${previewImg}" alt="Preview">` : '<div class="placeholder"><i class="ph ph-image"></i><span>Select Image</span></div>'}
                                    <button class="change-btn">Change</button>
                                </div>
                            </div>
                            <div class="slot">
                                <span class="slot-label">Architecture Detail Images</span>
                                <div class="detail-gallery-grid">
                                    ${detailImages.map((img, idx) => `
                                        <div class="image-preview detail-preview">
                                            <img src="${img.url}" alt="Detail ${idx + 1}" onclick="openImagePicker(${project.id}, ${idx + 1})">
                                            <button class="remove-slot-btn" onclick="removeImageSlot(event, ${project.id}, ${idx + 1})" title="Remove Image">&times;</button>
                                            <button class="change-btn small">Change</button>
                                        </div>
                                    `).join('')}
                                    <div class="add-slot-placeholder" onclick="addNewImageSlot(${project.id})">
                                        <i class="ph ph-plus-circle"></i>
                                        <span>Add Image</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field-group" style="margin-top:20px;">
                            <label>SEO Description</label>
                            <textarea class="input-textarea small" onchange="updateProjectField(${project.id}, 'seo.description', this.value)">${project.seo?.description || ''}</textarea>
                        </div>
                    </div>
                </details>
            </div>
        `;
        editorGrid.appendChild(card);
    });
}

// --- Helper Rendering Functions ---

function renderListEditor(projectId, field, list) {
    const items = list || [];
    return `
        <div class="list-editor">
            ${items.map((m, i) => `
                <div class="list-item-row">
                    <input type="text" class="input-text" value="${m}" 
                        onchange="updateListItem(${projectId}, '${field}', ${i}, this.value)">
                    <button class="remove-item-btn" onclick="removeListItem(${projectId}, '${field}', ${i})">&times;</button>
                </div>
            `).join('')}
            <button class="add-item-btn" onclick="addListItem(${projectId}, '${field}')">+ Add Item</button>
        </div>
    `;
}

function renderObjectListEditor(projectId, field, list, keys) {
    const items = list || [];
    return `
        <div class="list-editor">
            ${items.map((obj, i) => `
                <div class="list-item-row object-row">
                    ${keys.map(key => `
                        <input type="text" class="input-text" value="${obj[key] || ''}" placeholder="${key}"
                            onchange="updateObjectListItem(${projectId}, '${field}', ${i}, '${key}', this.value)">
                    `).join('')}
                    <button class="remove-item-btn" onclick="removeListItem(${projectId}, '${field}', ${i})">&times;</button>
                </div>
            `).join('')}
            <button class="add-item-btn" onclick="addObjectListItem(${projectId}, '${field}', {${keys.map(k => `${k}:''`).join(',')}})">+ Add Result</button>
        </div>
    `;
}

// --- Data Modification Functions ---

function updateProjectField(projectId, path, value) {
    const project = projectDataCopy.find(p => p.id === projectId);
    if (!project) return;

    const keys = path.split('.');
    let current = project;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    if (path === 'title') {
        if (!project.seo) project.seo = {};
        project.seo.keywords = value.split(' ').join(', ') + ', Salesforce, Architecture';
    }
}

function updateListItem(projectId, field, index, value) {
    const project = projectDataCopy.find(p => p.id === projectId);
    const list = getNestedField(project, field);
    if (list) list[index] = value;
}

function updateObjectListItem(projectId, field, index, key, value) {
    const project = projectDataCopy.find(p => p.id === projectId);
    const list = getNestedField(project, field);
    if (list && list[index]) list[index][key] = value;
}

function addListItem(projectId, field) {
    const project = projectDataCopy.find(p => p.id === projectId);
    let list = getNestedField(project, field);
    if (!list) {
        setNestedField(project, field, []);
        list = getNestedField(project, field);
    }
    list.push('');
    renderProjects();
}

function addObjectListItem(projectId, field, template) {
    const project = projectDataCopy.find(p => p.id === projectId);
    let list = getNestedField(project, field);
    if (!list) {
        setNestedField(project, field, []);
        list = getNestedField(project, field);
    }
    list.push({...template});
    renderProjects();
}

function removeListItem(projectId, field, index) {
    const project = projectDataCopy.find(p => p.id === projectId);
    const list = getNestedField(project, field);
    if (list) {
        list.splice(index, 1);
        renderProjects();
    }
}

function getNestedField(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

function setNestedField(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
}

function createNewProject() {
    const maxId = Math.max(...projectDataCopy.map(p => p.id), 0);
    const newProject = {
        id: maxId + 1,
        title: "New Enterprise Solution",
        niche: "Niche Category",
        myRole: "Salesforce Architect",
        whoIsThisFor: "Target audience...",
        businessContext: "Business context...",
        operationalProblem: "Operational problem...",
        solutionStrategy: "Solution strategy...",
        objective: ["Objective 1"],
        solution: {
            description: "Solution detail description...",
            highlights: ["Highlight 1"]
        },
        client: { industry: "Industry", size: "Enterprise", location: "Remote" },
        techStack: {
            salesforce: ["Sales Cloud"],
            tools: ["REST API"],
            integrations: ["External API"]
        },
        technicalComplexity: ["Feature A"],
        metricsPreview: ["Metric 1"],
        results: [{ metric: "Result", label: "Outcome" }],
        gallery: [],
        feedback: "Client feedback here...",
        takeaways: ["Takeaway 1"],
        seo: { description: "Project description for SEO", keywords: "Salesforce, Integration, Architecture" },
        homepageFeatured: { isFeatured: false }
    };
    
    projectDataCopy.unshift(newProject);
    renderProjects();
    showToast('New project draft created!');
}

function deleteProject(projectId) {
    if (!confirm('Are you sure you want to delete this entire project? This cannot be undone.')) return;
    const index = projectDataCopy.findIndex(p => p.id === projectId);
    if (index !== -1) {
        projectDataCopy.splice(index, 1);
        renderProjects();
        showToast('Project removed.');
    }
}

// --- Image Functions ---

function openImagePicker(projectId, slotIndex) {
    currentTarget = { projectId, slotIndex };
    imageModal.classList.add('active');
    renderImageBrowser();
    document.body.style.overflow = 'hidden';
}

function renderImageBrowser(filter = '') {
    imageBrowser.innerHTML = '';
    const filteredImages = availableImages.filter(img => 
        img.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredImages.length === 0) {
        imageBrowser.innerHTML = '<div class="loading-state"><p>No images found matching your search.</p></div>';
        return;
    }

    filteredImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'browser-item';
        item.innerHTML = `
            <img src="${img.url}" alt="${img.name}" loading="lazy">
            <div class="img-name">${img.name}</div>
        `;
        item.onclick = () => selectImage(img.url);
        imageBrowser.appendChild(item);
    });
}

function selectImage(url) {
    const project = projectDataCopy.find(p => p.id === currentTarget.projectId);
    if (project) {
        if (!project.gallery) project.gallery = [];
        while (project.gallery.length <= currentTarget.slotIndex) {
            project.gallery.push({ url: '', caption: 'Project Visual' });
        }
        project.gallery[currentTarget.slotIndex].url = url;
        renderProjects();
        closeModal();
    }
}

function addNewImageSlot(projectId) {
    const project = projectDataCopy.find(p => p.id === projectId);
    if (project) {
        if (!project.gallery) project.gallery = [];
        project.gallery.push({ url: '', caption: 'New Detail Visual' });
        const newIndex = project.gallery.length - 1;
        renderProjects();
        openImagePicker(projectId, newIndex);
    }
}

function removeImageSlot(event, projectId, index) {
    event.stopPropagation();
    if (!confirm('Remove this image?')) return;
    const project = projectDataCopy.find(p => p.id === projectId);
    if (project && project.gallery) {
        project.gallery.splice(index, 1);
        renderProjects();
    }
}

function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        renderImageBrowser(e.target.value);
    });
}

function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('close-modal').onclick = closeModal;

saveBtn.onclick = async () => {
    saveBtn.disabled = true;
    const originalContent = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="ph ph-spinner-gap ph-spin"></i> Synchronizing database...';
    
    try {
        const response = await fetch('api/project-editor.php?action=save_data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectDataCopy)
        });
        
        const result = await response.json();
        if (result.success) {
            showToast('Project database updated successfully!');
        } else {
            showToast('Error: ' + result.message);
        }
    } catch (err) {
        showToast('Failed to connect to server');
    } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalContent;
    }
};

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 4000);
}

window.onclick = (event) => {
    if (event.target == imageModal) {
        closeModal();
    }
};

init();
