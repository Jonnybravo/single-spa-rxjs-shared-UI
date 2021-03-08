const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "vendor",
  //     minChunks: Infinity,
  //   }),
  // ],
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
};
