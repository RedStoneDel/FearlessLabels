module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({

      'primary': '#3490dc',

      'secondary': '#ffed4a',

      'danger': '#e3342f',

      'dropdown': 'rgba(0, 0, 0, 85%)',

      ...theme('colors'),
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
