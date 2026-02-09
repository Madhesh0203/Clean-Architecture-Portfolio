/**
 * Presentation Layer - View Component
 * Projects grid component
 */

export class ProjectsComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(projects) {
        if (!projects || projects.length === 0) return;

        const projectCards = projects.map(project => `
            <div class="project-card reveal">
                <div class="project-image">${project.icon}</div>
                <div class="project-content">
                    <div class="project-year">${project.year}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        this.container.innerHTML = `
            <div class="section-header reveal">
                <div class="section-label">FEATURED WORK</div>
                <h2 class="section-title">Projects</h2>
                <p class="section-description">Innovative solutions combining machine learning, data analysis, and web development</p>
            </div>
            <div class="projects-grid">
                ${projectCards}
            </div>
        `;
    }
}
