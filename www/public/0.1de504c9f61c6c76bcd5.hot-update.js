webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = boot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_progressbar__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_util_pure__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);











__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.mixin(__WEBPACK_IMPORTED_MODULE_8__util_util_pure__["a" /* lodashMixin */])
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_progressbar___default.a, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
__WEBPACK_IMPORTED_MODULE_9_axios___default.a.defaults.withCredentials = true
function boot () {
  let router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]({routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */], mode: 'history'})
  let store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__store_store__["a" /* default */])())
  return {
    app: new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
      router,
      store,
      beforeMount () {
        __WEBPACK_IMPORTED_MODULE_1_vue__["default"].root = this
        __WEBPACK_IMPORTED_MODULE_1_vue__["default"].store = this.$store
      },
      render: h => h(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* default */])
    }),
    router,
    store
  }
}


/***/ })

})
//# sourceMappingURL=0.1de504c9f61c6c76bcd5.hot-update.js.map