function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-add-content-pg-add-content-module"], {
  /***/
  "./src/app/pg-add-content/pg-add-content-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pg-add-content/pg-add-content-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PgAddContentPageRoutingModule */

  /***/
  function srcAppPgAddContentPgAddContentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddContentPageRoutingModule", function () {
      return PgAddContentPageRoutingModule;
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


    var _pg_add_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pg-add-content.page */
    "./src/app/pg-add-content/pg-add-content.page.ts");

    var routes = [{
      path: '',
      component: _pg_add_content_page__WEBPACK_IMPORTED_MODULE_3__["PgAddContentPage"]
    }];

    var PgAddContentPageRoutingModule = function PgAddContentPageRoutingModule() {
      _classCallCheck(this, PgAddContentPageRoutingModule);
    };

    PgAddContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PgAddContentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pg-add-content/pg-add-content.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pg-add-content/pg-add-content.module.ts ***!
    \*********************************************************/

  /*! exports provided: PgAddContentPageModule */

  /***/
  function srcAppPgAddContentPgAddContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddContentPageModule", function () {
      return PgAddContentPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pg_add_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pg-add-content-routing.module */
    "./src/app/pg-add-content/pg-add-content-routing.module.ts");
    /* harmony import */


    var _pg_add_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pg-add-content.page */
    "./src/app/pg-add-content/pg-add-content.page.ts");

    var PgAddContentPageModule = function PgAddContentPageModule() {
      _classCallCheck(this, PgAddContentPageModule);
    };

    PgAddContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pg_add_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["PgAddContentPageRoutingModule"]],
      declarations: [_pg_add_content_page__WEBPACK_IMPORTED_MODULE_6__["PgAddContentPage"]]
    })], PgAddContentPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pg-add-content-pg-add-content-module-es5.js.map