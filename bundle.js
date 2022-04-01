// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isColumnMajorContiguous=r()}(this,(function(){"use strict";var e=function(e){var r,t,n;if(0===(r=e.length))return 0;for(t=1,n=0;n<r;n++)t*=e[n];return t},r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;var c=n,_=function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},p=t()?c:_;var s=function(e,r,t){var n,o,u,i,a;for(n=e.length,o=t,u=t,a=0;a<n;a++){if(0===e[a])return[t,t];(i=r[a])>0?u+=i*(e[a]-1):i<0&&(o+=i*(e[a]-1))}return[o,u]};(function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(s,"assign",(function(e,r,t,n){var o,u,i,a,l;for(o=e.length,u=t,i=t,l=0;l<o;l++){if(0===e[l])return n[0]=t,n[1]=t,n;(a=r[l])>0?i+=a*(e[l]-1):a<0&&(u+=a*(e[l]-1))}return n[0]=u,n[1]=i,n}));var d=e,v=s;var b=function(e){return Math.abs(e)};var y=function(e,r,t){var n,o;return 0!==(n=d(e))&&n===(o=v(e,r,t))[1]-o[0]+1},g=function(e){var r,t;for(r=0,t=0;t<e.length;t++)e[t]<0&&(r+=1);return 0===r?1:r===e.length?-1:0},h=function(e){var r,t,n,o;if(0===(r=e.length))return!1;for(t=b(e[0]),o=1;o<r;o++){if((n=b(e[o]))<t)return!1;t=n}return!0};return function(e,r,t){return 0!==g(r)&&h(r)&&y(e,r,t)}}));
//# sourceMappingURL=bundle.js.map
