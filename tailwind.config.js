module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Varela Round']
      },
      colors: {
        gray: { 1000: "#333333" }
      },
      screens: {
        '1080p': '1919px',
        'macOld': '2303px',
        'macNew': '2559px',
        '4k': '3839px'
      },
      fontSize: {
        '9xl': '9rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
