module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/localApi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/localApi.js":
/*!*******************************!*\
  !*** ./pages/api/localApi.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  let messages = [{\n    id: 1,\n    msgTitle: \"One\",\n    msgDate: \"2020-02-17T17:17:33.006Z\",\n    msgBody: \"Message1\",\n    sign: \"M1\"\n  }, {\n    id: 2,\n    msgTitle: \"Two\",\n    msgDate: \"2004-03-13T19:14:38.036Z\",\n    msgBody: \"Message2\",\n    sign: \"M2\"\n  }, {\n    id: 3,\n    msgTitle: \"Three\",\n    msgDate: \"2008-04-17T18:09:33.106Z\",\n    msgBody: \"Message3\",\n    sign: \"M3\"\n  }, {\n    id: 4,\n    msgTitle: \"Four\",\n    msgDate: \"2019-05-13T10:11:12.056Z\",\n    msgBody: \"message4\",\n    sign: \"M4\"\n  }, {\n    id: 5,\n    msgTitle: \"Five\",\n    msgDate: \"2018-06-18T20:16:33.006Z\",\n    msgBody: \"Message5\",\n    sign: \"M5\"\n  }, {\n    id: 6,\n    msgTitle: \"Six\",\n    msgDate: \"2011-09-18T12:15:45.216Z\",\n    msgBody: \"Message6\",\n    sign: \"M6\"\n  }, {\n    id: 7,\n    msgTitle: \"Seven\",\n    msgDate: \"2012-08-11\",\n    msgBody: \"Message7T22:17:30.006Z\",\n    sign: \"M7\"\n  }, {\n    id: 8,\n    msgTitle: \"Eight\",\n    msgDate: \"2016-05-10T15:11:22.006Z\",\n    msgBody: \"Message8\",\n    sign: \"M8\"\n  }, {\n    id: 9,\n    msgTitle: \"Nine\",\n    msgDate: \"2018-07-08T18:17:39.016Z\",\n    msgBody: \"Message9\",\n    sign: \"M9\"\n  }, {\n    id: 10,\n    msgTitle: \"Ten\",\n    msgDate: \"2017-03-19T17:17:33.006Z\",\n    msgBody: \"Message10\",\n    sign: \"M10\"\n  }];\n\n  if (req.method === \"GET\") {\n    res.statusCode = 200;\n    res.json(messages);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9jYWxBcGkuanM/Y2E4MyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXNzYWdlcyIsImlkIiwibXNnVGl0bGUiLCJtc2dEYXRlIiwibXNnQm9keSIsInNpZ24iLCJtZXRob2QiLCJzdGF0dXNDb2RlIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0IsTUFBSUMsUUFBUSxHQUFHLENBQ2I7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsWUFBUSxFQUFFLEtBRlo7QUFHRUMsV0FBTyxFQUFFLDBCQUhYO0FBSUVDLFdBQU8sRUFBRSxVQUpYO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBRGEsRUFRYjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxZQUFRLEVBQUUsS0FGWjtBQUdFQyxXQUFPLEVBQUUsMEJBSFg7QUFJRUMsV0FBTyxFQUFFLFVBSlg7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0FSYSxFQWdCYjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxZQUFRLEVBQUUsT0FGWjtBQUdFQyxXQUFPLEVBQUUsMEJBSFg7QUFJRUMsV0FBTyxFQUFFLFVBSlg7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0FoQmEsRUF3QmI7QUFDRUosTUFBRSxFQUFFLENBRE47QUFFRUMsWUFBUSxFQUFFLE1BRlo7QUFHRUMsV0FBTyxFQUFFLDBCQUhYO0FBSUVDLFdBQU8sRUFBRSxVQUpYO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBeEJhLEVBK0JiO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFlBQVEsRUFBRSxNQUZaO0FBR0VDLFdBQU8sRUFBRSwwQkFIWDtBQUlFQyxXQUFPLEVBQUUsVUFKWDtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQS9CYSxFQXVDYjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxZQUFRLEVBQUUsS0FGWjtBQUdFQyxXQUFPLEVBQUUsMEJBSFg7QUFJRUMsV0FBTyxFQUFFLFVBSlg7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0F2Q2EsRUE4Q2I7QUFDRUosTUFBRSxFQUFFLENBRE47QUFFRUMsWUFBUSxFQUFFLE9BRlo7QUFHRUMsV0FBTyxFQUFFLFlBSFg7QUFJRUMsV0FBTyxFQUFFLHdCQUpYO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBOUNhLEVBcURiO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFlBQVEsRUFBRSxPQUZaO0FBR0VDLFdBQU8sRUFBRSwwQkFIWDtBQUlFQyxXQUFPLEVBQUUsVUFKWDtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQXJEYSxFQTREYjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxZQUFRLEVBQUUsTUFGWjtBQUdFQyxXQUFPLEVBQUUsMEJBSFg7QUFJRUMsV0FBTyxFQUFFLFVBSlg7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0E1RGEsRUFvRWI7QUFDRUosTUFBRSxFQUFFLEVBRE47QUFFRUMsWUFBUSxFQUFFLEtBRlo7QUFHRUMsV0FBTyxFQUFFLDBCQUhYO0FBSUVDLFdBQU8sRUFBRSxXQUpYO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBcEVhLENBQWY7O0FBNkVBLE1BQUlQLEdBQUcsQ0FBQ1EsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCUCxPQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsT0FBRyxDQUFDUyxJQUFKLENBQVNSLFFBQVQ7QUFDRDtBQUVGLENBbkZEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvY2FsQXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBtZXNzYWdlcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG1zZ1RpdGxlOiBcIk9uZVwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDIwLTAyLTE3VDE3OjE3OjMzLjAwNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZTFcIixcbiAgICAgIHNpZ246IFwiTTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBtc2dUaXRsZTogXCJUd29cIixcbiAgICAgIG1zZ0RhdGU6IFwiMjAwNC0wMy0xM1QxOToxNDozOC4wMzZaXCIsXG4gICAgICBtc2dCb2R5OiBcIk1lc3NhZ2UyXCIsXG4gICAgICBzaWduOiBcIk0yXCJcblxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBtc2dUaXRsZTogXCJUaHJlZVwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDA4LTA0LTE3VDE4OjA5OjMzLjEwNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZTNcIixcbiAgICAgIHNpZ246IFwiTTNcIlxuXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIG1zZ1RpdGxlOiBcIkZvdXJcIixcbiAgICAgIG1zZ0RhdGU6IFwiMjAxOS0wNS0xM1QxMDoxMToxMi4wNTZaXCIsXG4gICAgICBtc2dCb2R5OiBcIm1lc3NhZ2U0XCIsXG4gICAgICBzaWduOiBcIk00XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgbXNnVGl0bGU6IFwiRml2ZVwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDE4LTA2LTE4VDIwOjE2OjMzLjAwNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZTVcIixcbiAgICAgIHNpZ246IFwiTTVcIlxuXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIG1zZ1RpdGxlOiBcIlNpeFwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDExLTA5LTE4VDEyOjE1OjQ1LjIxNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZTZcIixcbiAgICAgIHNpZ246IFwiTTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBtc2dUaXRsZTogXCJTZXZlblwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDEyLTA4LTExXCIsXG4gICAgICBtc2dCb2R5OiBcIk1lc3NhZ2U3VDIyOjE3OjMwLjAwNlpcIixcbiAgICAgIHNpZ246IFwiTTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDgsXG4gICAgICBtc2dUaXRsZTogXCJFaWdodFwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDE2LTA1LTEwVDE1OjExOjIyLjAwNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZThcIixcbiAgICAgIHNpZ246IFwiTThcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBtc2dUaXRsZTogXCJOaW5lXCIsXG4gICAgICBtc2dEYXRlOiBcIjIwMTgtMDctMDhUMTg6MTc6MzkuMDE2WlwiLFxuICAgICAgbXNnQm9keTogXCJNZXNzYWdlOVwiLFxuICAgICAgc2lnbjogXCJNOVwiXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMCxcbiAgICAgIG1zZ1RpdGxlOiBcIlRlblwiLFxuICAgICAgbXNnRGF0ZTogXCIyMDE3LTAzLTE5VDE3OjE3OjMzLjAwNlpcIixcbiAgICAgIG1zZ0JvZHk6IFwiTWVzc2FnZTEwXCIsXG4gICAgICBzaWduOiBcIk0xMFwiXG4gICAgfSxcbiAgXTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgIHJlcy5qc29uKG1lc3NhZ2VzKTtcbiAgfVxuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/localApi.js\n");

/***/ })

/******/ });