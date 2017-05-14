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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************!*\
  !*** ./2.js ***!
  \**************/
/***/ (function(module, exports) {

eval("/**\n * Created by root on 5/8/17.\n */\nconst handler = {\n    get (target, prop) {\n        console.log(`get ${prop}`);\n         return target[prop]\n    },\n    set (target, prop, value) {\n        console.log(`set ${prop} value ${value}`);\n        target[prop]=value;\n    }\n}\n\n\n\nconst proxy = new Proxy({}, handler);\n\nproxy.a = 1;\nconsole.log(proxy.a);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLzIuanM/YmE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcm9vdCBvbiA1LzgvMTcuXG4gKi9cbmNvbnN0IGhhbmRsZXIgPSB7XG4gICAgZ2V0ICh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdldCAke3Byb3B9YCk7XG4gICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdXG4gICAgfSxcbiAgICBzZXQgKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNldCAke3Byb3B9IHZhbHVlICR7dmFsdWV9YCk7XG4gICAgICAgIHRhcmdldFtwcm9wXT12YWx1ZTtcbiAgICB9XG59XG5cblxuXG5jb25zdCBwcm94eSA9IG5ldyBQcm94eSh7fSwgaGFuZGxlcik7XG5cbnByb3h5LmEgPSAxO1xuY29uc29sZS5sb2cocHJveHkuYSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi8yLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** multi ./2.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./2.js */0);


/***/ })
/******/ ]);