/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        banner: "#faf5ef",
        orangeColor: "#f69420",
        darkGrey: "#555555",
        pantone: "#9EC1CC",
        darkPantone: "#4F8596",
      },
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  plugins: [],
};
