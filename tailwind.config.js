/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
                'neutral50': '#f9f9f9',
              'neutral1000': '#ffffff',
                'neutral100': '#f4f4f4',
                'neutral200': '#e4e4e4',
                'neutral300': '#d3d3d3',
                'neutral400': '#a2a2a2',
                'neutral500': '#737373',
                'neutral600': '#525252',
                'neutral700': '#404040',
                'neutral800': '#262626',
                'neutral900': '#171717',
                'neutral950': '#0a0a0a',
                'error': '#8b141a',
                'success': '#00be74',
                'card-fill': '#16181c',
                'searchbar-fill': '#212327',
                'button-stroke': '#546a7a',
                'bluewash': '#75beef',
                "twitterblue": "#1d9bf0",
            },
      width: {
      'width334': '334px',
    },
      fontFamily: {chirpo: ['Chirp', 'cursive'],},

  },
  plugins: [],
}}