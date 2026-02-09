/**
 * Domain Layer - Entity
 * Core business object representing work experience
 */

export class Experience {
    constructor({
        id,
        role,
        company,
        location,
        startDate,
        endDate,
        isCurrent,
        responsibilities
    }) {
        this.id = id;
        this.role = role;
        this.company = company;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isCurrent = isCurrent || false;
        this.responsibilities = responsibilities || [];
    }

    getDuration() {
        return this.isCurrent 
            ? `${this.startDate} – Present`
            : `${this.startDate} – ${this.endDate}`;
    }

    isCurrentPosition() {
        return this.isCurrent;
    }
}
