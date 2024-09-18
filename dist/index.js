(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory(require("./testFile.js"));
    else if ('function' == typeof define && define.amd) define([
        "./testFile.js"
    ], factory);
    else {
        var a = 'object' == typeof exports ? factory(require("./testFile.js")) : factory(root["./testFile.js"]);
        for(var i in a)('object' == typeof exports ? exports : root)[i] = a[i];
    }
})(globalThis, (__WEBPACK_EXTERNAL_MODULE__testFile__)=>(()=>{
        "use strict";
        var __webpack_modules__ = {
            "./testFile": function(module1) {
                module1.exports = __WEBPACK_EXTERNAL_MODULE__testFile__;
            }
        };
        /************************************************************************/ // The module cache
        var __webpack_module_cache__ = {};
        // The require function
        function __webpack_require__(moduleId) {
            // Check if module is in cache
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            // Create a new module (and put it into the cache)
            var module1 = __webpack_module_cache__[moduleId] = {
                exports: {}
            };
            // Execute the module function
            __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            // Return the exports of the module
            return module1.exports;
        }
        /************************************************************************/ // webpack/runtime/compat_get_default_export
        (()=>{
            // getDefaultExport function for compatibility with non-harmony modules
            __webpack_require__.n = function(module1) {
                var getter = module1 && module1.__esModule ? function() {
                    return module1['default'];
                } : function() {
                    return module1;
                };
                __webpack_require__.d(getter, {
                    a: getter
                });
                return getter;
            };
        })();
        // webpack/runtime/define_property_getters
        (()=>{
            __webpack_require__.d = function(exports1, definition) {
                for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
                    enumerable: true,
                    get: definition[key]
                });
            };
        })();
        // webpack/runtime/has_own_property
        (()=>{
            __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        })();
        // webpack/runtime/make_namespace_object
        (()=>{
            // define __esModule on exports
            __webpack_require__.r = function(exports1) {
                if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
                    value: 'Module'
                });
                Object.defineProperty(exports1, '__esModule', {
                    value: true
                });
            };
        })();
        /************************************************************************/ var __webpack_exports__ = {};
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            add: function() {
                return add;
            }
        });
        /* harmony import */ var _testFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./testFile");
        /* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
        /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _testFile__WEBPACK_IMPORTED_MODULE_0__)if ([
            "add",
            "default"
        ].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
            return _testFile__WEBPACK_IMPORTED_MODULE_0__[key];
        }).bind(0, __WEBPACK_IMPORT_KEY__);
        /* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
        function add(a, b) {
            return Number(a) + b;
        }
        return __webpack_exports__;
    })());
