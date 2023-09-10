"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 4077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function AddressIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressIcon);


/***/ }),

/***/ 8310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function DateIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateIcon);


/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IP: () => (/* binding */ getAllEvents),
/* harmony export */   N6: () => (/* binding */ getFeaturedEvents),
/* harmony export */   Y: () => (/* binding */ getEventById),
/* harmony export */   nk: () => (/* binding */ getFilteredEvents)
/* harmony export */ });
const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "Programming for everyone",
        description: "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2022-05-12",
        image: "images/coding-event.jpg",
        isFeatured: false
    },
    {
        id: "e2",
        title: "Networking for introverts",
        description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: "New Wall Street 5, 98765 New Work",
        date: "2022-05-30",
        image: "images/introvert-event.jpg",
        isFeatured: true
    },
    {
        id: "e3",
        title: "Networking for extroverts",
        description: "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
        location: "My Street 12, 10115 Broke City",
        date: "2023-04-10",
        image: "images/extrovert-event.jpg",
        isFeatured: true
    }
];
function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event)=>event.isFeatured);
}
function getAllEvents() {
    return DUMMY_EVENTS;
}
function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    let filteredEvents = DUMMY_EVENTS.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}
function getEventById(id) {
    return DUMMY_EVENTS.find((event)=>event.id === id);
}


/***/ })

};
;