# Ed Loves Teaching

Professional consulting and teaching platform for software development, featuring a modern blog publishing system built with React, Spring Boot, and MySQL.

## Project Overview

This is a monorepo containing:
- **Frontend**: React 19 with TypeScript, Vite, and Tailwind CSS
- **Backend**: Spring Boot 3.2 with Java 21, JPA/Hibernate
- **Database**: MySQL 8.0
- **Deployment**: Docker and Docker Compose for local development

## Features

- ✍️ Blog article publishing with Markdown support
- 🎨 Syntax highlighting for code blocks
- 📁 Category and tag organization
- 🔍 Article filtering by category and tags
- 📱 Responsive design with Tailwind CSS
- 🐳 Containerized deployment with Docker

## Prerequisites

- Docker and Docker Compose
- Java 21 (for local backend development)
- Node.js 20+ (for local frontend development)

## Quick Start

### Using Docker Compose (Recommended)

Start the entire stack with a single command:

```bash
docker-compose up --build
```

Access the application:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:8080
- **API Documentation**: http://localhost:8080/swagger-ui.html

### Local Development

#### Backend

```bash
cd backend
./gradlew bootRun
```

The backend will be available at http://localhost:8080

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

#### Database

Start MySQL with Docker:

```bash
docker-compose up mysql
```

Or use your own MySQL instance and update the connection settings in `backend/app/src/main/resources/application.yml`.

## Project Structure

```
.
├── backend/                    # Spring Boot backend
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/com/consulting/platform/
│   │   │   │   │   ├── article/       # Article domain
│   │   │   │   │   ├── category/      # Category domain
│   │   │   │   │   ├── tag/           # Tag domain
│   │   │   │   │   └── common/        # Shared utilities
│   │   │   │   └── resources/
│   │   │   │       ├── application.yml
│   │   │   │       └── db/migration/  # Flyway migrations
│   │   │   └── test/
│   │   └── build.gradle.kts
│   └── Dockerfile
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── api/               # API client
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── types/             # TypeScript types
│   │   └── App.tsx
│   ├── Dockerfile
│   └── nginx.conf
├── docs/                       # Documentation
│   ├── SPECIFICATION.md
│   ├── IMPLEMENTATION.md
│   └── ROADMAP.md
├── docker-compose.yml
└── README.md
```

## API Endpoints

### Public Endpoints

- `GET /api/v1/articles` - List published articles (paginated)
- `GET /api/v1/articles/{slug}` - Get article by slug
- `GET /api/v1/articles/category/{slug}` - Articles by category
- `GET /api/v1/articles/tag/{slug}` - Articles by tag
- `GET /api/v1/categories` - List all categories
- `GET /api/v1/tags` - List all tags

## Technology Stack

### Backend
- Java 21
- Spring Boot 3.2
- Spring Data JPA
- Flyway (database migrations)
- MySQL 8.0
- Lombok
- MapStruct
- SpringDoc OpenAPI (Swagger)

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query (React Query)
- React Markdown
- React Syntax Highlighter

### Infrastructure
- Docker
- Docker Compose
- Nginx

## Database Schema

The application uses three main entities:
- **Articles**: Blog posts with Markdown content
- **Categories**: Hierarchical article categorization
- **Tags**: Flat tagging system for cross-cutting topics

Database migrations are managed by Flyway and run automatically on application startup.

## Development

### Running Tests

**Backend:**
```bash
cd backend
./gradlew test
```

**Frontend:**
```bash
cd frontend
npm test
```

### Building for Production

**Backend:**
```bash
cd backend
./gradlew build
```

**Frontend:**
```bash
cd frontend
npm run build
```

## Documentation

For detailed information, see the docs folder:
- [SPECIFICATION.md](docs/SPECIFICATION.md) - Feature requirements and specifications
- [IMPLEMENTATION.md](docs/IMPLEMENTATION.md) - Technical implementation details
- [ROADMAP.md](docs/ROADMAP.md) - Development roadmap and progress tracking

## License

Copyright © 2024 Ed Loves Teaching. All rights reserved.

