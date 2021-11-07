const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      playfair: ["Playfair Display"],
      playfairsc: ["Playfair Display SC"],
    },
    extend: {
      colors: {
        // Colors you want to add go here
        rose: colors.rose,
        cyan: colors.cyan,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
