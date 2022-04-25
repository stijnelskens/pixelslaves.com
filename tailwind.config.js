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
        gray: {
          "border": "#191919",
        },
      },
    },
  },
  plugins: [],
}
