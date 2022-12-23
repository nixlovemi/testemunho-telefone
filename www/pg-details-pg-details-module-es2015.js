(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-details-pg-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar> <!-- mode=\"ios\" -->\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"toolbar-title\">\n            Testemunho Telefone\n        </ion-title>\n        <ion-buttons (click)=\"delete()\" slot=\"end\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/trash.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab (click)=\"addContent()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon class=\"icon-footer\" name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <div class=\"home-header\">\n        <h1 class=\"title\">Detalhes</h1>\n    </div>\n\n    <div class=\"container\">\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/tools-and-utensils.svg\"></ion-icon>\n                    <span>({{ ddd }}) {{phone}}</span>\n                </ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"dv-btn-call\">\n                <ion-button color=\"tertiary\" (click)=\"makeCall()\">\n                    <ion-icon slot=\"start\" name=\"megaphone-outline\"></ion-icon>\n                    Ligar\n                </ion-button>\n                <!--<ion-button color=\"tertiary\" (click)=\"openWhats()\">-->\n                <ion-button color=\"tertiary\" [href]=\" 'whatsapp://send?phone=55' + ddd + phone \">    \n                    <ion-icon slot=\"start\" name=\"logo-whatsapp\"></ion-icon>\n                    Whatsapp\n                </ion-button>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"card-history\" *ngIf=\"noContent\">\n            <ion-card-content>\n                <p class=\"line-info\">\n                    <span>Nenhum contato registrado!</span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"card-history\" *ngFor=\"let cont of content; let i = index\">\n            <ion-card-content>\n                <ion-icon (click)=\"edit(i)\" class=\"edit-icon\" color=\"primary\" src=\"assets/edit-rounded-2.svg\"></ion-icon>\n\n                <p class=\"line-info\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/calendario.svg\"></ion-icon>\n                    <span>Data: {{ cont.date | date : 'dd/MM/y' }}</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/tag.svg\"></ion-icon>\n                    <span>Tipo: {{ cont.type }}</span>\n                </p>\n                <p class=\"line-info\" *ngIf=\"cont.name !== ''\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/silhueta-de-usuario-1.svg\"></ion-icon>\n                    <span>Nome: {{ cont.name }}</span>\n                </p>\n                <p class=\"line-info\" *ngIf=\"cont.text !== ''\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/revista-aberta.svg\"></ion-icon>\n                    <span>Texto: {{ cont.text }}</span>\n                </p>\n                <p class=\"line-info\" *ngIf=\"cont.publication !== ''\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/revistas.svg\"></ion-icon>\n                    <span>Publicação: {{ cont.publication }}</span>\n                </p>\n                <p class=\"line-info\">\n                    <ion-icon color=\"primary\" class=\"icon-title\" src=\"assets/notas.svg\"></ion-icon>\n                    <span>Notas: {{ cont.anotations }}</span>\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pg-details/pg-details-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pg-details/pg-details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PgDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgDetailsPageRoutingModule", function() { return PgDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pg_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pg-details.page */ "./src/app/pg-details/pg-details.page.ts");




const routes = [
    {
        path: '',
        component: _pg_details_page__WEBPACK_IMPORTED_MODULE_3__["PgDetailsPage"]
    }
];
let PgDetailsPageRoutingModule = class PgDetailsPageRoutingModule {
};
PgDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PgDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pg-details/pg-details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pg-details/pg-details.module.ts ***!
  \*************************************************/
/*! exports provided: PgDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgDetailsPageModule", function() { return PgDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pg_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pg-details-routing.module */ "./src/app/pg-details/pg-details-routing.module.ts");
/* harmony import */ var _pg_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pg-details.page */ "./src/app/pg-details/pg-details.page.ts");







let PgDetailsPageModule = class PgDetailsPageModule {
};
PgDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pg_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PgDetailsPageRoutingModule"]
        ],
        declarations: [_pg_details_page__WEBPACK_IMPORTED_MODULE_6__["PgDetailsPage"]]
    })
], PgDetailsPageModule);



/***/ }),

/***/ "./src/app/pg-details/pg-details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pg-details/pg-details.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".line-info span {\n  position: relative;\n  top: -2px;\n  left: 6px;\n}\n\n.icon-title {\n  font-size: 17px;\n}\n\n.edit-icon {\n  font-size: 30px;\n  position: absolute;\n  right: -9px;\n  top: 6px;\n}\n\n.card-history ion-card-content {\n  padding-left: 0 !important;\n}\n\n.dv-btn-call {\n  text-align: center;\n}\n\n.dv-btn-call ion-button {\n  font-size: 0.8em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWRldGFpbHMvcGctZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BnLWRldGFpbHMvcGctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUNBakI7O0FER0E7RUFDSSxlQUFlO0FDQW5COztBREVBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtBQ0NaOztBRENBO0VBRVEsMEJBQTBCO0FDQ2xDOztBREVBO0VBQ0ksa0JBQWtCO0FDQ3RCOztBREZBO0VBSVEsZ0JBQWdCO0FDRXhCIiwiZmlsZSI6InNyYy9hcHAvcGctZGV0YWlscy9wZy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLWluZm8ge1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgbGVmdDogNnB4O1xuICAgIH1cbn1cbi5pY29uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5lZGl0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC05cHg7XG4gICAgdG9wOiA2cHg7XG59XG4uY2FyZC1oaXN0b3J5IHtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmR2LWJ0bi1jYWxse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbn0iLCIubGluZS1pbmZvIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogNnB4O1xufVxuXG4uaWNvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTlweDtcbiAgdG9wOiA2cHg7XG59XG5cbi5jYXJkLWhpc3RvcnkgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uZHYtYnRuLWNhbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kdi1idG4tY2FsbCBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pg-details/pg-details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pg-details/pg-details.page.ts ***!
  \***********************************************/
/*! exports provided: PgDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgDetailsPage", function() { return PgDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _pg_add_content_pg_add_content_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pg-add-content/pg-add-content.page */ "./src/app/pg-add-content/pg-add-content.page.ts");






const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];



let PgDetailsPage = 
// tslint:disable-next-line: component-class-suffix
class PgDetailsPage {
    constructor(actRoute, db, utilsSrv, navCtrl, modalController, zone, callNumber) {
        this.actRoute = actRoute;
        this.db = db;
        this.utilsSrv = utilsSrv;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.zone = zone;
        this.callNumber = callNumber;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.actRoute.params.subscribe((res) => {
                this.ddd = res.ddd;
                this.phone = res.phone;
            });
            this.loadData();
        });
    }
    loadData() {
        this.zone.run(() => {
            setTimeout(() => {
                this.db.getPhone(this.ddd, this.phone).then((Phone) => {
                    this.content = Phone.content;
                    this.noContent = (this.content.length === 0);
                });
            }, 650);
            /*const Phone    = await this.db.getPhone(this.ddd, this.phone);
            this.content   = Phone.content;
            this.noContent = (this.content.length === 0);*/
        });
    }
    edit(idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pg_add_content_pg_add_content_page__WEBPACK_IMPORTED_MODULE_8__["PgAddContentPage"],
                componentProps: {
                    type: 'edit',
                    ddd: this.ddd,
                    phone: this.phone,
                    idx
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.reload) {
                this.loadData();
            }
        });
    }
    delete() {
        this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse telefone? Essa ação não poderá ser desfeita.', [
            {
                text: 'Não ...',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => { }
            }, {
                text: 'Sim!',
                handler: () => {
                    this.postDelete();
                }
            }
        ]);
    }
    postDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield this.db.deletePhone(this.ddd, this.phone);
            if (ret) {
                this.navCtrl.navigateBack('');
            }
        });
    }
    addContent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pg_add_content_pg_add_content_page__WEBPACK_IMPORTED_MODULE_8__["PgAddContentPage"],
                componentProps: {
                    type: 'insert',
                    ddd: this.ddd,
                    phone: this.phone
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            this.loadData();
        });
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadData();
            setTimeout(() => {
                event.target.complete();
            }, 1500);
        });
    }
    makeCall() {
        this.callNumber.callNumber(this.ddd + this.phone, true)
            .catch(err => this.utilsSrv.showAlert('Alerta', '', 'Não foi permitido fazer a ligação. Mensagem: ' + err, ['OK']));
    }
};
PgDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] }
];
PgDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pg-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pg-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-details/pg-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pg-details.page.scss */ "./src/app/pg-details/pg-details.page.scss")).default]
    })
    // tslint:disable-next-line: component-class-suffix
], PgDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pg-details-pg-details-module-es2015.js.map