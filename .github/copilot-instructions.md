# Copilot Instructions for CGPA Calculator

## Project Overview

This is a Java 17 web application built with **Javalin 6** and managed by **Maven**. It is designed to be deployed on platforms like Heroku.

## Architecture & Key Components

-   **Framework**: [Javalin](https://javalin.io/) (Lightweight web framework for Java).
-   **Entry Point**: `src/main/java/com/lasu/App.java` initializes the server, configures CORS, and defines routes.
-   **Build System**: Maven. Uses `maven-shade-plugin` to create an executable uber-jar.
-   **Deployment**: Contains a `Procfile` for Heroku deployment.

## Critical Workflows

### Build

To build the project and generate the shaded JAR:

```bash
mvn clean package
```

### Run Locally

Run the generated JAR file:

```bash
java -jar target/cgpa-calculator-1.0-SNAPSHOT.jar
```

Or run the `main` method in `src/main/java/com/lasu/App.java` directly from the IDE.
The server defaults to port **7000** locally.

### Dependencies

-   **Javalin**: Web server and routing.
-   **Jackson**: JSON serialization/deserialization.
-   **SLF4J Simple**: Logging implementation.

## Coding Conventions

-   **Package Structure**: `com.lasu.*`
-   **Environment Variables**: Use `System.getenv().getOrDefault("KEY", "DEFAULT")` pattern for configuration (e.g., `PORT`).
-   **Routing**: Define routes in `App.java` or separate controller classes if the app grows.
-   **JSON Handling**: Use Jackson (included via dependencies) for request/response bodies.

## Key Files

-   `pom.xml`: Project dependencies and build configuration.
-   `src/main/java/com/lasu/App.java`: Main application class (Server start).
-   `Procfile`: Deployment command for Heroku.
