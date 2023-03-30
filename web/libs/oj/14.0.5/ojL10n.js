/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 *
 * This is a fork of the i18n Require.js plugin.
 * It makes minor chnages to the way the default locale is determined and to the way bundles are merged
 *
 * @license RequireJS i18n 2.0.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */
!function(){"use strict";var e=/(^.*(^|\/)nls(\/|$))([^/]*)\/?([^/]*)/;function n(e,n,o,a,r,t,l){if(n[e]||(e=e.replace(/^zh-(Hans|Hant)-([^-]+)$/,"zh-$2")),n[e]){if(o.push(e),!0===n[e]||1===n[e]){var u=l?l+e:e;a.push(r+u+"/"+t)}return!0}return!1}function o(e){return"object"==typeof e}function a(e,n){for(var r=Object.keys(n),t=0;t<r.length;t++){var l=r[t];null==e[l]?e[l]=n[l]:o(n[l])&&o(e[l])&&a(e[l],n[l])}}define(["module"],function(o){var r=o.config?o.config():{};return{version:"2.0.1+",load:function(o,t,l,u){var c;(u=u||{}).locale&&(r.locale=u.locale);var i,f,s,v,g,h,p,d,y,m,L,O=e.exec(o),_=O[1],b=O[5],j=[],H={},k="";O[5]?(c=(_=O[1])+b,i=O[4]):(c=o,b=O[4],i=r.locale,"undefined"!=typeof document?(i||(i=u.isBuild?"root":document.documentElement.lang)||(i=void 0===navigator?"root":navigator.systemLanguage||navigator.language||navigator.userLanguage||"root"),r.locale=i):i="root"),f=function(e){var n,o=e.toLowerCase().split(/-|_/),a=[o[0]],r=1;for(n=1;n<o.length;n++){var t=o[n],l=t.length;if(1===l)break;switch(r){case 1:if(r=2,4===l){a.push(t.charAt(0).toUpperCase()+t.slice(1));break}case 2:r=3,a.push(t.toUpperCase());break;default:a.push(t)}}return function(e){if("zh"!==e[0]||e.length>1&&4===e[1].length)return;var n="Hans",o=e.length>1?e[1]:null;"TW"!==o&&"MO"!==o&&"HK"!==o||(n="Hant");e.splice(1,0,n)}(a),a}(i),v=r.noOverlay,g=r.defaultNoOverlayLocale;var x=r.localePrefix;for((y=r.merge)&&(h=y[_+b])&&(O=e.exec(h),p=O[1],d=O[4]),m=[],s=0;s<f.length;s++)k+=(k?"-":"")+f[s],m.push(k);u.isBuild?(j.push(c),h&&j.push(h),t(j,function(){l()})):("query"===r.includeLocale&&(c=t.toUrl(c+".js"),c+=(-1===c.indexOf("?")?"?":"&")+"loc="+i),L=[c],h&&L.push(h),t(L,function(e,o){var r=[],u=function(e,o,a){for(var t=v||!0===e.__noOverlay,l=g||e.__defaultNoOverlayLocale,u=!1,c=m.length-1;c>=0&&(!u||!t);c--)u=n(m[c],e,r,j,o,a,x);var i=1===m.length&&"root"===m[0];t&&(i||!u)&&l&&n(l,e,r,j,o,a,x),i||n("root",e,r,j,o,a,x)};u(e,_,b);var c=r.length;o&&u(o,p,d),t(j,function(){var n=function(e,n,o,l,u){for(var c=n;c<o&&r[c];c++){var i=r[c],f=x?x+i:i,s=e[i];!0!==s&&1!==s||(s=t(l+f+"/"+u)),a(H,s||{})}};n(o,c,r.length,p,d),n(e,0,c,_,b),H._ojLocale_=f.join("-"),l(H)})}))}}})}();