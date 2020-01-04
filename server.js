/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/server/server-dev.js":
/*!*************************************!*\
  !*** ./src/js/server/server-dev.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n // import logMessage from \"../logger\";\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n      DIST_DIR = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'dist'),\n      HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n      compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default.a); // logMessage({DIST_DIR})\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler));\napp.get('*', (req, res, next) => {\n  try {\n    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n      console.log({\n        HTML_FILE\n      });\n\n      if (err) {\n        return next(err);\n      } // res.set('content-type', 'text/html')\n\n\n      res.set('Content-Security-Policy', 'style-src \\'self\\' https://fonts.googleapis.com; font-src \\'self\\' https://fonts.gstatic.com; default-src \\'self\\' https://fonts.gstatic.com');\n      res.send(result);\n      res.render('/');\n      res.end();\n    });\n  } catch (error) {// Do nothing with that.\n  }\n});\nconst PORT = process.env.PORT || 8080;\napp.listen(PORT, () => {\n  console.log(`App listening to ${PORT}....`);\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/js/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nconst UglifyJsPlugin = __webpack_require__(/*! uglifyjs-webpack-plugin */ \"uglifyjs-webpack-plugin\");\n\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: __dirname + '/.env'\n});\n\nmodule.exports = {\n  entry: {\n    styles: './src/scss/main.scss',\n    polyfill: './src/js/polyfill.js',\n    main: './src/index.js'\n  },\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    publicPath: '/mcagence-maquette-2',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  // devtool: '#source-map',\n  devtool: '#source-map',\n  module: {\n    rules: [{\n      test: /\\.tsx?$/,\n      use: 'ts-loader',\n      exclude: /node_modules/\n    }, {\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(sa|sc|c)ss$/,\n      use: [{\n        loader: MiniCssExtractPlugin.loader,\n        options: {\n          hmr: false,\n          minimize: true\n        }\n      }, 'css-loader', 'postcss-loader', 'sass-loader']\n    }, {\n      test: /\\.(png|svg|jpe?g|gif)$/,\n      use: [{\n        loader: \"file-loader\",\n        options: {\n          // name: '[name].[contenthash].[ext]',\n          name: '[name].[ext]',\n          outputPath: 'img/',\n          publicPath: 'img/',\n          postTransformPublicPath: p => `__webpack_public_path__ + ${p}`\n        }\n      }]\n    }, {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/,\n      use: [{\n        loader: \"file-loader\",\n        options: {\n          // name: '[name].[contenthash].[ext]',\n          name: '[name].[ext]',\n          outputPath: 'polices/',\n          publicPath: 'polices/',\n          postTransformPublicPath: p => `__webpack_public_path__ + ${p}`\n        }\n      }]\n    }, {\n      test: /\\.jsx?$/,\n      exclude: /(node_modules|bower_components|public\\/)/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env'],\n          plugins: [[\"@babel/plugin-transform-runtime\", {\n            \"absoluteRuntime\": false,\n            \"corejs\": false,\n            \"helpers\": true,\n            \"regenerator\": true,\n            \"useESModules\": false\n          }], [\"@babel/plugin-transform-modules-umd\", {\n            \"globals\": {\n              \"es6-promise\": \"Promise\"\n            }\n          }]]\n        }\n      }\n    }\n    /* {\r\n        test: /\\.(png|svg|jpg|gif)$/,\r\n        use: ['file-loader']\r\n    } */\n    ]\n  },\n  resolve: {\n    extensions: ['.tsx', '.ts', '.js']\n  },\n  optimization: {\n    namedModules: false,\n    namedChunks: false,\n    nodeEnv: 'development',\n    flagIncludedChunks: true,\n    occurrenceOrder: true,\n    sideEffects: true,\n    usedExports: true,\n    concatenateModules: true,\n    moduleIds: 'hashed',\n    runtimeChunk: 'single',\n    splitChunks: {\n      cacheGroups: {\n        vendor: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendors',\n          chunks: 'all'\n        }\n      }\n    },\n    minimize: true,\n    minimizer: [new UglifyJsPlugin({\n      test: /\\.js(\\?.*)?$/i,\n      cache: true,\n      parallel: true,\n      extractComments: true\n    })]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), // new webpack.NoEmitOnErrorsPlugin(),\n  new webpack.ProvidePlugin({\n    \"process.env\": dotenv.parsed\n  }), new MiniCssExtractPlugin({\n    // Options similar to the same options in webpackOptions.output\n    // both options are optional\n    filename: '[name].css',\n    chunkFilename: '[id].css'\n  }), new webpack.EnvironmentPlugin({ ...process.env\n  }), new HtmlWebPackPlugin({\n    template: \"./src/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server'],\n    title: process.env.APP_NAME || 'MCAgence',\n    minify: true,\n    cache: true,\n    meta: {\n      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'\n    },\n    chunksSortMode: 'dependency',\n    xhtml: true,\n    hash: true\n  })]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "uglifyjs-webpack-plugin":
/*!******************************************!*\
  !*** external "uglifyjs-webpack-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uglifyjs-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22uglifyjs-webpack-plugin%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });