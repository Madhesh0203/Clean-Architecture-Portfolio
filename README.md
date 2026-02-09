# Madheshwaran J - Portfolio

## Clean Architecture MVVM Implementation

This portfolio website is built using **Clean Architecture** principles with **MVVM (Model-View-ViewModel)** pattern for better maintainability, testability, and separation of concerns.

## 🏗️ Architecture Layers

### 1. Domain Layer (`src/domain/`)
**The core business logic layer - framework independent**

- **Entities** (`entities/`): Core business objects
  - `UserProfile.js`: User profile entity
  - `Skill.js`: Skill category entity
  - `Experience.js`: Work experience entity
  - `Project.js`: Project entity

- **Use Cases** (`usecases/`): Business logic operations
  - `GetUserProfileUseCase.js`: Retrieves user profile data
  - `GetSkillsUseCase.js`: Retrieves skills data
  - `GetExperiencesUseCase.js`: Retrieves experience data
  - `GetProjectsUseCase.js`: Retrieves project data

### 2. Data Layer (`src/data/`)
**Handles data operations and external dependencies**

- **Models** (`models/`): Data transfer objects
  - `UserProfileModel.js`: Maps API data to domain entities

- **Repositories** (`repositories/`): Implementation of data access
  - `PortfolioRepositoryImpl.js`: Implements data fetching and mapping

- **Data Sources**: 
  - `PortfolioDataSource.js`: Mock data source (simulates API)

### 3. Presentation Layer (`src/presentation/`)
**UI and user interaction logic**

- **ViewModels** (`viewmodels/`): Manages UI state and orchestrates use cases
  - `PortfolioViewModel.js`: Main view model with observer pattern

- **Views** (`views/`): Renders UI based on ViewModel state
  - `PortfolioView.js`: Main view orchestrator

- **Components** (`components/`): Reusable UI components
  - `HeroComponent.js`: Hero section
  - `SkillsComponent.js`: Skills grid
  - `ExperienceComponent.js`: Experience timeline
  - `ProjectsComponent.js`: Projects showcase
  - `ContactComponent.js`: Contact section

## 📁 Project Structure

```
portfolio-app/
├── index.html                      # Main HTML file
├── README.md                       # This file
│
├── config/
│   └── DIContainer.js             # Dependency Injection Container
│
├── src/
│   ├── domain/                    # Domain Layer (Business Logic)
│   │   ├── entities/
│   │   │   ├── UserProfile.js
│   │   │   ├── Skill.js
│   │   │   ├── Experience.js
│   │   │   └── Project.js
│   │   └── usecases/
│   │       ├── GetUserProfileUseCase.js
│   │       ├── GetSkillsUseCase.js
│   │       ├── GetExperiencesUseCase.js
│   │       └── GetProjectsUseCase.js
│   │
│   ├── data/                      # Data Layer
│   │   ├── models/
│   │   │   └── UserProfileModel.js
│   │   ├── repositories/
│   │   │   └── PortfolioRepositoryImpl.js
│   │   └── PortfolioDataSource.js
│   │
│   └── presentation/              # Presentation Layer (UI)
│       ├── viewmodels/
│       │   └── PortfolioViewModel.js
│       ├── views/
│       │   └── PortfolioView.js
│       └── components/
│           ├── HeroComponent.js
│           ├── SkillsComponent.js
│           ├── ExperienceComponent.js
│           ├── ProjectsComponent.js
│           └── ContactComponent.js
│
└── assets/
    ├── css/
    │   └── styles.css             # Main stylesheet
    └── js/
        ├── main.js                # Application entry point
        ├── navigation.js          # Navigation logic
        └── animations.js          # Animation effects
```

## 🔄 Data Flow

```
User Interaction
      ↓
   View (UI Component)
      ↓
  ViewModel (State Manager)
      ↓
  Use Case (Business Logic)
      ↓
Repository (Data Access Interface)
      ↓
Data Source (API/Mock Data)
      ↓
Model → Entity
      ↓
  Use Case Result
      ↓
  ViewModel (Updates State)
      ↓
View (Re-renders with new state)
```

## 🎯 Key Design Patterns

### 1. **Clean Architecture**
- Separation of concerns across layers
- Dependency rule: Dependencies point inward
- Framework independence in domain layer

### 2. **MVVM (Model-View-ViewModel)**
- **Model**: Entities and business logic
- **View**: UI components
- **ViewModel**: Manages UI state and mediates between View and Model

### 3. **Observer Pattern**
- ViewModel notifies View of state changes
- Reactive updates to UI

### 4. **Repository Pattern**
- Abstraction over data access
- Centralized data management

### 5. **Dependency Injection**
- DIContainer manages all dependencies
- Loose coupling between components

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6 module support
- Local web server (for ES6 modules)

### Installation

1. **Using Python Server:**
```bash
cd portfolio-app
python -m http.server 8000
```

2. **Using Node.js:**
```bash
npm install -g http-server
http-server portfolio-app -p 8000
```

3. **Using VS Code Live Server:**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

### Access
Open your browser and navigate to:
- `http://localhost:8000`

## 🎨 Features

- ✨ Clean Architecture with MVVM pattern
- 📱 Fully responsive design
- 🎭 Animated particle background
- 🔄 Smooth scroll animations
- 📊 Interactive skill cards
- ⏱️ Experience timeline
- 🎯 Project showcase
- 📧 Contact methods
- 🌙 Dark theme with gradient accents

## 🧪 Architecture Benefits

### Maintainability
- Clear separation of concerns
- Easy to locate and modify specific functionality
- Independent layer testing

### Testability
- Business logic isolated from UI
- Mock data sources for testing
- Unit test each layer independently

### Scalability
- Easy to add new features
- Plug-and-play components
- Minimal impact on existing code

### Flexibility
- Swap data sources without changing business logic
- Replace UI framework without touching domain code
- Easy to extend with new use cases

## 📝 Adding New Features

### Adding a New Section (e.g., "Certifications")

1. **Create Entity** (`src/domain/entities/Certification.js`)
2. **Create Use Case** (`src/domain/usecases/GetCertificationsUseCase.js`)
3. **Add to Data Source** (`src/data/PortfolioDataSource.js`)
4. **Add to Repository** (`src/data/repositories/PortfolioRepositoryImpl.js`)
5. **Create Component** (`src/presentation/components/CertificationsComponent.js`)
6. **Update ViewModel** (Add certification state and method)
7. **Update View** (Render the new component)
8. **Update DI Container** (Wire up dependencies)

## 🔧 Technologies Used

- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Fonts**: Manrope, JetBrains Mono
- **Architecture**: Clean Architecture, MVVM
- **Patterns**: Observer, Repository, Dependency Injection

## 👤 Author

**Madheshwaran J**
- Email: waranmadhesh24@gmail.com
- LinkedIn: [madheshwaran-j](https://linkedin.com/in/madheshwaran-j/)
- GitHub: [Madhesh0203](https://github.com/Madhesh0203)

## 📄 License

This project is open source and available for educational purposes.

---

**Built with Clean Architecture & MVVM** 🏗️✨
