module.exports = {
  // mode: 'jit',
  content: [ 
    
    "./src/**/*.{js,jsx,ts,tsx}",
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
      },
      backgroundImage: {
        'hero-pattern': "url('/img/polka-dots.svg')",
      }
    },
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
