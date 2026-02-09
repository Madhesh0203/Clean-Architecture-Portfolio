/**
 * Presentation Layer - View Component
 * Skills section component
 */

export class SkillsComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(skills) {
        if (!skills || skills.length === 0) return;

        const skillCards = skills.map(skill => `
            <div class="skill-card reveal">
                <div class="skill-icon">${skill.icon}</div>
                <h3>${skill.category}</h3>
                <div class="skill-tags">
                    ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');

        this.container.innerHTML = `
            <div class="section-header reveal">
                <div class="section-label">TECHNICAL EXPERTISE</div>
                <h2 class="section-title">Skills & Technologies</h2>
                <p class="section-description">A comprehensive toolkit for data analysis, cloud computing, and software development</p>
            </div>
            <div class="skills-grid">
                ${skillCards}
            </div>
        `;
    }
}
