"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-shim.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function is(x, y) {\n      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);\n    }\n    function useSyncExternalStore$2(subscribe, getSnapshot) {\n      didWarnOld18Alpha ||\n        void 0 === React.startTransition ||\n        ((didWarnOld18Alpha = !0),\n        console.error(\n          \"You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.\"\n        ));\n      var value = getSnapshot();\n      if (!didWarnUncachedGetSnapshot) {\n        var cachedValue = getSnapshot();\n        objectIs(value, cachedValue) ||\n          (console.error(\n            \"The result of getSnapshot should be cached to avoid an infinite loop\"\n          ),\n          (didWarnUncachedGetSnapshot = !0));\n      }\n      cachedValue = useState({\n        inst: { value: value, getSnapshot: getSnapshot }\n      });\n      var inst = cachedValue[0].inst,\n        forceUpdate = cachedValue[1];\n      useLayoutEffect(\n        function () {\n          inst.value = value;\n          inst.getSnapshot = getSnapshot;\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n        },\n        [subscribe, value, getSnapshot]\n      );\n      useEffect(\n        function () {\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          return subscribe(function () {\n            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          });\n        },\n        [subscribe]\n      );\n      useDebugValue(value);\n      return value;\n    }\n    function checkIfSnapshotChanged(inst) {\n      var latestGetSnapshot = inst.getSnapshot;\n      inst = inst.value;\n      try {\n        var nextValue = latestGetSnapshot();\n        return !objectIs(inst, nextValue);\n      } catch (error) {\n        return !0;\n      }\n    }\n    function useSyncExternalStore$1(subscribe, getSnapshot) {\n      return getSnapshot();\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),\n      objectIs = \"function\" === typeof Object.is ? Object.is : is,\n      useState = React.useState,\n      useEffect = React.useEffect,\n      useLayoutEffect = React.useLayoutEffect,\n      useDebugValue = React.useDebugValue,\n      didWarnOld18Alpha = !1,\n      didWarnUncachedGetSnapshot = !1,\n      shim =\n        \"undefined\" === typeof window ||\n        \"undefined\" === typeof window.document ||\n        \"undefined\" === typeof window.document.createElement\n          ? useSyncExternalStore$1\n          : useSyncExternalStore$2;\n    exports.useSyncExternalStore =\n      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2IsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdHQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9mc2F0Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzP2FhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgICByZXR1cm4gKHggPT09IHkgJiYgKDAgIT09IHggfHwgMSAvIHggPT09IDEgLyB5KSkgfHwgKHggIT09IHggJiYgeSAhPT0geSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDIoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCkge1xuICAgICAgZGlkV2Fybk9sZDE4QWxwaGEgfHxcbiAgICAgICAgdm9pZCAwID09PSBSZWFjdC5zdGFydFRyYW5zaXRpb24gfHxcbiAgICAgICAgKChkaWRXYXJuT2xkMThBbHBoYSA9ICEwKSxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIllvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgZG9lcyBub3Qgc3VwcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZS4gVGhlIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgdG8gYSBuZXdlciBwcmUtcmVsZWFzZS5cIlxuICAgICAgICApKTtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG4gICAgICBpZiAoIWRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90KSB7XG4gICAgICAgIHZhciBjYWNoZWRWYWx1ZSA9IGdldFNuYXBzaG90KCk7XG4gICAgICAgIG9iamVjdElzKHZhbHVlLCBjYWNoZWRWYWx1ZSkgfHxcbiAgICAgICAgICAoY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiVGhlIHJlc3VsdCBvZiBnZXRTbmFwc2hvdCBzaG91bGQgYmUgY2FjaGVkIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3BcIlxuICAgICAgICAgICksXG4gICAgICAgICAgKGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gITApKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlZFZhbHVlID0gdXNlU3RhdGUoe1xuICAgICAgICBpbnN0OiB7IHZhbHVlOiB2YWx1ZSwgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90IH1cbiAgICAgIH0pO1xuICAgICAgdmFyIGluc3QgPSBjYWNoZWRWYWx1ZVswXS5pbnN0LFxuICAgICAgICBmb3JjZVVwZGF0ZSA9IGNhY2hlZFZhbHVlWzFdO1xuICAgICAgdXNlTGF5b3V0RWZmZWN0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGluc3QuZ2V0U25hcHNob3QgPSBnZXRTbmFwc2hvdDtcbiAgICAgICAgICBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpICYmIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkgJiYgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSAmJiBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzdWJzY3JpYmVdXG4gICAgICApO1xuICAgICAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICAgICAgdmFyIGxhdGVzdEdldFNuYXBzaG90ID0gaW5zdC5nZXRTbmFwc2hvdDtcbiAgICAgIGluc3QgPSBpbnN0LnZhbHVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGxhdGVzdEdldFNuYXBzaG90KCk7XG4gICAgICAgIHJldHVybiAhb2JqZWN0SXMoaW5zdCwgbmV4dFZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90KSB7XG4gICAgICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBvYmplY3RJcyA9IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IGlzLFxuICAgICAgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSxcbiAgICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICAgIHVzZUxheW91dEVmZmVjdCA9IFJlYWN0LnVzZUxheW91dEVmZmVjdCxcbiAgICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlLFxuICAgICAgZGlkV2Fybk9sZDE4QWxwaGEgPSAhMSxcbiAgICAgIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gITEsXG4gICAgICBzaGltID1cbiAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdpbmRvdyB8fFxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd2luZG93LmRvY3VtZW50IHx8XG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuICAgICAgICAgID8gdXNlU3luY0V4dGVybmFsU3RvcmUkMVxuICAgICAgICAgIDogdXNlU3luY0V4dGVybmFsU3RvcmUkMjtcbiAgICBleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID1cbiAgICAgIHZvaWQgMCAhPT0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgPyBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSA6IHNoaW07XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AoRXJyb3IoKSk7XG4gIH0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsOExBQThFO0FBQ2hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZnNhdC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzPzk2MGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/shim/index.js\n");

/***/ })

};
;