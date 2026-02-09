/**
 * Domain Layer - Use Case
 * Business logic for retrieving user profile
 */

export class GetUserProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        try {
            const userProfile = await this.repository.getUserProfile();
            return {
                success: true,
                data: userProfile
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}
