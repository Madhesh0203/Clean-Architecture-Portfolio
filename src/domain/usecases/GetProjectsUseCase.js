/**
 * Domain Layer - Use Case
 * Business logic for retrieving projects
 */

export class GetProjectsUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        try {
            const projects = await this.repository.getProjects();
            return {
                success: true,
                data: projects
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}
