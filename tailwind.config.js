module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      franklin: ['Libre Franklin'],
    },
    extend: {
      backgroundImage: {
        'figures':"url('/src/resources/assets/media/backgrounds/errors/figures.svg')",
      }
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover'],
      display: ['group-hover'],
      justifyContent: ['hover'],
      backgroundColor: ['even', 'odd'],
      cursor: ['hover', 'focus']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
