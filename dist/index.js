(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define([], factory);
    else {
        var a = factory();
        for(var i in a)('object' == typeof exports ? exports : root)[i] = a[i];
    }
})(globalThis, ()=>(()=>{
        "use strict";
        // The require scope
        var __webpack_require__ = {};
        /************************************************************************/ // webpack/runtime/make_namespace_object
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
        return __webpack_exports__;
    })());
