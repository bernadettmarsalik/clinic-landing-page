/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Montserrat",
    },
    backgroundImage: {
      hero: "url(/assets/bg.jpg)",
      contact: "url(/assets/contact.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3f4238",
          hover: "#6b705c",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#D4A373",
          secondary: "#FAEDCD",
          hover: "#FEFAE0",
        },
        tertiary: "#F5EFF1",
      },
    },
  },
  plugins: [],
};
