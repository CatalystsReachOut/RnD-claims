/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily :{
      'Manrope': ['Manrope', ...defaultTheme.fontFamily.sans]
  },
    extend: {
      colors:{
        primary : 'var(--highlight-green-color)',
        secondary : 'var(--highlight-grey-color)',
        ternary : 'var(--highlight-light-black-color)',
        quarternary : 'var(--highlight-black-color)'
      },
      
    zIndex:{
      "-1":"-1",
    },
    transformOrigin: {
      "0": "0%",
    },
    fontSize: {
      '2xl': ['2.25em', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }
    ],
    's' : ['0.875em',{
      lineHeight: '1.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
    }],
    'extrasmall' : ['0.75em',{
      lineHeight: '1.125rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
    }],
    }
  },
  variants : {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within']
  },
  plugins: [],
}
}
