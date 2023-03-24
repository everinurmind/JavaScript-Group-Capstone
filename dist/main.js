/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
  ___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styles */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 900;\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Header Section */\r\n.navbar {\r\n  background-color: #ffcb05;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  position: relative;\r\n}\r\n\r\n.logo {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#main-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.navigation {\r\n  text-decoration: none;\r\n  color: #003a70;\r\n}\r\n\r\n.navigation:hover {\r\n  text-decoration: underline;\r\n  color: #3d7dca;\r\n}\r\n\r\n/* Scroll Button */\r\n#scroll-to-top-btn {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 99;\r\n  font-size: 16px;\r\n  outline: none;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  border: 5px solid #003a70;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#scroll-to-top-btn:hover {\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Pokemon Cards Section */\r\n#item-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.pokemon-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: calc(33.33% - 20px);\r\n  margin: 10px;\r\n  background-color: #ffcb05;\r\n  border: 5px solid #003a70;\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  gap: 10px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75px;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.name,\r\n.pokemontitle {\r\n  text-align: center;\r\n  margin-right: 33.33%;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #003a70;\r\n}\r\n\r\n.number {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.like-num {\r\n  margin-left: 5px;\r\n}\r\n\r\n.like-btn {\r\n  margin: -45px 15px 15px calc(75% - 25px);\r\n  font-weight: 900;\r\n  color: #3d7dca;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-btn:hover {\r\n  color: #003a70;\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(254, 55, 55);\r\n}\r\n\r\n.comments-btn,\r\n.reservations-btn {\r\n  font-weight: 900;\r\n  margin-bottom: 10px;\r\n  width: calc(75% + 25px);\r\n  background-color: #3d7dca;\r\n  color: #003a70;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments-btn:hover,\r\n.reservations-btn:hover {\r\n  background-color: #3d7dca;\r\n  color: #ffcb05;\r\n}\r\n\r\n.comments-btn:active,\r\n.reservations-btn:active {\r\n  background-color: #003a70;\r\n}\r\n\r\n/* Footer Section */\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  padding: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\n/* Reservations popup */\r\n\r\n.openpopup {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  padding: 16px;\r\n  opacity: 1;\r\n  background-color: #1f69c3f1;\r\n}\r\n\r\n.maincontainer {\r\n  border: 2px black solid;\r\n  width: 95%;\r\n  height: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.closecontainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 3rem;\r\n}\r\n\r\n.closeandimage {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 2rem;\r\n  width: 100%;\r\n  height: 30%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.closingbutton {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.pokemonimage {\r\n  width: 25%;\r\n  height: 70%;\r\n  margin-top: -2rem;\r\n}\r\n\r\n.pokemontitle {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #ffcb05;\r\n  margin-top: -4rem;\r\n}\r\n\r\n.characteristics {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  color: white;\r\n  margin-top: -3rem;\r\n}\r\n\r\n.addareservation {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addareservationtitle {\r\n  text-align: center;\r\n}\r\n\r\n.inputreserv {\r\n  list-style-type: none;\r\n}\r\n\r\n.inputreserv li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.reservationslist {\r\n  width: 20rem;\r\n}\r\n\r\n.reservationstitle {\r\n  text-align: center;\r\n}\r\n\r\n.tableitem {\r\n  color: #fff;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.inputreservation li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,SAAS;EACT,UAAU;EACV,6EAA6E;EAC7E,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA,mBAAmB;AACnB;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,WAAW;EACX,WAAW;EACX,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,0BAA0B;EAC1B,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;;EAEE,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,gBAAgB;AAClB;;AAEA,uBAAuB;;AAEvB;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;EACV,cAAc;EACd,aAAa;EACb,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["/* Main Styles */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 900;\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Header Section */\r\n.navbar {\r\n  background-color: #ffcb05;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  position: relative;\r\n}\r\n\r\n.logo {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#main-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.navigation {\r\n  text-decoration: none;\r\n  color: #003a70;\r\n}\r\n\r\n.navigation:hover {\r\n  text-decoration: underline;\r\n  color: #3d7dca;\r\n}\r\n\r\n/* Scroll Button */\r\n#scroll-to-top-btn {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 99;\r\n  font-size: 16px;\r\n  outline: none;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  border: 5px solid #003a70;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#scroll-to-top-btn:hover {\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Pokemon Cards Section */\r\n#item-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.pokemon-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: calc(33.33% - 20px);\r\n  margin: 10px;\r\n  background-color: #ffcb05;\r\n  border: 5px solid #003a70;\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  gap: 10px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75px;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.name,\r\n.pokemontitle {\r\n  text-align: center;\r\n  margin-right: 33.33%;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #003a70;\r\n}\r\n\r\n.number {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.like-num {\r\n  margin-left: 5px;\r\n}\r\n\r\n.like-btn {\r\n  margin: -45px 15px 15px calc(75% - 25px);\r\n  font-weight: 900;\r\n  color: #3d7dca;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-btn:hover {\r\n  color: #003a70;\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(254, 55, 55);\r\n}\r\n\r\n.comments-btn,\r\n.reservations-btn {\r\n  font-weight: 900;\r\n  margin-bottom: 10px;\r\n  width: calc(75% + 25px);\r\n  background-color: #3d7dca;\r\n  color: #003a70;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments-btn:hover,\r\n.reservations-btn:hover {\r\n  background-color: #3d7dca;\r\n  color: #ffcb05;\r\n}\r\n\r\n.comments-btn:active,\r\n.reservations-btn:active {\r\n  background-color: #003a70;\r\n}\r\n\r\n/* Footer Section */\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  padding: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\n/* Reservations popup */\r\n\r\n.openpopup {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  padding: 16px;\r\n  opacity: 1;\r\n  background-color: #1f69c3f1;\r\n}\r\n\r\n.maincontainer {\r\n  border: 2px black solid;\r\n  width: 95%;\r\n  height: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.closecontainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 3rem;\r\n}\r\n\r\n.closeandimage {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 2rem;\r\n  width: 100%;\r\n  height: 30%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.closingbutton {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.pokemonimage {\r\n  width: 25%;\r\n  height: 70%;\r\n  margin-top: -2rem;\r\n}\r\n\r\n.pokemontitle {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #ffcb05;\r\n  margin-top: -4rem;\r\n}\r\n\r\n.characteristics {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  color: white;\r\n  margin-top: -3rem;\r\n}\r\n\r\n.addareservation {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addareservationtitle {\r\n  text-align: center;\r\n}\r\n\r\n.inputreserv {\r\n  list-style-type: none;\r\n}\r\n\r\n.inputreserv li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.reservationslist {\r\n  width: 20rem;\r\n}\r\n\r\n.reservationstitle {\r\n  text-align: center;\r\n}\r\n\r\n.tableitem {\r\n  color: #fff;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.inputreservation li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n"],"sourceRoot":""}]);
  // Exports
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
  
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  
  
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
  
  /***/ "./src/modules/likes.js":
  /*!******************************!*\
    !*** ./src/modules/likes.js ***!
    \******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "APP_ID": () => (/* binding */ APP_ID),
  /* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
  /* harmony export */   "calculateLikes": () => (/* binding */ calculateLikes),
  /* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes),
  /* harmony export */   "postLike": () => (/* binding */ postLike)
  /* harmony export */ });
  const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const APP_ID = 'LwQHc3Vs1lC9z58aI8eY';
  
  const fetchLikes = async (id) => {
    const response = await fetch(`${BASE_URL}/apps/${APP_ID}/likes`);
    const data = await response.json();
    const likes = data.find((item) => item.item_id === id)?.likes || 0;
    return likes;
  };
  
  const postLike = async (id, count) => {
    await fetch(`${BASE_URL}/apps/${APP_ID}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id, likes: count }),
    });
  };
  
  const calculateLikes = async () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    const itemIds = Array.from(likeButtons, (btn) => btn.parentElement.getAttribute('id'));
    const likeCounts = await Promise.all(itemIds.map((id) => fetchLikes(id)));
    likeCounts.forEach((likes, i) => {
      const likeCountElem = likeButtons[i].querySelector('.like-num');
      likeCountElem.textContent = likes;
    });
  };
  
  
  /***/ }),
  
  /***/ "./src/modules/reservationspopup.js":
  /*!******************************************!*\
    !*** ./src/modules/reservationspopup.js ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _savereservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savereservation.js */ "./src/modules/savereservation.js");
  
  
  const cardpopup = (pokemon) => {
    const popup = document.createElement('modal');
    popup.style.display = 'block';
    popup.classList.add('openpopup');
    const maincontainer = document.createElement('div');
    maincontainer.classList.add('maincontainer');
  
    const closecontainer = document.createElement('div');
    closecontainer.classList.add('closecontainer');
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('closingbutton');
    const titlebutton = document.createElement('p');
    titlebutton.innerHTML = '<h2 class="t-headline">Reservations <span class="t-span">  Window</span></h2>';
    closecontainer.append(titlebutton, closeButton);
  
    const closeandimage = document.createElement('div');
    closeandimage.classList.add('closeandimage');
    const pokemonimage = document.createElement('img');
    pokemonimage.src = pokemon.sprites.front_default;
    pokemonimage.classList.add('pokemonimage');
    closeandimage.append(pokemonimage);
  
    const pokemoname = document.createElement('div');
    pokemoname.classList.add('pokemoname');
    const pokemontitle = document.createElement('h3');
    pokemontitle.classList.add('pokemontitle');
    pokemontitle.textContent = pokemon.name;
    pokemoname.append(pokemontitle);
  
    const characteristics = document.createElement('div');
    characteristics.classList.add('characteristics');
    const weight = document.createElement('p');
    weight.textContent = `Weigth: ${pokemon.weight} Kg`;
    weight.classList.add('weigth');
    const basexperience = document.createElement('p');
    basexperience.textContent = `Base Experience: ${pokemon.base_experience} points`;
    basexperience.classList.add('basexperience');
    const height = document.createElement('p');
    height.textContent = `Height: ${pokemon.height} feet`;
    height.classList.add('height');
    characteristics.append(weight, basexperience, height);
  
    const reservations = document.createElement('div');
    reservations.classList.add('reservations');
    const reservationstitle = document.createElement('h3');
    reservationstitle.textContent = 'Reservations';
    reservationstitle.classList.add('reservationstitle');
  
    const reservationslist = document.createElement('table');
    reservationslist.classList.add('reservationslist');
    reservations.append(reservationstitle, reservationslist);
  
    const addareservation = document.createElement('div');
    addareservation.classList.add('addareservation');
    const addareservationtitle = document.createElement('h3');
    addareservationtitle.classList.add('addareservationtitle');
    addareservationtitle.textContent = 'Add a reservation';
    const inputreserv = document.createElement('ul');
    inputreserv.classList.add('inputreserv');
  
    const namereservation = document.createElement('li');
    namereservation.classList.add('namereservation');
    const inputname = document.createElement('input');
    inputname.setAttribute('type', 'text');
    inputname.setAttribute('id', 'name');
    inputname.setAttribute('required', 'required');
    inputname.setAttribute('placeholder', 'Your name');
    namereservation.append(inputname);
  
    const datereservationstart = document.createElement('li');
    datereservationstart.classList.add('datereservationstart');
    const inputdatestart = document.createElement('input');
    inputdatestart.setAttribute('type', 'date');
    inputdatestart.setAttribute('id', 'startdate');
    inputdatestart.setAttribute('placeholder', 'Start date');
    inputdatestart.setAttribute('required', '');
    datereservationstart.append(inputdatestart);
  
    const datereservationend = document.createElement('li');
    datereservationend.classList.add('datereservationend');
    const inputdateend = document.createElement('input');
    inputdateend.setAttribute('type', 'date');
    inputdateend.setAttribute('id', 'enddate');
    inputdateend.setAttribute('placeholder', 'End date');
    inputdateend.setAttribute('required', ' ');
    datereservationend.append(inputdateend);
  
    const reservebutton = document.createElement('button');
    reservebutton.setAttribute('type', 'submit');
    reservebutton.setAttribute('id', 'reservebutton');
    reservebutton.innerHTML = 'Reserve';
  
    inputreserv.append(namereservation, datereservationstart, datereservationend, reservebutton);
    addareservation.append(addareservationtitle, inputreserv);
  
    maincontainer.append(closecontainer, closeandimage, pokemoname, characteristics,
      reservations, addareservation);
    popup.append(maincontainer);
    document.querySelector('body').appendChild(popup);
  
    (0,_savereservation_js__WEBPACK_IMPORTED_MODULE_0__.displayreserv)(inputname, inputdatestart, inputdateend, pokemon.id, reservationslist);
  
    reservebutton.addEventListener('click', () => {
      if ((inputname.value && inputdatestart.value && inputdateend.value) !== '') {
        (0,_savereservation_js__WEBPACK_IMPORTED_MODULE_0__.addreservation)(inputname, inputdatestart, inputdateend, pokemon.id, reservationslist);
        const tableitem = document.createElement('tr');
        tableitem.classList.add('tableitem');
        tableitem.innerHTML = `${inputdatestart.value} - ${inputdateend.value} by ${inputname.value}`;
        reservationslist.appendChild(tableitem);
      }
    });
  
    closeButton.addEventListener('click', () => {
      popup.classList.remove('openpopup');
      window.location.reload();
    });
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardpopup);
  
  /***/ }),
  
  /***/ "./src/modules/savereservation.js":
  /*!****************************************!*\
    !*** ./src/modules/savereservation.js ***!
    \****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "addreservation": () => (/* binding */ addreservation),
  /* harmony export */   "calculatereservations": () => (/* binding */ calculatereservations),
  /* harmony export */   "displayreserv": () => (/* binding */ displayreserv)
  /* harmony export */ });
  const calculatereservations = () => {
    const table = document.querySelectorAll('.tableitem');
    const counter = table.length;
    const reservationstitle = document.querySelector('.reservationstitle');
    reservationstitle.innerHTML = `Reservations (${counter})`;
  };
  
  const displayreserv = async (inputname, inputdatestart, inputdateend, id, reservationslist) => {
    const result = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/reservations?item_id=${id}`,
    );
  
    const reservationsdata = await result.json();
  
    reservationsdata.forEach((reservation) => {
      const tableitem = document.createElement('tr');
      tableitem.classList.add('tableitem');
      tableitem.innerHTML = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;
      reservationslist.appendChild(tableitem);
    });
    calculatereservations();
  };
  
  const addreservation = async (inputname, inputdatestart, inputdateend, id) => {
    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/reservations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: inputname.value,
          date_start: inputdatestart.value,
          date_end: inputdateend.value,
        }),
      },
    );
    inputname.value = '';
    inputdatestart.value = '';
    inputdateend.value = '';
    calculatereservations();
  };
  
  
  
  /***/ }),
  
  /***/ "./src/modules/scroll.js":
  /*!*******************************!*\
    !*** ./src/modules/scroll.js ***!
    \*******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "handleScroll": () => (/* binding */ handleScroll),
  /* harmony export */   "handleScrollTop": () => (/* binding */ handleScrollTop)
  /* harmony export */ });
  const handleScroll = () => {
    const scrollBtn = document.getElementById('scroll-to-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };
  
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  
  
  /***/ }),
  
  /***/ "./src/img/pokeball.png":
  /*!******************************!*\
    !*** ./src/img/pokeball.png ***!
    \******************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
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
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
  /* harmony import */ var _img_pokeball_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pokeball.png */ "./src/img/pokeball.png");
  /* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll.js */ "./src/modules/scroll.js");
  /* harmony import */ var _modules_reservationspopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservationspopup.js */ "./src/modules/reservationspopup.js");
  /* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
  // Import
  
  
  
  
  
  
  const img = document.createElement('img');
  img.src = _img_pokeball_png__WEBPACK_IMPORTED_MODULE_1__;
  
  // Scroll Button
  window.addEventListener('scroll', _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__.handleScroll);
  document.getElementById('scroll-to-top-btn').addEventListener('click', _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__.handleScrollTop);
  
  // Pokemon Card
  const pokemonContainer = document.getElementById('item-container');
  
  const createPokemon = async (pokemon) => {
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
  
    const commentsBtn = document.createElement('button');
    commentsBtn.textContent = 'Comments';
    commentsBtn.classList.add('comments-btn');
  
    const reservationsBtn = document.createElement('button');
    reservationsBtn.textContent = 'Reservations';
    reservationsBtn.classList.add('reservations-btn');
    reservationsBtn.setAttribute('id', `${pokemon.id.toString().padStart(1, 0)}`);
    reservationsBtn.addEventListener('click', () => {
      (0,_modules_reservationspopup_js__WEBPACK_IMPORTED_MODULE_3__["default"])(pokemon);
    });
  
    // Like Button Handle
    const likes = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_4__.fetchLikes)(pokemon.id);
  
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fas', 'fa-heart', 'like-btn');
    likeBtn.setAttribute('data-id', pokemon.id);
  
    const likeCount = document.createElement('span');
    likeCount.classList.add('like-num');
    likeCount.textContent = likes;
    likeBtn.appendChild(likeCount);
  
    likeBtn.addEventListener('click', async () => {
    // Like count
      likeCount.textContent = parseInt(likeCount.textContent, 10) + 1;
      // Involvement API
      await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_4__.postLike)(pokemon.id);
    });
  
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(likeBtn);
    card.appendChild(commentsBtn);
    card.appendChild(reservationsBtn);
  
    pokemonContainer.appendChild(card);
  };
  
  // Fetch API
  const fetchPokemons = async (number) => {
    const urls = Array.from({ length: number }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    await Promise.all(pokemonData.map((pokemon) => createPokemon(pokemon)));
  };
  
  fetchPokemons(45);
  (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_4__.calculateLikes)();
  
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EscUVBQXFFLGdCQUFnQixpQkFBaUIsb0ZBQW9GLHVCQUF1QixnQ0FBZ0MsS0FBSyx5Q0FBeUMsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHlCQUF5Qix5QkFBeUIsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsNEJBQTRCLEtBQUsscUJBQXFCLDRCQUE0QixxQkFBcUIsS0FBSywyQkFBMkIsaUNBQWlDLHFCQUFxQixLQUFLLG1EQUFtRCxvQkFBb0Isc0JBQXNCLG1CQUFtQixrQkFBa0Isa0JBQWtCLHNCQUFzQixvQkFBb0IsZ0NBQWdDLHFCQUFxQixzQkFBc0IsbUJBQW1CLGdDQUFnQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLGtDQUFrQyxnQ0FBZ0MsS0FBSyx3REFBd0Qsb0JBQW9CLHNCQUFzQiw4QkFBOEIsdUJBQXVCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlDQUFpQyxtQkFBbUIsZ0NBQWdDLGdDQUFnQyx5QkFBeUIsNkJBQTZCLGdCQUFnQixLQUFLLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsMkJBQTJCLEtBQUssaUNBQWlDLHlCQUF5QiwyQkFBMkIsZ0NBQWdDLHVCQUF1QixxQkFBcUIsS0FBSyxpQkFBaUIsd0JBQXdCLHlCQUF5QixLQUFLLG1CQUFtQix1QkFBdUIsS0FBSyxtQkFBbUIsK0NBQStDLHVCQUF1QixxQkFBcUIsc0JBQXNCLEtBQUsseUJBQXlCLHFCQUFxQixLQUFLLDBCQUEwQiw4QkFBOEIsS0FBSyw2Q0FBNkMsdUJBQXVCLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLHFCQUFxQixtQkFBbUIseUJBQXlCLG1CQUFtQixzQkFBc0IsS0FBSyx5REFBeUQsZ0NBQWdDLHFCQUFxQixLQUFLLDJEQUEyRCxnQ0FBZ0MsS0FBSyx3Q0FBd0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsdUJBQXVCLGdDQUFnQyxxQkFBcUIsb0JBQW9CLHVCQUF1QixLQUFLLG9EQUFvRCxtQkFBbUIsa0JBQWtCLHNCQUFzQixhQUFhLGNBQWMsaUJBQWlCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLDBCQUEwQixvQ0FBb0Msa0JBQWtCLG1CQUFtQixLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLHdCQUF3QixrQkFBa0Isa0JBQWtCLG9DQUFvQyxLQUFLLHdCQUF3QixxQkFBcUIsbUJBQW1CLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIscUJBQXFCLHdCQUF3QixLQUFLLHVCQUF1QixpQkFBaUIsa0JBQWtCLHdCQUF3QixLQUFLLHVCQUF1Qix5QkFBeUIsZ0NBQWdDLHVCQUF1QixxQkFBcUIsd0JBQXdCLEtBQUssMEJBQTBCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLG1CQUFtQix3QkFBd0IsS0FBSywwQkFBMEIsaUJBQWlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLEtBQUssK0JBQStCLHlCQUF5QixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSyx5QkFBeUIsNEJBQTRCLEtBQUssMkJBQTJCLG1CQUFtQixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyxvQkFBb0Isa0JBQWtCLDBCQUEwQixLQUFLLDhCQUE4Qiw0QkFBNEIsS0FBSyxXQUFXLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb25zcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvc2F2ZXJlc2VydmF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFpbiBTdHlsZXMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgU2VjdGlvbiAqL1xcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Nyb2xsIEJ1dHRvbiAqL1xcclxcbiNzY3JvbGwtdG8tdG9wLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAzYTcwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNzY3JvbGwtdG8tdG9wLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb2tlbW9uIENhcmRzIFNlY3Rpb24gKi9cXHJcXG4jaXRlbS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tYmxvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMjBweCk7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUsXFxyXFxuLnBva2Vtb250aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMzLjMzJTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlLW51bSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgbWFyZ2luOiAtNDVweCAxNXB4IDE1cHggY2FsYyg3NSUgLSAyNXB4KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogIzNkN2RjYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU0LCA1NSwgNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuLFxcclxcbi5yZXNlcnZhdGlvbnMtYnRuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgd2lkdGg6IGNhbGMoNzUlICsgMjVweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG46aG92ZXIsXFxyXFxuLnJlc2VydmF0aW9ucy1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG4gIGNvbG9yOiAjZmZjYjA1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuOmFjdGl2ZSxcXHJcXG4ucmVzZXJ2YXRpb25zLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXJ2YXRpb25zIHBvcHVwICovXFxyXFxuXFxyXFxuLm9wZW5wb3B1cCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjY5YzNmMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VhbmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2luZ2J1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udC1oZWFkbGluZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbmltYWdlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBtYXJnaW4tdG9wOiAtNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3RlcmlzdGljcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRhcmVzZXJ2YXRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYXJlc2VydmF0aW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYgbGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zbGlzdCB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnN0aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJsZWl0ZW0ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnZhdGlvbiBsaSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw2RUFBNkU7RUFDN0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBTdHlsZXMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgU2VjdGlvbiAqL1xcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Nyb2xsIEJ1dHRvbiAqL1xcclxcbiNzY3JvbGwtdG8tdG9wLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAzYTcwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNzY3JvbGwtdG8tdG9wLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb2tlbW9uIENhcmRzIFNlY3Rpb24gKi9cXHJcXG4jaXRlbS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tYmxvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMjBweCk7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUsXFxyXFxuLnBva2Vtb250aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMzLjMzJTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlLW51bSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgbWFyZ2luOiAtNDVweCAxNXB4IDE1cHggY2FsYyg3NSUgLSAyNXB4KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogIzNkN2RjYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU0LCA1NSwgNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuLFxcclxcbi5yZXNlcnZhdGlvbnMtYnRuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgd2lkdGg6IGNhbGMoNzUlICsgMjVweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q3ZGNhO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG46aG92ZXIsXFxyXFxuLnJlc2VydmF0aW9ucy1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG4gIGNvbG9yOiAjZmZjYjA1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuOmFjdGl2ZSxcXHJcXG4ucmVzZXJ2YXRpb25zLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXJ2YXRpb25zIHBvcHVwICovXFxyXFxuXFxyXFxuLm9wZW5wb3B1cCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjY5YzNmMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VhbmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2luZ2J1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udC1oZWFkbGluZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbmltYWdlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBtYXJnaW4tdG9wOiAtNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3RlcmlzdGljcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRhcmVzZXJ2YXRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYXJlc2VydmF0aW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYgbGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zbGlzdCB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnN0aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJsZWl0ZW0ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnZhdGlvbiBsaSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xyXG5leHBvcnQgY29uc3QgQVBQX0lEID0gJ0x3UUhjM1ZzMWxDOXo1OGFJOGVZJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBwcy8ke0FQUF9JRH0vbGlrZXNgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGxpa2VzID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKT8ubGlrZXMgfHwgMDtcclxuICByZXR1cm4gbGlrZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQsIGNvdW50KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwcHMvJHtBUFBfSUR9L2xpa2VzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQsIGxpa2VzOiBjb3VudCB9KSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsaWtlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xyXG4gIGNvbnN0IGl0ZW1JZHMgPSBBcnJheS5mcm9tKGxpa2VCdXR0b25zLCAoYnRuKSA9PiBidG4ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xyXG4gIGNvbnN0IGxpa2VDb3VudHMgPSBhd2FpdCBQcm9taXNlLmFsbChpdGVtSWRzLm1hcCgoaWQpID0+IGZldGNoTGlrZXMoaWQpKSk7XHJcbiAgbGlrZUNvdW50cy5mb3JFYWNoKChsaWtlcywgaSkgPT4ge1xyXG4gICAgY29uc3QgbGlrZUNvdW50RWxlbSA9IGxpa2VCdXR0b25zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5saWtlLW51bScpO1xyXG4gICAgbGlrZUNvdW50RWxlbS50ZXh0Q29udGVudCA9IGxpa2VzO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5cmVzZXJ2LCBhZGRyZXNlcnZhdGlvbiB9IGZyb20gJy4vc2F2ZXJlc2VydmF0aW9uLmpzJztcclxuXHJcbmNvbnN0IGNhcmRwb3B1cCA9IChwb2tlbW9uKSA9PiB7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtb2RhbCcpO1xyXG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ29wZW5wb3B1cCcpO1xyXG4gIGNvbnN0IG1haW5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2xvc2Vjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjbG9zZWNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG9zZWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nYnV0dG9uJyk7XHJcbiAgY29uc3QgdGl0bGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGl0bGVidXR0b24uaW5uZXJIVE1MID0gJzxoMiBjbGFzcz1cInQtaGVhZGxpbmVcIj5SZXNlcnZhdGlvbnMgPHNwYW4gY2xhc3M9XCJ0LXNwYW5cIj4gIFdpbmRvdzwvc3Bhbj48L2gyPic7XHJcbiAgY2xvc2Vjb250YWluZXIuYXBwZW5kKHRpdGxlYnV0dG9uLCBjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGNsb3NlYW5kaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjbG9zZWFuZGltYWdlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlYW5kaW1hZ2UnKTtcclxuICBjb25zdCBwb2tlbW9uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBwb2tlbW9uaW1hZ2Uuc3JjID0gcG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHQ7XHJcbiAgcG9rZW1vbmltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb25pbWFnZScpO1xyXG4gIGNsb3NlYW5kaW1hZ2UuYXBwZW5kKHBva2Vtb25pbWFnZSk7XHJcblxyXG4gIGNvbnN0IHBva2Vtb25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb2tlbW9uYW1lLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb25hbWUnKTtcclxuICBjb25zdCBwb2tlbW9udGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHBva2Vtb250aXRsZS5jbGFzc0xpc3QuYWRkKCdwb2tlbW9udGl0bGUnKTtcclxuICBwb2tlbW9udGl0bGUudGV4dENvbnRlbnQgPSBwb2tlbW9uLm5hbWU7XHJcbiAgcG9rZW1vbmFtZS5hcHBlbmQocG9rZW1vbnRpdGxlKTtcclxuXHJcbiAgY29uc3QgY2hhcmFjdGVyaXN0aWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hhcmFjdGVyaXN0aWNzLmNsYXNzTGlzdC5hZGQoJ2NoYXJhY3RlcmlzdGljcycpO1xyXG4gIGNvbnN0IHdlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB3ZWlnaHQudGV4dENvbnRlbnQgPSBgV2VpZ3RoOiAke3Bva2Vtb24ud2VpZ2h0fSBLZ2A7XHJcbiAgd2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ3dlaWd0aCcpO1xyXG4gIGNvbnN0IGJhc2V4cGVyaWVuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgYmFzZXhwZXJpZW5jZS50ZXh0Q29udGVudCA9IGBCYXNlIEV4cGVyaWVuY2U6ICR7cG9rZW1vbi5iYXNlX2V4cGVyaWVuY2V9IHBvaW50c2A7XHJcbiAgYmFzZXhwZXJpZW5jZS5jbGFzc0xpc3QuYWRkKCdiYXNleHBlcmllbmNlJyk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhlaWdodC50ZXh0Q29udGVudCA9IGBIZWlnaHQ6ICR7cG9rZW1vbi5oZWlnaHR9IGZlZXRgO1xyXG4gIGhlaWdodC5jbGFzc0xpc3QuYWRkKCdoZWlnaHQnKTtcclxuICBjaGFyYWN0ZXJpc3RpY3MuYXBwZW5kKHdlaWdodCwgYmFzZXhwZXJpZW5jZSwgaGVpZ2h0KTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9ucycpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uc3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICByZXNlcnZhdGlvbnN0aXRsZS50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xyXG4gIHJlc2VydmF0aW9uc3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uc3RpdGxlJyk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uc2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gIHJlc2VydmF0aW9uc2xpc3QuY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zbGlzdCcpO1xyXG4gIHJlc2VydmF0aW9ucy5hcHBlbmQocmVzZXJ2YXRpb25zdGl0bGUsIHJlc2VydmF0aW9uc2xpc3QpO1xyXG5cclxuICBjb25zdCBhZGRhcmVzZXJ2YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRhcmVzZXJ2YXRpb24uY2xhc3NMaXN0LmFkZCgnYWRkYXJlc2VydmF0aW9uJyk7XHJcbiAgY29uc3QgYWRkYXJlc2VydmF0aW9udGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGFkZGFyZXNlcnZhdGlvbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkZGFyZXNlcnZhdGlvbnRpdGxlJyk7XHJcbiAgYWRkYXJlc2VydmF0aW9udGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgcmVzZXJ2YXRpb24nO1xyXG4gIGNvbnN0IGlucHV0cmVzZXJ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBpbnB1dHJlc2Vydi5jbGFzc0xpc3QuYWRkKCdpbnB1dHJlc2VydicpO1xyXG5cclxuICBjb25zdCBuYW1lcmVzZXJ2YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG5hbWVyZXNlcnZhdGlvbi5jbGFzc0xpc3QuYWRkKCduYW1lcmVzZXJ2YXRpb24nKTtcclxuICBjb25zdCBpbnB1dG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0bmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGlucHV0bmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuICBpbnB1dG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG4gIGlucHV0bmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xyXG4gIG5hbWVyZXNlcnZhdGlvbi5hcHBlbmQoaW5wdXRuYW1lKTtcclxuXHJcbiAgY29uc3QgZGF0ZXJlc2VydmF0aW9uc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGRhdGVyZXNlcnZhdGlvbnN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2RhdGVyZXNlcnZhdGlvbnN0YXJ0Jyk7XHJcbiAgY29uc3QgaW5wdXRkYXRlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0ZGF0ZXN0YXJ0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgaW5wdXRkYXRlc3RhcnQuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydGRhdGUnKTtcclxuICBpbnB1dGRhdGVzdGFydC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1N0YXJ0IGRhdGUnKTtcclxuICBpbnB1dGRhdGVzdGFydC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIGRhdGVyZXNlcnZhdGlvbnN0YXJ0LmFwcGVuZChpbnB1dGRhdGVzdGFydCk7XHJcblxyXG4gIGNvbnN0IGRhdGVyZXNlcnZhdGlvbmVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgZGF0ZXJlc2VydmF0aW9uZW5kLmNsYXNzTGlzdC5hZGQoJ2RhdGVyZXNlcnZhdGlvbmVuZCcpO1xyXG4gIGNvbnN0IGlucHV0ZGF0ZWVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRkYXRlZW5kLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgaW5wdXRkYXRlZW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW5kZGF0ZScpO1xyXG4gIGlucHV0ZGF0ZWVuZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VuZCBkYXRlJyk7XHJcbiAgaW5wdXRkYXRlZW5kLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnICcpO1xyXG4gIGRhdGVyZXNlcnZhdGlvbmVuZC5hcHBlbmQoaW5wdXRkYXRlZW5kKTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2VydmVidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHJlc2VydmVidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZXNlcnZlYnV0dG9uJyk7XHJcbiAgcmVzZXJ2ZWJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXJ2ZSc7XHJcblxyXG4gIGlucHV0cmVzZXJ2LmFwcGVuZChuYW1lcmVzZXJ2YXRpb24sIGRhdGVyZXNlcnZhdGlvbnN0YXJ0LCBkYXRlcmVzZXJ2YXRpb25lbmQsIHJlc2VydmVidXR0b24pO1xyXG4gIGFkZGFyZXNlcnZhdGlvbi5hcHBlbmQoYWRkYXJlc2VydmF0aW9udGl0bGUsIGlucHV0cmVzZXJ2KTtcclxuXHJcbiAgbWFpbmNvbnRhaW5lci5hcHBlbmQoY2xvc2Vjb250YWluZXIsIGNsb3NlYW5kaW1hZ2UsIHBva2Vtb25hbWUsIGNoYXJhY3RlcmlzdGljcyxcclxuICAgIHJlc2VydmF0aW9ucywgYWRkYXJlc2VydmF0aW9uKTtcclxuICBwb3B1cC5hcHBlbmQobWFpbmNvbnRhaW5lcik7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuXHJcbiAgZGlzcGxheXJlc2VydihpbnB1dG5hbWUsIGlucHV0ZGF0ZXN0YXJ0LCBpbnB1dGRhdGVlbmQsIHBva2Vtb24uaWQsIHJlc2VydmF0aW9uc2xpc3QpO1xyXG5cclxuICByZXNlcnZlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKChpbnB1dG5hbWUudmFsdWUgJiYgaW5wdXRkYXRlc3RhcnQudmFsdWUgJiYgaW5wdXRkYXRlZW5kLnZhbHVlKSAhPT0gJycpIHtcclxuICAgICAgYWRkcmVzZXJ2YXRpb24oaW5wdXRuYW1lLCBpbnB1dGRhdGVzdGFydCwgaW5wdXRkYXRlZW5kLCBwb2tlbW9uLmlkLCByZXNlcnZhdGlvbnNsaXN0KTtcclxuICAgICAgY29uc3QgdGFibGVpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgdGFibGVpdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYmxlaXRlbScpO1xyXG4gICAgICB0YWJsZWl0ZW0uaW5uZXJIVE1MID0gYCR7aW5wdXRkYXRlc3RhcnQudmFsdWV9IC0gJHtpbnB1dGRhdGVlbmQudmFsdWV9IGJ5ICR7aW5wdXRuYW1lLnZhbHVlfWA7XHJcbiAgICAgIHJlc2VydmF0aW9uc2xpc3QuYXBwZW5kQ2hpbGQodGFibGVpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVucG9wdXAnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRwb3B1cDsiLCJjb25zdCBjYWxjdWxhdGVyZXNlcnZhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVpdGVtJyk7XHJcbiAgY29uc3QgY291bnRlciA9IHRhYmxlLmxlbmd0aDtcclxuICBjb25zdCByZXNlcnZhdGlvbnN0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnN0aXRsZScpO1xyXG4gIHJlc2VydmF0aW9uc3RpdGxlLmlubmVySFRNTCA9IGBSZXNlcnZhdGlvbnMgKCR7Y291bnRlcn0pYDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlyZXNlcnYgPSBhc3luYyAoaW5wdXRuYW1lLCBpbnB1dGRhdGVzdGFydCwgaW5wdXRkYXRlZW5kLCBpZCwgcmVzZXJ2YXRpb25zbGlzdCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0x3UUhjM1ZzMWxDOXo1OGFJOGVZL3Jlc2VydmF0aW9ucz9pdGVtX2lkPSR7aWR9YCxcclxuICApO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbnNkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgcmVzZXJ2YXRpb25zZGF0YS5mb3JFYWNoKChyZXNlcnZhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGFibGVpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIHRhYmxlaXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJsZWl0ZW0nKTtcclxuICAgIHRhYmxlaXRlbS5pbm5lckhUTUwgPSBgJHtyZXNlcnZhdGlvbi5kYXRlX3N0YXJ0fSAtICR7cmVzZXJ2YXRpb24uZGF0ZV9lbmR9IGJ5ICR7cmVzZXJ2YXRpb24udXNlcm5hbWV9YDtcclxuICAgIHJlc2VydmF0aW9uc2xpc3QuYXBwZW5kQ2hpbGQodGFibGVpdGVtKTtcclxuICB9KTtcclxuICBjYWxjdWxhdGVyZXNlcnZhdGlvbnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZHJlc2VydmF0aW9uID0gYXN5bmMgKGlucHV0bmFtZSwgaW5wdXRkYXRlc3RhcnQsIGlucHV0ZGF0ZWVuZCwgaWQpID0+IHtcclxuICBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9Md1FIYzNWczFsQzl6NThhSThlWS9yZXNlcnZhdGlvbnMvJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgICB1c2VybmFtZTogaW5wdXRuYW1lLnZhbHVlLFxyXG4gICAgICAgIGRhdGVfc3RhcnQ6IGlucHV0ZGF0ZXN0YXJ0LnZhbHVlLFxyXG4gICAgICAgIGRhdGVfZW5kOiBpbnB1dGRhdGVlbmQudmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICApO1xyXG4gIGlucHV0bmFtZS52YWx1ZSA9ICcnO1xyXG4gIGlucHV0ZGF0ZXN0YXJ0LnZhbHVlID0gJyc7XHJcbiAgaW5wdXRkYXRlZW5kLnZhbHVlID0gJyc7XHJcbiAgY2FsY3VsYXRlcmVzZXJ2YXRpb25zKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5cmVzZXJ2LCBhZGRyZXNlcnZhdGlvbiwgY2FsY3VsYXRlcmVzZXJ2YXRpb25zIH07IiwiZXhwb3J0IGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICBjb25zdCBzY3JvbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXRvLXRvcC1idG4nKTtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApIHtcclxuICAgIHNjcm9sbEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgc2Nyb2xsQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVNjcm9sbFRvcCA9ICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL3Bva2ViYWxsLnBuZyc7XHJcbmltcG9ydCB7IGhhbmRsZVNjcm9sbCwgaGFuZGxlU2Nyb2xsVG9wIH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbC5qcyc7XHJcbmltcG9ydCBjYXJkcG9wdXAgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9uc3BvcHVwLmpzJztcclxuaW1wb3J0IHsgZmV0Y2hMaWtlcywgcG9zdExpa2UsIGNhbGN1bGF0ZUxpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VzLmpzJztcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gbG9nbztcclxuXHJcbi8vIFNjcm9sbCBCdXR0b25cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tdG9wLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2Nyb2xsVG9wKTtcclxuXHJcbi8vIFBva2Vtb24gQ2FyZFxyXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBjcmVhdGVQb2tlbW9uID0gYXN5bmMgKHBva2Vtb24pID0+IHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLWJsb2NrJyk7XHJcblxyXG4gIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHNwcml0ZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdDtcclxuXHJcbiAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwcml0ZSk7XHJcblxyXG4gIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBudW1iZXIudGV4dENvbnRlbnQgPSBgJHtwb2tlbW9uLmlkLnRvU3RyaW5nKCkucGFkU3RhcnQoMSwgMCl9YDtcclxuXHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuICBuYW1lLnRleHRDb250ZW50ID0gcG9rZW1vbi5uYW1lO1xyXG5cclxuICBjb25zdCBjb21tZW50c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbW1lbnRzQnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICBjb21tZW50c0J0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1idG4nKTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2YXRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVzZXJ2YXRpb25zQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgcmVzZXJ2YXRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9ucy1idG4nKTtcclxuICByZXNlcnZhdGlvbnNCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke3Bva2Vtb24uaWQudG9TdHJpbmcoKS5wYWRTdGFydCgxLCAwKX1gKTtcclxuICByZXNlcnZhdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjYXJkcG9wdXAocG9rZW1vbik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIExpa2UgQnV0dG9uIEhhbmRsZVxyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZmV0Y2hMaWtlcyhwb2tlbW9uLmlkKTtcclxuXHJcbiAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1oZWFydCcsICdsaWtlLWJ0bicpO1xyXG4gIGxpa2VCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcG9rZW1vbi5pZCk7XHJcblxyXG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsaWtlQ291bnQuY2xhc3NMaXN0LmFkZCgnbGlrZS1udW0nKTtcclxuICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBsaWtlcztcclxuICBsaWtlQnRuLmFwcGVuZENoaWxkKGxpa2VDb3VudCk7XHJcblxyXG4gIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gTGlrZSBjb3VudFxyXG4gICAgbGlrZUNvdW50LnRleHRDb250ZW50ID0gcGFyc2VJbnQobGlrZUNvdW50LnRleHRDb250ZW50LCAxMCkgKyAxO1xyXG4gICAgLy8gSW52b2x2ZW1lbnQgQVBJXHJcbiAgICBhd2FpdCBwb3N0TGlrZShwb2tlbW9uLmlkKTtcclxuICB9KTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChsaWtlQnRuKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRzQnRuKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uc0J0bik7XHJcblxyXG4gIHBva2Vtb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG4vLyBGZXRjaCBBUElcclxuY29uc3QgZmV0Y2hQb2tlbW9ucyA9IGFzeW5jIChudW1iZXIpID0+IHtcclxuICBjb25zdCB1cmxzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtYmVyIH0sIChfLCBpKSA9PiBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aSArIDF9YCk7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwodXJscy5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSkpO1xyXG4gIGNvbnN0IHBva2Vtb25EYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzcG9uc2VzLm1hcCgocmVzKSA9PiByZXMuanNvbigpKSk7XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwocG9rZW1vbkRhdGEubWFwKChwb2tlbW9uKSA9PiBjcmVhdGVQb2tlbW9uKHBva2Vtb24pKSk7XHJcbn07XHJcblxyXG5mZXRjaFBva2Vtb25zKDQ1KTtcclxuY2FsY3VsYXRlTGlrZXMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9