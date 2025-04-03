module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {}
        }
      ]
    });
    return config;
  };