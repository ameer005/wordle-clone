/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      os: ['"Open Sans", "sans-serif"'],
    },
    screens: {
      xl: { max: "600px" },
      lg: { max: "850px" },
      md: { max: "650px" },
      sm: { max: "500px" },
      xs: { max: "340px" },
    },
    extend: {
      colors: {
        colorBg: "#212121",
        colorWhite: "#ffffff",
        colorKeys: "#818384",
        colorDisabled: "#3a3a3c",
        colorBoarder: "#3a3a3c",
        colorCorrect: "#6aaa64",
        colorPresent: "#f7da21",
        colorPresent2: "#c9b458",
      },
    },
  },
  plugins: [],
};
