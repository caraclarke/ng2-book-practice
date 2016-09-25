var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

const ENV = process.env.NODE_ENV = process.env.ENV = "production";

module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  /*
  * output files are put in the dist folder
  * generates file names with cache-busting hash
  * because using HtmlWebpackPlugin dont have to update index.html when hashes change
  */
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  htmlLoader: {
    // workaround for ng2
    minimize: false
  },

  /*
  * production plugins:
  * NoErrorsPlugin: stops build if there is an error
  * DedupePlugin: detects identical (or almost identical) files and removes them from output
  * UglifyJsPlugin: minifies bundles
  * ExtractTextPlugin: extracts embedded css as external files, adds has to filename
  * DefinePlugin: use to define env variables that we can reference within application
  */
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.DefinePlugin({
      "process.env": {
        "ENV": JSON.stringify(ENV)
      }
    })
  ]
});
