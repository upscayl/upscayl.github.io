(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3354)}])},3354:function(e,t,a){"use strict";let o,r;a.r(t),a.d(t,{default:function(){return eJ}});var s,n=a(5893),i=a(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var c=function(e,t){return e.querySelector(t)},d=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach(function(a){void 0!==e[a]&&(t[a]=e[a])}),t},p=["component","children","rootChildren","scaleChildren","rotateChildren","className","scaleClassName","rotateClassName","innerClassName"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var f=["eventsEl","alwaysActive","activeOffset","shadowOffset","shadowScale","duration","rotate","rotateTouch","rotateXMax","rotateYMax","rotateXInvert","rotateYInvert","stretchX","stretchY","stretchZ","commonOrigin","shadow","highlight","onEnter","onLeave","onRotate"],m=function(e){var t={};return Object.keys(e).forEach(function(a){f.includes(a)||(t[a]=e[a])}),t},h=function(e){var t={};return Object.keys(e).forEach(function(a){f.includes(a)&&(t[a]=e[a])}),t},y=function(e){var t=e.component,a=e.children,o=e.rootChildren,r=e.scaleChildren,s=e.rotateChildren,n=e.className,f=e.scaleClassName,y=e.rotateClassName,g=e.innerClassName,x=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,p),v=(0,i.useRef)(null),b=(0,i.useRef)(null),w=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return!!e}).join(" ")},C=function(){var t,a,o,r,s,n,i,p,f,m,y,g,x,w,C,A,j,M,E,N,O,D,k,I,L,F,P,S,G,B,H,X,Q,z,T;b.current=(void 0===(t=u({el:v.current},h(e)))&&(t={}),w=(x=t).el,C=x.eventsEl,j=(A={__atropos__:!0,params:l({alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0,onEnter:null,onLeave:null,onRotate:null},d(t||{})),destroyed:!1,isActive:!1}).params,M=[],!function e(){g=requestAnimationFrame(function(){M.forEach(function(e){if("function"==typeof e)e();else{var t=e.element,a=e.prop,o=e.value;t.style[a]=o}}),M.splice(0,M.length),e()})}(),E=function(e,t){M.push({element:e,prop:"transitionDuration",value:t})},N=function(e,t){M.push({element:e,prop:"transitionTimingFunction",value:t})},O=function(e,t){M.push({element:e,prop:"transform",value:t})},D=function(e,t){M.push({element:e,prop:"opacity",value:t})},k=function(e,t){M.push({element:e,prop:"transformOrigin",value:t})},I=function(e,t,a,o){return e.addEventListener(t,a,o)},L=function(e,t,a,o){return e.removeEventListener(t,a,o)},F=function(e){var t=e.rotateXPercentage,a=void 0===t?0:t,o=e.rotateYPercentage,r=void 0===o?0:o,s=e.duration,n=e.opacityOnly,i=e.easeOut,l=function(e){if(e.dataset.atroposOpacity&&"string"==typeof e.dataset.atroposOpacity)return e.dataset.atroposOpacity.split(";").map(function(e){return parseFloat(e)})};w.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(function(e){E(e,s),N(e,i?"ease-out":"");var t=l(e);if(0===a&&0===r)n||O(e,"translate3d(0, 0, 0)"),t&&D(e,t[0]);else{var o=parseFloat(e.dataset.atroposOffset)/100;if(Number.isNaN(o)||n||O(e,"translate3d("+-(-r*o)+"%, "+-(a*o)+"%, 0)"),t){var c=t[0],d=t[1];D(e,c+(d-c)*Math.max(Math.abs(a),Math.abs(r))/100)}}})},P=function(e,t){var o,r=w!==C;if(s||(s=w.getBoundingClientRect()),r&&!n&&(n=C.getBoundingClientRect()),void 0===e&&void 0===t){var i=r?n:s;e=i.left+i.width/2,t=i.top+i.height/2}var l=0,c=0,d=s,u=d.top,f=d.left,m=d.width,h=d.height;if(r){var y=n,g=y.top,x=y.left,v=y.width,b=y.height,A=e-x,M=t-g;c=-(j.rotateYMax*(A-(m/2+(f-x)))/(v-m/2)*1),l=j.rotateXMax*(M-(h/2+(u-g)))/(b-h/2),o=e-f+"px "+(t-u)+"px"}else{var I=e-f,L=t-u;c=-(j.rotateYMax*(I-m/2)/(m/2)*1),l=j.rotateXMax*(L-h/2)/(h/2)}l=Math.min(Math.max(-l,-j.rotateXMax),j.rotateXMax),j.rotateXInvert&&(l=-l),c=Math.min(Math.max(-c,-j.rotateYMax),j.rotateYMax),j.rotateYInvert&&(c=-c);var P=l/j.rotateXMax*100,S=c/j.rotateYMax*100;O(a,"translate3d("+(r?S/100*j.stretchX:0)*(j.rotateYInvert?-1:1)+"%, "+-((r?P/100*j.stretchY:0)*(j.rotateXInvert?-1:1))+"%, "+-(r?Math.max(Math.abs(P),Math.abs(S))/100*j.stretchZ:0)+"px) rotateX("+l+"deg) rotateY("+c+"deg)"),o&&j.commonOrigin&&k(a,o),p&&(E(p,j.duration+"ms"),N(p,"ease-out"),O(p,"translate3d("+-(.25*S)+"%, "+.25*P+"%, 0)"),D(p,Math.max(Math.abs(P),Math.abs(S))/100)),F({rotateXPercentage:P,rotateYPercentage:S,duration:j.duration+"ms",easeOut:!0}),"function"==typeof j.onRotate&&j.onRotate(l,c)},S=function(){M.push(function(){return w.classList.add("atropos-active")}),E(a,j.duration+"ms"),N(a,"ease-out"),O(o,"translate3d(0,0, "+j.activeOffset+"px)"),E(o,j.duration+"ms"),N(o,"ease-out"),i&&(E(i,j.duration+"ms"),N(i,"ease-out")),A.isActive=!0},G=function(e){if(f=void 0,("pointerdown"!==e.type||"mouse"!==e.pointerType)&&("pointerenter"!==e.type||"mouse"===e.pointerType)){if("pointerdown"===e.type&&e.preventDefault(),m=e.clientX,y=e.clientY,j.alwaysActive){s=void 0,n=void 0;return}S(),"function"==typeof j.onEnter&&j.onEnter()}},B=function(e){!1===f&&e.cancelable&&e.preventDefault()},H=function(e){if(j.rotate&&A.isActive){if("mouse"!==e.pointerType){if(!j.rotateTouch)return;e.preventDefault()}var t=e.clientX,a=e.clientY,o=t-m,r=a-y;if("string"==typeof j.rotateTouch&&(0!==o||0!==r)&&void 0===f){if(o*o+r*r>=25){var s=180*Math.atan2(Math.abs(r),Math.abs(o))/Math.PI;f="scroll-y"===j.rotateTouch?s>45:90-s>45}!1===f&&(w.classList.add("atropos-rotate-touch"),e.cancelable&&e.preventDefault())}"mouse"!==e.pointerType&&f||P(t,a)}},X=function(e){if(s=void 0,n=void 0,A.isActive&&(!e||"pointerup"!==e.type||"mouse"!==e.pointerType)&&(!e||"pointerleave"!==e.type||"mouse"===e.pointerType)){if("string"==typeof j.rotateTouch&&f&&w.classList.remove("atropos-rotate-touch"),j.alwaysActive){P(),"function"==typeof j.onRotate&&j.onRotate(0,0),"function"==typeof j.onLeave&&j.onLeave();return}M.push(function(){return w.classList.remove("atropos-active")}),E(o,j.duration+"ms"),N(o,""),O(o,"translate3d(0,0, 0px)"),i&&(E(i,j.duration+"ms"),N(i,"")),p&&(E(p,j.duration+"ms"),N(p,""),O(p,"translate3d(0, 0, 0)"),D(p,0)),E(a,j.duration+"ms"),N(a,""),O(a,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),F({duration:j.duration+"ms"}),A.isActive=!1,"function"==typeof j.onRotate&&j.onRotate(0,0),"function"==typeof j.onLeave&&j.onLeave()}},Q=function(e){var t=e.target;!C.contains(t)&&t!==C&&A.isActive&&X()},A.destroy=function(){A.destroyed=!0,cancelAnimationFrame(g),L(document,"click",Q),L(C,"pointerdown",G),L(C,"pointerenter",G),L(C,"pointermove",H),L(C,"touchmove",B),L(C,"pointerleave",X),L(C,"pointerup",X),L(C,"lostpointercapture",X),delete w.__atropos__},"string"==typeof w&&(w=c(document,w)),w&&(w.__atropos__||(void 0!==C?"string"==typeof C&&(C=c(document,C)):C=w,Object.assign(A,{el:w}),a=c(w,".atropos-rotate"),o=c(w,".atropos-scale"),r=c(w,".atropos-inner"),w.__atropos__=A)),w&&C&&(j.shadow&&((i=c(w,".atropos-shadow"))||((i=document.createElement("span")).classList.add("atropos-shadow"),z=!0),O(i,"translate3d(0,0,-"+j.shadowOffset+"px) scale("+j.shadowScale+")"),z&&a.appendChild(i)),j.highlight&&((p=c(w,".atropos-highlight"))||((p=document.createElement("span")).classList.add("atropos-highlight"),T=!0),O(p,"translate3d(0,0,0)"),T&&r.appendChild(p)),j.rotateTouch&&("string"==typeof j.rotateTouch?w.classList.add("atropos-rotate-touch-"+j.rotateTouch):w.classList.add("atropos-rotate-touch")),c(w,"[data-atropos-opacity]")&&F({opacityOnly:!0}),I(document,"click",Q),I(C,"pointerdown",G),I(C,"pointerenter",G),I(C,"pointermove",H),I(C,"touchmove",B),I(C,"pointerleave",X),I(C,"pointerup",X),I(C,"lostpointercapture",X),j.alwaysActive&&(S(),P())),A)},A=function(){b.current&&(b.current.destroy(),b.current=null)};return(0,i.useEffect)(function(){return v.current&&C(),function(){A()}},[]),(0,i.useEffect)(function(){return b.current&&(b.current.params.onEnter=e.onEnter,b.current.params.onLeave=e.onLeave,b.current.params.onRotate=e.onRotate),function(){b.current&&(b.current.params.onEnter=null,b.current.params.onLeave=null,b.current.params.onRotate=null)}}),i.createElement(void 0===t?"div":t,u({className:w("atropos",void 0===n?"":n)},m(x),{ref:v}),i.createElement("span",{className:w("atropos-scale",void 0===f?"":f)},i.createElement("span",{className:w("atropos-rotate",void 0===y?"":y)},i.createElement("span",{className:w("atropos-inner",void 0===g?"":g)},a,(e.highlight||void 0===e.highlight)&&i.createElement("span",{className:"atropos-highlight"})),s,(e.shadow||void 0===e.shadow)&&i.createElement("span",{className:"atropos-shadow"})),r),o)};a(4628);let g={data:""},x=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g,v=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,w=/\n+/g,C=(e,t)=>{let a="",o="",r="";for(let s in e){let n=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+n+";":o+="f"==s[1]?C(n,s):s+"{"+C(n,"k"==s[1]?"":t)+"}":"object"==typeof n?o+=C(n,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=n&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=C.p?C.p(s,n):s+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+o},A={},j=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+j(e[a]);return t}return e},M=(e,t,a,o,r)=>{var s,n;let i=j(e),l=A[i]||(A[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!A[l]){let c=i!==e?e:(e=>{let t,a,o=[{}];for(;t=v.exec(e.replace(b,""));)t[4]?o.shift():t[3]?(a=t[3].replace(w," ").trim(),o.unshift(o[0][a]=o[0][a]||{})):o[0][t[1]]=t[2].replace(w," ").trim();return o[0]})(e);A[l]=C(r?{["@keyframes "+l]:c}:c,a?"":"."+l)}let d=a&&A.g?A.g:null;return a&&(A.g=A[l]),s=A[l],n=t,d?n.data=n.data.replace(d,s):-1===n.data.indexOf(s)&&(n.data=o?s+n.data:n.data+s),l},E=(e,t,a)=>e.reduce((e,o,r)=>{let s=t[r];if(s&&s.call){let n=s(a),i=n&&n.props&&n.props.className||/^go/.test(n)&&n;s=i?"."+i:n&&"object"==typeof n?n.props?"":C(n,""):!1===n?"":n}return e+o+(null==s?"":s)},"");function N(e){let t=this||{},a=e.call?e(t.p):e;return M(a.unshift?a.raw?E(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,x(t.target),t.g,t.o,t.k)}N.bind({g:1});let O,D,k,I=N.bind({k:1});function L(e,t){let a=this||{};return function(){let o=arguments;function r(s,n){let i=Object.assign({},s),l=i.className||r.className;a.p=Object.assign({theme:D&&D()},i),a.o=/ *go\d+/.test(l),i.className=N.apply(a,o)+(l?" "+l:""),t&&(i.ref=n);let c=e;return e[0]&&(c=i.as||e,delete i.as),k&&c[0]&&k(i),O(c,i)}return t?t(r):r}}var F=e=>"function"==typeof e,P=(e,t)=>F(e)?e(t):e,S=(o=0,()=>(++o).toString()),G=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},B=new Map,H=e=>{if(B.has(e))return;let t=setTimeout(()=>{B.delete(e),U({type:4,toastId:e})},1e3);B.set(e,t)},X=e=>{let t=B.get(e);t&&clearTimeout(t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&X(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?Q(e,{type:1,toast:a}):Q(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?H(o):e.toasts.forEach(e=>{H(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},z=[],T={toasts:[],pausedAt:void 0},U=e=>{T=Q(T,e),z.forEach(e=>{e(T)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,a]=(0,i.useState)(T);(0,i.useEffect)(()=>(z.push(a),()=>{let e=z.indexOf(a);e>-1&&z.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var a,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||Y[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},J=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||S()}),Z=e=>(t,a)=>{let o=J(t,e,a);return U({type:2,toast:o}),o.id},q=(e,t)=>Z("blank")(e,t);q.error=Z("error"),q.success=Z("success"),q.loading=Z("loading"),q.custom=Z("custom"),q.dismiss=e=>{U({type:3,toastId:e})},q.remove=e=>U({type:4,toastId:e}),q.promise=(e,t,a)=>{let o=q.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(q.success(P(t.success,e),{id:o,...a,...null==a?void 0:a.success}),e)).catch(e=>{q.error(P(t.error,e),{id:o,...a,...null==a?void 0:a.error})}),e};var W=(e,t)=>{U({type:1,toast:{id:e,height:t}})},$=()=>{U({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:a}=R(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&q.dismiss(t.id);return}return setTimeout(()=>q.dismiss(t.id),a)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,a]);let o=(0,i.useCallback)(()=>{a&&U({type:6,time:Date.now()})},[a]),r=(0,i.useCallback)((e,a)=>{let{reverseOrder:o=!1,gutter:r=8,defaultPosition:s}=a||{},n=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),i=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<i&&e.visible).length;return n.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:$,endPause:o,calculateOffset:r}}},V=L("div")`
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
`,er=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?i.createElement(eo,null,t):t:"blank"===a?null:i.createElement(ea,null,i.createElement(_,{...o}),"loading"!==a&&i.createElement(et,null,"error"===a?i.createElement(V,{...o}):i.createElement(ee,{...o})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,en=e=>`
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
`,ec=(e,t)=>{let a=e.includes("top")?1:-1,[o,r]=G()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(a),en(a)];return{animation:t?`${I(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${I(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ed=i.memo(({toast:e,position:t,style:a,children:o})=>{let r=e.height?ec(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(er,{toast:e}),n=i.createElement(el,{...e.ariaProps},P(e.message,e));return i.createElement(ei,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof o?o({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,C.p=void 0,O=s,D=void 0,k=void 0;var ep=({id:e,className:t,style:a,onHeightUpdate:o,children:r})=>{let s=i.useCallback(t=>{if(t){let a=()=>{o(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return i.createElement("div",{ref:s,className:t,style:a},r)},eu=(e,t)=>{let a=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...o}},ef=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:r,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=K(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let s=a.position||t,n=eu(s,c.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return i.createElement(ep,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ef:"",style:n},"custom"===a.type?P(a.message,a):r?r(a):i.createElement(ed,{toast:a,position:s}))}))};let eh=({root:e,particles:t,decay:a,lifetime:o,updateParticle:r,onFinish:s})=>{let n=0,i=()=>{t.forEach(e=>r(e,n/o,a)),(n+=1)<o?window.requestAnimationFrame(i):(t.forEach(t=>{if(t.element.parentNode===e)return e.removeChild(t.element)}),s())};window.requestAnimationFrame(i)},{PI:ey}=Math,eg=e=>e*(ey/180),ex=(e,t)=>{let a=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-a))+a},ev=(e,t,a,o)=>{let r=eg(e),s=eg(t),{random:n}=Math;return{x:0,y:0,z:0,height:0,wobble:10*n(),velocity:.5*a+n()*a,angle2D:-r+(.5*s-n()*s),angle3D:-(ey/4)+n()*(ey/2),tiltAngle:n()*ey,differentiator:o}},eb=e=>{let t=document.getElementById(e);return t||console.error(`Element with an ID of ${e} could not be found. Please provide a valid ID.`),t},ew=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],eC=[-.6,-.3,0,.3,.6],eA=(e,t,a,o,r,s)=>Array.from({length:t}).map((t,n)=>{let i=document.createElement("span");return i.style["background-color"]=s[n%s.length],i.style.width=`${a}px`,i.style.height=`${a}px`,i.style.position=r,i.style.zIndex=`${o}`,e.appendChild(i),{element:i,differentiator:ex(0,eC.length)}}),ej=(e,t,a)=>{let{x:o,y:r,tiltAngle:s,wobble:n,angle2D:i,angle3D:l,velocity:c,differentiator:d}=e.physics;e.physics.x+=Math.cos(i)*c,e.physics.y+=Math.sin(i)*c,e.physics.z+=Math.sin(l)*c,e.physics.wobble+=.05,e.physics.velocity*=a,e.physics.y+=3.5,e.physics.tiltAngle+=.15;let p=o+(eC[d]*t*n*n+20*(d%2?Math.sin(n/4):Math.cos(n/4)));e.element.style.transform=`translate3d(${p}px, ${r+5*Math.sin(n)}px, 0) rotate3d(1, 1, 1, ${d%2?s:-1*s}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},eM=(e,t,a)=>{let{elementCount:o=50,elementSize:r=8,colors:s=ew,angle:n=90,spread:i=45,decay:l=.94,lifetime:c=200,startVelocity:d=35,zIndex:p=0,position:u="fixed",onAnimationComplete:f}=a||{},m=eA(e,o,r,p,u,s).map(({element:e,differentiator:t})=>({element:e,physics:ev(n,i,d,t)}));eh({root:e,particles:m,decay:l,lifetime:c,updateParticle:ej,onFinish(){"function"==typeof f&&f(),t()}})},eE=["\uD83E\uDD13","\uD83D\uDE0A","\uD83E\uDD73"],eN=[-.6,-.3,0,.3,.6],eO=(e,t,a,o,r,s)=>Array.from({length:t}).map((t,n)=>{let i=document.createElement("span");return i.innerHTML=s[n%s.length],i.style.fontSize=`${a+ex(0,4)}px`,i.style.position=r,i.style.zIndex=`${o}`,e.appendChild(i),{element:i,differentiator:ex(0,eN.length)}}),eD=(e,t,a)=>{let{x:o,y:r,tiltAngle:s,angle2D:n,velocity:i,differentiator:l,wobble:c}=e.physics;e.physics.x+=Math.cos(n)*i,e.physics.y+=Math.sin(n)*i,e.physics.wobble+=0,e.physics.velocity*=a,e.physics.y+=5,e.physics.tiltAngle+=.05;let d=o+(eN[l]*t*c*c+20*Math.sin(c/4));e.element.style.transform=`translate3d(${d}px, ${r}px, 0) rotate3d(0, 0, 1, ${l%2?s:-1*s}rad)`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},ek=(e,t,a)=>{let{elementCount:o=20,elementSize:r=25,emoji:s=eE,angle:n=90,spread:i=45,decay:l=.94,lifetime:c=200,startVelocity:d=35,zIndex:p=0,position:u="fixed",onAnimationComplete:f}=a||{},m=eO(e,o,r,p,u,s).map(({element:e,differentiator:t})=>({element:e,physics:ev(n,i,d,t)}));eh({root:e,particles:m,decay:l,lifetime:c,updateParticle:eD,onFinish(){"function"==typeof f&&f(),t()}})};var eI=`<svg width="100%" viewBox="0 0 976 3040" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M489.693 1269.49C489.773 1378.79 410.493 1466.8 389.107 1571.11C384.147 1595.33 382.893 1620.12 386.187 1644.64C389.44 1668.83 399.28 1691.16 409.04 1713.29C419.253 1736.44 429.28 1760.11 429.453 1785.83C429.64 1812.27 416.307 1836.8 408.933 1861.59C396 1905.15 409.613 1948.88 425.213 1989.73C442.04 2033.83 461.387 2077.87 456.6 2126.17C453.92 2153.15 444.147 2179.13 434.2 2204.13C424.173 2229.35 413.72 2254.28 405.507 2280.17C389.213 2331.51 379.493 2385.83 378.267 2439.72C377.693 2464.89 380.333 2490.25 388.667 2514.11C397.053 2538.09 412.6 2558.75 424.733 2580.84C449.907 2626.64 458.453 2681 451.053 2732.52C443.853 2782.56 414.227 2825.99 408.893 2876.35C404.44 2918.39 416.733 2961.63 440.08 2996.53C450.373 3011.91 463.267 3025.44 477.867 3036.75C480.773 3039 484.88 3034.95 481.947 3032.68C446.147 3004.96 423.24 2964.2 415.907 2919.71C412.107 2896.61 413.627 2872.95 419.427 2850.35C426.053 2824.51 438.067 2800.36 446.667 2775.17C462.44 2729 463.147 2678.51 450.92 2631.45C444.733 2607.64 434.453 2585.4 421.893 2564.32C407.933 2540.91 394.307 2518.68 388.32 2491.71C382.493 2465.45 383.413 2438 385.56 2411.37C387.853 2382.85 392.467 2354.56 398.827 2326.67C405 2299.61 413.253 2273.05 423.107 2247.12C432.533 2222.27 443.533 2198.05 451.867 2172.8C459.707 2149.04 464.387 2124.29 463 2099.23C461.773 2077.19 455.64 2055.65 448.467 2034.89C433.587 1991.8 411.307 1949.77 409.413 1903.37C408.36 1877.76 417.12 1854.67 425.587 1830.97C433.68 1808.33 437.44 1786.41 432.787 1762.6C428.307 1739.63 417.333 1718.23 408.12 1696.91C397.267 1671.77 390.413 1646.41 390.013 1618.89C388.387 1509.52 469.707 1420.85 490.813 1316.72C493.973 1301.19 495.467 1285.33 495.453 1269.49C495.453 1265.77 489.693 1265.77 489.693 1269.49" stroke="#7A7E82" stroke-width="4"/>
<path d="M555.653 1298.41H423.52C415.173 1298.41 408.413 1305.17 408.413 1313.52C408.413 1321.85 415.173 1328.63 423.52 1328.63H555.653C564 1328.63 570.76 1321.85 570.76 1313.52C570.76 1305.17 564 1298.41 555.653 1298.41Z" fill="currentColor"/>
<path d="M555.653 1298.41H423.52C415.173 1298.41 408.413 1305.17 408.413 1313.52C408.413 1321.85 415.173 1328.63 423.52 1328.63H555.653C564 1328.63 570.76 1321.85 570.76 1313.52C570.76 1305.17 564 1298.41 555.653 1298.41Z" fill="black" fill-opacity="0.1"/>
<path d="M975.133 528.947C975.133 820.667 756.973 1255.43 487.853 1255.43C218.733 1255.43 0.559814 820.667 0.559814 528.947C0.559814 237.227 218.733 0.733359 487.853 0.733359C756.973 0.733359 975.133 237.227 975.133 528.947Z" fill="currentColor"/>
<path d="M549.04 1298.41C531.293 1285.91 519.893 1269.95 512.587 1254.2C504.387 1255.01 496.147 1255.43 487.853 1255.43C481.04 1255.43 474.28 1255.15 467.546 1254.6C460.226 1270.21 448.867 1286.01 431.253 1298.41H549.04Z" fill="currentColor"/>
<path d="M211.413 569.213C193.787 569.213 175.947 564.4 160.92 555.24C128.133 535.293 108.133 498.56 101.147 460.827C97.0133 438.533 96.9468 415.827 99.1068 393.214C120.627 308.28 168.453 234.48 233.467 183.733C246.947 173.213 261.16 163.693 276.027 155.267C280.347 152.813 284.72 150.467 289.147 148.2C291.707 147.373 294.347 146.92 297.12 146.92C301.347 146.92 305.907 147.974 311.067 150.414C332.773 160.64 334.36 192.213 323.693 213.72C313.04 235.226 294.187 251.8 283.413 273.253C262 315.88 276.48 366.707 287.347 413.147C298.213 459.6 302.427 515.373 267.8 548.187C252.707 562.48 232.227 569.213 211.413 569.213" fill="white" fill-opacity="0.2"/>
<path d="M785.133 110.4C863.72 204.187 911.613 328.747 911.613 465.414C911.613 757.147 693.44 1191.89 424.32 1191.89C350.973 1191.89 281.413 1159.6 219.013 1106.71C296.067 1196.16 388.48 1255.43 487.853 1255.43C756.973 1255.43 975.133 820.667 975.133 528.947C975.133 358.547 900.693 206.987 785.133 110.4Z" fill="black" fill-opacity="0.1"/>
</svg>`;let eL=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],eF=[-.6,-.3,0,.3,.6],eP=(e,t,a)=>{t.parentNode===a&&a.removeChild(t)},eS=(e,t,a,o,r,s)=>Array.from({length:t}).map((t,n)=>{let i=document.createElement("span");return i.innerHTML=eI,i.style.width=`${a}px`,i.style.position=r,i.style.color=s[n%s.length],i.style.zIndex=`${o}`,i.addEventListener("click",t=>{eP(t,i,e)},{once:!0}),e.appendChild(i),{element:i,differentiator:ex(0,eF.length)}}),eG=(e,t,a)=>{let{x:o,y:r,tiltAngle:s,angle2D:n,velocity:i,differentiator:l,wobble:c}=e.physics;e.physics.x+=.5*Math.cos(n)*i,e.physics.y+=.5*Math.sin(n)*i,e.physics.wobble+=0,e.physics.velocity*=a,e.physics.tiltAngle+=.1;let d=o+(eF[l]*t*c*c+20*Math.sin(c));e.element.style.transform=`translate3d(${d}px, ${r}px, 0) rotate3d(0, 0, 1, ${l%2?Math.sin(s/4)/3:Math.cos(s/4)/3}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},eB=(e,t,a)=>{let{angle:o=90,decay:r=.999,spread:s=50,startVelocity:n=3,elementCount:i=10,elementSize:l=20,lifetime:c=600,zIndex:d=0,position:p="fixed",colors:u=eL,onAnimationComplete:f}=a||{},m=eS(e,i,l,d,p,u).map(({element:e,differentiator:t})=>({element:e,physics:ev(o,s,n,t)}));eh({root:e,particles:m,decay:r,lifetime:c,updateParticle:eG,onFinish(){"function"==typeof f&&f(),t()}})},eH=(e,t,a)=>{let[o,r]=(0,i.useState)(!1),s=()=>{r(!1)};return{reward:(0,i.useCallback)(()=>{let o=eb(e);if(o)switch(r(!0),t){case"confetti":eM(o,s,a);break;case"emoji":ek(o,s,a);break;case"balloons":eB(o,s,a);break;default:console.error(`${t} is not a valid react-rewards type.`)}},[a,e,t]),isAnimating:o}},eX=()=>(0,n.jsxs)("footer",{className:"fixed z-50 bottom-1 text-violet-200/50 text-xs xs:text-base",children:["Made by"," ",(0,n.jsx)("a",{href:"https://github.com/TGS963/",className:"font-semibold",children:"TGS963"})," ","and"," ",(0,n.jsx)("a",{href:"https://github.com/NayamAmarshe/",className:"font-semibold",children:"Nayam Amarshe"}),(0,n.jsx)("br",{}),"with ⌨ \uD83D\uDDB1"]}),eQ=e=>{let{href:t,text:a}=e;return(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("button",{className:"px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold text-xs xs:text-base hover:scale-110 transition-all",children:a})})},ez=()=>(0,n.jsxs)("nav",{className:"fixed z-50 top-0 w-screen p-5 flex flex-row items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,n.jsx)("img",{src:"logo.png",alt:"Upscayl Logo",className:"xs:w-8 w-5"}),(0,n.jsx)("h1",{className:"text-violet-100 font-extrabold xs:text-xl text-sm",children:"Upscayl"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,n.jsx)(eQ,{href:"https://github.com/upscayl/upscayl",text:"GitHub"}),(0,n.jsx)(eQ,{href:"https://buymeacoffee.com/fossisthefuture",text:"Donate"})]})]}),eT=()=>(0,n.jsx)("object",{className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",data:"https://source.unsplash.com/random/?abstract,nature",type:"image/jpg",children:(0,n.jsx)("img",{alt:"Fallback",className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",src:"fallback.jpeg"})}),eU=e=>{let{href:t,title:a,className:o}=e;return(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("button",{className:"p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-xs xs:text-base ".concat(o),children:a})})},eY=()=>(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("img",{src:"https://img.shields.io/github/downloads/upscayl/upscayl/total.svg?style=for-the-badge&logo=data:image/png;base64,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&labelColor=ede9fe&color=8e6bf6",alt:"Upscayl Download Counter",className:"mx-auto rounded-lg mt-2"})}),eR=()=>(0,n.jsxs)("div",{className:"gap-2 first-letter:sm:gap-8 flex flex-col",children:[(0,n.jsx)("h1",{className:"font-primary font-extrabold text-violet-100 text-2xl sm:text-4xl md:text-5xl md:leading-tight","data-atropos-offset":"5",children:"Upscayl"}),(0,n.jsx)("h3",{className:"xs:text-2xl text-base font-semibold text-violet-300","data-atropos-offset":"-5",children:"Free and Open Source AI Image Upscaler"}),(0,n.jsxs)("div",{className:"px-5 sm:px-0",children:[(0,n.jsx)("img",{src:"/screenshot.png",alt:"Upscayl Screenshot",className:"rounded-2xl inline-block sm:w-full",onMouseOver(){},"data-atropos-offset":"0"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)(eQ,{text:"Upscayl Guide",href:"https://github.com/upscayl/upscayl/wiki"})})]}),(0,n.jsxs)("div",{className:"flex flex-col mt-2","data-atropos-offset":"-5",children:[(0,n.jsx)("p",{className:"text-violet-100 font-bold md:text-lg lg:text-xl text-xs xs:text-lg","data-atropos-offset":"-10",children:"Download v2.5.5"}),(0,n.jsx)(eY,{}),(0,n.jsxs)("div",{className:"flex flex-row gap-2 sm:gap-5 items-center justify-center mt-4 sm:p-5 sm:mt-0","data-atropos-offset":"10",children:[(0,n.jsx)(eU,{title:"macOS \uD83C\uDF4E",href:"https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-mac.dmg",className:"bg-orange-300"}),(0,n.jsx)(eU,{title:"Linux \uD83D\uDC27",href:"https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-linux.AppImage",className:"bg-green-300"}),(0,n.jsx)(eU,{title:"Windows \uD83D\uDC0C",href:"https://github.com/upscayl/upscayl/releases/download/v2.5.5/upscayl-2.5.5-win.exe",className:"bg-blue-300"})]})]})]});function eJ(){let{reward:e,isAnimating:t}=eH("rewardId","confetti",{startVelocity:20,spread:100,lifetime:200});return(0,i.useEffect)(()=>{},[]),(0,n.jsxs)("div",{className:"bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden",children:[(0,n.jsx)(eT,{}),(0,n.jsx)(ez,{}),(0,n.jsxs)("div",{className:"absolute z-40 inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center",children:[(0,n.jsx)("span",{id:"rewardId"}),(0,n.jsx)(y,{className:"my-atropos",shadowScale:.1,highlight:!1,children:(0,n.jsx)(eR,{})}),(0,n.jsx)(eX,{})]}),(0,n.jsx)(em,{children:e=>(0,n.jsx)(ed,{toast:e,children(t){let{icon:a,message:o}=t;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("button",{onClick:()=>q.dismiss(e.id),className:"flex items-center justify-center",children:[a,o]})})}})})]})}},4628:function(){}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);