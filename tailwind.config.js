module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        logo: {
          black: "#000",
          "black-alt": "#323232",
          white: "#E6E6E6",
          "white-alt": "#ADADAD",
        },
        gray: {
          "border": "#191919",
        },
      },
    },
  },
  plugins: [],
}
