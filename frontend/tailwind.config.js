/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'funky-orange': '#FF5722',
        'funky-red': '#F44336',
        'funky-blue': '#2196F3',
        'funky-yellow': '#FFEB3B',
      },
      fontFamily: {
        'funky': ['Comic Sans MS', 'Chalkboard SE', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
