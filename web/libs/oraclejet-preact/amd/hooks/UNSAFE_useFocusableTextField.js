define(["exports","../tslib.es6-6a195797","preact/hooks","./UNSAFE_useFocusWithin","../useFocusWithin-0a53949e"],function(e,u,r,s,n){"use strict";e.useFocusableTextField=function(e){var{isReadonly:s,ref:o=(()=>{})}=e,t=u.__rest(e,["isReadonly","ref"]);const{focusProps:l,isFocused:c}=n.useFocusWithin(t),i=r.useRef(c),f=r.useRef(null),d=r.useRef(null);return r.useEffect(()=>{i.current&&(s?setTimeout(()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.focus()}):setTimeout(()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.focus()}))},[s]),r.useEffect(()=>{i.current=c},[c]),r.useImperativeHandle(o,()=>({focus:()=>{var e,u;s?null===(e=d.current)||void 0===e||e.focus():null===(u=f.current)||void 0===u||u.focus()},blur:()=>{var e,u;s?null===(e=d.current)||void 0===e||e.blur():null===(u=f.current)||void 0===u||u.blur()}}),[s]),{enabledElementRef:f,readonlyElementRef:d,isFocused:c,focusProps:l}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_useFocusableTextField.js.map
