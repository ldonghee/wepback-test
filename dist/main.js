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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/dog.png */ \"./src/images/dog.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\r\\n  background-color: gray;\\r\\n}\\r\\n\\r\\n.top {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  width: 100%;\\r\\n  height: 250px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController.js */ \"./src/controllers/MainController.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    new _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/MainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _views_ContentView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ContentView.js */ \"./src/views/ContentView.js\");\n\r\n\r\nclass MainController {\r\n    constructor() {\r\n        const contentViewEl = document.querySelector('.content');\r\n        this.contentView = new _views_ContentView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contentViewEl);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/controllers/MainController.js?");

/***/ }),

/***/ "./src/images/default-image.jpg":
/*!**************************************!*\
  !*** ./src/images/default-image.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUWGBgXFxgYFxUVGBcVFhcXFhgXGBgYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGC0fHR8tLS0tLS0tKy0rLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS03LS0tLf/AABEIAOUA3AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEEAAUGBwj/xAA6EAABAwIDBgQGAgEDAwUAAAABAAIRAyEEMUEFElFhcfAGgZGhEyKxwdHhMvFCBxQjUqLiFUNicpL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAwADAQEAAAAAAAAAAQIRAyESMUEEIlFSE//aAAwDAQACEQMRAD8AI0VBpoy5Y1y5O3VoBppZCsEhAWgo2VhDmISE9zRxSagVEjdCY1JCMhAPD1m+q+8h31PiezisISviqN9MbE5qS4InOWSmRJClrkwsUbiAdTqK014hUmMTw1ALxNRa+qwFWa5uqxKRqtSgFXe2FfJSKjUyVt1Q+mCm7qKFUqdAwe0H0Txbw/HBbf8A4sQJad1+vP8A+w+491qXUpSfgFplpIK2x5etZdxncPsX30Cww63DgehRALMFtYQWVRnqcv8AxPNPNAf4uEc8/bNGXFvvDsY5/wCm7cEDqaA1ULqi5dV0bTUEapL3FC+okuqKpCtH8QrN9J3kSCO3lJKTKIFAM3kLwhL1G+gIWEot5CUBBKjeUEJbiUA3fU/EVUuKwOT0W1xjk/ftnfgqDHoy9IxvMpD1IcUJKSvhZKFyl6TKaREIS1S0o0AAUysKCUAqtRBVcfEbZriArwWbiuZaRcZW/S3OWGolvcoWB7kpz0bkBamQmpzSkhkKYSMx0JblIQFAYiCXK3vhnY3x6kOB3NSNOCVupsRqFaw+AqP/AIMLugK9AwnhvD03CG70am/st3ToBosABysufLn/AJGnhr282b4UxJE7gHVwCr4jwxiW/wDtk9CD916kYWOphR/3yPxjxbF4KpTs9jmnmCFTle116LXAhwBHA3XLbX8G06gLqPyO4f4n8LXD8mXqleK+44AOUuqI8fgn0nlj2kEd5qk8ro9xj3FptREXqmHI21ElGPKS5MJQOCAhhTAEoFNaUBj2Je4nyFjQgFNai3U3cUFqA2ICEhN3EDggFOUSiS3JkMuUFyUQh3kaBxegc9KL0TEBZwVHfeG8fovSth4cU2BjTJzNoMeS4PZ5LGy1oLiQJvNzlr7BXfEfiSphsN8SnHxJiM4i1yMgFxc2Vyy8Y6uPCTHyrva+KDDunNYMdK828HeKKuMYfjljnsyc2RY5BwORmV2QJbTk2J7/AAubkxywyuNbYTDLGVtqNfecrolaDZtTdBLltaOOkaKZlr2nkwvwdQpfxQE+mzeEhU8ewt09oT79ljZvQcfsmliGw9s8DkV5r4n8PHDOzlpyMZciV6RgcXBT8cGVWltRoIPELbi5rijk4rt4luqQFv8AxRsgUaksHyHLWDwWjAXfjZlNxz2aumKYQyiamQSFACMqCUAKJjlEImNQBCop31O6gLUBvnNSX01ecz31S3M4JbPSj8K6F1JXgxA5nFGy0ouYlFqvkBLLAnsKe4jo0iSABJOQT301b2IIqTGQU5Zalp4zd0vVKT2Qxtt1pJcNHHhxIH1VzDeEqVXB/Cqky75if8r5X4/la/a+JgVDN/lAHM6LuNn0S5gJsABHovO8r7d11JppfC/hOlg2QwZmSTebQM+7rcYtm+QAFYrVIsoo8dVnllbd051NqW0MNFIgZ6Lhdu+Lhh3AFrjyiV6PjQIXKu2PSqVd5wBcJjzzt5J4+O+zltx6VNjf6i0iCS14jTdIjyzjyXS7P8SUsW07jgY5hKqBm7u7jY6LQVdm/Df8Sg0AxcC0hXbPUiPGb3fbe1q5Y+0cIOvmorbQdzA1Gi5faO1iHsJMSctQfuoO0nkHUE/K6/pPZU3HTSWVstv7tSmQcxl+Fw8LrtpO36O9MfKCPS4K5Ry7fx7+rj5p+xRCkFFCxdDEMoUazdQEtCMBAAmNQBgqCFDlAlAdKXZISChDlkKKsToSHukpjilE6pQAKyAsJWQq0lGaubNBBi189FThXdmg728QPP8ASjP1VYdVFLZbq+JZSvuk7zsv4zf7DzXSeLfGeHwJFEfPVAHyjJg03joTwz9luPC+BY1prW3nWnkF82+JjXp4vEMrEucK1SXRG8d8/NymxhZ8PDM/Y5uW76es0vH9JwBewTyK6vZe0KdVgqMdZfNTcbFjK7n/AE32vUFcUWfM2p/2xfe9PsnzfiYzG3FXF+TbdV7LXxDS3MjqIWiZiN2pNit7iZDIieZXFYyo4PIC4ZHXt1NVoiQeaqUqwk9FWo4wfD3XGDHFc/X2sKZeSRHc9FpjjanLJqdqH/cY5tFswPmJGkftXceQ1xpNJBbqLb3PyyjkqPgs3xGLP+RIZ0E5eiIPl5m5F+oK0znev4WF623ODqk0y1xzEdFoqzTJn+7rb4Z3yHvqqhZeclpw9bY80a1xKxXHUkk0CumWMdEgJkcbKdxZulMktUrA1Ma1AQ1soTTTwxEAjZ6bUhQXIw1Y8BTVEB06LDlCZuKTSskCN2yEN/tOLVjmo2nRUJ1IRrCFxSy/+lNU6XYfiP4dM032ILt3mCSRnkV5R/qFhvjV34hli4AvbbMADeEcgPRegbL2Yax/lYZrQ+LfDRY8wXAHIi4I6IwymOQynlHmWDwLnkf8e8D1A8zwXr/+m2wKdBxqj5iRAJiNCYlcGzD1aUAtDmjUcF2Xh/xG2mwAtI8su/ur5crZqJ48ZLt6jUYKn+JMamw/a1+NwjC7/G2eR8guad4sDhPzHlECdLKhj/EDy75jusiQB/I/g8lxeDpmWh7fqCm1zp6c15ttLaLqh3G629Vudq4ypWneORtGQB+xtmtPQoDe774roxxmPbPK210uCxAp0msb/FoM8zY29Ek1SXCMv1ZDRwxIdNoGuohFsTDufHymMt7obLG/1q3eCdMjSLKN05cFeo4cMblP7QCnJ7y0V8fSOS7qu2lmfxxhZ8MR3yVgN7KI0lptGmvdRQGkti6l9eSA0uSe06UfhrA1XKlCb5eUegSd2E9jSGhYSmNaFhjgmbZx1WRyRBqIjuUiJAWbqZCwnIcPvn1SCuW66flC4J8Epbu7IMtzLXSy3gnOEjsKGMO9EwgnW+H9nljJMS69jNlc2xgQ+mZGmqZgaZDWzwCuY4jcJEGy5t7t22k1p5FjcIGkgCb5Ksw6AAIPGdCo1/xqebSd4cWniqFPHB4Dwf7Wsl1tNs3pcNaJSKkuEnT9JTHySgxFa0BVoCL5yCr4uju7pGZMdZ/cLcbPoBrZItqttsnw4KtRlapMMcXNbxIyJ6G/klufSu/ilsfZNWsWioIY3Q5nku4Ozx8PdY24yA5KxRo7spuGrbrx1WO2rl6rCJa4awR3kgY4RFgul8UYUOHxGi4/lzHFcmHc+eWoWuFljK7h7xcggA85Btp9UDngIA83/tZrE39eSotmOOh9MoTKIniNO46pVJhJmdZAyI431/StAfnIcFUFQ4DVVK1GFcLPZC9iCa5oQkBWqtEi+iSWqg2pZ3msgZKXTeOyhLssuf8AakgtEeSwjvXzWed4UhvBBgI1lBUtF/0jd0QuM/fSEAsP09fNPwrWuqNBBAsDfO/sq1X2WYapD54RlbLoloPSGsEDgl1y0AzAVSljBAPEcZSMfiQROn1XNZ22jlPEdAPDnfxH1XlVbZtVtUhhJbD3i5gbjXPIPk0rt/G22twt3gYJ3QGwY1XMN2kx5+G0lrnB0vvBaWkfDAFrifU3AXVxSyb+MOSy1oHbXcGwDnqc0WAx1R1QEBz4Nxyyj6Lf0cI1uglXsBQG9OXRXeTGT0mcd37brw1sw7zalZ08G6A8TGZXc4dwjdjL6Ln9mtBW2w9eLLkyytdOOOl2vVhUKuK3TKQ+o8uvkudxe197E/DB+VpjqQpk2fp6EHAsh2o48lxFdgBO6RHA95LpsRiB8EmdLLlyON1fFNRPJe0b8W589LqadWHDUXkZnrbIpe+VlJ1/wTPqt2S9RJtr5eisgRznsjvikUsp56Z+iZN8++Cegku1HDhaUenX+pQzHenG/VE+wKAh1PnzzlIfRv8A0nb3RS0wLx6ICSLfTvX9JbifS/7CYyfr1S6p9+4CCYTl37qN6RmfZCCTAsoe7T9oCHi9lLjaLXQk8Lqd3r31SMDvqgcM/wA/lEW8JyS6mUx+fUIDaYfH/wDGYN26clr6u2t4wXRGf4CXTri4nMQudx7t0lZ3HtcvS9t/YAxm4Q803NkgxI3TEgjyC4vbOxa2DcHOuJgPFxJEXGh/K6rZm2nNsT06ninbcxHxBuuAc2IIORWuGdx6+M8sJe/rnNk1H1WNe4RmORjUd6Lp8BRha6huMphjAAG6dbq/s7EgrPPv00x61tvcJTWyo4eLzZUcE4RdbD4dpa7y4rGxpvSvtyuKVB7wZgW6mwXm+zqTnVN7WZJ910njHa2434P/AFXd9guUbizkLA8Put8MLpjln26jaG3Sd1rLgZ8+is0sQS2Z06rlsIL3XS7ObbL99z7q/GSI8rauMB/HOc75BFRok2F+5RUqGk/vkrtKjA9ynDD8KxgZG/VRuxrfvVWCD5fRC5pjK85qgUXyid9O/shae/ssdN8u9EgxrTn3kiFUaz35JZGc8u/qlFFgWGvmOPnmhcZztClzZ58sljudvNIFtNvupgaeescpGehWOaYzHLjH4WF5OeQtGl7/AHRQxoNrX69yoce/NY1lxEfSTbnGc+qxzu+qkwcRI0y4ZXS3NnTPTVSSZvMR5RlC2ewqYLi4i7cuU5H6pZXU2eM3dF4HZYHz1vJv3MfRcr4iow8xlNl3+NbJDQZFySuM29uy4Nyb9/2ufHO5ZdtssJJ046u5FiNrbggZCB1UYwQtNjAuzGSubO6bWnthrhBbB5K7RqEXaVzuzqW8/kLrpKDYU5ySjC2x0WydpbwIPKVs/wDeBth/S5bCv3ctVe/3Bgx/IiBwmFjY1cvt/GmrWc48YHQWSsOPZV6jCHEHOY81aw7YXVPTm322+zmrsNlMBAG8MsjIBP3XGYN0ELqcC8EC0mI85SsXK3NNt+Pt/Sblpnrp5+qjCXMwJi954TBTajgbzyGYKU6US4Xk9lCWkz+dOihxOoUGOI/IzTBTm/gaSgnkrGeWfv3ZV6oNyc4An7/tAC85qs88c+ynh06c76KuWzrHsgNlXqHjYWHFLmW53mP2hd7c+7pbXxkEtBjh3xQuGV/eBw/COob8rflJedZ7jKAE9J2MOM/vvmpa8SdOecze3BADN7352i2mmSFzfvrl5KdHswPnMdwqmO2w+jTcWjevwOkwE2mDfO/nzSKzJ4ET3EouO/Zy33GmxnjCq6nutp1KT4PzD5pMcxlKv7GwFaphXVK5Je8kg2yAtGXP1WVcCRmDpFtDf0hdi5gNAB1g1oEN4gXjgsOazGSSNOLeV3a8nx+HcCZWmxNOYAzJgLvNpYEOPyg3vkuf/wDSz8YW+Vt55nILTjz6TyYds2ds8MHPVXN26xztFhNrJb2cmoLe3AXHJDhajnvuegXObS2q4vgH5G268yt1smuJDheQMk8sLIUz3TNuYADdqgwX5jmMyqlJkLa7XxIcG0/+m56lI3DuCAIBz1M5T6K8N+MZ5yeV0zDszvwtx7t6rc4B/r7fpaumyFssLM29+aso6XB1YFjJ0t01TX1dTnA4Z8tVr8LUm08M1YNSY7/tKw4bvcYKHey/awTfQ6IadS9wOXXv6lLSjd8awYHOfrzSrRzy4iM/ZKqvufxxWMJjI59b8e+CNFKkgDXvLyVcgG4I880wn+1Xc/kCqNccLE6oKYtJ+wzEQVLZHHjH1spFUETaDxGfkkWwOJ5a+XVZUHy5yL6xBOdtbAI7XnUcsz9kD6Z59dOPlmginjUTfPU6++ah7+J5cr3z6lWNz5ZFjE369ZNkrcYRMcwIsDOf1RsaKqc+XKevNFBHG4NgTwglE9ogjPK9utu9Ch37OGYPTW3VKiDqmRvEmYAnPQRb09lYweM3KRpXMFjZJknecAXE+ZKquJsCIJzGmXLyHFUMUBIc0neINpyJm5GpE/RZZYeTTHLxp+1toUwbAA2BOUA6/T1S9l7NJo7zpl/zeuXstbQwMPDqhL7iZ4Hg0ctV3WIqtLAQIEWERCy5J4SSNcP2trgMbs928SPVUsVTLabic46LsquGc6S0C11oPENANpgSN4m4Twy3YWeOptxbsLKfgaDmOlpI+ivMp2T6dK8Ds8uK7LXLplNhP8jJtc681ZY3gopttl68UbW37CRnsH71V/DhVaIj7q+OQgIC3RfJF8s49pVoOIt+5m2foqWHqQcpnQ3hNa7UfnggLRqeWihx5XH9hCKk31y9e/dTvwBbP1Hd0lAe46o2PtzFhpCW94/esWgckJE5oEQ83790DDPEX19fujqHKLevkkubylBtlE5djihe3nw7+yZHA+n0Qwfufomn4BrJBuLTGvTLzS3tEg6gkD208vopcdPTvTMqXDIETry6zqfdBCDZzdHOLdbKKIJOptnyGt0qmDNjAn05/VPHGDfI/VIygRv2jQkXE3tc2QVBuzlI4adOSbTdrbTMTc58vLolsYLlwzBiATBIMZcM/KErBsipV3pJOsQNe4VaowOsAfMjIR0k5K1VFoHrxm8fVKNPlJH7Tgqq/jE8J5fZbvZ+2W7vz5BpLzGW62XRyEH0WprAm/fRVjhyYG8bkAjIRORWfJxzJeGfi3W09tCjTBDfmc3eLNZIkNPO4C5badUVXbwBiBMgiXa24K5VwZfULqrw5xJzG62Lmc0GJaNBaBxvE3vKMOOYjPkuTXGkbnLhfqFhbrbysrgpTlEgwRrlPl/SWKJv3bkCtWbKbBEny4HLXTNFSpTAjpxzz6ojECAnMBAbNyWgzxyEjgM0A6hSmZz666981Za0kNnImOVonrEj2SabDpeZy5fT9JtI+XT2880A9lPh2U4CNc+Mjqk03yOfrrf7JoMxNzNotbuEBGV4PC3rdOaZ6zbPW6Fxtzv1J7+qY0yAJm0cxMmL8CUjgalGw9tYHDry5jigym15kGfr3qi+JI6e5ylDUdbnkc72GUpbUAuvOSE1TcggTf8AlCg3vmIGU5rGj/4z1I+5RQ2/xhcbouD7jP1usp4gWloJiJ6LFivaBV6gFi2bSDa1t3hylV6pmeoPle3BYsRQVh+Ov96KK7iWh7r5gDIACDA4C+XJYsSMdTMNvAmOV4ke3oopzEybbwtabarFiBFWqflBtxNs76pdyM9Cch9VixAqKYlpM8OHT8oS0el/f+lixI2TJJAjsG51y90l5ABMTEeef4+uaxYgwYwfyOvlxVapnpnoIWLERNVg0EZZX1VjD5+uVtJ+oWLFRNjgrlrTkTpANgdUTWwHcsv/ANbvpZYsSAqbpmBAva3T8lMpt1WLEA+u0A2y9TyugoGL8wDpIM8FKxL4f03FU4NtJ9jkq7nkmLZDTjKxYlFEvdc98kVOYzjooWIof//Z\");\n\n//# sourceURL=webpack:///./src/images/default-image.jpg?");

/***/ }),

/***/ "./src/images/dog.png":
/*!****************************!*\
  !*** ./src/images/dog.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./dist/dog.png?cebda7f457d9196f06c4e003bacd1976\");\n\n//# sourceURL=webpack:///./src/images/dog.png?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/views/ContentView.js":
/*!**********************************!*\
  !*** ./src/views/ContentView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n/* harmony import */ var _images_default_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/default-image.jpg */ \"./src/images/default-image.jpg\");\n\r\n\r\n\r\nclass ContentView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(el) {\r\n        super(el);\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n        this.el.innerHTML = `<img src=\"${_images_default_image_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" />`;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/views/ContentView.js?");

/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\r\n    constructor(el) {\r\n        if (!el) throw el;\r\n\r\n        this.el = el;\r\n        return this;\r\n    }\r\n\r\n    hide() {\r\n        this.el.style.display = \"none\";\r\n        return this;\r\n    }\r\n\r\n    show() {\r\n        this.el.style.display = \"\";\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/views/View.js?");

/***/ })

/******/ });