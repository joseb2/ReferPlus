/** @type {import('tailwindcss').Config} */
module.exports = { 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'email': '#382110',
        'amazon' : '#f5d47a;'
      },
    },
  },
  plugins: [],
}

