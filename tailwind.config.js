const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-cabin)', ...fontFamily.sans],
        serif: ['var(--font-cormorant)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}
