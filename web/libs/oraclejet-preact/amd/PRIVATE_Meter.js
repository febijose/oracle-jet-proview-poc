define(["exports","./tslib.es6-6a195797","preact/jsx-runtime","preact/compat"],function(r,t,o,i){"use strict";const e=i.forwardRef((r,i)=>{var{id:e,length:d="100%",children:s,color:l,orientation:a="horizontal",ariaProps:c}=r,h=t.__rest(r,["id","length","children","color","orientation","ariaProps"]);const n="horizontal"===a;return o.jsx("div",Object.assign({id:e,ref:i,class:h.class},c,{style:{width:n?d:void 0,height:n?void 0:d,backgroundColor:l}},{children:s}))}),d=i.forwardRef((r,i)=>{var{id:e,children:d,color:s,clipPath:l,borderWidth:a,ariaProps:c}=r,h=t.__rest(r,["id","children","color","clipPath","borderWidth","ariaProps"]);return o.jsx("div",Object.assign({id:e,ref:i},c,{class:h.class,style:{borderColor:s,borderWidth:a,clipPath:l}},{children:d}))});r.BarTrack=e,r.BarValue=r=>{var{length:i="100%",size:e="100%",orientation:d="horizontal",color:s}=r,l=t.__rest(r,["length","size","orientation","color"]);const a="horizontal"===d;return o.jsx("div",{class:l.class,style:{width:a?i:e,height:a?e:i,backgroundColor:s}})},r.CircleInner=r=>{var{clipPath:i,color:e,height:d,width:s,size:l,section:a="full"}=r,c=t.__rest(r,["clipPath","color","height","width","size","section"]);const h=function(r,t){const o={borderTopWidth:t,borderBottomWidth:t,borderRightWidth:t,borderLeftWidth:t};return"top"===r&&(o.borderBottomWidth=void 0),"bottom"===r&&(o.borderTopWidth=void 0),"left"===r&&(o.borderRightWidth=void 0),"right"===r&&(o.borderLeftWidth=void 0),o}(a,l);return o.jsx("div",{class:c.class,style:Object.assign({clipPath:i,borderColor:e,height:d,width:s},h)})},r.CircleWrapper=d,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_Meter.js.map