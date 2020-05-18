(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar mode=\"ios\">\n        <ion-buttons slot=\"start\" (click)=\"close()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/close.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n        <ion-title>\n            Adicionar Telefone\n        </ion-title>\n        <ion-buttons slot=\"end\" (click)=\"save()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/ok.svg\" color=\"success\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n    <div class=\"home-header\">\n        <h1 class=\"title\">Adicionar</h1>\n    </div>\n    <div class=\"container\">\n        <ion-card class=\"card-history\">\n            <ion-card-header>\n                <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentValue\">\n                    <ion-segment-button value=\"single\">\n                        <ion-label>Único</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"multiple\">\n                        <ion-label>Múltiplo</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">DDD</ion-label>\n                    <ion-input inputmode=\"tel\" [(ngModel)]=\"ddd\" maxlength=\"2\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"segmentValue === 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Telefone</ion-label>\n                        <ion-input appMyNumberOnly inputmode=\"tel\" maxlength=\"9\" [(ngModel)]=\"singlePhone\"></ion-input>\n                    </ion-item>\n                </div>\n                <div *ngIf=\"segmentValue !== 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Início Telefone</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"5\" [(ngModel)]=\"multiplePhone\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (de)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastStart\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (até)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastEnd\"></ion-input>\n                    </ion-item>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n  ");

/***/ }),

/***/ "./src/app/pg-add-phone/pg-add-phone.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pg-add-phone/pg-add-phone.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BnLWFkZC1waG9uZS9wZy1hZGQtcGhvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pg-add-phone/pg-add-phone.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pg-add-phone/pg-add-phone.page.ts ***!
  \***************************************************/
/*! exports provided: PgAddPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgAddPhonePage", function() { return PgAddPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");




let PgAddPhonePage = 
// tslint:disable-next-line: component-class-suffix
class PgAddPhonePage {
    constructor(modalController, utilsSrv) {
        this.modalController = modalController;
        this.utilsSrv = utilsSrv;
        this.segmentValue = 'single';
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss({
            reload: false
        });
    }
    validateData() {
        const ret = {
            error: false,
            msg: ''
        };
        const vDDD = (typeof this.ddd === 'undefined') ? 0 : parseInt(this.ddd, 10);
        const vSinglePhone = (typeof this.singlePhone !== 'undefined') ? this.singlePhone : '';
        const vMultiplePhone = (typeof this.multiplePhone !== 'undefined') ? this.multiplePhone : '';
        const vMultipleLastStart = (typeof this.multipleLastStart !== 'undefined') ? this.multipleLastStart : '';
        const vMultipleLastEnd = (typeof this.multipleLastEnd !== 'undefined') ? this.multipleLastEnd : '';
        if (vDDD <= 0 || vDDD > 99) {
            ret.error = true;
            ret.msg = 'Informe o DDD entre 01 e 99';
        }
        else {
            if (this.segmentValue === 'single') {
                if (vSinglePhone.length !== 9 && vSinglePhone.length !== 8) {
                    ret.error = true;
                    ret.msg = 'Informe o telefone com 8 ou 9 dígitos';
                }
            }
            else {
                if (vMultiplePhone.length !== 5 && vMultiplePhone.length !== 4) {
                    ret.error = true;
                    ret.msg = 'Informe o início do telefone com 4 ou 5 dígitos';
                }
                else if (vMultipleLastStart.length !== 4 || vMultipleLastEnd.length !== 4) {
                    ret.error = true;
                    ret.msg = 'Informe os últimos dígitos do telefone com 4 dígitos';
                }
                else {
                    const minPhone = parseInt(this.multipleLastStart, 10);
                    const maxPhone = parseInt(this.multipleLastEnd, 10);
                    if (minPhone >= maxPhone) {
                        ret.error = true;
                        ret.msg = 'Informe o último número (de:) menor que o último número (para:)';
                    }
                }
            }
        }
        return ret;
    }
    save() {
        const retValidate = this.validateData();
        if (retValidate.error) {
            this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
        }
        else {
            const arrPhones = [];
            const phoneItem = {
                ddd: '',
                phone: ''
            };
            phoneItem.ddd = (this.ddd.length === 1) ? '0' + this.ddd : this.ddd;
            if (this.segmentValue === 'single') {
                phoneItem.phone = this.singlePhone;
                arrPhones.push(phoneItem);
            }
            else {
            }
            console.log(arrPhones);
            this.modalController.dismiss({
                reload: true,
                newId: 0
            });
        }
    }
    segmentChanged(event) {
        // console.log(event);
    }
};
PgAddPhonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
PgAddPhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pg-add-phone',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pg-add-phone.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pg-add-phone.page.scss */ "./src/app/pg-add-phone/pg-add-phone.page.scss")).default]
    })
    // tslint:disable-next-line: component-class-suffix
], PgAddPhonePage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let UtilsService = class UtilsService {
    constructor(loadingCtr, alertCtr, platform) {
        this.loadingCtr = loadingCtr;
        this.alertCtr = alertCtr;
        this.platform = platform;
    }
    getAppVersion() {
        return '1.0.0';
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
//# sourceMappingURL=common-es2015.js.map