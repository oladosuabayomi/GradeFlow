package com.lasu;

import com.lasu.model.Semester;
import com.lasu.model.Student;
import io.javalin.Javalin;

public class App {
    public static void main(String[] args) {
        // 1. Configure the Port (Heroku assigns one, or we use 7000 locally)
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "7000"));

        // 2. Start Javalin Server
        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> it.anyHost());
            });
        }).start(port);

        // 3. Test Route (To prove it works)
        app.get("/", ctx -> ctx.result("CSC 303 Backend is Running!"));

        // 4. Calculate Route (The Brain)
        app.post("/calculate", ctx -> {
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