(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 327:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "detail_box__cZ2c2",
	"box_item": "detail_box_item__gK198"
};


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Index(props) {
    const { data  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().box),
        children: data.map((item)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().box_item),
                dangerouslySetInnerHTML: {
                    __html: item.content
                }
            }, item.id);
        })
    });
}
async function getServerSideProps() {
    const res = await fetch("https://www.lvpangpang.com/api/community/get");
    const result = await res.json();
    const { data  } = result;
    return {
        props: {
            data: data.list || []
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(364));
module.exports = __webpack_exports__;

})();