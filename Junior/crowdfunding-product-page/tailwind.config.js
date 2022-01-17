module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-mobile': "url('/public/images/image-hero-mobile.jpg')",
        'custom-desktop': "url('/public/images/image-hero-desktop.jpg')"
      },
      colors: {
        'primary-moderate': "hsl(176, 50%, 47%)",
        'primary-dark': "hsl(176, 72%, 28%)",
        'neutral-black': "hsl(0, 0%, 0%)",
        'neutral-gray': "hsl(0, 0%, 48%)"
      }
    },
    fontFamily: {
      'commisioner': "'Commissioner', sans-serif"
    }
  },
  plugins: [],
}
