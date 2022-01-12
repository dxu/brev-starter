const CracoAlias = require("craco-alias");
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
        }),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.json",
      },
    },
  ],
};
