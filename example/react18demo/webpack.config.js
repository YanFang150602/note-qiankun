const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const APP_PATH = path.resolve(__dirname, "src");
const { name } = require('./package');

module.exports = {
  entry: path.join(APP_PATH, "index.jsx"),
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, "index.html"),
    }),
  ],
  performance: {
    hints: false,
  },
  devServer: {
    open: true,
    port: 7100,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
