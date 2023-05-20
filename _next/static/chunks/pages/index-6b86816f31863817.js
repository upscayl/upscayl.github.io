(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6383)}])},6383:function(e,t,a){"use strict";let o,r;a.r(t),a.d(t,{default:function(){return eX}});var n,s=a(5893),i=a(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var c=function(e,t){return e.querySelector(t)},d=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach(function(a){void 0!==e[a]&&(t[a]=e[a])}),t},u=["component","children","rootChildren","scaleChildren","rotateChildren","className","scaleClassName","rotateClassName","innerClassName"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var f=["eventsEl","alwaysActive","activeOffset","shadowOffset","shadowScale","duration","rotate","rotateTouch","rotateXMax","rotateYMax","rotateXInvert","rotateYInvert","stretchX","stretchY","stretchZ","commonOrigin","shadow","highlight","onEnter","onLeave","onRotate"],m=function(e){var t={};return Object.keys(e).forEach(function(a){f.includes(a)||(t[a]=e[a])}),t},h=function(e){var t={};return Object.keys(e).forEach(function(a){f.includes(a)&&(t[a]=e[a])}),t},y=function(e){var t=e.component,a=e.children,o=e.rootChildren,r=e.scaleChildren,n=e.rotateChildren,s=e.className,f=e.scaleClassName,y=e.rotateClassName,g=e.innerClassName,v=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,u),x=(0,i.useRef)(null),b=(0,i.useRef)(null),C=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return!!e}).join(" ")},w=function(){var t,a,o,r,n,s,i,u,f,m,y,g,v,C,w,A,M,E,N,j,D,O,k,I,L,F,P,S,B,G,H,X,Q,z,T;b.current=(void 0===(t=p({el:x.current},h(e)))&&(t={}),C=(v=t).el,w=v.eventsEl,M=(A={__atropos__:!0,params:l({alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0,onEnter:null,onLeave:null,onRotate:null},d(t||{})),destroyed:!1,isActive:!1}).params,E=[],!function e(){g=requestAnimationFrame(function(){E.forEach(function(e){if("function"==typeof e)e();else{var t=e.element,a=e.prop,o=e.value;t.style[a]=o}}),E.splice(0,E.length),e()})}(),N=function(e,t){E.push({element:e,prop:"transitionDuration",value:t})},j=function(e,t){E.push({element:e,prop:"transitionTimingFunction",value:t})},D=function(e,t){E.push({element:e,prop:"transform",value:t})},O=function(e,t){E.push({element:e,prop:"opacity",value:t})},k=function(e,t){E.push({element:e,prop:"transformOrigin",value:t})},I=function(e,t,a,o){return e.addEventListener(t,a,o)},L=function(e,t,a,o){return e.removeEventListener(t,a,o)},F=function(e){var t=e.rotateXPercentage,a=void 0===t?0:t,o=e.rotateYPercentage,r=void 0===o?0:o,n=e.duration,s=e.opacityOnly,i=e.easeOut,l=function(e){if(e.dataset.atroposOpacity&&"string"==typeof e.dataset.atroposOpacity)return e.dataset.atroposOpacity.split(";").map(function(e){return parseFloat(e)})};C.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(function(e){N(e,n),j(e,i?"ease-out":"");var t=l(e);if(0===a&&0===r)s||D(e,"translate3d(0, 0, 0)"),t&&O(e,t[0]);else{var o=parseFloat(e.dataset.atroposOffset)/100;if(Number.isNaN(o)||s||D(e,"translate3d("+-(-r*o)+"%, "+-(a*o)+"%, 0)"),t){var c=t[0],d=t[1];O(e,c+(d-c)*Math.max(Math.abs(a),Math.abs(r))/100)}}})},P=function(e,t){var o,r=C!==w;if(n||(n=C.getBoundingClientRect()),r&&!s&&(s=w.getBoundingClientRect()),void 0===e&&void 0===t){var i=r?s:n;e=i.left+i.width/2,t=i.top+i.height/2}var l=0,c=0,d=n,p=d.top,f=d.left,m=d.width,h=d.height;if(r){var y=s,g=y.top,v=y.left,x=y.width,b=y.height,A=e-v,E=t-g;c=-(M.rotateYMax*(A-(m/2+(f-v)))/(x-m/2)*1),l=M.rotateXMax*(E-(h/2+(p-g)))/(b-h/2),o=e-f+"px "+(t-p)+"px"}else{var I=e-f,L=t-p;c=-(M.rotateYMax*(I-m/2)/(m/2)*1),l=M.rotateXMax*(L-h/2)/(h/2)}l=Math.min(Math.max(-l,-M.rotateXMax),M.rotateXMax),M.rotateXInvert&&(l=-l),c=Math.min(Math.max(-c,-M.rotateYMax),M.rotateYMax),M.rotateYInvert&&(c=-c);var P=l/M.rotateXMax*100,S=c/M.rotateYMax*100;D(a,"translate3d("+(r?S/100*M.stretchX:0)*(M.rotateYInvert?-1:1)+"%, "+-((r?P/100*M.stretchY:0)*(M.rotateXInvert?-1:1))+"%, "+-(r?Math.max(Math.abs(P),Math.abs(S))/100*M.stretchZ:0)+"px) rotateX("+l+"deg) rotateY("+c+"deg)"),o&&M.commonOrigin&&k(a,o),u&&(N(u,M.duration+"ms"),j(u,"ease-out"),D(u,"translate3d("+-(.25*S)+"%, "+.25*P+"%, 0)"),O(u,Math.max(Math.abs(P),Math.abs(S))/100)),F({rotateXPercentage:P,rotateYPercentage:S,duration:M.duration+"ms",easeOut:!0}),"function"==typeof M.onRotate&&M.onRotate(l,c)},S=function(){E.push(function(){return C.classList.add("atropos-active")}),N(a,M.duration+"ms"),j(a,"ease-out"),D(o,"translate3d(0,0, "+M.activeOffset+"px)"),N(o,M.duration+"ms"),j(o,"ease-out"),i&&(N(i,M.duration+"ms"),j(i,"ease-out")),A.isActive=!0},B=function(e){if(f=void 0,("pointerdown"!==e.type||"mouse"!==e.pointerType)&&("pointerenter"!==e.type||"mouse"===e.pointerType)){if("pointerdown"===e.type&&e.preventDefault(),m=e.clientX,y=e.clientY,M.alwaysActive){n=void 0,s=void 0;return}S(),"function"==typeof M.onEnter&&M.onEnter()}},G=function(e){!1===f&&e.cancelable&&e.preventDefault()},H=function(e){if(M.rotate&&A.isActive){if("mouse"!==e.pointerType){if(!M.rotateTouch)return;e.preventDefault()}var t=e.clientX,a=e.clientY,o=t-m,r=a-y;if("string"==typeof M.rotateTouch&&(0!==o||0!==r)&&void 0===f){if(o*o+r*r>=25){var n=180*Math.atan2(Math.abs(r),Math.abs(o))/Math.PI;f="scroll-y"===M.rotateTouch?n>45:90-n>45}!1===f&&(C.classList.add("atropos-rotate-touch"),e.cancelable&&e.preventDefault())}"mouse"!==e.pointerType&&f||P(t,a)}},X=function(e){if(n=void 0,s=void 0,A.isActive&&(!e||"pointerup"!==e.type||"mouse"!==e.pointerType)&&(!e||"pointerleave"!==e.type||"mouse"===e.pointerType)){if("string"==typeof M.rotateTouch&&f&&C.classList.remove("atropos-rotate-touch"),M.alwaysActive){P(),"function"==typeof M.onRotate&&M.onRotate(0,0),"function"==typeof M.onLeave&&M.onLeave();return}E.push(function(){return C.classList.remove("atropos-active")}),N(o,M.duration+"ms"),j(o,""),D(o,"translate3d(0,0, 0px)"),i&&(N(i,M.duration+"ms"),j(i,"")),u&&(N(u,M.duration+"ms"),j(u,""),D(u,"translate3d(0, 0, 0)"),O(u,0)),N(a,M.duration+"ms"),j(a,""),D(a,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),F({duration:M.duration+"ms"}),A.isActive=!1,"function"==typeof M.onRotate&&M.onRotate(0,0),"function"==typeof M.onLeave&&M.onLeave()}},Q=function(e){var t=e.target;!w.contains(t)&&t!==w&&A.isActive&&X()},A.destroy=function(){A.destroyed=!0,cancelAnimationFrame(g),L(document,"click",Q),L(w,"pointerdown",B),L(w,"pointerenter",B),L(w,"pointermove",H),L(w,"touchmove",G),L(w,"pointerleave",X),L(w,"pointerup",X),L(w,"lostpointercapture",X),delete C.__atropos__},"string"==typeof C&&(C=c(document,C)),C&&(C.__atropos__||(void 0!==w?"string"==typeof w&&(w=c(document,w)):w=C,Object.assign(A,{el:C}),a=c(C,".atropos-rotate"),o=c(C,".atropos-scale"),r=c(C,".atropos-inner"),C.__atropos__=A)),C&&w&&(M.shadow&&((i=c(C,".atropos-shadow"))||((i=document.createElement("span")).classList.add("atropos-shadow"),z=!0),D(i,"translate3d(0,0,-"+M.shadowOffset+"px) scale("+M.shadowScale+")"),z&&a.appendChild(i)),M.highlight&&((u=c(C,".atropos-highlight"))||((u=document.createElement("span")).classList.add("atropos-highlight"),T=!0),D(u,"translate3d(0,0,0)"),T&&r.appendChild(u)),M.rotateTouch&&("string"==typeof M.rotateTouch?C.classList.add("atropos-rotate-touch-"+M.rotateTouch):C.classList.add("atropos-rotate-touch")),c(C,"[data-atropos-opacity]")&&F({opacityOnly:!0}),I(document,"click",Q),I(w,"pointerdown",B),I(w,"pointerenter",B),I(w,"pointermove",H),I(w,"touchmove",G),I(w,"pointerleave",X),I(w,"pointerup",X),I(w,"lostpointercapture",X),M.alwaysActive&&(S(),P())),A)},A=function(){b.current&&(b.current.destroy(),b.current=null)};return(0,i.useEffect)(function(){return x.current&&w(),function(){A()}},[]),(0,i.useEffect)(function(){return b.current&&(b.current.params.onEnter=e.onEnter,b.current.params.onLeave=e.onLeave,b.current.params.onRotate=e.onRotate),function(){b.current&&(b.current.params.onEnter=null,b.current.params.onLeave=null,b.current.params.onRotate=null)}}),i.createElement(void 0===t?"div":t,p({className:C("atropos",void 0===s?"":s)},m(v),{ref:x}),i.createElement("span",{className:C("atropos-scale",void 0===f?"":f)},i.createElement("span",{className:C("atropos-rotate",void 0===y?"":y)},i.createElement("span",{className:C("atropos-inner",void 0===g?"":g)},a,(e.highlight||void 0===e.highlight)&&i.createElement("span",{className:"atropos-highlight"})),n,(e.shadow||void 0===e.shadow)&&i.createElement("span",{className:"atropos-shadow"})),r),o)};a(4628);let g={data:""},v=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g,x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,w=(e,t)=>{let a="",o="",r="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+s+";":o+="f"==n[1]?w(s,n):n+"{"+w(s,"k"==n[1]?"":t)+"}":"object"==typeof s?o+=w(s,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=w.p?w.p(n,s):n+":"+s+";")}return a+(t&&r?t+"{"+r+"}":r)+o},A={},M=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+M(e[a]);return t}return e},E=(e,t,a,o,r)=>{var n,s;let i=M(e),l=A[i]||(A[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!A[l]){let c=i!==e?e:(e=>{let t,a,o=[{}];for(;t=x.exec(e.replace(b,""));)t[4]?o.shift():t[3]?(a=t[3].replace(C," ").trim(),o.unshift(o[0][a]=o[0][a]||{})):o[0][t[1]]=t[2].replace(C," ").trim();return o[0]})(e);A[l]=w(r?{["@keyframes "+l]:c}:c,a?"":"."+l)}let d=a&&A.g?A.g:null;return a&&(A.g=A[l]),n=A[l],s=t,d?s.data=s.data.replace(d,n):-1===s.data.indexOf(n)&&(s.data=o?n+s.data:s.data+n),l},N=(e,t,a)=>e.reduce((e,o,r)=>{let n=t[r];if(n&&n.call){let s=n(a),i=s&&s.props&&s.props.className||/^go/.test(s)&&s;n=i?"."+i:s&&"object"==typeof s?s.props?"":w(s,""):!1===s?"":s}return e+o+(null==n?"":n)},"");function j(e){let t=this||{},a=e.call?e(t.p):e;return E(a.unshift?a.raw?N(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,v(t.target),t.g,t.o,t.k)}j.bind({g:1});let D,O,k,I=j.bind({k:1});function L(e,t){let a=this||{};return function(){let o=arguments;function r(n,s){let i=Object.assign({},n),l=i.className||r.className;a.p=Object.assign({theme:O&&O()},i),a.o=/ *go\d+/.test(l),i.className=j.apply(a,o)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),k&&c[0]&&k(i),D(c,i)}return t?t(r):r}}var F=e=>"function"==typeof e,P=(e,t)=>F(e)?e(t):e,S=(o=0,()=>(++o).toString()),B=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},G=new Map,H=e=>{if(G.has(e))return;let t=setTimeout(()=>{G.delete(e),U({type:4,toastId:e})},1e3);G.set(e,t)},X=e=>{let t=G.get(e);t&&clearTimeout(t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&X(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?Q(e,{type:1,toast:a}):Q(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?H(o):e.toasts.forEach(e=>{H(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},z=[],T={toasts:[],pausedAt:void 0},U=e=>{T=Q(T,e),z.forEach(e=>{e(T)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,a]=(0,i.useState)(T);(0,i.useEffect)(()=>(z.push(a),()=>{let e=z.indexOf(a);e>-1&&z.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var a,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||Y[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},J=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||S()}),Z=e=>(t,a)=>{let o=J(t,e,a);return U({type:2,toast:o}),o.id},q=(e,t)=>Z("blank")(e,t);q.error=Z("error"),q.success=Z("success"),q.loading=Z("loading"),q.custom=Z("custom"),q.dismiss=e=>{U({type:3,toastId:e})},q.remove=e=>U({type:4,toastId:e}),q.promise=(e,t,a)=>{let o=q.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(q.success(P(t.success,e),{id:o,...a,...null==a?void 0:a.success}),e)).catch(e=>{q.error(P(t.error,e),{id:o,...a,...null==a?void 0:a.error})}),e};var W=(e,t)=>{U({type:1,toast:{id:e,height:t}})},$=()=>{U({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:a}=R(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&q.dismiss(t.id);return}return setTimeout(()=>q.dismiss(t.id),a)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,a]);let o=(0,i.useCallback)(()=>{a&&U({type:6,time:Date.now()})},[a]),r=(0,i.useCallback)((e,a)=>{let{reverseOrder:o=!1,gutter:r=8,defaultPosition:n}=a||{},s=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),i=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<i&&e.visible).length;return s.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:$,endPause:o,calculateOffset:r}}},V=L("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${I`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_=L("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${I`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,ee=L("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${I`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,et=L("div")`
  position: absolute;
`,ea=L("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eo=L("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${I`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?i.createElement(eo,null,t):t:"blank"===a?null:i.createElement(ea,null,i.createElement(_,{...o}),"loading"!==a&&i.createElement(et,null,"error"===a?i.createElement(V,{...o}):i.createElement(ee,{...o})))},en=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=L("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,el=L("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ec=(e,t)=>{let a=e.includes("top")?1:-1,[o,r]=B()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[en(a),es(a)];return{animation:t?`${I(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${I(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ed=i.memo(({toast:e,position:t,style:a,children:o})=>{let r=e.height?ec(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(er,{toast:e}),s=i.createElement(el,{...e.ariaProps},P(e.message,e));return i.createElement(ei,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof o?o({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))});n=i.createElement,w.p=void 0,D=n,O=void 0,k=void 0;var eu=({id:e,className:t,style:a,onHeightUpdate:o,children:r})=>{let n=i.useCallback(t=>{if(t){let a=()=>{o(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return i.createElement("div",{ref:n,className:t,style:a},r)},ep=(e,t)=>{let a=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...o}},ef=j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:r,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=K(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let n=a.position||t,s=ep(n,c.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return i.createElement(eu,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ef:"",style:s},"custom"===a.type?P(a.message,a):r?r(a):i.createElement(ed,{toast:a,position:n}))}))};let eh=({root:e,particles:t,decay:a,lifetime:o,updateParticle:r,onFinish:n})=>{let s=0,i=()=>{t.forEach(e=>r(e,s/o,a)),(s+=1)<o?window.requestAnimationFrame(i):(t.forEach(t=>{if(t.element.parentNode===e)return e.removeChild(t.element)}),n())};window.requestAnimationFrame(i)},{PI:ey}=Math,eg=e=>e*(ey/180),ev=(e,t)=>{let a=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-a))+a},ex=(e,t,a,o)=>{let r=eg(e),n=eg(t),{random:s}=Math;return{x:0,y:0,z:0,height:0,wobble:10*s(),velocity:.5*a+s()*a,angle2D:-r+(.5*n-s()*n),angle3D:-(ey/4)+s()*(ey/2),tiltAngle:s()*ey,differentiator:o}},eb=e=>{let t=document.getElementById(e);return t||console.error(`Element with an ID of ${e} could not be found. Please provide a valid ID.`),t},eC=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],ew=[-.6,-.3,0,.3,.6],eA=(e,t,a,o,r,n)=>Array.from({length:t}).map((t,s)=>{let i=document.createElement("span");return i.style["background-color"]=n[s%n.length],i.style.width=`${a}px`,i.style.height=`${a}px`,i.style.position=r,i.style.zIndex=`${o}`,e.appendChild(i),{element:i,differentiator:ev(0,ew.length)}}),eM=(e,t,a)=>{let{x:o,y:r,tiltAngle:n,wobble:s,angle2D:i,angle3D:l,velocity:c,differentiator:d}=e.physics;e.physics.x+=Math.cos(i)*c,e.physics.y+=Math.sin(i)*c,e.physics.z+=Math.sin(l)*c,e.physics.wobble+=.05,e.physics.velocity*=a,e.physics.y+=3.5,e.physics.tiltAngle+=.15;let u=o+(ew[d]*t*s*s+20*(d%2?Math.sin(s/4):Math.cos(s/4)));e.element.style.transform=`translate3d(${u}px, ${r+5*Math.sin(s)}px, 0) rotate3d(1, 1, 1, ${d%2?n:-1*n}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},eE=(e,t,a)=>{let{elementCount:o=50,elementSize:r=8,colors:n=eC,angle:s=90,spread:i=45,decay:l=.94,lifetime:c=200,startVelocity:d=35,zIndex:u=0,position:p="fixed",onAnimationComplete:f}=a||{},m=eA(e,o,r,u,p,n).map(({element:e,differentiator:t})=>({element:e,physics:ex(s,i,d,t)}));eh({root:e,particles:m,decay:l,lifetime:c,updateParticle:eM,onFinish(){"function"==typeof f&&f(),t()}})},eN=["\uD83E\uDD13","\uD83D\uDE0A","\uD83E\uDD73"],ej=[-.6,-.3,0,.3,.6],eD=(e,t,a,o,r,n)=>Array.from({length:t}).map((t,s)=>{let i=document.createElement("span");return i.innerHTML=n[s%n.length],i.style.fontSize=`${a+ev(0,4)}px`,i.style.position=r,i.style.zIndex=`${o}`,e.appendChild(i),{element:i,differentiator:ev(0,ej.length)}}),eO=(e,t,a)=>{let{x:o,y:r,tiltAngle:n,angle2D:s,velocity:i,differentiator:l,wobble:c}=e.physics;e.physics.x+=Math.cos(s)*i,e.physics.y+=Math.sin(s)*i,e.physics.wobble+=0,e.physics.velocity*=a,e.physics.y+=5,e.physics.tiltAngle+=.05;let d=o+(ej[l]*t*c*c+20*Math.sin(c/4));e.element.style.transform=`translate3d(${d}px, ${r}px, 0) rotate3d(0, 0, 1, ${l%2?n:-1*n}rad)`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},ek=(e,t,a)=>{let{elementCount:o=20,elementSize:r=25,emoji:n=eN,angle:s=90,spread:i=45,decay:l=.94,lifetime:c=200,startVelocity:d=35,zIndex:u=0,position:p="fixed",onAnimationComplete:f}=a||{},m=eD(e,o,r,u,p,n).map(({element:e,differentiator:t})=>({element:e,physics:ex(s,i,d,t)}));eh({root:e,particles:m,decay:l,lifetime:c,updateParticle:eO,onFinish(){"function"==typeof f&&f(),t()}})};var eI=`<svg width="100%" viewBox="0 0 976 3040" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M489.693 1269.49C489.773 1378.79 410.493 1466.8 389.107 1571.11C384.147 1595.33 382.893 1620.12 386.187 1644.64C389.44 1668.83 399.28 1691.16 409.04 1713.29C419.253 1736.44 429.28 1760.11 429.453 1785.83C429.64 1812.27 416.307 1836.8 408.933 1861.59C396 1905.15 409.613 1948.88 425.213 1989.73C442.04 2033.83 461.387 2077.87 456.6 2126.17C453.92 2153.15 444.147 2179.13 434.2 2204.13C424.173 2229.35 413.72 2254.28 405.507 2280.17C389.213 2331.51 379.493 2385.83 378.267 2439.72C377.693 2464.89 380.333 2490.25 388.667 2514.11C397.053 2538.09 412.6 2558.75 424.733 2580.84C449.907 2626.64 458.453 2681 451.053 2732.52C443.853 2782.56 414.227 2825.99 408.893 2876.35C404.44 2918.39 416.733 2961.63 440.08 2996.53C450.373 3011.91 463.267 3025.44 477.867 3036.75C480.773 3039 484.88 3034.95 481.947 3032.68C446.147 3004.96 423.24 2964.2 415.907 2919.71C412.107 2896.61 413.627 2872.95 419.427 2850.35C426.053 2824.51 438.067 2800.36 446.667 2775.17C462.44 2729 463.147 2678.51 450.92 2631.45C444.733 2607.64 434.453 2585.4 421.893 2564.32C407.933 2540.91 394.307 2518.68 388.32 2491.71C382.493 2465.45 383.413 2438 385.56 2411.37C387.853 2382.85 392.467 2354.56 398.827 2326.67C405 2299.61 413.253 2273.05 423.107 2247.12C432.533 2222.27 443.533 2198.05 451.867 2172.8C459.707 2149.04 464.387 2124.29 463 2099.23C461.773 2077.19 455.64 2055.65 448.467 2034.89C433.587 1991.8 411.307 1949.77 409.413 1903.37C408.36 1877.76 417.12 1854.67 425.587 1830.97C433.68 1808.33 437.44 1786.41 432.787 1762.6C428.307 1739.63 417.333 1718.23 408.12 1696.91C397.267 1671.77 390.413 1646.41 390.013 1618.89C388.387 1509.52 469.707 1420.85 490.813 1316.72C493.973 1301.19 495.467 1285.33 495.453 1269.49C495.453 1265.77 489.693 1265.77 489.693 1269.49" stroke="#7A7E82" stroke-width="4"/>
<path d="M555.653 1298.41H423.52C415.173 1298.41 408.413 1305.17 408.413 1313.52C408.413 1321.85 415.173 1328.63 423.52 1328.63H555.653C564 1328.63 570.76 1321.85 570.76 1313.52C570.76 1305.17 564 1298.41 555.653 1298.41Z" fill="currentColor"/>
<path d="M555.653 1298.41H423.52C415.173 1298.41 408.413 1305.17 408.413 1313.52C408.413 1321.85 415.173 1328.63 423.52 1328.63H555.653C564 1328.63 570.76 1321.85 570.76 1313.52C570.76 1305.17 564 1298.41 555.653 1298.41Z" fill="black" fill-opacity="0.1"/>
<path d="M975.133 528.947C975.133 820.667 756.973 1255.43 487.853 1255.43C218.733 1255.43 0.559814 820.667 0.559814 528.947C0.559814 237.227 218.733 0.733359 487.853 0.733359C756.973 0.733359 975.133 237.227 975.133 528.947Z" fill="currentColor"/>
<path d="M549.04 1298.41C531.293 1285.91 519.893 1269.95 512.587 1254.2C504.387 1255.01 496.147 1255.43 487.853 1255.43C481.04 1255.43 474.28 1255.15 467.546 1254.6C460.226 1270.21 448.867 1286.01 431.253 1298.41H549.04Z" fill="currentColor"/>
<path d="M211.413 569.213C193.787 569.213 175.947 564.4 160.92 555.24C128.133 535.293 108.133 498.56 101.147 460.827C97.0133 438.533 96.9468 415.827 99.1068 393.214C120.627 308.28 168.453 234.48 233.467 183.733C246.947 173.213 261.16 163.693 276.027 155.267C280.347 152.813 284.72 150.467 289.147 148.2C291.707 147.373 294.347 146.92 297.12 146.92C301.347 146.92 305.907 147.974 311.067 150.414C332.773 160.64 334.36 192.213 323.693 213.72C313.04 235.226 294.187 251.8 283.413 273.253C262 315.88 276.48 366.707 287.347 413.147C298.213 459.6 302.427 515.373 267.8 548.187C252.707 562.48 232.227 569.213 211.413 569.213" fill="white" fill-opacity="0.2"/>
<path d="M785.133 110.4C863.72 204.187 911.613 328.747 911.613 465.414C911.613 757.147 693.44 1191.89 424.32 1191.89C350.973 1191.89 281.413 1159.6 219.013 1106.71C296.067 1196.16 388.48 1255.43 487.853 1255.43C756.973 1255.43 975.133 820.667 975.133 528.947C975.133 358.547 900.693 206.987 785.133 110.4Z" fill="black" fill-opacity="0.1"/>
</svg>`;let eL=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],eF=[-.6,-.3,0,.3,.6],eP=(e,t,a)=>{t.parentNode===a&&a.removeChild(t)},eS=(e,t,a,o,r,n)=>Array.from({length:t}).map((t,s)=>{let i=document.createElement("span");return i.innerHTML=eI,i.style.width=`${a}px`,i.style.position=r,i.style.color=n[s%n.length],i.style.zIndex=`${o}`,i.addEventListener("click",t=>{eP(t,i,e)},{once:!0}),e.appendChild(i),{element:i,differentiator:ev(0,eF.length)}}),eB=(e,t,a)=>{let{x:o,y:r,tiltAngle:n,angle2D:s,velocity:i,differentiator:l,wobble:c}=e.physics;e.physics.x+=.5*Math.cos(s)*i,e.physics.y+=.5*Math.sin(s)*i,e.physics.wobble+=0,e.physics.velocity*=a,e.physics.tiltAngle+=.1;let d=o+(eF[l]*t*c*c+20*Math.sin(c));e.element.style.transform=`translate3d(${d}px, ${r}px, 0) rotate3d(0, 0, 1, ${l%2?Math.sin(n/4)/3:Math.cos(n/4)/3}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},eG=(e,t,a)=>{let{angle:o=90,decay:r=.999,spread:n=50,startVelocity:s=3,elementCount:i=10,elementSize:l=20,lifetime:c=600,zIndex:d=0,position:u="fixed",colors:p=eL,onAnimationComplete:f}=a||{},m=eS(e,i,l,d,u,p).map(({element:e,differentiator:t})=>({element:e,physics:ex(o,n,s,t)}));eh({root:e,particles:m,decay:r,lifetime:c,updateParticle:eB,onFinish(){"function"==typeof f&&f(),t()}})},eH=(e,t,a)=>{let[o,r]=(0,i.useState)(!1),n=()=>{r(!1)};return{reward:(0,i.useCallback)(()=>{let o=eb(e);if(o)switch(r(!0),t){case"confetti":eE(o,n,a);break;case"emoji":ek(o,n,a);break;case"balloons":eG(o,n,a);break;default:console.error(`${t} is not a valid react-rewards type.`)}},[a,e,t]),isAnimating:o}};function eX(){let{reward:e,isAnimating:t}=eH("rewardId","confetti",{startVelocity:20,spread:100,lifetime:200}),a=()=>{q.success("1 Million Downloads!",{icon:"\uD83C\uDF89",className:"!bg-violet-300 !text-violet-50 font-medium !bg-opacity-50 backdrop-blur-lg",duration:5e3})};return(0,i.useEffect)(()=>{a()},[]),(0,s.jsxs)("div",{className:"bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden",children:[(0,s.jsx)("object",{className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",data:"https://source.unsplash.com/random/?abstract,nature",type:"image/jpg",children:(0,s.jsx)("img",{className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",src:"fallback.jpeg"})}),(0,s.jsxs)("nav",{className:"fixed z-50 top-0 w-screen p-5 flex flex-row items-center gap-16",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,s.jsx)("img",{src:"logo.png",alt:"Upscayl Logo",className:"w-8"}),(0,s.jsx)("h1",{className:"text-violet-100 font-extrabold text-lg",children:"Upscayl"})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,s.jsx)("a",{href:"https://buymeacoffee.com/fossisthefuture",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("button",{className:"px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all",children:"Donate"})}),(0,s.jsx)("a",{href:"https://github.com/upscayl",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("button",{className:"px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all",children:"GitHub"})})]})]}),(0,s.jsx)(em,{children:e=>(0,s.jsx)(ed,{toast:e,children(t){let{icon:a,message:o}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{onClick:()=>q.dismiss(e.id),className:"flex items-center justify-center",children:[a,o]})})}})}),(0,s.jsxs)("div",{className:"absolute z-40 inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center",children:[(0,s.jsx)("span",{id:"rewardId"}),(0,s.jsx)(y,{className:"my-atropos",shadowScale:.1,highlight:!1,children:(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)("h1",{className:"font-primary font-extrabold text-violet-100 text-3xl sm:text-4xl md:text-5xl md:leading-tight","data-atropos-offset":"5",children:"Upscayl"}),(0,s.jsx)("h3",{className:"text-2xl font-semibold text-violet-300","data-atropos-offset":"-5",children:"Free and Open Source AI Image Upscaler"}),(0,s.jsx)("div",{className:"px-5 sm:px-0",children:(0,s.jsx)("img",{src:"/screenshot.png",alt:"Upscayl Screenshot",className:"rounded-2xl inline-block",onMouseOver(){t||(e(),a())},"data-atropos-offset":"0"})}),(0,s.jsxs)("div",{className:"flex flex-col","data-atropos-offset":"-5",children:[(0,s.jsx)("p",{className:"text-violet-100 font-bold md:text-lg lg:text-xl","data-atropos-offset":"-10",children:"Download v2.5"}),(0,s.jsx)("div",{className:"w-full animate-zoom-in-out",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/downloads/upscayl/upscayl/total.svg?style=for-the-badge&logo=data:image/png;base64,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&labelColor=ede9fe&color=8e6bf6",alt:"Upscayl Download Counter",className:"mx-auto rounded-lg mt-2"})}),(0,s.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-center p-5","data-atropos-offset":"10",children:[(0,s.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v2.5.1/upscayl-2.5.1-mac.dmg",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("button",{className:"p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base",children:"MacOS \uD83C\uDF4E"})}),(0,s.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v2.5.1/upscayl-2.5.1-linux.AppImage",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("button",{className:"p-3 bg-green-300 rounded-full font-medium hover:scale-125 transition-all text-sm sm:text-base",children:"Linux\uD83D\uDC27"})}),(0,s.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v2.5.1/upscayl-2.5.1-win.exe",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("button",{className:"p-3 bg-blue-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base",children:"Windows \uD83D\uDC0C"})})]})]})]})}),(0,s.jsxs)("footer",{className:"fixed z-50 bottom-1 text-violet-200/50",children:["Made by"," ",(0,s.jsx)("a",{href:"https://github.com/TGS963/",className:"font-semibold",children:"TGS963"})," ","and"," ",(0,s.jsx)("a",{href:"https://github.com/NayamAmarshe/",className:"font-semibold",children:"Nayam Amarshe"}),(0,s.jsx)("br",{}),"with ⌨ \uD83D\uDDB1"]})]})]})}},4628:function(){}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);