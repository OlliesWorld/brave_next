module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontWeight: {
      'extra-bold': 800,
    },
    extend: {
      colors: {
        'regal-green': '#4d8b31',
        'regal-gold': '#503F21',
        'raisin-black': '#1e212b'
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
