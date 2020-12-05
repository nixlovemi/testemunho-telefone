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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar> <!-- mode=\"ios\" -->\n        <ion-buttons slot=\"start\" (click)=\"close()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/close.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n        <ion-title class=\"toolbar-title\">\n            {{ strTitle }} Registro\n        </ion-title>\n        <ion-buttons slot=\"end\" (click)=\"save()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/ok.svg\" color=\"success\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n    <div class=\"home-header\">\n        <h1 class=\"title\">{{ strTitle }}</h1>\n    </div>\n    <div class=\"container\">\n        <ion-card class=\"card-history\">\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">Data *</ion-label>\n                    <ion-datetime\n                        name=\"mes_base\"\n                        [(ngModel)]=\"frmContent.date\"\n                        display-format=\"DD/MM/YYYY\"\n                        picker-format=\"DD MMMM YYYY\"\n                        month-names=\"Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro\"\n                        (ionCancel)=\"clearInput('date')\"\n                        cancelText=\"Limpar\"\n                        doneText=\"Selecionar\"\n                        class=\"ion-text-start\"\n                    ></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Tipo *</ion-label>\n                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"frmContent.type\"> <!-- popover -->\n                        <ion-select-option *ngFor=\"let type of arrContactTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Nome</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Texto</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Publicação</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.publication\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Anotações *</ion-label>\n                    <ion-textarea [(ngModel)]=\"frmContent.notes\" autoGrow=\"true\"></ion-textarea>\n                </ion-item>\n            </ion-card-content>\n\n            <ion-button (click)=\"delete()\" *ngIf=\"type === 'edit'\" color=\"danger\" expand=\"block\" id=\"btn-delete\">\n                <ion-icon slot=\"start\" src=\"assets/trash.svg\"></ion-icon>\n                Deletar Registro\n            </ion-button>\n        </ion-card>\n    </div>\n</ion-content>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar> <!-- mode=\"ios\" -->\n        <ion-buttons slot=\"start\" (click)=\"close()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/close.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n        <ion-title class=\"toolbar-title\">\n            Adicionar Telefone\n        </ion-title>\n        <ion-buttons slot=\"end\" (click)=\"save()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/ok.svg\" color=\"success\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n    <div class=\"home-header\">\n        <h1 class=\"title\">Adicionar</h1>\n    </div>\n    <div class=\"container\">\n        <ion-card class=\"card-history\">\n            <ion-card-header>\n                <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentValue\">\n                    <ion-segment-button value=\"single\">\n                        <ion-label>Único</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"multiple\">\n                        <ion-label>Múltiplo</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">DDD</ion-label>\n                    <ion-input inputmode=\"tel\" [(ngModel)]=\"ddd\" maxlength=\"2\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"segmentValue === 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Telefone</ion-label>\n                        <ion-input appMyNumberOnly inputmode=\"tel\" maxlength=\"9\" [(ngModel)]=\"singlePhone\"></ion-input>\n                    </ion-item>\n                </div>\n                <div *ngIf=\"segmentValue !== 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Início Telefone</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"5\" [(ngModel)]=\"multiplePhone\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (de)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastStart\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (até)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastEnd\"></ion-input>\n                    </ion-item>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n  ");

/***/ }),

/***/ "./src/app/pg-add-content/pg-add-content.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pg-add-content/pg-add-content.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0 !important;\n}\n\n.card-history {\n  padding: 0 16px 20px 16px;\n}\n\n#btn-delete {\n  font-size: 14px;\n}\n\n#btn-delete ion-icon {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvRG9jdW1lbnRzL1Byb2plY3RzL3Rlc3RlbXVuaG8tdGVsZWZvbmUvc3JjL2FwcC9wZy1hZGQtY29udGVudC9wZy1hZGQtY29udGVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BnLWFkZC1jb250ZW50L3BnLWFkZC1jb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERJO0VBQ0ksZUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGctYWRkLWNvbnRlbnQvcGctYWRkLWNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1oaXN0b3J5IHtcbiAgICBwYWRkaW5nOiAwIDE2cHggMjBweCAxNnB4O1xufVxuI2J0bi1kZWxldGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhpc3Rvcnkge1xuICBwYWRkaW5nOiAwIDE2cHggMjBweCAxNnB4O1xufVxuXG4jYnRuLWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNidG4tZGVsZXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pg-add-content/pg-add-content.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pg-add-content/pg-add-content.page.ts ***!
  \*******************************************************/
/*! exports provided: PgAddContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgAddContentPage", function() { return PgAddContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../database.service */ "./src/app/database.service.ts");




const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];



let PgAddContentPage = 
// tslint:disable-next-line: component-class-suffix
class PgAddContentPage {
    constructor(modalController, utilsSrv, db, zone) {
        this.modalController = modalController;
        this.utilsSrv = utilsSrv;
        this.db = db;
        this.zone = zone;
        this.strTitle = '';
        this.arrContactTypes = [];
        this.frmContent = {
            date: '',
            type: '',
            name: '',
            text: '',
            publication: '',
            notes: ''
        };
        this.arrContactTypes = db.getContactTypes();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.frmContent.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
            this.strTitle = (this.type === 'edit') ? 'Editar' : 'Adicionar';
            const retContact = yield this.db.getContact(this.ddd, this.phone, this.idx);
            if (retContact !== false) {
                this.frmContent.date = retContact.date;
                this.frmContent.type = retContact.type;
                this.frmContent.name = retContact.name;
                this.frmContent.text = retContact.text;
                this.frmContent.publication = retContact.publication;
                this.frmContent.notes = retContact.anotations;
            }
        });
    }
    close() {
        this.modalController.dismiss({
            reload: false
        });
    }
    clearInput(element) {
        this.frmContent[element] = '';
    }
    validateData() {
        const ret = {
            error: false,
            msg: ''
        };
        if (this.frmContent.date === '') {
            ret.error = true;
            ret.msg = 'Informe a data';
        }
        else if (this.frmContent.type === '') {
            ret.error = true;
            ret.msg = 'Selecione o tipo';
        }
        else if (this.frmContent.notes.trim().length < 2) {
            ret.error = true;
            ret.msg = 'Insira uma anotação';
        }
        return ret;
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Keyboard.hide();
            const retValidate = this.validateData();
            if (retValidate.error) {
                this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
            }
            else {
                this.contactInfo = {
                    ddd: this.ddd,
                    phone: this.phone,
                    date: this.frmContent.date,
                    type: this.frmContent.type,
                    name: this.frmContent.name,
                    text: this.frmContent.text,
                    publication: this.frmContent.publication,
                    anotations: this.frmContent.notes,
                };
                if (this.type === 'edit') {
                    const ret = yield this.db.editContact(this.contactInfo, this.idx);
                }
                else {
                    const ret = yield this.db.addContact(this.contactInfo);
                }
                setTimeout(() => {
                    this.modalController.dismiss({
                        reload: true,
                    });
                }, 400);
            }
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse registro? Essa ação não poderá ser desfeita.', [
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
        });
    }
    postDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield this.db.deleteContact(this.ddd, this.phone, this.idx);
            if (ret) {
                this.modalController.dismiss({
                    reload: true,
                });
            }
        });
    }
};
PgAddContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PgAddContentPage.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PgAddContentPage.prototype, "ddd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PgAddContentPage.prototype, "phone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PgAddContentPage.prototype, "idx", void 0);
PgAddContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pg-add-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pg-add-content.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pg-add-content.page.scss */ "./src/app/pg-add-content/pg-add-content.page.scss")).default]
    })
    // tslint:disable-next-line: component-class-suffix
], PgAddContentPage);



/***/ }),

/***/ "./src/app/pg-add-phone/pg-add-phone.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pg-add-phone/pg-add-phone.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvRG9jdW1lbnRzL1Byb2plY3RzL3Rlc3RlbXVuaG8tdGVsZWZvbmUvc3JjL2FwcC9wZy1hZGQtcGhvbmUvcGctYWRkLXBob25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGctYWRkLXBob25lL3BnLWFkZC1waG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGctYWRkLXBob25lL3BnLWFkZC1waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59Il19 */");

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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../database.service */ "./src/app/database.service.ts");




const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];


let PgAddPhonePage = 
// tslint:disable-next-line: component-class-suffix
class PgAddPhonePage {
    constructor(modalController, utilsSrv, db) {
        this.modalController = modalController;
        this.utilsSrv = utilsSrv;
        this.db = db;
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
                    else if (maxPhone - minPhone > 100) {
                        ret.error = true;
                        ret.msg = 'Só é permitido inserir 100 números por vez!';
                    }
                }
            }
        }
        return ret;
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Keyboard.hide();
            const retValidate = this.validateData();
            if (retValidate.error) {
                this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
            }
            else {
                if (this.segmentValue === 'single') {
                    const retInsert = yield this.db.addPhone((this.ddd.length === 1) ? '0' + this.ddd : this.ddd, this.singlePhone);
                }
                else {
                    const minPhone = parseInt(this.multipleLastStart, 10);
                    const maxPhone = parseInt(this.multipleLastEnd, 10);
                    for (let i = minPhone; i <= maxPhone; i++) {
                        const currentI = i + '';
                        const sPhone = currentI.padStart(4, '0');
                        const retInsert = yield this.db.addPhone((this.ddd.length === 1) ? '0' + this.ddd : this.ddd, this.multiplePhone + sPhone);
                    }
                }
                setTimeout(() => {
                    this.modalController.dismiss({
                        reload: true,
                        newId: 0
                    });
                }, 400);
            }
        });
    }
    segmentChanged(event) {
        // console.log(event);
    }
};
PgAddPhonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }
];
PgAddPhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pg-add-phone',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pg-add-phone.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pg-add-phone.page.scss */ "./src/app/pg-add-phone/pg-add-phone.page.scss")).default]
    })
    // tslint:disable-next-line: component-class-suffix
], PgAddPhonePage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map