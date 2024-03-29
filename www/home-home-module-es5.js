function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar> <!-- mode=\"ios\" -->\n    <ion-title class=\"toolbar-title\">\n        <span class=\"title\">Testemunho Telefone</span>\n        <span class=\"subtitle\">{{ version }}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab (click)=\"addPhone()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon class=\"icon-footer\" name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <div class=\"home-header\">\n        <h1 class=\"title\">Filtrar</h1>\n        <ion-searchbar (ionChange)=\"filterPhone($event)\" placeholder=\"Digite o telefone/nome\" animated></ion-searchbar>\n    </div>\n    <div class=\"container\">\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n\n        <ion-card (click)=\"openDetails(item.ddd, item.phone)\" *ngFor=\"let item of displayPhones\">\n            <ion-card-header>\n                <ion-card-title>\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/tools-and-utensils.svg\"></ion-icon>\n                    <span>({{ item['ddd'] }}) {{ item['phone'] }}</span>\n                </ion-card-title>\n            </ion-card-header>\n        \n            <ion-card-content>\n                <span class=\"last-contact\">Último contato: {{ getLastContact(item['ddd'], item['phone']) }}</span>\n                <ion-icon color=\"primary\" class=\"arrow-right\" src=\"assets/seta-direita.svg\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-title {\n  overflow: visible;\n  position: relative;\n}\n.toolbar-title .title {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: -7px;\n}\n.toolbar-title .subtitle {\n  font-size: 66%;\n  color: #888;\n}\n.container {\n  margin: 24vh 5% 0 5%;\n}\nion-card {\n  margin-bottom: 5vh;\n  cursor: pointer;\n}\n.icon-footer {\n  font-size: 35px;\n}\n.arrow-right {\n  position: absolute;\n  right: 18px;\n  top: -17px;\n}\nion-searchbar {\n  padding: 0 9%;\n  margin-top: -17px;\n  color: #FFF;\n}\n.last-contact {\n  font-size: 0.9em;\n}\n/* android only */\n.md ion-searchbar {\n  color: #000;\n}\n/* ============ */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDQVI7QURHQTtFQUNJLG9CQUFBO0FDQUo7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxlQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNHRjtBRERBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkE7RUFDSSxnQkFBQTtBQ0tKO0FERkEsaUJBQUE7QUFFSTtFQUNJLFdBQUE7QUNJUjtBRERBLGlCQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRpdGxlIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTdweDtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDY2JTtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgfVxufVxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyNHZoIDUlIDAgNSU7XG59XG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb24tZm9vdGVyIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmFycm93LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbiAgdG9wOiAtMTdweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IDAgOSU7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgY29sb3I6ICNGRkY7XG59XG4ubGFzdC1jb250YWN0IHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4vKiBhbmRyb2lkIG9ubHkgKi9cbi5tZCB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cbi8qID09PT09PT09PT09PSAqLyIsIi50b29sYmFyLXRpdGxlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b29sYmFyLXRpdGxlIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtN3B4O1xufVxuLnRvb2xiYXItdGl0bGUgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiA2NiU7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyNHZoIDUlIDAgNSU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmFycm93LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbiAgdG9wOiAtMTdweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDAgOSU7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmxhc3QtY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8qIGFuZHJvaWQgb25seSAqL1xuLm1kIGlvbi1zZWFyY2hiYXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogPT09PT09PT09PT09ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _pg_add_phone_pg_add_phone_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pg-add-phone/pg-add-phone.page */
    "./src/app/pg-add-phone/pg-add-phone.page.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var HomePage =
    /*#__PURE__*/
    // tslint:disable-next-line: component-class-suffix
    function () {
      function HomePage(navCtrl, modalController, db, utils) {
        _classCallCheck(this, HomePage);

        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.db = db;
        this.utils = utils;
        this.arrPhones = [];
        this.displayPhones = [];
        this.version = '';
        this.filterStr = '';
        this.version = this.utils.getAppVersion();
      }

      _createClass(HomePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadPhones();

                  case 2:
                    this.postFilterPhone(this.filterStr);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadPhones",
        value: function loadPhones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var allPhones;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.db.getAllPhones();

                  case 2:
                    allPhones = _context2.sent;
                    this.arrPhones = allPhones;
                    this.displayPhones = allPhones;

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openDetails",
        value: function openDetails(ddd, phone) {
          this.navCtrl.navigateForward('/pg-details/' + ddd + '/' + phone);
        }
      }, {
        key: "addPhone",
        value: function addPhone() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _pg_add_phone_pg_add_phone_page__WEBPACK_IMPORTED_MODULE_4__["PgAddPhonePage"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _yield$modal$onWillDi = _context3.sent;
                    data = _yield$modal$onWillDi.data;

                    if (data.reload) {
                      this.loadPhones();
                    }

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "filterPhone",
        value: function filterPhone(evt) {
          var searchTerm = evt.srcElement.value;
          this.filterStr = searchTerm;

          if (!searchTerm) {
            this.displayPhones = this.arrPhones;
            return;
          }

          this.postFilterPhone(searchTerm);
        }
      }, {
        key: "postFilterPhone",
        value: function postFilterPhone(filter) {
          if (filter.trim() === '') {
            this.displayPhones = this.arrPhones;
            return;
          }

          this.displayPhones = this.arrPhones.filter(function (obj) {
            // search by phone nbr
            var phone = obj.ddd + obj.phone;
            var foundPhone = phone.indexOf(filter) >= 0; // search by contact name

            var arrContent = obj.content.filter(function (obj2) {
              return obj2.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
            });
            var foundName = arrContent.length > 0;
            return foundPhone || foundName;
          });
        }
      }, {
        key: "getLastContact",
        value: function getLastContact(ddd, phone) {
          var objPhone = this.arrPhones.find(function (element) {
            return element.ddd === ddd && element.phone === phone;
          });

          if (typeof objPhone !== 'undefined') {
            var lastContact = objPhone.content[0];

            if (typeof lastContact !== 'undefined') {
              var name = lastContact.name;
              var strName = name !== '' ? ' (' + name + ')' : '';
              return moment__WEBPACK_IMPORTED_MODULE_6__(lastContact.date).format('DD/MM/YYYY') + strName;
            }
          }

          return ' nenhum contato';
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var ret;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadPhones();

                  case 2:
                    ret = _context4.sent;
                    setTimeout(function () {
                      event.target.complete();
                    }, 1500);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]
      }, {
        type: _utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }) // tslint:disable-next-line: component-class-suffix
    ], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map