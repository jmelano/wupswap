/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(5, 18, 36, 0.95), rgba(6, 18, 26, .99)), url('https://t4.ftcdn.net/jpg/03/02/42/29/360_F_302422943_9GKOMluPoaoluoOpN6Rvqi86BMAB1O51.jpg')"
      },
    },
  },
  plugins: [],
}
