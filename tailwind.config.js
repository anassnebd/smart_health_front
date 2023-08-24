/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'royal_purple': '#5138EE',
        'ice_purple':'#EDE8FF',
        'icon_gray': '#D2D3D5',
        'back_gray': '#F9F9F9',
        'second_royal_blue': '#5272E9'

      }
    },
  },
  plugins: [],
}