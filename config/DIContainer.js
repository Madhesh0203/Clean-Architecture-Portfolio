/**
 * Configuration - Dependency Injection Container
 * Manages dependencies and provides instances
 */

import { PortfolioDataSource } from '../data/PortfolioDataSource.js';
import { PortfolioRepositoryImpl } from '../data/repositories/PortfolioRepositoryImpl.js';
import { GetUserProfileUseCase } from '../domain/usecases/GetUserProfileUseCase.js';
import { GetSkillsUseCase } from '../domain/usecases/GetSkillsUseCase.js';
import { GetExperiencesUseCase } from '../domain/usecases/GetExperiencesUseCase.js';
import { GetProjectsUseCase } from '../domain/usecases/GetProjectsUseCase.js';
import { PortfolioViewModel } from '../presentation/viewmodels/PortfolioViewModel.js';

export class DIContainer {
    constructor() {
        this.instances = new Map();
        this.setupDependencies();
    }

    setupDependencies() {
        // Data Layer
        const dataSource = new PortfolioDataSource();
        const repository = new PortfolioRepositoryImpl(dataSource);

        // Domain Layer - Use Cases
        const getUserProfileUseCase = new GetUserProfileUseCase(repository);
        const getSkillsUseCase = new GetSkillsUseCase(repository);
        const getExperiencesUseCase = new GetExperiencesUseCase(repository);
        const getProjectsUseCase = new GetProjectsUseCase(repository);

        // Presentation Layer - ViewModel
        const viewModel = new PortfolioViewModel({
            getUserProfileUseCase,
            getSkillsUseCase,
            getExperiencesUseCase,
            getProjectsUseCase
        });

        // Store instances
        this.instances.set('dataSource', dataSource);
        this.instances.set('repository', repository);
        this.instances.set('getUserProfileUseCase', getUserProfileUseCase);
        this.instances.set('getSkillsUseCase', getSkillsUseCase);
        this.instances.set('getExperiencesUseCase', getExperiencesUseCase);
        this.instances.set('getProjectsUseCase', getProjectsUseCase);
        this.instances.set('viewModel', viewModel);
    }

    get(name) {
        return this.instances.get(name);
    }

    getViewModel() {
        return this.get('viewModel');
    }
}
