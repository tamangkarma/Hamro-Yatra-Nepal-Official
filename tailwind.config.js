/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nepali-green": "#006a4e",
        "himalayan-blue": "3a75c4",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}