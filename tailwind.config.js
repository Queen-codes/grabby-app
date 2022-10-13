/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-card": "#1B2855",
        "blue-light": "#53608D",
        "aside-color": "#F5F6FB",
        "real-color": "#495683",
        "price-color": "#1C448A",
        "increase-color": "#044E3A",
        "dark-bag": "#121212",
        "dark-text": "#152028",
      },
      fontFamily: {
        "sans-serif": ["Barlow", "san-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        54: "2fr 1fr",
      },
      width: {
        1000: "90vw",
      },
    },
  },
  plugins: [],
};
