webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/devtools */ "./node_modules/react-query/devtools/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useIntersectionObserver */ "./hooks/useIntersectionObserver.js");

var _jsxFileName = "/Users/arul/Desktop/load-more-infinite-scroll/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //


var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClient"]();
function App() {
  return __jsx(react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClientProvider"], {
    client: queryClient,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(Example, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

function Example() {
  var _this = this;

  var _useInfiniteQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useInfiniteQuery"])('projects', function _callee(_ref) {
    var _ref$pageParam, pageParam, res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$pageParam = _ref.pageParam, pageParam = _ref$pageParam === void 0 ? 1 : _ref$pageParam;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://gorest.co.in/public/v1/posts?page=' + pageParam));

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
      var _firstPage$previousId;

      console.log(firstPage);
      return (_firstPage$previousId = firstPage.previousId) !== null && _firstPage$previousId !== void 0 ? _firstPage$previousId : false;
    },
    getNextPageParam: function getNextPageParam(lastPage) {
      var _lastPage$nextId;

      console.log(lastPage);
      return (_lastPage$nextId = lastPage.nextId) !== null && _lastPage$nextId !== void 0 ? _lastPage$nextId : false;
    }
  }),
      status = _useInfiniteQuery.status,
      data = _useInfiniteQuery.data,
      error = _useInfiniteQuery.error,
      isFetching = _useInfiniteQuery.isFetching,
      isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
      isFetchingPreviousPage = _useInfiniteQuery.isFetchingPreviousPage,
      fetchNextPage = _useInfiniteQuery.fetchNextPage,
      fetchPreviousPage = _useInfiniteQuery.fetchPreviousPage,
      hasNextPage = _useInfiniteQuery.hasNextPage,
      hasPreviousPage = _useInfiniteQuery.hasPreviousPage;

  var loadMoreButtonRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  Object(_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__["default"])({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Infinite Loading"), status === 'loading' ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Loading...") : status === 'error' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Error: ", error.message) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return fetchPreviousPage();
    },
    disabled: !hasPreviousPage || isFetchingPreviousPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load Older' : 'Nothing more to load')), data.pages.map(function (page) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: page.nextId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, page.data.map(function (project) {
      return __jsx("p", {
        style: {
          border: '1px solid gray',
          borderRadius: '5px',
          padding: '10rem 1rem',
          background: "hsla(".concat(project.id * 30, ", 60%, 80%, 1)")
        },
        key: project.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, project.name);
    }));
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("button", {
    ref: loadMoreButtonRef,
    onClick: function onClick() {
      return fetchNextPage();
    },
    disabled: !hasNextPage || isFetchingNextPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load Newer' : 'Nothing more to load')), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, isFetching && !isFetchingNextPage ? 'Background Updating...' : null)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Go to another page")), __jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__["ReactQueryDevtools"], {
    initialIsOpen: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.08af6d78a15306d368a7.hot-update.js.map