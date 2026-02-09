/**
 * Domain Layer - Entity
 * Core business object representing user profile
 */

export class UserProfile {
    constructor({
        name,
        title,
        subtitle,
        location,
        phone,
        email,
        linkedin,
        github,
        bio,
        education
    }) {
        this.name = name;
        this.title = title;
        this.subtitle = subtitle;
        this.location = location;
        this.phone = phone;
        this.email = email;
        this.linkedin = linkedin;
        this.github = github;
        this.bio = bio;
        this.education = education;
    }

    getFullContact() {
        return {
            phone: this.phone,
            email: this.email,
            linkedin: this.linkedin,
            github: this.github
        };
    }

    getDisplayName() {
        return this.name;
    }
}
