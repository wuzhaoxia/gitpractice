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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules1 */ \"./src/js/modules1.js\");\n/* harmony import */ var _modules2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules2 */ \"./src/js/modules2.js\");\n/* harmony import */ var _modules3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules3 */ \"./src/js/modules3.js\");\n/* harmony import */ var _json_test_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/test.json */ \"./src/json/test.json\");\nvar _json_test_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/test.json */ \"./src/json/test.json\", 1);\n\r\n// 注意：该index.js不同于学习模块化时，那个用于汇总js的文件\r\n// 模块化技术的index.js只用于汇总各个js模块\r\n// 该index。js是webpack的【入口文件】\r\n// 该文件可以用于汇总：js、css、json、图片、音频、视频\r\n\r\n//汇总所有js模块\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(Object(_modules1__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(1,2));\r\nconsole.log(Object(_modules2__WEBPACK_IMPORTED_MODULE_1__[\"sub\"])(3,2));\r\nconsole.log(_modules3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mul(5,6));\r\nconsole.log(_modules3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mul(12,6));\r\nconsole.log(_json_test_json__WEBPACK_IMPORTED_MODULE_3__)\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules1.js":
/*!****************************!*\
  !*** ./src/js/modules1.js ***!
  \****************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n//分别暴露\r\nfunction sum(a,b){\r\n    return a+b\r\n}\n\n//# sourceURL=webpack:///./src/js/modules1.js?");

/***/ }),

/***/ "./src/js/modules2.js":
/*!****************************!*\
  !*** ./src/js/modules2.js ***!
  \****************************/
/*! exports provided: sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n//统一暴露\r\nfunction sub(a,b){\r\n    return a-b\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/modules2.js?");

/***/ }),

/***/ "./src/js/modules3.js":
/*!****************************!*\
  !*** ./src/js/modules3.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//默认暴露两个函数\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    mul(a,b){\r\n        return a*b\r\n    },//简写\r\n    div:function div(a,b){\r\n        return a/b\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/modules3.js?");

/***/ }),

/***/ "./src/json/test.json":
/*!****************************!*\
  !*** ./src/json/test.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wu\\\",\\\"age\\\":18}\");\n\n//# sourceURL=webpack:///./src/json/test.json?");

/***/ })

/******/ });