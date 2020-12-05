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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar> <!-- mode=\"ios\" -->\n    <ion-title class=\"toolbar-title\">\n        <span class=\"title\">Testemunho Telefone</span>\n        <span class=\"subtitle\">{{ version }}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab (click)=\"addPhone()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon class=\"icon-footer\" name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <div class=\"home-header\">\n        <h1 class=\"title\">Telefones</h1>\n        <ion-searchbar (ionChange)=\"filterPhone($event)\" placeholder=\"Pesquisar telefone\" animated></ion-searchbar>\n    </div>\n    <div class=\"container\">\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n\n        <ion-card (click)=\"openDetails(item.ddd, item.phone)\" *ngFor=\"let item of displayPhones\">\n            <ion-card-header>\n                <ion-card-title>\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/tools-and-utensils.svg\"></ion-icon>\n                    <span>({{ item['ddd'] }}) {{ item['phone'] }}</span>\n                </ion-card-title>\n            </ion-card-header>\n        \n            <ion-card-content>\n                <span class=\"last-contact\">Último contato: {{ getLastContact(item['ddd'], item['phone']) }}</span>\n                <ion-icon color=\"primary\" class=\"arrow-right\" src=\"assets/seta-direita.svg\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
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


    __webpack_exports__["default"] = ".toolbar-title {\n  overflow: visible;\n  position: relative;\n}\n.toolbar-title .title {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: -7px;\n}\n.toolbar-title .subtitle {\n  font-size: 66%;\n  color: #888;\n}\n.container {\n  margin: 24vh 5% 0 5%;\n}\nion-card {\n  margin-bottom: 5vh;\n  cursor: pointer;\n}\n.icon-footer {\n  font-size: 35px;\n}\n.arrow-right {\n  position: absolute;\n  right: 18px;\n  top: -17px;\n}\nion-searchbar {\n  padding: 0 9%;\n  margin-top: -17px;\n  color: #FFF;\n}\n.last-contact {\n  font-size: 0.9em;\n}\n/* android only */\n.md ion-searchbar {\n  color: #000;\n}\n/* ============ */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvRG9jdW1lbnRzL1Byb2plY3RzL3Rlc3RlbXVuaG8tdGVsZWZvbmUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER0E7RUFDSSxvQkFBQTtBQ0FKO0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDR0Y7QUREQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJSjtBREZBO0VBQ0ksZ0JBQUE7QUNLSjtBREZBLGlCQUFBO0FBRUk7RUFDSSxXQUFBO0FDSVI7QUREQSxpQkFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci10aXRsZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC03cHg7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA2NiU7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cbn1cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMjR2aCA1JSAwIDUlO1xufVxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pY29uLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5hcnJvdy1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogLTE3cHg7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgICBwYWRkaW5nOiAwIDklO1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuLmxhc3QtY29udGFjdCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLyogYW5kcm9pZCBvbmx5ICovXG4ubWQge1xuICAgIGlvbi1zZWFyY2hiYXIge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG4vKiA9PT09PT09PT09PT0gKi8iLCIudG9vbGJhci10aXRsZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9vbGJhci10aXRsZSAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcbn1cbi50b29sYmFyLXRpdGxlIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogNjYlO1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjR2aCA1JSAwIDUlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1mb290ZXIge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5hcnJvdy1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogLTE3cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwIDklO1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5sYXN0LWNvbnRhY3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4vKiBhbmRyb2lkIG9ubHkgKi9cbi5tZCBpb24tc2VhcmNoYmFyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qID09PT09PT09PT09PSAqLyJdfQ== */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
          } else {
            this.displayPhones = this.arrPhones.filter(function (obj) {
              var phone = obj.ddd + obj.phone;
              return phone.indexOf(filter) >= 0; // @todo make filter by content name too
            });
          }
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