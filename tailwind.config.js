/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        crawrchet: {
          bg: '#F5F5F0', // Off-white/Beige
          text: '#2D2D2D', // Soft Black
          accent: {
            pink: '#E8A0BF',
            orange: '#F4A261',
          },
          neutral: '#E0E0E0',
        }
      }
    },
  },
  plugins: [],
}
