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
          '0%': { transform: 'scale(1, 1)'},
          '50%': { transform: 'scale(1.2, 1.2)'},
          '100%': { transform: 'scale(1, 1)'},
        }
      },
      animation: {
        zoomloop: 'zoomloop 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
