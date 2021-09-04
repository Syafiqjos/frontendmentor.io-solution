module.exports = {
  // purge: [ 'index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ternary: 'var(--color-ternary)',
      neutral1: 'var(--color-neutral1)',
      neutral2: 'var(--color-neutral2)',
      neutral3: 'var(--color-neutral3)'
    },
    textColor: {
      primary: 'var(--color-text1)',
      secondary: 'var(--color-text2)'
    },
    extend: {
      fontFamily: {
        'spartan': [ '"Spartan"', 'sans-serif' ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
