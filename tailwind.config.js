module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ca-black': '#2D2D2D',
        'ca-gray': '#888888',
        'ca-agora-pink': {
          10: '#F9F0FF',
          50: '#F5E5FF',
          100: '#ddaefa',
          300: '#8939C8'
        }
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
