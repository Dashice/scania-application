/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'scania-blue-primary': 'rgb(4, 30, 66)',
        'scania-blue-secondary': 'rgb(14, 50, 99)',
        'scania-gray': {
          '100': 'rgb(246, 246, 247)',
          '500': 'rgb(224, 226, 235)',
          '900': 'rgb(23, 23, 25)'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
