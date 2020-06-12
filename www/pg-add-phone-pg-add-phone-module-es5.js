function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-add-phone-pg-add-phone-module"], {
  /***/
  "./src/app/database.service.ts":
  /*!*************************************!*\
    !*** ./src/app/database.service.ts ***!
    \*************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var DatabaseService = /*#__PURE__*/function () {
      function DatabaseService() {
        _classCallCheck(this, DatabaseService);

        this.keyPhones = 'phones';
        this.allPhones = null;
      }

      _createClass(DatabaseService, [{
        key: "getAllPhones",
        value: function getAllPhones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var arrPhone, retPhones, dbPhone;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.allPhones) {
                      _context.next = 4;
                      break;
                    }

                    arrPhone = this.allPhones;
                    _context.next = 10;
                    break;

                  case 4:
                    _context.next = 6;
                    return Storage.get({
                      key: this.keyPhones
                    });

                  case 6:
                    retPhones = _context.sent;
                    dbPhone = typeof retPhones.value !== 'undefined' && retPhones.value !== null ? retPhones.value : '[]';
                    arrPhone = JSON.parse(dbPhone);
                    this.allPhones = arrPhone;

                  case 10:
                    arrPhone.sort(function (a, b) {
                      var keyA = a.ddd + a.phone;
                      var keyB = b.ddd + b.phone;

                      if (keyA < keyB) {
                        return -1;
                      } else {
                        return 1;
                      }
                    });
                    return _context.abrupt("return", arrPhone);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "savePhones",
        value: function savePhones(allPhones) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    Storage.set({
                      key: this.keyPhones,
                      value: JSON.stringify(allPhones)
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addPhone",
        value: function addPhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var allPhones, checkPhone;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context3.sent;
                    _context3.next = 5;
                    return this.getPhone(ddd, phone);

                  case 5:
                    checkPhone = _context3.sent;

                    if (!(checkPhone == null)) {
                      _context3.next = 12;
                      break;
                    }

                    allPhones.push({
                      ddd: ddd,
                      phone: phone,
                      content: []
                    });
                    this.savePhones(allPhones);
                    return _context3.abrupt("return", true);

                  case 12:
                    return _context3.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getPhone",
        value: function getPhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var retPhone, arrPhones, _iterator, _step, loopPhone, loopDDD, loopNumber;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    retPhone = null;
                    _context4.next = 3;
                    return this.getAllPhones();

                  case 3:
                    arrPhones = _context4.sent;
                    _iterator = _createForOfIteratorHelper(arrPhones);
                    _context4.prev = 5;

                    _iterator.s();

                  case 7:
                    if ((_step = _iterator.n()).done) {
                      _context4.next = 16;
                      break;
                    }

                    loopPhone = _step.value;
                    loopDDD = loopPhone.ddd;
                    loopNumber = loopPhone.phone;

                    if (!(loopDDD === ddd && loopNumber === phone)) {
                      _context4.next = 14;
                      break;
                    }

                    retPhone = loopPhone;
                    return _context4.abrupt("break", 16);

                  case 14:
                    _context4.next = 7;
                    break;

                  case 16:
                    _context4.next = 21;
                    break;

                  case 18:
                    _context4.prev = 18;
                    _context4.t0 = _context4["catch"](5);

                    _iterator.e(_context4.t0);

                  case 21:
                    _context4.prev = 21;

                    _iterator.f();

                    return _context4.finish(21);

                  case 24:
                    return _context4.abrupt("return", retPhone);

                  case 25:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[5, 18, 21, 24]]);
          }));
        }
      }, {
        key: "deletePhone",
        value: function deletePhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var allPhones, deleted, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context5.sent;
                    deleted = false;
                    i = 0;

                  case 5:
                    if (!(i < allPhones.length)) {
                      _context5.next = 13;
                      break;
                    }

                    if (!(allPhones[i].ddd === ddd && allPhones[i].phone === phone)) {
                      _context5.next = 10;
                      break;
                    }

                    allPhones.splice(i, 1);
                    deleted = true;
                    return _context5.abrupt("break", 13);

                  case 10:
                    i++;
                    _context5.next = 5;
                    break;

                  case 13:
                    if (deleted) {
                      this.savePhones(allPhones);
                    }

                    return _context5.abrupt("return", deleted);

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getContactTypes",
        value: function getContactTypes() {
          var arrTypes = [];
          arrTypes.push('Não existe');
          arrTypes.push('Fora de área');
          arrTypes.push('Caixa postal');
          arrTypes.push('Atendeu');
          arrTypes.push('Revisita');
          arrTypes.push('Não Atendeu');
          arrTypes.push('Não quer retorno');
          return arrTypes;
        }
      }, {
        key: "saveContact",
        value: function saveContact(contactInfo) {
          var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var isEdit, dateErr, typeErr, allPhones, i, dddLoop, phoneLoop, newInfo;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    isEdit = idx !== '';
                    dateErr = contactInfo.date === '';
                    typeErr = contactInfo.type === '';

                    if (!(!dateErr && !typeErr)) {
                      _context6.next = 20;
                      break;
                    }

                    _context6.next = 6;
                    return this.getAllPhones();

                  case 6:
                    allPhones = _context6.sent;
                    i = 0;

                  case 8:
                    if (!(i < allPhones.length)) {
                      _context6.next = 20;
                      break;
                    }

                    dddLoop = allPhones[i].ddd;
                    phoneLoop = allPhones[i].phone;

                    if (!(dddLoop === contactInfo.ddd && phoneLoop === contactInfo.phone)) {
                      _context6.next = 17;
                      break;
                    }

                    newInfo = {
                      date: contactInfo.date,
                      type: contactInfo.type,
                      name: contactInfo.name,
                      text: contactInfo.text,
                      publication: contactInfo.publication,
                      anotations: contactInfo.anotations
                    };

                    if (isEdit) {
                      allPhones[i].content[idx] = newInfo;
                    } else {
                      allPhones[i].content.push(newInfo);
                    }

                    allPhones[i].content.sort(function (a, b) {
                      var keyA = a.date;
                      var keyB = b.date;

                      if (keyA > keyB) {
                        return -1;
                      } else {
                        return 1;
                      }
                    });
                    this.savePhones(allPhones);
                    return _context6.abrupt("return", true);

                  case 17:
                    i++;
                    _context6.next = 8;
                    break;

                  case 20:
                    return _context6.abrupt("return", false);

                  case 21:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "addContact",
        value: function addContact(contactInfo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.saveContact(contactInfo);

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "editContact",
        value: function editContact(contactInfo, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.saveContact(contactInfo, idx);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getContact",
        value: function getContact(ddd, phone, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var obPhone, contact;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.getPhone(ddd, phone);

                  case 2:
                    obPhone = _context9.sent;

                    if (!(obPhone !== false)) {
                      _context9.next = 7;
                      break;
                    }

                    contact = obPhone.content[idx];

                    if (!(typeof contact !== 'undefined')) {
                      _context9.next = 7;
                      break;
                    }

                    return _context9.abrupt("return", contact);

                  case 7:
                    return _context9.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getLastContactInfo",
        value: function getLastContactInfo(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var obPhone, lastContact;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.getPhone(ddd, phone);

                  case 2:
                    obPhone = _context10.sent;

                    if (!(obPhone !== false)) {
                      _context10.next = 7;
                      break;
                    }

                    lastContact = obPhone.content[0];

                    if (!(typeof lastContact !== 'undefined')) {
                      _context10.next = 7;
                      break;
                    }

                    return _context10.abrupt("return", lastContact);

                  case 7:
                    return _context10.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(ddd, phone, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var allPhones, i, dddLoop, phoneLoop;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context11.sent;
                    i = 0;

                  case 4:
                    if (!(i < allPhones.length)) {
                      _context11.next = 14;
                      break;
                    }

                    dddLoop = allPhones[i].ddd;
                    phoneLoop = allPhones[i].phone;

                    if (!(dddLoop === ddd && phoneLoop === phone)) {
                      _context11.next = 11;
                      break;
                    }

                    allPhones[i].content.splice(idx, 1);
                    this.savePhones(allPhones);
                    return _context11.abrupt("return", true);

                  case 11:
                    i++;
                    _context11.next = 4;
                    break;

                  case 14:
                    return _context11.abrupt("return", false);

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatabaseService);
    /***/
  },

  /***/
  "./src/app/pg-add-phone/pg-add-phone-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pg-add-phone/pg-add-phone-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PgAddPhonePageRoutingModule */

  /***/
  function srcAppPgAddPhonePgAddPhoneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddPhonePageRoutingModule", function () {
      return PgAddPhonePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pg-add-phone.page */
    "./src/app/pg-add-phone/pg-add-phone.page.ts");

    var routes = [{
      path: '',
      component: _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_3__["PgAddPhonePage"]
    }];

    var PgAddPhonePageRoutingModule = function PgAddPhonePageRoutingModule() {
      _classCallCheck(this, PgAddPhonePageRoutingModule);
    };

    PgAddPhonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PgAddPhonePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pg-add-phone/pg-add-phone.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pg-add-phone/pg-add-phone.module.ts ***!
    \*****************************************************/

  /*! exports provided: PgAddPhonePageModule */

  /***/
  function srcAppPgAddPhonePgAddPhoneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddPhonePageModule", function () {
      return PgAddPhonePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pg_add_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pg-add-phone-routing.module */
    "./src/app/pg-add-phone/pg-add-phone-routing.module.ts");
    /* harmony import */


    var _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pg-add-phone.page */
    "./src/app/pg-add-phone/pg-add-phone.page.ts");

    var PgAddPhonePageModule = function PgAddPhonePageModule() {
      _classCallCheck(this, PgAddPhonePageModule);
    };

    PgAddPhonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pg_add_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["PgAddPhonePageRoutingModule"]],
      declarations: [_pg_add_phone_page__WEBPACK_IMPORTED_MODULE_6__["PgAddPhonePage"]]
    })], PgAddPhonePageModule);
    /***/
  },

  /***/
  "./src/app/utils.service.ts":
  /*!**********************************!*\
    !*** ./src/app/utils.service.ts ***!
    \**********************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService(loadingCtr, alertCtr, platform) {
        _classCallCheck(this, UtilsService);

        this.loadingCtr = loadingCtr;
        this.alertCtr = alertCtr;
        this.platform = platform;
      }

      _createClass(UtilsService, [{
        key: "getAppVersion",
        value: function getAppVersion() {
          return '1.1.0';
        }
      }, {
        key: "getLoader",
        value: function getLoader(message, spinner) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingCtr.create({
                      message: message,
                      spinner: spinner
                    }).then(function (res) {
                      res.present();
                      var TIME_IN_MS = 5000;
                      var hideFooterTimeout = setTimeout(function () {
                        _this.closeLoader();
                      }, TIME_IN_MS);
                    });

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "closeLoader",
        value: function closeLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return this.loadingCtr.dismiss();

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 6:
                    _context13.prev = 6;
                    _context13.t0 = _context13["catch"](0);
                    return _context13.abrupt("return");

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[0, 6]]);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert(header, subHeader, message, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var alert;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.alertCtr.create({
                      header: header,
                      subHeader: subHeader,
                      message: message,
                      buttons: buttons
                    });

                  case 2:
                    alert = _context14.sent;
                    _context14.next = 5;
                    return alert.present();

                  case 5:
                    return _context14.abrupt("return", _context14.sent);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "isMobileBrowser",
        value: function isMobileBrowser() {
          // is this web-browser on mobile device
          return this.platform.is('mobileweb');
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    /***/
  }
}]);
//# sourceMappingURL=pg-add-phone-pg-add-phone-module-es5.js.map