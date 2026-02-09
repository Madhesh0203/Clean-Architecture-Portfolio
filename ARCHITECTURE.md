# Portfolio Architecture Documentation

## Clean Architecture MVVM Pattern

This document explains the architectural decisions and patterns used in this portfolio project.

## Architecture Overview

```
┌─────────────────────────┼────────────────────────────────────┐ 
│                     PRESENTATION LAYER                       │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐    │
│  │   Views    │←─│ ViewModels │←─│     Components       │    │
│  │            │  │            │  │  (UI Building Blocks)│    │
│  └────────────┘  └─────┬──────┘  └──────────────────────┘    │
└─────────────────────────┼────────────────────────────────────┘
                          ↓
┌─────────────────────────┼────────────────────────────────────┐
│                    DOMAIN LAYER                              │
│                  ┌──────┴──────┐                             │
│                  │  Use Cases  │                             │
│                  │  (Business  │                             │
│                  │    Logic)   │                             │
│                  └──────┬──────┘                             │
│                         ↓                                    │
│                  ┌─────────────┐                             │
│                  │  Entities   │                             │
│                  │ (Core Data) │                             │
│                  └─────────────┘                             │
└─────────────────────────┬────────────────────────────────────┘
                          ↓
┌─────────────────────────┼────────────────────────────────────┐
│                     DATA LAYER                               │
│                  ┌──────┴──────┐                             │
│                  │ Repositories│                             │
│                  └──────┬──────┘                             │
│                         ↓                                    │
│          ┌──────────────┴──────────────┐                     │
│          │                              │                    │
│     ┌────┴─────┐                  ┌────┴──────┐              │
│     │  Models  │                  │   Data    │              │
│     │          │                  │  Sources  │              │
│     └──────────┘                  └───────────┘              │
└──────────────────────────────────────────────────────────────┘
```

## Layer Responsibilities

### 1. Presentation Layer
**Purpose**: Handle user interface and user interactions

**Components**:
- **Views**: Render UI and handle user events
- **ViewModels**: Manage UI state, orchestrate use cases
- **Components**: Reusable UI building blocks

**Key Principle**: No business logic in this layer

### 2. Domain Layer
**Purpose**: Core business logic and rules

**Components**:
- **Entities**: Business objects with properties and methods
- **Use Cases**: Application-specific business rules

**Key Principle**: Framework independent, no external dependencies

### 3. Data Layer
**Purpose**: Data access and external operations

**Components**:
- **Repositories**: Abstract data access interface
- **Models**: Data transfer objects
- **Data Sources**: External data providers (API, Database)

**Key Principle**: Can be swapped without affecting domain

## MVVM Pattern Implementation

### Model
```javascript
// Domain entities and data models
class UserProfile {
    constructor(data) {
        this.name = data.name;
        this.title = data.title;
        // ... other properties
    }
}
```

### View
```javascript
// Renders UI based on ViewModel state
class PortfolioView {
    render(state) {
        // Update DOM with state data
        this.heroComponent.render(state.userProfile);
        this.skillsComponent.render(state.skills);
    }
}
```

### ViewModel
```javascript
// Manages state and orchestrates use cases
class PortfolioViewModel {
    constructor(useCases) {
        this.state = { userProfile: null, skills: [] };
        this.useCases = useCases;
    }
    
    async loadData() {
        const result = await this.useCase.execute();
        this.updateState(result.data);
    }
}
```

## Design Patterns Used

### 1. Observer Pattern
```javascript
// ViewModel notifies View of state changes
class PortfolioViewModel {
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    notifyObservers() {
        this.observers.forEach(o => o(this.state));
    }
}
```

### 2. Repository Pattern
```javascript
// Abstraction over data access
class PortfolioRepositoryImpl {
    async getUserProfile() {
        const data = await this.dataSource.getUserProfileData();
        return this.mapToEntity(data);
    }
}
```

### 3. Dependency Injection
```javascript
// DIContainer manages all dependencies
class DIContainer {
    constructor() {
        const dataSource = new PortfolioDataSource();
        const repository = new PortfolioRepository(dataSource);
        const useCase = new GetUserProfileUseCase(repository);
        // ... wire up all dependencies
    }
}
```

### 4. Use Case Pattern
```javascript
// Single responsibility for each business operation
class GetUserProfileUseCase {
    async execute() {
        return await this.repository.getUserProfile();
    }
}
```

## Data Flow Example

### User clicks "Load Profile" button

```
1. View captures click event
   ↓
2. View calls ViewModel.loadUserProfile()
   ↓
3. ViewModel calls GetUserProfileUseCase.execute()
   ↓
4. Use Case calls Repository.getUserProfile()
   ↓
5. Repository calls DataSource.getUserProfileData()
   ↓
6. DataSource fetches data (API/Mock)
   ↓
7. Data flows back through layers:
   DataSource → Repository → Use Case → ViewModel
   ↓
8. ViewModel updates state
   ↓
9. ViewModel notifies observers
   ↓
10. View re-renders with new state
```

## Benefits of This Architecture

### Testability
- **Unit Testing**: Each layer can be tested independently
- **Mock Dependencies**: Easy to create mocks for testing
- **Isolated Logic**: Business logic separated from UI

### Maintainability
- **Clear Structure**: Easy to find and modify code
- **Single Responsibility**: Each class has one job
- **Low Coupling**: Minimal dependencies between layers

### Scalability
- **Add Features**: Just add new use cases and components
- **Replace Components**: Swap implementations without breaking others
- **Team Collaboration**: Different teams can work on different layers

### Flexibility
- **Framework Independence**: Can change UI framework easily
- **Data Source Agnostic**: Switch from mock to real API seamlessly
- **Reusability**: Components and use cases can be reused

## Dependency Rules

**The Dependency Rule**: Dependencies only point inward

```
Presentation → Domain ← Data
     ↓           ↑        ↑
  Cannot    Can depend   Cannot
  depend    on nothing   depend on
  on Data   external     Presentation
```

**What this means**:
- Presentation can depend on Domain
- Data can depend on Domain
- Domain depends on NOTHING external
- Presentation and Data never depend on each other

## Code Organization Principles

### 1. Single Responsibility Principle
Each class has one reason to change:
- `GetUserProfileUseCase`: Only handles user profile retrieval
- `HeroComponent`: Only renders hero section
- `PortfolioViewModel`: Only manages portfolio state

### 2. Open/Closed Principle
Open for extension, closed for modification:
- Add new use cases without modifying existing ones
- Add new components without changing the view

### 3. Dependency Inversion Principle
Depend on abstractions, not concrete implementations:
- ViewModel depends on use case interface, not implementation
- Repository is an abstraction over data access

### 4. Interface Segregation
Clients shouldn't depend on methods they don't use:
- Each use case has specific execute() method
- Components only render their specific data

## File Naming Conventions

```
Domain Layer:
- Entities: [Name].js (e.g., UserProfile.js)
- Use Cases: [Action][Entity]UseCase.js (e.g., GetUserProfileUseCase.js)

Data Layer:
- Models: [Name]Model.js (e.g., UserProfileModel.js)
- Repositories: [Name]RepositoryImpl.js
- Data Sources: [Name]DataSource.js

Presentation Layer:
- ViewModels: [Name]ViewModel.js
- Views: [Name]View.js
- Components: [Name]Component.js
```

## State Management Flow

```javascript
// State is immutable - always create new state object
updateState(newData) {
    this.state = {
        ...this.state,  // Keep existing state
        ...newData      // Add/override with new data
    };
    this.notifyObservers();  // Trigger re-render
}
```

## Error Handling Strategy

```javascript
// Use Cases return success/error objects
async execute() {
    try {
        const data = await this.repository.getData();
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ViewModel handles errors and updates state
async loadData() {
    const result = await this.useCase.execute();
    if (result.success) {
        this.updateState({ data: result.data });
    } else {
        this.updateState({ error: result.error });
    }
}
```

## Future Enhancements

This architecture makes it easy to add:

1. **Real API Integration**: Replace DataSource with API calls
2. **State Persistence**: Add localStorage in repository
3. **Routing**: Add router in presentation layer
4. **Authentication**: Add AuthUseCase in domain
5. **Caching**: Add caching layer in repository
6. **Analytics**: Add tracking in ViewModel
7. **Testing**: Add unit tests for each layer

## Conclusion

This Clean Architecture MVVM implementation provides:
- ✅ Separation of concerns
- ✅ Testable code
- ✅ Maintainable structure
- ✅ Scalable foundation
- ✅ Framework independence
- ✅ Team-friendly organization

The architecture is production-ready and can scale from a simple portfolio to a complex application.
