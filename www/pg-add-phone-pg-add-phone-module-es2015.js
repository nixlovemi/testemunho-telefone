(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pg-add-phone-pg-add-phone-module"],{

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let DatabaseService = class DatabaseService {
    constructor() {
        this.keyPhones = 'phones';
        this.allPhones = null;
    }
    getAllPhones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let arrPhone;
            if (this.allPhones) {
                arrPhone = this.allPhones;
            }
            else {
                const retPhones = yield Storage.get({ key: this.keyPhones });
                const dbPhone = (typeof retPhones.value !== 'undefined' && retPhones.value !== null) ? retPhones.value : '[]';
                arrPhone = JSON.parse(dbPhone);
                this.allPhones = arrPhone;
            }
            arrPhone.sort((a, b) => {
                const keyA = a.ddd + a.phone;
                const keyB = b.ddd + b.phone;
                if (keyA < keyB) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
            return arrPhone;
        });
    }
    savePhones(allPhones) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Storage.set({
                key: this.keyPhones,
                value: JSON.stringify(allPhones)
            });
        });
    }
    addPhone(ddd, phone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allPhones = yield this.getAllPhones();
            const checkPhone = yield this.getPhone(ddd, phone);
            if (checkPhone == null) {
                allPhones.push({
                    ddd,
                    phone,
                    content: []
                });
                this.savePhones(allPhones);
                return true;
            }
            else {
                return false;
            }
        });
    }
    getPhone(ddd, phone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let retPhone = null;
            const arrPhones = yield this.getAllPhones();
            for (const loopPhone of arrPhones) {
                const loopDDD = loopPhone.ddd;
                const loopNumber = loopPhone.phone;
                if (loopDDD === ddd && loopNumber === phone) {
                    retPhone = loopPhone;
                    break;
                }
            }
            return retPhone;
        });
    }
    deletePhone(ddd, phone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allPhones = yield this.getAllPhones();
            let deleted = false;
            for (let i = 0; i < allPhones.length; i++) {
                if (allPhones[i].ddd === ddd && allPhones[i].phone === phone) {
                    allPhones.splice(i, 1);
                    deleted = true;
                    break;
                }
            }
            if (deleted) {
                this.savePhones(allPhones);
            }
            return deleted;
        });
    }
    getContactTypes() {
        const arrTypes = [];
        arrTypes.push('Não existe');
        arrTypes.push('Fora de área');
        arrTypes.push('Caixa postal');
        arrTypes.push('Atendeu');
        arrTypes.push('Revisita');
        arrTypes.push('Não Atendeu');
        arrTypes.push('Não quer retorno');
        return arrTypes;
    }
    saveContact(contactInfo, idx = '') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isEdit = idx !== '';
            const dateErr = contactInfo.date === '';
            const typeErr = contactInfo.type === '';
            if (!dateErr && !typeErr) {
                const allPhones = yield this.getAllPhones();
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < allPhones.length; i++) {
                    const dddLoop = allPhones[i].ddd;
                    const phoneLoop = allPhones[i].phone;
                    if (dddLoop === contactInfo.ddd && phoneLoop === contactInfo.phone) {
                        const newInfo = {
                            date: contactInfo.date,
                            type: contactInfo.type,
                            name: contactInfo.name,
                            text: contactInfo.text,
                            publication: contactInfo.publication,
                            anotations: contactInfo.anotations,
                        };
                        if (isEdit) {
                            allPhones[i].content[idx] = newInfo;
                        }
                        else {
                            allPhones[i].content.push(newInfo);
                        }
                        allPhones[i].content.sort((a, b) => {
                            const keyA = a.date;
                            const keyB = b.date;
                            if (keyA > keyB) {
                                return -1;
                            }
                            else {
                                return 1;
                            }
                        });
                        this.savePhones(allPhones);
                        return true;
                    }
                }
            }
            return false;
        });
    }
    addContact(contactInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saveContact(contactInfo);
        });
    }
    editContact(contactInfo, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saveContact(contactInfo, idx);
        });
    }
    getContact(ddd, phone, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const obPhone = yield this.getPhone(ddd, phone);
            if (obPhone !== false) {
                const contact = obPhone.content[idx];
                if (typeof contact !== 'undefined') {
                    return contact;
                }
            }
            return false;
        });
    }
    getLastContactInfo(ddd, phone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const obPhone = yield this.getPhone(ddd, phone);
            if (obPhone !== false) {
                const lastContact = obPhone.content[0];
                if (typeof lastContact !== 'undefined') {
                    return lastContact;
                }
            }
            return false;
        });
    }
    deleteContact(ddd, phone, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allPhones = yield this.getAllPhones();
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < allPhones.length; i++) {
                const dddLoop = allPhones[i].ddd;
                const phoneLoop = allPhones[i].phone;
                if (dddLoop === ddd && phoneLoop === phone) {
                    allPhones[i].content.splice(idx, 1);
                    this.savePhones(allPhones);
                    return true;
                }
            }
            return false;
        });
    }
};
DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ "./src/app/pg-add-phone/pg-add-phone-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pg-add-phone/pg-add-phone-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PgAddPhonePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgAddPhonePageRoutingModule", function() { return PgAddPhonePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pg-add-phone.page */ "./src/app/pg-add-phone/pg-add-phone.page.ts");




const routes = [
    {
        path: '',
        component: _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_3__["PgAddPhonePage"]
    }
];
let PgAddPhonePageRoutingModule = class PgAddPhonePageRoutingModule {
};
PgAddPhonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PgAddPhonePageRoutingModule);



/***/ }),

/***/ "./src/app/pg-add-phone/pg-add-phone.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pg-add-phone/pg-add-phone.module.ts ***!
  \*****************************************************/
/*! exports provided: PgAddPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgAddPhonePageModule", function() { return PgAddPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pg_add_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pg-add-phone-routing.module */ "./src/app/pg-add-phone/pg-add-phone-routing.module.ts");
/* harmony import */ var _pg_add_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pg-add-phone.page */ "./src/app/pg-add-phone/pg-add-phone.page.ts");







let PgAddPhonePageModule = class PgAddPhonePageModule {
};
PgAddPhonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pg_add_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["PgAddPhonePageRoutingModule"]
        ],
        declarations: [_pg_add_phone_page__WEBPACK_IMPORTED_MODULE_6__["PgAddPhonePage"]]
    })
], PgAddPhonePageModule);



/***/ }),

/***/ "./src/app/utils.service.ts":
/*!**********************************!*\
  !*** ./src/app/utils.service.ts ***!
  \**********************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let UtilsService = class UtilsService {
    constructor(loadingCtr, alertCtr, platform) {
        this.loadingCtr = loadingCtr;
        this.alertCtr = alertCtr;
        this.platform = platform;
    }
    getAppVersion() {
        return '1.1.0';
    }
    getLoader(message, spinner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.loadingCtr.create({
                message,
                spinner,
            }).then((res) => {
                res.present();
                const TIME_IN_MS = 5000;
                const hideFooterTimeout = setTimeout(() => {
                    this.closeLoader();
                }, TIME_IN_MS);
            });
        });
    }
    closeLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.loadingCtr.dismiss();
            }
            catch (err) {
                return;
            }
        });
    }
    showAlert(header, subHeader, message, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtr.create({
                header,
                subHeader,
                message,
                buttons,
            });
            return yield alert.present();
        });
    }
    isMobileBrowser() {
        // is this web-browser on mobile device
        return this.platform.is('mobileweb');
    }
};
UtilsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilsService);



/***/ })

}]);
//# sourceMappingURL=pg-add-phone-pg-add-phone-module-es2015.js.map