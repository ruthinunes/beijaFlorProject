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
    fontFamily: {
      menu: ["MENU-CocoGothic_trial", "sans-serif"],
      title: ["TITLE-Catchy_Mager_Regular", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D7A5A', // substitua pela sua cor primária
        },
        purple: {
          DEFAULT: '#bf8af3', // substitua pela sua cor primária
          800: '#9381BD'
        },
        blackPink: {
          DEFAULT: '#8c4583', // substitua pela sua cor primária
        },
      },
    },
  },
  plugins: [],
}