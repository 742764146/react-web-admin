import{r as m}from"./react.beee60db.js";var w={exports:{}},E={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=m.exports;function V(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j=typeof Object.is=="function"?Object.is:V,O=f.useState,_=f.useEffect,g=f.useLayoutEffect,k=f.useDebugValue;function q(e,t){var r=t(),i=O({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return g(function(){n.value=r,n.getSnapshot=t,p(n)&&u({inst:n})},[e,r,t]),_(function(){return p(n)&&u({inst:n}),e(function(){p(n)&&u({inst:n})})},[e]),k(r),r}function p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!j(e,r)}catch{return!0}}function D(e,t){return t()}var L=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?D:q;E.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:L;w.exports=E;var M={exports:{}},$={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=m.exports,R=w.exports;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z=typeof Object.is=="function"?Object.is:W,A=R.useSyncExternalStore,B=v.useRef,C=v.useEffect,F=v.useMemo,G=v.useDebugValue;$.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=B(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=F(function(){function S(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return a=s}return a=o}if(s=a,z(d,o))return s;var y=i(o);return n!==void 0&&n(s,y)?s:(d=o,a=y)}var h=!1,d,a,x=r===void 0?null:r;return[function(){return S(t())},x===null?void 0:function(){return S(x())}]},[t,r,i,n]);var l=A(e,u[0],u[1]);return C(function(){c.hasValue=!0,c.value=l},[l]),G(l),l};M.exports=$;export{M as w};
