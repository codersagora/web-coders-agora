module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ca-lighter-black': 'var(--lighter-black)',
        'ca-main-agora': 'var(--main)',
        'ca-light': 'var(--light)',
        'ca-light-version-2': 'var(--light-version-2)',
        'ca-secondary-light': 'var(--secondary-light)',
        'ca-text-black': 'var(--text-black)'
      },
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
