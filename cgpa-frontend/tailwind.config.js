/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: "#F3F7FA",
                    green: "#188687",
                    blue: "#131A2C",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Assuming Inter or similar, but I'll leave it default for now or ask.
                // Actually user didn't specify font, so I'll just do colors.
            },
        },
    },
    plugins: [],
};
