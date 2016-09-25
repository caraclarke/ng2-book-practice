var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

/*
* dev server keeps all bundles in memory
* no files generated to dist in development
*/

module.exports = webpackMerge(commonConfig, {
  devtool: "cheap-module-eval-source-map",

  output: {
    path: helpers.root("dist"),
    publicPath: "http://localhost:8080/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },

  /*
  * CSS in JS bundles by default
  * ExtractTextPlugin extracts to external css files
  * HtmlWebpackPlugin then adds as <link> to index.html
  */
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    historyApiFallback: true,
    stats: "minimal"
  }
});
