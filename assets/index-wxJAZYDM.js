(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var zm={exports:{}},Fl={},Bm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),Kx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),Qx=Symbol.for("react.strict_mode"),Jx=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),Ch=Symbol.iterator;function av(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Gm={};function Os(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jm(){}jm.prototype=Os.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}var nf=tf.prototype=new jm;nf.constructor=tf;Hm(nf,Os.prototype);nf.isPureReactComponent=!0;var Rh=Array.isArray,Wm=Object.prototype.hasOwnProperty,rf={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Wm.call(e,i)&&!Xm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ga,type:t,key:s,ref:a,props:r,_owner:rf.current}}function ov(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lv(""+t.key):e.toString(36)}function Vo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ga:case Kx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+cc(a,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),Vo(r,e,n,"",function(c){return c})):r!=null&&(sf(r)&&(r=ov(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+cc(s,o);a+=Vo(s,e,n,l,r)}else if(l=av(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+cc(s,o++),a+=Vo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Vo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Ho={transition:null},uv={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:rf};function Ym(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Os;He.Fragment=Zx;He.Profiler=Jx;He.PureComponent=tf;He.StrictMode=Qx;He.Suspense=iv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;He.act=Ym;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Wm.call(e,l)&&!Xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ev,_context:t},t.Consumer=t};He.createElement=qm;He.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:nv,render:t}};He.isValidElement=sf;He.lazy=function(t){return{$$typeof:sv,_payload:{_status:-1,_result:t},_init:cv}};He.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};He.unstable_act=Ym;He.useCallback=function(t,e){return sn.current.useCallback(t,e)};He.useContext=function(t){return sn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};He.useEffect=function(t,e){return sn.current.useEffect(t,e)};He.useId=function(){return sn.current.useId()};He.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return sn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};He.useRef=function(t){return sn.current.useRef(t)};He.useState=function(t){return sn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return sn.current.useTransition()};He.version="18.3.1";Bm.exports=He;var We=Bm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=We,fv=Symbol.for("react.element"),hv=Symbol.for("react.fragment"),pv=Object.prototype.hasOwnProperty,mv=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gv={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)pv.call(e,i)&&!gv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fv,type:t,key:s,ref:a,props:r,_owner:mv.current}}Fl.Fragment=hv;Fl.jsx=$m;Fl.jsxs=$m;zm.exports=Fl;var m=zm.exports,Km={exports:{}},Tn={},Zm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,q){var Q=H.length;H.push(q);e:for(;0<Q;){var oe=Q-1>>>1,re=H[oe];if(0<r(re,q))H[oe]=q,H[Q]=re,Q=oe;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var q=H[0],Q=H.pop();if(Q!==q){H[0]=Q;e:for(var oe=0,re=H.length,Pe=re>>>1;oe<Pe;){var Ke=2*(oe+1)-1,et=H[Ke],K=Ke+1,ie=H[K];if(0>r(et,Q))K<re&&0>r(ie,et)?(H[oe]=ie,H[K]=Q,oe=K):(H[oe]=et,H[Ke]=Q,oe=Ke);else if(K<re&&0>r(ie,Q))H[oe]=ie,H[K]=Q,oe=K;else break e}}return q}function r(H,q){var Q=H.sortIndex-q.sortIndex;return Q!==0?Q:H.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,g=!1,v=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=H)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function M(H){if(E=!1,y(H),!v)if(n(l)!==null)v=!0,j(b);else{var q=n(c);q!==null&&k(M,q.startTime-H)}}function b(H,q){v=!1,E&&(E=!1,u(_),_=-1),g=!0;var Q=d;try{for(y(q),h=n(l);h!==null&&(!(h.expirationTime>q)||H&&!N());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var re=oe(h.expirationTime<=q);q=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),y(q)}else i(l);h=n(l)}if(h!==null)var Pe=!0;else{var Ke=n(c);Ke!==null&&k(M,Ke.startTime-q),Pe=!1}return Pe}finally{h=null,d=Q,g=!1}}var A=!1,C=null,_=-1,w=5,P=-1;function N(){return!(t.unstable_now()-P<w)}function D(){if(C!==null){var H=t.unstable_now();P=H;var q=!0;try{q=C(!0,H)}finally{q?z():(A=!1,C=null)}}else A=!1}var z;if(typeof p=="function")z=function(){p(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,V=X.port2;X.port1.onmessage=D,z=function(){V.postMessage(null)}}else z=function(){x(D,0)};function j(H){C=H,A||(A=!0,z())}function k(H,q){_=x(function(){H(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,j(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return H()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Q=d;d=H;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(H,q,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,H={id:f++,callback:q,priorityLevel:H,startTime:Q,expirationTime:re,sortIndex:-1},Q>oe?(H.sortIndex=Q,e(c,H),n(l)===null&&H===n(c)&&(E?(u(_),_=-1):E=!0,k(M,Q-oe))):(H.sortIndex=re,e(l,H),v||g||(v=!0,j(b))),H},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(H){var q=d;return function(){var Q=d;d=q;try{return H.apply(this,arguments)}finally{d=Q}}}})(Qm);Zm.exports=Qm;var xv=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=We,En=xv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,Sa={};function kr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},Lh={};function yv(t){return mu.call(Lh,t)?!0:mu.call(Ph,t)?!1:_v.test(t)?Lh[t]=!0:(Ph[t]=!0,!1)}function Sv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mv(t,e,n,i){if(e===null||typeof e>"u"||Sv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,of);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,of);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,of);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mv(e,n,r,i)&&(n=null),i||r===null?yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),e0=Symbol.for("react.provider"),t0=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),n0=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,uc;function sa(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function wv(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case gu:return"Profiler";case cf:return"StrictMode";case xu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case t0:return(t.displayName||"Context")+".Consumer";case e0:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case df:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function Ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tv(t){var e=i0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=Tv(t))}function r0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=i0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function Su(t,e){s0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mu(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(aa(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function a0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,l0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bv=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function c0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=c0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Av=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(Av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,xs=null,vs=null;function kh(t){if(t=Xa(t)){if(typeof Cu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Vl(e),Cu(t.stateNode,t.type,e))}}function d0(t){xs?vs?vs.push(t):vs=[t]:xs=t}function f0(){if(xs){var t=xs,e=vs;if(vs=xs=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function h0(t,e){return t(e)}function p0(){}var hc=!1;function m0(t,e,n){if(hc)return t(e,n);hc=!0;try{return h0(t,e,n)}finally{hc=!1,(xs!==null||vs!==null)&&(p0(),f0())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Ru=!1;if(Ci)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Ru=!1}function Cv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ha=!1,ol=null,ll=!1,Nu=null,Rv={onError:function(t){ha=!0,ol=t}};function Nv(t,e,n,i,r,s,a,o,l){ha=!1,ol=null,Cv.apply(Rv,arguments)}function Pv(t,e,n,i,r,s,a,o,l){if(Nv.apply(this,arguments),ha){if(ha){var c=ol;ha=!1,ol=null}else throw Error(ee(198));ll||(ll=!0,Nu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zh(t){if(zr(t)!==t)throw Error(ee(188))}function Lv(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zh(r),t;if(s===i)return zh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function x0(t){return t=Lv(t),t!==null?v0(t):null}function v0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v0(t);if(e!==null)return e;t=t.sibling}return null}var _0=En.unstable_scheduleCallback,Bh=En.unstable_cancelCallback,Dv=En.unstable_shouldYield,Iv=En.unstable_requestPaint,Tt=En.unstable_now,Uv=En.unstable_getCurrentPriorityLevel,hf=En.unstable_ImmediatePriority,y0=En.unstable_UserBlockingPriority,cl=En.unstable_NormalPriority,Fv=En.unstable_LowPriority,S0=En.unstable_IdlePriority,Ol=null,si=null;function Ov(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Bv,kv=Math.log,zv=Math.LN2;function Bv(t){return t>>>=0,t===0?32:31-(kv(t)/zv|0)|0}var io=64,ro=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oa(o):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Vv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M0(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Gv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,mf,T0,b0,A0,Lu=!1,so=[],Qi=null,Ji=null,er=null,Ea=new Map,Ta=new Map,Xi=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Wv(t,e,n,i,r){switch(e){case"focusin":return Qi=Xs(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=Xs(Ji,t,e,n,i,r),!0;case"mouseover":return er=Xs(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Xs(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Xs(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function C0(t){var e=Tr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=g0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Au=i,n.target.dispatchEvent(i),Au=null}else return e=Xa(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){Go(t)&&n.delete(e)}function Xv(){Lu=!1,Qi!==null&&Go(Qi)&&(Qi=null),Ji!==null&&Go(Ji)&&(Ji=null),er!==null&&Go(er)&&(er=null),Ea.forEach(Hh),Ta.forEach(Hh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Xv)))}function ba(t){function e(r){return qs(r,t)}if(0<so.length){qs(so[0],t);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&qs(Qi,t),Ji!==null&&qs(Ji,t),er!==null&&qs(er,t),Ea.forEach(e),Ta.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&Xi.shift()}var _s=Ii.ReactCurrentBatchConfig,dl=!0;function qv(t,e,n,i){var r=rt,s=_s.transition;_s.transition=null;try{rt=1,gf(t,e,n,i)}finally{rt=r,_s.transition=s}}function Yv(t,e,n,i){var r=rt,s=_s.transition;_s.transition=null;try{rt=4,gf(t,e,n,i)}finally{rt=r,_s.transition=s}}function gf(t,e,n,i){if(dl){var r=Du(t,e,n,i);if(r===null)Ec(t,e,i,fl,n),Vh(t,i);else if(Wv(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<jv.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&E0(s),s=Du(t,e,n,i),s===null&&Ec(t,e,i,fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var fl=null;function Du(t,e,n,i){if(fl=null,t=ff(i),t=Tr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=g0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fl=t,null}function R0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uv()){case hf:return 1;case y0:return 4;case cl:case Fv:return 16;case S0:return 536870912;default:return 16}default:return 16}}var $i=null,xf=null,jo=null;function N0(){if(jo)return jo;var t,e=xf,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Gh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:Gh,this.isPropagationStopped=Gh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=bn(ks),Wa=_t({},ks,{view:0,detail:0}),$v=bn(Wa),mc,gc,Ys,kl=_t({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(mc=t.screenX-Ys.screenX,gc=t.screenY-Ys.screenY):gc=mc=0,Ys=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),jh=bn(kl),Kv=_t({},kl,{dataTransfer:0}),Zv=bn(Kv),Qv=_t({},Wa,{relatedTarget:0}),xc=bn(Qv),Jv=_t({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=bn(Jv),t_=_t({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n_=bn(t_),i_=_t({},ks,{data:0}),Wh=bn(i_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a_[t])?!!e[t]:!1}function _f(){return o_}var l_=_t({},Wa,{key:function(t){if(t.key){var e=r_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c_=bn(l_),u_=_t({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=bn(u_),d_=_t({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),f_=bn(d_),h_=_t({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=bn(h_),m_=_t({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=bn(m_),x_=[9,13,27,32],yf=Ci&&"CompositionEvent"in window,pa=null;Ci&&"documentMode"in document&&(pa=document.documentMode);var v_=Ci&&"TextEvent"in window&&!pa,P0=Ci&&(!yf||pa&&8<pa&&11>=pa),qh=" ",Yh=!1;function L0(t,e){switch(t){case"keyup":return x_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function __(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(Yh=!0,qh);case"textInput":return t=e.data,t===qh&&Yh?null:t;default:return null}}function y_(t,e){if(as)return t==="compositionend"||!yf&&L0(t,e)?(t=N0(),jo=xf=$i=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P0&&e.locale!=="ko"?null:e.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S_[t.type]:e==="textarea"}function I0(t,e,n,i){d0(i),e=hl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Aa=null;function M_(t){W0(t,0)}function zl(t){var e=cs(t);if(r0(e))return t}function w_(t,e){if(t==="change")return e}var U0=!1;if(Ci){var vc;if(Ci){var _c="oninput"in document;if(!_c){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),_c=typeof Kh.oninput=="function"}vc=_c}else vc=!1;U0=vc&&(!document.documentMode||9<document.documentMode)}function Zh(){ma&&(ma.detachEvent("onpropertychange",F0),Aa=ma=null)}function F0(t){if(t.propertyName==="value"&&zl(Aa)){var e=[];I0(e,Aa,t,ff(t)),m0(M_,e)}}function E_(t,e,n){t==="focusin"?(Zh(),ma=e,Aa=n,ma.attachEvent("onpropertychange",F0)):t==="focusout"&&Zh()}function T_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Aa)}function b_(t,e){if(t==="click")return zl(e)}function A_(t,e){if(t==="input"||t==="change")return zl(e)}function C_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:C_;function Ca(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,e){var n=Qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R_(t){var e=k0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&Sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jh(n,s);var a=Jh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N_=Ci&&"documentMode"in document&&11>=document.documentMode,os=null,Iu=null,ga=null,Uu=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||os==null||os!==al(i)||(i=os,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Ca(ga,i)||(ga=i,i=hl(Iu,"onSelect"),0<i.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},yc={},z0={};Ci&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Bl(t){if(yc[t])return yc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z0)return yc[t]=e[n];return t}var B0=Bl("animationend"),V0=Bl("animationiteration"),H0=Bl("animationstart"),G0=Bl("transitionend"),j0=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){j0.set(t,e),kr(e,[t])}for(var Sc=0;Sc<tp.length;Sc++){var Mc=tp[Sc],P_=Mc.toLowerCase(),L_=Mc[0].toUpperCase()+Mc.slice(1);cr(P_,"on"+L_)}cr(B0,"onAnimationEnd");cr(V0,"onAnimationIteration");cr(H0,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(G0,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Pv(i,e,void 0,t),t.currentTarget=null}function W0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;np(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;np(r,o,c),s=l}}}if(ll)throw t=Nu,ll=!1,Nu=null,t}function ht(t,e){var n=e[Bu];n===void 0&&(n=e[Bu]=new Set);var i=t+"__bubble";n.has(i)||(X0(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),X0(n,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[lo]){t[lo]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(D_.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,wc("selectionchange",!1,e))}}function X0(t,e,n,i){switch(R0(e)){case 1:var r=qv;break;case 4:r=Yv;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}m0(function(){var c=s,f=ff(n),h=[];e:{var d=j0.get(t);if(d!==void 0){var g=vf,v=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":g=c_;break;case"focusin":v="focus",g=xc;break;case"focusout":v="blur",g=xc;break;case"beforeblur":case"afterblur":g=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=f_;break;case B0:case V0:case H0:g=e_;break;case G0:g=p_;break;case"scroll":g=$v;break;case"wheel":g=g_;break;case"copy":case"cut":case"paste":g=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xh}var E=(e&4)!==0,x=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var p=c,y;p!==null;){y=p;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,u!==null&&(M=wa(p,u),M!=null&&E.push(Na(p,M,y)))),x)break;p=p.return}0<E.length&&(d=new g(d,v,null,n,f),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Au&&(v=n.relatedTarget||n.fromElement)&&(Tr(v)||v[Ri]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Tr(v):null,v!==null&&(x=zr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(E=jh,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Xh,M="onPointerLeave",u="onPointerEnter",p="pointer"),x=g==null?d:cs(g),y=v==null?d:cs(v),d=new E(M,p+"leave",g,n,f),d.target=x,d.relatedTarget=y,M=null,Tr(f)===c&&(E=new E(u,p+"enter",v,n,f),E.target=y,E.relatedTarget=x,M=E),x=M,g&&v)t:{for(E=g,u=v,p=0,y=E;y;y=Gr(y))p++;for(y=0,M=u;M;M=Gr(M))y++;for(;0<p-y;)E=Gr(E),p--;for(;0<y-p;)u=Gr(u),y--;for(;p--;){if(E===u||u!==null&&E===u.alternate)break t;E=Gr(E),u=Gr(u)}E=null}else E=null;g!==null&&ip(h,d,g,E,!1),v!==null&&x!==null&&ip(h,x,v,E,!0)}}e:{if(d=c?cs(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=w_;else if($h(d))if(U0)b=A_;else{b=T_;var A=E_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=b_);if(b&&(b=b(t,c))){I0(h,b,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Mu(d,"number",d.value)}switch(A=c?cs(c):window,t){case"focusin":($h(A)||A.contentEditable==="true")&&(os=A,Iu=c,ga=null);break;case"focusout":ga=Iu=os=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,ep(h,n,f);break;case"selectionchange":if(N_)break;case"keydown":case"keyup":ep(h,n,f)}var C;if(yf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else as?L0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(P0&&n.locale!=="ko"&&(as||_!=="onCompositionStart"?_==="onCompositionEnd"&&as&&(C=N0()):($i=f,xf="value"in $i?$i.value:$i.textContent,as=!0)),A=hl(c,_),0<A.length&&(_=new Wh(_,t,null,n,f),h.push({event:_,listeners:A}),C?_.data=C:(C=D0(n),C!==null&&(_.data=C)))),(C=v_?__(t,n):y_(t,n))&&(c=hl(c,"onBeforeInput"),0<c.length&&(f=new Wh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}W0(h,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(Na(t,s,r)),s=wa(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=wa(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var I_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(I_,`
`).replace(U_,"")}function co(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(ee(425))}function pl(){}var Fu=null,Ou=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(k_)}:zu;function k_(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),ni="__reactFiber$"+zs,Pa="__reactProps$"+zs,Ri="__reactContainer$"+zs,Bu="__reactEvents$"+zs,z_="__reactListeners$"+zs,B_="__reactHandles$"+zs;function Tr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[ni])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Vl(t){return t[Pa]||null}var Vu=[],us=-1;function ur(t){return{current:t}}function pt(t){0>us||(t.current=Vu[us],Vu[us]=null,us--)}function ft(t,e){us++,Vu[us]=t.current,t.current=e}var or={},Qt=ur(or),dn=ur(!1),Lr=or;function Ts(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function ml(){pt(dn),pt(Qt)}function op(t,e,n){if(Qt.current!==or)throw Error(ee(168));ft(Qt,e),ft(dn,n)}function q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Ev(t)||"Unknown",r));return _t({},n,i)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Lr=Qt.current,ft(Qt,t),ft(dn,dn.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=q0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,pt(dn),pt(Qt),ft(Qt,t)):pt(dn),ft(dn,n)}var yi=null,Hl=!1,bc=!1;function Y0(t){yi===null?yi=[t]:yi.push(t)}function V_(t){Hl=!0,Y0(t)}function dr(){if(!bc&&yi!==null){bc=!0;var t=0,e=rt;try{var n=yi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Hl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),_0(hf,dr),r}finally{rt=e,bc=!1}}return null}var ds=[],fs=0,xl=null,vl=0,Rn=[],Nn=0,Dr=null,Mi=1,wi="";function yr(t,e){ds[fs++]=vl,ds[fs++]=xl,xl=t,vl=e}function $0(t,e,n){Rn[Nn++]=Mi,Rn[Nn++]=wi,Rn[Nn++]=Dr,Dr=t;var i=Mi;t=wi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-Xn(e)+r|n<<r|i,wi=s+t}else Mi=1<<s|n<<r|i,wi=t}function Mf(t){t.return!==null&&(yr(t,1),$0(t,1,0))}function wf(t){for(;t===xl;)xl=ds[--fs],ds[fs]=null,vl=ds[--fs],ds[fs]=null;for(;t===Dr;)Dr=Rn[--Nn],Rn[Nn]=null,wi=Rn[--Nn],Rn[Nn]=null,Mi=Rn[--Nn],Rn[Nn]=null}var wn=null,Mn=null,mt=!1,Gn=null;function K0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Mn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:Mi,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Mn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(mt){var e=Mn;if(e){var n=e;if(!cp(t,e)){if(Hu(t))throw Error(ee(418));e=tr(n.nextSibling);var i=wn;e&&cp(t,e)?K0(i,n):(t.flags=t.flags&-4097|2,mt=!1,wn=t)}}else{if(Hu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,mt=!1,wn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function uo(t){if(t!==wn)return!1;if(!mt)return up(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=Mn)){if(Hu(t))throw Z0(),Error(ee(418));for(;e;)K0(t,e),e=tr(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=wn?tr(t.stateNode.nextSibling):null;return!0}function Z0(){for(var t=Mn;t;)t=tr(t.nextSibling)}function bs(){Mn=wn=null,mt=!1}function Ef(t){Gn===null?Gn=[t]:Gn.push(t)}var H_=Ii.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function Q0(t){function e(u,p){if(t){var y=u.deletions;y===null?(u.deletions=[p],u.flags|=16):y.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=sr(u,p),u.index=0,u.sibling=null,u}function s(u,p,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<p?(u.flags|=2,p):y):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,y,M){return p===null||p.tag!==6?(p=Dc(y,u.mode,M),p.return=u,p):(p=r(p,y),p.return=u,p)}function l(u,p,y,M){var b=y.type;return b===ss?f(u,p,y.props.children,M,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&dp(b)===p.type)?(M=r(p,y.props),M.ref=$s(u,p,y),M.return=u,M):(M=Qo(y.type,y.key,y.props,null,u.mode,M),M.ref=$s(u,p,y),M.return=u,M)}function c(u,p,y,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ic(y,u.mode,M),p.return=u,p):(p=r(p,y.children||[]),p.return=u,p)}function f(u,p,y,M,b){return p===null||p.tag!==7?(p=Pr(y,u.mode,M,b),p.return=u,p):(p=r(p,y),p.return=u,p)}function h(u,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dc(""+p,u.mode,y),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return y=Qo(p.type,p.key,p.props,null,u.mode,y),y.ref=$s(u,null,p),y.return=u,y;case rs:return p=Ic(p,u.mode,y),p.return=u,p;case ji:var M=p._init;return h(u,M(p._payload),y)}if(aa(p)||js(p))return p=Pr(p,u.mode,y,null),p.return=u,p;fo(u,p)}return null}function d(u,p,y,M){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(u,p,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:return y.key===b?l(u,p,y,M):null;case rs:return y.key===b?c(u,p,y,M):null;case ji:return b=y._init,d(u,p,b(y._payload),M)}if(aa(y)||js(y))return b!==null?null:f(u,p,y,M,null);fo(u,y)}return null}function g(u,p,y,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(y)||null,o(p,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case eo:return u=u.get(M.key===null?y:M.key)||null,l(p,u,M,b);case rs:return u=u.get(M.key===null?y:M.key)||null,c(p,u,M,b);case ji:var A=M._init;return g(u,p,y,A(M._payload),b)}if(aa(M)||js(M))return u=u.get(y)||null,f(p,u,M,b,null);fo(p,M)}return null}function v(u,p,y,M){for(var b=null,A=null,C=p,_=p=0,w=null;C!==null&&_<y.length;_++){C.index>_?(w=C,C=null):w=C.sibling;var P=d(u,C,y[_],M);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(u,C),p=s(P,p,_),A===null?b=P:A.sibling=P,A=P,C=w}if(_===y.length)return n(u,C),mt&&yr(u,_),b;if(C===null){for(;_<y.length;_++)C=h(u,y[_],M),C!==null&&(p=s(C,p,_),A===null?b=C:A.sibling=C,A=C);return mt&&yr(u,_),b}for(C=i(u,C);_<y.length;_++)w=g(C,u,_,y[_],M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?_:w.key),p=s(w,p,_),A===null?b=w:A.sibling=w,A=w);return t&&C.forEach(function(N){return e(u,N)}),mt&&yr(u,_),b}function E(u,p,y,M){var b=js(y);if(typeof b!="function")throw Error(ee(150));if(y=b.call(y),y==null)throw Error(ee(151));for(var A=b=null,C=p,_=p=0,w=null,P=y.next();C!==null&&!P.done;_++,P=y.next()){C.index>_?(w=C,C=null):w=C.sibling;var N=d(u,C,P.value,M);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(u,C),p=s(N,p,_),A===null?b=N:A.sibling=N,A=N,C=w}if(P.done)return n(u,C),mt&&yr(u,_),b;if(C===null){for(;!P.done;_++,P=y.next())P=h(u,P.value,M),P!==null&&(p=s(P,p,_),A===null?b=P:A.sibling=P,A=P);return mt&&yr(u,_),b}for(C=i(u,C);!P.done;_++,P=y.next())P=g(C,u,_,P.value,M),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?_:P.key),p=s(P,p,_),A===null?b=P:A.sibling=P,A=P);return t&&C.forEach(function(D){return e(u,D)}),mt&&yr(u,_),b}function x(u,p,y,M){if(typeof y=="object"&&y!==null&&y.type===ss&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:e:{for(var b=y.key,A=p;A!==null;){if(A.key===b){if(b=y.type,b===ss){if(A.tag===7){n(u,A.sibling),p=r(A,y.props.children),p.return=u,u=p;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&dp(b)===A.type){n(u,A.sibling),p=r(A,y.props),p.ref=$s(u,A,y),p.return=u,u=p;break e}n(u,A);break}else e(u,A);A=A.sibling}y.type===ss?(p=Pr(y.props.children,u.mode,M,y.key),p.return=u,u=p):(M=Qo(y.type,y.key,y.props,null,u.mode,M),M.ref=$s(u,p,y),M.return=u,u=M)}return a(u);case rs:e:{for(A=y.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(u,p.sibling),p=r(p,y.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Ic(y,u.mode,M),p.return=u,u=p}return a(u);case ji:return A=y._init,x(u,p,A(y._payload),M)}if(aa(y))return v(u,p,y,M);if(js(y))return E(u,p,y,M);fo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,y),p.return=u,u=p):(n(u,p),p=Dc(y,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return x}var As=Q0(!0),J0=Q0(!1),_l=ur(null),yl=null,hs=null,Tf=null;function bf(){Tf=hs=yl=null}function Af(t){var e=_l.current;pt(_l),t._currentValue=e}function ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){yl=t,Tf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(yl===null)throw Error(ee(308));hs=t,yl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var br=null;function Cf(t){br===null?br=[t]:br.push(t)}function eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function fp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(d=e,g=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=_t({},h,d);break e;case 2:Wi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=h}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var qa={},ai=ur(qa),La=ur(qa),Da=ur(qa);function Ar(t){if(t===qa)throw Error(ee(174));return t}function Nf(t,e){switch(ft(Da,e),ft(La,t),ft(ai,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}pt(ai),ft(ai,e)}function Cs(){pt(ai),pt(La),pt(Da)}function ng(t){Ar(Da.current);var e=Ar(ai.current),n=Eu(e,t.type);e!==n&&(ft(La,t),ft(ai,n))}function Pf(t){La.current===t&&(pt(ai),pt(La))}var gt=ur(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Lf(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var qo=Ii.ReactCurrentDispatcher,Cc=Ii.ReactCurrentBatchConfig,Ir=0,xt=null,Rt=null,Ft=null,wl=!1,xa=!1,Ia=0,G_=0;function Xt(){throw Error(ee(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function If(t,e,n,i,r,s){if(Ir=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qo.current=t===null||t.memoizedState===null?q_:Y_,t=n(i,r),xa){s=0;do{if(xa=!1,Ia=0,25<=s)throw Error(ee(301));s+=1,Ft=Rt=null,e.updateQueue=null,qo.current=$_,t=n(i,r)}while(xa)}if(qo.current=El,e=Rt!==null&&Rt.next!==null,Ir=0,Ft=Rt=xt=null,wl=!1,e)throw Error(ee(300));return t}function Uf(){var t=Ia!==0;return Ia=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Un(){if(Rt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ft===null?xt.memoizedState:Ft.next;if(e!==null)Ft=e,Rt=t;else{if(t===null)throw Error(ee(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ua(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Ir&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,xt.lanes|=f,Ur|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,$n(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ig(){}function rg(t,e){var n=xt,i=Un(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Ff(og.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Fa(9,ag.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ee(349));Ir&30||sg(n,e,r)}return r}function sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ag(t,e,n,i){e.value=n,e.getSnapshot=i,lg(e)&&cg(t)}function og(t,e,n){return n(function(){lg(e)&&cg(t)})}function lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function cg(t){var e=Ni(t,1);e!==null&&qn(e,t,1,-1)}function pp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=X_.bind(null,xt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ug(){return Un().memoizedState}function Yo(t,e,n,i){var r=ei();xt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function Gl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var a=Rt.memoizedState;if(s=a.destroy,i!==null&&Df(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function mp(t,e){return Yo(8390656,8,t,e)}function Ff(t,e){return Gl(2048,8,t,e)}function dg(t,e){return Gl(4,2,t,e)}function fg(t,e){return Gl(4,4,t,e)}function hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,hg.bind(null,e,t),n)}function Of(){}function mg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xg(t,e,n){return Ir&21?($n(n,e)||(n=M0(),xt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function j_(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{rt=n,Cc.transition=i}}function vg(){return Un().memoizedState}function W_(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_g(t))yg(e,n);else if(n=eg(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),Sg(n,e,i)}}function X_(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_g(t))yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var l=e.interleaved;l===null?(r.next=r,Cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=eg(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),Sg(n,e,i))}}function _g(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function yg(t,e){xa=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var El={readContext:In,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},q_={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=W_.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:Of,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=j_.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ei();if(mt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ot===null)throw Error(ee(349));Ir&30||sg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(og.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,ag.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ot.identifierPrefix;if(mt){var n=wi,i=Mi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y_={readContext:In,useCallback:mg,useContext:In,useEffect:Ff,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:Rc,useRef:ug,useState:function(){return Rc(Ua)},useDebugValue:Of,useDeferredValue:function(t){var e=Un();return xg(e,Rt.memoizedState,t)},useTransition:function(){var t=Rc(Ua)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1},$_={readContext:In,useCallback:mg,useContext:In,useEffect:Ff,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:Nc,useRef:ug,useState:function(){return Nc(Ua)},useDebugValue:Of,useDeferredValue:function(t){var e=Un();return Rt===null?e.memoizedState=t:xg(e,Rt.memoizedState,t)},useTransition:function(){var t=Nc(Ua)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=rr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(qn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=rr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(qn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(qn(e,t,i,n),Xo(e,t,i))}};function gp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function Mg(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=fn(e)?Lr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=fn(e)?Lr:Qt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),Sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function wg(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,id=i),qu(t,e)},n}function Eg(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uy.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var Z_=Ii.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?J0(e,null,n,i):As(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=If(t,e,n,i,s,r),n=Uf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&n&&Mf(e),e.flags|=1,en(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tg(t,e,s,i,r)):(t=Qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Yu(t,e,n,i,r)}function bg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(ms,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(ms,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(ms,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(ms,yn),yn|=i;return en(t,e,r,n),e.child}function Ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,i,r){var s=fn(n)?Lr:Qt.current;return s=Ts(e,s),ys(e,r),n=If(t,e,n,i,s,r),i=Uf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&i&&Mf(e),e.flags|=1,en(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(fn(n)){var s=!0;gl(e)}else s=!1;if(ys(e,r),e.stateNode===null)$o(t,e),Mg(e,n,i),Xu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=fn(n)?Lr:Qt.current,c=Ts(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&xp(e,a,i,c),Wi=!1;var d=e.memoizedState;a.state=d,Sl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||dn.current||Wi?(typeof f=="function"&&(Wu(e,n,f,i),l=e.memoizedState),(o=Wi||gp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,tg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=fn(n)?Lr:Qt.current,l=Ts(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&xp(e,a,i,l),Wi=!1,d=e.memoizedState,a.state=d,Sl(e,i,a,r);var v=e.memoizedState;o!==h||d!==v||dn.current||Wi?(typeof g=="function"&&(Wu(e,n,g,i),v=e.memoizedState),(c=Wi||gp(e,n,c,i,d,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return $u(t,e,n,i,s,r)}function $u(t,e,n,i,r,s){Ag(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lp(e,n,!1),Pi(t,e,s);i=e.stateNode,Z_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=As(e,t.child,null,s),e.child=As(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function Cg(t){var e=t.stateNode;e.pendingContext?op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&op(t,e.context,!1),Nf(t,e.containerInfo)}function Ep(t,e,n,i,r){return bs(),Ef(r),e.flags|=256,en(t,e,n,i),e.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rg(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(gt,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ql(a,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zu(n),e.memoizedState=Ku,t):kf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Q_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=sr(o,s):(s=Pr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ku,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,i){return i!==null&&Ef(i),As(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(ee(422))),ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,a),e.child.memoizedState=Zu(a),e.memoizedState=Ku,s);if(!(e.mode&1))return ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=Pc(s,i,void 0),ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),qn(i,t,r,-1))}return jf(),i=Pc(Error(ee(421))),ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=dy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=tr(r.nextSibling),wn=e,mt=!0,Gn=null,t!==null&&(Rn[Nn++]=Mi,Rn[Nn++]=wi,Rn[Nn++]=Dr,Mi=t.id,wi=t.overflow,Dr=e),e=kf(e,i.children),e.flags|=4096,e)}function Tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ju(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ng(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tp(t,n,e);else if(t.tag===19)Tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J_(t,e,n){switch(e.tag){case 3:Cg(e),bs();break;case 5:ng(e);break;case 1:fn(e.type)&&gl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Rg(t,e,n):(ft(gt,gt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ft(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,bg(t,e,n)}return Pi(t,e,n)}var Pg,Qu,Lg,Dg;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};Lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ai.current);var s=null;switch(n){case"input":r=yu(t,r),i=yu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=wu(t,r),i=wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=pl)}Tu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ey(t,e,n){var i=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&ml(),qt(e),null;case 3:return i=e.stateNode,Cs(),pt(dn),pt(Qt),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(ad(Gn),Gn=null))),Qu(t,e),qt(e),null;case 5:Pf(e);var r=Ar(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)Lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return qt(e),null}if(t=Ar(ai.current),uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)ht(la[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Ih(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Fh(i,s),ht("invalid",i)}Tu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":to(i),Uh(i,s,!0);break;case"textarea":to(i),Oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Pa]=i,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)ht(la[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Ih(t,i),r=yu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Fh(t,i),r=wu(t,i),ht("invalid",t);break;default:r=i}Tu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?u0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&l0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&lf(t,s,l,a))}switch(n){case"input":to(t),Uh(t,i,!1);break;case"textarea":to(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Ar(Da.current),Ar(ai.current),uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:co(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return qt(e),null;case 13:if(pt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Mn!==null&&e.mode&1&&!(e.flags&128))Z0(),bs(),e.flags|=98560,s=!1;else if(s=uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ni]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Gn!==null&&(ad(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Nt===0&&(Nt=3):jf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Cs(),Qu(t,e),t===null&&Ra(e.stateNode.containerInfo),qt(e),null;case 10:return Af(e.type._context),qt(e),null;case 17:return fn(e.type)&&ml(),qt(e),null;case 19:if(pt(gt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ks(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ml(t),a!==null){for(e.flags|=128,Ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ns&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return qt(e),null}else 2*Tt()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=gt.current,ft(gt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ty(t,e){switch(wf(e),e.tag){case 1:return fn(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),pt(dn),pt(Qt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if(pt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Cs(),null;case 10:return Af(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var po=!1,Kt=!1,ny=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ju(t,e,n){try{n()}catch(i){St(t,e,i)}}var bp=!1;function iy(t,e){if(Fu=dl,t=k0(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},dl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,x=v.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Vn(e.type,E),x);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){St(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=bp,bp=!1,v}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ju(e,n,s)}r=r.next}while(r!==i)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Pa],delete e[Bu],delete e[z_],delete e[B_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var Bt=null,Hn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:Kt||ps(n,e);case 6:var i=Bt,r=Hn;Bt=null,Oi(t,e,n),Bt=i,Hn=r,Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),ba(t)):Tc(Bt,n.stateNode));break;case 4:i=Bt,r=Hn,Bt=n.stateNode.containerInfo,Hn=!0,Oi(t,e,n),Bt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ju(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Kt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Oi(t,e,n),Kt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ny),e.forEach(function(i){var r=fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Hn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Hn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Bt===null)throw Error(ee(160));Fg(s,a,r),Bt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Zn(t),i&4){try{va(3,t,t.return),Wl(3,t)}catch(E){St(t,t.return,E)}try{va(5,t,t.return)}catch(E){St(t,t.return,E)}}break;case 1:On(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(On(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(E){St(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&s0(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?u0(r,h):f==="dangerouslySetInnerHTML"?l0(r,h):f==="children"?Ma(r,h):lf(r,f,h,c)}switch(o){case"input":Su(r,s);break;case"textarea":a0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?gs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(E){St(t,t.return,E)}}break;case 6:if(On(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){St(t,t.return,E)}}break;case 3:if(On(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(E){St(t,t.return,E)}break;case 4:On(e,t),Zn(t);break;case 13:On(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=Tt())),i&4&&Cp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,On(e,t),Kt=c):On(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(h=xe=f;xe!==null;){switch(d=xe,g=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:ps(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){St(i,n,E)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){Np(h);continue}}g!==null?(g.return=d,xe=g):Np(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=c0("display",a))}catch(E){St(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){St(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:On(e,t),Zn(t),i&4&&Cp(t);break;case 21:break;default:On(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=Ap(t);nd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Ap(t);td(t,o,a);break;default:throw Error(ee(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ry(t,e,n){xe=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=po;var c=Kt;if(po=a,(Kt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Pp(r):l!==null?(l.return=a,xe=l):Pp(r);for(;s!==null;)xe=s,kg(s),s=s.sibling;xe=r,po=o,Kt=c}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Rp(t)}}function Rp(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Kt||e.flags&512&&ed(e)}catch(d){St(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Np(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Pp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{ed(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{ed(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var sy=Math.ceil,Tl=Ii.ReactCurrentDispatcher,zf=Ii.ReactCurrentOwner,Dn=Ii.ReactCurrentBatchConfig,$e=0,Ot=null,Ct=null,Ht=0,yn=0,ms=ur(0),Nt=0,Oa=null,Ur=0,Xl=0,Bf=0,_a=null,ln=null,Vf=0,Ns=1/0,_i=null,bl=!1,id=null,ir=null,mo=!1,Ki=null,Al=0,ya=0,rd=null,Ko=-1,Zo=0;function nn(){return $e&6?Tt():Ko!==-1?Ko:Ko=Tt()}function rr(t){return t.mode&1?$e&2&&Ht!==0?Ht&-Ht:H_.transition!==null?(Zo===0&&(Zo=M0()),Zo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:R0(t.type)),t):1}function qn(t,e,n,i){if(50<ya)throw ya=0,rd=null,Error(ee(185));ja(t,n,i),(!($e&2)||t!==Ot)&&(t===Ot&&(!($e&2)&&(Xl|=n),Nt===4&&qi(t,Ht)),hn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ns=Tt()+500,Hl&&dr()))}function hn(t,e){var n=t.callbackNode;Hv(t,e);var i=ul(t,t===Ot?Ht:0);if(i===0)n!==null&&Bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bh(n),e===1)t.tag===0?V_(Lp.bind(null,t)):Y0(Lp.bind(null,t)),O_(function(){!($e&6)&&dr()}),n=null;else{switch(w0(i)){case 1:n=hf;break;case 4:n=y0;break;case 16:n=cl;break;case 536870912:n=S0;break;default:n=cl}n=Xg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(Ko=-1,Zo=0,$e&6)throw Error(ee(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=ul(t,t===Ot?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=$e;$e|=2;var s=Vg();(Ot!==t||Ht!==e)&&(_i=null,Ns=Tt()+500,Nr(t,e));do try{ly();break}catch(o){Bg(t,o)}while(!0);bf(),Tl.current=s,$e=r,Ct!==null?e=0:(Ot=null,Ht=0,e=Nt)}if(e!==0){if(e===2&&(r=Pu(t),r!==0&&(i=r,e=sd(t,r))),e===1)throw n=Oa,Nr(t,0),qi(t,i),hn(t,Tt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ay(r)&&(e=Cl(t,i),e===2&&(s=Pu(t),s!==0&&(i=s,e=sd(t,s))),e===1))throw n=Oa,Nr(t,0),qi(t,i),hn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Sr(t,ln,_i);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Vf+500-Tt(),10<e)){if(ul(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zu(Sr.bind(null,t,ln,_i),e);break}Sr(t,ln,_i);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sy(i/1960))-i,10<i){t.timeoutHandle=zu(Sr.bind(null,t,ln,_i),i);break}Sr(t,ln,_i);break;case 5:Sr(t,ln,_i);break;default:throw Error(ee(329))}}}return hn(t,Tt()),t.callbackNode===n?zg.bind(null,t):null}function sd(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=ln,ln=n,e!==null&&ad(e)),t}function ad(t){ln===null?ln=t:ln.push.apply(ln,t)}function ay(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Bf,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Lp(t){if($e&6)throw Error(ee(327));Ss();var e=ul(t,0);if(!(e&1))return hn(t,Tt()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Pu(t);i!==0&&(e=i,n=sd(t,i))}if(n===1)throw n=Oa,Nr(t,0),qi(t,e),hn(t,Tt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,ln,_i),hn(t,Tt()),null}function Hf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ns=Tt()+500,Hl&&dr())}}function Fr(t){Ki!==null&&Ki.tag===0&&!($e&6)&&Ss();var e=$e;$e|=1;var n=Dn.transition,i=rt;try{if(Dn.transition=null,rt=1,t)return t()}finally{rt=i,Dn.transition=n,$e=e,!($e&6)&&dr()}}function Gf(){yn=ms.current,pt(ms)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F_(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ml();break;case 3:Cs(),pt(dn),pt(Qt),Lf();break;case 5:Pf(i);break;case 4:Cs();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:Af(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(Ot=t,Ct=t=sr(t.current,null),Ht=yn=e,Nt=0,Oa=null,Bf=Xl=Ur=0,ln=_a=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function Bg(t,e){do{var n=Ct;try{if(bf(),qo.current=El,wl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Ir=0,Ft=Rt=xt=null,xa=!1,Ia=0,zf.current=null,n===null||n.return===null){Nt=1,Oa=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=_p(a);if(g!==null){g.flags&=-257,yp(g,a,o,s,e),g.mode&1&&vp(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){vp(s,c,e),jf();break e}l=Error(ee(426))}}else if(mt&&o.mode&1){var x=_p(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),yp(x,a,o,s,e),Ef(Rs(l,o));break e}}s=l=Rs(l,o),Nt!==4&&(Nt=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=wg(s,l,e);fp(s,u);break e;case 1:o=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ir===null||!ir.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Eg(s,o,e);fp(s,M);break e}}s=s.return}while(s!==null)}Gg(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Vg(){var t=Tl.current;return Tl.current=El,t===null?El:t}function jf(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ot===null||!(Ur&268435455)&&!(Xl&268435455)||qi(Ot,Ht)}function Cl(t,e){var n=$e;$e|=2;var i=Vg();(Ot!==t||Ht!==e)&&(_i=null,Nr(t,e));do try{oy();break}catch(r){Bg(t,r)}while(!0);if(bf(),$e=n,Tl.current=i,Ct!==null)throw Error(ee(261));return Ot=null,Ht=0,Nt}function oy(){for(;Ct!==null;)Hg(Ct)}function ly(){for(;Ct!==null&&!Dv();)Hg(Ct)}function Hg(t){var e=Wg(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?Gg(t):Ct=e,zf.current=null}function Gg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ty(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Ct=null;return}}else if(n=ey(n,e,yn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Nt===0&&(Nt=5)}function Sr(t,e,n){var i=rt,r=Dn.transition;try{Dn.transition=null,rt=1,cy(t,e,n,i)}finally{Dn.transition=r,rt=i}return null}function cy(t,e,n,i){do Ss();while(Ki!==null);if($e&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gv(t,s),t===Ot&&(Ct=Ot=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Xg(cl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=rt;rt=1;var o=$e;$e|=4,zf.current=null,iy(t,n),Og(n,t),R_(Ou),dl=!!Fu,Ou=Fu=null,t.current=n,ry(n),Iv(),$e=o,rt=a,Dn.transition=s}else t.current=n;if(mo&&(mo=!1,Ki=t,Al=r),s=t.pendingLanes,s===0&&(ir=null),Ov(n.stateNode),hn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=id,id=null,t;return Al&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===rd?ya++:(ya=0,rd=t):ya=0,dr(),null}function Ss(){if(Ki!==null){var t=w0(Al),e=Dn.transition,n=rt;try{if(Dn.transition=null,rt=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,Al=0,$e&6)throw Error(ee(331));var r=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:va(8,f,s)}var h=f.child;if(h!==null)h.return=f,xe=h;else for(;xe!==null;){f=xe;var d=f.sibling,g=f.return;if(Ig(f),f===c){xe=null;break}if(d!==null){d.return=g,xe=d;break}xe=g}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var p=t.current;for(xe=p;xe!==null;){a=xe;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,xe=y;else e:for(a=p;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wl(9,o)}}catch(b){St(o,o.return,b)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if($e=r,dr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{rt=n,Dn.transition=e}}return!1}function Dp(t,e,n){e=Rs(n,e),e=wg(t,e,1),t=nr(t,e,1),e=nn(),t!==null&&(ja(t,1,e),hn(t,e))}function St(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Rs(n,t),t=Eg(e,t,1),e=nr(e,t,1),t=nn(),e!==null&&(ja(e,1,t),hn(e,t));break}}e=e.return}}function uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Ht&n)===n&&(Nt===4||Nt===3&&(Ht&130023424)===Ht&&500>Tt()-Vf?Nr(t,0):Bf|=n),hn(t,e)}function jg(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=nn();t=Ni(t,e),t!==null&&(ja(t,e,n),hn(t,n))}function dy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jg(t,n)}function fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),jg(t,n)}var Wg;Wg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,J_(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&$0(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$o(t,e),t=e.pendingProps;var r=Ts(e,Qt.current);ys(e,n),r=If(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Xu(e,i,t,n),e=$u(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Mf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($o(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=py(i),t=Vn(i,t),r){case 0:e=Yu(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Vn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),wp(t,e,i,r,n);case 3:e:{if(Cg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tg(t,e),Sl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(ee(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(ee(424)),e),e=Ep(t,e,i,n,r);break e}else for(Mn=tr(e.stateNode.containerInfo.firstChild),wn=e,mt=!0,Gn=null,n=J0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Pi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return ng(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ku(i,r)?a=null:s!==null&&ku(i,s)&&(e.flags|=32),Ag(t,e),en(t,e,a,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return Rg(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Sp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(_l,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!dn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=In(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Mp(t,e,i,r,n);case 15:return Tg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),$o(t,e),e.tag=1,fn(i)?(t=!0,gl(e)):t=!1,ys(e,n),Mg(e,i,r),Xu(e,i,r,n),$u(null,e,i,!0,t,n);case 19:return Ng(t,e,n);case 22:return bg(t,e,n)}throw Error(ee(156,e.tag))};function Xg(t,e){return _0(t,e)}function hy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new hy(t,e,n,i)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function py(t){if(typeof t=="function")return Wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===df)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Wf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Pr(n.children,r,s,e);case cf:a=8,r|=8;break;case gu:return t=Ln(12,n,e,r|2),t.elementType=gu,t.lanes=s,t;case xu:return t=Ln(13,n,e,r),t.elementType=xu,t.lanes=s,t;case vu:return t=Ln(19,n,e,r),t.elementType=vu,t.lanes=s,t;case n0:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case e0:a=10;break e;case t0:a=9;break e;case uf:a=11;break e;case df:a=14;break e;case ji:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=n0,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function my(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,i,r,s,a,o,l){return t=new my(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return or;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(fn(n))return q0(t,n,e)}return e}function Yg(t,e,n,i,r,s,a,o,l){return t=Xf(n,i,!0,t,r,s,a,o,l),t.context=qg(null),n=t.current,i=nn(),r=rr(n),s=Ti(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,ja(t,r,i),hn(t,i),t}function Yl(t,e,n,i){var r=e.current,s=nn(),a=rr(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,a),t!==null&&(qn(t,r,a,s),Xo(t,r,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function xy(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}$l.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Yl(t,e,null,null)};$l.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Yl(null,t,null,null)}),e[Ri]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=b0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&C0(t)}};function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function vy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(a);s.call(c)}}var a=Yg(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=a,t[Ri]=a.current,Ra(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Rl(l);o.call(c)}}var l=Xf(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Ri]=l.current,Ra(t.nodeType===8?t.parentNode:t),Fr(function(){Yl(e,l,n,i)}),l}function Zl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Rl(a);o.call(l)}}Yl(e,a,t,r)}else a=vy(n,e,t,r,i);return Rl(a)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(pf(e,n|1),hn(e,Tt()),!($e&6)&&(Ns=Tt()+500,dr()))}break;case 13:Fr(function(){var i=Ni(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),qf(t,1)}};mf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}qf(t,134217728)}};T0=function(t){if(t.tag===13){var e=rr(t),n=Ni(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}qf(t,e)}};b0=function(){return rt};A0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Cu=function(t,e,n){switch(e){case"input":if(Su(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ee(90));r0(i),Su(i,r)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};h0=Hf;p0=Fr;var _y={usingClientEntryPoint:!1,Events:[Xa,cs,Vl,d0,f0,Hf]},Zs={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yy={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ol=go.inject(yy),si=go}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_y;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(ee(200));return gy(t,e,null,n)};Tn.createRoot=function(t,e){if(!$f(t))throw Error(ee(299));var n=!1,i="",r=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Ra(t.nodeType===8?t.parentNode:t),new Yf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Fr(t)};Tn.hydrate=function(t,e,n){if(!Kl(e))throw Error(ee(200));return Zl(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!$f(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=$g;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};Tn.render=function(t,e,n){if(!Kl(e))throw Error(ee(200));return Zl(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(ee(40));return t._reactRootContainer?(Fr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Tn.unstable_batchedUpdates=Hf;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Zl(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Km.exports=Tn;var Sy=Km.exports,Zg,Fp=Sy;Zg=Fp.createRoot,Fp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="183",My=0,Op=1,wy=2,Jo=1,Ey=2,ca=3,lr=0,pn=1,Si=2,bi=0,Ms=1,ka=2,kp=3,zp=4,Ty=5,wr=100,by=101,Ay=102,Cy=103,Ry=104,Ny=200,Py=201,Ly=202,Dy=203,od=204,ld=205,Iy=206,Uy=207,Fy=208,Oy=209,ky=210,zy=211,By=212,Vy=213,Hy=214,cd=0,ud=1,dd=2,Ps=3,fd=4,hd=5,pd=6,md=7,Qg=0,Gy=1,jy=2,oi=0,Jg=1,ex=2,tx=3,nx=4,ix=5,rx=6,sx=7,ax=300,Or=301,Ls=302,Uc=303,Fc=304,Ql=306,gd=1e3,Ei=1001,xd=1002,Vt=1003,Wy=1004,xo=1005,Zt=1006,Oc=1007,Cr=1008,Sn=1009,ox=1010,lx=1011,za=1012,Zf=1013,ci=1014,ii=1015,Li=1016,Qf=1017,Jf=1018,Ba=1020,cx=35902,ux=35899,dx=1021,fx=1022,Wn=1023,Di=1026,Rr=1027,hx=1028,eh=1029,Ds=1030,th=1031,nh=1033,el=33776,tl=33777,nl=33778,il=33779,vd=35840,_d=35841,yd=35842,Sd=35843,Md=36196,wd=37492,Ed=37496,Td=37488,bd=37489,Ad=37490,Cd=37491,Rd=37808,Nd=37809,Pd=37810,Ld=37811,Dd=37812,Id=37813,Ud=37814,Fd=37815,Od=37816,kd=37817,zd=37818,Bd=37819,Vd=37820,Hd=37821,Gd=36492,jd=36494,Wd=36495,Xd=36283,qd=36284,Yd=36285,$d=36286,Xy=3200,px=0,qy=1,Yi="",Cn="srgb",Is="srgb-linear",Nl="linear",it="srgb",jr=7680,Bp=519,Yy=512,$y=513,Ky=514,ih=515,Zy=516,Qy=517,rh=518,Jy=519,Vp=35044,Hp="300 es",ri=2e3,Va=2001;function e1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function t1(){const t=Pl("canvas");return t.style.display="block",t}const Gp={};function jp(...t){const e="THREE."+t.shift();console.log(e,...t)}function mx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=mx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=mx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ll(...t){const e=t.join(" ");e in Gp||(Gp[e]=!0,De(...t))}function n1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const i1={[cd]:ud,[dd]:pd,[fd]:md,[Ps]:hd,[ud]:cd,[pd]:dd,[md]:fd,[hd]:Ps};class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Kd=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ge(t,e,n){return Math.max(e,Math.min(n,t))}function r1(t,e){return(t%e+e)%e}function zc(t,e,n){return(1-n)*t+n*e}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],g=s[a+1],v=s[a+2],E=s[a+3];if(h!==E||l!==d||c!==g||f!==v){let x=l*d+c*g+f*v+h*E;x<0&&(d=-d,g=-g,v=-v,E=-E,x=-x);let u=1-o;if(x<.9995){const p=Math.acos(x),y=Math.sin(p);u=Math.sin(u*p)/y,o=Math.sin(o*p)/y,l=l*u+d*o,c=c*u+g*o,f=f*u+v*o,h=h*u+E*o}else{l=l*u+d*o,c=c*u+g*o,f=f*u+v*o,h=h*u+E*o;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+f*h+l*g-c*d,e[n+1]=l*v+f*d+c*h-o*g,e[n+2]=c*v+f*g+o*d-l*h,e[n+3]=f*v-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*g*v,this._y=c*g*h-d*f*v,this._z=c*f*v+d*g*h,this._w=c*f*h-d*g*v;break;case"YXZ":this._x=d*f*h+c*g*v,this._y=c*g*h-d*f*v,this._z=c*f*v-d*g*h,this._w=c*f*h+d*g*v;break;case"ZXY":this._x=d*f*h-c*g*v,this._y=c*g*h+d*f*v,this._z=c*f*v+d*g*h,this._w=c*f*h-d*g*v;break;case"ZYX":this._x=d*f*h-c*g*v,this._y=c*g*h+d*f*v,this._z=c*f*v-d*g*h,this._w=c*f*h+d*g*v;break;case"YZX":this._x=d*f*h+c*g*v,this._y=c*g*h+d*f*v,this._z=c*f*v-d*g*h,this._w=c*f*h-d*g*v;break;case"XZY":this._x=d*f*h-c*g*v,this._y=c*g*h-d*f*v,this._z=c*f*v+d*g*h,this._w=c*f*h+d*g*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new O,Wp=new Vs;class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],v=i[8],E=r[0],x=r[3],u=r[6],p=r[1],y=r[4],M=r[7],b=r[2],A=r[5],C=r[8];return s[0]=a*E+o*p+l*b,s[3]=a*x+o*y+l*A,s[6]=a*u+o*M+l*C,s[1]=c*E+f*p+h*b,s[4]=c*x+f*y+h*A,s[7]=c*u+f*M+h*C,s[2]=d*E+g*p+v*b,s[5]=d*x+g*y+v*A,s[8]=d*u+g*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,g=c*s-a*l,v=n*h+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=g*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new Oe,Xp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s1(){const t={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Nl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Is]:{primaries:e,whitePoint:i,transfer:Nl,toXYZ:Xp,fromXYZ:qp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Xp,fromXYZ:qp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const Ye=s1();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class a1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=Pl("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let l1=0;const Gc=new O;class rn extends Bs{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ei,r=Ei,s=Zt,a=Cr,o=Wn,l=Sn,c=rn.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Ya(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=ax;rn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],v=l[9],E=l[2],x=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-E)<.01&&Math.abs(v-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+E)<.1&&Math.abs(v+x)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(g+1)/2,b=(u+1)/2,A=(f+d)/4,C=(h+E)/4,_=(v+x)/4;return y>M&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=_/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-v)*(x-v)+(h-E)*(h-E)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(x-v)/p,this.y=(h-E)/p,this.z=(d-f)/p,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this.w=Ge(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this.w=Ge(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c1 extends Bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends c1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gx extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e,n,i,r,s,a,o,l,c,f,h,d,g,v,E,x){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,g,v,E,x)}set(e,n,i,r,s,a,o,l,c,f,h,d,g,v,E,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=v,u[11]=E,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*h,v=o*f,E=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+v*c,n[5]=d-E*c,n[9]=-o*l,n[2]=E-d*c,n[6]=v+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,v=c*f,E=c*h;n[0]=d+E*o,n[4]=v*o-g,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-v,n[6]=E+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,v=c*f,E=c*h;n[0]=d-E*o,n[4]=-a*h,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*f,n[9]=E-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*h,v=o*f,E=o*h;n[0]=l*f,n[4]=v*c-g,n[8]=d*c+E,n[1]=l*h,n[5]=E*c+d,n[9]=g*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,v=o*l,E=o*c;n[0]=l*f,n[4]=E-d*h,n[8]=v*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*h+v,n[10]=d-E*h}else if(e.order==="XZY"){const d=a*l,g=a*c,v=o*l,E=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+E,n[5]=a*f,n[9]=g*h-v,n[2]=v*h-g,n[6]=o*f,n[10]=E*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,f1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ki.crossVectors(i,vn),ki.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ki.crossVectors(i,vn)),ki.normalize(),vo.crossVectors(vn,ki),r[0]=ki.x,r[4]=vo.x,r[8]=vn.x,r[1]=ki.y,r[5]=vo.y,r[9]=vn.y,r[2]=ki.z,r[6]=vo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],v=i[2],E=i[6],x=i[10],u=i[14],p=i[3],y=i[7],M=i[11],b=i[15],A=r[0],C=r[4],_=r[8],w=r[12],P=r[1],N=r[5],D=r[9],z=r[13],X=r[2],V=r[6],j=r[10],k=r[14],H=r[3],q=r[7],Q=r[11],oe=r[15];return s[0]=a*A+o*P+l*X+c*H,s[4]=a*C+o*N+l*V+c*q,s[8]=a*_+o*D+l*j+c*Q,s[12]=a*w+o*z+l*k+c*oe,s[1]=f*A+h*P+d*X+g*H,s[5]=f*C+h*N+d*V+g*q,s[9]=f*_+h*D+d*j+g*Q,s[13]=f*w+h*z+d*k+g*oe,s[2]=v*A+E*P+x*X+u*H,s[6]=v*C+E*N+x*V+u*q,s[10]=v*_+E*D+x*j+u*Q,s[14]=v*w+E*z+x*k+u*oe,s[3]=p*A+y*P+M*X+b*H,s[7]=p*C+y*N+M*V+b*q,s[11]=p*_+y*D+M*j+b*Q,s[15]=p*w+y*z+M*k+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],v=e[3],E=e[7],x=e[11],u=e[15],p=l*g-c*d,y=o*g-c*h,M=o*d-l*h,b=a*g-c*f,A=a*d-l*f,C=a*h-o*f;return n*(E*p-x*y+u*M)-i*(v*p-x*b+u*A)+r*(v*y-E*b+u*C)-s*(v*M-E*A+x*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],v=e[12],E=e[13],x=e[14],u=e[15],p=n*o-i*a,y=n*l-r*a,M=n*c-s*a,b=i*l-r*o,A=i*c-s*o,C=r*c-s*l,_=f*E-h*v,w=f*x-d*v,P=f*u-g*v,N=h*x-d*E,D=h*u-g*E,z=d*u-g*x,X=p*z-y*D+M*N+b*P-A*w+C*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/X;return e[0]=(o*z-l*D+c*N)*V,e[1]=(r*D-i*z-s*N)*V,e[2]=(E*C-x*A+u*b)*V,e[3]=(d*A-h*C-g*b)*V,e[4]=(l*P-a*z-c*w)*V,e[5]=(n*z-r*P+s*w)*V,e[6]=(x*M-v*C-u*y)*V,e[7]=(f*C-d*M+g*y)*V,e[8]=(a*D-o*P+c*_)*V,e[9]=(i*P-n*D-s*_)*V,e[10]=(v*A-E*M+u*p)*V,e[11]=(h*M-f*A-g*p)*V,e[12]=(o*w-a*N-l*_)*V,e[13]=(n*N-i*w+r*_)*V,e[14]=(E*y-v*b-x*p)*V,e[15]=(f*b-h*y+d*p)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,g=s*f,v=s*h,E=a*f,x=a*h,u=o*h,p=l*c,y=l*f,M=l*h,b=i.x,A=i.y,C=i.z;return r[0]=(1-(E+u))*b,r[1]=(g+M)*b,r[2]=(v-y)*b,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(d+u))*A,r[6]=(x+p)*A,r[7]=0,r[8]=(v+y)*C,r[9]=(x-p)*C,r[10]=(1-(d+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const c=1/a,f=1/o,h=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=f,kn.elements[5]*=f,kn.elements[6]*=f,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===ri)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Va)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),g=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===ri)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===Va)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new O,kn=new vt,d1=new O(0,0,0),f1=new O(1,1,1),ki=new O,vo=new O,vn=new O,Yp=new vt,$p=new Vs;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";let xx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h1=0;const Kp=new O,qr=new Vs,pi=new vt,_o=new O,Js=new O,p1=new O,m1=new Vs,Zp=new O(1,0,0),Qp=new O(0,1,0),Jp=new O(0,0,1),em={type:"added"},g1={type:"removed"},Yr={type:"childadded",child:null},jc={type:"childremoved",child:null};class Gt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new O,n=new ui,i=new Vs,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Oe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Js,_o,this.up):pi.lookAt(_o,Js,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(pi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g1),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ua extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x1={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),u=this._getHandJoint(c,E);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=r1(e,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xc(a,s,e+1/3),this.g=Xc(a,s,e),this.b=Xc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ye.workingToColorSpace($t.copy(this),e),Math.round(Ge($t.r*255,0,255))*65536+Math.round(Ge($t.g*255,0,255))*256+Math.round(Ge($t.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Cn){Ye.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(yo);const i=zc(zi.h,yo.h,n),r=zc(zi.s,yo.s,n),s=zc(zi.l,yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new je;je.NAMES=vx;class ah{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oh extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new O,mi=new O,qc=new O,gi=new O,$r=new O,Kr=new O,tm=new O,Yc=new O,$c=new O,Kc=new O,Zc=new Mt,Qc=new Mt,Jc=new Mt;class jn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),mi.subVectors(i,n),qc.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(mi),l=zn.dot(qc),c=mi.dot(mi),f=mi.dot(qc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-o*f)*d,v=(a*f-o*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Zc.setScalar(0),Qc.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),Jc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zc,s.x),a.addScaledVector(Qc,s.y),a.addScaledVector(Jc,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),mi.subVectors(e,n),zn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),Kr.subVectors(s,i),Yc.subVectors(e,i);const l=$r.dot(Yc),c=Kr.dot(Yc);if(l<=0&&c<=0)return n.copy(i);$c.subVectors(e,r);const f=$r.dot($c),h=Kr.dot($c);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector($r,a);Kc.subVectors(e,s);const g=$r.dot(Kc),v=Kr.dot(Kc);if(v>=0&&g<=v)return n.copy(s);const E=g*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Kr,o);const x=f*v-g*h;if(x<=0&&h-f>=0&&g-v>=0)return tm.subVectors(s,r),o=(h-f)/(h-f+(g-v)),n.copy(r).addScaledVector(tm,o);const u=1/(x+E+d);return a=E*u,o=d*u,n.copy(i).addScaledVector($r,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Mo.subVectors(this.max,ea),Zr.subVectors(e.a,ea),Qr.subVectors(e.b,ea),Jr.subVectors(e.c,ea),Bi.subVectors(Qr,Zr),Vi.subVectors(Jr,Qr),pr.subVectors(Zr,Jr);let n=[0,-Bi.z,Bi.y,0,-Vi.z,Vi.y,0,-pr.z,pr.y,Bi.z,0,-Bi.x,Vi.z,0,-Vi.x,pr.z,0,-pr.x,-Bi.y,Bi.x,0,-Vi.y,Vi.x,0,-pr.y,pr.x,0];return!eu(n,Zr,Qr,Jr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!eu(n,Zr,Qr,Jr,Mo))?!1:(wo.crossVectors(Bi,Vi),n=[wo.x,wo.y,wo.z],eu(n,Zr,Qr,Jr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,So=new $a,Zr=new O,Qr=new O,Jr=new O,Bi=new O,Vi=new O,pr=new O,ea=new O,Mo=new O,wo=new O,mr=new O;function eu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const At=new O,Eo=new Xe;let v1=0;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class _x extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yx extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const _1=new $a,ta=new O,tu=new O;class Jl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(tu)),this.expandByPoint(ta.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let y1=0;const An=new vt,nu=new Gt,es=new O,_n=new $a,na=new $a,Ut=new O;class gn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e1(e)?yx:_x)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(_n.min,na.min),_n.expandByPoint(Ut),Ut.addVectors(_n.max,na.max),_n.expandByPoint(Ut)):(_n.expandByPoint(na.min),_n.expandByPoint(na.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ut.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ut.add(es)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new O,l[_]=new O;const c=new O,f=new O,h=new O,d=new Xe,g=new Xe,v=new Xe,E=new O,x=new O;function u(_,w,P){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,P),f.sub(c),h.sub(c),g.sub(d),v.sub(d);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(N),x.copy(h).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(N),o[_].add(E),o[w].add(E),o[P].add(E),l[_].add(x),l[w].add(x),l[P].add(x))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let _=0,w=p.length;_<w;++_){const P=p[_],N=P.start,D=P.count;for(let z=N,X=N+D;z<X;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new O,M=new O,b=new O,A=new O;function C(_){b.fromBufferAttribute(r,_),A.copy(b);const w=o[_];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),M.crossVectors(A,w);const N=M.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,N)}for(let _=0,w=p.length;_<w;++_){const P=p[_],N=P.start,D=P.count;for(let z=N,X=N+D;z<X;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),E=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let g=0,v=0;for(let E=0,x=l.length;E<x;E++){o.isInterleavedBufferAttribute?g=l[E]*o.data.stride+o.offset:g=l[E]*f;for(let u=0;u<f;u++)d[v++]=c[g++]}return new Yn(d,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let S1=0;class Hs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Ms,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new O,iu=new O,To=new O,Hi=new O,ru=new O,bo=new O,su=new O;class Sx{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){iu.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(iu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(To),o=Hi.dot(this.direction),l=-Hi.dot(To),c=Hi.lengthSq(),f=Math.abs(1-a*a);let h,d,g,v;if(f>0)if(h=a*l-o,d=a*o-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const E=1/f;h*=E,d*=E,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(iu).addScaledVector(To,d),g}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){ru.subVectors(n,e),bo.subVectors(i,e),su.crossVectors(ru,bo);let a=this.direction.dot(su),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Hi,bo));if(l<0)return null;const c=o*this.direction.dot(ru.cross(Hi));if(c<0||l+c>a)return null;const f=-o*Hi.dot(su);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Us extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nm=new vt,gr=new Sx,Ao=new Jl,im=new O,Co=new O,Ro=new O,No=new O,au=new O,Po=new O,rm=new O,Lo=new O;class mn extends Gt{constructor(e=new gn,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(au.fromBufferAttribute(h,e),a?Po.addScaledVector(au,f):Po.addScaledVector(au.sub(n),f))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ao.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ao,im)===null||gr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){const x=d[v],u=a[x.materialIndex],p=Math.max(x.start,g.start),y=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let M=p,b=y;M<b;M+=3){const A=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);r=Do(this,u,e,i,c,f,h,A,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let x=v,u=E;x<u;x+=3){const p=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);r=Do(this,a,e,i,c,f,h,p,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){const x=d[v],u=a[x.materialIndex],p=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=p,b=y;M<b;M+=3){const A=M,C=M+1,_=M+2;r=Do(this,u,e,i,c,f,h,A,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let x=v,u=E;x<u;x+=3){const p=x,y=x+1,M=x+2;r=Do(this,a,e,i,c,f,h,p,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function M1(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Co),t.getVertexPosition(l,Ro),t.getVertexPosition(c,No);const f=M1(t,e,n,i,Co,Ro,No,rm);if(f){const h=new O;jn.getBarycoord(rm,Co,Ro,No,h),r&&(f.uv=jn.getInterpolatedAttribute(r,o,l,c,h,new Xe)),s&&(f.uv1=jn.getInterpolatedAttribute(s,o,l,c,h,new Xe)),a&&(f.normal=jn.getInterpolatedAttribute(a,o,l,c,h,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};jn.getNormal(Co,Ro,No,d.normal),f.face=d,f.barycoord=h}return f}class w1 extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Vt,f=Vt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new O,E1=new O,T1=new Oe;class Mr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ou.subVectors(i,n).cross(E1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||T1.getNormalMatrix(e),r=this.coplanarPoint(ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Jl,b1=new Xe(.5,.5),Io=new O;class lh{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr,a=new Mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],g=s[7],v=s[8],E=s[9],x=s[10],u=s[11],p=s[12],y=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-a,g-f,u-v,b-p).normalize(),r[1].setComponents(c+a,g+f,u+v,b+p).normalize(),r[2].setComponents(c+o,g+h,u+E,b+y).normalize(),r[3].setComponents(c-o,g-h,u-E,b-y).normalize(),i)r[4].setComponents(l,d,x,M).normalize(),r[5].setComponents(c-l,g-d,u-x,b-M).normalize();else if(r[4].setComponents(c-l,g-d,u-x,b-M).normalize(),n===ri)r[5].setComponents(c+l,g+d,u+x,b+M).normalize();else if(n===Va)r[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const n=b1.distanceTo(e.center);return xr.radius=.7071067811865476+n,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sm=new vt,Zd=new Sx,Uo=new Jl,Fo=new O;class A1 extends Gt{constructor(e=new gn,n=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;sm.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=d,E=g;v<E;v++){const x=c.getX(v);Fo.fromBufferAttribute(h,x),am(Fo,x,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,E=g;v<E;v++)Fo.fromBufferAttribute(h,v),am(Fo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function am(t,e,n,i,r,s,a){const o=Zd.distanceSqToPoint(t);if(o<n){const l=new O;Zd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wx extends rn{constructor(e=[],n=Or,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends rn{constructor(e,n,i=ci,r,s,a,o=Vt,l=Vt,c,f=Di,h=1){if(f!==Di&&f!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class C1 extends Ha{constructor(e,n=ci,i=Or,r,s,a=Vt,o=Vt,l,c=Di){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ex extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Br extends gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(h,2));function v(E,x,u,p,y,M,b,A,C,_,w){const P=M/C,N=b/_,D=M/2,z=b/2,X=A/2,V=C+1,j=_+1;let k=0,H=0;const q=new O;for(let Q=0;Q<j;Q++){const oe=Q*N-z;for(let re=0;re<V;re++){const Pe=re*P-D;q[E]=Pe*p,q[x]=oe*y,q[u]=X,c.push(q.x,q.y,q.z),q[E]=0,q[x]=0,q[u]=A>0?1:-1,f.push(q.x,q.y,q.z),h.push(re/C),h.push(1-Q/_),k+=1}}for(let Q=0;Q<_;Q++)for(let oe=0;oe<C;oe++){const re=d+oe+V*Q,Pe=d+oe+V*(Q+1),Ke=d+(oe+1)+V*(Q+1),et=d+(oe+1)+V*Q;l.push(re,Pe,et),l.push(Pe,Ke,et),H+=6}o.addGroup(g,H,w),g+=H,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ec extends gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],g=[];let v=0;const E=[],x=i/2;let u=0;p(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(g,2));function p(){const M=new O,b=new O;let A=0;const C=(n-e)/i;for(let _=0;_<=s;_++){const w=[],P=_/s,N=P*(n-e)+e;for(let D=0;D<=r;D++){const z=D/r,X=z*l+o,V=Math.sin(X),j=Math.cos(X);b.x=N*V,b.y=-P*i+x,b.z=N*j,h.push(b.x,b.y,b.z),M.set(V,C,j).normalize(),d.push(M.x,M.y,M.z),g.push(z,1-P),w.push(v++)}E.push(w)}for(let _=0;_<r;_++)for(let w=0;w<s;w++){const P=E[w][_],N=E[w+1][_],D=E[w+1][_+1],z=E[w][_+1];(e>0||w!==0)&&(f.push(P,N,z),A+=3),(n>0||w!==s-1)&&(f.push(N,D,z),A+=3)}c.addGroup(u,A,0),u+=A}function y(M){const b=v,A=new Xe,C=new O;let _=0;const w=M===!0?e:n,P=M===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,x*P,0),d.push(0,P,0),g.push(.5,.5),v++;const N=v;for(let D=0;D<=r;D++){const X=D/r*l+o,V=Math.cos(X),j=Math.sin(X);C.x=w*j,C.y=x*P,C.z=w*V,h.push(C.x,C.y,C.z),d.push(0,P,0),A.x=V*.5+.5,A.y=j*.5*P+.5,g.push(A.x,A.y),v++}for(let D=0;D<r;D++){const z=b+D,X=N+D;M===!0?f.push(X,X+1,z):f.push(X+1,X,z),_+=3}c.addGroup(u,_,M===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(p){const y=new O,M=new O,b=new O;for(let A=0;A<n.length;A+=3)g(n[A+0],y),g(n[A+1],M),g(n[A+2],b),l(y,M,b,p)}function l(p,y,M,b){const A=b+1,C=[];for(let _=0;_<=A;_++){C[_]=[];const w=p.clone().lerp(M,_/A),P=y.clone().lerp(M,_/A),N=A-_;for(let D=0;D<=N;D++)D===0&&_===A?C[_][D]=w:C[_][D]=w.clone().lerp(P,D/N)}for(let _=0;_<A;_++)for(let w=0;w<2*(A-_)-1;w++){const P=Math.floor(w/2);w%2===0?(d(C[_][P+1]),d(C[_+1][P]),d(C[_][P])):(d(C[_][P+1]),d(C[_+1][P+1]),d(C[_+1][P]))}}function c(p){const y=new O;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(p),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function f(){const p=new O;for(let y=0;y<s.length;y+=3){p.x=s[y+0],p.y=s[y+1],p.z=s[y+2];const M=x(p)/2/Math.PI+.5,b=u(p)/Math.PI+.5;a.push(M,1-b)}v(),h()}function h(){for(let p=0;p<a.length;p+=6){const y=a[p+0],M=a[p+2],b=a[p+4],A=Math.max(y,M,b),C=Math.min(y,M,b);A>.9&&C<.1&&(y<.2&&(a[p+0]+=1),M<.2&&(a[p+2]+=1),b<.2&&(a[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function g(p,y){const M=p*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const p=new O,y=new O,M=new O,b=new O,A=new Xe,C=new Xe,_=new Xe;for(let w=0,P=0;w<s.length;w+=9,P+=6){p.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),A.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),b.copy(p).add(y).add(M).divideScalar(3);const N=x(b);E(A,P+0,p,N),E(C,P+2,y,N),E(_,P+4,M,N)}}function E(p,y,M,b){b<0&&p.x===1&&(a[y]=p.x-1),M.x===0&&M.z===0&&(a[y]=b/2/Math.PI+.5)}function x(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.vertices,e.indices,e.radius,e.detail)}}class tc extends Ka{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new tc(e.radius,e.detail)}}class ch extends Ka{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ch(e.radius,e.detail)}}class nc extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,g=[],v=[],E=[],x=[];for(let u=0;u<f;u++){const p=u*d-a;for(let y=0;y<c;y++){const M=y*h-s;v.push(M,-p,0),E.push(0,0,1),x.push(y/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){const y=p+c*u,M=p+c*(u+1),b=p+1+c*(u+1),A=p+1+c*u;g.push(y,M,A),g.push(M,b,A)}this.setIndex(g),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(E,3)),this.setAttribute("uv",new kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class uh extends Ka{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new uh(e.radius,e.detail)}}class ic extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],d=new O,g=new O,v=new O;for(let E=0;E<=i;E++){const x=a+E/i*o;for(let u=0;u<=r;u++){const p=u/r*s;g.x=(e+n*Math.cos(x))*Math.cos(p),g.y=(e+n*Math.cos(x))*Math.sin(p),g.z=n*Math.sin(x),c.push(g.x,g.y,g.z),d.x=e*Math.cos(p),d.y=e*Math.sin(p),v.subVectors(g,d).normalize(),f.push(v.x,v.y,v.z),h.push(u/r),h.push(E/i)}}for(let E=1;E<=i;E++)for(let x=1;x<=r;x++){const u=(r+1)*E+x-1,p=(r+1)*(E-1)+x-1,y=(r+1)*(E-1)+x,M=(r+1)*E+x;l.push(u,p,M),l.push(p,y,M)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function R1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const N1={clone:Fs,merge:Jt};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=L1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=R1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class D1 extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dh extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fh extends dh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class I1 extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hh extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const lu=new vt,om=new O,lm=new O;class bx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;om.setFromMatrixPosition(e.matrixWorld),n.position.copy(om),lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lm),n.updateMatrixWorld(),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Va||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new O,ko=new Vs,Qn=new O;let Ax=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,ko,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,ko,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Oo,ko,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,ko,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Gi=new O,cm=new Xe,um=new Xe;class tn extends Ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,cm,um),n.subVectors(um,cm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class F1 extends bx{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class dm extends hh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new F1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class ph extends Ax{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class O1 extends bx{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fm extends hh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new O1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class mh extends hh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ts=-90,ns=1;class k1 extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new tn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new tn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new tn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new tn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new tn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class z1 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hm(t,e,n,i){const r=B1(i);switch(n){case dx:return t*e;case hx:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case Ds:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case fx:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:case Sd:return Math.max(t,16)*Math.max(e,8)/4;case vd:case yd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case wd:case Td:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ed:case Ad:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gd:case jd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B1(t){switch(t){case Sn:case ox:return{byteLength:1,components:1};case za:case lx:case Li:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case ci:case Zf:case ii:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function V1(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<h.length;g++){const v=h[d],E=h[g];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++d,h[d]=E)}h.length=d+1;for(let g=0,v=h.length;g<v;g++){const E=h[g];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$M=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_w=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:H1,alphahash_pars_fragment:G1,alphamap_fragment:j1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:q1,aomap_fragment:Y1,aomap_pars_fragment:$1,batching_pars_vertex:K1,batching_vertex:Z1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:aS,color_fragment:oS,color_pars_fragment:lS,color_pars_vertex:cS,color_vertex:uS,common:dS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:hS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:xS,colorspace_fragment:vS,colorspace_pars_fragment:_S,envmap_fragment:yS,envmap_common_pars_fragment:SS,envmap_pars_fragment:MS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:IS,envmap_vertex:ES,fog_vertex:TS,fog_pars_vertex:bS,fog_fragment:AS,fog_pars_fragment:CS,gradientmap_pars_fragment:RS,lightmap_pars_fragment:NS,lights_lambert_fragment:PS,lights_lambert_pars_fragment:LS,lights_pars_begin:DS,lights_toon_fragment:US,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:kS,lights_physical_fragment:zS,lights_physical_pars_fragment:BS,lights_fragment_begin:VS,lights_fragment_maps:HS,lights_fragment_end:GS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:qS,map_fragment:YS,map_pars_fragment:$S,map_particle_fragment:KS,map_particle_pars_fragment:ZS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:JS,morphinstance_vertex:eM,morphcolor_vertex:tM,morphnormal_vertex:nM,morphtarget_pars_vertex:iM,morphtarget_vertex:rM,normal_fragment_begin:sM,normal_fragment_maps:aM,normal_pars_fragment:oM,normal_pars_vertex:lM,normal_vertex:cM,normalmap_pars_fragment:uM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:hM,iridescence_pars_fragment:pM,opaque_fragment:mM,packing:gM,premultiplied_alpha_fragment:xM,project_vertex:vM,dithering_fragment:_M,dithering_pars_fragment:yM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:EM,shadowmap_vertex:TM,shadowmask_pars_fragment:bM,skinbase_vertex:AM,skinning_pars_vertex:CM,skinning_vertex:RM,skinnormal_vertex:NM,specularmap_fragment:PM,specularmap_pars_fragment:LM,tonemapping_fragment:DM,tonemapping_pars_fragment:IM,transmission_fragment:UM,transmission_pars_fragment:FM,uv_pars_fragment:OM,uv_pars_vertex:kM,uv_vertex:zM,worldpos_vertex:BM,background_vert:VM,background_frag:HM,backgroundCube_vert:GM,backgroundCube_frag:jM,cube_vert:WM,cube_frag:XM,depth_vert:qM,depth_frag:YM,distance_vert:$M,distance_frag:KM,equirect_vert:ZM,equirect_frag:QM,linedashed_vert:JM,linedashed_frag:ew,meshbasic_vert:tw,meshbasic_frag:nw,meshlambert_vert:iw,meshlambert_frag:rw,meshmatcap_vert:sw,meshmatcap_frag:aw,meshnormal_vert:ow,meshnormal_frag:lw,meshphong_vert:cw,meshphong_frag:uw,meshphysical_vert:dw,meshphysical_frag:fw,meshtoon_vert:hw,meshtoon_frag:pw,points_vert:mw,points_frag:gw,shadow_vert:xw,shadow_frag:vw,sprite_vert:_w,sprite_frag:yw},de={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ti={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ti.physical={uniforms:Jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const zo={r:0,b:0,g:0},vr=new ui,Sw=new vt;function Mw(t,e,n,i,r,s){const a=new je(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function g(p){let y=p.isScene===!0?p.background:null;if(y&&y.isTexture){const M=p.backgroundBlurriness>0;y=e.get(y,M)}return y}function v(p){let y=!1;const M=g(p);M===null?x(a,o):M&&M.isColor&&(x(M,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(p,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Ql)?(c===void 0&&(c=new mn(new Br(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Fs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),vr.copy(y.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(vr)),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==it,(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mn(new nc(2,2),new di({name:"BackgroundMaterial",uniforms:Fs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,y){p.getRGB(zo,Tx(t)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,y=1){a.set(p),o=y,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:v,addToRenderList:E,dispose:u}}function ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,D,z,X,V){let j=!1;const k=h(N,X,z,D);s!==k&&(s=k,c(s.object)),j=g(N,X,z,V),j&&v(N,X,z,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(N,D,z,X),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function h(N,D,z,X){const V=X.wireframe===!0;let j=i[D.id];j===void 0&&(j={},i[D.id]=j);const k=N.isInstancedMesh===!0?N.id:0;let H=j[k];H===void 0&&(H={},j[k]=H);let q=H[z.id];q===void 0&&(q={},H[z.id]=q);let Q=q[V];return Q===void 0&&(Q=d(l()),q[V]=Q),Q}function d(N){const D=[],z=[],X=[];for(let V=0;V<n;V++)D[V]=0,z[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:X,object:N,attributes:{},index:null}}function g(N,D,z,X){const V=s.attributes,j=D.attributes;let k=0;const H=z.getAttributes();for(const q in H)if(H[q].location>=0){const oe=V[q];let re=j[q];if(re===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),oe===void 0||oe.attribute!==re||re&&oe.data!==re.data)return!0;k++}return s.attributesNum!==k||s.index!==X}function v(N,D,z,X){const V={},j=D.attributes;let k=0;const H=z.getAttributes();for(const q in H)if(H[q].location>=0){let oe=j[q];oe===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));const re={};re.attribute=oe,oe&&oe.data&&(re.data=oe.data),V[q]=re,k++}s.attributes=V,s.attributesNum=k,s.index=X}function E(){const N=s.newAttributes;for(let D=0,z=N.length;D<z;D++)N[D]=0}function x(N){u(N,0)}function u(N,D){const z=s.newAttributes,X=s.enabledAttributes,V=s.attributeDivisors;z[N]=1,X[N]===0&&(t.enableVertexAttribArray(N),X[N]=1),V[N]!==D&&(t.vertexAttribDivisor(N,D),V[N]=D)}function p(){const N=s.newAttributes,D=s.enabledAttributes;for(let z=0,X=D.length;z<X;z++)D[z]!==N[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function y(N,D,z,X,V,j,k){k===!0?t.vertexAttribIPointer(N,D,z,V,j):t.vertexAttribPointer(N,D,z,X,V,j)}function M(N,D,z,X){E();const V=X.attributes,j=z.getAttributes(),k=D.defaultAttributeValues;for(const H in j){const q=j[H];if(q.location>=0){let Q=V[H];if(Q===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const oe=Q.normalized,re=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;const Ke=Pe.buffer,et=Pe.type,K=Pe.bytesPerElement,ie=et===t.INT||et===t.UNSIGNED_INT||Q.gpuType===Zf;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Fe=ue.stride,Re=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)u(q.location+Le,ue.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<q.locationSize;Le++)x(q.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Le=0;Le<q.locationSize;Le++)y(q.location+Le,re/q.locationSize,et,oe,Fe*K,(Re+re/q.locationSize*Le)*K,ie)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)u(q.location+ue,Q.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<q.locationSize;ue++)x(q.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,re/q.locationSize,et,oe,re*K,re/q.locationSize*ue*K,ie)}}else if(k!==void 0){const oe=k[H];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(q.location,oe);break;case 3:t.vertexAttrib3fv(q.location,oe);break;case 4:t.vertexAttrib4fv(q.location,oe);break;default:t.vertexAttrib1fv(q.location,oe)}}}}p()}function b(){w();for(const N in i){const D=i[N];for(const z in D){const X=D[z];for(const V in X){const j=X[V];for(const k in j)f(j[k].object),delete j[k];delete X[V]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;const D=i[N.id];for(const z in D){const X=D[z];for(const V in X){const j=X[V];for(const k in j)f(j[k].object),delete j[k];delete X[V]}}delete i[N.id]}function C(N){for(const D in i){const z=i[D];for(const X in z){const V=z[X];if(V[N.id]===void 0)continue;const j=V[N.id];for(const k in j)f(j[k].object),delete j[k];delete V[N.id]}}}function _(N){for(const D in i){const z=i[D],X=N.isInstancedMesh===!0?N.id:0,V=z[X];if(V!==void 0){for(const j in V){const k=V[j];for(const H in k)f(k[H].object),delete k[H];delete V[j]}delete z[X],Object.keys(z).length===0&&delete i[D]}}}function w(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:x,disableUnusedAttributes:p}}function Ew(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];n.update(g,i,1)}function l(c,f,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)a(c[v],f[v],d[v]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let E=0;E<h;E++)v+=f[E]*d[E];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Wn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:A}}function bw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Mr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,E=h.clipIntersection,x=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!x)s?f(null):c();else{const p=s?0:i,y=p*4;let M=u.clippingState||null;l.value=M,M=f(v,d,y,g);for(let b=0;b!==y;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,v){const E=h!==null?h.length:0;let x=null;if(E!==0){if(x=l.value,v!==!0||x===null){const u=g+E*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<u)&&(x=new Float32Array(u));for(let y=0,M=g;y!==E;++y,M+=4)a.copy(h[y]).applyMatrix4(p,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const Zi=4,pm=[.125,.215,.35,.446,.526,.582],Er=20,Aw=256,ia=new ph,mm=new je;let cu=null,uu=0,du=0,fu=!1;const Cw=new O;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Cw}=s;cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,du),this._renderer.xr.enabled=fu,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Li,format:Wn,colorSpace:Is,depthBuffer:!1},r=xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rw(s)),this._blurMaterial=Pw(s,e,n),this._ggxMaterial=Nw(s,e,n)}return r}_compileMaterial(e){const n=new mn(new gn,e);this._renderer.compile(n,ia)}_sceneToCubeUV(e,n,i,r,s){const l=new tn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(mm),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Br,new Us({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let u=!1;const p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,u=!0):(x.color.copy(mm),u=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const b=this._cubeSize;is(r,M*b,y>2?b:0,b,b),h.setRenderTarget(r),u&&h.render(E,l),h.render(e,l)}h.toneMapping=g,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,g=h*d,{_lodMax:v}=this,E=this._sizeLods[i],x=3*E*(i>v-Zi?i-v+Zi:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-n,is(s,x,u,3*E,2*E),r.setRenderTarget(s),r.render(o,ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,is(e,x,u,3*E,2*E),r.setRenderTarget(e),r.render(o,ia)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Er-1),E=s/v,x=isFinite(s)?1+Math.floor(f*E):Er;x>Er&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Er}`);const u=[];let p=0;for(let C=0;C<Er;++C){const _=C/E,w=Math.exp(-_*_/2);u.push(w),C===0?p+=w:C<x&&(p+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const M=this._sizeLods[r],b=3*M*(r>y-Zi?r-y+Zi:0),A=4*(this._cubeSize-M);is(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(h,ia)}}function Rw(t){const e=[],n=[],i=[];let r=t;const s=t-Zi+1+pm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Zi?l=pm[a-t+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,v=6,E=3,x=2,u=1,p=new Float32Array(E*v*g),y=new Float32Array(x*v*g),M=new Float32Array(u*v*g);for(let A=0;A<g;A++){const C=A%3*2/3-1,_=A>2?0:-1,w=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];p.set(w,E*v*A),y.set(d,x*v*A);const P=[A,A,A,A,A,A];M.set(P,u*v*A)}const b=new gn;b.setAttribute("position",new Yn(p,E)),b.setAttribute("uv",new Yn(y,x)),b.setAttribute("faceIndex",new Yn(M,u)),i.push(new mn(b,null)),r>Zi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xm(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nw(t,e,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Aw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Pw(t,e,n){const i=new Float32Array(Er),r=new O(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function vm(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _m(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nx extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Br(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:bi});s.uniforms.tEquirect.value=n;const a=new mn(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Zt),new k1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Lw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===Uc||g===Fc)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const E=new Nx(v.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const g=d.mapping,v=g===Uc||g===Fc,E=g===Or||g===Ls;if(v||E){let x=n.get(d);const u=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new gm(t)),x=v?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const p=d.image;return v&&p&&p.height>0||E&&p&&l(p)?(i===null&&(i=new gm(t)),x=v?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function o(d,g){return g===Uc?d.mapping=Or:g===Fc&&(d.mapping=Ls),d}function l(d){let g=0;const v=6;for(let E=0;E<v;E++)d[E]!==void 0&&g++;return g===v}function c(d){const g=d.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(d){const g=d.target;g.removeEventListener("dispose",f);const v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Dw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ll("WebGLRenderer: "+i+" extension not supported."),r}}}function Iw(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER)}function c(h){const d=[],g=h.index,v=h.attributes.position;let E=0;if(v===void 0)return;if(g!==null){const p=g.array;E=g.version;for(let y=0,M=p.length;y<M;y+=3){const b=p[y+0],A=p[y+1],C=p[y+2];d.push(b,A,A,C,C,b)}}else{const p=v.array;E=v.version;for(let y=0,M=p.length/3-1;y<M;y+=3){const b=y+0,A=y+1,C=y+2;d.push(b,A,A,C,C,b)}}const x=new(v.count>=65535?yx:_x)(d,1);x.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,x)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Uw(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,g){t.drawElements(i,g,s,d*a),n.update(g,i,1)}function c(d,g,v){v!==0&&(t.drawElementsInstanced(i,g,s,d*a,v),n.update(g,i,v))}function f(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,v);let x=0;for(let u=0;u<v;u++)x+=g[u];n.update(x,i,1)}function h(d,g,v,E){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<d.length;u++)c(d[u]/a,g[u],E[u]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,E,0,v);let u=0;for(let p=0;p<v;p++)u+=g[p]*E[p];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ow(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var g=P;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*h),_=new gx(C,b,A,h);_.type=ii,_.needsUpdate=!0;const w=M*4;for(let N=0;N<h;N++){const D=u[N],z=p[N],X=y[N],V=b*A*4*N;for(let j=0;j<D.count;j++){const k=j*w;v===!0&&(r.fromBufferAttribute(D,j),C[V+k+0]=r.x,C[V+k+1]=r.y,C[V+k+2]=r.z,C[V+k+3]=0),E===!0&&(r.fromBufferAttribute(z,j),C[V+k+4]=r.x,C[V+k+5]=r.y,C[V+k+6]=r.z,C[V+k+7]=0),x===!0&&(r.fromBufferAttribute(X,j),C[V+k+8]=r.x,C[V+k+9]=r.y,C[V+k+10]=r.z,C[V+k+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Xe(b,A)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function kw(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const zw={[Jg]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[rx]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function Bw(t,e,n,i,r){const s=new li(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new li(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new gn;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new D1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new mn(o,l),f=new ph(-1,1,1,-1,0,1);let h=null,d=null,g=!1,v,E=null,x=[],u=!1;this.setSize=function(p,y){s.setSize(p,y),a.setSize(p,y);for(let M=0;M<x.length;M++){const b=x[M];b.setSize&&b.setSize(p,y)}},this.setEffects=function(p){x=p,u=x.length>0&&x[0].isRenderPass===!0;const y=s.width,M=s.height;for(let b=0;b<x.length;b++){const A=x[b];A.setSize&&A.setSize(y,M)}},this.begin=function(p,y){if(g||p.toneMapping===oi&&x.length===0)return!1;if(E=y,y!==null){const M=y.width,b=y.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return u===!1&&p.setRenderTarget(s),v=p.toneMapping,p.toneMapping=oi,!0},this.hasRenderPass=function(){return u},this.end=function(p,y){p.toneMapping=v,g=!0;let M=s,b=a;for(let A=0;A<x.length;A++){const C=x[A];if(C.enabled!==!1&&(C.render(p,b,M,y),C.needsSwap!==!1)){const _=M;M=b,b=_}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},Ye.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const A=zw[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(E),p.render(c,f),E=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Px=new rn,Qd=new Ha(1,1),Lx=new gx,Dx=new u1,Ix=new wx,ym=[],Sm=[],Mm=new Float32Array(16),wm=new Float32Array(9),Em=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function Ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Em.set(i),t.uniformMatrix2fv(this.addr,!1,Em),Lt(n,i)}}function Xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),Lt(n,i)}}function qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Mm.set(i),t.uniformMatrix4fv(this.addr,!1,Mm),Lt(n,i)}}function Yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function tE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function nE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qd.compareFunction=n.isReversedDepthBuffer()?rh:ih,s=Qd):s=Px,n.setTexture2D(e||s,r)}function iE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dx,r)}function rE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ix,r)}function sE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lx,r)}function aE(t){switch(t){case 5126:return Vw;case 35664:return Hw;case 35665:return Gw;case 35666:return jw;case 35674:return Ww;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return Yw;case 35667:case 35671:return $w;case 35668:case 35672:return Kw;case 35669:case 35673:return Zw;case 5125:return Qw;case 36294:return Jw;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}function oE(t,e){t.uniform1fv(this.addr,e)}function lE(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function cE(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function uE(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function dE(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fE(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hE(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pE(t,e){t.uniform1iv(this.addr,e)}function mE(t,e){t.uniform2iv(this.addr,e)}function gE(t,e){t.uniform3iv(this.addr,e)}function xE(t,e){t.uniform4iv(this.addr,e)}function vE(t,e){t.uniform1uiv(this.addr,e)}function _E(t,e){t.uniform2uiv(this.addr,e)}function yE(t,e){t.uniform3uiv(this.addr,e)}function SE(t,e){t.uniform4uiv(this.addr,e)}function ME(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Qd:a=Px;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function wE(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Dx,s[a])}function EE(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ix,s[a])}function TE(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lx,s[a])}function bE(t){switch(t){case 5126:return oE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return dE;case 35675:return fE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return xE;case 5125:return vE;case 36294:return _E;case 36295:return yE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return TE}}class AE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aE(n.type)}}class CE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bE(n.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function NE(t,e,n){const i=t.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),a=hu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tm(n,c===void 0?new AE(o,t,e):new CE(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new RE(o),Tm(n,h)),n=h}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);NE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PE=37297;let LE=0;function DE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Am=new Oe;function IE(t){Ye._getMatrix(Am,Ye.workingColorSpace,t);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Nl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+DE(t.getShaderSource(e),o)}else return s}function UE(t,e){const n=IE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FE={[Jg]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[rx]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function OE(t,e){const n=FE[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bo=new O;function kE(){Ye.getLuminanceCoefficients(Bo);const t=Bo.x.toFixed(4),e=Bo.y.toFixed(4),n=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function BE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function da(t){return t!==""}function Rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(t){return t.replace(HE,jE)}const GE=new Map;function jE(t,e){let n=ke[e];if(n===void 0){const i=GE.get(e);if(i!==void 0)n=ke[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(n)}const WE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(t){return t.replace(WE,XE)}function XE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qE={[Jo]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function YE(t){return qE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $E={[Or]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function KE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":$E[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZE={[Ls]:"ENVMAP_MODE_REFRACTION"};function QE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ZE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JE={[Qg]:"ENVMAP_BLENDING_MULTIPLY",[Gy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function e2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":JE[t.combine]||"ENVMAP_BLENDING_NONE"}function t2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function n2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=YE(n),c=KE(n),f=QE(n),h=e2(n),d=t2(n),g=zE(n),v=BE(s),E=r.createProgram();let x,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(da).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(da).join(`
`),u.length>0&&(u+=`
`)):(x=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?ke.tonemapping_pars_fragment:"",n.toneMapping!==oi?OE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,UE("linearToOutputTexel",n.outputColorSpace),kE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=Jd(a),a=Rm(a,n),a=Nm(a,n),o=Jd(o),o=Rm(o,n),o=Nm(o,n),a=Pm(a),o=Pm(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=p+x+a,M=p+u+o,b=bm(r,r.VERTEX_SHADER,y),A=bm(r,r.FRAGMENT_SHADER,M);r.attachShader(E,b),r.attachShader(E,A),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(N){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(E)||"",z=r.getShaderInfoLog(b)||"",X=r.getShaderInfoLog(A)||"",V=D.trim(),j=z.trim(),k=X.trim();let H=!0,q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,b,A);else{const Q=Cm(r,b,"vertex"),oe=Cm(r,A,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+Q+`
`+oe)}else V!==""?De("WebGLProgram: Program Info Log:",V):(j===""||k==="")&&(q=!1);q&&(N.diagnostics={runnable:H,programLog:V,vertexShader:{log:j,prefix:x},fragmentShader:{log:k,prefix:u}})}r.deleteShader(b),r.deleteShader(A),_=new rl(r,E),w=VE(r,E)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,PE)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=A,this}let i2=0;class r2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new s2(e),n.set(e,i)),i}}class s2{constructor(e){this.id=i2++,this.code=e,this.usedTimes=0}}function a2(t,e,n,i,r,s){const a=new xx,o=new r2,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,w,P,N,D){const z=N.fog,X=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||V,j),H=k&&k.mapping===Ql?k.image.height:null,q=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Q!==void 0?Q.length:0;let re=0;X.morphAttributes.position!==void 0&&(re=1),X.morphAttributes.normal!==void 0&&(re=2),X.morphAttributes.color!==void 0&&(re=3);let Pe,Ke,et,K;if(q){const nt=ti[q];Pe=nt.vertexShader,Ke=nt.fragmentShader}else Pe=_.vertexShader,Ke=_.fragmentShader,o.update(_),et=o.getVertexShaderID(_),K=o.getFragmentShaderID(_);const ie=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,Le=!!_.map,Dt=!!_.matcap,qe=!!k,tt=!!_.aoMap,lt=!!_.lightMap,ze=!!_.bumpMap,wt=!!_.normalMap,L=!!_.displacementMap,bt=!!_.emissiveMap,Je=!!_.metalnessMap,ut=!!_.roughnessMap,Ee=_.anisotropy>0,R=_.clearcoat>0,S=_.dispersion>0,U=_.iridescence>0,Z=_.sheen>0,J=_.transmission>0,$=Ee&&!!_.anisotropyMap,_e=R&&!!_.clearcoatMap,le=R&&!!_.clearcoatNormalMap,Ce=R&&!!_.clearcoatRoughnessMap,Ne=U&&!!_.iridescenceMap,te=U&&!!_.iridescenceThicknessMap,se=Z&&!!_.sheenColorMap,ye=Z&&!!_.sheenRoughnessMap,Me=!!_.specularMap,me=!!_.specularColorMap,Be=!!_.specularIntensityMap,I=J&&!!_.transmissionMap,ce=J&&!!_.thicknessMap,ae=!!_.gradientMap,ve=!!_.alphaMap,ne=_.alphaTest>0,Y=!!_.alphaHash,Se=!!_.extensions;let Ie=oi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const dt={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Pe,fragmentShader:Ke,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Is,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:Dt,envMap:qe,envMapMode:qe&&k.mapping,envMapCubeUVHeight:H,aoMap:tt,lightMap:lt,bumpMap:ze,normalMap:wt,displacementMap:L,emissiveMap:bt,normalMapObjectSpace:wt&&_.normalMapType===qy,normalMapTangentSpace:wt&&_.normalMapType===px,metalnessMap:Je,roughnessMap:ut,anisotropy:Ee,anisotropyMap:$,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:S,iridescence:U,iridescenceMap:Ne,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:se,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:me,specularIntensityMap:Be,transmission:J,transmissionMap:I,thicknessMap:ce,gradientMap:ae,opaque:_.transparent===!1&&_.blending===Ms&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:Y,combine:_.combine,mapUv:Le&&v(_.map.channel),aoMapUv:tt&&v(_.aoMap.channel),lightMapUv:lt&&v(_.lightMap.channel),bumpMapUv:ze&&v(_.bumpMap.channel),normalMapUv:wt&&v(_.normalMap.channel),displacementMapUv:L&&v(_.displacementMap.channel),emissiveMapUv:bt&&v(_.emissiveMap.channel),metalnessMapUv:Je&&v(_.metalnessMap.channel),roughnessMapUv:ut&&v(_.roughnessMap.channel),anisotropyMapUv:$&&v(_.anisotropyMap.channel),clearcoatMapUv:_e&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(_.sheenRoughnessMap.channel),specularMapUv:Me&&v(_.specularMap.channel),specularColorMapUv:me&&v(_.specularColorMap.channel),specularIntensityMapUv:Be&&v(_.specularIntensityMap.channel),transmissionMapUv:I&&v(_.transmissionMap.channel),thicknessMapUv:ce&&v(_.thicknessMap.channel),alphaMapUv:ve&&v(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(wt||Ee),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(Le||ve),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Si,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function x(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)w.push(P),w.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(w,_),p(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function u(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const w=g[_.type];let P;if(w){const N=ti[w];P=N1.clone(N.uniforms)}else P=_.uniforms;return P}function M(_,w){let P=f.get(w);return P!==void 0?++P.usedTimes:(P=new n2(t,w,_,r),c.push(P),f.set(w,P)),P}function b(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function o2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function l2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,v,E,x,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:g,material:v,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:x,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=g,p.material=v,p.materialVariant=a(d),p.groupOrder=E,p.renderOrder=d.renderOrder,p.z=x,p.group=u),e++,p}function l(d,g,v,E,x,u){const p=o(d,g,v,E,x,u);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):n.push(p)}function c(d,g,v,E,x,u){const p=o(d,g,v,E,x,u);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function f(d,g){n.length>1&&n.sort(d||l2),i.length>1&&i.sort(g||Dm),r.length>1&&r.sort(g||Dm)}function h(){for(let d=e,g=t.length;d<g;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function c2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Im,t.set(i,[a])):r>=s.length?(a=new Im,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function u2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new je};break;case"SpotLight":n={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function d2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let f2=0;function h2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function p2(t){const e=new u2,n=d2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new vt,a=new vt;function o(c){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,v=0,E=0,x=0,u=0,p=0,y=0,M=0,b=0,A=0,C=0;c.sort(h2);for(let w=0,P=c.length;w<P;w++){const N=c[w],D=N.color,z=N.intensity,X=N.distance;let V=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ds?V=N.shadow.map.texture:V=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=D.r*z,h+=D.g*z,d+=D.b*z;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],z);C++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,H=n.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=N.shadow.matrix,p++}i.directional[g]=j,g++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(D).multiplyScalar(z),j.distance=X,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[E]=j;const k=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,k.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[E]=k.matrix,N.castShadow){const H=n.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=V,M++}E++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(D).multiplyScalar(z),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=j,x++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const k=N.shadow,H=n.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=N.shadow.matrix,y++}i.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(z),j.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[u]=j,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==E||_.rectAreaLength!==x||_.hemiLength!==u||_.numDirectionalShadows!==p||_.numPointShadows!==y||_.numSpotShadows!==M||_.numSpotMaps!==b||_.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=E,i.rectArea.length=x,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,_.directionalLength=g,_.pointLength=v,_.spotLength=E,_.rectAreaLength=x,_.hemiLength=u,_.numDirectionalShadows=p,_.numPointShadows=y,_.numSpotShadows=M,_.numSpotMaps=b,_.numLightProbes=C,i.version=f2++)}function l(c,f){let h=0,d=0,g=0,v=0,E=0;const x=f.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const y=c[u];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),h++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(y.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),d++}else if(y.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),E++}}}return{setup:o,setupView:l,state:i}}function Um(t){const e=new p2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function m2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Um(t),e.set(r,[o])):s>=a.length?(o=new Um(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const g2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v2=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],_2=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Fm=new vt,ra=new O,pu=new O;function y2(t,e,n){let i=new lh;const r=new Xe,s=new Xe,a=new Mt,o=new I1,l=new U1,c={},f=n.maxTextureSize,h={[lr]:pn,[pn]:lr,[Si]:Si},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:g2,fragmentShader:x2}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new gn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mn(v,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let u=this.type;this.render=function(A,C,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===Ey&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jo);const w=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),D=t.state;D.setBlending(bi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=u!==this.type;z&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=A.length;X<V;X++){const j=A[X],k=j.shadow;if(k===void 0){De("WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();r.multiply(H),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/H.y),r.y=s.y*H.y,k.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ca){if(j.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new li(r.x,r.y,{format:Ds,type:Li,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),k.map.texture.name=j.name+".shadowMap",k.map.depthTexture=new Ha(r.x,r.y,ii),k.map.depthTexture.name=j.name+".shadowMapDepth",k.map.depthTexture.format=Di,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt}else j.isPointLight?(k.map=new Nx(r.x),k.map.depthTexture=new C1(r.x,ci)):(k.map=new li(r.x,r.y),k.map.depthTexture=new Ha(r.x,r.y,ci)),k.map.depthTexture.name=j.name+".shadowMap",k.map.depthTexture.format=Di,this.type===Jo?(k.map.depthTexture.compareFunction=q?rh:ih,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt);k.camera.updateProjectionMatrix()}const Q=k.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Q;oe++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(k.map),t.clear());const re=k.getViewport(oe);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),D.viewport(a)}if(j.isPointLight){const re=k.camera,Pe=k.matrix,Ke=j.distance||re.far;Ke!==re.far&&(re.far=Ke,re.updateProjectionMatrix()),ra.setFromMatrixPosition(j.matrixWorld),re.position.copy(ra),pu.copy(re.position),pu.add(v2[oe]),re.up.copy(_2[oe]),re.lookAt(pu),re.updateMatrixWorld(),Pe.makeTranslation(-ra.x,-ra.y,-ra.z),Fm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Fm,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(j);i=k.getFrustum(),M(C,_,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ca&&p(k,_),k.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(w,P,N)};function p(A,C){const _=e.update(E);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(r.x,r.y,{format:Ds,type:Li})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,_,d,E,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,_,g,E,null)}function y(A,C,_,w){let P=null;const N=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,z=C.uuid;let X=c[D];X===void 0&&(X={},c[D]=X);let V=X[z];V===void 0&&(V=P.clone(),X[z]=V,C.addEventListener("dispose",b)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,w===ca?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=t.properties.get(P);D.light=_}return P}function M(A,C,_,w,P){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===ca)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const V=z.groups;for(let j=0,k=V.length;j<k;j++){const H=V[j],q=X[H.materialIndex];if(q&&q.visible){const Q=y(A,q,w,P);A.onBeforeShadow(t,A,C,_,z,Q,H),t.renderBufferDirect(_,null,z,Q,A,H),A.onAfterShadow(t,A,C,_,z,Q,H)}}}else if(X.visible){const V=y(A,X,w,P);A.onBeforeShadow(t,A,C,_,z,V,null),t.renderBufferDirect(_,null,z,V,A,null),A.onAfterShadow(t,A,C,_,z,V,null)}}const D=A.children;for(let z=0,X=D.length;z<X;z++)M(D[z],C,_,w,P)}function b(A){A.target.removeEventListener("dispose",b);for(const _ in c){const w=c[_],P=A.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function S2(t,e){function n(){let I=!1;const ce=new Mt;let ae=null;const ve=new Mt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!I&&(t.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){I=ne},setClear:function(ne,Y,Se,Ie,dt){dt===!0&&(ne*=Ie,Y*=Ie,Se*=Ie),ce.set(ne,Y,Se,Ie),ve.equals(ce)===!1&&(t.clearColor(ne,Y,Se,Ie),ve.copy(ce))},reset:function(){I=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,ae=null,ve=null,ne=null;return{setReversed:function(Y){if(ce!==Y){const Se=e.get("EXT_clip_control");Y?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ce=Y;const Ie=ne;ne=null,this.setClear(Ie)}},getReversed:function(){return ce},setTest:function(Y){Y?ie(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!I&&(t.depthMask(Y),ae=Y)},setFunc:function(Y){if(ce&&(Y=i1[Y]),ve!==Y){switch(Y){case cd:t.depthFunc(t.NEVER);break;case ud:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case Ps:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case hd:t.depthFunc(t.GEQUAL);break;case pd:t.depthFunc(t.GREATER);break;case md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Y}},setLocked:function(Y){I=Y},setClear:function(Y){ne!==Y&&(ne=Y,ce&&(Y=1-Y),t.clearDepth(Y))},reset:function(){I=!1,ae=null,ve=null,ne=null,ce=!1}}}function r(){let I=!1,ce=null,ae=null,ve=null,ne=null,Y=null,Se=null,Ie=null,dt=null;return{setTest:function(nt){I||(nt?ie(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!I&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,fi,hi){(ae!==nt||ve!==fi||ne!==hi)&&(t.stencilFunc(nt,fi,hi),ae=nt,ve=fi,ne=hi)},setOp:function(nt,fi,hi){(Y!==nt||Se!==fi||Ie!==hi)&&(t.stencilOp(nt,fi,hi),Y=nt,Se=fi,Ie=hi)},setLocked:function(nt){I=nt},setClear:function(nt){dt!==nt&&(t.clearStencil(nt),dt=nt)},reset:function(){I=!1,ce=null,ae=null,ve=null,ne=null,Y=null,Se=null,Ie=null,dt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,g=[],v=null,E=!1,x=null,u=null,p=null,y=null,M=null,b=null,A=null,C=new je(0,0,0),_=0,w=!1,P=null,N=null,D=null,z=null,X=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=k>=2);let q=null,Q={};const oe=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Pe=new Mt().fromArray(oe),Ke=new Mt().fromArray(re);function et(I,ce,ae,ve){const ne=new Uint8Array(4),Y=t.createTexture();t.bindTexture(I,Y),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ce+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Y}const K={};K[t.TEXTURE_2D]=et(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=et(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=et(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=et(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Ps),ze(!1),wt(Op),ie(t.CULL_FACE),tt(bi);function ie(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function ue(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Fe(I,ce){return h[I]!==ce?(t.bindFramebuffer(I,ce),h[I]=ce,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Re(I,ce){let ae=g,ve=!1;if(I){ae=d.get(ce),ae===void 0&&(ae=[],d.set(ce,ae));const ne=I.textures;if(ae.length!==ne.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,Se=ne.length;Y<Se;Y++)ae[Y]=t.COLOR_ATTACHMENT0+Y;ae.length=ne.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function Le(I){return v!==I?(t.useProgram(I),v=I,!0):!1}const Dt={[wr]:t.FUNC_ADD,[by]:t.FUNC_SUBTRACT,[Ay]:t.FUNC_REVERSE_SUBTRACT};Dt[Cy]=t.MIN,Dt[Ry]=t.MAX;const qe={[Ny]:t.ZERO,[Py]:t.ONE,[Ly]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[ky]:t.SRC_ALPHA_SATURATE,[Fy]:t.DST_COLOR,[Iy]:t.DST_ALPHA,[Dy]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[Oy]:t.ONE_MINUS_DST_COLOR,[Uy]:t.ONE_MINUS_DST_ALPHA,[zy]:t.CONSTANT_COLOR,[By]:t.ONE_MINUS_CONSTANT_COLOR,[Vy]:t.CONSTANT_ALPHA,[Hy]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ce,ae,ve,ne,Y,Se,Ie,dt,nt){if(I===bi){E===!0&&(ue(t.BLEND),E=!1);return}if(E===!1&&(ie(t.BLEND),E=!0),I!==Ty){if(I!==x||nt!==w){if((u!==wr||M!==wr)&&(t.blendEquation(t.FUNC_ADD),u=wr,M=wr),nt)switch(I){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ka:t.blendFunc(t.ONE,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ka:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case kp:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zp:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",I);break}p=null,y=null,b=null,A=null,C.set(0,0,0),_=0,x=I,w=nt}return}ne=ne||ce,Y=Y||ae,Se=Se||ve,(ce!==u||ne!==M)&&(t.blendEquationSeparate(Dt[ce],Dt[ne]),u=ce,M=ne),(ae!==p||ve!==y||Y!==b||Se!==A)&&(t.blendFuncSeparate(qe[ae],qe[ve],qe[Y],qe[Se]),p=ae,y=ve,b=Y,A=Se),(Ie.equals(C)===!1||dt!==_)&&(t.blendColor(Ie.r,Ie.g,Ie.b,dt),C.copy(Ie),_=dt),x=I,w=!1}function lt(I,ce){I.side===Si?ue(t.CULL_FACE):ie(t.CULL_FACE);let ae=I.side===pn;ce&&(ae=!ae),ze(ae),I.blending===Ms&&I.transparent===!1?tt(bi):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){P!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),P=I)}function wt(I){I!==My?(ie(t.CULL_FACE),I!==N&&(I===Op?t.cullFace(t.BACK):I===wy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),N=I}function L(I){I!==D&&(j&&t.lineWidth(I),D=I)}function bt(I,ce,ae){I?(ie(t.POLYGON_OFFSET_FILL),(z!==ce||X!==ae)&&(z=ce,X=ae,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,ae))):ue(t.POLYGON_OFFSET_FILL)}function Je(I){I?ie(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function ut(I){I===void 0&&(I=t.TEXTURE0+V-1),q!==I&&(t.activeTexture(I),q=I)}function Ee(I,ce,ae){ae===void 0&&(q===null?ae=t.TEXTURE0+V-1:ae=q);let ve=Q[ae];ve===void 0&&(ve={type:void 0,texture:void 0},Q[ae]=ve),(ve.type!==I||ve.texture!==ce)&&(q!==ae&&(t.activeTexture(ae),q=ae),t.bindTexture(I,ce||K[I]),ve.type=I,ve.texture=ce)}function R(){const I=Q[q];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Z(){try{t.texSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function J(){try{t.texSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function le(){try{t.texStorage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Ce(){try{t.texStorage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Ne(){try{t.texImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function te(){try{t.texImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function se(I){Pe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function ye(I){Ke.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function Me(I,ce){let ae=c.get(ce);ae===void 0&&(ae=new WeakMap,c.set(ce,ae));let ve=ae.get(I);ve===void 0&&(ve=t.getUniformBlockIndex(ce,I.name),ae.set(I,ve))}function me(I,ce){const ve=c.get(ce).get(I);l.get(ce)!==ve&&(t.uniformBlockBinding(ce,ve,I.__bindingPointIndex),l.set(ce,ve))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},q=null,Q={},h={},d=new WeakMap,g=[],v=null,E=!1,x=null,u=null,p=null,y=null,M=null,b=null,A=null,C=new je(0,0,0),_=0,w=!1,P=null,N=null,D=null,z=null,X=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ue,bindFramebuffer:Fe,drawBuffers:Re,useProgram:Le,setBlending:tt,setMaterial:lt,setFlipSided:ze,setCullFace:wt,setLineWidth:L,setPolygonOffset:bt,setScissorTest:Je,activeTexture:ut,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Ne,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:me,texStorage2D:le,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:_e,scissor:se,viewport:ye,reset:Be}}function M2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return g?new OffscreenCanvas(R,S):Pl("canvas")}function E(R,S,U){let Z=1;const J=Ee(R);if((J.width>U||J.height>U)&&(Z=U/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*J.width),_e=Math.floor(Z*J.height);h===void 0&&(h=v($,_e));const le=S?v($,_e):h;return le.width=$,le.height=_e,le.getContext("2d").drawImage(R,0,0,$,_e),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+_e+")."),le}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function x(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function p(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,S,U,Z,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===t.RED&&(U===t.FLOAT&&($=t.R32F),U===t.HALF_FLOAT&&($=t.R16F),U===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.R8UI),U===t.UNSIGNED_SHORT&&($=t.R16UI),U===t.UNSIGNED_INT&&($=t.R32UI),U===t.BYTE&&($=t.R8I),U===t.SHORT&&($=t.R16I),U===t.INT&&($=t.R32I)),S===t.RG&&(U===t.FLOAT&&($=t.RG32F),U===t.HALF_FLOAT&&($=t.RG16F),U===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RG8UI),U===t.UNSIGNED_SHORT&&($=t.RG16UI),U===t.UNSIGNED_INT&&($=t.RG32UI),U===t.BYTE&&($=t.RG8I),U===t.SHORT&&($=t.RG16I),U===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGB8UI),U===t.UNSIGNED_SHORT&&($=t.RGB16UI),U===t.UNSIGNED_INT&&($=t.RGB32UI),U===t.BYTE&&($=t.RGB8I),U===t.SHORT&&($=t.RGB16I),U===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGBA8UI),U===t.UNSIGNED_SHORT&&($=t.RGBA16UI),U===t.UNSIGNED_INT&&($=t.RGBA32UI),U===t.BYTE&&($=t.RGBA8I),U===t.SHORT&&($=t.RGBA16I),U===t.INT&&($=t.RGBA32I)),S===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){const _e=J?Nl:Ye.getTransfer(Z);U===t.FLOAT&&($=t.RGBA32F),U===t.HALF_FLOAT&&($=t.RGBA16F),U===t.UNSIGNED_BYTE&&($=_e===it?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(R,S){let U;return R?S===null||S===ci||S===Ba?U=t.DEPTH24_STENCIL8:S===ii?U=t.DEPTH32F_STENCIL8:S===za&&(U=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===Ba?U=t.DEPTH_COMPONENT24:S===ii?U=t.DEPTH_COMPONENT32F:S===za&&(U=t.DEPTH_COMPONENT16),U}function b(R,S){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),_(S),S.isVideoTexture&&f.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),P(S)}function _(R){const S=i.get(R);if(S.__webglInit===void 0)return;const U=R.source,Z=d.get(U);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys(Z).length===0&&d.delete(U)}i.remove(R)}function w(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const U=R.source,Z=d.get(U);delete Z[S.__cacheKey],a.memory.textures--}function P(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=R.textures;for(let Z=0,J=U.length;Z<J;Z++){const $=i.get(U[Z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(U[Z])}i.remove(R)}let N=0;function D(){N=0}function z(){const R=N;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const U=i.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const Z=R.image;if(Z===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+S)}function j(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,S);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+S)}function k(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,S);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+S)}function H(R,S){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){ie(U,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+S)}const q={[gd]:t.REPEAT,[Ei]:t.CLAMP_TO_EDGE,[xd]:t.MIRRORED_REPEAT},Q={[Vt]:t.NEAREST,[Wy]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},oe={[Yy]:t.NEVER,[Jy]:t.ALWAYS,[$y]:t.LESS,[ih]:t.LEQUAL,[Ky]:t.EQUAL,[rh]:t.GEQUAL,[Zy]:t.GREATER,[Qy]:t.NOTEQUAL};function re(R,S){if(S.type===ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zt||S.magFilter===Oc||S.magFilter===xo||S.magFilter===Cr||S.minFilter===Zt||S.minFilter===Oc||S.minFilter===xo||S.minFilter===Cr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==xo&&S.minFilter!==Cr||S.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Pe(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const $=X(S);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[$].usedTimes++;const _e=J[R.__cacheKey];_e!==void 0&&(J[R.__cacheKey].usedTimes--,_e.usedTimes===0&&w(S)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return U}function Ke(R,S,U){return Math.floor(Math.floor(R/U)/S)}function et(R,S,U,Z){const $=R.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,U,Z,S.data);else{$.sort((te,se)=>te.start-se.start);let _e=0;for(let te=1;te<$.length;te++){const se=$[_e],ye=$[te],Me=se.start+se.count,me=Ke(ye.start,S.width,4),Be=Ke(se.start,S.width,4);ye.start<=Me+1&&me===Be&&Ke(ye.start+ye.count-1,S.width,4)===me?se.count=Math.max(se.count,ye.start+ye.count-se.start):(++_e,$[_e]=ye)}$.length=_e+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),Ne=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let te=0,se=$.length;te<se;te++){const ye=$[te],Me=Math.floor(ye.start/4),me=Math.ceil(ye.count/4),Be=Me%S.width,I=Math.floor(Me/S.width),ce=me,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Be,I,ce,ae,U,Z,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ne)}}function K(R,S,U){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const J=Pe(R,S),$=S.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+U);const _e=i.get($);if($.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+U);const le=Ye.getPrimaries(Ye.workingColorSpace),Ce=S.colorSpace===Yi?null:Ye.getPrimaries(S.colorSpace),Ne=S.colorSpace===Yi||le===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let te=E(S.image,!1,r.maxTextureSize);te=ut(S,te);const se=s.convert(S.format,S.colorSpace),ye=s.convert(S.type);let Me=y(S.internalFormat,se,ye,S.colorSpace,S.isVideoTexture);re(Z,S);let me;const Be=S.mipmaps,I=S.isVideoTexture!==!0,ce=_e.__version===void 0||J===!0,ae=$.dataReady,ve=b(S,te);if(S.isDepthTexture)Me=M(S.format===Rr,S.type),ce&&(I?n.texStorage2D(t.TEXTURE_2D,1,Me,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,se,ye,null));else if(S.isDataTexture)if(Be.length>0){I&&ce&&n.texStorage2D(t.TEXTURE_2D,ve,Me,Be[0].width,Be[0].height);for(let ne=0,Y=Be.length;ne<Y;ne++)me=Be[ne],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,se,ye,me.data):n.texImage2D(t.TEXTURE_2D,ne,Me,me.width,me.height,0,se,ye,me.data);S.generateMipmaps=!1}else I?(ce&&n.texStorage2D(t.TEXTURE_2D,ve,Me,te.width,te.height),ae&&et(S,te,se,ye)):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,se,ye,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,Be[0].width,Be[0].height,te.depth);for(let ne=0,Y=Be.length;ne<Y;ne++)if(me=Be[ne],S.format!==Wn)if(se!==null)if(I){if(ae)if(S.layerUpdates.size>0){const Se=hm(me.width,me.height,S.format,S.type);for(const Ie of S.layerUpdates){const dt=me.data.subarray(Ie*Se/me.data.BYTES_PER_ELEMENT,(Ie+1)*Se/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ie,me.width,me.height,1,se,dt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,se,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Me,me.width,me.height,te.depth,0,me.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,se,ye,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Me,me.width,me.height,te.depth,0,se,ye,me.data)}else{I&&ce&&n.texStorage2D(t.TEXTURE_2D,ve,Me,Be[0].width,Be[0].height);for(let ne=0,Y=Be.length;ne<Y;ne++)me=Be[ne],S.format!==Wn?se!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,se,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Me,me.width,me.height,0,me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,se,ye,me.data):n.texImage2D(t.TEXTURE_2D,ne,Me,me.width,me.height,0,se,ye,me.data)}else if(S.isDataArrayTexture)if(I){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,te.width,te.height,te.depth),ae)if(S.layerUpdates.size>0){const ne=hm(te.width,te.height,S.format,S.type);for(const Y of S.layerUpdates){const Se=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,se,ye,Se)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,ye,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,se,ye,te.data);else if(S.isData3DTexture)I?(ce&&n.texStorage3D(t.TEXTURE_3D,ve,Me,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,ye,te.data)):n.texImage3D(t.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,se,ye,te.data);else if(S.isFramebufferTexture){if(ce)if(I)n.texStorage2D(t.TEXTURE_2D,ve,Me,te.width,te.height);else{let ne=te.width,Y=te.height;for(let Se=0;Se<ve;Se++)n.texImage2D(t.TEXTURE_2D,Se,Me,ne,Y,0,se,ye,null),ne>>=1,Y>>=1}}else if(Be.length>0){if(I&&ce){const ne=Ee(Be[0]);n.texStorage2D(t.TEXTURE_2D,ve,Me,ne.width,ne.height)}for(let ne=0,Y=Be.length;ne<Y;ne++)me=Be[ne],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se,ye,me):n.texImage2D(t.TEXTURE_2D,ne,Me,se,ye,me);S.generateMipmaps=!1}else if(I){if(ce){const ne=Ee(te);n.texStorage2D(t.TEXTURE_2D,ve,Me,ne.width,ne.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,ye,te)}else n.texImage2D(t.TEXTURE_2D,0,Me,se,ye,te);x(S)&&u(Z),_e.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,U){if(S.image.length!==6)return;const Z=Pe(R,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const $=i.get(J);if(J.version!==$.__version||Z===!0){n.activeTexture(t.TEXTURE0+U);const _e=Ye.getPrimaries(Ye.workingColorSpace),le=S.colorSpace===Yi?null:Ye.getPrimaries(S.colorSpace),Ce=S.colorSpace===Yi||_e===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!Ne&&!te?se[Y]=E(S.image[Y],!0,r.maxCubemapSize):se[Y]=te?S.image[Y].image:S.image[Y],se[Y]=ut(S,se[Y]);const ye=se[0],Me=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Be=y(S.internalFormat,Me,me,S.colorSpace),I=S.isVideoTexture!==!0,ce=$.__version===void 0||Z===!0,ae=J.dataReady;let ve=b(S,ye);re(t.TEXTURE_CUBE_MAP,S);let ne;if(Ne){I&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Be,ye.width,ye.height);for(let Y=0;Y<6;Y++){ne=se[Y].mipmaps;for(let Se=0;Se<ne.length;Se++){const Ie=ne[Se];S.format!==Wn?Me!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ie.width,Ie.height,Me,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,Be,Ie.width,Ie.height,0,Ie.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ie.width,Ie.height,Me,me,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,Be,Ie.width,Ie.height,0,Me,me,Ie.data)}}}else{if(ne=S.mipmaps,I&&ce){ne.length>0&&ve++;const Y=Ee(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,Me,me,se[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,se[Y].width,se[Y].height,0,Me,me,se[Y].data);for(let Se=0;Se<ne.length;Se++){const dt=ne[Se].image[Y].image;I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,dt.width,dt.height,Me,me,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,Be,dt.width,dt.height,0,Me,me,dt.data)}}else{I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me,me,se[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,Me,me,se[Y]);for(let Se=0;Se<ne.length;Se++){const Ie=ne[Se];I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,Me,me,Ie.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,Be,Me,me,Ie.image[Y])}}}x(S)&&u(t.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ue(R,S,U,Z,J,$){const _e=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Ce=y(U.internalFormat,_e,le,U.colorSpace),Ne=i.get(S),te=i.get(U);if(te.__renderTarget=S,!Ne.__hasExternalTextures){const se=Math.max(1,S.width>>$),ye=Math.max(1,S.height>>$);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,$,Ce,se,ye,S.depth,0,_e,le,null):n.texImage2D(J,$,Ce,se,ye,0,_e,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,J,te.__webglTexture,0,L(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,J,te.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(R,S,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=M(S.stencilBuffer,J),_e=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(S),$,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(S),$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,R)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const $=Z[J],_e=s.convert($.format,$.colorSpace),le=s.convert($.type),Ce=y($.internalFormat,_e,le,$.colorSpace);bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(S),Ce,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(S),Ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(R,S,U){const Z=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),re(t.TEXTURE_CUBE_MAP,S.depthTexture);const Ne=s.convert(S.depthTexture.format),te=s.convert(S.depthTexture.type);let se;S.depthTexture.format===Di?se=t.DEPTH_COMPONENT24:S.depthTexture.format===Rr&&(se=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,se,S.width,S.height,0,Ne,te,null)}}else V(S.depthTexture,0);const $=J.__webglTexture,_e=L(S),le=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Ce=S.depthTexture.format===Rr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,$,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,$,0);else if(S.depthTexture.format===Rr)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,$,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,$,0);else throw new Error("Unknown depthTexture format")}function Le(R){const S=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)Re(S.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Re(S.__webglFramebuffer[0],R,0):Re(S.__webglFramebuffer,R,0)}else if(U){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),Fe(S.__webglDepthbuffer[Z],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,$)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Fe(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dt(R,S,U){const Z=i.get(R);S!==void 0&&ue(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Le(R)}function qe(R){const S=R.texture,U=i.get(R),Z=i.get(S);R.addEventListener("dispose",C);const J=R.textures,$=R.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,a.memory.textures++),$){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)U.__webglFramebuffer[le][Ce]=t.createFramebuffer()}else U.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)U.__webglFramebuffer[le]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(_e)for(let le=0,Ce=J.length;le<Ce;le++){const Ne=i.get(J[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&bt(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Ce=J[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const Ne=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),se=y(Ce.internalFormat,Ne,te,Ce.colorSpace,R.isXRRenderTarget===!0),ye=L(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),re(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ue(U.__webglFramebuffer[le][Ce],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else ue(U.__webglFramebuffer[le],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let le=0,Ce=J.length;le<Ce;le++){const Ne=J[le],te=i.get(Ne);let se=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),re(se,Ne),ue(U.__webglFramebuffer,R,Ne,t.COLOR_ATTACHMENT0+le,se,0),x(Ne)&&u(se)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),re(le,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ue(U.__webglFramebuffer[Ce],R,S,t.COLOR_ATTACHMENT0,le,Ce);else ue(U.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,le,0);x(S)&&u(le),n.unbindTexture()}R.depthBuffer&&Le(R)}function tt(R){const S=R.textures;for(let U=0,Z=S.length;U<Z;U++){const J=S[U];if(x(J)){const $=p(R),_e=i.get(J).__webglTexture;n.bindTexture($,_e),u($),n.unbindTexture()}}}const lt=[],ze=[];function wt(R){if(R.samples>0){if(bt(R)===!1){const S=R.textures,U=R.width,Z=R.height;let J=t.COLOR_BUFFER_BIT;const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(R),le=S.length>1;if(le)for(let Ne=0;Ne<S.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]);const te=i.get(S[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,U,Z,0,0,U,Z,J,t.NEAREST),l===!0&&(lt.length=0,ze.length=0,lt.push(t.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push($),ze.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Ne=0;Ne<S.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]);const te=i.get(S[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function bt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(R){const S=a.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function ut(R,S){const U=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Is&&U!==Yi&&(Ye.getTransfer(U)===it?(Z!==Wn||J!==Sn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",U)),S}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Dt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function w2(t,e){function n(i,r=Yi){let s;const a=Ye.getTransfer(r);if(i===Sn)return t.UNSIGNED_BYTE;if(i===Qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ox)return t.BYTE;if(i===lx)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Zf)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===dx)return t.ALPHA;if(i===fx)return t.RGB;if(i===Wn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===Rr)return t.DEPTH_STENCIL;if(i===hx)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===Ds)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===_d||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===wd||i===Ed||i===Td||i===bd||i===Ad||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===wd)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Td)return s.COMPRESSED_R11_EAC;if(i===bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ad)return s.COMPRESSED_RG11_EAC;if(i===Cd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rd||i===Nd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===jd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gd)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===qd||i===Yd||i===$d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const E2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ex(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:E2,fragmentShader:T2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mn(new nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A2 extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,v=null;const E=typeof XRWebGLBinding<"u",x=new b2,u={},p=n.getContextAttributes();let y=null,M=null;const b=[],A=[],C=new Xe;let _=null;const w=new tn;w.viewport=new Mt;const P=new tn;P.viewport=new Mt;const N=[w,P],D=new z1;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new Wc,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new Wc,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new Wc,b[K]=ie),ie.getHandSpace()};function V(K){const ie=A.indexOf(K.inputSource);if(ie===-1)return;const ue=b[ie];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||a),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",k);for(let K=0;K<b.length;K++){const ie=A[K];ie!==null&&(A[K]=null,b[K].disconnect(ie))}z=null,X=null,x.reset();for(const K in u)delete u[K];e.setRenderTarget(y),g=null,d=null,h=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",j),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Fe=null,Re=null;p.depth&&(Re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=p.stencil?Rr:Di,Fe=p.stencil?Ba:ci);const Le={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new li(d.textureWidth,d.textureHeight,{format:Wn,type:Sn,depthTexture:new Ha(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new li(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(K){for(let ie=0;ie<K.removed.length;ie++){const ue=K.removed[ie],Fe=A.indexOf(ue);Fe>=0&&(A[Fe]=null,b[Fe].disconnect(ue))}for(let ie=0;ie<K.added.length;ie++){const ue=K.added[ie];let Fe=A.indexOf(ue);if(Fe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=A.length){A.push(ue),Fe=Le;break}else if(A[Le]===null){A[Le]=ue,Fe=Le;break}if(Fe===-1)break}const Re=b[Fe];Re&&Re.connect(ue)}}const H=new O,q=new O;function Q(K,ie,ue){H.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const Fe=H.distanceTo(q),Re=ie.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Dt=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),tt=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],wt=(Le[8]+1)/Le[0],L=Dt*ze,bt=Dt*wt,Je=Fe/(-ze+wt),ut=Je*-ze;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Re[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Dt+Je,R=qe+Je,S=L-ut,U=bt+(Fe-ut),Z=tt*qe/R*Ee,J=lt*qe/R*Ee;K.projectionMatrix.makePerspective(S,U,Z,J,Ee,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ue=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),D.near=P.near=w.near=ie,D.far=P.far=w.far=ue,(z!==D.near||X!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,X=D.far),D.layers.mask=K.layers.mask|6,w.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Fe=K.parent,Re=D.cameras;oe(D,Fe);for(let Le=0;Le<Re.length;Le++)oe(Re[Le],Fe);Re.length===2?Q(D,w,P):D.projectionMatrix.copy(w.projectionMatrix),re(K,D,Fe)};function re(K,ie,ue){ue===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Kd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(K){return u[K]};let Pe=null;function Ke(K,ie){if(f=ie.getViewerPose(c||a),v=ie,f!==null){const ue=f.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Fe=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let qe=0;qe<ue.length;qe++){const tt=ue[qe];let lt=null;if(g!==null)lt=g.getViewport(tt);else{const wt=h.getViewSubImage(d,tt);lt=wt.viewport,qe===0&&(e.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(M))}let ze=N[qe];ze===void 0&&(ze=new tn,ze.layers.enable(qe),ze.viewport=new Mt,N[qe]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(lt.x,lt.y,lt.width,lt.height),qe===0&&(D.matrix.copy(ze.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const qe=h.getDepthInformation(ue[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,r.renderState)}if(Re&&Re.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<ue.length;qe++){const tt=ue[qe].camera;if(tt){let lt=u[tt];lt||(lt=new Ex,u[tt]=lt);const ze=h.getCameraImage(tt);lt.sourceTexture=ze}}}}for(let ue=0;ue<b.length;ue++){const Fe=A[ue],Re=b[ue];Fe!==null&&Re!==void 0&&Re.update(Fe,ie,c||a)}Pe&&Pe(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const et=new Rx;et.setAnimationLoop(Ke),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}}const _r=new ui,C2=new vt;function R2(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Tx(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,p,y,M){u.isMeshBasicMaterial?s(x,u):u.isMeshLambertMaterial?(s(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(x,u),h(x,u)):u.isMeshPhongMaterial?(s(x,u),f(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(x,u),d(x,u),u.isMeshPhysicalMaterial&&g(x,u,M)):u.isMeshMatcapMaterial?(s(x,u),v(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),E(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,p,y):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===pn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===pn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const p=e.get(u),y=p.envMap,M=p.envMapRotation;y&&(x.envMap.value=y,_r.copy(M),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(_r)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,p,y){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*p,x.scale.value=y*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function f(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function h(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function d(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function g(x,u,p){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,u){u.matcap&&(x.matcap.value=u.matcap)}function E(x,u){const p=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function N2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,y){const M=y.program;i.uniformBlockBinding(p,M)}function c(p,y){let M=r[p.id];M===void 0&&(v(p),M=f(p),r[p.id]=M,p.addEventListener("dispose",x));const b=y.program;i.updateUBOMapping(p,b);const A=e.render.frame;s[p.id]!==A&&(d(p),s[p.id]=A)}function f(p){const y=h();p.__bindingPointIndex=y;const M=t.createBuffer(),b=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function h(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const y=r[p.id],M=p.uniforms,b=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,C=M.length;A<C;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,P=_.length;w<P;w++){const N=_[w];if(g(N,A,w,b)===!0){const D=N.__offset,z=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let V=0;V<z.length;V++){const j=z[V],k=E(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,D+X,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,y,M,b){const A=p.value,C=y+"_"+M;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const _=b[C];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return b[C]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function v(p){const y=p.uniforms;let M=0;const b=16;for(let C=0,_=y.length;C<_;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let P=0,N=w.length;P<N;P++){const D=w[P],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,V=z.length;X<V;X++){const j=z[X],k=E(j),H=M%b,q=H%k.boundary,Q=H+q;M+=q,Q!==0&&b-Q<k.storage&&(M+=b-Q),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=k.storage}}}const A=M%b;return A>0&&(M+=b-A),p.__size=M,p.__cache={},this}function E(p){const y={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(y.boundary=4,y.storage=4):p.isVector2?(y.boundary=8,y.storage=8):p.isVector3||p.isColor?(y.boundary=16,y.storage=12):p.isVector4?(y.boundary=16,y.storage=16):p.isMatrix3?(y.boundary=48,y.storage=48):p.isMatrix4?(y.boundary=64,y.storage=64):p.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",p),y}function x(p){const y=p.target;y.removeEventListener("dispose",x);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const P2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function L2(){return Jn===null&&(Jn=new w1(P2,16,16,Ds,Li),Jn.name="DFG_LUT",Jn.minFilter=Zt,Jn.magFilter=Zt,Jn.wrapS=Ei,Jn.wrapT=Ei,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class gh{constructor(e={}){const{canvas:n=t1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Sn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=g,x=new Set([nh,th,eh]),u=new Set([Sn,ci,za,Ba,Qf,Jf]),p=new Uint32Array(4),y=new Int32Array(4);let M=null,b=null;const A=[],C=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=Cn;let N=0,D=0,z=null,X=-1,V=null;const j=new Mt,k=new Mt;let H=null;const q=new je(0);let Q=0,oe=n.width,re=n.height,Pe=1,Ke=null,et=null;const K=new Mt(0,0,oe,re),ie=new Mt(0,0,oe,re);let ue=!1;const Fe=new lh;let Re=!1,Le=!1;const Dt=new vt,qe=new O,tt=new Mt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function wt(){return z===null?Pe:1}let L=i;function bt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",dt,!1),L===null){const F="webgl2";if(L=bt(F,T),L===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Qe("WebGLRenderer: "+T.message),T}let Je,ut,Ee,R,S,U,Z,J,$,_e,le,Ce,Ne,te,se,ye,Me,me,Be,I,ce,ae,ve;function ne(){Je=new Dw(L),Je.init(),ce=new w2(L,Je),ut=new Tw(L,Je,e,ce),Ee=new S2(L,Je),ut.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),R=new Fw(L),S=new o2,U=new M2(L,Je,Ee,S,ut,ce,R),Z=new Lw(w),J=new V1(L),ae=new ww(L,J),$=new Iw(L,J,R,ae),_e=new kw(L,$,J,ae,R),me=new Ow(L,ut,U),se=new bw(S),le=new a2(w,Z,Je,ut,ae,se),Ce=new R2(w,S),Ne=new c2,te=new m2(Je),Me=new Mw(w,Z,Ee,_e,v,l),ye=new y2(w,_e,ut),ve=new N2(L,R,ut,Ee),Be=new Ew(L,Je,R),I=new Uw(L,Je,R),R.programs=le.programs,w.capabilities=ut,w.extensions=Je,w.properties=S,w.renderLists=Ne,w.shadowMap=ye,w.state=Ee,w.info=R}ne(),E!==Sn&&(_=new Bw(E,n.width,n.height,r,s));const Y=new A2(w,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(T){T!==void 0&&(Pe=T,this.setSize(oe,re,!1))},this.getSize=function(T){return T.set(oe,re)},this.setSize=function(T,F,W=!0){if(Y.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,re=F,n.width=Math.floor(T*Pe),n.height=Math.floor(F*Pe),W===!0&&(n.style.width=T+"px",n.style.height=F+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(oe*Pe,re*Pe).floor()},this.setDrawingBufferSize=function(T,F,W){oe=T,re=F,Pe=W,n.width=Math.floor(T*W),n.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(E===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,F,W,G){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,W,G),Ee.viewport(j.copy(K).multiplyScalar(Pe).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,F,W,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,F,W,G),Ee.scissor(k.copy(ie).multiplyScalar(Pe).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){Ee.setScissorTest(ue=T)},this.setOpaqueSort=function(T){Ke=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let G=0;if(T){let B=!1;if(z!==null){const fe=z.texture.format;B=x.has(fe)}if(B){const fe=z.texture.type,ge=u.has(fe),he=Me.getClearColor(),we=Me.getClearAlpha(),be=he.r,Ue=he.g,Ve=he.b;ge?(p[0]=be,p[1]=Ue,p[2]=Ve,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=be,y[1]=Ue,y[2]=Ve,y[3]=we,L.clearBufferiv(L.COLOR,0,y))}else G|=L.COLOR_BUFFER_BIT}F&&(G|=L.DEPTH_BUFFER_BIT),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),Ne.dispose(),te.dispose(),S.dispose(),Z.dispose(),_e.dispose(),ae.dispose(),ve.dispose(),le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",yh),Y.removeEventListener("sessionend",Sh),fr.stop()};function Se(T){T.preventDefault(),jp("WebGLRenderer: Context Lost."),P=!0}function Ie(){jp("WebGLRenderer: Context Restored."),P=!1;const T=R.autoReset,F=ye.enabled,W=ye.autoUpdate,G=ye.needsUpdate,B=ye.type;ne(),R.autoReset=T,ye.enabled=F,ye.autoUpdate=W,ye.needsUpdate=G,ye.type=B}function dt(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nt(T){const F=T.target;F.removeEventListener("dispose",nt),fi(F)}function fi(T){hi(T),S.remove(T)}function hi(T){const F=S.get(T).programs;F!==void 0&&(F.forEach(function(W){le.releaseProgram(W)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,G,B,fe){F===null&&(F=lt);const ge=B.isMesh&&B.matrixWorld.determinant()<0,he=jx(T,F,W,G,B);Ee.setMaterial(G,ge);let we=W.index,be=1;if(G.wireframe===!0){if(we=$.getWireframeAttribute(W),we===void 0)return;be=2}const Ue=W.drawRange,Ve=W.attributes.position;let Ae=Ue.start*be,at=(Ue.start+Ue.count)*be;fe!==null&&(Ae=Math.max(Ae,fe.start*be),at=Math.min(at,(fe.start+fe.count)*be)),we!==null?(Ae=Math.max(Ae,0),at=Math.min(at,we.count)):Ve!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,Ve.count));const Et=at-Ae;if(Et<0||Et===1/0)return;ae.setup(B,G,he,W,we);let yt,ot=Be;if(we!==null&&(yt=J.get(we),ot=I,ot.setIndex(yt)),B.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*wt()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(B.isLine){let Wt=G.linewidth;Wt===void 0&&(Wt=1),Ee.setLineWidth(Wt*wt()),B.isLineSegments?ot.setMode(L.LINES):B.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else B.isPoints?ot.setMode(L.POINTS):B.isSprite&&ot.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Wt=B._multiDrawStarts,Te=B._multiDrawCounts,xn=B._multiDrawCount,Ze=we?J.get(we).bytesPerElement:1,Fn=S.get(G).currentProgram.getUniforms();for(let Kn=0;Kn<xn;Kn++)Fn.setValue(L,"_gl_DrawID",Kn),ot.render(Wt[Kn]/Ze,Te[Kn])}else if(B.isInstancedMesh)ot.renderInstances(Ae,Et,B.count);else if(W.isInstancedBufferGeometry){const Wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Wt);ot.renderInstances(Ae,Et,Te)}else ot.render(Ae,Et)};function _h(T,F,W){T.transparent===!0&&T.side===Si&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Qa(T,F,W),T.side=lr,T.needsUpdate=!0,Qa(T,F,W),T.side=Si):Qa(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),b=te.get(W),b.init(F),C.push(b),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();const G=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const he=fe[ge];_h(he,W,B),G.add(he)}else _h(fe,W,B),G.add(fe)}),b=C.pop(),G},this.compileAsync=function(T,F,W=null){const G=this.compile(T,F,W);return new Promise(B=>{function fe(){if(G.forEach(function(ge){S.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){B(T);return}setTimeout(fe,10)}Je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let oc=null;function Gx(T){oc&&oc(T)}function yh(){fr.stop()}function Sh(){fr.start()}const fr=new Rx;fr.setAnimationLoop(Gx),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(T){oc=T,Y.setAnimationLoop(T),T===null?fr.stop():fr.start()},Y.addEventListener("sessionstart",yh),Y.addEventListener("sessionend",Sh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,G=_!==null&&(z===null||W)&&_.begin(w,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,F,z),b=te.get(T,C.length),b.init(F),C.push(b),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(Dt,ri,F.reversedDepth),Le=this.localClippingEnabled,Re=se.init(this.clippingPlanes,Le),M=Ne.get(T,A.length),M.init(),A.push(M),Y.enabled===!0&&Y.isPresenting===!0){const ge=w.xr.getDepthSensingMesh();ge!==null&&lc(ge,F,-1/0,w.sortObjects)}lc(T,F,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Ke,et),ze=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ze&&Me.addToRenderList(M,T),this.info.render.frame++,Re===!0&&se.beginShadows();const B=b.state.shadowsArray;if(ye.render(B,T,F),Re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&_.hasRenderPass())===!1){const ge=M.opaque,he=M.transmissive;if(b.setupLights(),F.isArrayCamera){const we=F.cameras;if(he.length>0)for(let be=0,Ue=we.length;be<Ue;be++){const Ve=we[be];wh(ge,he,T,Ve)}ze&&Me.render(T);for(let be=0,Ue=we.length;be<Ue;be++){const Ve=we[be];Mh(M,T,Ve,Ve.viewport)}}else he.length>0&&wh(ge,he,T,F),ze&&Me.render(T),Mh(M,T,F)}z!==null&&D===0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),G&&_.end(w),T.isScene===!0&&T.onAfterRender(w,T,F),ae.resetDefaultState(),X=-1,V=null,C.pop(),C.length>0?(b=C[C.length-1],Re===!0&&se.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function lc(T,F,W,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){G&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const ge=_e.update(T),he=T.material;he.visible&&M.push(T,ge,he,W,tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const ge=_e.update(T),he=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),tt.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),tt.copy(ge.boundingSphere.center)),tt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(he)){const we=ge.groups;for(let be=0,Ue=we.length;be<Ue;be++){const Ve=we[be],Ae=he[Ve.materialIndex];Ae&&Ae.visible&&M.push(T,ge,Ae,W,tt.z,Ve)}}else he.visible&&M.push(T,ge,he,W,tt.z,null)}}const fe=T.children;for(let ge=0,he=fe.length;ge<he;ge++)lc(fe[ge],F,W,G)}function Mh(T,F,W,G){const{opaque:B,transmissive:fe,transparent:ge}=T;b.setupLightsView(W),Re===!0&&se.setGlobalState(w.clippingPlanes,W),G&&Ee.viewport(j.copy(G)),B.length>0&&Za(B,F,W),fe.length>0&&Za(fe,F,W),ge.length>0&&Za(ge,F,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function wh(T,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ae=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new li(1,1,{generateMipmaps:!0,type:Ae?Li:Sn,minFilter:Cr,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const fe=b.state.transmissionRenderTarget[G.id],ge=G.viewport||j;fe.setSize(ge.z*w.transmissionResolutionScale,ge.w*w.transmissionResolutionScale);const he=w.getRenderTarget(),we=w.getActiveCubeFace(),be=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(q),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),ze&&Me.render(W);const Ue=w.toneMapping;w.toneMapping=oi;const Ve=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Re===!0&&se.setGlobalState(w.clippingPlanes,G),Za(T,W,G),U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,Et=F.length;at<Et;at++){const yt=F[at],{object:ot,geometry:Wt,material:Te,group:xn}=yt;if(Te.side===Si&&ot.layers.test(G.layers)){const Ze=Te.side;Te.side=pn,Te.needsUpdate=!0,Eh(ot,W,G,Wt,Te,xn),Te.side=Ze,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe))}w.setRenderTarget(he,we,be),w.setClearColor(q,Q),Ve!==void 0&&(G.viewport=Ve),w.toneMapping=Ue}function Za(T,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,fe=T.length;B<fe;B++){const ge=T[B],{object:he,geometry:we,group:be}=ge;let Ue=ge.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),he.layers.test(W.layers)&&Eh(he,F,W,we,Ue,be)}}function Eh(T,F,W,G,B,fe){T.onBeforeRender(w,F,W,G,B,fe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(w,F,W,G,T,fe),B.transparent===!0&&B.side===Si&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,w.renderBufferDirect(W,F,G,B,T,fe),B.side=lr,B.needsUpdate=!0,w.renderBufferDirect(W,F,G,B,T,fe),B.side=Si):w.renderBufferDirect(W,F,G,B,T,fe),T.onAfterRender(w,F,W,G,B,fe)}function Qa(T,F,W){F.isScene!==!0&&(F=lt);const G=S.get(T),B=b.state.lights,fe=b.state.shadowsArray,ge=B.state.version,he=le.getParameters(T,B.state,fe,F,W),we=le.getProgramCacheKey(he);let be=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Ue=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=Z.get(T.envMap||G.environment,Ue),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",nt),be=new Map,G.programs=be);let Ve=be.get(we);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===ge)return bh(T,he),Ve}else he.uniforms=le.getUniforms(T),T.onBeforeCompile(he,w),Ve=le.acquireProgram(he,we),be.set(we,Ve),G.uniforms=he.uniforms;const Ae=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=se.uniform),bh(T,he),G.needsLights=Xx(T),G.lightsStateVersion=ge,G.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ve,G.uniformsList=null,Ve}function Th(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=rl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function bh(T,F){const W=S.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function jx(T,F,W,G,B){F.isScene!==!0&&(F=lt),U.resetTextureUnits();const fe=F.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,he=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Is,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,be=Z.get(G.envMap||ge,we),Ue=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let yt=oi;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(yt=w.toneMapping);const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=ot!==void 0?ot.length:0,Te=S.get(G),xn=b.state.lights;if(Re===!0&&(Le===!0||T!==V)){const It=T===V&&G.id===X;se.setState(G,T,It)}let Ze=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==xn.state.version||Te.outputColorSpace!==he||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==be||G.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Ve||Te.morphTargets!==Ae||Te.morphNormals!==at||Te.morphColors!==Et||Te.toneMapping!==yt||Te.morphTargetsCount!==Wt)&&(Ze=!0):(Ze=!0,Te.__version=G.version);let Fn=Te.currentProgram;Ze===!0&&(Fn=Qa(G,F,B));let Kn=!1,hr=!1,Vr=!1;const ct=Fn.getUniforms(),zt=Te.uniforms;if(Ee.useProgram(Fn.program)&&(Kn=!0,hr=!0,Vr=!0),G.id!==X&&(X=G.id,hr=!0),Kn||V!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",T.projectionMatrix),ct.setValue(L,"viewMatrix",T.matrixWorldInverse);const Fi=ct.map.cameraPosition;Fi!==void 0&&Fi.setValue(L,qe.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,hr=!0,Vr=!0)}if(Te.needsLights&&(xn.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,U),xn.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",xn.state.spotShadowMap,U),xn.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",xn.state.pointShadowMap,U)),B.isSkinnedMesh){ct.setOptional(L,B,"bindMatrix"),ct.setOptional(L,B,"bindMatrixInverse");const It=B.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ct.setValue(L,"boneTexture",It.boneTexture,U))}B.isBatchedMesh&&(ct.setOptional(L,B,"batchingTexture"),ct.setValue(L,"batchingTexture",B._matricesTexture,U),ct.setOptional(L,B,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",B._indirectTexture,U),ct.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",B._colorsTexture,U));const Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&me.update(B,W,Fn),(hr||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,ct.setValue(L,"receiveShadow",B.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(zt.envMapIntensity.value=F.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=L2()),hr&&(ct.setValue(L,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&Wx(zt,Vr),fe&&G.fog===!0&&Ce.refreshFogUniforms(zt,fe),Ce.refreshMaterialUniforms(zt,G,Pe,re,b.state.transmissionRenderTarget[T.id]),rl.upload(L,Th(Te),zt,U)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rl.upload(L,Th(Te),zt,U),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(L,"center",B.center),ct.setValue(L,"modelViewMatrix",B.modelViewMatrix),ct.setValue(L,"normalMatrix",B.normalMatrix),ct.setValue(L,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const It=G.uniformsGroups;for(let Fi=0,Hr=It.length;Fi<Hr;Fi++){const Ah=It[Fi];ve.update(Ah,Fn),ve.bind(Ah,Fn)}}return Fn}function Wx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Xx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,F,W){const G=S.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(T.texture).__webglTexture=F,S.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const W=S.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const qx=L.createFramebuffer();this.setRenderTarget=function(T,F=0,W=0){z=T,N=F,D=W;let G=null,B=!1,fe=!1;if(T){const he=S.get(T);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),j.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest,Ee.viewport(j),Ee.scissor(k),Ee.setScissorTest(H),X=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(he.__hasExternalTextures)U.rebindTextures(T,S.get(T.texture).__webglTexture,S.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&S.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const be=S.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[F])?G=be[F][W]:G=be[F],B=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?G=S.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[W]:G=be,j.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest}else j.copy(K).multiplyScalar(Pe).floor(),k.copy(ie).multiplyScalar(Pe).floor(),H=ue;if(W!==0&&(G=qx),Ee.bindFramebuffer(L.FRAMEBUFFER,G)&&Ee.drawBuffers(T,G),Ee.viewport(j),Ee.scissor(k),Ee.setScissorTest(H),B){const he=S.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,W)}else if(fe){const he=F;for(let we=0;we<T.textures.length;we++){const be=S.get(T.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,be.__webglTexture,W,he)}}else if(T!==null&&W!==0){const he=S.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(T,F,W,G,B,fe,ge,he=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ee.bindFramebuffer(L.FRAMEBUFFER,we);try{const be=T.textures[he],Ue=be.format,Ve=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ut.textureFormatReadable(Ue)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&W>=0&&W<=T.height-B&&L.readPixels(F,W,G,B,ce.convert(Ue),ce.convert(Ve),fe)}finally{const be=z!==null?S.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,G,B,fe,ge,he=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(F>=0&&F<=T.width-G&&W>=0&&W<=T.height-B){Ee.bindFramebuffer(L.FRAMEBUFFER,we);const be=T.textures[he],Ue=be.format,Ve=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ut.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(F,W,G,B,ce.convert(Ue),ce.convert(Ve),0);const at=z!==null?S.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,at);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await n1(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ae),L.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,W=0){const G=Math.pow(2,-W),B=Math.floor(T.image.width*G),fe=Math.floor(T.image.height*G),ge=F!==null?F.x:0,he=F!==null?F.y:0;U.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ge,he,B,fe),Ee.unbindTexture()};const Yx=L.createFramebuffer(),$x=L.createFramebuffer();this.copyTextureToTexture=function(T,F,W=null,G=null,B=0,fe=0){let ge,he,we,be,Ue,Ve,Ae,at,Et;const yt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(W!==null)ge=W.max.x-W.min.x,he=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ue=W.min.y,Ve=W.isBox3?W.min.z:0;else{const zt=Math.pow(2,-B);ge=Math.floor(yt.width*zt),he=Math.floor(yt.height*zt),T.isDataArrayTexture?we=yt.depth:T.isData3DTexture?we=Math.floor(yt.depth*zt):we=1,be=0,Ue=0,Ve=0}G!==null?(Ae=G.x,at=G.y,Et=G.z):(Ae=0,at=0,Et=0);const ot=ce.convert(F.format),Wt=ce.convert(F.type);let Te;F.isData3DTexture?(U.setTexture3D(F,0),Te=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Te=L.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const xn=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Kn=L.getParameter(L.UNPACK_SKIP_ROWS),hr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const Vr=T.isDataArrayTexture||T.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const zt=S.get(T),Ui=S.get(F),It=S.get(zt.__renderTarget),Fi=S.get(Ui.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,It.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Hr=0;Hr<we;Hr++)Vr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(T).__webglTexture,B,Ve+Hr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(F).__webglTexture,fe,Et+Hr)),L.blitFramebuffer(be,Ue,ge,he,Ae,at,ge,he,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||S.has(T)){const zt=S.get(T),Ui=S.get(F);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Yx),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,$x);for(let It=0;It<we;It++)Vr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,B,Ve+It):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,B),ct?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ui.__webglTexture,fe,Et+It):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ui.__webglTexture,fe),B!==0?L.blitFramebuffer(be,Ue,ge,he,Ae,at,ge,he,L.COLOR_BUFFER_BIT,L.NEAREST):ct?L.copyTexSubImage3D(Te,fe,Ae,at,Et+It,be,Ue,ge,he):L.copyTexSubImage2D(Te,fe,Ae,at,be,Ue,ge,he);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Te,fe,Ae,at,Et,ge,he,we,ot,Wt,yt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,fe,Ae,at,Et,ge,he,we,ot,yt.data):L.texSubImage3D(Te,fe,Ae,at,Et,ge,he,we,ot,Wt,yt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ae,at,ge,he,ot,Wt,yt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ae,at,yt.width,yt.height,ot,yt.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ae,at,ge,he,ot,Wt,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hr),fe===0&&F.generateMipmaps&&L.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(T){S.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){N=0,D=0,z=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=t=>{const e=I2(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=We.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>We.createElement("svg",{ref:l,...U2,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ux("lucide",r),...!s&&!F2(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,f])=>We.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=We.forwardRef(({className:i,...r},s)=>We.createElement(O2,{ref:s,iconNode:e,className:Ux(`lucide-${D2(Om(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Om(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],xh=st("activity",k2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],B2=st("arrow-right",z2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],H2=st("camera",V2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fx=st("chevron-down",G2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sl=st("circle-check",j2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],X2=st("circle-play",W2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Dl=st("cpu",q2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Ox=st("crosshair",Y2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Il=st("eye",$2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],Z2=st("fingerprint-pattern",K2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],J2=st("gauge",Q2);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]],tT=st("hand-metal",eT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],kx=st("headphones",nT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zx=st("layers",iT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],sT=st("leaf",rT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]],oT=st("magnet",aT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Bx=st("maximize",lT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],uT=st("menu",cT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],fT=st("mic",dT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]],ef=st("scan-face",hT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],km=st("scan",pT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gT=st("shield-check",mT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Vx=st("sparkles",xT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]],_T=st("thermometer-snowflake",vT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Hx=st("volume-2",yT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],MT=st("waves",ST);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],ET=st("wifi",wT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bT=st("x",TT);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ul=st("zap",AT),CT=(t={})=>{const[e,n]=We.useState(!1),i=We.useRef(null),r=JSON.stringify(t);return We.useEffect(()=>{const s=i.current;if(!s)return;const a=new IntersectionObserver(([o])=>{o.isIntersecting&&(n(!0),a.unobserve(s))},{threshold:.1,...JSON.parse(r)});return a.observe(s),()=>{s&&a.unobserve(s)}},[r]),[i,e]},pe=({children:t,delay:e=0,direction:n="up",duration:i=1e3,className:r=""})=>{const[s,a]=CT(),o=()=>{switch(n){case"up":return"translateY(30px)";case"down":return"translateY(-30px)";case"left":return"translateX(30px)";case"right":return"translateX(-30px)";case"scale":return"scale(0.95)";case"none":return"translateY(0)";default:return"translateY(30px)"}};return m.jsx("div",{ref:s,className:r,style:{opacity:a?1:0,filter:a?"blur(0px)":"blur(10px)",transform:a?"translate(0, 0) scale(1)":o(),transition:`all ${i}ms cubic-bezier(0.16, 1, 0.3, 1) ${e}ms`},children:t})},un=({src:t,alt:e,speed:n=.15,className:i="",scale:r="1.2",axis:s="y"})=>{const a=We.useRef(null);return We.useEffect(()=>{let o;const l=()=>{o=requestAnimationFrame(()=>{if(!a.current)return;const f=a.current.parentElement.getBoundingClientRect();if(f.bottom<0||f.top>window.innerHeight)return;const h=window.innerHeight/2,d=f.top+f.height/2,v=(h-d)*n;s==="x"?a.current.style.transform=`translate3d(${v}px, 0, 0) scale(${r})`:a.current.style.transform=`translate3d(0, ${v}px, 0) scale(${r})`})};return window.addEventListener("scroll",l,{passive:!0}),l(),()=>{window.removeEventListener("scroll",l),cancelAnimationFrame(o)}},[n,r,s]),m.jsx("img",{ref:a,src:t,alt:e,className:`absolute inset-0 w-full h-full object-cover will-change-transform ${i}`})},RT=()=>{const t=We.useRef(null),e=We.useRef(!0);return We.useEffect(()=>{if(!t.current)return;const n=new IntersectionObserver(([w])=>{e.current=w.isIntersecting},{rootMargin:"100px"});n.observe(t.current);const i=new oh,r=new tn(45,1,.1,100);r.position.z=10;const s=new gh({alpha:!0,antialias:!0,powerPreference:"high-performance"}),a=()=>{if(!t.current)return;const{clientWidth:w,clientHeight:P}=t.current;w===0||P===0||(s.setSize(w,P),r.aspect=w/P,r.updateProjectionMatrix())},o=new ResizeObserver(()=>{window.requestAnimationFrame(a)});o.observe(t.current),a(),s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.current.appendChild(s.domElement);const l=new mh(16777215,.5);i.add(l);const c=new dm(9133302,10,50);c.position.set(5,5,5),i.add(c);const f=new dm(16007006,10,50);f.position.set(-5,-5,5),i.add(f);const h=new ua;i.add(h);const d=new tc(1.6,0),g=new dh({color:16007006,emissive:16007006,emissiveIntensity:.6,wireframe:!0,transparent:!0,opacity:.9,blending:ka}),v=new mn(d,g);h.add(v);const E=new ch(2.6,1),x=new fh({color:9133302,wireframe:!0,transparent:!0,opacity:.4,metalness:1,roughness:0}),u=new mn(E,x);h.add(u);const p=[];for(let w=0;w<3;w++){const P=new ic(3.2+w*.6,.02,16,48),N=new Us({color:w%2===0?9133302:3718648,transparent:!0,opacity:.6,blending:ka}),D=new mn(P,N);D.rotation.x=Math.random()*Math.PI,D.rotation.y=Math.random()*Math.PI,p.push({mesh:D,speed:(Math.random()-.5)*.02}),h.add(D)}let y=0,M=0;const b=w=>{if(!t.current||!e.current)return;const P=t.current.getBoundingClientRect(),N=w.touches&&w.touches.length>0?w.touches[0].clientX:w.clientX,D=w.touches&&w.touches.length>0?w.touches[0].clientY:w.clientY;N===void 0||D===void 0||(y=(N-P.left)/P.width*2-1,M=-((D-P.top)/P.height)*2+1)};window.addEventListener("mousemove",b),window.addEventListener("touchmove",b,{passive:!0});let A;const C=new Cx,_=()=>{if(A=requestAnimationFrame(_),!e.current)return;const w=C.getElapsedTime();h.rotation.y=w*.15+y*.3,h.rotation.x=w*.1+M*.3,v.scale.setScalar(1+Math.sin(w*3)*.05),u.rotation.z-=.005,p.forEach(P=>{P.mesh.rotation.x+=P.speed,P.mesh.rotation.y+=P.speed}),s.render(i,r)};return _(),()=>{n.disconnect(),window.removeEventListener("mousemove",b),window.removeEventListener("touchmove",b),o.disconnect(),cancelAnimationFrame(A),d.dispose(),g.dispose(),E.dispose(),x.dispose(),p.forEach(w=>{w.mesh.geometry.dispose(),w.mesh.material.dispose()}),t.current&&t.current.contains(s.domElement)&&t.current.removeChild(s.domElement),i.clear(),s.forceContextLoss(),s.dispose()}},[]),m.jsxs("div",{className:"relative flex items-center justify-center w-full h-full pointer-events-auto cursor-crosshair",children:[m.jsx("div",{ref:t,className:"absolute inset-0 z-10"}),m.jsx("div",{className:"absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_10s_linear_infinite] [mask-image:linear-gradient(transparent,white,transparent)] z-0 pointer-events-none scale-105"}),m.jsx("div",{className:"absolute w-[80%] h-[80%] max-w-[250px] max-h-[250px] bg-violet-600/30 blur-[80px] rounded-full z-0 pointer-events-none"})]})},NT=()=>{const t=We.useRef(null),e=We.useRef(!0);return We.useEffect(()=>{const n=()=>{e.current=window.scrollY<window.innerHeight*1.5};window.addEventListener("scroll",n,{passive:!0});const i=new oh;i.fog=new ah(592139,.012);const r=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new gh({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,1)),t.current.appendChild(s.domElement);const a=new mh(16777215,.3);i.add(a);const o=300,l=new gn,c=new Float32Array(o*3);for(let w=0;w<o;w++){const P=w*3;c[P]=(Math.random()-.5)*80,c[P+1]=Math.random()*120-100,c[P+2]=(Math.random()-.5)*60-20}l.setAttribute("position",new Yn(c,3));const f=new Mx({color:9133302,size:.15,transparent:!0,opacity:.5,blending:ka}),h=new A1(l,f);i.add(h);const d=[],g=new Br(.8,.8,.1),v=new ec(.4,.4,.2,8),E=new uh(.6,0),x=new fh({color:1118481,metalness:.9,roughness:.2,clearcoat:1}),u=new Us({color:3718648,wireframe:!0,transparent:!0,opacity:.4});for(let w=0;w<10;w++){const P=Math.random();let N=g;P>.66?N=v:P>.33&&(N=E);const D=new mn(N,Math.random()>.8?u:x);D.position.set((Math.random()-.5)*50,Math.random()*140-120,(Math.random()-.5)*30-10),D.userData={rx:(Math.random()-.5)*.02,ry:(Math.random()-.5)*.02,rz:(Math.random()-.5)*.02,startY:D.position.y,floatSpeed:Math.random()*2+1},i.add(D),d.push(D)}r.position.z=12;let p;const y=new Cx;let M=0,b=0,A=0;const C=()=>{if(p=requestAnimationFrame(C),!e.current)return;const w=y.getElapsedTime(),P=window.scrollY,N=P-A;A=P,M+=(P-M)*.05,b+=(N*.02-b)*.1,h.rotation.y=w*.02,h.position.y=M*.004%40,d.forEach((D,z)=>{D.rotation.x+=D.userData.rx+b*.02,D.rotation.y+=D.userData.ry+b*.02,D.rotation.z+=D.userData.rz,D.position.y=D.userData.startY+Math.sin(w*D.userData.floatSpeed+z)*1.5,Math.abs(b)>.1&&(D.position.x+=Math.sin(w*10+z)*b*.2)}),r.position.y=-(M*.008),r.position.z=12+M*.001,s.render(i,r)};C();const _=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",_),cancelAnimationFrame(p),l.dispose(),f.dispose(),g.dispose(),v.dispose(),E.dispose(),x.dispose(),u.dispose(),t.current&&t.current.contains(s.domElement)&&t.current.removeChild(s.domElement),i.clear(),s.forceContextLoss(),s.dispose()}},[]),m.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none","aria-hidden":"true"})},PT=()=>m.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen",children:[m.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-violet-600/20 blur-[80px] md:blur-[120px] rounded-full animate-[float-slow_20s_ease-in-out_infinite]"}),m.jsx("div",{className:"absolute top-[40%] right-[-10%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-cyan-600/10 blur-[80px] md:blur-[120px] rounded-full animate-[float-slow_25s_ease-in-out_infinite_reverse]"}),m.jsx("div",{className:"absolute bottom-[-10%] left-[20%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-rose-600/10 blur-[100px] md:blur-[150px] rounded-full animate-[float-slow_30s_ease-in-out_infinite]"})]}),vh=()=>{const t=We.useRef(null);return We.useEffect(()=>{if(!t.current)return;new IntersectionObserver(([C])=>{},{rootMargin:"100px"}).observe(t.current);const n=new oh,i=new tn(50,window.innerWidth/window.innerHeight,.1,100);i.position.z=20;const r=new gh({alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.current.appendChild(r.domElement);const s=new mh(16777215,.6);n.add(s);const a=new fm(9133302,3);a.position.set(10,10,10),n.add(a);const o=new fm(3718648,3);o.position.set(-10,-10,10),n.add(o);const l=[],c=new Br(.8,.8,.05),f=new ec(.6,.6,.1,32),h=new tc(.5,0),d=new ic(.6,.05,16,48),g=new fh({color:16777215,metalness:.2,roughness:.1,transmission:.9,thickness:.5,transparent:!0,opacity:1}),v=new Us({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),E=new Us({color:3718648,wireframe:!0,transparent:!0,opacity:.25}),x=new dh({color:1118481,metalness:.8,roughness:.2}),u=[c,f,h,d],p=[g,v,E,x];for(let C=0;C<15;C++){const _=u[Math.floor(Math.random()*u.length)],w=p[Math.floor(Math.random()*p.length)],P=new mn(_,w);P.position.x=(Math.random()-.5)*35,P.position.y=(Math.random()-.5)*60,P.position.z=(Math.random()-.5)*15-5,P.rotation.x=Math.random()*Math.PI,P.rotation.y=Math.random()*Math.PI,P.userData={rx:(Math.random()-.5)*.01,ry:(Math.random()-.5)*.01,floatSpeed:(Math.random()-.5)*.02,parallaxFactor:Math.random()*.08+.02},n.add(P),l.push(P)}let y,M=window.scrollY;const b=()=>{y=requestAnimationFrame(b);const C=window.scrollY,_=C-M;M=C,l.forEach(w=>{w.rotation.x+=w.userData.rx,w.rotation.y+=w.userData.ry,w.position.y+=w.userData.floatSpeed+_*w.userData.parallaxFactor,w.position.y>30&&(w.position.y=-30),w.position.y<-30&&(w.position.y=30)}),r.render(n,i)};b();const A=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),cancelAnimationFrame(y),u.forEach(C=>C.dispose()),p.forEach(C=>C.dispose()),t.current&&t.current.contains(r.domElement)&&t.current.removeChild(r.domElement),n.clear(),r.forceContextLoss(),r.dispose()}},[]),m.jsx("div",{ref:t,className:"w-full h-full pointer-events-none mix-blend-screen opacity-40","aria-hidden":"true"})},LT=({onNavigate:t,currentPage:e})=>{const[n,i]=We.useState(!1),[r,s]=We.useState(!1);return We.useEffect(()=>{const a=()=>i(window.scrollY>50);return window.addEventListener("scroll",a,{passive:!0}),a(),()=>window.removeEventListener("scroll",a)},[]),We.useEffect(()=>{const a=()=>{window.innerWidth>=768&&s(!1)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),m.jsxs("nav",{className:`fixed top-0 w-full z-50 transition-all duration-700 ${n||r?"bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 py-4":"bg-transparent py-4 sm:py-6"}`,children:[m.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center",children:[m.jsxs("div",{onClick:()=>{t("home"),s(!1)},className:"flex items-center gap-3 group cursor-pointer relative z-50",children:[m.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 to-rose-600 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform group-hover:scale-105",children:m.jsx("div",{className:"w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center",children:m.jsx(Bx,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})})}),m.jsx("span",{className:"text-xl sm:text-2xl font-black text-white tracking-tighter",children:"AURA"})]}),m.jsxs("div",{className:"hidden md:flex items-center gap-6 lg:gap-8",children:[["Design","Hardware","Modules"].map(a=>m.jsx("button",{onClick:()=>t(a.toLowerCase()),className:`text-xs lg:text-sm font-semibold transition-colors ${e===a.toLowerCase()?"text-white":"text-zinc-400 hover:text-white"}`,children:a},a)),m.jsx("div",{className:"h-4 w-px bg-white/10 mx-1 lg:mx-2"}),m.jsx("button",{onClick:()=>t("preorder"),className:"px-5 py-2 lg:px-6 lg:py-2.5 rounded-full bg-white text-zinc-950 text-xs lg:text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]",children:"Pre-Order"})]}),m.jsx("button",{className:"md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors",onClick:()=>s(!r),children:r?m.jsx(bT,{className:"w-6 h-6"}):m.jsx(uT,{className:"w-6 h-6"})})]}),m.jsx("div",{className:`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${r?"max-h-[400px] opacity-100":"max-h-0 opacity-0"}`,children:m.jsxs("div",{className:"flex flex-col items-center gap-6 px-6 py-8",children:[["Design","Hardware","Modules"].map(a=>m.jsx("button",{onClick:()=>{t(a.toLowerCase()),s(!1)},className:`text-lg font-bold transition-colors ${e===a.toLowerCase()?"text-white":"text-zinc-300 hover:text-white"}`,children:a},a)),m.jsx("div",{className:"w-full h-px bg-white/10 my-2"}),m.jsx("button",{onClick:()=>{t("preorder"),s(!1)},className:"w-full py-4 rounded-full bg-white text-zinc-950 text-base font-bold hover:scale-[1.02] transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]",children:"Pre-Order - $2,999"})]})})]})},Pn=({title:t,description:e,icon:n,imageSrc:i,className:r,highlight:s})=>{const a=We.useRef(null),o=c=>{if(!a.current)return;const f=a.current.getBoundingClientRect(),h=c.clientX-f.left,d=c.clientY-f.top,g=f.width/2,v=f.height/2,E=(d-v)/v*-6,x=(h-g)/g*6;a.current.style.transform=`perspective(1000px) rotateX(${E}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1)`,a.current.style.transition="transform 0.1s ease-out"},l=()=>{a.current&&(a.current.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",a.current.style.transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)")};return m.jsxs("div",{ref:a,onMouseMove:o,onMouseLeave:l,className:`group relative p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border ${s?"border-violet-500/40 shadow-[0_0_30px_rgba(139,92,246,0.1)]":"border-white/5"} overflow-hidden h-full flex flex-col justify-end min-h-[280px] sm:min-h-[320px] will-change-transform ${r}`,children:[i&&m.jsx("div",{className:"absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 mix-blend-screen pointer-events-none overflow-hidden",children:m.jsx(un,{src:i,alt:t,speed:.1,scale:"1.1"})}),!i&&m.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 transform pointer-events-none",children:m.jsx(n,{className:"w-24 h-24 sm:w-32 sm:h-32 text-violet-400"})}),m.jsxs("div",{className:"relative z-10 transition-transform duration-500",style:{transform:"translateZ(30px)"},children:[m.jsx("div",{className:`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${s?"bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]":"bg-zinc-800 text-violet-400 border border-white/5"} flex items-center justify-center mb-4 sm:mb-6`,children:m.jsx(n,{className:"w-5 h-5 sm:w-7 sm:h-7"})}),m.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight",children:t}),m.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed",children:e})]})]})},DT=()=>{const t=We.useRef(null),e=We.useRef(null);return We.useEffect(()=>{if(!t.current||!e.current)return;const n=e.current.querySelectorAll(".gallery-image-parallax");let i;const r=()=>{i=requestAnimationFrame(()=>{if(!t.current||!e.current)return;const{top:s,height:a}=t.current.getBoundingClientRect(),o=a-window.innerHeight;let l=0;s<=0&&(l=Math.max(0,Math.min(1,-s/o)));const c=e.current.scrollWidth,f=window.innerWidth,h=c-f+f*.1;e.current.style.transform=`translate3d(${-l*h}px, 0, 0)`;const d=f<768?50:100;n.forEach(g=>{g.style.transform=`translate3d(${l*d}px, 0, 0)`})})};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>{window.removeEventListener("scroll",r),cancelAnimationFrame(i)}},[]),m.jsx("section",{ref:t,className:"relative h-[300vh] md:h-[400vh] w-full z-20",children:m.jsxs("div",{className:"sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/5",children:[m.jsxs("div",{className:"max-w-7xl mx-auto px-6 w-full mb-6 sm:mb-12 relative z-10 shrink-0",children:[m.jsx("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight",children:"Hardware Innovation."}),m.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-zinc-400 mt-2 sm:mt-4 max-w-2xl font-medium",children:"Scroll to explore the cutting-edge modules powering the Aura ecosystem."})]}),m.jsx("div",{ref:e,className:"flex gap-4 sm:gap-8 px-6 md:px-[10vw] w-max will-change-transform",children:[{img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",title:"Dual 8K Optics."},{img:"https://images.unsplash.com/photo-1478358161113-b0e11994a36b?q=80&w=2070&auto=format&fit=crop",title:"Forged Titanium."},{img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",title:"Neural Telemetry."},{img:"https://images.unsplash.com/photo-1531297172814-af2652ce9301?q=80&w=2070&auto=format&fit=crop",title:"Spatial Audio."},{img:"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",title:"Haptic Actuators."},{img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",title:"Power Cell."}].map((n,i)=>m.jsxs("div",{className:"w-[85vw] md:w-[65vw] lg:w-[45vw] h-[45vh] md:h-[55vh] lg:h-[60vh] relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] shrink-0 group",children:[m.jsx("div",{className:"gallery-image-parallax absolute top-0 -left-[20%] w-[140%] h-full will-change-transform",children:m.jsx("img",{src:n.img,alt:n.title,className:"absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"})}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 pointer-events-none"}),m.jsxs("div",{className:"absolute bottom-6 left-6 sm:bottom-10 sm:left-10 pointer-events-none",children:[m.jsxs("div",{className:"px-3 sm:px-4 py-1.5 bg-violet-500/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-violet-200 mb-2 sm:mb-3 inline-block border border-violet-500/30",children:["Module 0",i+1]}),m.jsx("h3",{className:"text-xl sm:text-3xl md:text-4xl font-black text-white",children:n.title})]})]},i))})]})})},IT=()=>{const t=[{img:"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop",title:"Dual 8K Optics."},{img:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000&auto=format&fit=crop",title:"Forged Titanium."},{img:"https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop",title:"Neural Telemetry."},{img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop",title:"Spatial Audio."},{img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",title:"Haptic Actuators."},{img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",title:"Power Cell."}];return m.jsx("section",{className:"relative py-24 sm:py-32 px-6 w-full z-20 border-t border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[m.jsxs(pe,{className:"mb-16 sm:mb-24 text-center sm:text-left",children:[m.jsx("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight",children:"Hardware Innovation."}),m.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-zinc-400 mt-4 max-w-2xl font-medium mx-auto sm:mx-0",children:"Explore the cutting-edge modules powering the Aura ecosystem."})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16",children:t.map((e,n)=>m.jsx(pe,{delay:n%2===0?0:200,className:n%2!==0?"md:mt-24":"",children:m.jsxs("div",{className:"relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)] group",children:[m.jsx(un,{src:e.img,alt:e.title,speed:.15,scale:"1.2",className:"group-hover:scale-105 transition-transform duration-1000"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"}),m.jsxs("div",{className:"absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10",children:[m.jsxs("div",{className:"px-4 py-2 bg-violet-500/20 backdrop-blur-md rounded-full text-xs font-bold text-violet-200 mb-4 inline-block border border-violet-500/30",children:["Module 0",n+1]}),m.jsx("h3",{className:"text-2xl sm:text-4xl md:text-5xl font-black text-white",children:e.title})]})]})},n))})]})})},ac=()=>m.jsxs("footer",{className:"relative pt-24 sm:pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden z-10 bg-transparent w-full",children:[m.jsx("div",{className:"absolute bottom-[-100px] sm:bottom-[-200px] left-1/2 -translate-x-1/2 w-[150vw] md:w-[800px] h-[300px] sm:h-[400px] bg-violet-600/10 blur-[150px] sm:blur-[200px] -z-10 rounded-full"}),m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16 mb-16 sm:mb-20",children:[m.jsxs(pe,{className:"max-w-sm md:max-w-xs lg:max-w-sm",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-6 sm:mb-8",children:[m.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 to-rose-600 p-[1px]",children:m.jsx("div",{className:"w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center",children:m.jsx(Bx,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})})}),m.jsx("span",{className:"text-2xl sm:text-3xl font-black text-white tracking-tighter",children:"AURA"})]}),m.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 mb-6 sm:mb-8 leading-relaxed",children:"Pioneering the next frontier of human-computer interaction through advanced spatial computing."})]}),m.jsxs(pe,{className:"grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full md:w-auto",delay:200,children:[m.jsxs("div",{children:[m.jsx("h4",{className:"text-white font-bold mb-4 sm:mb-6 tracking-wide text-xs sm:text-sm uppercase",children:"Hardware"}),m.jsxs("ul",{className:"space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-400 font-medium",children:[m.jsx("li",{children:m.jsx("a",{href:"#",className:"hover:text-violet-400 transition-colors",children:"Headset"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"hover:text-violet-400 transition-colors",children:"Accessories"})})]})]}),m.jsxs("div",{children:[m.jsx("h4",{className:"text-white font-bold mb-4 sm:mb-6 tracking-wide text-xs sm:text-sm uppercase",children:"Software"}),m.jsxs("ul",{className:"space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-400 font-medium",children:[m.jsx("li",{children:m.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Aura OS"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Developers"})})]})]})]})]}),m.jsx("div",{className:"max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-zinc-600 gap-4 font-medium",children:m.jsx("div",{children:"© 2026 Aura Technologies, Inc. All rights reserved."})})]}),UT=({onNavigate:t})=>(We.useEffect(()=>{window.scrollTo(0,0)},[]),m.jsxs(m.Fragment,{children:[m.jsxs("section",{className:"relative min-h-[100svh] px-4 sm:px-6 overflow-visible flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-20",children:[m.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10"}),m.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"})]}),m.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 flex-1",children:[m.jsxs("div",{className:"flex flex-col items-center text-center lg:items-start lg:text-left pt-8 pb-4 lg:py-20 z-10 lg:mt-0 xl:pr-10",children:[m.jsx(pe,{delay:0,children:m.jsxs("div",{className:"inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-violet-500/10 border border-violet-500/30 mb-4 sm:mb-6 lg:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]",children:[m.jsxs("span",{className:"relative flex h-2 w-2 sm:h-3 sm:w-3",children:[m.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"}),m.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-violet-500"})]}),m.jsx("span",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-widest text-violet-200",children:"Aura Pro Available Now"})]})}),m.jsx(pe,{delay:150,children:m.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-black text-white tracking-tighter mb-4 sm:mb-6 leading-[1.05] lg:leading-[0.95] break-words",children:["Infinite ",m.jsx("br",{className:"hidden md:block"}),m.jsx("span",{className:"text-transparent bg-clip-text bg-[linear-gradient(110deg,#a78bfa,45%,#f472b6,55%,#fb7185)] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]",children:"Realities."})]})}),m.jsx(pe,{delay:300,children:m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10 lg:mb-12 leading-relaxed font-medium",children:"Experience the next evolution of computing. Aura Pro seamlessly integrates your digital workspace into the physical world with unparalleled clarity and zero-latency tracking."})}),m.jsx(pe,{delay:450,className:"w-full flex justify-center lg:justify-start",children:m.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto",children:[m.jsx("button",{onClick:()=>t("preorder"),className:"w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-zinc-950 font-bold text-sm sm:text-base hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]",children:"Pre-Order - $2,999"}),m.jsxs("button",{className:"w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-white/10 text-white font-bold text-sm sm:text-base hover:bg-zinc-800 transition-all hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 group",children:[m.jsx(X2,{className:"w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:text-violet-300"}),"Watch Demo"]})]})})]}),m.jsx(pe,{delay:400,direction:"scale",className:"w-full flex items-center justify-center relative z-20",children:m.jsxs("div",{className:"relative w-full flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[550px] max-w-[550px]",children:[m.jsxs("div",{className:"absolute top-[10%] right-[10%] lg:right-[0%] animate-[bounce_3s_ease-in-out_infinite] z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl",children:[m.jsx(Dl,{className:"w-3 h-3 text-cyan-400"})," 12ms Latency"]}),m.jsxs("div",{className:"absolute bottom-[20%] left-[5%] animate-[bounce_4s_ease-in-out_infinite_0.5s] z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl",children:[m.jsx(Il,{className:"w-3 h-3 text-violet-400"})," Dual 8K"]}),m.jsxs("div",{className:"absolute top-[30%] left-[0%] animate-[bounce_3.5s_ease-in-out_infinite_1s] z-30 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl",children:[m.jsx(xh,{className:"w-3 h-3 text-rose-400"})," Neural Tracking"]}),m.jsx("div",{className:"w-full h-full aspect-square pointer-events-auto relative",children:m.jsx(RT,{})})]})})]}),m.jsxs(pe,{delay:800,direction:"none",className:"absolute bottom-4 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60",children:[m.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold text-zinc-400",children:"Scroll to Explore"}),m.jsx(Fx,{className:"w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white animate-bounce"})]})]}),m.jsxs("div",{className:"relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)]",children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 z-0",style:{backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),m.jsx(DT,{}),m.jsxs("section",{className:"relative w-full h-[80vh] md:h-[100vh] lg:h-[120vh] overflow-hidden border-y border-white/5",children:[m.jsxs("div",{className:"absolute inset-0 z-0",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",alt:"Infinite Canvas",speed:.25,scale:"1.3",className:"opacity-30"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"})]}),m.jsx("div",{className:"relative z-10 h-full flex items-center max-w-7xl mx-auto px-6",children:m.jsxs(pe,{className:"max-w-2xl",children:[m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-6 leading-tight break-words",children:["Infinite ",m.jsx("br",{}),m.jsx("span",{className:"text-violet-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]",children:"Canvas."})]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-medium mb-6 sm:mb-10",children:"Your physical environment is no longer a limitation. Spawn hundreds of 4K displays, anchor 3D models to your desk, and collaborate as holograms."}),m.jsxs("button",{onClick:()=>t("design"),className:"flex items-center gap-3 sm:gap-4 text-white font-bold text-base sm:text-lg group cursor-pointer w-max hover:text-violet-300 transition-colors",children:["Explore Aura OS ",m.jsx(B2,{className:"w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:translate-x-3 transition-transform"})]})]})})]}),m.jsx("section",{id:"modules",className:"relative py-20 sm:py-32 px-6 z-10 border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[m.jsxs(pe,{className:"mb-12 sm:mb-20 text-center",children:[m.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-6",children:"Modular by design."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto",children:"Aura Pro adapts to your unique anatomy. Every contact point is magnetically attached, easily swappable, and endlessly customizable."})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center",children:[m.jsxs(pe,{direction:"right",className:"relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(139,92,246,0.1)] bg-zinc-900",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",alt:"VR Headset Module",speed:.15,scale:"1.15",axis:"x",className:"opacity-90"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent"}),m.jsxs("div",{className:"absolute bottom-6 left-6 sm:bottom-12 sm:left-10 z-10",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-bold text-white mb-2 sm:mb-4",children:[m.jsx(ef,{className:"w-3 h-3 sm:w-4 sm:h-4 text-violet-400"})," True-Depth Mapping"]}),m.jsxs("h3",{className:"text-xl sm:text-3xl md:text-4xl font-bold text-white",children:["Physical form. ",m.jsx("br",{}),"Digital soul."]})]})]}),m.jsxs("div",{className:"flex flex-col gap-4 sm:gap-6 h-full justify-center",children:[m.jsx(pe,{delay:0,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-violet-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",children:m.jsx(zx,{className:"w-6 h-6 sm:w-8 sm:h-8 text-violet-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2",children:"Magnetic Light Seal"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed",children:"Conforms perfectly to your face, blocking stray light. Swaps instantly via rare-earth magnets."})]})]})}),m.jsx(pe,{delay:150,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-cyan-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",children:m.jsx(kx,{className:"w-6 h-6 sm:w-8 sm:h-8 text-cyan-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2",children:"Spatial Audio Straps"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed",children:"Integrated dual-driver audio pods provide rich surround sound while keeping you aware of reality."})]})]})}),m.jsx(pe,{delay:300,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-rose-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",children:m.jsx(oT,{className:"w-6 h-6 sm:w-8 sm:h-8 text-rose-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2",children:"Aerospace Alloy Hub"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed",children:"The central chassis houses the M4 Neural chip, locking all components together seamlessly."})]})]})})]})]})]})}),m.jsxs("section",{id:"materials",className:"relative py-20 sm:py-40 px-6 overflow-hidden z-10 border-b border-white/5",children:[m.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-screen mask-image-l",children:m.jsx(un,{src:"https://images.unsplash.com/photo-1523961131990-521072f16b68?q=80&w=2070&auto=format&fit=crop",alt:"Abstract Materials",speed:.1,scale:"1.1"})}),m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6 lg:space-y-8",direction:"right",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300",children:[m.jsx(Vx,{className:"w-3 h-3 sm:w-4 sm:h-4 text-violet-400"})," Aerospace Materials"]}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight",children:["Forged from ",m.jsx("br",{}),"Titanium."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"We sourced aerospace-grade titanium to construct a chassis that is remarkably strong yet virtually weightless. The singular front glass is polished to an optical-grade finish, acting as both a lens and a protective shield for the advanced sensor array."})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"left",children:m.jsxs("div",{className:"aspect-[4/5] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.15)] group",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2070&auto=format&fit=crop",alt:"Hardware Close up",speed:.15,scale:"1.2"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80 pointer-events-none"}),m.jsxs("div",{className:"absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 pointer-events-none",children:[m.jsx("h4",{className:"text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2",children:"Precision Machined"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400",children:"Tolerances measured in microns."})]})]})})]})]}),m.jsx("section",{id:"hardware",className:"relative py-20 sm:py-40 px-6 z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[m.jsxs(pe,{className:"mb-12 sm:mb-24 max-w-3xl",children:[m.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-8",children:"Unprecedented Power."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"Custom silicon and revolutionary optics combine to deliver an experience that defies logic. Welcome to the era of spatial computing."})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[320px]",children:[m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 h-full",delay:0,children:m.jsx(Pn,{title:"Dual 8K Micro-OLED",description:"23.5 million pixels per eye. True black levels and 120Hz dynamic refresh rates make digital objects completely indistinguishable from reality.",icon:Il,imageSrc:"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop",highlight:!0})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:100,children:m.jsx(Pn,{title:"Aura M4 Neural Silicon",description:"A 12-core CPU, 16-core GPU, and a dedicated 32-core NPU process data from 12 cameras at 12ms latency.",icon:Dl})}),m.jsx(pe,{className:"col-span-1 md:col-span-1 lg:col-span-1 h-full",delay:200,children:m.jsx(Pn,{title:"Acoustic Ray Tracing",description:"Six audio drivers map sound to the physical geometry of your room.",icon:Hx})}),m.jsx(pe,{className:"col-span-1 md:col-span-1 lg:col-span-1 h-full",delay:300,children:m.jsx(Pn,{title:"Iris ID Security",description:"Invisible LEDs scan your iris patterns for instant biometric unlocking.",icon:ef})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:400,children:m.jsx(Pn,{title:"LiDAR & Spatial Mapping",description:"Real-time meshing of your environment allows digital objects to cast realistic shadows behind real-world furniture.",icon:Ox})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:500,children:m.jsx(Pn,{title:"Hot-Swappable Power",description:"The braided magnetic tether connects to an aluminum battery pack, offering 4 hours of intense spatial computing.",icon:Ul})})]})]})}),m.jsx(ac,{})]})]})),FT=()=>(We.useEffect(()=>{window.scrollTo(0,0)},[]),m.jsxs("div",{className:"relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between",children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:m.jsx("div",{className:"sticky top-0 w-full h-screen",children:m.jsx(vh,{})})}),m.jsxs("section",{className:"relative py-20 px-6 z-10 flex-grow border-b border-white/5",children:[m.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-screen mask-image-l",children:m.jsx(un,{src:"https://images.unsplash.com/photo-1523961131990-521072f16b68?q=80&w=2070&auto=format&fit=crop",alt:"Abstract Materials",speed:.1,scale:"1.1"})}),m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6 lg:space-y-8",direction:"right",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300",children:[m.jsx(Vx,{className:"w-3 h-3 sm:w-4 sm:h-4 text-violet-400"})," Aerospace Materials"]}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight",children:["Forged from ",m.jsx("br",{}),"Titanium."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"We sourced aerospace-grade titanium to construct a chassis that is remarkably strong yet virtually weightless. The singular front glass is polished to an optical-grade finish, acting as both a lens and a protective shield for the advanced sensor array."})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"left",children:m.jsxs("div",{className:"aspect-[4/5] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.15)] group",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2070&auto=format&fit=crop",alt:"Hardware Close up",speed:.15,scale:"1.2"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80 pointer-events-none"}),m.jsxs("div",{className:"absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 pointer-events-none",children:[m.jsx("h4",{className:"text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2",children:"Precision Machined"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400",children:"Tolerances measured in microns."})]})]})})]})]}),m.jsx("section",{className:"relative py-20 px-6 z-10 flex-grow border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsx(pe,{className:"flex-1 w-full",direction:"right",children:m.jsx("div",{className:"aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group",children:m.jsx(un,{src:"https://images.unsplash.com/photo-1478358161113-b0e11994a36b?q=80&w=2070&auto=format&fit=crop",alt:"Glass",speed:.1,scale:"1.1",className:"opacity-80"})})}),m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"left",children:[m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["A Canvas of ",m.jsx("br",{}),"Curved Glass."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"The front of Aura Pro is a singular piece of three-dimensionally formed laminated glass. It's polished to an optical fit, serving as a lens for the array of cameras and sensors housed within."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"Beneath the glass lies a custom curved OLED display that projects your eyes to the outside world, creating a seamless connection between you and those around you."})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 flex-grow border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"left",children:[m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["Ergonomic ",m.jsx("br",{}),"Architecture."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"Comfort is critical for extended spatial computing sessions. We mapped thousands of cranial profiles to perfectly distribute the lightweight chassis across your face."}),m.jsxs("ul",{className:"space-y-4",children:[m.jsxs("li",{className:"flex items-center gap-3 text-zinc-300 font-medium",children:[m.jsx(sl,{className:"w-5 h-5 text-violet-400"})," Breathable Woven Acoustic Fabric"]}),m.jsxs("li",{className:"flex items-center gap-3 text-zinc-300 font-medium",children:[m.jsx(sl,{className:"w-5 h-5 text-cyan-400"})," Dial-to-Fit Micro-Adjustment"]}),m.jsxs("li",{className:"flex items-center gap-3 text-zinc-300 font-medium",children:[m.jsx(sl,{className:"w-5 h-5 text-rose-400"})," Thermal-Dispersing Aluminum Core"]})]})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"right",children:m.jsx("div",{className:"aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(6,182,212,0.1)] group bg-zinc-900",children:m.jsx(un,{src:"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",alt:"Ergonomics",speed:.1,scale:"1.1",className:"opacity-80"})})})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 flex-grow border-b border-white/5",children:m.jsx("div",{className:"max-w-7xl mx-auto relative z-10 text-center",children:m.jsxs(pe,{children:[m.jsx(_T,{className:"w-16 h-16 text-cyan-400 mx-auto mb-6 opacity-80"}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6",children:["Whisper-Quiet ",m.jsx("br",{}),"Thermals."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto",children:"Processing 23 million pixels requires immense power. Our custom micro-blower system draws cool air from the bottom vents and silently exhausts it through the top frame, keeping both the silicon and your face perfectly cool."})]})})}),m.jsx("section",{className:"relative py-24 px-6 z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[m.jsxs(pe,{className:"text-center mb-16",children:[m.jsx(sT,{className:"w-12 h-12 text-emerald-400 mx-auto mb-6 opacity-80"}),m.jsx("h3",{className:"text-3xl md:text-5xl font-black text-white",children:"Consciously Crafted."})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center",children:[m.jsxs(pe,{delay:100,className:"p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md",children:[m.jsx("div",{className:"text-4xl font-black text-white mb-2",children:"100%"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Recycled Titanium Frame"})]}),m.jsxs(pe,{delay:200,className:"p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md",children:[m.jsx("div",{className:"text-4xl font-black text-white mb-2",children:"0%"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Single-Use Plastics in Packaging"})]}),m.jsxs(pe,{delay:300,className:"p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md",children:[m.jsx("div",{className:"text-4xl font-black text-white mb-2",children:"100%"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Recycled Rare-Earth Elements"})]})]})]})}),m.jsx(ac,{})]})),OT=()=>(We.useEffect(()=>{window.scrollTo(0,0)},[]),m.jsxs("div",{className:"relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between",children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:m.jsx("div",{className:"sticky top-0 w-full h-screen",children:m.jsx(vh,{})})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[m.jsxs(pe,{className:"mb-12 max-w-3xl",children:[m.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-8",children:"Unprecedented Power."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"Custom silicon and revolutionary optics combine to deliver an experience that defies logic. Welcome to the era of spatial computing."})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[320px]",children:[m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 h-full",delay:0,children:m.jsx(Pn,{title:"Dual 8K Micro-OLED",description:"23.5 million pixels per eye. True black levels and 120Hz dynamic refresh rates make digital objects completely indistinguishable from reality.",icon:Il,imageSrc:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",highlight:!0})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:100,children:m.jsx(Pn,{title:"Aura M4 Neural Silicon",description:"A 12-core CPU, 16-core GPU, and a dedicated 32-core NPU process data from 12 cameras at 12ms latency.",icon:Dl})}),m.jsx(pe,{className:"col-span-1 md:col-span-1 lg:col-span-1 h-full",delay:200,children:m.jsx(Pn,{title:"Acoustic Ray Tracing",description:"Six audio drivers map sound to the physical geometry of your room.",icon:Hx})}),m.jsx(pe,{className:"col-span-1 md:col-span-1 lg:col-span-1 h-full",delay:300,children:m.jsx(Pn,{title:"Iris ID Security",description:"Invisible LEDs scan your iris patterns for instant biometric unlocking.",icon:ef})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:400,children:m.jsx(Pn,{title:"LiDAR & Spatial Mapping",description:"Real-time meshing of your environment allows digital objects to cast realistic shadows behind real-world furniture.",icon:Ox})}),m.jsx(pe,{className:"col-span-1 md:col-span-2 lg:col-span-2 h-full",delay:500,children:m.jsx(Pn,{title:"Hot-Swappable Power",description:"The braided magnetic tether connects to an aluminum battery pack, offering 4 hours of intense spatial computing.",icon:Ul})})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[m.jsxs(pe,{className:"text-center mb-16 max-w-3xl mx-auto",children:[m.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6",children:"A Bionic Array."}),m.jsx("p",{className:"text-zinc-400 text-lg",children:"More sensors than any device ever created, working in perfect unison to digitize your reality in real-time."})]}),m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[m.jsxs(pe,{delay:0,className:"p-6 bg-zinc-900/30 rounded-2xl border border-white/5",children:[m.jsx(H2,{className:"w-8 h-8 text-violet-400 mx-auto mb-4"}),m.jsx("h4",{className:"text-white font-bold mb-1",children:"12 Cameras"}),m.jsx("p",{className:"text-xs text-zinc-500",children:"High-res passthrough"})]}),m.jsxs(pe,{delay:100,className:"p-6 bg-zinc-900/30 rounded-2xl border border-white/5",children:[m.jsx(MT,{className:"w-8 h-8 text-cyan-400 mx-auto mb-4"}),m.jsx("h4",{className:"text-white font-bold mb-1",children:"LiDAR Scanner"}),m.jsx("p",{className:"text-xs text-zinc-500",children:"Real-time 3D meshing"})]}),m.jsxs(pe,{delay:200,className:"p-6 bg-zinc-900/30 rounded-2xl border border-white/5",children:[m.jsx(fT,{className:"w-8 h-8 text-rose-400 mx-auto mb-4"}),m.jsx("h4",{className:"text-white font-bold mb-1",children:"6 Microphones"}),m.jsx("p",{className:"text-xs text-zinc-500",children:"Directional beamforming"})]}),m.jsxs(pe,{delay:300,className:"p-6 bg-zinc-900/30 rounded-2xl border border-white/5",children:[m.jsx(Z2,{className:"w-8 h-8 text-emerald-400 mx-auto mb-4"}),m.jsx("h4",{className:"text-white font-bold mb-1",children:"Iris Tracking"}),m.jsx("p",{className:"text-xs text-zinc-500",children:"Biometric security"})]})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"right",children:[m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["Dual-Chip ",m.jsx("br",{}),"Symphony."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"Aura Pro is powered by a revolutionary dual-chip design. The primary M4 processor handles complex computations, rendering 3D graphics, and running Aura OS with absolute fluidity."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"Working in parallel, the specialized R1 sensory co-processor streams data from 12 cameras, 5 sensors, and 6 microphones with a microscopic 12-millisecond photon-to-photon latency—virtually eliminating motion sickness."})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"left",children:m.jsxs("div",{className:"aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group bg-zinc-900 p-8 flex items-center justify-center gap-8",children:[m.jsxs("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden",children:[m.jsx(Dl,{className:"w-10 h-10 text-violet-400 mb-2 z-10"}),m.jsx("span",{className:"text-white font-bold z-10",children:"M4 Core"}),m.jsx("div",{className:"absolute inset-0 bg-violet-500/20 blur-xl"})]}),m.jsxs("div",{className:"w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden",children:[m.jsx(xh,{className:"w-8 h-8 text-cyan-400 mb-2 z-10"}),m.jsx("span",{className:"text-white font-bold text-sm z-10",children:"R1 Sensor"}),m.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-xl"})]})]})})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-b border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[m.jsx(pe,{className:"text-center mb-16",children:m.jsx("h3",{className:"text-3xl md:text-5xl font-black text-white",children:"Silicon Performance."})}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center",children:[m.jsxs(pe,{delay:100,className:"p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-cyan-500/40 transition-colors",children:[m.jsx(J2,{className:"w-12 h-12 text-cyan-400 mx-auto mb-6"}),m.jsx("div",{className:"text-5xl font-black text-white mb-2",children:"12ms"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Photon-to-Photon Latency"})]}),m.jsxs(pe,{delay:200,className:"p-8 rounded-3xl bg-zinc-900/50 border border-violet-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-violet-500/40 transition-colors",children:[m.jsx(Il,{className:"w-12 h-12 text-violet-400 mx-auto mb-6"}),m.jsx("div",{className:"text-5xl font-black text-white mb-2",children:"23.5M"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Pixels Per Eye"})]}),m.jsxs(pe,{delay:300,className:"p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-rose-500/40 transition-colors",children:[m.jsx(Ul,{className:"w-12 h-12 text-rose-400 mx-auto mb-6"}),m.jsx("div",{className:"text-5xl font-black text-white mb-2",children:"120Hz"}),m.jsx("div",{className:"text-zinc-400 font-medium",children:"Dynamic Refresh Rate"})]})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10",children:m.jsx("div",{className:"max-w-7xl mx-auto relative z-10 text-center",children:m.jsxs(pe,{children:[m.jsx(ET,{className:"w-16 h-16 text-emerald-400 mx-auto mb-6 opacity-80"}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6",children:["Zero-Lag ",m.jsx("br",{}),"Wireless."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto",children:"Featuring Wi-Fi 7 and a custom proprietary ultra-wideband chip, Aura Pro can wirelessly beam 4K displays from your Mac directly into your field of view with virtually no latency."})]})})}),m.jsx(ac,{})]})),kT=()=>(We.useEffect(()=>{window.scrollTo(0,0)},[]),m.jsxs("div",{className:"relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between",children:[m.jsx(IT,{}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-t border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[m.jsxs(pe,{className:"mb-12 sm:mb-20 text-center",children:[m.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-6",children:"Modular by design."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto",children:"Aura Pro adapts to your unique anatomy. Every contact point is magnetically attached, easily swappable, and endlessly customizable."})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center",children:[m.jsxs(pe,{direction:"right",className:"relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(139,92,246,0.1)] bg-zinc-900",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",alt:"Magnetic Attachments",speed:.15,scale:"1.15",className:"opacity-90"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"}),m.jsx("div",{className:"absolute bottom-6 left-6 z-10",children:m.jsxs("h3",{className:"text-xl sm:text-3xl font-bold text-white",children:["Snap & Go ",m.jsx("br",{}),"Ecosystem."]})})]}),m.jsxs("div",{className:"flex flex-col gap-4 sm:gap-6 h-full justify-center",children:[m.jsx(pe,{delay:0,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-violet-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0",children:m.jsx(zx,{className:"w-6 h-6 sm:w-8 sm:h-8 text-violet-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1",children:"Magnetic Light Seal"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400",children:"Conforms perfectly to your face, blocking stray light. Swaps instantly via rare-earth magnets."})]})]})}),m.jsx(pe,{delay:150,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-cyan-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0",children:m.jsx(kx,{className:"w-6 h-6 sm:w-8 sm:h-8 text-cyan-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1",children:"Spatial Audio Straps"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400",children:"Integrated dual-driver audio pods provide rich surround sound while keeping you aware of reality."})]})]})}),m.jsx(pe,{delay:300,direction:"left",className:"h-full",children:m.jsxs("div",{className:"h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-rose-500/40 transition-all duration-500",children:[m.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0",children:m.jsx(gT,{className:"w-6 h-6 sm:w-8 sm:h-8 text-rose-400"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white mb-1",children:"Zeiss Optical Inserts"}),m.jsx("p",{className:"text-xs sm:text-sm md:text-base text-zinc-400",children:"Custom prescription lenses magnetically snap into place, ensuring absolute visual clarity."})]})]})})]})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-t border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsx(pe,{className:"flex-1 w-full",direction:"right",children:m.jsxs("div",{className:"aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group bg-zinc-900",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1531297172814-af2652ce9301?q=80&w=2070&auto=format&fit=crop",alt:"Face Scan",speed:.1,scale:"1.1",className:"opacity-40 mix-blend-screen"}),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsx(km,{className:"w-20 h-20 text-cyan-400 opacity-80 animate-pulse"})})]})}),m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"left",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300",children:[m.jsx(km,{className:"w-3 h-3 sm:w-4 sm:h-4 text-cyan-400"})," True-Depth Mapping"]}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["Your Unique ",m.jsx("br",{}),"Geometry."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"No two faces are alike. Before your Aura Pro ships, you'll use the Aura Companion App to perform a microscopic True-Depth scan of your facial geometry."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"We use this data to select the exact Light Seal and Head Band sizes tailored specifically for your brow curvature and cheekbone structure, ensuring zero light leakage and infinite comfort."})]})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-t border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"left",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300",children:[m.jsx(tT,{className:"w-3 h-3 sm:w-4 sm:h-4 text-rose-400"})," Physical Feedback"]}),m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["Feel the ",m.jsx("br",{}),"Digital World."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"While Aura Pro relies entirely on your hands and eyes for navigation, the modular ecosystem extends to physical accessories."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"Snap on our advanced Haptic Gloves or pair third-party styluses via Bluetooth 5.3 to literally feel the resistance, texture, and weight of 3D objects you interact with in the Aura OS."})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"right",children:m.jsx("div",{className:"aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(244,63,94,0.1)] group bg-zinc-900",children:m.jsx(un,{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",alt:"Haptics",speed:.1,scale:"1.1",className:"opacity-80"})})})]})}),m.jsx("section",{className:"relative py-20 px-6 z-10 border-t border-white/5",children:m.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center",children:[m.jsxs(pe,{className:"flex-1 space-y-4 sm:space-y-6",direction:"right",children:[m.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight",children:["Hot-Swappable ",m.jsx("br",{}),"Energy."]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6",children:"To keep the headset impossibly light, we moved the heavy batteries off your face. The braided magnetic power tether connects to an aerospace-grade aluminum power bank you keep in your pocket."}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed",children:"Running low? Unplug the battery and plug in a fresh one. A small internal capacitor keeps the headset running for 2 minutes while you swap, ensuring you never lose your flow."})]}),m.jsx(pe,{className:"flex-1 w-full",delay:200,direction:"left",children:m.jsxs("div",{className:"aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(244,63,94,0.1)] group bg-zinc-900",children:[m.jsx(un,{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",alt:"Battery Module",speed:.1,scale:"1.1",className:"opacity-80"}),m.jsx("div",{className:"absolute bottom-6 right-6",children:m.jsxs("div",{className:"px-4 py-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center gap-2",children:[m.jsx(Ul,{className:"w-4 h-4 text-rose-400"})," ",m.jsx("span",{className:"text-white font-bold text-sm",children:"4 Hour Capacity"})]})})]})})]})}),m.jsx(ac,{})]})),zT=({onNavigate:t})=>{const[e,n]=We.useState(!1);We.useEffect(()=>{window.scrollTo(0,0)},[]);const i=r=>{r.preventDefault(),setTimeout(()=>{n(!0),window.scrollTo({top:0,behavior:"smooth"})},500)};return e?m.jsxs("div",{className:"relative pt-32 pb-24 px-6 max-w-2xl mx-auto min-h-[100svh] z-10 flex flex-col items-center justify-center text-center",children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent blur-3xl z-0"}),m.jsxs(pe,{className:"relative z-10",children:[m.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]",children:m.jsx(sl,{className:"w-10 h-10 sm:w-12 sm:h-12 text-violet-400"})}),m.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight",children:"Reservation Secured."}),m.jsx("p",{className:"text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-lg mx-auto",children:"Welcome to the future. We've sent a confirmation email with your queue position and next steps."}),m.jsx("button",{onClick:()=>t("home"),className:"px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-white text-zinc-950 font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]",children:"Return to Homepage"})]})]}):m.jsx("div",{className:"relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-[100svh] z-10 flex items-center",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-start",children:[m.jsxs(pe,{direction:"right",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-xs font-bold text-violet-200 mb-6",children:[m.jsx(xh,{className:"w-3 h-3"})," Secure Your Spot"]}),m.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight",children:["Step into the ",m.jsx("br",{}),m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-rose-400",children:"Future."})]}),m.jsx("p",{className:"text-sm sm:text-base md:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-md",children:"Aura Pro is currently in high demand. Secure your priority spot in line today. No financial commitment required until shipping begins in Fall 2026."}),m.jsxs("div",{className:"p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl shadow-2xl",children:[m.jsxs("div",{className:"flex items-center gap-4 sm:gap-6 mb-6",children:[m.jsx("div",{className:"w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-800 shrink-0 relative border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]",children:m.jsx("img",{src:"https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=400&auto=format&fit=crop",className:"w-full h-full object-cover opacity-80 mix-blend-screen",alt:"Aura Pro"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg sm:text-2xl font-bold text-white tracking-tight",children:"Aura Pro System"}),m.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 mt-1 mb-2",children:"Includes Headset, Light Seal, Dual Audio Straps, and Battery."}),m.jsx("div",{className:"text-lg sm:text-xl font-black text-white",children:"$2,999"})]})]}),m.jsxs("div",{className:"space-y-3 pt-5 border-t border-white/10",children:[m.jsxs("div",{className:"flex justify-between text-xs sm:text-sm font-medium",children:[m.jsx("span",{className:"text-zinc-400",children:"Expected Delivery"}),m.jsx("span",{className:"text-white",children:"Fall 2026"})]}),m.jsxs("div",{className:"flex justify-between text-xs sm:text-sm font-medium",children:[m.jsx("span",{className:"text-zinc-400",children:"Due Today"}),m.jsx("span",{className:"text-emerald-400 font-bold",children:"$0.00"})]})]})]})]}),m.jsx(pe,{direction:"left",delay:200,children:m.jsxs("form",{onSubmit:i,className:"p-6 sm:p-10 rounded-[2rem] bg-zinc-900/60 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]",children:[m.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 tracking-tight",children:"Reservation Details"}),m.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{className:"text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1",children:"First Name"}),m.jsx("input",{required:!0,type:"text",className:"w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all",placeholder:"Jane"})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{className:"text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1",children:"Last Name"}),m.jsx("input",{required:!0,type:"text",className:"w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all",placeholder:"Doe"})]})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{className:"text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1",children:"Email Address"}),m.jsx("input",{required:!0,type:"email",className:"w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all",placeholder:"jane@example.com"})]}),m.jsxs("div",{className:"space-y-2 relative",children:[m.jsx("label",{className:"text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1",children:"Storage Capacity"}),m.jsxs("select",{className:"w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none cursor-pointer",children:[m.jsx("option",{value:"512",children:"512GB Base (Included)"}),m.jsx("option",{value:"1024",children:"1TB (+$200)"}),m.jsx("option",{value:"2048",children:"2TB (+$400)"})]}),m.jsx(Fx,{className:"absolute right-4 bottom-3 sm:bottom-3.5 w-5 h-5 text-zinc-400 pointer-events-none"})]})]}),m.jsx("button",{type:"submit",className:"w-full mt-8 sm:mt-10 px-6 py-3.5 sm:py-4 rounded-xl bg-white text-zinc-950 font-bold text-base sm:text-lg hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)]",children:"Confirm Reservation"}),m.jsxs("p",{className:"text-center text-[10px] sm:text-xs text-zinc-500 mt-4 sm:mt-6 px-4",children:["By confirming, you agree to our ",m.jsx("a",{href:"#",className:"underline hover:text-zinc-300",children:"Terms of Service"}),". No credit card required today."]})]})})]})})};function BT(){const[t,e]=We.useState("home");return m.jsxs("div",{className:"min-h-screen bg-zinc-950 font-sans text-zinc-200 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-clip",children:[m.jsx(NT,{}),m.jsx(PT,{}),m.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000",style:{opacity:t==="home"?0:1},children:m.jsx(vh,{})}),m.jsx(LT,{onNavigate:e,currentPage:t}),t==="home"&&m.jsx(UT,{onNavigate:e}),t==="design"&&m.jsx(FT,{}),t==="hardware"&&m.jsx(OT,{}),t==="modules"&&m.jsx(kT,{}),t==="preorder"&&m.jsx(zT,{onNavigate:e}),m.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes gradient { 
          0% { background-position: 0% 50%; } 
          100% { background-position: -200% 50%; } 
        }
        .mask-image-b { mask-image: linear-gradient(to bottom, black 50%, transparent 100%); }
        .mask-image-l { mask-image: linear-gradient(to left, black 20%, transparent 100%); }
        body { background-color: #09090b; color: white; margin: 0; padding: 0; }
      `}})]})}Zg(document.getElementById("root")).render(m.jsx(We.StrictMode,{children:m.jsx(BT,{})}));
