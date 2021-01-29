module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-secific column configuration
        wrapper: '1fr min(1200px, 100%) 1fr'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
