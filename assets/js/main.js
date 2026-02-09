/**
 * Main Application Entry Point
 * Initializes Clean Architecture MVVM structure
 */

import { DIContainer } from '../../config/DIContainer.js';
import { PortfolioView } from '../presentation/views/PortfolioView.js';

// Application Bootstrap
class App {
    constructor() {
        this.container = new DIContainer();
        this.viewModel = this.container.getViewModel();
        this.view = new PortfolioView(this.viewModel);
    }

    async init() {
        console.log('🚀 Initializing Portfolio App with Clean Architecture & MVVM');
        console.log('📦 Dependency Injection Container initialized');
        console.log('🏗️  Architecture Layers:');
        console.log('   └─ Domain (Entities, Use Cases)');
        console.log('   └─ Data (Models, Repositories)');
        console.log('   └─ Presentation (ViewModels, Views, Components)');
        
        await this.view.initialize();
        
        console.log('✅ Portfolio loaded successfully!');
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
