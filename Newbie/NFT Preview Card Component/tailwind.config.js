module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(215, 51%, 70%)',
        'primary-cyan': 'hsl(178, 100%, 50%)',
        'neutral-main': 'hsl(217, 54%, 11%)',
        'neutral-card': 'hsl(216, 50%, 16%)',
        'neutral-line': 'hsl(215, 32%, 27%)',
        'neutral-white': 'hsl(0, 0%, 100%)'
      }
    },
    fontFamily: {
      'outfit': ['"Outfit"', 'sans-serif']
    },
    screens: {
      'mini': '200px',
      'mobile': '375px',
      'desktop': '1440px'
    }
  },
  plugins: [],
}