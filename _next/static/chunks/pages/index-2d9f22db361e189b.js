(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9891)}])},9891:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return h}});var o=a(5893),n=a(7294);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}var s=function(t,e){return t.querySelector(e)},i=function(t){void 0===t&&(t={});var e={};return Object.keys(t).forEach(function(a){void 0!==t[a]&&(e[a]=t[a])}),e},l=["component","children","rootChildren","scaleChildren","rotateChildren","className","scaleClassName","rotateClassName","innerClassName"];function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}var u=["eventsEl","alwaysActive","activeOffset","shadowOffset","shadowScale","duration","rotate","rotateTouch","rotateXMax","rotateYMax","rotateXInvert","rotateYInvert","stretchX","stretchY","stretchZ","commonOrigin","shadow","highlight","onEnter","onLeave","onRotate"],f=function(t){var e={};return Object.keys(t).forEach(function(a){u.includes(a)||(e[a]=t[a])}),e},d=function(t){var e={};return Object.keys(t).forEach(function(a){u.includes(a)&&(e[a]=t[a])}),e},p=function(t){var e=t.component,a=t.children,o=t.rootChildren,u=t.scaleChildren,p=t.rotateChildren,h=t.className,m=t.scaleClassName,v=t.rotateClassName,g=t.innerClassName,x=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,l),A=(0,n.useRef)(null),y=(0,n.useRef)(null),w=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter(function(t){return!!t}).join(" ")},b=function(){var e,a,o,n,l,u,f,p,h,m,v,g,x,w,b,N,j,C,O,E,M,D,L,I,k,G,P,X,Q,S,B,U,F,Y,R;y.current=(void 0===(e=c({el:A.current},d(t)))&&(e={}),w=(x=e).el,b=x.eventsEl,j=(N={__atropos__:!0,params:r({alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0,onEnter:null,onLeave:null,onRotate:null},i(e||{})),destroyed:!1,isActive:!1}).params,C=[],!function t(){g=requestAnimationFrame(function(){C.forEach(function(t){if("function"==typeof t)t();else{var e=t.element,a=t.prop,o=t.value;e.style[a]=o}}),C.splice(0,C.length),t()})}(),O=function(t,e){C.push({element:t,prop:"transitionDuration",value:e})},E=function(t,e){C.push({element:t,prop:"transitionTimingFunction",value:e})},M=function(t,e){C.push({element:t,prop:"transform",value:e})},D=function(t,e){C.push({element:t,prop:"opacity",value:e})},L=function(t,e){C.push({element:t,prop:"transformOrigin",value:e})},I=function(t,e,a,o){return t.addEventListener(e,a,o)},k=function(t,e,a,o){return t.removeEventListener(e,a,o)},G=function(t){var e=t.rotateXPercentage,a=void 0===e?0:e,o=t.rotateYPercentage,n=void 0===o?0:o,r=t.duration,s=t.opacityOnly,i=t.easeOut,l=function(t){if(t.dataset.atroposOpacity&&"string"==typeof t.dataset.atroposOpacity)return t.dataset.atroposOpacity.split(";").map(function(t){return parseFloat(t)})};w.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(function(t){O(t,r),E(t,i?"ease-out":"");var e=l(t);if(0===a&&0===n)s||M(t,"translate3d(0, 0, 0)"),e&&D(t,e[0]);else{var o=parseFloat(t.dataset.atroposOffset)/100;if(Number.isNaN(o)||s||M(t,"translate3d("+-(-n*o)+"%, "+-(a*o)+"%, 0)"),e){var c=e[0],u=e[1];D(t,c+(u-c)*Math.max(Math.abs(a),Math.abs(n))/100)}}})},P=function(t,e){var o,n=w!==b;if(l||(l=w.getBoundingClientRect()),n&&!u&&(u=b.getBoundingClientRect()),void 0===t&&void 0===e){var r=n?u:l;t=r.left+r.width/2,e=r.top+r.height/2}var s=0,i=0,c=l,f=c.top,d=c.left,h=c.width,m=c.height;if(n){var v=u,g=v.top,x=v.left,A=v.width,y=v.height,N=t-x,C=e-g;i=-(j.rotateYMax*(N-(h/2+(d-x)))/(A-h/2)*1),s=j.rotateXMax*(C-(m/2+(f-g)))/(y-m/2),o=t-d+"px "+(e-f)+"px"}else{var I=t-d,k=e-f;i=-(j.rotateYMax*(I-h/2)/(h/2)*1),s=j.rotateXMax*(k-m/2)/(m/2)}s=Math.min(Math.max(-s,-j.rotateXMax),j.rotateXMax),j.rotateXInvert&&(s=-s),i=Math.min(Math.max(-i,-j.rotateYMax),j.rotateYMax),j.rotateYInvert&&(i=-i);var P=s/j.rotateXMax*100,X=i/j.rotateYMax*100;M(a,"translate3d("+(n?X/100*j.stretchX:0)*(j.rotateYInvert?-1:1)+"%, "+-((n?P/100*j.stretchY:0)*(j.rotateXInvert?-1:1))+"%, "+-(n?Math.max(Math.abs(P),Math.abs(X))/100*j.stretchZ:0)+"px) rotateX("+s+"deg) rotateY("+i+"deg)"),o&&j.commonOrigin&&L(a,o),p&&(O(p,j.duration+"ms"),E(p,"ease-out"),M(p,"translate3d("+-(.25*X)+"%, "+.25*P+"%, 0)"),D(p,Math.max(Math.abs(P),Math.abs(X))/100)),G({rotateXPercentage:P,rotateYPercentage:X,duration:j.duration+"ms",easeOut:!0}),"function"==typeof j.onRotate&&j.onRotate(s,i)},X=function(){C.push(function(){return w.classList.add("atropos-active")}),O(a,j.duration+"ms"),E(a,"ease-out"),M(o,"translate3d(0,0, "+j.activeOffset+"px)"),O(o,j.duration+"ms"),E(o,"ease-out"),f&&(O(f,j.duration+"ms"),E(f,"ease-out")),N.isActive=!0},Q=function(t){if(h=void 0,("pointerdown"!==t.type||"mouse"!==t.pointerType)&&("pointerenter"!==t.type||"mouse"===t.pointerType)){if("pointerdown"===t.type&&t.preventDefault(),m=t.clientX,v=t.clientY,j.alwaysActive){l=void 0,u=void 0;return}X(),"function"==typeof j.onEnter&&j.onEnter()}},S=function(t){!1===h&&t.cancelable&&t.preventDefault()},B=function(t){if(j.rotate&&N.isActive){if("mouse"!==t.pointerType){if(!j.rotateTouch)return;t.preventDefault()}var e=t.clientX,a=t.clientY,o=e-m,n=a-v;if("string"==typeof j.rotateTouch&&(0!==o||0!==n)&&void 0===h){if(o*o+n*n>=25){var r=180*Math.atan2(Math.abs(n),Math.abs(o))/Math.PI;h="scroll-y"===j.rotateTouch?r>45:90-r>45}!1===h&&(w.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}"mouse"!==t.pointerType&&h||P(e,a)}},U=function(t){if(l=void 0,u=void 0,N.isActive&&(!t||"pointerup"!==t.type||"mouse"!==t.pointerType)&&(!t||"pointerleave"!==t.type||"mouse"===t.pointerType)){if("string"==typeof j.rotateTouch&&h&&w.classList.remove("atropos-rotate-touch"),j.alwaysActive){P(),"function"==typeof j.onRotate&&j.onRotate(0,0),"function"==typeof j.onLeave&&j.onLeave();return}C.push(function(){return w.classList.remove("atropos-active")}),O(o,j.duration+"ms"),E(o,""),M(o,"translate3d(0,0, 0px)"),f&&(O(f,j.duration+"ms"),E(f,"")),p&&(O(p,j.duration+"ms"),E(p,""),M(p,"translate3d(0, 0, 0)"),D(p,0)),O(a,j.duration+"ms"),E(a,""),M(a,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),G({duration:j.duration+"ms"}),N.isActive=!1,"function"==typeof j.onRotate&&j.onRotate(0,0),"function"==typeof j.onLeave&&j.onLeave()}},F=function(t){var e=t.target;!b.contains(e)&&e!==b&&N.isActive&&U()},N.destroy=function(){N.destroyed=!0,cancelAnimationFrame(g),k(document,"click",F),k(b,"pointerdown",Q),k(b,"pointerenter",Q),k(b,"pointermove",B),k(b,"touchmove",S),k(b,"pointerleave",U),k(b,"pointerup",U),k(b,"lostpointercapture",U),delete w.__atropos__},"string"==typeof w&&(w=s(document,w)),w&&(w.__atropos__||(void 0!==b?"string"==typeof b&&(b=s(document,b)):b=w,Object.assign(N,{el:w}),a=s(w,".atropos-rotate"),o=s(w,".atropos-scale"),n=s(w,".atropos-inner"),w.__atropos__=N)),w&&b&&(j.shadow&&((f=s(w,".atropos-shadow"))||((f=document.createElement("span")).classList.add("atropos-shadow"),Y=!0),M(f,"translate3d(0,0,-"+j.shadowOffset+"px) scale("+j.shadowScale+")"),Y&&a.appendChild(f)),j.highlight&&((p=s(w,".atropos-highlight"))||((p=document.createElement("span")).classList.add("atropos-highlight"),R=!0),M(p,"translate3d(0,0,0)"),R&&n.appendChild(p)),j.rotateTouch&&("string"==typeof j.rotateTouch?w.classList.add("atropos-rotate-touch-"+j.rotateTouch):w.classList.add("atropos-rotate-touch")),s(w,"[data-atropos-opacity]")&&G({opacityOnly:!0}),I(document,"click",F),I(b,"pointerdown",Q),I(b,"pointerenter",Q),I(b,"pointermove",B),I(b,"touchmove",S),I(b,"pointerleave",U),I(b,"pointerup",U),I(b,"lostpointercapture",U),j.alwaysActive&&(X(),P())),N)},N=function(){y.current&&(y.current.destroy(),y.current=null)};return(0,n.useEffect)(function(){return A.current&&b(),function(){N()}},[]),(0,n.useEffect)(function(){return y.current&&(y.current.params.onEnter=t.onEnter,y.current.params.onLeave=t.onLeave,y.current.params.onRotate=t.onRotate),function(){y.current&&(y.current.params.onEnter=null,y.current.params.onLeave=null,y.current.params.onRotate=null)}}),n.createElement(void 0===e?"div":e,c({className:w("atropos",void 0===h?"":h)},f(x),{ref:A}),n.createElement("span",{className:w("atropos-scale",void 0===m?"":m)},n.createElement("span",{className:w("atropos-rotate",void 0===v?"":v)},n.createElement("span",{className:w("atropos-inner",void 0===g?"":g)},a,(t.highlight||void 0===t.highlight)&&n.createElement("span",{className:"atropos-highlight"})),p,(t.shadow||void 0===t.shadow)&&n.createElement("span",{className:"atropos-shadow"})),u),o)};function h(){return(0,o.jsxs)("div",{className:"bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden",children:[(0,o.jsx)("object",{className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",data:"https://source.unsplash.com/random",type:"image/jpg",children:(0,o.jsx)("img",{className:"absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50",src:"fallback.jpeg"})}),(0,o.jsxs)("nav",{className:"fixed z-50 top-0 w-screen p-5 flex flex-row items-center gap-16",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,o.jsx)("img",{src:"logo.png",alt:"Upscayl Logo",className:"w-8"}),(0,o.jsx)("h1",{className:"text-violet-100 font-extrabold text-lg",children:"Upscayl"})]}),(0,o.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,o.jsx)("a",{href:"https://buymeacoffee.com/fossisthefuture",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("button",{className:"px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all",children:"Donate"})}),(0,o.jsx)("a",{href:"https://github.com/upscayl",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("button",{className:"px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all",children:"GitHub"})})]})]}),(0,o.jsxs)("div",{className:"absolute inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center",children:[(0,o.jsx)(p,{className:"my-atropos",shadowScale:.1,highlight:!1,children:(0,o.jsxs)("div",{className:"space-y-8",children:[(0,o.jsx)("h1",{className:"font-primary font-extrabold text-violet-100 text-3xl sm:text-4xl md:text-5xl md:leading-tight","data-atropos-offset":"5",children:"Upscayl"}),(0,o.jsx)("h3",{className:"text-2xl font-semibold text-violet-300","data-atropos-offset":"-5",children:"Free and Open Source AI Image Upscaler"}),(0,o.jsx)("div",{className:"px-5 sm:px-0",children:(0,o.jsx)("img",{src:"/screenshot.png",alt:"Upscayl Screenshot",className:"rounded-xl","data-atropos-offset":"0"})}),(0,o.jsxs)("div",{className:"flex flex-col","data-atropos-offset":"-5",children:[(0,o.jsx)("p",{className:"text-violet-100 font-bold md:text-lg lg:text-xl","data-atropos-offset":"-10",children:"Download"}),(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/downloads/upscayl/upscayl/total.svg?style=for-the-badge&logo=data:image/png;base64,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&labelColor=ede9fe&color=8e6bf6",alt:"Upscayl Download Counter",className:"mx-auto rounded-lg mt-2"})}),(0,o.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-center p-5","data-atropos-offset":"10",children:[(0,o.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-1.5.5.dmg",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("button",{className:"p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base",children:"MacOS \uD83C\uDF4E"})}),(0,o.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-1.5.5.AppImage",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("button",{className:"p-3 bg-green-300 rounded-full font-medium hover:scale-125 transition-all text-sm sm:text-base",children:"Linux\uD83D\uDC27"})}),(0,o.jsx)("a",{href:"https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-Setup-1.5.5.exe",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("button",{className:"p-3 bg-blue-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base",children:"Windows \uD83D\uDC0C"})})]})]})]})}),(0,o.jsxs)("footer",{className:"fixed bottom-1 text-violet-200/50",children:["Made by"," ",(0,o.jsx)("a",{href:"https://github.com/TGS963/",className:"font-semibold",children:"TGS963"})," ","and"," ",(0,o.jsx)("a",{href:"https://github.com/NayamAmarshe/",className:"font-semibold",children:"Nayam Amarshe"}),(0,o.jsx)("br",{}),"with ⌨ \uD83D\uDDB1"]})]})]})}a(4628)},4628:function(){}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);