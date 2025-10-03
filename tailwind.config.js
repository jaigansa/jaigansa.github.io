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
    extend: {},
  },
  plugins: [],
}