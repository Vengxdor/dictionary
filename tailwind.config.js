/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary-500': '#891cdb', // purple
        'primary-400': '#aa45fa',
        'primary-200': '#e9d0fa',
        'dark-primary-500': '#4d2e6d',
        'dark-primary-400': '#a047de',
        'dark-primary-200': '#2b143c',
        'dark-background': '#050505'
      }
    }
  },
  plugins: []
}
