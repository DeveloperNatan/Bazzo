/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
    },
    fontFamily: {
      Aviano: ["Aviano Copper W00 Regular", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      kanit: ["Kanit", "sans serif"],
      principal: ["Bebas Neue"],
    },
  },
  plugins: [],
};
