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
          '0%': { backgroundSize: '150%'},
          '50%': { backgroundSize: '160%'},
          '100%': { backgroundSize: '150%'},
        }
      },
    },
  },
  plugins: [],
}
