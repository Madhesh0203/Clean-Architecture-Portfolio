/**
 * Presentation Layer - View Component
 * Contact section component
 */

export class ContactComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(userProfile) {
        if (!userProfile) return;

        this.container.innerHTML = `
            <div class="contact-content reveal">
                <div class="section-label">LET'S CONNECT</div>
                <h2>Get In Touch</h2>
                <p>I'm always open to discussing new opportunities, innovative projects, or potential collaborations. Feel free to reach out!</p>
                <a href="mailto:${userProfile.email}" class="btn btn-primary">Send Email</a>
                <div class="contact-methods">
                    <a href="tel:${userProfile.phone.replace(/\s/g, '')}" class="contact-method">
                        <div class="contact-icon">📱</div>
                        <span>${userProfile.phone}</span>
                    </a>
                    <a href="mailto:${userProfile.email}" class="contact-method">
                        <div class="contact-icon">✉️</div>
                        <span>${userProfile.email}</span>
                    </a>
                    <a href="${userProfile.linkedin}" target="_blank" class="contact-method">
                        <div class="contact-icon">💼</div>
                        <span>LinkedIn Profile</span>
                    </a>
                    <a href="${userProfile.github}" target="_blank" class="contact-method">
                        <div class="contact-icon">💻</div>
                        <span>GitHub Profile</span>
                    </a>
                </div>
            </div>
        `;
    }
}
