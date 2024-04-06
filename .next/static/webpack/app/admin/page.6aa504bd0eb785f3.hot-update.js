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

/***/ "(app-pages-browser)/./components/admin dashboard/NewProduct.jsx":
/*!***************************************************!*\
  !*** ./components/admin dashboard/NewProduct.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globalContext */ \"(app-pages-browser)/./app/globalContext.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst NewProduct = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const image_ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [productDetails, setProductDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        price: \"\",\n        description: \"\"\n    });\n    const image_click = ()=>{\n        image_ref.current.click();\n    };\n    const image_changed = (e)=>{\n        const reader = new FileReader();\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n            reader.onload = (e)=>{\n                setImage(e.target.result);\n            };\n        }\n    };\n    const inputChanged = (e)=>{\n        setProductDetails({\n            ...productDetails,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submit = async ()=>{\n        if (image === null) return;\n        const formData = new FormData();\n        formData.append(\"name\", productDetails.name);\n        formData.append(\"price\", productDetails.price);\n        formData.append(\"description\", productDetails.description);\n        formData.append(\"image\", image);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/api/v1/admin/item/add\", formData, {\n            headers: {\n                Accept: \"application/json\"\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"bg-white  h-[600px] w-[400px] p-6 rounded-lg justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-2xl\",\n                    children: \"New Product\"\n                }, void 0, false, {\n                    fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[200px] h-[200px] newProductImage cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                onClick: ()=>{\n                                    image_click();\n                                },\n                                className: \"w-[200px] rounded-md h-[200px] newProductImage cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"2\",\n                                type: \"file\",\n                                accept: \"image/*\",\n                                ref: image_ref,\n                                onChange: image_changed,\n                                className: \"d-none\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined),\n                            image === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-600 gone\",\n                                children: \"Image not set\"\n                            }, void 0, false, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 40\n                            }, undefined) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        className: \"text-black\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        required: true,\n                                        onChange: inputChanged,\n                                        name: \"name\",\n                                        className: \"outline-none p-2 rounded-md\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"description\",\n                                        className: \"text-black\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        required: true,\n                                        onChange: inputChanged,\n                                        name: \"description\",\n                                        className: \"outline-none p-2 rounded-md\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"price\",\n                                        className: \"text-black\",\n                                        children: \"Price In Eth\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        required: true,\n                                        onChange: inputChanged,\n                                        name: \"price\",\n                                        className: \"outline-none p-2 rounded-md\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            submit();\n                        },\n                        className: \"bg-blue-600 hover:text-white p-3 w-[200px] rounded-md text-lg hover:shadow-md font-bold\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/emenike/projects/upcoming projects/e-commerce/components/admin dashboard/NewProduct.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewProduct, \"1jXaWbVnJSEp8wCLbj34UcUVdJI=\");\n_c = NewProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProduct);\nvar _c;\n$RefreshReg$(_c, \"NewProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWRtaW4gZGFzaGJvYXJkL05ld1Byb2R1Y3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytDO0FBQ3RCO0FBQ3NCO0FBRS9DLE1BQU1LLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1JLFlBQVlMLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7UUFDakRPLE1BQUs7UUFDTEMsT0FBTTtRQUNOQyxhQUFZO0lBQ2Q7SUFDRixNQUFNQyxjQUFhO1FBQ2ZOLFVBQVVPLE9BQU8sQ0FBQ0MsS0FBSztJQUMzQjtJQUNBLE1BQU1DLGdCQUFjLENBQUNDO1FBQ2pCLE1BQU1DLFNBQVMsSUFBSUM7UUFDbkIsSUFBR0YsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRSxFQUFDO1lBQ2pCSCxPQUFPSSxhQUFhLENBQUNMLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7WUFDdENILE9BQU9LLE1BQU0sR0FBQyxDQUFDTjtnQkFDWFgsU0FBU1csRUFBRUcsTUFBTSxDQUFDSSxNQUFNO1lBQzVCO1FBQ0o7SUFDSjtJQUNBLE1BQU1DLGVBQWEsQ0FBQ1I7UUFDaEJSLGtCQUFrQjtZQUNoQixHQUFHRCxjQUFjO1lBQ2pCLENBQUNTLEVBQUVHLE1BQU0sQ0FBQ1YsSUFBSSxDQUFDLEVBQUVPLEVBQUVHLE1BQU0sQ0FBQ00sS0FBSztRQUNqQztJQUNGO0lBQ0EsTUFBTUMsU0FBUTtRQUNaLElBQUd0QixVQUFVLE1BQU07UUFDbkIsTUFBTXVCLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxRQUFRdEIsZUFBZUUsSUFBSTtRQUMzQ2tCLFNBQVNFLE1BQU0sQ0FBQyxTQUFTdEIsZUFBZUcsS0FBSztRQUM3Q2lCLFNBQVNFLE1BQU0sQ0FBQyxlQUFldEIsZUFBZUksV0FBVztRQUN6RGdCLFNBQVNFLE1BQU0sQ0FBQyxTQUFTekI7UUFDekIsTUFBTTBCLFdBQVcsTUFBTS9CLDZDQUFLQSxDQUFDZ0MsSUFBSSxDQUFDLCtDQUErQ0osVUFBVTtZQUN2RkssU0FBUztnQkFBQ0MsUUFBUTtZQUFrQjtRQUN4QztJQUNGO0lBQ0oscUJBQ00sOERBQUNDO1FBQUlDLE9BQU07OzBCQUNQLDhEQUFDRDtnQkFBSUUsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFdEMsOERBQUNFOztrQ0FDRyw4REFBQ0o7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBSUMsS0FBS3BDO2dDQUFPcUMsU0FBUztvQ0FBSzdCO2dDQUFhO2dDQUFHd0IsV0FBVTs7Ozs7OzBDQUN6RCw4REFBQ007Z0NBQU1qQyxNQUFLO2dDQUFJa0MsTUFBSztnQ0FBT0MsUUFBTztnQ0FBVUMsS0FBS3ZDO2dDQUFXd0MsVUFBVS9CO2dDQUFlcUIsV0FBVTs7Ozs7OzRCQUM5RmhDLFVBQVUscUJBQU8sOERBQUNpQztnQ0FBRUQsV0FBVTswQ0FBb0I7Ozs7OzRDQUFvQjs7Ozs7OztrQ0FFMUUsOERBQUNGO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDVzt3Q0FBTUMsU0FBUTt3Q0FBT1osV0FBVTtrREFBYTs7Ozs7O2tEQUM3Qyw4REFBQ007d0NBQU1DLE1BQUs7d0NBQU9NLFFBQVE7d0NBQUNILFVBQVV0Qjt3Q0FBY2YsTUFBSzt3Q0FBTzJCLFdBQVU7Ozs7Ozs7Ozs7OzswQ0FFOUUsOERBQUNGO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ1c7d0NBQU1DLFNBQVE7d0NBQWNaLFdBQVU7a0RBQWE7Ozs7OztrREFDcEQsOERBQUNNO3dDQUFNQyxNQUFLO3dDQUFPTSxRQUFRO3dDQUFDSCxVQUFVdEI7d0NBQWNmLE1BQUs7d0NBQWMyQixXQUFVOzs7Ozs7Ozs7Ozs7MENBRXJGLDhEQUFDRjtnQ0FBSUUsV0FBVTs7a0RBQ1gsOERBQUNXO3dDQUFNQyxTQUFRO3dDQUFRWixXQUFVO2tEQUFhOzs7Ozs7a0RBQzlDLDhEQUFDTTt3Q0FBTUMsTUFBSzt3Q0FBU00sUUFBUTt3Q0FBQ0gsVUFBVXRCO3dDQUFjZixNQUFLO3dDQUFRMkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUduRiw4REFBQ2M7d0JBQU9ULFNBQVMsQ0FBQ3pCOzRCQUNoQkEsRUFBRW1DLGNBQWM7NEJBQ2hCekI7d0JBQ0E7d0JBQUdVLFdBQVU7a0NBQTJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUg7R0F0RU1qQztLQUFBQTtBQXdFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkbWluIGRhc2hib2FyZC9OZXdQcm9kdWN0LmpzeD9mMGViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tICdAL2FwcC9nbG9iYWxDb250ZXh0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTmV3UHJvZHVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgaW1hZ2VfcmVmID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgW3Byb2R1Y3REZXRhaWxzLCBzZXRQcm9kdWN0RGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6JycsXG4gICAgICAgIHByaWNlOicnLFxuICAgICAgICBkZXNjcmlwdGlvbjonJ1xuICAgICAgfSlcbiAgICBjb25zdCBpbWFnZV9jbGljayA9KCk9PntcbiAgICAgICAgaW1hZ2VfcmVmLmN1cnJlbnQuY2xpY2soKVxuICAgIH1cbiAgICBjb25zdCBpbWFnZV9jaGFuZ2VkPShlKT0+e1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKVxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZD0oZSk9PntcbiAgICAgICAgICAgICAgICBzZXRJbWFnZShlLnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaW5wdXRDaGFuZ2VkPShlKT0+e1xuICAgICAgICBzZXRQcm9kdWN0RGV0YWlscyh7XG4gICAgICAgICAgLi4ucHJvZHVjdERldGFpbHMsXG4gICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY29uc3Qgc3VibWl0PSBhc3luYyAoKT0+e1xuICAgICAgICBpZihpbWFnZSA9PT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgcHJvZHVjdERldGFpbHMubmFtZSlcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHByb2R1Y3REZXRhaWxzLnByaWNlKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgcHJvZHVjdERldGFpbHMuZGVzY3JpcHRpb24pXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBpbWFnZSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2FkbWluL2l0ZW0vYWRkJywgZm9ybURhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICB9KVxuICAgICAgfVxuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgIGgtWzYwMHB4XSB3LVs0MDBweF0gcC02IHJvdW5kZWQtbGcganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwnPk5ldyBQcm9kdWN0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMjAwcHhdIGgtWzIwMHB4XSBuZXdQcm9kdWN0SW1hZ2UgY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IG9uQ2xpY2s9eygpPT57aW1hZ2VfY2xpY2soKX19IGNsYXNzTmFtZT0ndy1bMjAwcHhdIHJvdW5kZWQtbWQgaC1bMjAwcHhdIG5ld1Byb2R1Y3RJbWFnZSBjdXJzb3ItcG9pbnRlcicvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0nMicgdHlwZT0nZmlsZScgYWNjZXB0PSdpbWFnZS8qJyByZWY9e2ltYWdlX3JlZn0gb25DaGFuZ2U9e2ltYWdlX2NoYW5nZWR9IGNsYXNzTmFtZT0nZC1ub25lJy8+XG4gICAgICAgICAgICAgICAgICAgIHsgaW1hZ2UgPT09IG51bGwgPyA8cCBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBnb25lJz5JbWFnZSBub3Qgc2V0PC9wPiA6ICcnIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9J3RleHQtYmxhY2snPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgb25DaGFuZ2U9e2lucHV0Q2hhbmdlZH0gbmFtZT0nbmFtZScgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcC0yIHJvdW5kZWQtbWQnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBvbkNoYW5nZT17aW5wdXRDaGFuZ2VkfSBuYW1lPSdkZXNjcmlwdGlvbicgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcC0yIHJvdW5kZWQtbWQnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCIgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz5QcmljZSBJbiBFdGg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiByZXF1aXJlZCBvbkNoYW5nZT17aW5wdXRDaGFuZ2VkfSBuYW1lPSdwcmljZScgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcC0yIHJvdW5kZWQtbWQnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIHAtMyB3LVsyMDBweF0gcm91bmRlZC1tZCB0ZXh0LWxnIGhvdmVyOnNoYWRvdy1tZCBmb250LWJvbGQnID5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdQcm9kdWN0Il0sIm5hbWVzIjpbInVzZUdsb2JhbCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk5ld1Byb2R1Y3QiLCJpbWFnZSIsInNldEltYWdlIiwiaW1hZ2VfcmVmIiwicHJvZHVjdERldGFpbHMiLCJzZXRQcm9kdWN0RGV0YWlscyIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfY2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJpbWFnZV9jaGFuZ2VkIiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJpbnB1dENoYW5nZWQiLCJ2YWx1ZSIsInN1Ym1pdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZGl2IiwiY2xhc3MiLCJjbGFzc05hbWUiLCJwIiwiZm9ybSIsImltZyIsInNyYyIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJyZWYiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsInJlcXVpcmVkIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/admin dashboard/NewProduct.jsx\n"));

/***/ })

});