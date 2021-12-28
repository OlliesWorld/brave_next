module.exports = {
  // mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontWeight: {
      'extra-bold': 800,
    },
    extend: {
      colors: {
        'regal-green': '#4d8b31',
        'regal-gold': '#503F21',
        'regal-black': '#1e212b',
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
