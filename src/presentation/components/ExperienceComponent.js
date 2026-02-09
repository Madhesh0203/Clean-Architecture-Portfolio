/**
 * Presentation Layer - View Component
 * Experience timeline component
 */

export class ExperienceComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(experiences) {
        if (!experiences || experiences.length === 0) return;

        const timelineItems = experiences.map(exp => `
            <div class="timeline-item reveal">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${exp.isCurrent ? `${exp.startDate} – PRESENT` : `${exp.startDate} – ${exp.endDate}`.toUpperCase()}</div>
                    <h3>${exp.role}</h3>
                    <div class="timeline-company">${exp.company} • ${exp.location}</div>
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        this.container.innerHTML = `
            <div class="section-header reveal">
                <div class="section-label">CAREER JOURNEY</div>
                <h2 class="section-title">Professional Experience</h2>
                <p class="section-description">Building expertise through hands-on internships and real-world projects</p>
            </div>
            <div class="timeline">
                ${timelineItems}
            </div>
        `;
    }
}
