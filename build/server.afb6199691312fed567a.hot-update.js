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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common-tags */ "common-tags");
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(common_tags__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_commons_configureAppStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/commons/configureAppStore */ "./src/app/commons/configureAppStore.js");
/* harmony import */ var _app_commons_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/commons/routes */ "./src/app/commons/routes.js");
/* harmony import */ var _app_commons_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/commons/router */ "./src/app/commons/router.js");
/* harmony import */ var _app_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/index */ "./src/app/index.js");




var _templateObject,
    _jsxFileName = "D:\\Projects\\portal-server-app\\src\\server\\index.js";

















var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var statsFile;
var extractor;

if (false) {}

var helmetContext = {
  htmlAttributes: {
    lang: 'tr'
  }
};
var server = express__WEBPACK_IMPORTED_MODULE_4___default()();

var Render = function Render(markup, extractor, helmet, preloadState) {
  return Object(common_tags__WEBPACK_IMPORTED_MODULE_12__["oneLineTrim"])(Object(common_tags__WEBPACK_IMPORTED_MODULE_12__["html"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n    <!doctype html>\n    <html ", ">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/>\n        <meta charSet='utf-8'/>\n        <base href=\"/\">\n        ", "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        ", "\n        ", "\n        ", "\n        ", "\n\n\n    </head>\n    <body ", ">\n\n    <main id=\"appRoot\" class=\"flex-shrink-0\">", "</main>\n    <script type=\"text/javascript\">\n        window.__INITIAL_STATE__ = ", "\n    </script>\n\n    ", "\n    </body>\n    </html>"])), helmet.htmlAttributes.toString(), helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), extractor.getLinkTags(), extractor.getStyleTags(), helmet.bodyAttributes.toString(), markup, serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default()(preloadState, {
    isJSON: true,
    unsafe: false
  }), extractor.getScriptTags()));
};

var Document = function Document(store, extractor, helmetContext, req) {
  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    context: react_redux__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["StaticRouter"], {
    location: req.path,
    context: react_redux__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_13__["ChunkExtractorManager"], {
    extractor: extractor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_7__["HelmetProvider"], {
    context: helmetContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_app_index__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }))))));
  return html;
};

server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]("D:\\Projects\\portal-server-app\\public")).get('/*', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_app_commons_router__WEBPACK_IMPORTED_MODULE_16__["fetchRoute"])(req, /*#__PURE__*/function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(router) {
                var context, store, promises;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (true) {
                          extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_13__["ChunkExtractor"]({
                            statsFile: path__WEBPACK_IMPORTED_MODULE_11___default.a.resolve('build/loadable-stats.json'),
                            entrypoints: ['client']
                          });
                        }

                        context = {
                          router: router
                        };
                        store = Object(_app_commons_configureAppStore__WEBPACK_IMPORTED_MODULE_14__["default"])(context);
                        store.runSagaTask();
                        promises = _app_commons_routes__WEBPACK_IMPORTED_MODULE_15__["default"].filter(function (route) {
                          return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["matchPath"])(req.url, route);
                        }).map(function (route) {
                          return route.component;
                        }).filter(function (comp) {
                          return comp.prefetch;
                        }).map(function (comp) {
                          return comp.prefetch({
                            dispatch: store.dispatch,
                            state: store.getState()
                          });
                        });
                        Promise.all(promises).then(function () {
                          var preloadedState = store.getState();
                          var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"].renderStatic(); // Grab the initial state from our Redux store

                          var html = Document(store, extractor, helmet, req);
                          var response = Render(html, extractor, helmet, preloadedState);

                          if (context.url) {
                            res.status(301).redirect(context.url);
                          } else {
                            res.status(200).send(response);
                          }
                        });

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=server.afb6199691312fed567a.hot-update.js.map