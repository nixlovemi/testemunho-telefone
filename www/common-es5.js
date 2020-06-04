function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticDa73c8fdJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPgAddContentPgAddContentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar> <!-- mode=\"ios\" -->\n        <ion-buttons slot=\"start\" (click)=\"close()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/close.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n        <ion-title class=\"toolbar-title\">\n            {{ strTitle }} Registro\n        </ion-title>\n        <ion-buttons slot=\"end\" (click)=\"save()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/ok.svg\" color=\"success\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n    <div class=\"home-header\">\n        <h1 class=\"title\">{{ strTitle }}</h1>\n    </div>\n    <div class=\"container\">\n        <ion-card class=\"card-history\">\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">Data *</ion-label>\n                    <ion-datetime\n                        name=\"mes_base\"\n                        [(ngModel)]=\"frmContent.date\"\n                        display-format=\"DD/MM/YYYY\"\n                        picker-format=\"DD MMMM YYYY\"\n                        month-names=\"Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro\"\n                        (ionCancel)=\"clearInput('date')\"\n                        cancelText=\"Limpar\"\n                        doneText=\"Selecionar\"\n                        class=\"ion-text-start\"\n                    ></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Tipo *</ion-label>\n                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"frmContent.type\"> <!-- popover -->\n                        <ion-select-option *ngFor=\"let type of arrContactTypes\" [value]=\"type\">{{ type }}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Nome</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Texto</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Publicação</ion-label>\n                    <ion-input [(ngModel)]=\"frmContent.publication\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Anotações *</ion-label>\n                    <ion-textarea [(ngModel)]=\"frmContent.notes\" autoGrow=\"true\"></ion-textarea>\n                </ion-item>\n            </ion-card-content>\n\n            <ion-button (click)=\"delete()\" *ngIf=\"type === 'edit'\" color=\"danger\" expand=\"block\" id=\"btn-delete\">\n                <ion-icon slot=\"start\" src=\"assets/trash.svg\"></ion-icon>\n                Deletar Registro\n            </ion-button>\n        </ion-card>\n    </div>\n</ion-content>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPgAddPhonePgAddPhonePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar> <!-- mode=\"ios\" -->\n        <ion-buttons slot=\"start\" (click)=\"close()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/close.svg\" color=\"danger\"></ion-icon>\n        </ion-buttons>\n        <ion-title class=\"toolbar-title\">\n            Adicionar Telefone\n        </ion-title>\n        <ion-buttons slot=\"end\" (click)=\"save()\">\n            <ion-icon class=\"icon-header\" slot=\"icon-only\" src=\"assets/ok.svg\" color=\"success\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n    <div class=\"home-header\">\n        <h1 class=\"title\">Adicionar</h1>\n    </div>\n    <div class=\"container\">\n        <ion-card class=\"card-history\">\n            <ion-card-header>\n                <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentValue\">\n                    <ion-segment-button value=\"single\">\n                        <ion-label>Único</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"multiple\">\n                        <ion-label>Múltiplo</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">DDD</ion-label>\n                    <ion-input inputmode=\"tel\" [(ngModel)]=\"ddd\" maxlength=\"2\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"segmentValue === 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Telefone</ion-label>\n                        <ion-input appMyNumberOnly inputmode=\"tel\" maxlength=\"9\" [(ngModel)]=\"singlePhone\"></ion-input>\n                    </ion-item>\n                </div>\n                <div *ngIf=\"segmentValue !== 'single'\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Início Telefone</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"5\" [(ngModel)]=\"multiplePhone\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (de)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastStart\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Últimos dígitos (até)</ion-label>\n                        <ion-input inputmode=\"tel\" maxlength=\"4\" [(ngModel)]=\"multipleLastEnd\"></ion-input>\n                    </ion-item>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pg-add-content/pg-add-content.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pg-add-content/pg-add-content.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPgAddContentPgAddContentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0 !important;\n}\n\n.card-history {\n  padding: 0 16px 20px 16px;\n}\n\n#btn-delete {\n  font-size: 14px;\n}\n\n#btn-delete ion-icon {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvL05ldEJlYW5zUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWFkZC1jb250ZW50L3BnLWFkZC1jb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGctYWRkLWNvbnRlbnQvcGctYWRkLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREk7RUFDSSxlQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wZy1hZGQtY29udGVudC9wZy1hZGQtY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5jYXJkLWhpc3Rvcnkge1xuICAgIHBhZGRpbmc6IDAgMTZweCAyMHB4IDE2cHg7XG59XG4jYnRuLWRlbGV0ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDAgMTZweCAyMHB4IDE2cHg7XG59XG5cbiNidG4tZGVsZXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuI2J0bi1kZWxldGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pg-add-content/pg-add-content.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pg-add-content/pg-add-content.page.ts ***!
    \*******************************************************/

  /*! exports provided: PgAddContentPage */

  /***/
  function srcAppPgAddContentPgAddContentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddContentPage", function () {
      return PgAddContentPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../database.service */
    "./src/app/database.service.ts");

    var Keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Keyboard;

    var PgAddContentPage =
    /*#__PURE__*/
    // tslint:disable-next-line: component-class-suffix
    function () {
      function PgAddContentPage(modalController, utilsSrv, db, zone) {
        _classCallCheck(this, PgAddContentPage);

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

      _createClass(PgAddContentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var retContact;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.frmContent.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
                    this.strTitle = this.type === 'edit' ? 'Editar' : 'Adicionar';
                    _context3.next = 4;
                    return this.db.getContact(this.ddd, this.phone, this.idx);

                  case 4:
                    retContact = _context3.sent;

                    if (retContact !== false) {
                      this.frmContent.date = retContact.date;
                      this.frmContent.type = retContact.type;
                      this.frmContent.name = retContact.name;
                      this.frmContent.text = retContact.text;
                      this.frmContent.publication = retContact.publication;
                      this.frmContent.notes = retContact.anotations;
                    }

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss({
            reload: false
          });
        }
      }, {
        key: "clearInput",
        value: function clearInput(element) {
          this.frmContent[element] = '';
        }
      }, {
        key: "validateData",
        value: function validateData() {
          var ret = {
            error: false,
            msg: ''
          };

          if (this.frmContent.date === '') {
            ret.error = true;
            ret.msg = 'Informe a data';
          } else if (this.frmContent.type === '') {
            ret.error = true;
            ret.msg = 'Selecione o tipo';
          } else if (this.frmContent.notes.trim().length < 2) {
            ret.error = true;
            ret.msg = 'Insira uma anotação';
          }

          return ret;
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var retValidate, ret, _ret;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    Keyboard.hide();
                    retValidate = this.validateData();

                    if (!retValidate.error) {
                      _context4.next = 6;
                      break;
                    }

                    this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
                    _context4.next = 17;
                    break;

                  case 6:
                    this.contactInfo = {
                      ddd: this.ddd,
                      phone: this.phone,
                      date: this.frmContent.date,
                      type: this.frmContent.type,
                      name: this.frmContent.name,
                      text: this.frmContent.text,
                      publication: this.frmContent.publication,
                      anotations: this.frmContent.notes
                    };

                    if (!(this.type === 'edit')) {
                      _context4.next = 13;
                      break;
                    }

                    _context4.next = 10;
                    return this.db.editContact(this.contactInfo, this.idx);

                  case 10:
                    ret = _context4.sent;
                    _context4.next = 16;
                    break;

                  case 13:
                    _context4.next = 15;
                    return this.db.addContact(this.contactInfo);

                  case 15:
                    _ret = _context4.sent;

                  case 16:
                    setTimeout(function () {
                      _this.modalController.dismiss({
                        reload: true
                      });
                    }, 400);

                  case 17:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse registro? Essa ação não poderá ser desfeita.', [{
                      text: 'Não ...',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler(blah) {}
                    }, {
                      text: 'Sim!',
                      handler: function handler() {
                        _this2.postDelete();
                      }
                    }]);

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "postDelete",
        value: function postDelete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var ret;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.db.deleteContact(this.ddd, this.phone, this.idx);

                  case 2:
                    ret = _context6.sent;

                    if (ret) {
                      this.modalController.dismiss({
                        reload: true
                      });
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return PgAddContentPage;
    }();

    PgAddContentPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
      }, {
        type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PgAddContentPage.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PgAddContentPage.prototype, "ddd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PgAddContentPage.prototype, "phone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PgAddContentPage.prototype, "idx", void 0);
    PgAddContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pg-add-content',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pg-add-content.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-content/pg-add-content.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pg-add-content.page.scss */
      "./src/app/pg-add-content/pg-add-content.page.scss"))["default"]]
    }) // tslint:disable-next-line: component-class-suffix
    ], PgAddContentPage);
    /***/
  },

  /***/
  "./src/app/pg-add-phone/pg-add-phone.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pg-add-phone/pg-add-phone.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPgAddPhonePgAddPhonePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvL05ldEJlYW5zUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWFkZC1waG9uZS9wZy1hZGQtcGhvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wZy1hZGQtcGhvbmUvcGctYWRkLXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wZy1hZGQtcGhvbmUvcGctYWRkLXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pg-add-phone/pg-add-phone.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pg-add-phone/pg-add-phone.page.ts ***!
    \***************************************************/

  /*! exports provided: PgAddPhonePage */

  /***/
  function srcAppPgAddPhonePgAddPhonePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PgAddPhonePage", function () {
      return PgAddPhonePage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../database.service */
    "./src/app/database.service.ts");

    var Keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Keyboard;

    var PgAddPhonePage =
    /*#__PURE__*/
    // tslint:disable-next-line: component-class-suffix
    function () {
      function PgAddPhonePage(modalController, utilsSrv, db) {
        _classCallCheck(this, PgAddPhonePage);

        this.modalController = modalController;
        this.utilsSrv = utilsSrv;
        this.db = db;
        this.segmentValue = 'single';
      }

      _createClass(PgAddPhonePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss({
            reload: false
          });
        }
      }, {
        key: "validateData",
        value: function validateData() {
          var ret = {
            error: false,
            msg: ''
          };
          var vDDD = typeof this.ddd === 'undefined' ? 0 : parseInt(this.ddd, 10);
          var vSinglePhone = typeof this.singlePhone !== 'undefined' ? this.singlePhone : '';
          var vMultiplePhone = typeof this.multiplePhone !== 'undefined' ? this.multiplePhone : '';
          var vMultipleLastStart = typeof this.multipleLastStart !== 'undefined' ? this.multipleLastStart : '';
          var vMultipleLastEnd = typeof this.multipleLastEnd !== 'undefined' ? this.multipleLastEnd : '';

          if (vDDD <= 0 || vDDD > 99) {
            ret.error = true;
            ret.msg = 'Informe o DDD entre 01 e 99';
          } else {
            if (this.segmentValue === 'single') {
              if (vSinglePhone.length !== 9 && vSinglePhone.length !== 8) {
                ret.error = true;
                ret.msg = 'Informe o telefone com 8 ou 9 dígitos';
              }
            } else {
              if (vMultiplePhone.length !== 5 && vMultiplePhone.length !== 4) {
                ret.error = true;
                ret.msg = 'Informe o início do telefone com 4 ou 5 dígitos';
              } else if (vMultipleLastStart.length !== 4 || vMultipleLastEnd.length !== 4) {
                ret.error = true;
                ret.msg = 'Informe os últimos dígitos do telefone com 4 dígitos';
              } else {
                var minPhone = parseInt(this.multipleLastStart, 10);
                var maxPhone = parseInt(this.multipleLastEnd, 10);

                if (minPhone >= maxPhone) {
                  ret.error = true;
                  ret.msg = 'Informe o último número (de:) menor que o último número (para:)';
                } else if (maxPhone - minPhone > 100) {
                  ret.error = true;
                  ret.msg = 'Só é permitido inserir 100 números por vez!';
                }
              }
            }
          }

          return ret;
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            var retValidate, retInsert, minPhone, maxPhone, i, currentI, sPhone, _retInsert;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    Keyboard.hide();
                    retValidate = this.validateData();

                    if (!retValidate.error) {
                      _context7.next = 6;
                      break;
                    }

                    this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
                    _context7.next = 25;
                    break;

                  case 6:
                    if (!(this.segmentValue === 'single')) {
                      _context7.next = 12;
                      break;
                    }

                    _context7.next = 9;
                    return this.db.addPhone(this.ddd.length === 1 ? '0' + this.ddd : this.ddd, this.singlePhone);

                  case 9:
                    retInsert = _context7.sent;
                    _context7.next = 24;
                    break;

                  case 12:
                    minPhone = parseInt(this.multipleLastStart, 10);
                    maxPhone = parseInt(this.multipleLastEnd, 10);
                    i = minPhone;

                  case 15:
                    if (!(i <= maxPhone)) {
                      _context7.next = 24;
                      break;
                    }

                    currentI = i + '';
                    sPhone = currentI.padStart(4, '0');
                    _context7.next = 20;
                    return this.db.addPhone(this.ddd.length === 1 ? '0' + this.ddd : this.ddd, this.multiplePhone + sPhone);

                  case 20:
                    _retInsert = _context7.sent;

                  case 21:
                    i++;
                    _context7.next = 15;
                    break;

                  case 24:
                    setTimeout(function () {
                      _this3.modalController.dismiss({
                        reload: true,
                        newId: 0
                      });
                    }, 400);

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {// console.log(event);
        }
      }]);

      return PgAddPhonePage;
    }();

    PgAddPhonePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }, {
        type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]
      }];
    };

    PgAddPhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pg-add-phone',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pg-add-phone.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pg-add-phone/pg-add-phone.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pg-add-phone.page.scss */
      "./src/app/pg-add-phone/pg-add-phone.page.scss"))["default"]]
    }) // tslint:disable-next-line: component-class-suffix
    ], PgAddPhonePage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map