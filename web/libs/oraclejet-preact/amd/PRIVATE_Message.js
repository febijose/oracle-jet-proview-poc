define(["exports","preact/jsx-runtime","css!./PRIVATE_Message.css","preact/hooks","./UNSAFE_Flex","./utils/PRIVATE_timer","./utils/UNSAFE_classNames","./MessageCloseButton-256615e9","./classNames-429bf434","./MessageDetail-8958ff27","./MessageFormattingUtils-66993387","./MessageStartIcon-9a21df9b","./MessageSummary-34220b0d","./MessageTimestamp-271609d9","./MessageUtils-dfcb9ca9","./Flex-556d723b","./MessagesManager-d521afd3","./Message.types-4bf5e2b8","./tslib.es6-6a195797","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-875b461d","./utils/UNSAFE_mergeInterpolations","./_curry3-512d483b","./_curry2-ad2c6a81","./_has-11a7a18f","./utils/UNSAFE_interpolations/boxalignment","./keys-83d1523f","./utils/UNSAFE_interpolations/flexbox","./flexbox-aaa40e19","./utils/UNSAFE_interpolations/flexitem","./flexitem-d85d1561","./UNSAFE_Button","./Button-11c23c7a","./UNSAFE_BaseButton","./BaseButton-31fe1787","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","preact/compat","./utils/PRIVATE_clientHints","./clientHints-9d985ef6","./hooks/UNSAFE_useTabbableMode","preact","./utils/UNSAFE_mergeProps","./index-6aed3532","./index-6f29250e","./UNSAFE_Icon","./Icon-b5704008","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-31eefce3","./index-4f4526ef","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-5d80cd95","./hooks/UNSAFE_useTheme","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-432c5155","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext"],function(e,s,t,a,n,o,i,r,l,u,c,d,g,m,_,S,b,f,E,F,A,U,p,N,x,v,M,h,y,j,k,T,I,B,C,R,V,O,P,w,D,z,H,L,W,G,K,q,J,Q,X,Y,Z,$,ee,se,te,ae,ne,oe,ie,re,le,ue,ce,de,ge,me,_e,Se,be,fe,Ee,Fe){"use strict";const Ae="_1s86aeb",Ue="_1ix0zwa";function pe({item:e,renderer:t}){const a=l.classNames([Ae,Ue]);return s.jsx("div",Object.assign({class:a,role:"presentation"},{children:t(e)}))}const Ne={base:"_17x5si3",banner:"_9l4z5c",inline:void 0,toast:"wd37jp"};function xe({children:e,variant:t="banner"}){const a=l.classNames([Ne.base,Ne[t]]);return s.jsx("div",Object.assign({role:"presentation",class:a},{children:e}))}function ve(e){return c.isValidValueForProp(e,"severity")&&"none"!==e}const Me={base:{banner:"z3k3ky",toast:"_1vvad28"},section:"l9hij",content:{base:"_7o3flu",banner:"_1arggo3",toast:"lh6c5d"}};e.MessageCloseButton=r.MessageCloseButton,e.MessageDetail=u.MessageDetail,e.formatTimestamp=c.formatTimestamp,e.isValidValueForProp=c.isValidValueForProp,e.MessageStartIcon=d.MessageStartIcon,e.MessageSummary=g.MessageSummary,e.MessageTimestamp=m.MessageTimestamp,e.getRenderer=_.getRenderer,e.getRendererWithoutIndex=_.getRendererWithoutIndex,e.isSeverityIconNeeded=_.isSeverityIconNeeded,e.playSound=_.playSound,e.severityBasedStyleClass=_.severityBasedStyleClass,e.throwError=_.throwError,e.MessagesManager=b.MessagesManager,e.severities=f.severities,e.Message=function({closeButtonRenderer:e,detailRenderer:t,iconRenderer:n,index:i=-1,item:b,onClose:f,messageRef:E=(()=>{}),variant:F="pageBanner",translations:A}){const{closeAffordance:U="on",severity:p="error",sound:N,summary:x,timestamp:v}=b.data,{autoTimeout:M="off"}=b.data,h=function(e){return"pageBanner"===e||"sectionBanner"===e?"banner":"toast"}(F),y=a.useCallback(()=>{null==f||f(b)},[b,f]),j=a.useCallback(e=>{"Escape"===e.key&&"on"===U&&(null==f||f(b))},[U,b,f]),k="toast"===h&&"off"!==M,T=a.useRef(),I="on"===M?5e3:"number"==typeof M?M:5e3,B=a.useCallback(()=>{T.current||(T.current=new o.Timer(y,I))},[y,I]),C=a.useCallback(()=>{T.current&&(T.current.clear(),T.current=void 0)},[]),R=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.pause()},[]),V=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.resume()},[]);a.useEffect(()=>(c.isValidValueForProp(N)&&_.playSound(N),k&&B(),()=>{C()}),[]);const O=l.classNames([Me.base[h],"toast"!==F&&_.severityBasedStyleClass(p,h),"sectionBanner"===F&&Me.section]),P=l.classNames([Me.content.base,Me.content[h]]);return s.jsx("div",Object.assign({ref:E,class:O,role:"alert","aria-atomic":"true",tabIndex:0,onKeyUp:j,onfocusin:R,onfocusout:V},{children:s.jsxs("div",Object.assign({class:P},{children:[n?s.jsx(pe,{item:Object.assign(Object.assign({},b),{index:i}),renderer:n}):ve(p)?s.jsx(d.MessageStartIcon,{severity:p,variant:h,translations:A}):null,s.jsxs(S.Flex,Object.assign({direction:"column",flex:"1",gap:"--oj-c-PRIVATE-DO-NOT-USE-core-spacing-2x"},{children:[s.jsxs(xe,Object.assign({variant:h},{children:[s.jsx(g.MessageSummary,{variant:h,text:x}),c.isValidValueForProp(v,"timestamp")&&"toast"!==F&&s.jsx(m.MessageTimestamp,{variant:h,value:v})]})),s.jsx(u.MessageDetail,{variant:h,item:Object.assign(Object.assign({},b),{index:i}),renderer:t})]})),"on"===U&&s.jsx(r.MessageCloseButton,{buttonRenderer:e,title:null==A?void 0:A.close,variant:h,onAction:y})]}))}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_Message.js.map