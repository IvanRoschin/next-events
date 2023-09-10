exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 1253:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "event-item_item__whDrj",
	"content": "event-item_content__XJmwM",
	"date": "event-item_date__Q3ExW",
	"address": "event-item_address__uj42Y",
	"actions": "event-item_actions__XMsP9",
	"icon": "event-item_icon__mwk9Y"
};


/***/ }),

/***/ 9402:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "event-list_list__YQsst"
};


/***/ }),

/***/ 9169:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__WBdX1"
};


/***/ }),

/***/ 3892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EventList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(4077);
;// CONCATENATED MODULE: ./components/icons/arrow-right-icon.js

function ArrowRightIcon() {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            fillRule: "evenodd",
            d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    });
}
/* harmony default export */ const arrow_right_icon = (ArrowRightIcon);

// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(8310);
// EXTERNAL MODULE: ./components/ui/button.js
var ui_button = __webpack_require__(6052);
// EXTERNAL MODULE: ./components/events/event-item.module.css
var event_item_module = __webpack_require__(1253);
var event_item_module_default = /*#__PURE__*/__webpack_require__.n(event_item_module);
;// CONCATENATED MODULE: ./components/events/event-item.js
// import Link from "next/link";







function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleString("en-UA", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formatedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: (event_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/" + image,
                alt: title,
                width: 800,
                height: 500
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (event_item_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (event_item_module_default()).summary,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (event_item_module_default()).date,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(date_icon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("time", {
                                        children: humanReadableDate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (event_item_module_default()).address,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(address_icon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("address", {
                                        children: formatedAddress
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (event_item_module_default()).actions,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* default */.Z, {
                            link: exploreLink,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Explore Event"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (event_item_module_default()).icon,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(arrow_right_icon, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/events/event-list.module.css
var event_list_module = __webpack_require__(9402);
var event_list_module_default = /*#__PURE__*/__webpack_require__.n(event_list_module);
;// CONCATENATED MODULE: ./components/events/event-list.js



function EventList(props) {
    const { items } = props;
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: (event_list_module_default()).list,
        children: items.map(({ id, title, location, image, date })=>/*#__PURE__*/ jsx_runtime.jsx(EventItem, {
                id: id,
                title: title,
                location: location,
                image: image,
                date: date
            }, id))
    });
}


/***/ }),

/***/ 6052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9169);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Button(props) {
    if (props.link) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: props.link,
            className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
            children: props.children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
        onClick: props.onClick,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;