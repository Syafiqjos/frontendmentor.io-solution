module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-mobile': "url('/public/images/image-hero-mobile.jpg')",
        'custom-desktop': "url('/public/images/image-hero-desktop.jpg')"
      }
    },
  },
  plugins: [],
}
