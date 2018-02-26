webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);



/* harmony default export */ __webpack_exports__["a"] = ({
  test() {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://glosbe.com/gapi/translate?from=kor&dest=eng&format=json&pretty=false&phrase=%EB%B2%88%EC%97%AD'
    // ,{
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:1337'
    //   }
    // }
    ).then(x => {
      console.log(x);
      return x.data;
    });
  }
});

/***/ })

})
//# sourceMappingURL=0.0516bd33c3747572d884.hot-update.js.map