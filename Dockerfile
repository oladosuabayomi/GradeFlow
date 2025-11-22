# Stage 1: Build the Frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY cgpa-frontend/package*.json ./
RUN npm install
COPY cgpa-frontend/ ./
RUN npm run build

# Stage 2: Build the Backend
FROM maven:3.9-eclipse-temurin-17-alpine AS backend-build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Copy the built frontend files to the static resources folder expected by Javalin
COPY --from=frontend-build /app/frontend/dist ./src/main/resources/public

# Build the application
RUN mvn clean package -DskipTests

# Stage 3: Run the Application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/target/cgpa-calculator-1.0-SNAPSHOT.jar ./app.jar

# Expose the port Render will use (it sets PORT env var, but good to document)
EXPOSE 7000

# Command to run the application
CMD ["java", "-jar", "app.jar"]