define(["exports","../_curry1-875b461d","../_curry2-ad2c6a81","../_curry3-512d483b"],function(r,t,n,e){"use strict";var u=function(r){return"[object String]"===Object.prototype.toString.call(r)},o=n._curry2_1,a=u,c=o(function(r,t){var n=r<0?t.length+r:r;return a(t)?t.charAt(n):t[n]}),i=c(0),l=c(-1);var s=function(r,t){switch(r){case 0:return function(){return t.apply(this,arguments)};case 1:return function(r){return t.apply(this,arguments)};case 2:return function(r,n){return t.apply(this,arguments)};case 3:return function(r,n,e){return t.apply(this,arguments)};case 4:return function(r,n,e,u){return t.apply(this,arguments)};case 5:return function(r,n,e,u,o){return t.apply(this,arguments)};case 6:return function(r,n,e,u,o,a){return t.apply(this,arguments)};case 7:return function(r,n,e,u,o,a,c){return t.apply(this,arguments)};case 8:return function(r,n,e,u,o,a,c,i){return t.apply(this,arguments)};case 9:return function(r,n,e,u,o,a,c,i,l){return t.apply(this,arguments)};case 10:return function(r,n,e,u,o,a,c,i,l,s){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}};var f=function(r,t){return function(){return t.call(this,r.apply(this,arguments))}},p=Array.isArray||function(r){return null!=r&&r.length>=0&&"[object Array]"===Object.prototype.toString.call(r)},y=t._curry1_1,d=p,h=u,b=y(function(r){return!!d(r)||!!r&&("object"==typeof r&&(!h(r)&&(1===r.nodeType?!!r.length:0===r.length||r.length>0&&(r.hasOwnProperty(0)&&r.hasOwnProperty(r.length-1)))))}),v=function(){function r(r){this.f=r}return r.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},r.prototype["@@transducer/result"]=function(r){return r},r.prototype["@@transducer/step"]=function(r,t){return this.f(r,t)},r}();var g=function(r){return new v(r)},_=s,m=(0,n._curry2_1)(function(r,t){return _(r.length,function(){return r.apply(t,arguments)})}),w=b,x=g,A=m;function E(r,t,n){for(var e=n.next();!e.done;){if((t=r["@@transducer/step"](t,e.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}e=n.next()}return r["@@transducer/result"](t)}function O(r,t,n,e){return r["@@transducer/result"](n[e](A(r["@@transducer/step"],r),t))}var S="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";var j=function(r,t,n){if("function"==typeof r&&(r=x(r)),w(n))return function(r,t,n){for(var e=0,u=n.length;e<u;){if((t=r["@@transducer/step"](t,n[e]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}e+=1}return r["@@transducer/result"](t)}(r,t,n);if("function"==typeof n["fantasy-land/reduce"])return O(r,t,n,"fantasy-land/reduce");if(null!=n[S])return E(r,t,n[S]());if("function"==typeof n.next)return E(r,t,n);if("function"==typeof n.reduce)return O(r,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")},I=(0,e._curry3_1)(j),P=p;var T=function(r,t){return function(){var n=arguments.length;if(0===n)return t();var e=arguments[n-1];return P(e)||"function"!=typeof e[r]?t.apply(this,arguments):e[r].apply(e,Array.prototype.slice.call(arguments,0,n-1))}},k=T,q=(0,e._curry3_1)(k("slice",function(r,t,n){return Array.prototype.slice.call(n,r,t)})),W=T,D=t._curry1_1,F=s,M=f,X=I,z=D(W("tail",q(1,1/0)));var B=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return F(arguments[0].length,X(M,arguments[0],z(arguments)))},C=(0,n._curry2_1)(function(r,t){return Array.prototype.slice.call(t,0).sort(r)});const G=["a:not([name]):not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])","[tabIndex]:not([tabIndex='-1']"].join(", "),H=(r,t)=>{var n,e;return(null!==(n=r.tabIndex)&&void 0!==n?n:0)-(null!==(e=t.tabIndex)&&void 0!==e?e:0)},J=r=>{const t=(n=r,Array.from(n.querySelectorAll(G)).filter(r=>null!==r.offsetParent&&-1!==r.tabIndex));var n;return t.length?t:[r]},K=B(J,C(H),i),L=r=>{r.focus({preventScroll:!0})},N=B(J,C(H),i,L),Q=B(J,C(H),l,L);r.focusOn=L,r.focusOnEnd=Q,r.focusOnStart=N,r.focusWithin=r=>{const t=K(r);L(t)},r.getActiveElement=r=>{var t;return(null!==(t=null==r?void 0:r.ownerDocument)&&void 0!==t?t:document).activeElement},r.isTabbableElement=r=>r.matches(G),Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_tabbableUtils.js.map
