webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Home.jsx":
/*!**********************************!*\
  !*** ./components/Home/Home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useIntersectionObserver */ "./hooks/useIntersectionObserver.js");

var _jsxFileName = "/Users/arul/Desktop/load-more-infinite-scroll/components/Home/Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Home() {
  var _this = this;

  var _useInfiniteQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useInfiniteQuery"])('projects', function _callee(_ref) {
    var _ref$pageParam, pageParam, res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$pageParam = _ref.pageParam, pageParam = _ref$pageParam === void 0 ? "https://gorest.co.in/public/v1/posts" : _ref$pageParam;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(pageParam));

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, {
    getPreviousPageParam: function getPreviousPageParam(firstPage) {
      var _firstPage$meta$pagin;

      return (_firstPage$meta$pagin = firstPage.meta.pagination.links.previous) !== null && _firstPage$meta$pagin !== void 0 ? _firstPage$meta$pagin : false;
    },
    getNextPageParam: function getNextPageParam(lastPage) {
      var _lastPage$meta$pagina;

      return (_lastPage$meta$pagina = lastPage.meta.pagination.links.next) !== null && _lastPage$meta$pagina !== void 0 ? _lastPage$meta$pagina : false;
    }
  }),
      status = _useInfiniteQuery.status,
      data = _useInfiniteQuery.data,
      error = _useInfiniteQuery.error,
      isFetching = _useInfiniteQuery.isFetching,
      isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
      fetchNextPage = _useInfiniteQuery.fetchNextPage,
      hasNextPage = _useInfiniteQuery.hasNextPage;

  var loadMoreButtonRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  Object(_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__["default"])({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Tweets"), status === 'loading' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null) : status === 'error' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Error: ", error.message) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data.pages.map(function (page) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: page.meta.pagination.page + 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, page.data.map(function (project) {
      return __jsx(Tweet, {
        project: project,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      });
    }));
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("button", {
    style: {
      display: "block",
      margin: "0px auto"
    },
    ref: loadMoreButtonRef,
    onClick: fetchNextPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, isFetchingNextPage ? 'Loading ...' : hasNextPage ? 'Loading ...' : 'Nothing more to load')), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, isFetching && !isFetchingNextPage ? 'Background Updating...' : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.767dfb291b492bc407e4.hot-update.js.map