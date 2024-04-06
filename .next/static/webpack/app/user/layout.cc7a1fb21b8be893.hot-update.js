"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/layout",{

/***/ "(app-pages-browser)/./app/user/layout.js":
/*!****************************!*\
  !*** ./app/user/layout.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"(app-pages-browser)/./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalContext */ \"(app-pages-browser)/./app/globalContext.jsx\");\n/* harmony import */ var _components_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/AxiosInstance */ \"(app-pages-browser)/./components/AxiosInstance.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { changeUserNameState, userName } = (0,_globalContext__WEBPACK_IMPORTED_MODULE_6__.useGlobal)();\n    const [logout, setLogout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserDetails();\n    }, []);\n    const fetchUserDetails = async ()=>{\n        const response = await _components_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/user/details\", {\n            params: {\n                userId: localStorage.getItem(\"id\")\n            }\n        });\n        changeUserNameState(response.data.name);\n    };\n    logout && (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.redirect)(\"/auth/login\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (popupRef.current && !popupRef.current.contains(event.target)) {\n                setIsPopupOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-full min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \" flex bg-white justify-between p-2 h-[75px] shadow-sm min-w-full fixed z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center align-items-center md:gap-[10%] gap-[3%] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex gap-1 justify-content-center align-items-center flex-row \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"d-flex rounded-lg fa fa-shopping-cart h-[60px] min-w-[50px] justify-center items-center bg-green-800 text-white text-3xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"md:block hidden font-bold text-3xl m-0\",\n                                        children: \"E-Shop\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-center align-items-center w-[50%]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"text\",\n                                    placeholder: \"Search\",\n                                    className: \"h-10 p-4 text-lg bg-[#f6f9ff] w-2/4 border-2 hidden md:block \"\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-search md:hidden text-2xl me-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex flex-row justify-content-center align-items-center gap-2 relative cursor-pointer w-4/12\",\n                        onClick: ()=>{\n                            setIsPopupOpen(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/1.png\",\n                                className: \"d-flex h-[50px] min-w-[50px] rounded-xl\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 text-xl font-semibold hidden md:block\",\n                                children: \"My Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-caret-down-fill text-black text-lg hidden md:block\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: popupRef,\n                        className: \" \".concat(isPopupOpen && \"show\", \" drop dropdown-menu dropdown-menu-end notifications dropdown-menu-arrow profile\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"dropdown-header text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"font-bold m-0\",\n                                    children: userName\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"dropdown-divider m-0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/user/profile\",\n                                className: \"no-underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"notification-item d-flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"dropdown-item d-flex align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"bi bi-person\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"My Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"dropdown-divider m-0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"notification-item d-flex cursor-pointer\",\n                                onClick: ()=>{\n                                    localStorage.removeItem(\"id\");\n                                    localStorage.removeItem(\"token\");\n                                    js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].remove(\"token\");\n                                    setLogout(true);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"dropdown-item d-flex align-items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"bi bi-box-arrow-right\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Sign Out\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 64,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[80px] w-full \"\n            }, void 0, false, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full bg-[#f6f9FF] h-full fixed p-2 flex-wrap d-flex\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(layout, \"ISde1B1LQl9RFGGW8uaS5KoGlOE=\", false, function() {\n    return [\n        _globalContext__WEBPACK_IMPORTED_MODULE_6__.useGlobal\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ1I7QUFDVDtBQUNRO0FBQ3JCO0FBQ2dCO0FBQ1U7QUFDdkI7QUFDVztBQUUxQyxNQUFNUyxTQUFTO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUN0QixNQUFNLEVBQUVDLG1CQUFtQixFQUFFQyxRQUFRLEVBQUMsR0FBR1AseURBQVNBO0lBQ2xELE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWMsV0FBV2YsNkNBQU1BLENBQUM7SUFDeEJELGdEQUFTQSxDQUFDO1FBQ05pQjtJQUNKLEdBQUUsRUFBRTtJQUNKLE1BQU1BLG1CQUFtQjtRQUNyQixNQUFNQyxXQUFXLE1BQU1iLGlFQUFhQSxDQUFDYyxHQUFHLENBQUMsaUJBQWdCO1lBQ3JEQyxRQUFRO2dCQUNKQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDakM7UUFDSjtRQUNBYixvQkFBb0JRLFNBQVNNLElBQUksQ0FBQ0MsSUFBSTtJQUMxQztJQUNBYixVQUFVTCx5REFBUUEsQ0FBQztJQUNuQlAsZ0RBQVNBLENBQUM7UUFDTixNQUFNMEIscUJBQXFCQyxDQUFBQTtZQUN2QixJQUFHWCxTQUFTWSxPQUFPLElBQUksQ0FBRVosU0FBU1ksT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBRTtnQkFDN0RmLGVBQWU7WUFDbkI7UUFDSjtRQUNBZ0IsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDdkMsT0FBTTtZQUNGSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM5QztJQUNKLEdBQUUsRUFBRTtJQUNOLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQUVGLFdBQVU7Ozs7OztrREFDYiw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQXlDOzs7Ozs7Ozs7Ozs7MENBRTFELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0k7b0NBQU9DLE1BQUs7b0NBQU9DLGFBQVk7b0NBQVNOLFdBQVU7Ozs7Ozs7Ozs7OzBDQUVuRCw4REFBQ0U7Z0NBQUVGLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHckIsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFrR08sU0FBVTs0QkFDbkgzQixlQUFlO3dCQUNuQjs7MENBQ0ksOERBQUM0QjtnQ0FBSUMsS0FBSTtnQ0FBU1QsV0FBVTs7Ozs7OzBDQUM1Qiw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQTRDOzs7Ozs7MENBQ3pELDhEQUFDRTtnQ0FBRUYsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUtmLDhEQUFDVTt3QkFBR0MsS0FBSzlCO3dCQUFVbUIsV0FBVyxJQUEwQixPQUF0QnJCLGVBQWUsUUFBTzs7MENBQ2xELDhEQUFDaUM7Z0NBQUdaLFdBQVU7MENBQ1YsNEVBQUNhO29DQUFHYixXQUFVOzhDQUFpQnhCOzs7Ozs7Ozs7OzswQ0FFbkMsOERBQUNvQzswQ0FBRyw0RUFBQ0U7b0NBQUdkLFdBQVU7Ozs7Ozs7Ozs7OzBDQUNsQiw4REFBQ2hDLGtEQUFJQTtnQ0FBQytDLE1BQU07Z0NBQWlCZixXQUFVOzBDQUNuQyw0RUFBQ1k7b0NBQUdaLFdBQVU7OENBQ1YsNEVBQUNnQjt3Q0FBRWhCLFdBQVU7OzBEQUNULDhEQUFDRTtnREFBRUYsV0FBVTs7Ozs7OzBEQUNiLDhEQUFDaUI7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWxCLDhEQUFDTDswQ0FBRyw0RUFBQ0U7b0NBQUdkLFdBQVU7Ozs7Ozs7Ozs7OzBDQUNsQiw4REFBQ1k7Z0NBQUdaLFdBQVU7Z0NBQTBDTyxTQUFVO29DQUM3RHBCLGFBQWErQixVQUFVLENBQUM7b0NBQ3hCL0IsYUFBYStCLFVBQVUsQ0FBQztvQ0FDeEIvQyxpREFBT0EsQ0FBQ2dELE1BQU0sQ0FBQztvQ0FDaEJ6QyxVQUFVO2dDQUNkOzBDQUNJLDRFQUFDc0M7b0NBQUVoQixXQUFVOztzREFDVCw4REFBQ0U7NENBQUVGLFdBQVU7Ozs7OztzREFDYiw4REFBQ2lCO3NEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPOUIsOERBQUNsQjtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDb0I7Z0JBQUtwQixXQUFVOzBCQUF5RDFCOzs7Ozs7Ozs7Ozs7QUFHakY7R0FyRk1EOztRQUN1Q0oscURBQVNBOzs7QUFzRnRELCtEQUFlSSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91c2VyL2xheW91dC5qcz83YTA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tICcuLi9nbG9iYWxDb250ZXh0J1xuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSAnQC9jb21wb25lbnRzL0F4aW9zSW5zdGFuY2UnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcblxuY29uc3QgbGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZVVzZXJOYW1lU3RhdGUsIHVzZXJOYW1lfSA9IHVzZUdsb2JhbCgpO1xuICAgIGNvbnN0IFtsb2dvdXQsIHNldExvZ291dF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaXNQb3B1cE9wZW4sIHNldElzUG9wdXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHBvcHVwUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmZXRjaFVzZXJEZXRhaWxzKClcbiAgICB9LFtdKVxuICAgIGNvbnN0IGZldGNoVXNlckRldGFpbHMgPSBhc3luYyAoKT0+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KCcvdXNlci9kZXRhaWxzJyx7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNoYW5nZVVzZXJOYW1lU3RhdGUocmVzcG9uc2UuZGF0YS5uYW1lKVxuICAgIH1cbiAgICBsb2dvdXQgJiYgcmVkaXJlY3QoJy9hdXRoL2xvZ2luJylcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZXZlbnQgPT57XG4gICAgICAgICAgICBpZihwb3B1cFJlZi5jdXJyZW50ICYmICEgcG9wdXBSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBzZXRJc1BvcHVwT3BlbihmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgICByZXR1cm4oKT0+e1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfTtcbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsIG1pbi13LWZ1bGwnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nIGZsZXggYmctd2hpdGUganVzdGlmeS1iZXR3ZWVuIHAtMiBoLVs3NXB4XSBzaGFkb3ctc20gbWluLXctZnVsbCBmaXhlZCB6LTEwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbWQ6Z2FwLVsxMCVdIGdhcC1bMyVdIHctZnVsbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBnYXAtMSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXJvdyAnPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2QtZmxleCByb3VuZGVkLWxnIGZhIGZhLXNob3BwaW5nLWNhcnQgaC1bNjBweF0gbWluLXctWzUwcHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSB0ZXh0LTN4bCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOmJsb2NrIGhpZGRlbiBmb250LWJvbGQgdGV4dC0zeGwgbS0wJz5FLVNob3A8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LVs1MCVdJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTZWFyY2gnIGNsYXNzTmFtZT0naC0xMCBwLTQgdGV4dC1sZyBiZy1bI2Y2ZjlmZl0gdy0yLzQgYm9yZGVyLTIgaGlkZGVuIG1kOmJsb2NrICcvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2JpIGJpLXNlYXJjaCBtZDpoaWRkZW4gdGV4dC0yeGwgbWUtNSc+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTIgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgdy00LzEyJyAgb25DbGljaz17KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHNldElzUG9wdXBPcGVuKHRydWUpXG4gICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLzEucG5nJyBjbGFzc05hbWU9J2QtZmxleCBoLVs1MHB4XSBtaW4tdy1bNTBweF0gcm91bmRlZC14bCcvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J20tMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaGlkZGVuIG1kOmJsb2NrJz5NeSBBY2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2JpIGJpLWNhcmV0LWRvd24tZmlsbCB0ZXh0LWJsYWNrIHRleHQtbGcgaGlkZGVuIG1kOmJsb2NrJz48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBmb3IgdXNlciBwcm9maWxlICovfVxuICAgICAgICAgICAgICAgICAgPHVsIHJlZj17cG9wdXBSZWZ9IGNsYXNzTmFtZT17YCAke2lzUG9wdXBPcGVuICYmICdzaG93J30gZHJvcCBkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtZW5kIG5vdGlmaWNhdGlvbnMgZHJvcGRvd24tbWVudS1hcnJvdyBwcm9maWxlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1oZWFkZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtLTAnPnt1c2VyTmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aHIgY2xhc3NOYW1lPSdkcm9wZG93bi1kaXZpZGVyIG0tMCcvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3VzZXIvcHJvZmlsZSd9IGNsYXNzTmFtZT0nbm8tdW5kZXJsaW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdub3RpZmljYXRpb24taXRlbSBkLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2JpIGJpLXBlcnNvbic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TXkgUHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGhyIGNsYXNzTmFtZT0nZHJvcGRvd24tZGl2aWRlciBtLTAnLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uLWl0ZW0gZC1mbGV4IGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvdXQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdiaSBiaS1ib3gtYXJyb3ctcmlnaHQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHsvKiBlbmQgb2YgZHJvcGRvd24gZm9yIHVzZXIgcHJvZmlsZSAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs4MHB4XSB3LWZ1bGwgJz48L2Rpdj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSd3LWZ1bGwgYmctWyNmNmY5RkZdIGgtZnVsbCBmaXhlZCBwLTIgZmxleC13cmFwIGQtZmxleCc+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VHbG9iYWwiLCJheGlvc0luc3RhbmNlIiwiQ29va2llcyIsInJlZGlyZWN0IiwibGF5b3V0IiwiY2hpbGRyZW4iLCJjaGFuZ2VVc2VyTmFtZVN0YXRlIiwidXNlck5hbWUiLCJsb2dvdXQiLCJzZXRMb2dvdXQiLCJpc1BvcHVwT3BlbiIsInNldElzUG9wdXBPcGVuIiwicG9wdXBSZWYiLCJmZXRjaFVzZXJEZXRhaWxzIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsIm5hbWUiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpIiwicCIsImJ1dHRvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ1bCIsInJlZiIsImxpIiwiaDYiLCJociIsImhyZWYiLCJhIiwic3BhbiIsInJlbW92ZUl0ZW0iLCJyZW1vdmUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/user/layout.js\n"));

/***/ })

});