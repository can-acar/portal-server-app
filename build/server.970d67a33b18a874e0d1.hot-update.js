exports.id = "server";
exports.modules = {

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_containers_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/containers/App */ "./src/common/containers/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/store/configureStore */ "./src/common/store/configureStore.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_api_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/api/counter */ "./src/common/api/counter.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\Projects\\portal-server-app\\src\\server\\index.js";












var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_5___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_5___default.a["static"]("D:\\Projects\\portal-server-app\\public")).get('/*', function (req, res) {
  Object(_common_api_counter__WEBPACK_IMPORTED_MODULE_6__["fetchCounter"])(function (apiResult) {
    // Read the counter from the request, if provided
    var context = {};
    var params = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(req.query);
    var counter = parseInt(params.counter, 10) || apiResult || 0; // Compile an initial state

    var preloadedState = {
      counter: counter
    }; // Create a new Redux store instance

    var store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"])(preloadedState); // Render the component to a string

    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      location: req.url,
      context: context,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_containers_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })))); // Grab the initial state from our Redux store

    var finalState = store.getState();
    var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"].renderStatic();
    res.send("<!doctype html>\n    <html lang=\"".concat(assets.client.lang, "\" ").concat(helmet.htmlAttributes.toString(), ">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charSet='utf-8' />\n        ").concat(helmet.title.toString(), "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ").concat(helmet.meta.toString(), " \n        ").concat(helmet.link.toString(), " \n        ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n        \n    </head>\n    <body ").concat(helmet.bodyAttributes.toString(), ">\n        <div id=\"root\">").concat(markup, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default()(finalState), "\n        </script>\n        <!-- razzle_static_js -->\n        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </body>\n</html>"));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=server.970d67a33b18a874e0d1.hot-update.js.map