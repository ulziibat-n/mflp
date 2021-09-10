// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Gg4U":[function(require,module,exports) {

},{"./fonts/NeueMontreal-Medium.woff2":[["NeueMontreal-Medium.1a6a325a.woff2","O6W8"],"O6W8"],"./fonts/NeueMontreal-Medium.woff":[["NeueMontreal-Medium.c2b2684d.woff","UyAy"],"UyAy"],"./fonts/NeueMontreal-Regular.woff2":[["NeueMontreal-Regular.11f6ca95.woff2","HPxL"],"HPxL"],"./fonts/NeueMontreal-Regular.woff":[["NeueMontreal-Regular.15a1379c.woff","HUtG"],"HUtG"],"./fonts/NeueMontreal-LightItalic.woff2":[["NeueMontreal-LightItalic.2c288016.woff2","uiFx"],"uiFx"],"./fonts/NeueMontreal-LightItalic.woff":[["NeueMontreal-LightItalic.29eb238b.woff","sJNt"],"sJNt"],"./fonts/NeueMontreal-Italic.woff2":[["NeueMontreal-Italic.3632ef77.woff2","IU7U"],"IU7U"],"./fonts/NeueMontreal-Italic.woff":[["NeueMontreal-Italic.ad946281.woff","YxTw"],"YxTw"],"./fonts/NeueMontreal-BoldItalic.woff2":[["NeueMontreal-BoldItalic.71ecbc7b.woff2","c7oa"],"c7oa"],"./fonts/NeueMontreal-BoldItalic.woff":[["NeueMontreal-BoldItalic.c7095c9f.woff","cMnv"],"cMnv"],"./fonts/NeueMontreal-MediumItalic.woff2":[["NeueMontreal-MediumItalic.3675abad.woff2","ffWp"],"ffWp"],"./fonts/NeueMontreal-MediumItalic.woff":[["NeueMontreal-MediumItalic.da28253a.woff","wCPX"],"wCPX"],"./fonts/NeueMontreal-Bold.woff2":[["NeueMontreal-Bold.61898276.woff2","yteW"],"yteW"],"./fonts/NeueMontreal-Bold.woff":[["NeueMontreal-Bold.0cb3c471.woff","FCJW"],"FCJW"],"./fonts/NeueMontreal-Light.woff2":[["NeueMontreal-Light.ca0c29fa.woff2","GhK9"],"GhK9"],"./fonts/NeueMontreal-Light.woff":[["NeueMontreal-Light.f9b41508.woff","vT7e"],"vT7e"],"./fonts/BlackerDisplay-Medium.woff2":[["BlackerDisplay-Medium.80b2cffb.woff2","Ho4J"],"Ho4J"],"./fonts/BlackerDisplay-Medium.woff":[["BlackerDisplay-Medium.0199ce29.woff","aAUS"],"aAUS"],"./fonts/BlackerDisplay-MediumItalic.woff2":[["BlackerDisplay-MediumItalic.fad6b0da.woff2","F6W5"],"F6W5"],"./fonts/BlackerDisplay-MediumItalic.woff":[["BlackerDisplay-MediumItalic.94d822d0.woff","VW4h"],"VW4h"]}],"Focm":[function(require,module,exports) {
"use strict";

require("./scss/style.scss");

console.log('NEW FUNKGIN WEB COMING SOON...');
},{"./scss/style.scss":"Gg4U"}]},{},["Focm"], null)
//# sourceMappingURL=mflp.c3a25ad0.js.map