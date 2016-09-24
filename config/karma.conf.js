/*
* tell karma to run tests with webpack
*/
var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    /*
    * karma-test-shim: tells Karma what files to pre-load
    * primes ng test framework with test versions of providers app expects to be pre-loaded
    */
    files: [
      {
        pattern: './config/karma-test-shim.js', watched: false
      }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
