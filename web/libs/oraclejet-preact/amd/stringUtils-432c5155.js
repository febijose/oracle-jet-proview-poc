define(["exports"],function(n){"use strict";const t=/^\s*|\s*$/g;function e(n){if(null===n)return!0;const t=i(n);return!(null==t?void 0:t.hasOwnProperty("length"))||0===t.length}function r(n){return null!==n&&("string"==typeof n||n instanceof String)}function i(n){return r(n)?n.replace(t,""):n}n.hashCode=function(n){let t=0;if(0===n.length)return t;for(let e=0;e<n.length;e++){t=(t<<5)-t+n.charCodeAt(e),t&=t}return t},n.isEmpty=e,n.isEmptyOrUndefined=function(n){return!(void 0!==n&&!e(n))},n.isString=r,n.trim=i});
//# sourceMappingURL=stringUtils-432c5155.js.map
