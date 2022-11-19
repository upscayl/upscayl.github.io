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
      fontFamily: {
        primary: ["Poppins"],
        secondary: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
