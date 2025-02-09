/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6B705C',
        'secondary': '#A3B18A',
        'accent': '#D9C9A1',
        'background': '#F0EDE5',
      },
    },
  },
  plugins: [],
} 