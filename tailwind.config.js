/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this points to your React src
    "./index.html" // Add this if your HTML is outside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
