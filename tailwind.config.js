const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          ...defaultTheme.colors.teal,
          700: '#107979'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
