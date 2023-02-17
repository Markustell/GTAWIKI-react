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
          '0%': { backgroundSize: '400%'},
          '50%': { backgroundSize: '410%'},
          '100%': { backgroundSize: '400%'},
        },
        zoomloopSm: {
          '0%': { backgroundSize: '200%'},
          '50%': { backgroundSize: '210%'},
          '100%': { backgroundSize: '200%'},
        },
        zoomloopMd: {
          '0%': { backgroundSize: '150%'},
          '50%': { backgroundSize: '160%'},
          '100%': { backgroundSize: '150%'},
        },
        zoomloopLg: {
          '0%': { backgroundSize: '110%'},
          '50%': { backgroundSize: '120%'},
          '100%': { backgroundSize: '110%'},
        },
      },
    },
  },
  plugins: [],
}
