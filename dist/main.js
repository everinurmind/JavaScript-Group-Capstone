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
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styles */\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 900;\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Header Section */\r\n\r\n.navbar {\r\n  background-color: #ffcb05;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  position: relative;\r\n}\r\n\r\n.logo {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#main-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.navigation {\r\n  text-decoration: none;\r\n  color: #003a70;\r\n}\r\n\r\n.navigation:hover {\r\n  text-decoration: underline;\r\n  color: #3d7dca;\r\n}\r\n\r\n/* Scroll Button */\r\n\r\n#scroll-to-top-btn {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 99;\r\n  font-size: 16px;\r\n  outline: none;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  border: 5px solid #003a70;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#scroll-to-top-btn:hover {\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Pokemon Cards Section */\r\n\r\n#item-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.pokemon-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: calc(33.33% - 20px);\r\n  margin: 10px;\r\n  background-color: #ffcb05;\r\n  border: 5px solid #003a70;\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  gap: 10px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75px;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.name,\r\n.pokemontitle {\r\n  text-align: center;\r\n  margin-right: 33.33%;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #003a70;\r\n}\r\n\r\n.number {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.like-num {\r\n  margin-left: 5px;\r\n}\r\n\r\n.like-btn {\r\n  margin: -45px 15px 15px calc(75% - 25px);\r\n  font-weight: 900;\r\n  color: #3d7dca;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-btn:hover {\r\n  color: #003a70;\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(254, 55, 55);\r\n}\r\n\r\n.comments-btn,\r\n.reservations-btn {\r\n  font-weight: 900;\r\n  margin-bottom: 10px;\r\n  width: calc(75% + 25px);\r\n  background-color: #3d7dca;\r\n  color: #003a70;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments-btn:hover,\r\n.reservations-btn:hover {\r\n  background-color: #3d7dca;\r\n  color: #ffcb05;\r\n}\r\n\r\n.comments-btn:active,\r\n.reservations-btn:active {\r\n  background-color: #003a70;\r\n}\r\n\r\n/* Comment Modal */\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 10px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.787);\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n  background-color: #1f69c3f1;\r\n  margin: auto;\r\n  padding: 20px;\r\n  width: 90%;\r\n  border: 2px solid #003a70;\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Comment Container */\r\n\r\n.comments-details-box {\r\n  margin-top: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-weight: 700;\r\n}\r\n\r\n.t-span {\r\n  color: #0a0a0a;\r\n}\r\n\r\n/* comment image container */\r\n\r\n.comment_ImgBox {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2.5rem;\r\n  height: 150px;\r\n}\r\n\r\n.comment_img {\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\n.pokemon_name {\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #ffcb05;\r\n  font-weight: 900;\r\n  font-size: larger;\r\n}\r\n\r\n.line {\r\n  width: 50%;\r\n}\r\n\r\n/* Comment Info Container */\r\n\r\n.infoContainer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 9rem;\r\n}\r\n\r\n.info {\r\n  color: #fff;\r\n  font-weight: 900;\r\n}\r\n\r\n.commentTitle {\r\n  color: #fff;\r\n}\r\n\r\n.badge {\r\n  background-color: #ffcb05;\r\n  border-radius: 50%;\r\n  padding: 5px 8px 5px 8px;\r\n  color: #003a70;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Comment Section and Area */\r\n\r\n.commentBox {\r\n  width: 50vw;\r\n  margin: 1rem;\r\n  background-color: #ffcb05;\r\n  height: 20vh;\r\n  overflow: auto;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n}\r\n\r\n.comment-area {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment {\r\n  height: 10%;\r\n  padding: 2%;\r\n  margin: 2%;\r\n  background-color: #3d7dca;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n}\r\n\r\n\r\n/* Comment Posting */\r\n\r\n.commentMessage {\r\n  margin-top: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.commentMessage form {\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.commentMessage form input[type=\"text\"] {\r\n  padding: 1rem;\r\n  width: 45vw;\r\n  height: auto;\r\n  font-weight: 600;\r\n  border-radius: 20px;\r\n  border: none;\r\n}\r\n\r\n.commentMessage form textarea {\r\n  padding: 4rem 2rem;\r\n  font-weight: 600;\r\n  border-radius: 20px;\r\n}\r\n\r\n.commentMessage form .submitComment {\r\n  padding: 1rem;\r\n  margin: 0.1rem 8rem;\r\n  background-color: #ffcb05;\r\n  border-radius: 50px;\r\n  border: none;\r\n}\r\n\r\n.commentMessage form .submitComment:hover {\r\n  box-shadow: 4px 3px;\r\n  font-weight: 900;\r\n}\r\n\r\n/* Footer Section */\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  padding: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\n/* Reservations popup */\r\n\r\n.openpopup {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  overflow: scroll;\r\n  padding: 16px;\r\n  opacity: 1;\r\n  background-color: #1f69c3f1;\r\n}\r\n\r\n.maincontainer {\r\n  border: 2px black solid;\r\n  width: 95%;\r\n  height: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.closecontainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 3rem;\r\n}\r\n\r\n.closeandimage {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 2rem;\r\n  width: 100%;\r\n  height: 30%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.closingbutton {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.pokemonimage {\r\n  width: 25%;\r\n  height: 70%;\r\n  margin-top: -2rem;\r\n}\r\n\r\n.pokemontitle {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #ffcb05;\r\n  margin-top: -4rem;\r\n}\r\n\r\n.characteristics {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  color: white;\r\n  margin-top: -3rem;\r\n}\r\n\r\n.addareservation {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addareservationtitle {\r\n  text-align: center;\r\n}\r\n\r\n.inputreserv {\r\n  list-style-type: none;\r\n}\r\n\r\n.inputreserv li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.reservationslist {\r\n  width: 20rem;\r\n}\r\n\r\n.reservationstitle {\r\n  text-align: center;\r\n}\r\n\r\n.tableitem {\r\n  color: #fff;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.inputreservation li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Main Styles */\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 900;\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Header Section */\r\n\r\n.navbar {\r\n  background-color: #ffcb05;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  position: relative;\r\n}\r\n\r\n.logo {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#main-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.navigation {\r\n  text-decoration: none;\r\n  color: #003a70;\r\n}\r\n\r\n.navigation:hover {\r\n  text-decoration: underline;\r\n  color: #3d7dca;\r\n}\r\n\r\n/* Scroll Button */\r\n\r\n#scroll-to-top-btn {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 99;\r\n  font-size: 16px;\r\n  outline: none;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  border: 5px solid #003a70;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#scroll-to-top-btn:hover {\r\n  background-color: #3d7dca;\r\n}\r\n\r\n/* Pokemon Cards Section */\r\n\r\n#item-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.pokemon-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: calc(33.33% - 20px);\r\n  margin: 10px;\r\n  background-color: #ffcb05;\r\n  border: 5px solid #003a70;\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  gap: 10px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 75px;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.name,\r\n.pokemontitle {\r\n  text-align: center;\r\n  margin-right: 33.33%;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #003a70;\r\n}\r\n\r\n.number {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.like-num {\r\n  margin-left: 5px;\r\n}\r\n\r\n.like-btn {\r\n  margin: -45px 15px 15px calc(75% - 25px);\r\n  font-weight: 900;\r\n  color: #3d7dca;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-btn:hover {\r\n  color: #003a70;\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(254, 55, 55);\r\n}\r\n\r\n.comments-btn,\r\n.reservations-btn {\r\n  font-weight: 900;\r\n  margin-bottom: 10px;\r\n  width: calc(75% + 25px);\r\n  background-color: #3d7dca;\r\n  color: #003a70;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments-btn:hover,\r\n.reservations-btn:hover {\r\n  background-color: #3d7dca;\r\n  color: #ffcb05;\r\n}\r\n\r\n.comments-btn:active,\r\n.reservations-btn:active {\r\n  background-color: #003a70;\r\n}\r\n\r\n/* Comment Modal */\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 10px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.787);\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n  background-color: #1f69c3f1;\r\n  margin: auto;\r\n  padding: 20px;\r\n  width: 90%;\r\n  border: 2px solid #003a70;\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Comment Container */\r\n\r\n.comments-details-box {\r\n  margin-top: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-weight: 700;\r\n}\r\n\r\n.t-span {\r\n  color: #0a0a0a;\r\n}\r\n\r\n/* comment image container */\r\n\r\n.comment_ImgBox {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2.5rem;\r\n  height: 150px;\r\n}\r\n\r\n.comment_img {\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\n.pokemon_name {\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #ffcb05;\r\n  font-weight: 900;\r\n  font-size: larger;\r\n}\r\n\r\n.line {\r\n  width: 50%;\r\n}\r\n\r\n/* Comment Info Container */\r\n\r\n.infoContainer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 9rem;\r\n}\r\n\r\n.info {\r\n  color: #fff;\r\n  font-weight: 900;\r\n}\r\n\r\n.commentTitle {\r\n  color: #fff;\r\n}\r\n\r\n.badge {\r\n  background-color: #ffcb05;\r\n  border-radius: 50%;\r\n  padding: 5px 8px 5px 8px;\r\n  color: #003a70;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Comment Section and Area */\r\n\r\n.commentBox {\r\n  width: 50vw;\r\n  margin: 1rem;\r\n  background-color: #ffcb05;\r\n  height: 20vh;\r\n  overflow: auto;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n}\r\n\r\n.comment-area {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment {\r\n  height: 10%;\r\n  padding: 2%;\r\n  margin: 2%;\r\n  background-color: #3d7dca;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n}\r\n\r\n\r\n/* Comment Posting */\r\n\r\n.commentMessage {\r\n  margin-top: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.commentMessage form {\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.commentMessage form input[type=\"text\"] {\r\n  padding: 1rem;\r\n  width: 45vw;\r\n  height: auto;\r\n  font-weight: 600;\r\n  border-radius: 20px;\r\n  border: none;\r\n}\r\n\r\n.commentMessage form textarea {\r\n  padding: 4rem 2rem;\r\n  font-weight: 600;\r\n  border-radius: 20px;\r\n}\r\n\r\n.commentMessage form .submitComment {\r\n  padding: 1rem;\r\n  margin: 0.1rem 8rem;\r\n  background-color: #ffcb05;\r\n  border-radius: 50px;\r\n  border: none;\r\n}\r\n\r\n.commentMessage form .submitComment:hover {\r\n  box-shadow: 4px 3px;\r\n  font-weight: 900;\r\n}\r\n\r\n/* Footer Section */\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  background-color: #ffcb05;\r\n  color: #003a70;\r\n  padding: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\n/* Reservations popup */\r\n\r\n.openpopup {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  overflow: scroll;\r\n  padding: 16px;\r\n  opacity: 1;\r\n  background-color: #1f69c3f1;\r\n}\r\n\r\n.maincontainer {\r\n  border: 2px black solid;\r\n  width: 95%;\r\n  height: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.closecontainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 3rem;\r\n}\r\n\r\n.closeandimage {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 2rem;\r\n  width: 100%;\r\n  height: 30%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.closingbutton {\r\n  color: #ffcb05;\r\n  float: right;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.t-headline {\r\n  color: #ffcb05;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.pokemonimage {\r\n  width: 25%;\r\n  height: 70%;\r\n  margin-top: -2rem;\r\n}\r\n\r\n.pokemontitle {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n  color: #ffcb05;\r\n  margin-top: -4rem;\r\n}\r\n\r\n.characteristics {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  color: white;\r\n  margin-top: -3rem;\r\n}\r\n\r\n.addareservation {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addareservationtitle {\r\n  text-align: center;\r\n}\r\n\r\n.inputreserv {\r\n  list-style-type: none;\r\n}\r\n\r\n.inputreserv li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.reservationslist {\r\n  width: 20rem;\r\n}\r\n\r\n.reservationstitle {\r\n  text-align: center;\r\n}\r\n\r\n.tableitem {\r\n  color: #fff;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.inputreservation li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8x2LmEAhsHWapmVM1aOR/comments';
class CommentData {
  // ─── Comment Counter ─────────────────────────────────────────────────

    static commentCounter = async (pokemonId) => {
      const res = await fetch(`${getUrl}?item_id=${pokemonId}`);
      const data = await res.json();

      const badge = document.querySelector('.badge');
      const counter = data.length;
      if (counter === undefined) {
        badge.innerHTML = 0;
      }
      badge.innerHTML = counter;
    }
    // ─── Add Comment ─────────────────────────────────────────────────────────────

    static addComment = async (pokemonId, name, comments) => {
      const res = await fetch(`${getUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: pokemonId,
          username: name,
          comment: comments,
        }),
      });
      this.commentCounter(pokemonId);
      return res;
    }

    // ─── Load Comment ────────────────────────────────────────────

    static loadComments = async (pokemonId, commentArea) => {
      const res = await fetch(`${getUrl}?item_id=${pokemonId}`);
      const data = await res.json();
      data.forEach((comment) => {
        const commentTextBox = document.createElement('div');
        commentTextBox.classList.add('comment');
        const commentText = document.createElement('span');
        commentText.classList.add('player');
        commentText.innerHTML = `${comment.creation_date} { ${comment.username} } ${comment.comment}`;
        commentTextBox.appendChild(commentText);
        commentArea.appendChild(commentTextBox);
      });
      this.commentCounter(pokemonId);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentData);

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");


const modal = async (pokemon) => {
  // ─── Comment Modal ───────────────────────────────────────────
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.removeChild(modalContent);
    modal.style.display = 'none';
  });

  const title = document.createElement('p');
  title.innerHTML = '<h2 class="t-headline">Comment <span class="t-span">Window</span></h2>';

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
  const userComment = document.createElement('div');
  userComment.classList.add('comments-details-box');
  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  commentTitle.innerHTML = 'Comments ';
  const badge = document.createElement('span');
  badge.classList.add('badge');
  commentTitle.appendChild(badge);
  const line = document.createElement('hr');
  line.classList.add('line');
  userComment.appendChild(commentTitle);
  userComment.appendChild(line);
  const commentBox = document.createElement('div');
  commentBox.classList.add('commentBox');
  userComment.appendChild(commentBox);
  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');

  commentBox.appendChild(commentArea);

  _comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadComments(pokemon.id, commentArea);

  commentInfo.appendChild(userComment);
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
  submitComment.addEventListener('click', () => {
    if ((playName.value && commentTextarea.value) !== '') {
      _comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].addComment(pokemon.id, playName.value, commentTextarea.value);
      const nowDate = new Date();
      const date = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
      const commentTextBox = document.createElement('div');
      commentTextBox.classList.add('comment');
      const commentText = document.createElement('span');
      commentText.classList.add('player');
      commentText.innerHTML = `${date} { ${playName.value} } ${commentTextarea.value}`;
      commentTextBox.appendChild(commentText);
      commentArea.appendChild(commentTextBox);
      playName.value = '';
      commentTextarea.value = '';
    }
  });

  commentForm.appendChild(submitComment);
  commentMessage.appendChild(commentForm);

  modalContent.appendChild(commentMessage);
  modal.appendChild(modalContent);
};

class ShowComments {
    static commentPopup = async (pokemon) => {
      modal(pokemon);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowComments);

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
/******/ 				scriptUrl = document.currentScript.src;
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_pokeball_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pokeball.png */ "./src/img/pokeball.png");
/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll.js */ "./src/modules/scroll.js");
/* harmony import */ var _modules_reservationspopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservationspopup.js */ "./src/modules/reservationspopup.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentPopup.js */ "./src/modules/commentPopup.js");
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
  
  commentsBtn.addEventListener('click', () => {
    _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"].commentPopup(pokemon);
  });

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createPokemon });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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Qy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2RUFBeUI7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFDQUFxQztBQUM3RTtBQUNBLElBQUkseUVBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiw2REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyREFBUTtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQixpREFBaUQsTUFBTTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBYztBQUNkLGlFQUFlLEVBQUUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvY29tbWVudFBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uc3BvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2R1bGVzL3NhdmVyZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE1haW4gU3R5bGVzICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNtYWluLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICMzZDdkY2E7XFxyXFxufVxcclxcblxcclxcbi8qIFNjcm9sbCBCdXR0b24gKi9cXHJcXG5cXHJcXG4jc2Nyb2xsLXRvLXRvcC1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Nyb2xsLXRvLXRvcC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9rZW1vbiBDYXJkcyBTZWN0aW9uICovXFxyXFxuXFxyXFxuI2l0ZW0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDNhNzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLFxcclxcbi5wb2tlbW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMy4zMyU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1udW0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIG1hcmdpbjogLTQ1cHggMTVweCAxNXB4IGNhbGMoNzUlIC0gMjVweCk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDI1NCwgNTUsIDU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bixcXHJcXG4ucmVzZXJ2YXRpb25zLWJ0biB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiBjYWxjKDc1JSArIDI1cHgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuOmhvdmVyLFxcclxcbi5yZXNlcnZhdGlvbnMtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bjphY3RpdmUsXFxyXFxuLnJlc2VydmF0aW9ucy1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4Nyk7XFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2OWMzZjE7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBDb250YWluZXIgKi9cXHJcXG5cXHJcXG4uY29tbWVudHMtZGV0YWlscy1ib3gge1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLnQtaGVhZGxpbmUge1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udC1zcGFuIHtcXHJcXG4gIGNvbG9yOiAjMGEwYTBhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50IGltYWdlIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5jb21tZW50X0ltZ0JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X2ltZyB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbl9uYW1lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBJbmZvIENvbnRhaW5lciAqL1xcclxcblxcclxcbi5pbmZvQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDlyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUaXRsZSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhZGdlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgU2VjdGlvbiBhbmQgQXJlYSAqL1xcclxcblxcclxcbi5jb21tZW50Qm94IHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29tbWVudCBQb3N0aW5nICovXFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudE1lc3NhZ2UgZm9ybSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogNDV2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudE1lc3NhZ2UgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA0cmVtIDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gLnN1Ym1pdENvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC4xcmVtIDhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gLnN1Ym1pdENvbW1lbnQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9ucyBwb3B1cCAqL1xcclxcblxcclxcbi5vcGVucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjY5YzNmMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VhbmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2luZ2J1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udC1oZWFkbGluZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbmltYWdlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBtYXJnaW4tdG9wOiAtNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3RlcmlzdGljcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRhcmVzZXJ2YXRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYXJlc2VydmF0aW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYgbGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zbGlzdCB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnN0aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJsZWl0ZW0ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnZhdGlvbiBsaSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkVBQTZFO0VBQzdFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFD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QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1haW4gU3R5bGVzICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNtYWluLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICMzZDdkY2E7XFxyXFxufVxcclxcblxcclxcbi8qIFNjcm9sbCBCdXR0b24gKi9cXHJcXG5cXHJcXG4jc2Nyb2xsLXRvLXRvcC1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwM2E3MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Nyb2xsLXRvLXRvcC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9rZW1vbiBDYXJkcyBTZWN0aW9uICovXFxyXFxuXFxyXFxuI2l0ZW0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDNhNzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLFxcclxcbi5wb2tlbW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMy4zMyU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1udW0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIG1hcmdpbjogLTQ1cHggMTVweCAxNXB4IGNhbGMoNzUlIC0gMjVweCk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDI1NCwgNTUsIDU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bixcXHJcXG4ucmVzZXJ2YXRpb25zLWJ0biB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiBjYWxjKDc1JSArIDI1cHgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2RjYTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuOmhvdmVyLFxcclxcbi5yZXNlcnZhdGlvbnMtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bjphY3RpdmUsXFxyXFxuLnJlc2VydmF0aW9ucy1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4Nyk7XFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2OWMzZjE7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNhNzA7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBDb250YWluZXIgKi9cXHJcXG5cXHJcXG4uY29tbWVudHMtZGV0YWlscy1ib3gge1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLnQtaGVhZGxpbmUge1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udC1zcGFuIHtcXHJcXG4gIGNvbG9yOiAjMGEwYTBhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50IGltYWdlIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5jb21tZW50X0ltZ0JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X2ltZyB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbl9uYW1lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBJbmZvIENvbnRhaW5lciAqL1xcclxcblxcclxcbi5pbmZvQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDlyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUaXRsZSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhZGdlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XFxyXFxuICBjb2xvcjogIzAwM2E3MDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgU2VjdGlvbiBhbmQgQXJlYSAqL1xcclxcblxcclxcbi5jb21tZW50Qm94IHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDdkY2E7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29tbWVudCBQb3N0aW5nICovXFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudE1lc3NhZ2UgZm9ybSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogNDV2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudE1lc3NhZ2UgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA0cmVtIDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gLnN1Ym1pdENvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC4xcmVtIDhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRNZXNzYWdlIGZvcm0gLnN1Ym1pdENvbW1lbnQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGNvbG9yOiAjMDAzYTcwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9ucyBwb3B1cCAqL1xcclxcblxcclxcbi5vcGVucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjY5YzNmMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VhbmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2luZ2J1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udC1oZWFkbGluZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbmltYWdlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICNmZmNiMDU7XFxyXFxuICBtYXJnaW4tdG9wOiAtNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3RlcmlzdGljcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRhcmVzZXJ2YXRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYXJlc2VydmF0aW9udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnYgbGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zbGlzdCB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnN0aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJsZWl0ZW0ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRyZXNlcnZhdGlvbiBsaSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy84eDJMbUVBaHNIV2FwbVZNMWFPUi9jb21tZW50cyc7XHJcbmNsYXNzIENvbW1lbnREYXRhIHtcclxuICAvLyDilIDilIDilIAgQ29tbWVudCBDb3VudGVyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICAgIHN0YXRpYyBjb21tZW50Q291bnRlciA9IGFzeW5jIChwb2tlbW9uSWQpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7Z2V0VXJsfT9pdGVtX2lkPSR7cG9rZW1vbklkfWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhZGdlJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgaWYgKGNvdW50ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJhZGdlLmlubmVySFRNTCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgYmFkZ2UuaW5uZXJIVE1MID0gY291bnRlcjtcclxuICAgIH1cclxuICAgIC8vIOKUgOKUgOKUgCBBZGQgQ29tbWVudCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgICBzdGF0aWMgYWRkQ29tbWVudCA9IGFzeW5jIChwb2tlbW9uSWQsIG5hbWUsIGNvbW1lbnRzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2dldFVybH0vYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBpdGVtX2lkOiBwb2tlbW9uSWQsXHJcbiAgICAgICAgICB1c2VybmFtZTogbmFtZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb21tZW50Q291bnRlcihwb2tlbW9uSWQpO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKUgOKUgOKUgCBMb2FkIENvbW1lbnQg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG4gICAgc3RhdGljIGxvYWRDb21tZW50cyA9IGFzeW5jIChwb2tlbW9uSWQsIGNvbW1lbnRBcmVhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2dldFVybH0/aXRlbV9pZD0ke3Bva2Vtb25JZH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29tbWVudFRleHRCb3guY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcicpO1xyXG4gICAgICAgIGNvbW1lbnRUZXh0LmlubmVySFRNTCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0geyAke2NvbW1lbnQudXNlcm5hbWV9IH0gJHtjb21tZW50LmNvbW1lbnR9YDtcclxuICAgICAgICBjb21tZW50VGV4dEJveC5hcHBlbmRDaGlsZChjb21tZW50VGV4dCk7XHJcbiAgICAgICAgY29tbWVudEFyZWEuYXBwZW5kQ2hpbGQoY29tbWVudFRleHRCb3gpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb21tZW50Q291bnRlcihwb2tlbW9uSWQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnREYXRhOyIsImltcG9ydCBDb21tZW50RGF0YSBmcm9tICcuL2NvbW1lbnQuanMnO1xyXG5cclxuY29uc3QgbW9kYWwgPSBhc3luYyAocG9rZW1vbikgPT4ge1xyXG4gIC8vIOKUgOKUgOKUgCBDb21tZW50IE1vZGFsIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcclxuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGl0bGUuaW5uZXJIVE1MID0gJzxoMiBjbGFzcz1cInQtaGVhZGxpbmVcIj5Db21tZW50IDxzcGFuIGNsYXNzPVwidC1zcGFuXCI+V2luZG93PC9zcGFuPjwvaDI+JztcclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAvLyDilIDilIDilIAgRGlzcGxheSBJbWFnZSBhbmQgRGV0YWlscyBTZWN0aW9uIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICBjb25zdCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBva2Vtb25EZXRhaWxzID0gYDxkaXYgY2xhc3M9XCJjb21tZW50cy1kZXRhaWxzLWJveFwiPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X0ltZ0JveFwiPlxyXG4gICAgICAgICA8aW1nIGNsYXNzPVwiY29tbWVudF9pbWdcIiBzcmM9XCIke3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiIGFsdD1cIlwiPlxyXG4gICAgIDwvZGl2PiA8cCBjbGFzcz1cInBva2Vtb25fbmFtZVwiPiR7cG9rZW1vbi5uYW1lfTwvcD48aHIgY2xhc3M9XCJsaW5lXCI+IFxyXG4gICAgIDxkaXYgY2xhc3M9XCJpbmZvQ29udGFpbmVyXCI+PGRpdiBjbGFzcz1cInBva2Vtb25fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+QmFzZSBFeHBlcmllbWNlOiAke3Bva2Vtb24uYmFzZV9leHBlcmllbmNlfS48L3A+XHJcbiAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj5IZWlnaHQ6ICR7cG9rZW1vbi5oZWlnaHR9PC9wPlxyXG4gICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwicG9rZW1vbl9kZXRhaWxzXCI+PHAgY2xhc3M9XCJpbmZvXCI+V2VpZ2h0OiAke3Bva2Vtb24ud2VpZ2h0fTwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiBcclxuIDwvZGl2PmA7XHJcbiAgY29tbWVudENvbnRlbnQuaW5uZXJIVE1MID0gcG9rZW1vbkRldGFpbHM7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRDb250ZW50KTtcclxuXHJcbiAgLy8g4pSA4pSA4pSAIENvbW1lbnQgU2VjdGlvbiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBjb25zdCBjb21tZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdXNlckNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtZGV0YWlscy1ib3gnKTtcclxuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbW1lbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50VGl0bGUnKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICc7XHJcbiAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgYmFkZ2UuY2xhc3NMaXN0LmFkZCgnYmFkZ2UnKTtcclxuICBjb21tZW50VGl0bGUuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xyXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gIHVzZXJDb21tZW50LmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZSk7XHJcbiAgdXNlckNvbW1lbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgY29uc3QgY29tbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRCb3guY2xhc3NMaXN0LmFkZCgnY29tbWVudEJveCcpO1xyXG4gIHVzZXJDb21tZW50LmFwcGVuZENoaWxkKGNvbW1lbnRCb3gpO1xyXG4gIGNvbnN0IGNvbW1lbnRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudEFyZWEuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1hcmVhJyk7XHJcblxyXG4gIGNvbW1lbnRCb3guYXBwZW5kQ2hpbGQoY29tbWVudEFyZWEpO1xyXG5cclxuICBDb21tZW50RGF0YS5sb2FkQ29tbWVudHMocG9rZW1vbi5pZCwgY29tbWVudEFyZWEpO1xyXG5cclxuICBjb21tZW50SW5mby5hcHBlbmRDaGlsZCh1c2VyQ29tbWVudCk7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRJbmZvKTtcclxuXHJcbiAgLy8g4pSA4pSA4pSAIENvbW1lbnQgU3VibWlzc2lvbiBGb3JtIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICBjb25zdCBjb21tZW50TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRNZXNzYWdlJyk7XHJcbiAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gIGNvbnN0IHBsYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBwbGF5TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHBsYXlOYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuICBwbGF5TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xyXG4gIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKHBsYXlOYW1lKTtcclxuXHJcbiAgY29uc3QgY29tbWVudFRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBjb21tZW50VGV4dGFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEluc2lnaHRzJyk7XHJcbiAgY29tbWVudFRleHRhcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50VGV4dGFyZWEpO1xyXG5cclxuICBjb25zdCBzdWJtaXRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0Q29tbWVudC5jbGFzc0xpc3QuYWRkKCdzdWJtaXRDb21tZW50Jyk7XHJcbiAgc3VibWl0Q29tbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgc3VibWl0Q29tbWVudC5pbm5lckhUTUwgPSAnQ29tbWVudCc7XHJcbiAgc3VibWl0Q29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICgocGxheU5hbWUudmFsdWUgJiYgY29tbWVudFRleHRhcmVhLnZhbHVlKSAhPT0gJycpIHtcclxuICAgICAgQ29tbWVudERhdGEuYWRkQ29tbWVudChwb2tlbW9uLmlkLCBwbGF5TmFtZS52YWx1ZSwgY29tbWVudFRleHRhcmVhLnZhbHVlKTtcclxuICAgICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBgJHtub3dEYXRlLmdldEZ1bGxZZWFyKCl9LSR7bm93RGF0ZS5nZXRNb250aCgpICsgMX0tJHtub3dEYXRlLmdldERhdGUoKX1gO1xyXG4gICAgICBjb25zdCBjb21tZW50VGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb21tZW50VGV4dEJveC5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcclxuICAgICAgY29tbWVudFRleHQuaW5uZXJIVE1MID0gYCR7ZGF0ZX0geyAke3BsYXlOYW1lLnZhbHVlfSB9ICR7Y29tbWVudFRleHRhcmVhLnZhbHVlfWA7XHJcbiAgICAgIGNvbW1lbnRUZXh0Qm94LmFwcGVuZENoaWxkKGNvbW1lbnRUZXh0KTtcclxuICAgICAgY29tbWVudEFyZWEuYXBwZW5kQ2hpbGQoY29tbWVudFRleHRCb3gpO1xyXG4gICAgICBwbGF5TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICBjb21tZW50VGV4dGFyZWEudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29tbWVudEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29tbWVudCk7XHJcbiAgY29tbWVudE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29tbWVudEZvcm0pO1xyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudE1lc3NhZ2UpO1xyXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbn07XHJcblxyXG5jbGFzcyBTaG93Q29tbWVudHMge1xyXG4gICAgc3RhdGljIGNvbW1lbnRQb3B1cCA9IGFzeW5jIChwb2tlbW9uKSA9PiB7XHJcbiAgICAgIG1vZGFsKHBva2Vtb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93Q29tbWVudHM7IiwiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XHJcbmV4cG9ydCBjb25zdCBBUFBfSUQgPSAnTHdRSGMzVnMxbEM5ejU4YUk4ZVknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hcHBzLyR7QVBQX0lEfS9saWtlc2ApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgbGlrZXMgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpPy5saWtlcyB8fCAwO1xyXG4gIHJldHVybiBsaWtlcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCwgY291bnQpID0+IHtcclxuICBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBwcy8ke0FQUF9JRH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgbGlrZXM6IGNvdW50IH0pLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XHJcbiAgY29uc3QgaXRlbUlkcyA9IEFycmF5LmZyb20obGlrZUJ1dHRvbnMsIChidG4pID0+IGJ0bi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XHJcbiAgY29uc3QgbGlrZUNvdW50cyA9IGF3YWl0IFByb21pc2UuYWxsKGl0ZW1JZHMubWFwKChpZCkgPT4gZmV0Y2hMaWtlcyhpZCkpKTtcclxuICBsaWtlQ291bnRzLmZvckVhY2goKGxpa2VzLCBpKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlQ291bnRFbGVtID0gbGlrZUJ1dHRvbnNbaV0ucXVlcnlTZWxlY3RvcignLmxpa2UtbnVtJyk7XHJcbiAgICBsaWtlQ291bnRFbGVtLnRleHRDb250ZW50ID0gbGlrZXM7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGRpc3BsYXlyZXNlcnYsIGFkZHJlc2VydmF0aW9uIH0gZnJvbSAnLi9zYXZlcmVzZXJ2YXRpb24uanMnO1xyXG5cclxuY29uc3QgY2FyZHBvcHVwID0gKHBva2Vtb24pID0+IHtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21vZGFsJyk7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbnBvcHVwJyk7XHJcbiAgY29uc3QgbWFpbmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbmNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjbG9zZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNsb3NlY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlY29udGFpbmVyJyk7XHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmdidXR0b24nKTtcclxuICBjb25zdCB0aXRsZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0aXRsZWJ1dHRvbi5pbm5lckhUTUwgPSAnPGgyIGNsYXNzPVwidC1oZWFkbGluZVwiPlJlc2VydmF0aW9ucyA8c3BhbiBjbGFzcz1cInQtc3BhblwiPiAgV2luZG93PC9zcGFuPjwvaDI+JztcclxuICBjbG9zZWNvbnRhaW5lci5hcHBlbmQodGl0bGVidXR0b24sIGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgY2xvc2VhbmRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNsb3NlYW5kaW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VhbmRpbWFnZScpO1xyXG4gIGNvbnN0IHBva2Vtb25pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHBva2Vtb25pbWFnZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdDtcclxuICBwb2tlbW9uaW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9rZW1vbmltYWdlJyk7XHJcbiAgY2xvc2VhbmRpbWFnZS5hcHBlbmQocG9rZW1vbmltYWdlKTtcclxuXHJcbiAgY29uc3QgcG9rZW1vbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBva2Vtb25hbWUuY2xhc3NMaXN0LmFkZCgncG9rZW1vbmFtZScpO1xyXG4gIGNvbnN0IHBva2Vtb250aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgcG9rZW1vbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb250aXRsZScpO1xyXG4gIHBva2Vtb250aXRsZS50ZXh0Q29udGVudCA9IHBva2Vtb24ubmFtZTtcclxuICBwb2tlbW9uYW1lLmFwcGVuZChwb2tlbW9udGl0bGUpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXJpc3RpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGFyYWN0ZXJpc3RpY3MuY2xhc3NMaXN0LmFkZCgnY2hhcmFjdGVyaXN0aWNzJyk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHdlaWdodC50ZXh0Q29udGVudCA9IGBXZWlndGg6ICR7cG9rZW1vbi53ZWlnaHR9IEtnYDtcclxuICB3ZWlnaHQuY2xhc3NMaXN0LmFkZCgnd2VpZ3RoJyk7XHJcbiAgY29uc3QgYmFzZXhwZXJpZW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBiYXNleHBlcmllbmNlLnRleHRDb250ZW50ID0gYEJhc2UgRXhwZXJpZW5jZTogJHtwb2tlbW9uLmJhc2VfZXhwZXJpZW5jZX0gcG9pbnRzYDtcclxuICBiYXNleHBlcmllbmNlLmNsYXNzTGlzdC5hZGQoJ2Jhc2V4cGVyaWVuY2UnKTtcclxuICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGVpZ2h0LnRleHRDb250ZW50ID0gYEhlaWdodDogJHtwb2tlbW9uLmhlaWdodH0gZmVldGA7XHJcbiAgaGVpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hlaWdodCcpO1xyXG4gIGNoYXJhY3RlcmlzdGljcy5hcHBlbmQod2VpZ2h0LCBiYXNleHBlcmllbmNlLCBoZWlnaHQpO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXNlcnZhdGlvbnMuY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zJyk7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb25zdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHJlc2VydmF0aW9uc3RpdGxlLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgcmVzZXJ2YXRpb25zdGl0bGUuY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zdGl0bGUnKTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2YXRpb25zbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgcmVzZXJ2YXRpb25zbGlzdC5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbnNsaXN0Jyk7XHJcbiAgcmVzZXJ2YXRpb25zLmFwcGVuZChyZXNlcnZhdGlvbnN0aXRsZSwgcmVzZXJ2YXRpb25zbGlzdCk7XHJcblxyXG4gIGNvbnN0IGFkZGFyZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGFyZXNlcnZhdGlvbi5jbGFzc0xpc3QuYWRkKCdhZGRhcmVzZXJ2YXRpb24nKTtcclxuICBjb25zdCBhZGRhcmVzZXJ2YXRpb250aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgYWRkYXJlc2VydmF0aW9udGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkYXJlc2VydmF0aW9udGl0bGUnKTtcclxuICBhZGRhcmVzZXJ2YXRpb250aXRsZS50ZXh0Q29udGVudCA9ICdBZGQgYSByZXNlcnZhdGlvbic7XHJcbiAgY29uc3QgaW5wdXRyZXNlcnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGlucHV0cmVzZXJ2LmNsYXNzTGlzdC5hZGQoJ2lucHV0cmVzZXJ2Jyk7XHJcblxyXG4gIGNvbnN0IG5hbWVyZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgbmFtZXJlc2VydmF0aW9uLmNsYXNzTGlzdC5hZGQoJ25hbWVyZXNlcnZhdGlvbicpO1xyXG4gIGNvbnN0IGlucHV0bmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgaW5wdXRuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xyXG4gIGlucHV0bmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcbiAgaW5wdXRuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XHJcbiAgbmFtZXJlc2VydmF0aW9uLmFwcGVuZChpbnB1dG5hbWUpO1xyXG5cclxuICBjb25zdCBkYXRlcmVzZXJ2YXRpb25zdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgZGF0ZXJlc2VydmF0aW9uc3RhcnQuY2xhc3NMaXN0LmFkZCgnZGF0ZXJlc2VydmF0aW9uc3RhcnQnKTtcclxuICBjb25zdCBpbnB1dGRhdGVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRkYXRlc3RhcnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBpbnB1dGRhdGVzdGFydC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0ZGF0ZScpO1xyXG4gIGlucHV0ZGF0ZXN0YXJ0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU3RhcnQgZGF0ZScpO1xyXG4gIGlucHV0ZGF0ZXN0YXJ0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgZGF0ZXJlc2VydmF0aW9uc3RhcnQuYXBwZW5kKGlucHV0ZGF0ZXN0YXJ0KTtcclxuXHJcbiAgY29uc3QgZGF0ZXJlc2VydmF0aW9uZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkYXRlcmVzZXJ2YXRpb25lbmQuY2xhc3NMaXN0LmFkZCgnZGF0ZXJlc2VydmF0aW9uZW5kJyk7XHJcbiAgY29uc3QgaW5wdXRkYXRlZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dGRhdGVlbmQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBpbnB1dGRhdGVlbmQuc2V0QXR0cmlidXRlKCdpZCcsICdlbmRkYXRlJyk7XHJcbiAgaW5wdXRkYXRlZW5kLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW5kIGRhdGUnKTtcclxuICBpbnB1dGRhdGVlbmQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcgJyk7XHJcbiAgZGF0ZXJlc2VydmF0aW9uZW5kLmFwcGVuZChpbnB1dGRhdGVlbmQpO1xyXG5cclxuICBjb25zdCByZXNlcnZlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVzZXJ2ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgcmVzZXJ2ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc2VydmVidXR0b24nKTtcclxuICByZXNlcnZlYnV0dG9uLmlubmVySFRNTCA9ICdSZXNlcnZlJztcclxuXHJcbiAgaW5wdXRyZXNlcnYuYXBwZW5kKG5hbWVyZXNlcnZhdGlvbiwgZGF0ZXJlc2VydmF0aW9uc3RhcnQsIGRhdGVyZXNlcnZhdGlvbmVuZCwgcmVzZXJ2ZWJ1dHRvbik7XHJcbiAgYWRkYXJlc2VydmF0aW9uLmFwcGVuZChhZGRhcmVzZXJ2YXRpb250aXRsZSwgaW5wdXRyZXNlcnYpO1xyXG5cclxuICBtYWluY29udGFpbmVyLmFwcGVuZChjbG9zZWNvbnRhaW5lciwgY2xvc2VhbmRpbWFnZSwgcG9rZW1vbmFtZSwgY2hhcmFjdGVyaXN0aWNzLFxyXG4gICAgcmVzZXJ2YXRpb25zLCBhZGRhcmVzZXJ2YXRpb24pO1xyXG4gIHBvcHVwLmFwcGVuZChtYWluY29udGFpbmVyKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG5cclxuICBkaXNwbGF5cmVzZXJ2KGlucHV0bmFtZSwgaW5wdXRkYXRlc3RhcnQsIGlucHV0ZGF0ZWVuZCwgcG9rZW1vbi5pZCwgcmVzZXJ2YXRpb25zbGlzdCk7XHJcblxyXG4gIHJlc2VydmVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoKGlucHV0bmFtZS52YWx1ZSAmJiBpbnB1dGRhdGVzdGFydC52YWx1ZSAmJiBpbnB1dGRhdGVlbmQudmFsdWUpICE9PSAnJykge1xyXG4gICAgICBhZGRyZXNlcnZhdGlvbihpbnB1dG5hbWUsIGlucHV0ZGF0ZXN0YXJ0LCBpbnB1dGRhdGVlbmQsIHBva2Vtb24uaWQsIHJlc2VydmF0aW9uc2xpc3QpO1xyXG4gICAgICBjb25zdCB0YWJsZWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICB0YWJsZWl0ZW0uY2xhc3NMaXN0LmFkZCgndGFibGVpdGVtJyk7XHJcbiAgICAgIHRhYmxlaXRlbS5pbm5lckhUTUwgPSBgJHtpbnB1dGRhdGVzdGFydC52YWx1ZX0gLSAke2lucHV0ZGF0ZWVuZC52YWx1ZX0gYnkgJHtpbnB1dG5hbWUudmFsdWV9YDtcclxuICAgICAgcmVzZXJ2YXRpb25zbGlzdC5hcHBlbmRDaGlsZCh0YWJsZWl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5wb3B1cCcpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZHBvcHVwOyIsImNvbnN0IGNhbGN1bGF0ZXJlc2VydmF0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZWl0ZW0nKTtcclxuICBjb25zdCBjb3VudGVyID0gdGFibGUubGVuZ3RoO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uc3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uc3RpdGxlJyk7XHJcbiAgcmVzZXJ2YXRpb25zdGl0bGUuaW5uZXJIVE1MID0gYFJlc2VydmF0aW9ucyAoJHtjb3VudGVyfSlgO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheXJlc2VydiA9IGFzeW5jIChpbnB1dG5hbWUsIGlucHV0ZGF0ZXN0YXJ0LCBpbnB1dGRhdGVlbmQsIGlkLCByZXNlcnZhdGlvbnNsaXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTHdRSGMzVnMxbEM5ejU4YUk4ZVkvcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHtpZH1gLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uc2RhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICByZXNlcnZhdGlvbnNkYXRhLmZvckVhY2goKHJlc2VydmF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB0YWJsZWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgdGFibGVpdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYmxlaXRlbScpO1xyXG4gICAgdGFibGVpdGVtLmlubmVySFRNTCA9IGAke3Jlc2VydmF0aW9uLmRhdGVfc3RhcnR9IC0gJHtyZXNlcnZhdGlvbi5kYXRlX2VuZH0gYnkgJHtyZXNlcnZhdGlvbi51c2VybmFtZX1gO1xyXG4gICAgcmVzZXJ2YXRpb25zbGlzdC5hcHBlbmRDaGlsZCh0YWJsZWl0ZW0pO1xyXG4gIH0pO1xyXG4gIGNhbGN1bGF0ZXJlc2VydmF0aW9ucygpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkcmVzZXJ2YXRpb24gPSBhc3luYyAoaW5wdXRuYW1lLCBpbnB1dGRhdGVzdGFydCwgaW5wdXRkYXRlZW5kLCBpZCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0x3UUhjM1ZzMWxDOXo1OGFJOGVZL3Jlc2VydmF0aW9ucy8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICAgIHVzZXJuYW1lOiBpbnB1dG5hbWUudmFsdWUsXHJcbiAgICAgICAgZGF0ZV9zdGFydDogaW5wdXRkYXRlc3RhcnQudmFsdWUsXHJcbiAgICAgICAgZGF0ZV9lbmQ6IGlucHV0ZGF0ZWVuZC52YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICk7XHJcbiAgaW5wdXRuYW1lLnZhbHVlID0gJyc7XHJcbiAgaW5wdXRkYXRlc3RhcnQudmFsdWUgPSAnJztcclxuICBpbnB1dGRhdGVlbmQudmFsdWUgPSAnJztcclxuICBjYWxjdWxhdGVyZXNlcnZhdGlvbnMoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlyZXNlcnYsIGFkZHJlc2VydmF0aW9uLCBjYWxjdWxhdGVyZXNlcnZhdGlvbnMgfTsiLCJleHBvcnQgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tdG9wLWJ0bicpO1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMCkge1xyXG4gICAgc2Nyb2xsQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzY3JvbGxCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL3Bva2ViYWxsLnBuZyc7XHJcbmltcG9ydCB7IGhhbmRsZVNjcm9sbCwgaGFuZGxlU2Nyb2xsVG9wIH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbC5qcyc7XHJcbmltcG9ydCBjYXJkcG9wdXAgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9uc3BvcHVwLmpzJztcclxuaW1wb3J0IHsgZmV0Y2hMaWtlcywgcG9zdExpa2UsIGNhbGN1bGF0ZUxpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VzLmpzJztcclxuaW1wb3J0IFNob3dDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudFBvcHVwLmpzJztcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gbG9nbztcclxuXHJcbi8vIFNjcm9sbCBCdXR0b25cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tdG9wLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2Nyb2xsVG9wKTtcclxuXHJcbi8vIFBva2Vtb24gQ2FyZFxyXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBjcmVhdGVQb2tlbW9uID0gYXN5bmMgKHBva2Vtb24pID0+IHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLWJsb2NrJyk7XHJcblxyXG4gIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHNwcml0ZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdDtcclxuXHJcbiAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwcml0ZSk7XHJcblxyXG4gIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBudW1iZXIudGV4dENvbnRlbnQgPSBgJHtwb2tlbW9uLmlkLnRvU3RyaW5nKCkucGFkU3RhcnQoMSwgMCl9YDtcclxuXHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuICBuYW1lLnRleHRDb250ZW50ID0gcG9rZW1vbi5uYW1lO1xyXG5cclxuICBjb25zdCBjb21tZW50c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbW1lbnRzQnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICBjb21tZW50c0J0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1idG4nKTtcclxuICBcclxuICBjb21tZW50c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFNob3dDb21tZW50cy5jb21tZW50UG9wdXAocG9rZW1vbik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2VydmF0aW9uc0J0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xyXG4gIHJlc2VydmF0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbnMtYnRuJyk7XHJcbiAgcmVzZXJ2YXRpb25zQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwb2tlbW9uLmlkLnRvU3RyaW5nKCkucGFkU3RhcnQoMSwgMCl9YCk7XHJcbiAgcmVzZXJ2YXRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2FyZHBvcHVwKHBva2Vtb24pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBMaWtlIEJ1dHRvbiBIYW5kbGVcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGZldGNoTGlrZXMocG9rZW1vbi5pZCk7XHJcblxyXG4gIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtaGVhcnQnLCAnbGlrZS1idG4nKTtcclxuICBsaWtlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHBva2Vtb24uaWQpO1xyXG5cclxuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbGlrZUNvdW50LmNsYXNzTGlzdC5hZGQoJ2xpa2UtbnVtJyk7XHJcbiAgbGlrZUNvdW50LnRleHRDb250ZW50ID0gbGlrZXM7XHJcbiAgbGlrZUJ0bi5hcHBlbmRDaGlsZChsaWtlQ291bnQpO1xyXG5cclxuICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIC8vIExpa2UgY291bnRcclxuICAgIGxpa2VDb3VudC50ZXh0Q29udGVudCA9IHBhcnNlSW50KGxpa2VDb3VudC50ZXh0Q29udGVudCwgMTApICsgMTtcclxuICAgIC8vIEludm9sdmVtZW50IEFQSVxyXG4gICAgYXdhaXQgcG9zdExpa2UocG9rZW1vbi5pZCk7XHJcbiAgfSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoc3ByaXRlQ29udGFpbmVyKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChjb21tZW50c0J0bik7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNCdG4pO1xyXG5cclxuICBwb2tlbW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG59O1xyXG5cclxuLy8gRmV0Y2ggQVBJXHJcbmNvbnN0IGZldGNoUG9rZW1vbnMgPSBhc3luYyAobnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgdXJscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bWJlciB9LCAoXywgaSkgPT4gYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2kgKyAxfWApO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHVybHMubWFwKCh1cmwpID0+IGZldGNoKHVybCkpKTtcclxuICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSkpO1xyXG4gIGF3YWl0IFByb21pc2UuYWxsKHBva2Vtb25EYXRhLm1hcCgocG9rZW1vbikgPT4gY3JlYXRlUG9rZW1vbihwb2tlbW9uKSkpO1xyXG59O1xyXG5cclxuZmV0Y2hQb2tlbW9ucyg0NSk7XHJcbmNhbGN1bGF0ZUxpa2VzKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlUG9rZW1vbiB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=