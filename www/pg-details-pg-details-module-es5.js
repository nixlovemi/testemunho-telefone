function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-details-pg-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPgDetailsPgDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar mode=\"ios\">\n        <IonButtons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </IonButtons>\n        <ion-title>\n            Testemunho Telefone\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/trash.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon class=\"icon-footer\" name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <div class=\"home-header\">\n        <h1 class=\"title\">Detalhes</h1>\n    </div>\n\n    <div class=\"container\">\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/tools-and-utensils.svg\"></ion-icon>\n                    <span>98132-4148</span>\n                </ion-card-title>\n            </ion-card-header>\n        </ion-card>\n\n        <ion-card class=\"card-history\">\n            <ion-card-content>\n                <ion-icon class=\"edit-icon\" color=\"primary\" src=\"assets/edit-rounded-2.svg\"></ion-icon>\n\n                <p class=\"line-info\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/calendario.svg\"></ion-icon>\n                    <span>Data: 17/05/2020</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/silhueta-de-usuario-1.svg\"></ion-icon>\n                    <span>Nome: Carlos</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-bible\" color=\"primary\" class=\"icon-title\" src=\"assets/revista-aberta.svg\"></ion-icon>\n                    <span>Texto: Mateus 10:10</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/revistas.svg\"></ion-icon>\n                    <span>Publicação: Enviei a brochura XXX</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/notas.svg\"></ion-icon>\n                    <span>Notas: Enviei a brochura e fiquei de entrar em contato semana que vem para estudarmos a primeira lição.</span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"card-history\">\n            <ion-card-content>\n                <ion-icon class=\"edit-icon\" color=\"primary\" src=\"assets/edit-rounded-2.svg\"></ion-icon>\n\n                <p class=\"line-info\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/calendario.svg\"></ion-icon>\n                    <span>Data: 17/05/2020</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/silhueta-de-usuario-1.svg\"></ion-icon>\n                    <span>Nome: Carlos</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-bible\" color=\"primary\" class=\"icon-title\" src=\"assets/revista-aberta.svg\"></ion-icon>\n                    <span>Texto: Mateus 10:10</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/revistas.svg\"></ion-icon>\n                    <span>Publicação: Enviei a brochura XXX</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon id=\"icon-name\" color=\"primary\" class=\"icon-title\" src=\"assets/notas.svg\"></ion-icon>\n                    <span>Notas: Enviei a brochura e fiquei de entrar em contato semana que vem para estudarmos a primeira lição.</span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pg-details/pg-details-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pg-details/pg-details-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PgDetailsPageRoutingModule */

  /***/
  function srcAppPgDetailsPgDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgDetailsPageRoutingModule", function () {
      return PgDetailsPageRoutingModule;
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


    var _pg_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pg-details.page */
    "./src/app/pg-details/pg-details.page.ts");

    var routes = [{
      path: '',
      component: _pg_details_page__WEBPACK_IMPORTED_MODULE_3__["PgDetailsPage"]
    }];

    var PgDetailsPageRoutingModule = function PgDetailsPageRoutingModule() {
      _classCallCheck(this, PgDetailsPageRoutingModule);
    };

    PgDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PgDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pg-details/pg-details.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pg-details/pg-details.module.ts ***!
    \*************************************************/

  /*! exports provided: PgDetailsPageModule */

  /***/
  function srcAppPgDetailsPgDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgDetailsPageModule", function () {
      return PgDetailsPageModule;
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


    var _pg_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pg-details-routing.module */
    "./src/app/pg-details/pg-details-routing.module.ts");
    /* harmony import */


    var _pg_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pg-details.page */
    "./src/app/pg-details/pg-details.page.ts");

    var PgDetailsPageModule = function PgDetailsPageModule() {
      _classCallCheck(this, PgDetailsPageModule);
    };

    PgDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pg_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PgDetailsPageRoutingModule"]],
      declarations: [_pg_details_page__WEBPACK_IMPORTED_MODULE_6__["PgDetailsPage"]]
    })], PgDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pg-details/pg-details.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pg-details/pg-details.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPgDetailsPgDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".line-info span {\n  position: relative;\n  top: -2px;\n  left: 6px;\n}\n\n#icon-name, #icon-bible {\n  font-size: 16px;\n}\n\n.edit-icon {\n  font-size: 30px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvL05ldEJlYW5zUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWRldGFpbHMvcGctZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BnLWRldGFpbHMvcGctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQVI7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGctZGV0YWlscy9wZy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLWluZm8ge1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgbGVmdDogNnB4O1xuICAgIH1cbn1cbiNpY29uLW5hbWUsICNpY29uLWJpYmxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZWRpdC1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbn0iLCIubGluZS1pbmZvIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogNnB4O1xufVxuXG4jaWNvbi1uYW1lLCAjaWNvbi1iaWJsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pg-details/pg-details.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pg-details/pg-details.page.ts ***!
    \***********************************************/

  /*! exports provided: PgDetailsPage */

  /***/
  function srcAppPgDetailsPgDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgDetailsPage", function () {
      return PgDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PgDetailsPage = /*#__PURE__*/function () {
      function PgDetailsPage() {
        _classCallCheck(this, PgDetailsPage);
      }

      _createClass(PgDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PgDetailsPage;
    }();

    PgDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pg-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pg-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pg-details.page.scss */
      "./src/app/pg-details/pg-details.page.scss"))["default"]]
    })], PgDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pg-details-pg-details-module-es5.js.map