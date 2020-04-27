const plugins = [
  require("tailwindcss"),
  require("postcss-preset-env")({
    autoprefixer: { flexbox: "no-2009" },
    stage: 1
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    require("@fullhuman/postcss-purgecss")({
      content: ["./public/index.html"],
    })
  );
  plugins.push(
    require("cssnano")({
      preset: ["default", { discardComments: { removeAll: true } }],
    })
  );
}

module.exports = { plugins };
