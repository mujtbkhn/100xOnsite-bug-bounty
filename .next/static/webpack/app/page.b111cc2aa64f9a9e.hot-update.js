"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _component_TodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/TodoForm */ \"(app-pages-browser)/./component/TodoForm.js\");\n/* harmony import */ var _component_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/TodoList */ \"(app-pages-browser)/./component/TodoList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n//@ts-nocheck\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const addTodo = (text)=>{\n        const newTodo = {\n            id: Math.random(),\n            text,\n            completed: false\n        };\n        setTodos([\n            ...todos,\n            newTodo\n        ]);\n    };\n    const toggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                completed: !todo.completed\n            } : todo));\n    };\n    const deleteTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id != id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                class: \"text-3xl font-bold mb-6\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\app\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TodoForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onAddTodo: addTodo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\app\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                todos: todos,\n                onToggleComplete: toggleComplete,\n                onDelete: deleteTodo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\app\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\app\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZATHeV9x55jFrDOww2hwcxQ3V1U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxhQUFhOzs7QUFHZ0M7QUFDQTtBQUNaO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNSSxVQUFVLENBQUNDO1FBQ2YsTUFBTUMsVUFBVTtZQUNkQyxJQUFJQyxLQUFLQyxNQUFNO1lBQ2ZKO1lBQ0FLLFdBQVc7UUFDYjtRQUNBUCxTQUFTO2VBQUlEO1lBQU9JO1NBQVE7SUFDOUI7SUFFQSxNQUFNSyxpQkFBaUIsQ0FBQ0o7UUFDdEJKLFNBQ0VELE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxPQUNUQSxLQUFLTixFQUFFLEtBQUtBLEtBQUs7Z0JBQUUsR0FBR00sSUFBSTtnQkFBRUgsV0FBVyxDQUFDRyxLQUFLSCxTQUFTO1lBQUMsSUFBSUc7SUFHakU7SUFFQSxNQUFNQyxhQUFhLENBQUNQO1FBQ2xCSixTQUFTRCxNQUFNYSxNQUFNLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS04sRUFBRSxJQUFJQTtJQUM3QztJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdDLE9BQU07MEJBQTBCOzs7Ozs7MEJBQ3BDLDhEQUFDckIsMkRBQVFBO2dCQUFDc0IsV0FBV2hCOzs7Ozs7MEJBQ3JCLDhEQUFDTCwyREFBUUE7Z0JBQ1BHLE9BQU9BO2dCQUNQbUIsa0JBQWtCVjtnQkFDbEJXLFVBQVVSOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FuQ3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXHJcblwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFRvZG9Gb3JtIGZyb20gXCIuLi9jb21wb25lbnQvVG9kb0Zvcm1cIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9jb21wb25lbnQvVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvZG8gPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IHtcclxuICAgICAgaWQ6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBuZXdUb2RvXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldFRvZG9zKFxyXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+XHJcbiAgICAgICAgdG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGNvbXBsZXRlZDogIXRvZG8uY29tcGxldGVkIH0gOiB0b2RvXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xyXG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XHJcbiAgICAgIDxoMSBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02XCI+VG9kbyBMaXN0PC9oMT5cclxuICAgICAgPFRvZG9Gb3JtIG9uQWRkVG9kbz17YWRkVG9kb30gLz5cclxuICAgICAgPFRvZG9MaXN0XHJcbiAgICAgICAgdG9kb3M9e3RvZG9zfVxyXG4gICAgICAgIG9uVG9nZ2xlQ29tcGxldGU9e3RvZ2dsZUNvbXBsZXRlfVxyXG4gICAgICAgIG9uRGVsZXRlPXtkZWxldGVUb2RvfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVG9kb0Zvcm0iLCJUb2RvTGlzdCIsInVzZVN0YXRlIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJhZGRUb2RvIiwidGV4dCIsIm5ld1RvZG8iLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJjb21wbGV0ZWQiLCJ0b2dnbGVDb21wbGV0ZSIsIm1hcCIsInRvZG8iLCJkZWxldGVUb2RvIiwiZmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJjbGFzcyIsIm9uQWRkVG9kbyIsIm9uVG9nZ2xlQ29tcGxldGUiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});