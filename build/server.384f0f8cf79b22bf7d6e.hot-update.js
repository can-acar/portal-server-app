exports.id = "server";
exports.modules = {

/***/ "./src/common/containers/App.js":
/*!**************************************!*\
  !*** ./src/common/containers/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Counter */ "./src/common/components/Counter.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/common/actions/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../index.scsss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






var mapStateToProps = function mapStateToProps(state) {
  return {
    counter: state.counter
  };
};

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_3__, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

};
//# sourceMappingURL=server.384f0f8cf79b22bf7d6e.hot-update.js.map