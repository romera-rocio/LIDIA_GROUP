/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          600: '#6B46C1',
          700: '#5B3BA1',
        },
        brown: {
          DEFAULT: '#8B5E3C',
        },
        orange: {
          500: '#F59E0B',
          600: '#D97706',
        }
      }
    },
  },
  plugins: [],
}