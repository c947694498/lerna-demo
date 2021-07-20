(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.time = {}));
}(this, (function (exports) { 'use strict';

    var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };

    var time = {
        delay: delay
    };

    exports.time = time;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
