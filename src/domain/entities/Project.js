/**
 * Domain Layer - Entity
 * Core business object representing a project
 */

export class Project {
    constructor({
        id,
        title,
        year,
        description,
        technologies,
        icon,
        highlights
    }) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.description = description;
        this.technologies = technologies || [];
        this.icon = icon;
        this.highlights = highlights || [];
    }

    getTechStack() {
        return this.technologies.join(', ');
    }

    getYear() {
        return this.year;
    }
}
