/**
 * Data Layer - Model
 * Data transfer object for user profile
 */

export class UserProfileModel {
    constructor(data) {
        this.name = data.name || '';
        this.title = data.title || '';
        this.subtitle = data.subtitle || '';
        this.location = data.location || '';
        this.phone = data.phone || '';
        this.email = data.email || '';
        this.linkedin = data.linkedin || '';
        this.github = data.github || '';
        this.bio = data.bio || '';
        this.education = data.education || {};
    }

    toEntity() {
        const { UserProfile } = require('../../domain/entities/UserProfile.js');
        return new UserProfile(this);
    }

    static fromJSON(json) {
        return new UserProfileModel(json);
    }
}
