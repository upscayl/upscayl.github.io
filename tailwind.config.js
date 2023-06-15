/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          light: "#F5F3FF",
          primary: "#7C3AED",
          dark: "#6D28D9",
        },
      },
      screens: {
        xs: "370px",
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ['"Open Sans"'],
      },
      keyframes: {
        "zoom-in-out": {
          "0%": { transform: "scale(100%)" },
          "50%": { transform: "scale(110%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      animation: {
        "zoom-in-out": "zoom-in-out 1s  ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
