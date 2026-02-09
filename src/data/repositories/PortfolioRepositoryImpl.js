/**
 * Data Layer - Repository Implementation
 * Handles data retrieval and mapping to domain entities
 */

import { UserProfileModel } from '../models/UserProfileModel.js';

export class PortfolioRepositoryImpl {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async getUserProfile() {
        try {
            const data = await this.dataSource.getUserProfileData();
            const model = UserProfileModel.fromJSON(data);
            return model.toEntity();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    }

    async getSkills() {
        try {
            const data = await this.dataSource.getSkillsData();
            return data.map(skill => ({
                id: skill.id,
                category: skill.category,
                icon: skill.icon,
                items: skill.items
            }));
        } catch (error) {
            console.error('Error fetching skills:', error);
            throw error;
        }
    }

    async getExperiences() {
        try {
            const data = await this.dataSource.getExperiencesData();
            return data.map(exp => ({
                id: exp.id,
                role: exp.role,
                company: exp.company,
                location: exp.location,
                startDate: exp.startDate,
                endDate: exp.endDate,
                isCurrent: exp.isCurrent,
                responsibilities: exp.responsibilities
            }));
        } catch (error) {
            console.error('Error fetching experiences:', error);
            throw error;
        }
    }

    async getProjects() {
        try {
            const data = await this.dataSource.getProjectsData();
            return data.map(project => ({
                id: project.id,
                title: project.title,
                year: project.year,
                description: project.description,
                technologies: project.technologies,
                icon: project.icon,
                highlights: project.highlights
            }));
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    }
}
