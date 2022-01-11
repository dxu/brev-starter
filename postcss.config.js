const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.ts", './**/*.html', "./src/**/*.tsx"],
      // Treat every word in the bundle as a CSS selector
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
