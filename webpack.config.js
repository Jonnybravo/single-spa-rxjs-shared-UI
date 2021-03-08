// const { merge } = require("webpack-merge");
const path = require("path");
// const singleSpaDefaults = require("webpack-config-single-spa");

// (webpackConfigEnv, argv) => {
//   const defaultConfig = singleSpaDefaults({
//     orgName: "rxjs-temp",
//     projectName: "shared-UI-library",
//     webpackConfigEnv,
//     argv,
//   });

//   return merge(defaultConfig,

module.exports = {
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
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: "production",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", "jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components",
  },
  // });
};
