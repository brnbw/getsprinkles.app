const plugins = [
  require("postcss-import"),
  require("tailwindcss"),
  require("postcss-preset-env")({
    autoprefixer: { flexbox: "no-2009" },
    stage: 1
  }),
];

module.exports = { plugins };
