function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-add-phone-pg-add-phone-module"], {
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
  }
}]);
//# sourceMappingURL=pg-add-phone-pg-add-phone-module-es5.js.map