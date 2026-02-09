/**
 * Presentation Layer - Main View
 * Orchestrates all components and handles ViewModel subscription
 */

import { HeroComponent } from '../components/HeroComponent.js';
import { SkillsComponent } from '../components/SkillsComponent.js';
import { ExperienceComponent } from '../components/ExperienceComponent.js';
import { ProjectsComponent } from '../components/ProjectsComponent.js';
import { ContactComponent } from '../components/ContactComponent.js';

export class PortfolioView {
    constructor(viewModel) {
        this.viewModel = viewModel;
        this.initializeComponents();
        this.subscribeToViewModel();
    }

    initializeComponents() {
        this.heroComponent = new HeroComponent('hero-section');
        this.skillsComponent = new SkillsComponent('skills-section');
        this.experienceComponent = new ExperienceComponent('experience-section');
        this.projectsComponent = new ProjectsComponent('projects-section');
        this.contactComponent = new ContactComponent('contact-section');
    }

    subscribeToViewModel() {
        this.viewModel.subscribe((state) => {
            this.render(state);
        });
    }

    render(state) {
        if (state.isLoading) {
            this.showLoading();
            return;
        }

        if (state.error) {
            this.showError(state.error);
            return;
        }

        // Render all components with data from state
        this.heroComponent.render(state.userProfile);
        this.skillsComponent.render(state.skills);
        this.experienceComponent.render(state.experiences);
        this.projectsComponent.render(state.projects);
        this.contactComponent.render(state.userProfile);

        // Trigger reveal animations
        this.initializeRevealAnimations();
    }

    showLoading() {
        console.log('Loading portfolio data...');
    }

    showError(error) {
        console.error('Error loading portfolio:', error);
    }

    initializeRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 100;
                
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }

    async initialize() {
        await this.viewModel.loadAllData();
    }
}
