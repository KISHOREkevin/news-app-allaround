/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FFF3C7",
        secondary:"#FEC7B4",
        tertiary:"#FC819E",
        final:"#F7418F"
      }
    },
  },
  plugins: [],
}

