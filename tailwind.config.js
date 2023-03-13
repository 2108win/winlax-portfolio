/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      grayDark: "#242424",
      grayDarkOp15: "#24242415",
      grayDarkOp80: "#24242480",
      grayLight: "#f5f6f1",
      grayLightOp15: "#f5f6f115",
      grayLightOp80: "#f5f6f180",
      gray333: "#333333",
      primary: "#f7ab0a",
    },
  },
  plugins: [],
  darkMode: "class",
};
