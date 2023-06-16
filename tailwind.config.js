/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softBlue: 'hsl(231, 69%, 60%)',
          softRed: 'hsl(0, 94%, 66%)'
        },
        neutral: {
          grayishBlue: 'hsl(229, 8%, 60%)',
          veryDarkBlue: 'hsl(229, 31%, 21%)',
        }
      },
      screens: {
        'xs': '481px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}

