/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var m;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(m||(m={}));const R="popstate";function te(e){e===void 0&&(e={});function t(a,r){let{pathname:s,search:i,hash:l}=a.location;return $("",{pathname:s,search:i,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:H(r)}return L(t,n,null,e)}function O(){return Math.random().toString(36).substr(2,8)}function W(e){return{usr:e.state,key:e.key}}function $(e,t,n,a){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:n,key:t&&t.key||a||O()})}function H(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function P(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function L(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:s=!1}=a,i=r.history,l=m.Pop,o=null;function d(){l=m.Pop,o&&o({action:l,location:h.location})}function c(u,S){l=m.Push;let p=$(h.location,u,S);n&&n(p,u);let x=W(p),v=h.createHref(p);try{i.pushState(x,"",v)}catch{r.location.assign(v)}s&&o&&o({action:l,location:p})}function f(u,S){l=m.Replace;let p=$(h.location,u,S);n&&n(p,u);let x=W(p),v=h.createHref(p);i.replaceState(x,"",v),s&&o&&o({action:l,location:p})}let h={get action(){return l},get location(){return e(r,i)},listen(u){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(R,d),o=u,()=>{r.removeEventListener(R,d),o=null}},createHref(u){return t(r,u)},push:c,replace:f,go(u){return i.go(u)}};return h}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function ne(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?P(t):t,r=N(a.pathname||"/",n);if(r==null)return null;let s=j(e);b(s);let i=null;for(let l=0;i==null&&l<s.length;++l)i=D(s[l],r);return i}function j(e,t,n,a){return t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a=""),e.forEach((r,s)=>{let i={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};i.relativePath.startsWith("/")&&(g(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(a.length));let l=y([a,i.relativePath]),o=n.concat(i);r.children&&r.children.length>0&&(g(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),j(r.children,t,o,l)),!(r.path==null&&!r.index)&&t.push({path:l,score:M(l,r.index),routesMeta:o})}),t}function b(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const T=/^:\w+$/,U=3,V=2,k=1,z=10,A=-2,I=e=>e==="*";function M(e,t){let n=e.split("/"),a=n.length;return n.some(I)&&(a+=A),t&&(a+=V),n.filter(r=>!I(r)).reduce((r,s)=>r+(T.test(s)?U:s===""?k:z),a)}function _(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function D(e,t){let{routesMeta:n}=e,a={},r="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],o=i===n.length-1,d=r==="/"?t:t.slice(r.length)||"/",c=G({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},d);if(!c)return null;Object.assign(a,c.params);let f=l.route;s.push({params:a,pathname:y([r,c.pathname]),pathnameBase:Q(y([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=y([r,c.pathnameBase]))}return s}function G(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=J(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((d,c,f)=>{if(c==="*"){let h=l[f]||"";i=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return d[c]=K(l[f]||"",c),d},{}),pathname:s,pathnameBase:i,pattern:e}}function J(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),C(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,l)=>(a.push(l),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function K(e,t){try{return decodeURIComponent(e)}catch(n){return C(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function N(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function g(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function C(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function q(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:n?n.startsWith("/")?n:F(n,t):t,search:X(a),hash:Y(r)}}function F(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function E(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function re(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=P(e):(r=w({},e),g(!r.pathname||!r.pathname.includes("?"),E("?","pathname","search",r)),g(!r.pathname||!r.pathname.includes("#"),E("#","pathname","hash",r)),g(!r.search||!r.search.includes("#"),E("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,l;if(a||i==null)l=n;else{let f=t.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}l=f>=0?t[f]:"/"}let o=q(r,l),d=i&&i!=="/"&&i.endsWith("/"),c=(s||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(d||c)&&(o.pathname+="/"),o}const y=e=>e.join("/").replace(/\/\/+/g,"/"),Q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Z{constructor(t,n,a){this.status=t,this.statusText=n||"",this.data=a}}function ae(e){return e instanceof Z}export{m as A,ae as a,te as c,g as i,y as j,ne as m,P as p,re as r,N as s};
