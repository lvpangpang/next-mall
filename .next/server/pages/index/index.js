(() => {
var exports = {};
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 669:
/***/ ((module) => {

// Exports
module.exports = {
	"good_item": "index_good_item__sRyNi",
	"img": "index_img__OWqnC"
};


/***/ }),

/***/ 714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(669);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Index(props) {
    const { data  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: data.map((item)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    target: "_blank",
                    href: "/detail",
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().good_item),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.imgUrl
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: item.name
                        })
                    ]
                }, item.name);
            })
        })
    });
}
async function getServerSideProps() {
    const res = await fetch("https://www.lvpangpang.com/api/community/get");
    const result = await res.json();
    const data = [
        {
            name: "KAO/\u82B1\u738B \u723D\u5FEB\u8584\u8377\u7259\u818F  165G",
            imgUrl: "//image.mihui365.com/bbc/middleImg/17080068501916604.jpg"
        },
        {
            name: "LG ON THE BODY SWEET LOVE \u9999\u6C34\u6C90\u6D74\u9732 \u7C89\u8272 500G",
            imgUrl: "//image.mihui365.com/bbc/middleImg/7677611344437291.jpg"
        },
        {
            name: "\u3010\u4E34\u671F\uFF0C22\u67088\u67084\u3011SHISEIDO/\u8D44\u751F\u5802 FINO\u6E17\u900F\u62A4\u53D1\u819C  230G ",
            imgUrl: "//image.mihui365.com/bbc/middleImg/32454493364902693.jpg"
        },
        {
            name: "KAO/\u82B1\u738B \u84B8\u6C7D\u773C\u7F69  \u67DA\u5B50\u9999\u578B 12\u7247",
            imgUrl: "//image.mihui365.com/bbc/middleImg/16219758599435272.jpg"
        }, 
    ];
    return {
        props: {
            data
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(714));
module.exports = __webpack_exports__;

})();