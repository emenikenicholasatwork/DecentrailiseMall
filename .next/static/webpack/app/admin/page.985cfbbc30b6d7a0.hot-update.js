"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./app/globalContext.jsx":
/*!*******************************!*\
  !*** ./app/globalContext.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalProvider: function() { return /* binding */ GlobalProvider; },\n/* harmony export */   useGlobal: function() { return /* binding */ useGlobal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ GlobalProvider,useGlobal auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nconst { createContext, useState, useContext } = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\nconst GlobalContext = createContext();\nfunction GlobalProvider(param) {\n    let { children } = param;\n    _s();\n    const [userName, setUserName] = useState();\n    const [refresh, setRefresh] = useState(false);\n    const changeUserNameState = (details)=>{\n        setUserName(details);\n    };\n    const changeRefreshState = ()=>{\n        refresh ? setRefresh(false) : setRefresh(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            refresh,\n            changeRefreshState,\n            userName,\n            changeUserNameState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/globalContext.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(GlobalProvider, \"3gL0p7gb2qBHVxT0jQtUDRXGmL8=\");\n_c = GlobalProvider;\nfunction useGlobal() {\n    _s1();\n    return useContext(GlobalContext);\n}\n_s1(useGlobal, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE1BQU0sRUFBRUEsYUFBYSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxtRkFBTztBQUcvRCxNQUFNQyxnQkFBZ0JKO0FBQ2YsU0FBU0ssZUFBZSxLQUFXO1FBQVgsRUFBRUMsUUFBUSxFQUFDLEdBQVg7O0lBQzNCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUDtJQUNoQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsU0FBUztJQUd2QyxNQUFNVSxzQkFBc0JDLENBQUFBO1FBQ3hCSixZQUFZSTtJQUNoQjtJQUVBLE1BQU1DLHFCQUFvQjtRQUN0QkosVUFBVUMsV0FBVyxTQUFTQSxXQUFXO0lBQzdDO0lBR0EscUJBQ0ksOERBQUNOLGNBQWNVLFFBQVE7UUFBQ0MsT0FBTztZQUMzQk47WUFDQUk7WUFDQU47WUFDQUk7UUFDSjtrQkFDS0w7Ozs7OztBQUdiO0dBeEJnQkQ7S0FBQUE7QUEwQlQsU0FBU1c7O0lBQ1osT0FBT2QsV0FBV0U7QUFDdEI7SUFGZ0JZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nbG9iYWxDb250ZXh0LmpzeD9iMjI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5jb25zdCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBmdW5jdGlvbiBHbG9iYWxQcm92aWRlcih7IGNoaWxkcmVufSkge1xuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICBjb25zdCBjaGFuZ2VVc2VyTmFtZVN0YXRlID0gZGV0YWlscyA9PntcbiAgICAgICAgc2V0VXNlck5hbWUoZGV0YWlscylcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VSZWZyZXNoU3RhdGUgPSgpPT57XG4gICAgICAgIHJlZnJlc2ggPyBzZXRSZWZyZXNoKGZhbHNlKSA6IHNldFJlZnJlc2godHJ1ZSlcbiAgICB9XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIHJlZnJlc2gsXG4gICAgICAgICAgICBjaGFuZ2VSZWZyZXNoU3RhdGUsXG4gICAgICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgICAgIGNoYW5nZVVzZXJOYW1lU3RhdGVcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2xvYmFsKCl7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJyZXF1aXJlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJjaGFuZ2VVc2VyTmFtZVN0YXRlIiwiZGV0YWlscyIsImNoYW5nZVJlZnJlc2hTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globalContext.jsx\n"));

/***/ })

});