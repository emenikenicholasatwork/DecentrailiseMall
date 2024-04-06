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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"(app-pages-browser)/./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalContext */ \"(app-pages-browser)/./app/globalContext.jsx\");\n/* harmony import */ var _components_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/AxiosInstance */ \"(app-pages-browser)/./components/AxiosInstance.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { changeUserNameState, userName } = (0,_globalContext__WEBPACK_IMPORTED_MODULE_6__.useGlobal)();\n    const [logout, setLogout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserDetails();\n    }, []);\n    const fetchUserDetails = async ()=>{\n        const response = await _components_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/user/details\", {\n            params: {\n                userId: localStorage.getItem(\"id\")\n            }\n        });\n        changeUserNameState(response.data.name);\n    };\n    logout && (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.redirect)(\"/auth/login\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (popupRef.current && !popupRef.current.contains(event.target)) {\n                setIsPopupOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-full min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \" flex bg-white justify-between p-2 h-[75px] shadow-sm min-w-full fixed z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center align-items-center md:gap-[10%] gap-[3%] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex gap-1 justify-content-center align-items-center flex-row \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"d-flex rounded-lg fa fa-shopping-cart h-[60px] min-w-[50px] justify-center items-center bg-green-800 text-white text-3xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"md:block hidden font-bold text-3xl m-0\",\n                                        children: \"E-Shop\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-center align-items-center w-[50%]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-3 bg-blue-500 text-white rounded-md\",\n                                        children: \"go to admin\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    \"                \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-search md:hidden text-2xl me-5\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex flex-row justify-content-center align-items-center gap-2 relative cursor-pointer w-4/12\",\n                        onClick: ()=>{\n                            setIsPopupOpen(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/1.png\",\n                                className: \"d-flex h-[50px] min-w-[50px] rounded-xl\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 text-xl font-semibold hidden md:block\",\n                                children: \"My Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-caret-down-fill text-black text-lg hidden md:block\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: popupRef,\n                        className: \" \".concat(isPopupOpen && \"show\", \" drop dropdown-menu dropdown-menu-end notifications dropdown-menu-arrow profile\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"dropdown-header text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"font-bold m-0\",\n                                    children: userName\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"dropdown-divider m-0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/user/profile\",\n                                className: \"no-underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"notification-item d-flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"dropdown-item d-flex align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"bi bi-person\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"My Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"dropdown-divider m-0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"notification-item d-flex cursor-pointer\",\n                                onClick: ()=>{\n                                    localStorage.removeItem(\"id\");\n                                    localStorage.removeItem(\"token\");\n                                    js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].remove(\"token\");\n                                    setLogout(true);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"dropdown-item d-flex align-items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"bi bi-box-arrow-right\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Sign Out\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                        lineNumber: 63,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[80px] w-full \"\n            }, void 0, false, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full bg-[#f6f9FF] h-full fixed p-2 flex-wrap d-flex\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/app/user/layout.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(layout, \"ISde1B1LQl9RFGGW8uaS5KoGlOE=\", false, function() {\n    return [\n        _globalContext__WEBPACK_IMPORTED_MODULE_6__.useGlobal\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ1I7QUFDVDtBQUNRO0FBQ3JCO0FBQ2dCO0FBQ1U7QUFDdkI7QUFDVztBQUUxQyxNQUFNUyxTQUFTO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUN0QixNQUFNLEVBQUVDLG1CQUFtQixFQUFFQyxRQUFRLEVBQUMsR0FBR1AseURBQVNBO0lBQ2xELE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWMsV0FBV2YsNkNBQU1BLENBQUM7SUFDeEJELGdEQUFTQSxDQUFDO1FBQ05pQjtJQUNKLEdBQUUsRUFBRTtJQUNKLE1BQU1BLG1CQUFtQjtRQUNyQixNQUFNQyxXQUFXLE1BQU1iLGlFQUFhQSxDQUFDYyxHQUFHLENBQUMsaUJBQWdCO1lBQ3JEQyxRQUFRO2dCQUNKQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDakM7UUFDSjtRQUNBYixvQkFBb0JRLFNBQVNNLElBQUksQ0FBQ0MsSUFBSTtJQUMxQztJQUNBYixVQUFVTCx5REFBUUEsQ0FBQztJQUNuQlAsZ0RBQVNBLENBQUM7UUFDTixNQUFNMEIscUJBQXFCQyxDQUFBQTtZQUN2QixJQUFHWCxTQUFTWSxPQUFPLElBQUksQ0FBRVosU0FBU1ksT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBRTtnQkFDN0RmLGVBQWU7WUFDbkI7UUFDSjtRQUNBZ0IsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDdkMsT0FBTTtZQUNGSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM5QztJQUNKLEdBQUUsRUFBRTtJQUNOLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQUVGLFdBQVU7Ozs7OztrREFDYiw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQXlDOzs7Ozs7Ozs7Ozs7MENBRTFELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNJO3dDQUFPSixXQUFVO2tEQUF3Qzs7Ozs7O29DQUFvQjs7Ozs7OzswQ0FDOUUsOERBQUNFO2dDQUFFRixXQUFVOzs7Ozs7Ozs7Ozs7a0NBR3JCLDhEQUFDRDt3QkFBSUMsV0FBVTt3QkFBa0dLLFNBQVU7NEJBQ25IekIsZUFBZTt3QkFDbkI7OzBDQUNJLDhEQUFDMEI7Z0NBQUlDLEtBQUk7Z0NBQVNQLFdBQVU7Ozs7OzswQ0FDNUIsOERBQUNHO2dDQUFFSCxXQUFVOzBDQUE0Qzs7Ozs7OzBDQUN6RCw4REFBQ0U7Z0NBQUVGLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FLZiw4REFBQ1E7d0JBQUdDLEtBQUs1Qjt3QkFBVW1CLFdBQVcsSUFBMEIsT0FBdEJyQixlQUFlLFFBQU87OzBDQUNsRCw4REFBQytCO2dDQUFHVixXQUFVOzBDQUNWLDRFQUFDVztvQ0FBR1gsV0FBVTs4Q0FBaUJ4Qjs7Ozs7Ozs7Ozs7MENBRW5DLDhEQUFDa0M7MENBQUcsNEVBQUNFO29DQUFHWixXQUFVOzs7Ozs7Ozs7OzswQ0FDbEIsOERBQUNoQyxrREFBSUE7Z0NBQUM2QyxNQUFNO2dDQUFpQmIsV0FBVTswQ0FDbkMsNEVBQUNVO29DQUFHVixXQUFVOzhDQUNWLDRFQUFDYzt3Q0FBRWQsV0FBVTs7MERBQ1QsOERBQUNFO2dEQUFFRixXQUFVOzs7Ozs7MERBQ2IsOERBQUNlOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlsQiw4REFBQ0w7MENBQUcsNEVBQUNFO29DQUFHWixXQUFVOzs7Ozs7Ozs7OzswQ0FDbEIsOERBQUNVO2dDQUFHVixXQUFVO2dDQUEwQ0ssU0FBVTtvQ0FDN0RsQixhQUFhNkIsVUFBVSxDQUFDO29DQUN4QjdCLGFBQWE2QixVQUFVLENBQUM7b0NBQ3hCN0MsaURBQU9BLENBQUM4QyxNQUFNLENBQUM7b0NBQ2hCdkMsVUFBVTtnQ0FDZDswQ0FDSSw0RUFBQ29DO29DQUFFZCxXQUFVOztzREFDVCw4REFBQ0U7NENBQUVGLFdBQVU7Ozs7OztzREFDYiw4REFBQ2U7c0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU85Qiw4REFBQ2hCO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNrQjtnQkFBS2xCLFdBQVU7MEJBQXlEMUI7Ozs7Ozs7Ozs7OztBQUdqRjtHQXBGTUQ7O1FBQ3VDSixxREFBU0E7OztBQXFGdEQsK0RBQWVJLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VzZXIvbGF5b3V0LmpzPzdhMDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwLWljb25zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gJy4uL2dsb2JhbENvbnRleHQnXG5pbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tICdAL2NvbXBvbmVudHMvQXhpb3NJbnN0YW5jZSdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBsYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlVXNlck5hbWVTdGF0ZSwgdXNlck5hbWV9ID0gdXNlR2xvYmFsKCk7XG4gICAgY29uc3QgW2xvZ291dCwgc2V0TG9nb3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcG9wdXBSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoVXNlckRldGFpbHMoKVxuICAgIH0sW10pXG4gICAgY29uc3QgZmV0Y2hVc2VyRGV0YWlscyA9IGFzeW5jICgpPT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJy91c2VyL2RldGFpbHMnLHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2hhbmdlVXNlck5hbWVTdGF0ZShyZXNwb25zZS5kYXRhLm5hbWUpXG4gICAgfVxuICAgIGxvZ291dCAmJiByZWRpcmVjdCgnL2F1dGgvbG9naW4nKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSBldmVudCA9PntcbiAgICAgICAgICAgIGlmKHBvcHVwUmVmLmN1cnJlbnQgJiYgISBwb3B1cFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIHNldElzUG9wdXBPcGVuKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgIHJldHVybigpPT57XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgICB9O1xuICAgIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21pbi1oLWZ1bGwgbWluLXctZnVsbCc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPScgZmxleCBiZy13aGl0ZSBqdXN0aWZ5LWJldHdlZW4gcC0yIGgtWzc1cHhdIHNoYWRvdy1zbSBtaW4tdy1mdWxsIGZpeGVkIHotMTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBtZDpnYXAtWzEwJV0gZ2FwLVszJV0gdy1mdWxsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGdhcC0xIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtcm93ICc+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZC1mbGV4IHJvdW5kZWQtbGcgZmEgZmEtc2hvcHBpbmctY2FydCBoLVs2MHB4XSBtaW4tdy1bNTBweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHRleHQtM3hsJz48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6YmxvY2sgaGlkZGVuIGZvbnQtYm9sZCB0ZXh0LTN4bCBtLTAnPkUtU2hvcDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctWzUwJV0nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncC0zIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCc+Z28gdG8gYWRtaW48L2J1dHRvbj4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYmkgYmktc2VhcmNoIG1kOmhpZGRlbiB0ZXh0LTJ4bCBtZS01Jz48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtMiByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB3LTQvMTInICBvbkNsaWNrPXsoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNQb3B1cE9wZW4odHJ1ZSlcbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvMS5wbmcnIGNsYXNzTmFtZT0nZC1mbGV4IGgtWzUwcHhdIG1pbi13LVs1MHB4XSByb3VuZGVkLXhsJy8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbS0wIHRleHQteGwgZm9udC1zZW1pYm9sZCBoaWRkZW4gbWQ6YmxvY2snPk15IEFjY291bnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYmkgYmktY2FyZXQtZG93bi1maWxsIHRleHQtYmxhY2sgdGV4dC1sZyBoaWRkZW4gbWQ6YmxvY2snPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgey8qIGRyb3Bkb3duIGZvciB1c2VyIHByb2ZpbGUgKi99XG4gICAgICAgICAgICAgICAgICA8dWwgcmVmPXtwb3B1cFJlZn0gY2xhc3NOYW1lPXtgICR7aXNQb3B1cE9wZW4gJiYgJ3Nob3cnfSBkcm9wIGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1lbmQgbm90aWZpY2F0aW9ucyBkcm9wZG93bi1tZW51LWFycm93IHByb2ZpbGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLWhlYWRlciB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZm9udC1ib2xkIG0tMCc+e3VzZXJOYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxociBjbGFzc05hbWU9J2Ryb3Bkb3duLWRpdmlkZXIgbS0wJy8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvdXNlci9wcm9maWxlJ30gY2xhc3NOYW1lPSduby11bmRlcmxpbmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25vdGlmaWNhdGlvbi1pdGVtIGQtZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYmkgYmktcGVyc29uJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NeSBQcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aHIgY2xhc3NOYW1lPSdkcm9wZG93bi1kaXZpZGVyIG0tMCcvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdub3RpZmljYXRpb24taXRlbSBkLWZsZXggY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eyAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ291dCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2JpIGJpLWJveC1hcnJvdy1yaWdodCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIE91dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgey8qIGVuZCBvZiBkcm9wZG93biBmb3IgdXNlciBwcm9maWxlICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzgwcHhdIHctZnVsbCAnPjwvZGl2PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J3ctZnVsbCBiZy1bI2Y2ZjlGRl0gaC1mdWxsIGZpeGVkIHAtMiBmbGV4LXdyYXAgZC1mbGV4Jz57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGluayIsInVzZUdsb2JhbCIsImF4aW9zSW5zdGFuY2UiLCJDb29raWVzIiwicmVkaXJlY3QiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImNoYW5nZVVzZXJOYW1lU3RhdGUiLCJ1c2VyTmFtZSIsImxvZ291dCIsInNldExvZ291dCIsImlzUG9wdXBPcGVuIiwic2V0SXNQb3B1cE9wZW4iLCJwb3B1cFJlZiIsImZldGNoVXNlckRldGFpbHMiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwibmFtZSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImkiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsInVsIiwicmVmIiwibGkiLCJoNiIsImhyIiwiaHJlZiIsImEiLCJzcGFuIiwicmVtb3ZlSXRlbSIsInJlbW92ZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/user/layout.js\n"));

/***/ })

});