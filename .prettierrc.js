module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
}
