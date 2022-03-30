module.exports = {
  extends: "stylelint-config-recommended",
  overrides: [
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
};
