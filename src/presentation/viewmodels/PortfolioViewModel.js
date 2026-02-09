/**
 * Presentation Layer - ViewModel
 * Manages UI state and orchestrates use cases
 */

export class PortfolioViewModel {
    constructor({
        getUserProfileUseCase,
        getSkillsUseCase,
        getExperiencesUseCase,
        getProjectsUseCase
    }) {
        this.getUserProfileUseCase = getUserProfileUseCase;
        this.getSkillsUseCase = getSkillsUseCase;
        this.getExperiencesUseCase = getExperiencesUseCase;
        this.getProjectsUseCase = getProjectsUseCase;

        // Observable state
        this.state = {
            userProfile: null,
            skills: [],
            experiences: [],
            projects: [],
            isLoading: false,
            error: null
        };

        this.observers = [];
    }

    // Observer pattern for state management
    subscribe(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer(this.state));
    }

    updateState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyObservers();
    }

    async loadUserProfile() {
        this.updateState({ isLoading: true, error: null });
        const result = await this.getUserProfileUseCase.execute();
        
        if (result.success) {
            this.updateState({ userProfile: result.data, isLoading: false });
        } else {
            this.updateState({ error: result.error, isLoading: false });
        }
    }

    async loadSkills() {
        this.updateState({ isLoading: true, error: null });
        const result = await this.getSkillsUseCase.execute();
        
        if (result.success) {
            this.updateState({ skills: result.data, isLoading: false });
        } else {
            this.updateState({ error: result.error, isLoading: false });
        }
    }

    async loadExperiences() {
        this.updateState({ isLoading: true, error: null });
        const result = await this.getExperiencesUseCase.execute();
        
        if (result.success) {
            this.updateState({ experiences: result.data, isLoading: false });
        } else {
            this.updateState({ error: result.error, isLoading: false });
        }
    }

    async loadProjects() {
        this.updateState({ isLoading: true, error: null });
        const result = await this.getProjectsUseCase.execute();
        
        if (result.success) {
            this.updateState({ projects: result.data, isLoading: false });
        } else {
            this.updateState({ error: result.error, isLoading: false });
        }
    }

    async loadAllData() {
        await Promise.all([
            this.loadUserProfile(),
            this.loadSkills(),
            this.loadExperiences(),
            this.loadProjects()
        ]);
    }

    getState() {
        return this.state;
    }
}
