/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        btnGreen: 'hsl(81, 47%, 40%)',
        greenHover: 'hsl(97, 28%, 48%)',
        pColor: 'hsl(146, 28%, 20%, 80%)',
        bgColor: 'hsl(142, 24%, 31%)',
        bgColorHeader: 'hsl(146, 28%, 20%)',
        bgColorHeader95: 'hsl(146, 28%, 20%, 95%)',
      },
    },
  },
  plugins: [],
}
