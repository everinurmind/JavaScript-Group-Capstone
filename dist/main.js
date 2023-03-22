/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styles */\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 900;\n    background-color: #3d7dca;\n}\n\n\n/* Header Section */\n\n.navbar {\n    background-color: #ffcb05;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px;\n    position: relative;\n}\n\n.logo {\n    height: 40px;\n    width: 40px;\n}\n\n#main-nav {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    list-style-type: none;\n}\n\n.navigation {\n    text-decoration: none;\n    color: #003a70;\n}\n\n.navigation:hover {\n    text-decoration: underline;\n    color: #3d7dca;\n}\n\n\n/* Scroll Button */\n\n#scroll-to-top-btn {\n    display: none;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 99;\n    font-size: 16px;\n    outline: none;\n    background-color: #ffcb05;\n    color: #003a70;\n    cursor: pointer;\n    padding: 8px;\n    border: 5px solid #003a70;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n}\n\n#scroll-to-top-btn:hover {\n    background-color: #3d7dca;\n}\n\n\n/* Pokemon Cards Section */\n\n#item-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 50px;\n}\n\n.pokemon-block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: calc(33.33% - 20px);\n    margin: 10px;\n    background-color: #ffcb05;\n    border: 5px solid #003a70;\n    border-radius: 8px;\n    box-sizing: border-box;\n}\n\n.img-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 75px;\n}\n\n.name {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 900;\n    color: #003a70;\n}\n\n.number {\n    font-weight: bold;\n    text-align: center;\n}\n\n.like-btn {\n    font-weight: 900;\n    color: #3d7dca;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.like-btn:hover {\n    color: #003a70;\n}\n\n.like-btn:active {\n    color: rgb(254, 55, 55);\n}\n\n.comments-btn,\n.reservations-btn {\n    font-weight: 900;\n    margin-bottom: 10px;\n    width: calc(75% + 25px);\n    background-color: #3d7dca;\n    color: #003a70;\n    border: none;\n    border-radius: 8px;\n    padding: 8px;\n    cursor: pointer;\n}\n\n.comments-btn:hover,\n.reservations-btn:hover {\n    background-color: #3d7dca;\n    color: #ffcb05;\n}\n\n.comments-btn:active,\n.reservations-btn:active {\n    background-color: #003a70;\n}\n\n\n/* Comment Modal */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 10px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.787);\n}\n\n\n/* Modal Content */\n\n.modal-content {\n    background-color: #1f69c3f1;\n    margin: auto;\n    padding: 20px;\n    width: 90%;\n    border: 2px solid #003a70;\n}\n\n\n/* The Close Button */\n\n.close {\n    color: #ffcb05;\n    float: right;\n    font-size: 60px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n/* Comment Container */\n\n.comments-details-box {\n    margin-top: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid #ffcb05;\n}\n\n.t-headline {\n    color: #ffcb05;\n    font-weight: 700;\n}\n\n.t-span {\n    color: #0a0a0a;\n}\n\n\n/* comment image container */\n\n.comment_ImgBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2.5rem;\n    height: 150px;\n}\n\n.comment_img {\n    width: 250px;\n    height: 250px;\n}\n\n.pokemon_name {\n    text-align: center;\n    padding: 10px;\n    color: #ffcb05;\n    font-weight: 900;\n    font-size: larger;\n}\n\n.line {\n    width: 50%;\n}\n\n\n/* Comment Info Container */\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    gap: 9rem;\n}\n\n.info {\n    color: #fff;\n    font-weight: 900;\n}\n\n.commentTitle {\n    color: #fff;\n}\n\n.badge {\n    background-color: #ffcb05;\n    border-radius: 50%;\n    padding: 5px 8px 5px 8px;\n    color: #003a70;\n    font-weight: 600;\n}\n\n\n/* Comment Section and Area */\n\n.commentBox {\n    width: 50vw;\n    margin: 1rem;\n    background-color: #ffcb05;\n    height: 20vh;\n    overflow: auto;\n    border: 2px solid #fff;\n    border-radius: 20px;\n}\n\n.comment-area {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.comment {\n    height: 10%;\n    padding: 2%;\n    margin: 2%;\n    background-color: #3d7dca;\n    color: #fff;\n    font-weight: 500;\n    border: 2px solid #fff;\n    border-radius: 20px;\n}\n\n\n/* Comment Posting */\n\n.commentMessage {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.commentMessage form {\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.commentMessage form input[type=\"text\"] {\n    padding: 1rem;\n    width: 45vw;\n    height: auto;\n    font-weight: 600;\n    border-radius: 20px;\n    border: none;\n}\n\n.commentMessage form textarea {\n    padding: 4rem 2rem;\n    font-weight: 600;\n    border-radius: 20px;\n}\n\n.commentMessage form .submitComment {\n    padding: 1rem;\n    margin: .1rem 8rem;\n    background-color: #ffcb05;\n    border-radius: 50px;\n    border: none;\n}\n\n.commentMessage form .submitComment:hover {\n    box-shadow: 4px 3px;\n    font-weight: 900;\n}\n\n\n/* Footer Section */\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 900;\n    background-color: #ffcb05;\n    color: #003a70;\n    padding: 20px;\n    margin-top: 50px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,gBAAgB;;AAEhB;IACI,SAAS;IACT,UAAU;IACV,6EAA6E;IAC7E,gBAAgB;IAChB,yBAAyB;AAC7B;;;AAGA,mBAAmB;;AAEnB;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,0BAA0B;IAC1B,cAAc;AAClB;;;AAGA,kBAAkB;;AAElB;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA,0BAA0B;;AAE1B;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;;IAEI,yBAAyB;AAC7B;;;AAGA,kBAAkB;;AAElB;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,iBAAiB;IACjB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,sCAAsC;AAC1C;;;AAGA,kBAAkB;;AAElB;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,UAAU;IACV,yBAAyB;AAC7B;;;AAGA,qBAAqB;;AAErB;IACI,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,qBAAqB;IACrB,eAAe;AACnB;;;AAGA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;;AAGA,4BAA4B;;AAE5B;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;;AAGA,2BAA2B;;AAE3B;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB;IACxB,cAAc;IACd,gBAAgB;AACpB;;;AAGA,6BAA6B;;AAE7B;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,UAAU;IACV,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;;AAGA,mBAAmB;;AAEnB;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,gBAAgB;AACpB","sourcesContent":["/* Main Styles */\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 900;\n    background-color: #3d7dca;\n}\n\n\n/* Header Section */\n\n.navbar {\n    background-color: #ffcb05;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px;\n    position: relative;\n}\n\n.logo {\n    height: 40px;\n    width: 40px;\n}\n\n#main-nav {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    list-style-type: none;\n}\n\n.navigation {\n    text-decoration: none;\n    color: #003a70;\n}\n\n.navigation:hover {\n    text-decoration: underline;\n    color: #3d7dca;\n}\n\n\n/* Scroll Button */\n\n#scroll-to-top-btn {\n    display: none;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 99;\n    font-size: 16px;\n    outline: none;\n    background-color: #ffcb05;\n    color: #003a70;\n    cursor: pointer;\n    padding: 8px;\n    border: 5px solid #003a70;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n}\n\n#scroll-to-top-btn:hover {\n    background-color: #3d7dca;\n}\n\n\n/* Pokemon Cards Section */\n\n#item-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 50px;\n}\n\n.pokemon-block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: calc(33.33% - 20px);\n    margin: 10px;\n    background-color: #ffcb05;\n    border: 5px solid #003a70;\n    border-radius: 8px;\n    box-sizing: border-box;\n}\n\n.img-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 75px;\n}\n\n.name {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 900;\n    color: #003a70;\n}\n\n.number {\n    font-weight: bold;\n    text-align: center;\n}\n\n.like-btn {\n    font-weight: 900;\n    color: #3d7dca;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.like-btn:hover {\n    color: #003a70;\n}\n\n.like-btn:active {\n    color: rgb(254, 55, 55);\n}\n\n.comments-btn,\n.reservations-btn {\n    font-weight: 900;\n    margin-bottom: 10px;\n    width: calc(75% + 25px);\n    background-color: #3d7dca;\n    color: #003a70;\n    border: none;\n    border-radius: 8px;\n    padding: 8px;\n    cursor: pointer;\n}\n\n.comments-btn:hover,\n.reservations-btn:hover {\n    background-color: #3d7dca;\n    color: #ffcb05;\n}\n\n.comments-btn:active,\n.reservations-btn:active {\n    background-color: #003a70;\n}\n\n\n/* Comment Modal */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 10px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.787);\n}\n\n\n/* Modal Content */\n\n.modal-content {\n    background-color: #1f69c3f1;\n    margin: auto;\n    padding: 20px;\n    width: 90%;\n    border: 2px solid #003a70;\n}\n\n\n/* The Close Button */\n\n.close {\n    color: #ffcb05;\n    float: right;\n    font-size: 60px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n/* Comment Container */\n\n.comments-details-box {\n    margin-top: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid #ffcb05;\n}\n\n.t-headline {\n    color: #ffcb05;\n    font-weight: 700;\n}\n\n.t-span {\n    color: #0a0a0a;\n}\n\n\n/* comment image container */\n\n.comment_ImgBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2.5rem;\n    height: 150px;\n}\n\n.comment_img {\n    width: 250px;\n    height: 250px;\n}\n\n.pokemon_name {\n    text-align: center;\n    padding: 10px;\n    color: #ffcb05;\n    font-weight: 900;\n    font-size: larger;\n}\n\n.line {\n    width: 50%;\n}\n\n\n/* Comment Info Container */\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    gap: 9rem;\n}\n\n.info {\n    color: #fff;\n    font-weight: 900;\n}\n\n.commentTitle {\n    color: #fff;\n}\n\n.badge {\n    background-color: #ffcb05;\n    border-radius: 50%;\n    padding: 5px 8px 5px 8px;\n    color: #003a70;\n    font-weight: 600;\n}\n\n\n/* Comment Section and Area */\n\n.commentBox {\n    width: 50vw;\n    margin: 1rem;\n    background-color: #ffcb05;\n    height: 20vh;\n    overflow: auto;\n    border: 2px solid #fff;\n    border-radius: 20px;\n}\n\n.comment-area {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.comment {\n    height: 10%;\n    padding: 2%;\n    margin: 2%;\n    background-color: #3d7dca;\n    color: #fff;\n    font-weight: 500;\n    border: 2px solid #fff;\n    border-radius: 20px;\n}\n\n\n/* Comment Posting */\n\n.commentMessage {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.commentMessage form {\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.commentMessage form input[type=\"text\"] {\n    padding: 1rem;\n    width: 45vw;\n    height: auto;\n    font-weight: 600;\n    border-radius: 20px;\n    border: none;\n}\n\n.commentMessage form textarea {\n    padding: 4rem 2rem;\n    font-weight: 600;\n    border-radius: 20px;\n}\n\n.commentMessage form .submitComment {\n    padding: 1rem;\n    margin: .1rem 8rem;\n    background-color: #ffcb05;\n    border-radius: 50px;\n    border: none;\n}\n\n.commentMessage form .submitComment:hover {\n    box-shadow: 4px 3px;\n    font-weight: 900;\n}\n\n\n/* Footer Section */\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 900;\n    background-color: #ffcb05;\n    color: #003a70;\n    padding: 20px;\n    margin-top: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_pokeball_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pokeball.png */ "./src/img/pokeball.png");
/* harmony import */ var _modules_reservationspopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reservationspopup */ "./src/modules/reservationspopup.js");
/* harmony import */ var _modules_reservationspopup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_reservationspopup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentPopup.js */ "./src/modules/commentPopup.js");
// Import





const img = document.createElement('img');
img.src = _img_pokeball_png__WEBPACK_IMPORTED_MODULE_1__;

// Scroll Button
window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scroll-to-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scroll-to-top-btn').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Fetch API
const pokemonContainer = document.getElementById('item-container');

const createPokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `${pokemon.id.toString().padStart(1, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fas', 'fa-heart', 'like-btn');

    const commentsBtn = document.createElement('button');
    commentsBtn.textContent = 'Comments';
    commentsBtn.classList.add('comments-btn');

    commentsBtn.addEventListener('click', () => {
        console.log(pokemon.abilities);
        _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"].commentPopup(pokemon);
    });


    const reservationsBtn = document.createElement('button');
    reservationsBtn.textContent = 'Reservations';
    reservationsBtn.classList.add('reservations-btn');
    reservationsBtn.setAttribute('id', `${pokemon.id.toString().padStart(1, 0)}`);
    reservationsBtn.setAttribute('onclick', 'cardpopup(id)');

    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(commentsBtn);
    card.appendChild(reservationsBtn);
    card.appendChild(likeBtn);
    // card.appendChild(number);

    pokemonContainer.appendChild(card);
};

const fetchPokemons = async(number) => {
    const urls = Array.from({ length: number }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    pokemonData.forEach((pokemon) => createPokemon(pokemon));
};

fetchPokemons(20);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createPokemon });

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

class ShowComments {
    static commentPopup = (pokemon) => {

        // ─── Comment Modal ───────────────────────────────────────────

        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = `&times;`;
        closeBtn.addEventListener('click', () => {
            // modal.style.display = 'none';
            modal.parentNode.removeChild(modal);
        });

        const title = document.createElement('p');
        title.innerHTML = `<h2 class="t-headline">Comment <span class="t-span">Window</span></h2>`;

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(title);

        // ─── Display Image and Details Section ─────────────────────────

        const commentContent = document.createElement('div');
        const pokemonDetails = `<div class="comments-details-box">
        <div class="comment_ImgBox">
            <img class="comment_img" src="${pokemon.sprites.front_default}" alt="">
        </div> <p class="pokemon_name">${pokemon.name}</p><hr class="line"> 
        <div class="infoContainer"><div class="pokemon_details">
                <p class="info">Base Experiemce: ${pokemon.base_experience}.</p>
                <p class="info">Height: ${pokemon.height}</p>
            </div><div class="pokemon_details"><p class="info">Weight: ${pokemon.weight}</p>
            </div>
        </div>
    
    </div>`;
        commentContent.innerHTML = pokemonDetails;
        modalContent.appendChild(commentContent);

        // ─── Comment Section ─────────────────────────────────────────
        const commentInfo = document.createElement('div');
        const commentDetails = `<div class="comments-details-box">
        <h2 class="commentTitle">Comments <span class="badge">4</span></h2> <hr class="line"> 
        <div class="commentBox"> 
            <div class="comment-area">
                <div class="comment">
                    <span class="player">22/03/2023 { Jose }</span>
                    Hello I really like this comment
                </div>
                  <div class="comment">
                    <span class="player">22/03/2023 { Nurbol }</span>
                    Hello I really like this comment
                 </div>
                 <div class="comment">
                    <span class="player">22/03/2023 { Cosmos } </span>
                    Hello I really like this comment
                </div>
            </div>
        </div>
        </div>`;
        commentInfo.innerHTML = commentDetails;
        modalContent.appendChild(commentInfo);

        // ─── Comment Submission Form ────────────────────────────────────────────

        const commentMessage = document.createElement('div');
        commentMessage.classList.add('commentMessage');
        const commentForm = document.createElement('form');

        const playName = document.createElement('input');
        playName.setAttribute('type', 'text');
        playName.setAttribute('required', 'required');
        playName.setAttribute('placeholder', 'Your Name');
        commentForm.appendChild(playName);

        const commentTextarea = document.createElement('textarea');
        commentTextarea.setAttribute('placeholder', 'Your Insights');
        commentTextarea.setAttribute('required', 'required');
        commentForm.appendChild(commentTextarea);

        const submitComment = document.createElement('button');
        submitComment.classList.add('submitComment');
        submitComment.setAttribute('type', 'submit');
        submitComment.innerHTML = 'Comment';
        commentForm.appendChild(submitComment);
        commentMessage.appendChild(commentForm);

        modalContent.appendChild(commentMessage);
        modal.appendChild(modalContent);

    }

}


const CommentModal = () => {


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowComments);

/***/ }),

/***/ "./src/modules/reservationspopup.js":
/*!******************************************!*\
  !*** ./src/modules/reservationspopup.js ***!
  \******************************************/
/***/ (() => {

window.cardpopup = (id) => {
    console.log(id);
  }

/***/ }),

/***/ "./src/img/pokeball.png":
/*!******************************!*\
  !*** ./src/img/pokeball.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pokeball.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRQb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb25zcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFpbiBTdHlsZXMgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG59XFxuXFxuXFxuLyogSGVhZGVyIFNlY3Rpb24gKi9cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jbWFpbi1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMDAzYTcwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzNkN2RjYTtcXG59XFxuXFxuXFxuLyogU2Nyb2xsIEJ1dHRvbiAqL1xcblxcbiNzY3JvbGwtdG8tdG9wLWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAzYTcwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNzY3JvbGwtdG8tdG9wLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxufVxcblxcblxcbi8qIFBva2Vtb24gQ2FyZHMgU2VjdGlvbiAqL1xcblxcbiNpdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5wb2tlbW9uLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMjBweCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogIzAwM2E3MDtcXG59XFxuXFxuLm51bWJlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saWtlLWJ0biB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjM2Q3ZGNhO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpa2UtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxufVxcblxcbi5saWtlLWJ0bjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiKDI1NCwgNTUsIDU1KTtcXG59XFxuXFxuLmNvbW1lbnRzLWJ0bixcXG4ucmVzZXJ2YXRpb25zLWJ0biB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiBjYWxjKDc1JSArIDI1cHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcbiAgICBjb2xvcjogIzAwM2E3MDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudHMtYnRuOmhvdmVyLFxcbi5yZXNlcnZhdGlvbnMtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG4gICAgY29sb3I6ICNmZmNiMDU7XFxufVxcblxcbi5jb21tZW50cy1idG46YWN0aXZlLFxcbi5yZXNlcnZhdGlvbnMtYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNhNzA7XFxufVxcblxcblxcbi8qIENvbW1lbnQgTW9kYWwgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODcpO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2OWMzZjE7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwM2E3MDtcXG59XFxuXFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcblxcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjZmZjYjA1O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIENvbW1lbnQgQ29udGFpbmVyICovXFxuXFxuLmNvbW1lbnRzLWRldGFpbHMtYm94IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmNiMDU7XFxufVxcblxcbi50LWhlYWRsaW5lIHtcXG4gICAgY29sb3I6ICNmZmNiMDU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50LXNwYW4ge1xcbiAgICBjb2xvcjogIzBhMGEwYTtcXG59XFxuXFxuXFxuLyogY29tbWVudCBpbWFnZSBjb250YWluZXIgKi9cXG5cXG4uY29tbWVudF9JbWdCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNvbW1lbnRfaW1nIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4ucG9rZW1vbl9uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmY2IwNTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuXFxuLyogQ29tbWVudCBJbmZvIENvbnRhaW5lciAqL1xcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDlyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jb21tZW50VGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhZGdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XFxuICAgIGNvbG9yOiAjMDAzYTcwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG4vKiBDb21tZW50IFNlY3Rpb24gYW5kIEFyZWEgKi9cXG5cXG4uY29tbWVudEJveCB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb21tZW50LWFyZWEge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcblxcbi8qIENvbW1lbnQgUG9zdGluZyAqL1xcblxcbi5jb21tZW50TWVzc2FnZSB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIC5zdWJtaXRDb21tZW50IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAuMXJlbSA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIC5zdWJtaXRDb21tZW50OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNHB4IDNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsNkVBQTZFO0lBQzdFLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7OztBQUdBLG1CQUFtQjs7QUFFbkI7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOzs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0ks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c0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBTdHlsZXMgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG59XFxuXFxuXFxuLyogSGVhZGVyIFNlY3Rpb24gKi9cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jbWFpbi1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMDAzYTcwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzNkN2RjYTtcXG59XFxuXFxuXFxuLyogU2Nyb2xsIEJ1dHRvbiAqL1xcblxcbiNzY3JvbGwtdG8tdG9wLWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAzYTcwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNzY3JvbGwtdG8tdG9wLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxufVxcblxcblxcbi8qIFBva2Vtb24gQ2FyZHMgU2VjdGlvbiAqL1xcblxcbiNpdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5wb2tlbW9uLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMjBweCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogIzAwM2E3MDtcXG59XFxuXFxuLm51bWJlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saWtlLWJ0biB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjM2Q3ZGNhO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpa2UtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxufVxcblxcbi5saWtlLWJ0bjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiKDI1NCwgNTUsIDU1KTtcXG59XFxuXFxuLmNvbW1lbnRzLWJ0bixcXG4ucmVzZXJ2YXRpb25zLWJ0biB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiBjYWxjKDc1JSArIDI1cHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcbiAgICBjb2xvcjogIzAwM2E3MDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudHMtYnRuOmhvdmVyLFxcbi5yZXNlcnZhdGlvbnMtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG4gICAgY29sb3I6ICNmZmNiMDU7XFxufVxcblxcbi5jb21tZW50cy1idG46YWN0aXZlLFxcbi5yZXNlcnZhdGlvbnMtYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNhNzA7XFxufVxcblxcblxcbi8qIENvbW1lbnQgTW9kYWwgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODcpO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2OWMzZjE7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwM2E3MDtcXG59XFxuXFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcblxcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjZmZjYjA1O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIENvbW1lbnQgQ29udGFpbmVyICovXFxuXFxuLmNvbW1lbnRzLWRldGFpbHMtYm94IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmNiMDU7XFxufVxcblxcbi50LWhlYWRsaW5lIHtcXG4gICAgY29sb3I6ICNmZmNiMDU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50LXNwYW4ge1xcbiAgICBjb2xvcjogIzBhMGEwYTtcXG59XFxuXFxuXFxuLyogY29tbWVudCBpbWFnZSBjb250YWluZXIgKi9cXG5cXG4uY29tbWVudF9JbWdCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNvbW1lbnRfaW1nIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4ucG9rZW1vbl9uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmY2IwNTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuXFxuLyogQ29tbWVudCBJbmZvIENvbnRhaW5lciAqL1xcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDlyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jb21tZW50VGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhZGdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XFxuICAgIGNvbG9yOiAjMDAzYTcwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG4vKiBDb21tZW50IFNlY3Rpb24gYW5kIEFyZWEgKi9cXG5cXG4uY29tbWVudEJveCB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb21tZW50LWFyZWEge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcblxcbi8qIENvbW1lbnQgUG9zdGluZyAqL1xcblxcbi5jb21tZW50TWVzc2FnZSB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIC5zdWJtaXRDb21tZW50IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAuMXJlbSA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb21tZW50TWVzc2FnZSBmb3JtIC5zdWJtaXRDb21tZW50OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNHB4IDNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gICAgY29sb3I6ICMwMDNhNzA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydFxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9wb2tlYmFsbC5wbmcnO1xuaW1wb3J0IGNhcmRwb3B1cCBmcm9tICcuL21vZHVsZXMvcmVzZXJ2YXRpb25zcG9wdXAnO1xuaW1wb3J0IFNob3dDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudFBvcHVwLmpzJztcblxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWcuc3JjID0gbG9nbztcblxuLy8gU2Nyb2xsIEJ1dHRvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXRvLXRvcC1idG4nKTtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApIHtcbiAgICAgICAgc2Nyb2xsQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXRvLXRvcC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG59KTtcblxuLy8gRmV0Y2ggQVBJXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tY29udGFpbmVyJyk7XG5cbmNvbnN0IGNyZWF0ZVBva2Vtb24gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24tYmxvY2snKTtcblxuICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzcHJpdGUuc3JjID0gcG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHQ7XG5cbiAgICBzcHJpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ByaXRlKTtcblxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBudW1iZXIudGV4dENvbnRlbnQgPSBgJHtwb2tlbW9uLmlkLnRvU3RyaW5nKCkucGFkU3RhcnQoMSwgMCl9YDtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHBva2Vtb24ubmFtZTtcblxuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtaGVhcnQnLCAnbGlrZS1idG4nKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudHNCdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRzQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWJ0bicpO1xuXG4gICAgY29tbWVudHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBva2Vtb24uYWJpbGl0aWVzKTtcbiAgICAgICAgU2hvd0NvbW1lbnRzLmNvbW1lbnRQb3B1cChwb2tlbW9uKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2YXRpb25zQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XG4gICAgcmVzZXJ2YXRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9ucy1idG4nKTtcbiAgICByZXNlcnZhdGlvbnNCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke3Bva2Vtb24uaWQudG9TdHJpbmcoKS5wYWRTdGFydCgxLCAwKX1gKTtcbiAgICByZXNlcnZhdGlvbnNCdG4uc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ2NhcmRwb3B1cChpZCknKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3ByaXRlQ29udGFpbmVyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29tbWVudHNCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zQnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xuICAgIC8vIGNhcmQuYXBwZW5kQ2hpbGQobnVtYmVyKTtcblxuICAgIHBva2Vtb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59O1xuXG5jb25zdCBmZXRjaFBva2Vtb25zID0gYXN5bmMobnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdXJscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bWJlciB9LCAoXywgaSkgPT4gYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2kgKyAxfWApO1xuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHVybHMubWFwKCh1cmwpID0+IGZldGNoKHVybCkpKTtcbiAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSkpO1xuICAgIHBva2Vtb25EYXRhLmZvckVhY2goKHBva2Vtb24pID0+IGNyZWF0ZVBva2Vtb24ocG9rZW1vbikpO1xufTtcblxuZmV0Y2hQb2tlbW9ucygyMCk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlUG9rZW1vbiB9IiwiaW1wb3J0IGNyZWF0ZVBva2Vtb24gZnJvbSAnLi4vaW5kZXguanMnO1xuY2xhc3MgU2hvd0NvbW1lbnRzIHtcbiAgICBzdGF0aWMgY29tbWVudFBvcHVwID0gKHBva2Vtb24pID0+IHtcblxuICAgICAgICAvLyDilIDilIDilIAgQ29tbWVudCBNb2RhbCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9IGAmdGltZXM7YDtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwidC1oZWFkbGluZVwiPkNvbW1lbnQgPHNwYW4gY2xhc3M9XCJ0LXNwYW5cIj5XaW5kb3c8L3NwYW4+PC9oMj5gO1xuXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgLy8g4pSA4pSA4pSAIERpc3BsYXkgSW1hZ2UgYW5kIERldGFpbHMgU2VjdGlvbiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICAgICAgICBjb25zdCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwb2tlbW9uRGV0YWlscyA9IGA8ZGl2IGNsYXNzPVwiY29tbWVudHMtZGV0YWlscy1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfSW1nQm94XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY29tbWVudF9pbWdcIiBzcmM9XCIke3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiIGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj4gPHAgY2xhc3M9XCJwb2tlbW9uX25hbWVcIj4ke3Bva2Vtb24ubmFtZX08L3A+PGhyIGNsYXNzPVwibGluZVwiPiBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Db250YWluZXJcIj48ZGl2IGNsYXNzPVwicG9rZW1vbl9kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+QmFzZSBFeHBlcmllbWNlOiAke3Bva2Vtb24uYmFzZV9leHBlcmllbmNlfS48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+SGVpZ2h0OiAke3Bva2Vtb24uaGVpZ2h0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XCJwb2tlbW9uX2RldGFpbHNcIj48cCBjbGFzcz1cImluZm9cIj5XZWlnaHQ6ICR7cG9rZW1vbi53ZWlnaHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2PmA7XG4gICAgICAgIGNvbW1lbnRDb250ZW50LmlubmVySFRNTCA9IHBva2Vtb25EZXRhaWxzO1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudENvbnRlbnQpO1xuXG4gICAgICAgIC8vIOKUgOKUgOKUgCBDb21tZW50IFNlY3Rpb24g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgICAgIGNvbnN0IGNvbW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnREZXRhaWxzID0gYDxkaXYgY2xhc3M9XCJjb21tZW50cy1kZXRhaWxzLWJveFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJjb21tZW50VGl0bGVcIj5Db21tZW50cyA8c3BhbiBjbGFzcz1cImJhZGdlXCI+NDwvc3Bhbj48L2gyPiA8aHIgY2xhc3M9XCJsaW5lXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudEJveFwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllclwiPjIyLzAzLzIwMjMgeyBKb3NlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIEkgcmVhbGx5IGxpa2UgdGhpcyBjb21tZW50XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllclwiPjIyLzAzLzIwMjMgeyBOdXJib2wgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gSSByZWFsbHkgbGlrZSB0aGlzIGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGxheWVyXCI+MjIvMDMvMjAyMyB7IENvc21vcyB9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gSSByZWFsbHkgbGlrZSB0aGlzIGNvbW1lbnRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29tbWVudEluZm8uaW5uZXJIVE1MID0gY29tbWVudERldGFpbHM7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb21tZW50SW5mbyk7XG5cbiAgICAgICAgLy8g4pSA4pSA4pSAIENvbW1lbnQgU3VibWlzc2lvbiBGb3JtIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gICAgICAgIGNvbnN0IGNvbW1lbnRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbW1lbnRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRNZXNzYWdlJyk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgIGNvbnN0IHBsYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcGxheU5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgcGxheU5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICAgICAgICBwbGF5TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xuICAgICAgICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChwbGF5TmFtZSk7XG5cbiAgICAgICAgY29uc3QgY29tbWVudFRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29tbWVudFRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBJbnNpZ2h0cycpO1xuICAgICAgICBjb21tZW50VGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICAgICAgICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50VGV4dGFyZWEpO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0Q29tbWVudC5jbGFzc0xpc3QuYWRkKCdzdWJtaXRDb21tZW50Jyk7XG4gICAgICAgIHN1Ym1pdENvbW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRDb21tZW50LmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgICAgICAgY29tbWVudEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29tbWVudCk7XG4gICAgICAgIGNvbW1lbnRNZXNzYWdlLmFwcGVuZENoaWxkKGNvbW1lbnRGb3JtKTtcblxuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudE1lc3NhZ2UpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gICAgfVxuXG59XG5cblxuY29uc3QgQ29tbWVudE1vZGFsID0gKCkgPT4ge1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd0NvbW1lbnRzOyIsIndpbmRvdy5jYXJkcG9wdXAgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=