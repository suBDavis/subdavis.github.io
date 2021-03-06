/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      primary: colors.purple,
      secondary: colors.gray,
      accent: colors.pink,
      white: colors.white,
      black: colors.black
    }
  },
  // https://github.com/nuxt-community/tailwindcss-module/issues/111
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './plugins/**/*.vue',
    './static/**/*.vue'
  ],
  variants: {},
  plugins: [],
  // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
  future: {
    purgeLayersByDefault: true
  }
}
