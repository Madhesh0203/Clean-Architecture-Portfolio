/**
 * Domain Layer - Entity
 * Core business object representing a skill category
 */

export class Skill {
    constructor({
        id,
        category,
        icon,
        items
    }) {
        this.id = id;
        this.category = category;
        this.icon = icon;
        this.items = items || [];
    }

    addSkillItem(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
    }

    getSkillCount() {
        return this.items.length;
    }
}
