define(["exports","preact/jsx-runtime",'module',"./utils/UNSAFE_classNames","./index-6aed3532","./UNSAFE_Flex","./index-6f29250e","./Flex-556d723b","./classNames-429bf434"],function(n,e,s,i,a,t,r,c,l){"use strict";const o={banner:"_1bti25w",inline:"_1mde17i",toast:"_1dhzu5y"},g={confirmation:r.SvgIcoSuccessS,error:r.SvgIcoErrorS,info:r.SvgIcoInformationS,warning:r.SvgIcoWarningS},d="_1vzi25";n.MessageStartIcon=function({severity:n,variant:s="banner",translations:i}){const a=g[n],t="inline"!==s?e.jsx(c.Flex,Object.assign({align:"center",height:"100%"},{children:e.jsx("span",Object.assign({class:d,role:"img",title:null==i?void 0:i[n]},{children:e.jsx(a,{})}))})):e.jsx("span",Object.assign({class:d,role:"img",title:null==i?void 0:i[n]},{children:e.jsx(a,{})}));return e.jsx("div",Object.assign({class:l.classNames(["banner"===s&&"oj-c-messagebanner-start-icon","tm5c18",o[s]]),role:"presentation"},{children:t}))}});
//# sourceMappingURL=MessageStartIcon-9a21df9b.js.map