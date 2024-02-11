/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#392518",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
