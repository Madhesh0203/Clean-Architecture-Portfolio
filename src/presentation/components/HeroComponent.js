/**
 * Presentation Layer - View Component
 * Hero section component
 */

export class HeroComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(userProfile) {
        if (!userProfile) return;

        this.container.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-label">${userProfile.title.toUpperCase()}</div>
                    <h1>${userProfile.name}</h1>
                    <p class="subtitle">${userProfile.subtitle}</p>
                    <p>${userProfile.bio}</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn btn-primary">Get In Touch</a>
                        <a href="#projects" class="btn btn-secondary">View Projects</a>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="code-window">
                        <div class="window-header">
                            <div class="window-dot"></div>
                            <div class="window-dot"></div>
                            <div class="window-dot"></div>
                        </div>
                        <div class="code-content">
                            <div class="code-line"><span class="keyword">class</span> <span class="function">DataPractitioner</span>:</div>
                            <div class="code-line">    <span class="keyword">def</span> <span class="function">__init__</span>(self):</div>
                            <div class="code-line">        self.name = <span class="string">"${userProfile.name}"</span></div>
                            <div class="code-line">        self.skills = [<span class="string">"SQL"</span>, <span class="string">"Python"</span>, <span class="string">"Azure"</span>]</div>
                            <div class="code-line">        self.passion = <span class="string">"Data & Cloud"</span></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
