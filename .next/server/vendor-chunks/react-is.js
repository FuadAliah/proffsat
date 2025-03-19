"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-is";
exports.ids = ["vendor-chunks/react-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * @license React\n * react-is.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function typeOf(object) {\n      if (\"object\" === typeof object && null !== object) {\n        var $$typeof = object.$$typeof;\n        switch ($$typeof) {\n          case REACT_ELEMENT_TYPE:\n            switch (((object = object.type), object)) {\n              case REACT_FRAGMENT_TYPE:\n              case REACT_PROFILER_TYPE:\n              case REACT_STRICT_MODE_TYPE:\n              case REACT_SUSPENSE_TYPE:\n              case REACT_SUSPENSE_LIST_TYPE:\n                return object;\n              default:\n                switch (((object = object && object.$$typeof), object)) {\n                  case REACT_CONTEXT_TYPE:\n                  case REACT_FORWARD_REF_TYPE:\n                  case REACT_LAZY_TYPE:\n                  case REACT_MEMO_TYPE:\n                    return object;\n                  case REACT_CONSUMER_TYPE:\n                    return object;\n                  default:\n                    return $$typeof;\n                }\n            }\n          case REACT_PORTAL_TYPE:\n            return $$typeof;\n        }\n      }\n    }\n    var REACT_ELEMENT_TYPE = Symbol.for(\"react.transitional.element\"),\n      REACT_PORTAL_TYPE = Symbol.for(\"react.portal\"),\n      REACT_FRAGMENT_TYPE = Symbol.for(\"react.fragment\"),\n      REACT_STRICT_MODE_TYPE = Symbol.for(\"react.strict_mode\"),\n      REACT_PROFILER_TYPE = Symbol.for(\"react.profiler\");\n    Symbol.for(\"react.provider\");\n    var REACT_CONSUMER_TYPE = Symbol.for(\"react.consumer\"),\n      REACT_CONTEXT_TYPE = Symbol.for(\"react.context\"),\n      REACT_FORWARD_REF_TYPE = Symbol.for(\"react.forward_ref\"),\n      REACT_SUSPENSE_TYPE = Symbol.for(\"react.suspense\"),\n      REACT_SUSPENSE_LIST_TYPE = Symbol.for(\"react.suspense_list\"),\n      REACT_MEMO_TYPE = Symbol.for(\"react.memo\"),\n      REACT_LAZY_TYPE = Symbol.for(\"react.lazy\"),\n      REACT_OFFSCREEN_TYPE = Symbol.for(\"react.offscreen\"),\n      REACT_CLIENT_REFERENCE = Symbol.for(\"react.client.reference\");\n    exports.ContextConsumer = REACT_CONSUMER_TYPE;\n    exports.ContextProvider = REACT_CONTEXT_TYPE;\n    exports.Element = REACT_ELEMENT_TYPE;\n    exports.ForwardRef = REACT_FORWARD_REF_TYPE;\n    exports.Fragment = REACT_FRAGMENT_TYPE;\n    exports.Lazy = REACT_LAZY_TYPE;\n    exports.Memo = REACT_MEMO_TYPE;\n    exports.Portal = REACT_PORTAL_TYPE;\n    exports.Profiler = REACT_PROFILER_TYPE;\n    exports.StrictMode = REACT_STRICT_MODE_TYPE;\n    exports.Suspense = REACT_SUSPENSE_TYPE;\n    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;\n    exports.isContextConsumer = function (object) {\n      return typeOf(object) === REACT_CONSUMER_TYPE;\n    };\n    exports.isContextProvider = function (object) {\n      return typeOf(object) === REACT_CONTEXT_TYPE;\n    };\n    exports.isElement = function (object) {\n      return (\n        \"object\" === typeof object &&\n        null !== object &&\n        object.$$typeof === REACT_ELEMENT_TYPE\n      );\n    };\n    exports.isForwardRef = function (object) {\n      return typeOf(object) === REACT_FORWARD_REF_TYPE;\n    };\n    exports.isFragment = function (object) {\n      return typeOf(object) === REACT_FRAGMENT_TYPE;\n    };\n    exports.isLazy = function (object) {\n      return typeOf(object) === REACT_LAZY_TYPE;\n    };\n    exports.isMemo = function (object) {\n      return typeOf(object) === REACT_MEMO_TYPE;\n    };\n    exports.isPortal = function (object) {\n      return typeOf(object) === REACT_PORTAL_TYPE;\n    };\n    exports.isProfiler = function (object) {\n      return typeOf(object) === REACT_PROFILER_TYPE;\n    };\n    exports.isStrictMode = function (object) {\n      return typeOf(object) === REACT_STRICT_MODE_TYPE;\n    };\n    exports.isSuspense = function (object) {\n      return typeOf(object) === REACT_SUSPENSE_TYPE;\n    };\n    exports.isSuspenseList = function (object) {\n      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;\n    };\n    exports.isValidElementType = function (type) {\n      return \"string\" === typeof type ||\n        \"function\" === typeof type ||\n        type === REACT_FRAGMENT_TYPE ||\n        type === REACT_PROFILER_TYPE ||\n        type === REACT_STRICT_MODE_TYPE ||\n        type === REACT_SUSPENSE_TYPE ||\n        type === REACT_SUSPENSE_LIST_TYPE ||\n        type === REACT_OFFSCREEN_TYPE ||\n        (\"object\" === typeof type &&\n          null !== type &&\n          (type.$$typeof === REACT_LAZY_TYPE ||\n            type.$$typeof === REACT_MEMO_TYPE ||\n            type.$$typeof === REACT_CONTEXT_TYPE ||\n            type.$$typeof === REACT_CONSUMER_TYPE ||\n            type.$$typeof === REACT_FORWARD_REF_TYPE ||\n            type.$$typeof === REACT_CLIENT_REFERENCE ||\n            void 0 !== type.getModuleId))\n        ? !0\n        : !1;\n    };\n    exports.typeOf = typeOf;\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTtBQUNiLEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1QkFBdUI7QUFDM0IsSUFBSSx1QkFBdUI7QUFDM0IsSUFBSSxlQUFlO0FBQ25CLElBQUksa0JBQWtCO0FBQ3RCLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksWUFBWTtBQUNoQixJQUFJLFlBQVk7QUFDaEIsSUFBSSxjQUFjO0FBQ2xCLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksa0JBQWtCO0FBQ3RCLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksb0JBQW9CO0FBQ3hCLElBQUkseUJBQXlCO0FBQzdCO0FBQ0E7QUFDQSxJQUFJLHlCQUF5QjtBQUM3QjtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQkFBb0I7QUFDeEI7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGNBQWM7QUFDbEI7QUFDQTtBQUNBLElBQUksY0FBYztBQUNsQjtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLG9CQUFvQjtBQUN4QjtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxjQUFjO0FBQ2xCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9mc2F0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcz84MmVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2Ygb2JqZWN0ICYmIG51bGwgIT09IG9iamVjdCkge1xuICAgICAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICAgIHN3aXRjaCAoKChvYmplY3QgPSBvYmplY3QudHlwZSksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoKChvYmplY3QgPSBvYmplY3QgJiYgb2JqZWN0LiQkdHlwZW9mKSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05TVU1FUl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QudHJhbnNpdGlvbmFsLmVsZW1lbnRcIiksXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLFxuICAgICAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxcbiAgICAgIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG4gICAgU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xuICAgIHZhciBSRUFDVF9DT05TVU1FUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnN1bWVyXCIpLFxuICAgICAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksXG4gICAgICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLFxuICAgICAgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksXG4gICAgICBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSxcbiAgICAgIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKSxcbiAgICAgIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKTtcbiAgICBleHBvcnRzLkNvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlNVTUVSX1RZUEU7XG4gICAgZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG4gICAgZXhwb3J0cy5FbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG4gICAgZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG4gICAgZXhwb3J0cy5MYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xuICAgIGV4cG9ydHMuTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbiAgICBleHBvcnRzLlBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xuICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgIGV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG4gICAgZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG4gICAgZXhwb3J0cy5TdXNwZW5zZUxpc3QgPSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7XG4gICAgZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OU1VNRVJfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIG9iamVjdCAmJlxuICAgICAgICBudWxsICE9PSBvYmplY3QgJiZcbiAgICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLmlzRm9yd2FyZFJlZiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNGcmFnbWVudCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNMYXp5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG4gICAgfTtcbiAgICBleHBvcnRzLmlzTWVtbyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xuICAgIH07XG4gICAgZXhwb3J0cy5pc1BvcnRhbCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG4gICAgfTtcbiAgICBleHBvcnRzLmlzUHJvZmlsZXIgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gICAgfTtcbiAgICBleHBvcnRzLmlzU3RyaWN0TW9kZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNTdXNwZW5zZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNTdXNwZW5zZUxpc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiBcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZSB8fFxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHxcbiAgICAgICAgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fFxuICAgICAgICB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHxcbiAgICAgICAgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8XG4gICAgICAgIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSAmJlxuICAgICAgICAgIG51bGwgIT09IHR5cGUgJiZcbiAgICAgICAgICAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8XG4gICAgICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHxcbiAgICAgICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OU1VNRVJfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSB8fFxuICAgICAgICAgICAgdm9pZCAwICE9PSB0eXBlLmdldE1vZHVsZUlkKSlcbiAgICAgICAgPyAhMFxuICAgICAgICA6ICExO1xuICAgIH07XG4gICAgZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-is/cjs/react-is.development.js\n");

/***/ })

};
;