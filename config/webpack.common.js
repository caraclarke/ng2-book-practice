/*
* https://angular.io/docs/ts/latest/guide/webpack.html
*/

var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {

  /*
  * entry point for bundle
  * polyfills: standard polyfills required to run angular app in modern browsers
  * vendor: vendor files we need, @angular etc.
  * app: our app code
  */
  entry: {
    "polyfills": "./src/polyfills.ts",
    "vendor": "./src/vendor.ts",
    "app": "./src/main.ts"
  },

  /*
  * resolve module file request by looking for matching files with
  * ": explicit extension
  */
  resolve: {
    extensions: ["", ".js", ".ts"]
  },

  /*
  * specify loaders
  * from "specifiy the loaders" section in link listed at top of file:
  * ts: a loader to transpile our Typescript code to ES5, guided by the tsconfig.json file
  * angular2-template-loader: loads ng components template and styles
  * html: for component templates
  * images/fonts: Images and fonts are bundled as well.
  * css: The pattern matches application-wide styles;
  * the second handles component-scoped styles, specified in a component"s styleUrls metadata property
  */
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader", "angular2-template-loader"]
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: "file?name=assets/[name].[hash].[ext]"
      },
      {
        test: /\.css$/,
        exclude: helpers.root("src", "app"),
        loader: ExtractTextPlugin.extract("style", "css?sourceMap")
      },
      {
        test: /\.css$/,
        include: helpers.root("src", "app"),
        loader: "raw"
      }
    ]
  },

  /*
  * CommonsChunkPlugin:
  * want app.js bundle to only contain app code
  * vendor.js bundle to only contain vendor code
  * CommonsChunkPlugin keeps vendor code out of app.js bundle
  *
  * HtmlWebpackPlugin:
  * inject webpack generated js and css files into index.html
  */
  plugins: [
   new webpack.optimize.CommonsChunkPlugin({
     name: ["app", "vendor", "polyfills"]
   }),

   new HtmlWebpackPlugin({
     template: "src/index.html"
   })
 ]
};
