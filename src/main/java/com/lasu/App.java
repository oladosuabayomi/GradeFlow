package com.lasu;

import com.lasu.model.Semester;
import com.lasu.model.Student;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class App {
    public static void main(String[] args) {
        // 1. Configure the Port (Heroku assigns one, or we use 7000 locally)
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "7000"));

        // 2. Start Javalin Server
        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> it.anyHost());
            });
            // Serve static files from the classpath (src/main/resources/public)
            config.staticFiles.add("/public", Location.CLASSPATH);
            // Handle SPA routing - redirect all 404s to index.html
            config.spaRoot.addFile("/", "/public/index.html");
        }).start(port);

        // 3. API Routes
        // Calculate Route (The Brain)
        app.post("/api/calculate", ctx -> {
            try {
                // 1. Receive raw JSON data from Frontend
                Student student = ctx.bodyAsClass(Student.class);

                // 2. Force Recalculation (Just to be safe)
                // The setters we added to the models should handle this, 
                // but explicit calls ensure the logic runs even if deserialization varies.
                for (Semester sem : student.getSemesters()) {
                    sem.calculateGPA();
                }
                student.calculateCGPA();

                // 3. Send back the fully calculated object
                ctx.json(student);
            } catch (Exception e) {
                e.printStackTrace(); // Print full error to console for debugging
                ctx.status(400).json("Error processing data: " + e.getMessage());
            }
        });

        System.out.println("🚀 Server started on http://localhost:" + port);
    }
}