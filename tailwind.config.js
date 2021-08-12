module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '13': '13vw',
      },
      maxWidth: {
        'input': '560px'
      },
      opacity: {
        '87': '0.87',
      },
      backgroundColor: {
        'buttonPrimary': '#1a73e8',
        'buttonHover' : '#2b7de9',
        'cus': '#f8f8f8'
      },
      boxShadow: {
        'buttonShadow': '0 1px 2px 0 rgb(66 133 244 / 30%), 0 1px 3px 1px rgb(66 133 244 / 15%)',
        'inputShadow': '0 1px 6px rgb(32 33 36 / 28%)'
      },
      textColor: {
        'cus': '#5f6368'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
