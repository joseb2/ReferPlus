/** @type {import('tailwindcss').Config} */
module.exports = { 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'facebook': '#3b5998',
        'email': '#382110',
        'amazon': '#f5d47a'
      }, 

      fontFamily: { 
        'sans': ['Lato', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

