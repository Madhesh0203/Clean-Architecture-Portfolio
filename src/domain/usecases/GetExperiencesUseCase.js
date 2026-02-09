/**
 * Domain Layer - Use Case
 * Business logic for retrieving experiences
 */

export class GetExperiencesUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        try {
            const experiences = await this.repository.getExperiences();
            return {
                success: true,
                data: experiences
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}
