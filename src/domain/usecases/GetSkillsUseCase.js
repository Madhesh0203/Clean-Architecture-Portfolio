/**
 * Domain Layer - Use Case
 * Business logic for retrieving skills
 */

export class GetSkillsUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        try {
            const skills = await this.repository.getSkills();
            return {
                success: true,
                data: skills
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}
