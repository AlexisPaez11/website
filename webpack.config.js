const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.mdx?$/,
    use: [
      {
        loader: "@mdx-js/loader",
        options: {
          remarkPlugins: [require("remark-gfm"), require("remark-directive")],
          rehypePlugins: [require("rehype-attr")],
        },
      },
    ],
  })
);