!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var r={},t={},n={},a={}.hasOwnProperty,o=/^\.\.?(\/|$)/,s=function(e,r){for(var t,n=[],a=(o.test(r)?e+"/"+r:r).split("/"),s=0,i=a.length;s<i;s++)t=a[s],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},i=function(e){return e.split("/").slice(0,-1).join("/")},u=function(r){return function(t){var n=s(i(r),t);return e.require(n,r)}},c=function(e,r){var n=null;n=h&&h.createHot(e);var a={id:e,exports:{},hot:n};return t[e]=a,r(a.exports,u(e),a),a.exports},l=function(e){return n[e]?l(n[e]):e},f=function(e,r){return l(s(i(e),r))},p=function(e,n){null==n&&(n="/");var o=l(e);if(a.call(t,o))return t[o].exports;if(a.call(r,o))return c(o,r[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,r){n[r]=e};var d=/\.[^.\/]+$/,g=/\/index(\.[^\/]+)?$/,m=function(e){if(d.test(e)){var r=e.replace(d,"");a.call(n,r)&&n[r].replace(d,"")!==r+"/index"||(n[r]=e)}if(g.test(e)){var t=e.replace(g,"");a.call(n,t)||(n[t]=e)}};p.register=p.define=function(e,n){if("object"==typeof e)for(var o in e)a.call(e,o)&&p.register(o,e[o]);else r[e]=n,delete t[e],m(e)},p.list=function(){var e=[];for(var t in r)a.call(r,t)&&e.push(t);return e};var h=e._hmr&&new e._hmr(f,p,r,t);p._cache=t,p.hmr=h&&h.wrap,p.brunch=!0,e.require=p}}(),function(){var e;window;require.register("app.js",function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r("fastclick"),o=n(a),s=r("firebase"),i=n(s),u=r("@greenhousegames/game-template"),c=n(u);r("@greenhousegames/firebase-game-storage"),r("@greenhousegames/greenhouse-phaser-plugin"),o["default"].FastClick.attach(document.body);var l=i["default"].initializeApp({apiKey:"AIzaSyCqcbh9XmZZBahTDxmj4GXbwQny9H9wHdo",authDomain:"greenhouse-games-test.firebaseapp.com",databaseURL:"https://greenhouse-games-test.firebaseio.com",storageBucket:"",messagingSenderId:"756331628096"}),f=new c["default"]({firebase:l,assetPath:"game"});f.state.start("boot")}),require.register("config.js",function(e,r,t){"use strict";t.exports={apiKey:"AIzaSyDPGXl6Bc8jf_IPlkcVJe6jNlrNz72zaCo",authDomain:"greenhouse-games.firebaseapp.com",databaseURL:"https://greenhouse-games.firebaseio.com",storageBucket:"greenhouse-games.appspot.com",messagingSenderId:"832706408675"}}),require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/path-browserify/index.js","path"),require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,r,t){})}(),require("___globals___");