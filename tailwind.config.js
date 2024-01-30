import preline from 'preline/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.edge', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [preline],
  darkMode: 'class',
}
