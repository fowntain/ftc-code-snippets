"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60755],{38406:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,c;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(o of t.entries())if(!r.has(o[0]))return!1;for(o of t.entries())if(!e(o[1],r.get(o[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(o of t.entries())if(!r.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(t[o]!==r[o])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(c=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,c[o]))return!1;for(o=n;0!==o--;){var u=c[o];if(("_owner"!==u||!t.$$typeof)&&!e(t[u],r[u]))return!1}return!0}return t!==t&&r!==r}},60755:function(e,t,r){var n=r(61505),o=r.n(n),c=r(32735),u=r(38406),f=r.n(u),i=r(12505),s=r.n(i);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"===typeof Symbol&&Symbol.for,y=p?Symbol.for("react.element"):60103,d=p?Symbol.for("react.portal"):60106,b=p?Symbol.for("react.fragment"):60107,m=p?Symbol.for("react.strict_mode"):60108,g=p?Symbol.for("react.profiler"):60114,v=p?Symbol.for("react.provider"):60109,O=p?Symbol.for("react.context"):60110,S=p?Symbol.for("react.async_mode"):60111,j=p?Symbol.for("react.concurrent_mode"):60111,h=p?Symbol.for("react.forward_ref"):60112,E=p?Symbol.for("react.suspense"):60113,w=p?Symbol.for("react.suspense_list"):60120,A=p?Symbol.for("react.memo"):60115,C=p?Symbol.for("react.lazy"):60116,$=p?Symbol.for("react.block"):60121,L=p?Symbol.for("react.fundamental"):60117,P=p?Symbol.for("react.responder"):60118,T=p?Symbol.for("react.scope"):60119;function M(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case S:case j:case b:case g:case m:case E:return e;default:switch(e=e&&e.$$typeof){case O:case h:case C:case A:case v:return e;default:return t}}case d:return t}}}function _(e){return M(e)===j}var x={AsyncMode:S,ConcurrentMode:j,ContextConsumer:O,ContextProvider:v,Element:y,ForwardRef:h,Fragment:b,Lazy:C,Memo:A,Portal:d,Profiler:g,StrictMode:m,Suspense:E,isAsyncMode:function(e){return _(e)||M(e)===S},isConcurrentMode:_,isContextConsumer:function(e){return M(e)===O},isContextProvider:function(e){return M(e)===v},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return M(e)===h},isFragment:function(e){return M(e)===b},isLazy:function(e){return M(e)===C},isMemo:function(e){return M(e)===A},isPortal:function(e){return M(e)===d},isProfiler:function(e){return M(e)===g},isStrictMode:function(e){return M(e)===m},isSuspense:function(e){return M(e)===E},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===b||e===j||e===g||e===m||e===E||e===w||"object"===typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===A||e.$$typeof===v||e.$$typeof===O||e.$$typeof===h||e.$$typeof===L||e.$$typeof===P||e.$$typeof===T||e.$$typeof===$)},typeOf:M},k=(l((function(e,t){0})),l((function(e){e.exports=x})),Object.getOwnPropertySymbols),D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;function R(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(c){return!1}})()&&Object.assign;var V="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Function.call.bind(Object.prototype.hasOwnProperty);function B(e,t,r,n,o){}B.resetWarningCache=function(){0};function N(){}function z(){}z.resetWarningCache=N;var H=l((function(e){e.exports=function(){function e(e,t,r,n,o,c){if(c!==V){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:z,resetWarningCache:N};return r.PropTypes=r,r}()})),I={animationData:H.object,path:H.string,play:H.bool,goTo:H.number,speed:H.number,direction:H.number,loop:H.oneOfType([H.number,H.bool]),useSubframes:H.bool,segments:H.oneOfType([H.arrayOf(H.number),H.bool]),rendererSettings:H.object,renderer:H.string,audioFactory:H.func,onComplete:H.func,onLoopComplete:H.func,onEnterFrame:H.func,onSegmentStart:H.func},W={},q=function(){},U=function(e){var t=e.loadAnimation,r=(0,c.memo)((0,c.forwardRef)((function(e,r){var n=e.animationData,o=void 0===n?null:n,u=e.path,i=void 0===u?null:u,l=e.play,p=void 0===l?null:l,y=e.speed,d=void 0===y?1:y,b=e.direction,m=void 0===b?1:b,g=e.segments,v=void 0===g?null:g,O=e.goTo,S=void 0===O?null:O,j=e.useSubframes,h=void 0===j||j,E=e.renderer,w=void 0===E?"svg":E,A=e.loop,C=void 0===A||A,$=e.rendererSettings,L=void 0===$?W:$,P=e.audioFactory,T=void 0===P?null:P,M=e.onLoad,_=void 0===M?q:M,x=e.onComplete,k=void 0===x?q:x,D=e.onLoopComplete,F=void 0===D?q:D,R=e.onEnterFrame,V=void 0===R?q:R,B=e.onSegmentStart,N=void 0===B?q:B,z=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["animationData","path","play","speed","direction","segments","goTo","useSubframes","renderer","loop","rendererSettings","audioFactory","onLoad","onComplete","onLoopComplete","onEnterFrame","onSegmentStart"]),H=(0,c.useRef)(),I=(0,c.useRef)(),U=(0,c.useState)(!1),Y=U[0],Z=U[1],G=(0,c.useState)(v),J=G[0],K=G[1];(0,c.useEffect)((function(){f()(J,v)||K(v)}),[v,J]);var Q=(0,c.useState)(L),X=Q[0],ee=Q[1];(0,c.useEffect)((function(){f()(X,L)||ee(L)}),[L,X]),(0,c.useEffect)((function(){return function(){return I.current.removeEventListener("complete",k)}}),[k]),(0,c.useEffect)((function(){return function(){return I.current.removeEventListener("loopComplete",F)}}),[F]),(0,c.useEffect)((function(){return function(){return I.current.removeEventListener("enterFrame",V)}}),[V]),(0,c.useEffect)((function(){return function(){return I.current.removeEventListener("segmentStart",N)}}),[N]),(0,c.useEffect)((function(){return function(){return I.current.removeEventListener("DOMLoaded",_)}}),[_]);var te=(0,c.useCallback)((function(e){I.current=e,"function"===typeof r?r(e):void 0!==r&&null!==r&&(r.current=e)}),[r]);(0,c.useEffect)((function(){var e=t({animationData:null==o||"object"!==typeof o?o:"object"===typeof o.default?s()(o.default):s()(o),path:i,container:H.current,renderer:w,loop:!1,autoplay:!1,rendererSettings:X,audioFactory:T});te(e);var r=function(){return Z(!0)};return I.current.addEventListener("DOMLoaded",r),function(){I.current.removeEventListener("DOMLoaded",r),Z(!1),I.current.destroy(),te(void 0)}}),[C,w,X,o,i,T,te]),(0,c.useEffect)((function(){I.current.addEventListener("DOMLoaded",_)}),[_]),(0,c.useEffect)((function(){I.current.addEventListener("complete",k)}),[k]),(0,c.useEffect)((function(){I.current.addEventListener("loopComplete",F)}),[F]),(0,c.useEffect)((function(){I.current.addEventListener("enterFrame",V)}),[V]),(0,c.useEffect)((function(){I.current.addEventListener("segmentStart",N)}),[N]),(0,c.useEffect)((function(){Y&&(I.current.loop=C)}),[Y,C]);var re=(0,c.useRef)(!1);return(0,c.useEffect)((function(){if(Y)if(!0===p){if(J){if(I.current.playSegments(J,true),re.current=!0,-1===m)e(J[1])}else if(re.current&&I.current.resetSegments(true),re.current=!1,-1===m)e(I.current.getDuration(!0));else I.current.play()}else!1===p&&I.current.pause();function e(e){I.current.goToAndPlay(e,!0),I.current.setDirection(m)}}),[p,J,Y,m]),(0,c.useEffect)((function(){Y&&(Number.isNaN(d)||I.current.setSpeed(d))}),[d,Y]),(0,c.useEffect)((function(){Y&&I.current.setDirection(m)}),[m,Y]),(0,c.useEffect)((function(){if(Y&&null!=S){p?I.current.goToAndPlay(S,true):I.current.goToAndStop(S,true)}}),[S,p,Y]),(0,c.useEffect)((function(){I.current.setSubframe&&I.current.setSubframe(h)}),[h]),c.createElement("div",a({},z,{ref:H}))})));return r.propTypes=I,r}(o());t.Z=U},12505:function(e,t,r){e.exports=r(50756)()},50756:function(e,t,r){var n=r(75291).lW;function o(e){return e instanceof n?n.from(e):new e.constructor(e.buffer.slice(),e.byteOffset,e.length)}e.exports=function(e){if((e=e||{}).circles)return function(e){const t=[],r=[],n=new Map;if(n.set(Date,(e=>new Date(e))),n.set(Map,((e,t)=>new Map(u(Array.from(e),t)))),n.set(Set,((e,t)=>new Set(u(Array.from(e),t)))),e.constructorHandlers)for(const o of e.constructorHandlers)n.set(o[0],o[1]);let c=null;return e.proto?i:f;function u(e,u){const f=Object.keys(e),i=new Array(f.length);for(let s=0;s<f.length;s++){const a=f[s],l=e[a];if("object"!==typeof l||null===l)i[a]=l;else if(l.constructor!==Object&&(c=n.get(l.constructor)))i[a]=c(l,u);else if(ArrayBuffer.isView(l))i[a]=o(l);else{const e=t.indexOf(l);i[a]=-1!==e?r[e]:u(l)}}return i}function f(e){if("object"!==typeof e||null===e)return e;if(Array.isArray(e))return u(e,f);if(e.constructor!==Object&&(c=n.get(e.constructor)))return c(e,f);const i={};t.push(e),r.push(i);for(const u in e){if(!1===Object.hasOwnProperty.call(e,u))continue;const s=e[u];if("object"!==typeof s||null===s)i[u]=s;else if(s.constructor!==Object&&(c=n.get(s.constructor)))i[u]=c(s,f);else if(ArrayBuffer.isView(s))i[u]=o(s);else{const e=t.indexOf(s);i[u]=-1!==e?r[e]:f(s)}}return t.pop(),r.pop(),i}function i(e){if("object"!==typeof e||null===e)return e;if(Array.isArray(e))return u(e,i);if(e.constructor!==Object&&(c=n.get(e.constructor)))return c(e,i);const f={};t.push(e),r.push(f);for(const u in e){const s=e[u];if("object"!==typeof s||null===s)f[u]=s;else if(s.constructor!==Object&&(c=n.get(s.constructor)))f[u]=c(s,i);else if(ArrayBuffer.isView(s))f[u]=o(s);else{const e=t.indexOf(s);f[u]=-1!==e?r[e]:i(s)}}return t.pop(),r.pop(),f}}(e);const t=new Map;if(t.set(Date,(e=>new Date(e))),t.set(Map,((e,t)=>new Map(n(Array.from(e),t)))),t.set(Set,((e,t)=>new Set(n(Array.from(e),t)))),e.constructorHandlers)for(const o of e.constructorHandlers)t.set(o[0],o[1]);let r=null;return e.proto?function e(c){if("object"!==typeof c||null===c)return c;if(Array.isArray(c))return n(c,e);if(c.constructor!==Object&&(r=t.get(c.constructor)))return r(c,e);const u={};for(const n in c){const f=c[n];"object"!==typeof f||null===f?u[n]=f:f.constructor!==Object&&(r=t.get(f.constructor))?u[n]=r(f,e):ArrayBuffer.isView(f)?u[n]=o(f):u[n]=e(f)}return u}:function e(c){if("object"!==typeof c||null===c)return c;if(Array.isArray(c))return n(c,e);if(c.constructor!==Object&&(r=t.get(c.constructor)))return r(c,e);const u={};for(const n in c){if(!1===Object.hasOwnProperty.call(c,n))continue;const f=c[n];"object"!==typeof f||null===f?u[n]=f:f.constructor!==Object&&(r=t.get(f.constructor))?u[n]=r(f,e):ArrayBuffer.isView(f)?u[n]=o(f):u[n]=e(f)}return u};function n(e,n){const c=Object.keys(e),u=new Array(c.length);for(let f=0;f<c.length;f++){const i=c[f],s=e[i];"object"!==typeof s||null===s?u[i]=s:s.constructor!==Object&&(r=t.get(s.constructor))?u[i]=r(s,n):ArrayBuffer.isView(s)?u[i]=o(s):u[i]=n(s)}return u}}}}]);