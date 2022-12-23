function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'pg-details/:ddd/:phone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pg-details-pg-details-module */
        "pg-details-pg-details-module").then(__webpack_require__.bind(null,
        /*! ./pg-details/pg-details.module */
        "./src/app/pg-details/pg-details.module.ts")).then(function (m) {
          return m.PgDetailsPageModule;
        });
      }
    }, {
      path: 'pg-add-phone',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pg-add-phone/pg-add-phone.module */
        "./src/app/pg-add-phone/pg-add-phone.module.ts")).then(function (m) {
          return m.PgAddPhonePageModule;
        });
      }
    }, {
      path: 'pg-add-content',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pg-add-content/pg-add-content.module */
        "./src/app/pg-add-content/pg-add-content.module.ts")).then(function (m) {
          return m.PgAddContentPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var StatusBar = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].StatusBar;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            StatusBar.setStyle({
              style: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["StatusBarStyle"].Light
            });
            StatusBar.setOverlaysWebView({
              overlay: false
            });

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pg_add_phone_pg_add_phone_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pg-add-phone/pg-add-phone.module */
    "./src/app/pg-add-phone/pg-add-phone.module.ts");
    /* harmony import */


    var _pg_add_content_pg_add_content_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pg-add-content/pg-add-content.module */
    "./src/app/pg-add-content/pg-add-content.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _pg_add_phone_pg_add_phone_module__WEBPACK_IMPORTED_MODULE_10__["PgAddPhonePageModule"], _pg_add_content_pg_add_content_module__WEBPACK_IMPORTED_MODULE_11__["PgAddContentPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/database.service.ts":
  /*!*************************************!*\
    !*** ./src/app/database.service.ts ***!
    \*************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var DatabaseService = /*#__PURE__*/function () {
      function DatabaseService() {
        _classCallCheck(this, DatabaseService);

        this.keyPhones = 'phones';
        this.allPhones = null;
      }

      _createClass(DatabaseService, [{
        key: "getAllPhones",
        value: function getAllPhones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var arrPhone, retPhones, dbPhone;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.allPhones) {
                      _context.next = 4;
                      break;
                    }

                    arrPhone = this.allPhones;
                    _context.next = 10;
                    break;

                  case 4:
                    _context.next = 6;
                    return Storage.get({
                      key: this.keyPhones
                    });

                  case 6:
                    retPhones = _context.sent;
                    dbPhone = typeof retPhones.value !== 'undefined' && retPhones.value !== null ? retPhones.value : '[]';
                    arrPhone = JSON.parse(dbPhone);
                    this.allPhones = arrPhone;

                  case 10:
                    arrPhone.sort(function (a, b) {
                      var keyA = a.ddd + a.phone;
                      var keyB = b.ddd + b.phone;

                      if (keyA < keyB) {
                        return -1;
                      } else {
                        return 1;
                      }
                    });
                    return _context.abrupt("return", arrPhone);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "savePhones",
        value: function savePhones(allPhones) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    Storage.set({
                      key: this.keyPhones,
                      value: JSON.stringify(allPhones)
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addPhone",
        value: function addPhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var allPhones, checkPhone;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context3.sent;
                    _context3.next = 5;
                    return this.getPhone(ddd, phone);

                  case 5:
                    checkPhone = _context3.sent;

                    if (!(checkPhone == null)) {
                      _context3.next = 12;
                      break;
                    }

                    allPhones.push({
                      ddd: ddd,
                      phone: phone,
                      content: []
                    });
                    this.savePhones(allPhones);
                    return _context3.abrupt("return", true);

                  case 12:
                    return _context3.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getPhone",
        value: function getPhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var retPhone, arrPhones, _iterator, _step, loopPhone, loopDDD, loopNumber;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    retPhone = null;
                    _context4.next = 3;
                    return this.getAllPhones();

                  case 3:
                    arrPhones = _context4.sent;
                    _iterator = _createForOfIteratorHelper(arrPhones);
                    _context4.prev = 5;

                    _iterator.s();

                  case 7:
                    if ((_step = _iterator.n()).done) {
                      _context4.next = 16;
                      break;
                    }

                    loopPhone = _step.value;
                    loopDDD = loopPhone.ddd;
                    loopNumber = loopPhone.phone;

                    if (!(loopDDD === ddd && loopNumber === phone)) {
                      _context4.next = 14;
                      break;
                    }

                    retPhone = loopPhone;
                    return _context4.abrupt("break", 16);

                  case 14:
                    _context4.next = 7;
                    break;

                  case 16:
                    _context4.next = 21;
                    break;

                  case 18:
                    _context4.prev = 18;
                    _context4.t0 = _context4["catch"](5);

                    _iterator.e(_context4.t0);

                  case 21:
                    _context4.prev = 21;

                    _iterator.f();

                    return _context4.finish(21);

                  case 24:
                    return _context4.abrupt("return", retPhone);

                  case 25:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[5, 18, 21, 24]]);
          }));
        }
      }, {
        key: "deletePhone",
        value: function deletePhone(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var allPhones, deleted, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context5.sent;
                    deleted = false;
                    i = 0;

                  case 5:
                    if (!(i < allPhones.length)) {
                      _context5.next = 13;
                      break;
                    }

                    if (!(allPhones[i].ddd === ddd && allPhones[i].phone === phone)) {
                      _context5.next = 10;
                      break;
                    }

                    allPhones.splice(i, 1);
                    deleted = true;
                    return _context5.abrupt("break", 13);

                  case 10:
                    i++;
                    _context5.next = 5;
                    break;

                  case 13:
                    if (deleted) {
                      this.savePhones(allPhones);
                    }

                    return _context5.abrupt("return", deleted);

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getContactTypes",
        value: function getContactTypes() {
          var arrTypes = [];
          arrTypes.push('Não existe');
          arrTypes.push('Fora de área');
          arrTypes.push('Caixa postal');
          arrTypes.push('Atendeu');
          arrTypes.push('Revisita');
          arrTypes.push('Não Atendeu');
          arrTypes.push('Não quer retorno');
          return arrTypes;
        }
      }, {
        key: "saveContact",
        value: function saveContact(contactInfo) {
          var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var isEdit, dateErr, typeErr, allPhones, i, dddLoop, phoneLoop, newInfo;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    isEdit = idx !== '';
                    dateErr = contactInfo.date === '';
                    typeErr = contactInfo.type === '';

                    if (!(!dateErr && !typeErr)) {
                      _context6.next = 20;
                      break;
                    }

                    _context6.next = 6;
                    return this.getAllPhones();

                  case 6:
                    allPhones = _context6.sent;
                    i = 0;

                  case 8:
                    if (!(i < allPhones.length)) {
                      _context6.next = 20;
                      break;
                    }

                    dddLoop = allPhones[i].ddd;
                    phoneLoop = allPhones[i].phone;

                    if (!(dddLoop === contactInfo.ddd && phoneLoop === contactInfo.phone)) {
                      _context6.next = 17;
                      break;
                    }

                    newInfo = {
                      date: contactInfo.date,
                      type: contactInfo.type,
                      name: contactInfo.name,
                      text: contactInfo.text,
                      publication: contactInfo.publication,
                      anotations: contactInfo.anotations
                    };

                    if (isEdit) {
                      allPhones[i].content[idx] = newInfo;
                    } else {
                      allPhones[i].content.push(newInfo);
                    }

                    allPhones[i].content.sort(function (a, b) {
                      var keyA = a.date;
                      var keyB = b.date;

                      if (keyA > keyB) {
                        return -1;
                      } else {
                        return 1;
                      }
                    });
                    this.savePhones(allPhones);
                    return _context6.abrupt("return", true);

                  case 17:
                    i++;
                    _context6.next = 8;
                    break;

                  case 20:
                    return _context6.abrupt("return", false);

                  case 21:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "addContact",
        value: function addContact(contactInfo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.saveContact(contactInfo);

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "editContact",
        value: function editContact(contactInfo, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.saveContact(contactInfo, idx);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getContact",
        value: function getContact(ddd, phone, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var obPhone, contact;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.getPhone(ddd, phone);

                  case 2:
                    obPhone = _context9.sent;

                    if (!(obPhone !== false)) {
                      _context9.next = 7;
                      break;
                    }

                    contact = obPhone.content[idx];

                    if (!(typeof contact !== 'undefined')) {
                      _context9.next = 7;
                      break;
                    }

                    return _context9.abrupt("return", contact);

                  case 7:
                    return _context9.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getLastContactInfo",
        value: function getLastContactInfo(ddd, phone) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var obPhone, lastContact;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.getPhone(ddd, phone);

                  case 2:
                    obPhone = _context10.sent;

                    if (!(obPhone !== false)) {
                      _context10.next = 7;
                      break;
                    }

                    lastContact = obPhone.content[0];

                    if (!(typeof lastContact !== 'undefined')) {
                      _context10.next = 7;
                      break;
                    }

                    return _context10.abrupt("return", lastContact);

                  case 7:
                    return _context10.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(ddd, phone, idx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var allPhones, i, dddLoop, phoneLoop;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.getAllPhones();

                  case 2:
                    allPhones = _context11.sent;
                    i = 0;

                  case 4:
                    if (!(i < allPhones.length)) {
                      _context11.next = 14;
                      break;
                    }

                    dddLoop = allPhones[i].ddd;
                    phoneLoop = allPhones[i].phone;

                    if (!(dddLoop === ddd && phoneLoop === phone)) {
                      _context11.next = 11;
                      break;
                    }

                    allPhones[i].content.splice(idx, 1);
                    this.savePhones(allPhones);
                    return _context11.abrupt("return", true);

                  case 11:
                    i++;
                    _context11.next = 4;
                    break;

                  case 14:
                    return _context11.abrupt("return", false);

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatabaseService);
    /***/
  },

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


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0 !important;\n}\n\n.card-history {\n  padding: 0 16px 20px 16px;\n}\n\n#btn-delete {\n  font-size: 14px;\n}\n\n#btn-delete ion-icon {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWFkZC1jb250ZW50L3BnLWFkZC1jb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGctYWRkLWNvbnRlbnQvcGctYWRkLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREk7RUFDSSxlQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wZy1hZGQtY29udGVudC9wZy1hZGQtY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5jYXJkLWhpc3Rvcnkge1xuICAgIHBhZGRpbmc6IDAgMTZweCAyMHB4IDE2cHg7XG59XG4jYnRuLWRlbGV0ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDAgMTZweCAyMHB4IDE2cHg7XG59XG5cbiNidG4tZGVsZXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuI2J0bi1kZWxldGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var retContact;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.frmContent.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
                    this.strTitle = this.type === 'edit' ? 'Editar' : 'Adicionar';
                    _context12.next = 4;
                    return this.db.getContact(this.ddd, this.phone, this.idx);

                  case 4:
                    retContact = _context12.sent;

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
                    return _context12.stop();
                }
              }
            }, _callee12, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this2 = this;

            var retValidate, ret, _ret;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    Keyboard.hide();
                    retValidate = this.validateData();

                    if (!retValidate.error) {
                      _context13.next = 6;
                      break;
                    }

                    this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
                    _context13.next = 17;
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
                      _context13.next = 13;
                      break;
                    }

                    _context13.next = 10;
                    return this.db.editContact(this.contactInfo, this.idx);

                  case 10:
                    ret = _context13.sent;
                    _context13.next = 16;
                    break;

                  case 13:
                    _context13.next = 15;
                    return this.db.addContact(this.contactInfo);

                  case 15:
                    _ret = _context13.sent;

                  case 16:
                    setTimeout(function () {
                      _this2.modalController.dismiss({
                        reload: true
                      });
                    }, 400);

                  case 17:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse registro? Essa ação não poderá ser desfeita.', [{
                      text: 'Não ...',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler(blah) {}
                    }, {
                      text: 'Sim!',
                      handler: function handler() {
                        _this3.postDelete();
                      }
                    }]);

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "postDelete",
        value: function postDelete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var ret;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.db.deleteContact(this.ddd, this.phone, this.idx);

                  case 2:
                    ret = _context15.sent;

                    if (ret) {
                      this.modalController.dismiss({
                        reload: true
                      });
                    }

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWFuZHJvcGFycmEvUHJvamVjdHMvdGVzdGVtdW5oby10ZWxlZm9uZS9zcmMvYXBwL3BnLWFkZC1waG9uZS9wZy1hZGQtcGhvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wZy1hZGQtcGhvbmUvcGctYWRkLXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wZy1hZGQtcGhvbmUvcGctYWRkLXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this4 = this;

            var retValidate, retInsert, minPhone, maxPhone, i, currentI, sPhone, _retInsert;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    Keyboard.hide();
                    retValidate = this.validateData();

                    if (!retValidate.error) {
                      _context16.next = 6;
                      break;
                    }

                    this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
                    _context16.next = 25;
                    break;

                  case 6:
                    if (!(this.segmentValue === 'single')) {
                      _context16.next = 12;
                      break;
                    }

                    _context16.next = 9;
                    return this.db.addPhone(this.ddd.length === 1 ? '0' + this.ddd : this.ddd, this.singlePhone);

                  case 9:
                    retInsert = _context16.sent;
                    _context16.next = 24;
                    break;

                  case 12:
                    minPhone = parseInt(this.multipleLastStart, 10);
                    maxPhone = parseInt(this.multipleLastEnd, 10);
                    i = minPhone;

                  case 15:
                    if (!(i <= maxPhone)) {
                      _context16.next = 24;
                      break;
                    }

                    currentI = i + '';
                    sPhone = currentI.padStart(4, '0');
                    _context16.next = 20;
                    return this.db.addPhone(this.ddd.length === 1 ? '0' + this.ddd : this.ddd, this.multiplePhone + sPhone);

                  case 20:
                    _retInsert = _context16.sent;

                  case 21:
                    i++;
                    _context16.next = 15;
                    break;

                  case 24:
                    setTimeout(function () {
                      _this4.modalController.dismiss({
                        reload: true,
                        newId: 0
                      });
                    }, 400);

                  case 25:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
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
  },

  /***/
  "./src/app/utils.service.ts":
  /*!**********************************!*\
    !*** ./src/app/utils.service.ts ***!
    \**********************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
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

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService(loadingCtr, alertCtr, platform) {
        _classCallCheck(this, UtilsService);

        this.loadingCtr = loadingCtr;
        this.alertCtr = alertCtr;
        this.platform = platform;
      }

      _createClass(UtilsService, [{
        key: "getAppVersion",
        value: function getAppVersion() {
          return '1.1.0';
        }
      }, {
        key: "getLoader",
        value: function getLoader(message, spinner) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.loadingCtr.create({
                      message: message,
                      spinner: spinner
                    }).then(function (res) {
                      res.present();
                      var TIME_IN_MS = 5000;
                      var hideFooterTimeout = setTimeout(function () {
                        _this5.closeLoader();
                      }, TIME_IN_MS);
                    });

                  case 2:
                    return _context17.abrupt("return", _context17.sent);

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "closeLoader",
        value: function closeLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.prev = 0;
                    _context18.next = 3;
                    return this.loadingCtr.dismiss();

                  case 3:
                    return _context18.abrupt("return", _context18.sent);

                  case 6:
                    _context18.prev = 6;
                    _context18.t0 = _context18["catch"](0);
                    return _context18.abrupt("return");

                  case 9:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this, [[0, 6]]);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert(header, subHeader, message, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var alert;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.alertCtr.create({
                      header: header,
                      subHeader: subHeader,
                      message: message,
                      buttons: buttons
                    });

                  case 2:
                    alert = _context19.sent;
                    _context19.next = 5;
                    return alert.present();

                  case 5:
                    return _context19.abrupt("return", _context19.sent);

                  case 6:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "isMobileBrowser",
        value: function isMobileBrowser() {
          // is this web-browser on mobile device
          return this.platform.is('mobileweb');
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/leandroparra/Projects/testemunho-telefone/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map