module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      body: ['Varela Round']
      },
      colors: {
        gray: { 1000: "#333333"}
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
