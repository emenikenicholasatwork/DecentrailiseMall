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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalProvider: function() { return /* binding */ GlobalProvider; },\n/* harmony export */   useGlobal: function() { return /* binding */ useGlobal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ GlobalProvider,useGlobal auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nconst { createContext, useState, useContext } = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\nconst GlobalContext = createContext();\nfunction GlobalProvider(param) {\n    let { children } = param;\n    _s();\n    const [userName, setUserName] = useState();\n    const [refresh, setRefresh] = useState(false);\n    const changeUserNameState = (details)=>{\n        setUserName(details);\n    };\n    const changeRefreshState = ()=>{\n        refresh ? setRefresh(false) : setRefresh(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            new_product_form,\n            open_or_close_form,\n            refresh,\n            changeRefreshState,\n            userName,\n            changeUserNameState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/globalContext.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(GlobalProvider, \"3gL0p7gb2qBHVxT0jQtUDRXGmL8=\");\n_c = GlobalProvider;\nfunction useGlobal() {\n    _s1();\n    return useContext(GlobalContext);\n}\n_s1(useGlobal, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE1BQU0sRUFBRUEsYUFBYSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxtRkFBTztBQUcvRCxNQUFNQyxnQkFBZ0JKO0FBQ2YsU0FBU0ssZUFBZSxLQUFXO1FBQVgsRUFBRUMsUUFBUSxFQUFDLEdBQVg7O0lBQzNCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUDtJQUNoQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsU0FBUztJQUd2QyxNQUFNVSxzQkFBc0JDLENBQUFBO1FBQ3hCSixZQUFZSTtJQUNoQjtJQUVBLE1BQU1DLHFCQUFvQjtRQUN0QkosVUFBVUMsV0FBVyxTQUFTQSxXQUFXO0lBQzdDO0lBR0EscUJBQ0ksOERBQUNOLGNBQWNVLFFBQVE7UUFBQ0MsT0FBTztZQUMzQkM7WUFDQUM7WUFDQVI7WUFDQUk7WUFDQU47WUFDQUk7UUFDSjtrQkFDS0w7Ozs7OztBQUdiO0dBMUJnQkQ7S0FBQUE7QUE0QlQsU0FBU2E7O0lBQ1osT0FBT2hCLFdBQVdFO0FBQ3RCO0lBRmdCYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFsQ29udGV4dC5qc3g/YjIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuY29uc3QgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsUHJvdmlkZXIoeyBjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3QgY2hhbmdlVXNlck5hbWVTdGF0ZSA9IGRldGFpbHMgPT57XG4gICAgICAgIHNldFVzZXJOYW1lKGRldGFpbHMpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUmVmcmVzaFN0YXRlID0oKT0+e1xuICAgICAgICByZWZyZXNoID8gc2V0UmVmcmVzaChmYWxzZSkgOiBzZXRSZWZyZXNoKHRydWUpXG4gICAgfVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBuZXdfcHJvZHVjdF9mb3JtLFxuICAgICAgICAgICAgb3Blbl9vcl9jbG9zZV9mb3JtLFxuICAgICAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgICAgIGNoYW5nZVJlZnJlc2hTdGF0ZSxcbiAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgY2hhbmdlVXNlck5hbWVTdGF0ZVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWwoKXtcbiAgICByZXR1cm4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInJlcXVpcmUiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJyZWZyZXNoIiwic2V0UmVmcmVzaCIsImNoYW5nZVVzZXJOYW1lU3RhdGUiLCJkZXRhaWxzIiwiY2hhbmdlUmVmcmVzaFN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm5ld19wcm9kdWN0X2Zvcm0iLCJvcGVuX29yX2Nsb3NlX2Zvcm0iLCJ1c2VHbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globalContext.jsx\n"));

/***/ })

});