/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomloop: {
          '0%': { backgroundSize: '200%'},
          '50%': { backgroundSize: '210%'},
          '100%': { backgroundSize: '200%'},
        }
      },
    },
  },
  plugins: [],
}
