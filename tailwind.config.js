module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        link: '#338dbc',
        grey: '#fafafa',
        primary:  {
          DEFAULT: '#338dbc',
          200: '#286f94',
        },
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [],
}
