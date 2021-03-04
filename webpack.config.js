const { merge } = require("webpack-merge");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rxjs-temp",
    projectName: "shared-UI-library",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "build"),
      filename: "index.js",
      libraryTarget: "commonjs2",
      publicPath: "/build/",
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js"],
    },
  });
};
