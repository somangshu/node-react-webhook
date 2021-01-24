/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ \"./src/js/template/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ \"./src/js/theme/index.js\");\n/**\n * First we will load all of this project's JavaScript dependencies which\n * includes React and other helpers.\n */\n__webpack_require__(/*! ./bootstrap */ \"./src/js/bootstrap.js\");\n/**\n * Next, we will create a fresh React component instance and attach it to\n * the page.\n */\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__[\"ThemeProvider\"], {\n  theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/bootstrap.js":
/*!*****************************!*\
  !*** ./src/js/bootstrap.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window._ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/**\n * We'll load the axios HTTP library which allows us to easily issue requests\n * to our Django back-end. This library automatically handles sending the\n * CSRF token as a header based on the value of the \"XSRF\" token cookie.\n */\n\nwindow.axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nwindow.axios.defaults.headers.common[\"X-Requested-With\"] = \"XMLHttpRequest\";\nwindow.axios.defaults.baseURL = \"/api/v1\";\nwindow.axios.defaults.headers.post[\"Content-Type\"] = \"application/json\";\nwindow.axios.defaults.headers.common[\"Accept\"] = \"application/json\";\n\n//# sourceURL=webpack:///./src/js/bootstrap.js?");

/***/ }),

/***/ "./src/js/components/common/GenericNotFound.js":
/*!*****************************************************!*\
  !*** ./src/js/components/common/GenericNotFound.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar GenericNotFound = function GenericNotFound(_ref) {\n  var params = _ref.params;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loader-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title\"\n  }, \"404\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"subtitle\"\n  }, \"NOTHING FOUND\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"description\"\n  }, \"You are on the wrong path. \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"text-light\",\n    to: \"/\"\n  }, \"Try to navigate to Home\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenericNotFound);\n\n//# sourceURL=webpack:///./src/js/components/common/GenericNotFound.js?");

/***/ }),

/***/ "./src/js/template/index.js":
/*!**********************************!*\
  !*** ./src/js/template/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_common_GenericNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/GenericNotFound */ \"./src/js/components/common/GenericNotFound.js\");\n/* harmony import */ var _routes_standaloneRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/standaloneRoutes */ \"./src/js/template/routes/standaloneRoutes.js\");\n/* harmony import */ var _standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./standalone */ \"./src/js/template/standalone/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Template = /*#__PURE__*/function (_Component) {\n  _inherits(Template, _Component);\n\n  var _super = _createSuper(Template);\n\n  function Template(props) {\n    _classCallCheck(this, Template);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Template, [{\n    key: \"render\",\n    value: function render() {\n      var user = this.props.user;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _.map(_routes_standaloneRoutes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], function (route, key) {\n        var component = route.component,\n            path = route.path;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n          exact: true,\n          path: path,\n          key: key,\n          render: function render(route) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_standalone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              component: component,\n              route: route,\n              user: user\n            });\n          }\n        });\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        component: _components_common_GenericNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n      })));\n    }\n  }]);\n\n  return Template;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Template);\n\n//# sourceURL=webpack:///./src/js/template/index.js?");

/***/ }),

/***/ "./src/js/template/routes/standaloneRoutes.js":
/*!****************************************************!*\
  !*** ./src/js/template/routes/standaloneRoutes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/home */ \"./src/js/views/home/index.js\");\n/* harmony import */ var _views_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/host */ \"./src/js/views/host/index.js\");\n/* harmony import */ var _views_participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/participant */ \"./src/js/views/participant/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Home: {\n    component: _views_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    path: \"/\"\n  },\n  Host: {\n    component: _views_host__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    path: \"meeting/:id/host\"\n  },\n  Participant: {\n    component: _views_participant__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    path: \"meeting/:id/participant/\"\n  }\n});\n\n//# sourceURL=webpack:///./src/js/template/routes/standaloneRoutes.js?");

/***/ }),

/***/ "./src/js/template/standalone/index.js":
/*!*********************************************!*\
  !*** ./src/js/template/standalone/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StandaloneLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar StandaloneLayout = /*#__PURE__*/function (_Component) {\n  _inherits(StandaloneLayout, _Component);\n\n  var _super = _createSuper(StandaloneLayout);\n\n  function StandaloneLayout() {\n    _classCallCheck(this, StandaloneLayout);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(StandaloneLayout, [{\n    key: \"render\",\n    value: function render() {\n      var Component = this.props.component;\n      var route = this.props.route;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"inherit\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        route: route\n      }));\n    }\n  }]);\n\n  return StandaloneLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/template/standalone/index.js?");

/***/ }),

/***/ "./src/js/theme/index.js":
/*!*******************************!*\
  !*** ./src/js/theme/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ \"./src/js/theme/palette.js\");\n/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography */ \"./src/js/theme/typography.js\");\n/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overrides */ \"./src/js/theme/overrides/index.js\");\n\n\n\n\nvar theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: _palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  typography: _typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  overrides: _overrides__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  zIndex: {\n    appBar: 1200,\n    drawer: 1100\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/js/theme/index.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiButton.js":
/*!*********************************************!*\
  !*** ./src/js/theme/overrides/MuiButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  contained: {\n    boxShadow: \"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)\",\n    backgroundColor: \"#FFFFFF\"\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiButton.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiIconButton.js":
/*!*************************************************!*\
  !*** ./src/js/theme/overrides/MuiIconButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ \"./src/js/theme/palette.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  root: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].icon,\n    '&:hover': {\n      backgroundColor: 'rgba(0, 0, 0, 0.03)'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiIconButton.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiPaper.js":
/*!********************************************!*\
  !*** ./src/js/theme/overrides/MuiPaper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  elevation1: {\n    boxShadow: \"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)\"\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiPaper.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiTableCell.js":
/*!************************************************!*\
  !*** ./src/js/theme/overrides/MuiTableCell.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ \"./src/js/theme/palette.js\");\n/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typography */ \"./src/js/theme/typography.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  root: _objectSpread(_objectSpread({}, _typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"].body1), {}, {\n    borderBottom: \"1px solid \".concat(_palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].divider)\n  })\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiTableCell.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiTableHead.js":
/*!************************************************!*\
  !*** ./src/js/theme/overrides/MuiTableHead.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  root: {\n    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].grey[50]\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiTableHead.js?");

/***/ }),

/***/ "./src/js/theme/overrides/MuiTypography.js":
/*!*************************************************!*\
  !*** ./src/js/theme/overrides/MuiTypography.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  gutterBottom: {\n    marginBottom: 8\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/MuiTypography.js?");

/***/ }),

/***/ "./src/js/theme/overrides/index.js":
/*!*****************************************!*\
  !*** ./src/js/theme/overrides/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MuiButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MuiButton */ \"./src/js/theme/overrides/MuiButton.js\");\n/* harmony import */ var _MuiIconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MuiIconButton */ \"./src/js/theme/overrides/MuiIconButton.js\");\n/* harmony import */ var _MuiPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MuiPaper */ \"./src/js/theme/overrides/MuiPaper.js\");\n/* harmony import */ var _MuiTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MuiTableCell */ \"./src/js/theme/overrides/MuiTableCell.js\");\n/* harmony import */ var _MuiTableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MuiTableHead */ \"./src/js/theme/overrides/MuiTableHead.js\");\n/* harmony import */ var _MuiTypography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MuiTypography */ \"./src/js/theme/overrides/MuiTypography.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  MuiButton: _MuiButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  MuiIconButton: _MuiIconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  MuiPaper: _MuiPaper__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  MuiTableCell: _MuiTableCell__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  MuiTableHead: _MuiTableHead__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  MuiTypography: _MuiTypography__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/js/theme/overrides/index.js?");

/***/ }),

/***/ "./src/js/theme/palette.js":
/*!*********************************!*\
  !*** ./src/js/theme/palette.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar white = \"#FFFFFF\";\nvar black = \"#253858\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  black: black,\n  white: white,\n  grey: {\n    main: \"#E5E9F4\"\n  },\n  primary: {\n    contrastText: white,\n    dark: \"#00002b\",\n    main: \"#192954\",\n    light: \"#475181\"\n  },\n  secondary: {\n    contrastText: white,\n    dark: \"#321d89\",\n    main: \"#6647ba\",\n    light: \"#9974ed\"\n  },\n  success: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[400]\n  },\n  info: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[400]\n  },\n  warning: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[400]\n  },\n  error: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[400]\n  },\n  text: {\n    primary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blueGrey[900],\n    secondary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blueGrey[600],\n    link: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[600]\n  },\n  background: {\n    \"default\": \"#F5F6F8\",\n    paper: white\n  },\n  icon: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blueGrey[400],\n  divider: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].grey[200]\n});\n\n//# sourceURL=webpack:///./src/js/theme/palette.js?");

/***/ }),

/***/ "./src/js/theme/typography.js":
/*!************************************!*\
  !*** ./src/js/theme/typography.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ \"./src/js/theme/palette.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  h1: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"35px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.24px\",\n    lineHeight: \"40px\"\n  },\n  h2: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"29px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.24px\",\n    lineHeight: \"32px\"\n  },\n  h3: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"24px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.06px\",\n    lineHeight: \"28px\"\n  },\n  h4: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"20px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.06px\",\n    lineHeight: \"24px\"\n  },\n  h5: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"16px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.05px\",\n    lineHeight: \"20px\"\n  },\n  h6: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontWeight: 500,\n    fontSize: \"14px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.05px\",\n    lineHeight: \"20px\"\n  },\n  subtitle1: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontSize: \"16px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.05px\",\n    lineHeight: \"25px\"\n  },\n  subtitle2: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.secondary,\n    fontWeight: 400,\n    fontSize: \"14px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.05px\",\n    lineHeight: \"21px\"\n  },\n  body1: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontSize: \"14px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.05px\",\n    lineHeight: \"21px\"\n  },\n  body2: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.secondary,\n    fontSize: \"12px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"-0.04px\",\n    lineHeight: \"18px\"\n  },\n  button: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.primary,\n    fontSize: \"14px\",\n    fontFamily: \"Inter\"\n  },\n  caption: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.secondary,\n    fontSize: \"11px\",\n    fontFamily: \"Inter\",\n    letterSpacing: \"0.33px\",\n    lineHeight: \"13px\"\n  },\n  overline: {\n    color: _palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.secondary,\n    fontSize: \"11px\",\n    fontFamily: \"Inter\",\n    fontWeight: 500,\n    letterSpacing: \"0.33px\",\n    lineHeight: \"13px\",\n    textTransform: \"uppercase\"\n  }\n});\n\n//# sourceURL=webpack:///./src/js/theme/typography.js?");

/***/ }),

/***/ "./src/js/views/home/index.js":
/*!************************************!*\
  !*** ./src/js/views/home/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/js/views/home/index.js?");

/***/ }),

/***/ "./src/js/views/host/index.js":
/*!************************************!*\
  !*** ./src/js/views/host/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Host = function Host(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"host view\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Host);\n\n//# sourceURL=webpack:///./src/js/views/host/index.js?");

/***/ }),

/***/ "./src/js/views/participant/index.js":
/*!*******************************************!*\
  !*** ./src/js/views/participant/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Participant = function Participant(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Participants view\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Participant);\n\n//# sourceURL=webpack:///./src/js/views/participant/index.js?");

/***/ })

/******/ });