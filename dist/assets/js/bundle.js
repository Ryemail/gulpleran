!function u(i,f,c){function l(r,e){if(!f[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=f[r]={exports:{}};i[r][0].call(o.exports,function(e){return l(i[r][1][e]||e)},o,o.exports,u,i,f,c)}return f[r].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=function(e){return"Hello from "+e}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,u=e("./greet");n="greeting",o="TypeScript第一节",document.getElementById(n).innerText=u.sayHello(o)},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
