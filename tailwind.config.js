/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('resources/wing-bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  plugins: [],
}