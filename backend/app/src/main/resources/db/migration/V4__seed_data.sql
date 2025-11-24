-- Sample categories
INSERT INTO categories (name, slug, description) VALUES
('Java', 'java', 'Articles about Java programming'),
('Spring', 'spring', 'Spring Framework and Spring Boot articles'),
('DevOps', 'devops', 'DevOps practices and tools');

-- Sample tags
INSERT INTO tags (name, slug) VALUES
('Spring Boot', 'spring-boot'),
('Docker', 'docker'),
('Tutorial', 'tutorial'),
('Best Practices', 'best-practices');

-- Sample articles
INSERT INTO articles (title, slug, excerpt, content, status, category_id, published_at) VALUES
(
    'Getting Started with Spring Boot',
    'getting-started-with-spring-boot',
    'Learn the basics of Spring Boot and create your first application.',
    '# Getting Started with Spring Boot

## Introduction

Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.

## Key Features

- Create stand-alone Spring applications
- Embed Tomcat, Jetty or Undertow directly
- Provide opinionated starter dependencies
- Automatically configure Spring and 3rd party libraries

## Sample Code

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

## Conclusion

Spring Boot is a powerful framework that simplifies Spring application development.',
    'PUBLISHED',
    2,
    NOW()
),
(
    'Docker Best Practices',
    'docker-best-practices',
    'Essential best practices for working with Docker containers.',
    '# Docker Best Practices

## Introduction

This article covers essential Docker best practices for production deployments.

## 1. Use Multi-Stage Builds

Multi-stage builds help reduce image size by separating build and runtime dependencies.

```dockerfile
# Build stage
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Runtime stage
FROM eclipse-temurin:21-jre-alpine
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 2. Minimize Layer Count

Combine RUN commands to reduce the number of layers.

## 3. Use .dockerignore

Exclude unnecessary files from the build context.

## Conclusion

Following these practices will help you create efficient, secure Docker images.',
    'PUBLISHED',
    3,
    NOW()
);

-- Link articles to tags
INSERT INTO article_tags (article_id, tag_id) VALUES
(1, 1), -- Getting Started with Spring Boot -> Spring Boot
(1, 3), -- Getting Started with Spring Boot -> Tutorial
(2, 2), -- Docker Best Practices -> Docker
(2, 4); -- Docker Best Practices -> Best Practices
