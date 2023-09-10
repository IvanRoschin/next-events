exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 6555:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-header_header__qKApt",
	"logo": "main-header_logo__n34Lu",
	"navigation": "main-header_navigation__TAhk9"
};


/***/ }),

/***/ 4352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/main-header.module.css
var main_header_module = __webpack_require__(6555);
var main_header_module_default = /*#__PURE__*/__webpack_require__.n(main_header_module);
;// CONCATENATED MODULE: ./components/layout/main-header.js



function MainHeader() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: (main_header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_header_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: "NextEvents"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: (main_header_module_default()).navigation,
                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/events",
                            children: "Browse All Events"
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const main_header = (MainHeader);

;// CONCATENATED MODULE: ./components/layout/layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(main_header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;