import{r}from"./react.beee60db.js";import{R as m}from"./react-router.54c14298.js";import{c as p}from"./@remix-run.e440904a.js";/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(e){let{basename:i,children:c,window:l}=e,o=r.exports.useRef();o.current==null&&(o.current=p({window:l,v5Compat:!0}));let t=o.current,[s,u]=r.exports.useState({action:t.action,location:t.location});return r.exports.useLayoutEffect(()=>t.listen(u),[t]),r.exports.createElement(m,{basename:i,children:c,location:s.location,navigationType:s.action,navigator:t})}var a;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(a||(a={}));var n;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(n||(n={}));export{S as H};