// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This is where you tell Tailwind to scan your Hugo files
  content: [
    "./layouts/**/*.html",  // Scans all your HTML templates (most important)
    "./content/**/*.md",    // Scans Markdown content files for classes
    "./assets/**/*.js",     // Scans any JavaScript files you might be using
    "./archetypes/**/*.md", // Scans archetype files (less common, but safe)
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ef4444", // red-600
          dark: "#f87171",
        },
        bg: {
          light: "#f9fafb", // gray-50
          dark: "#111827",  // gray-900
        },
        card: {
          light: "#ffffff", // white
          dark: "#1f2937",  // gray-800
        },
        text: {
          light: "#1f2937", // gray-900
          dark: "#f3f4f6",  // gray-100
        },
      },
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}