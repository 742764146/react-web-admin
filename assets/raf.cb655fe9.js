import{o as v}from"./@babel.462cdc09.js";import{p as w}from"./performance-now.a9ae0114.js";var p={exports:{}},x=w.exports,a=typeof window=="undefined"?v:window,s=["moz","webkit"],o="AnimationFrame",t=a["request"+o],l=a["cancel"+o]||a["cancelRequest"+o];for(var c=0;!t&&c<s.length;c++)t=a[s[c]+"Request"+o],l=a[s[c]+"Cancel"+o]||a[s[c]+"CancelRequest"+o];if(!t||!l){var m=0,d=0,e=[],g=1e3/60;t=function(n){if(e.length===0){var r=x(),h=Math.max(0,g-(r-m));m=h+r,setTimeout(function(){var i=e.slice(0);e.length=0;for(var f=0;f<i.length;f++)if(!i[f].cancelled)try{i[f].callback(m)}catch(u){setTimeout(function(){throw u},0)}},Math.round(h))}return e.push({handle:++d,callback:n,cancelled:!1}),d},l=function(n){for(var r=0;r<e.length;r++)e[r].handle===n&&(e[r].cancelled=!0)}}p.exports=function(n){return t.call(a,n)};p.exports.cancel=function(){l.apply(a,arguments)};p.exports.polyfill=function(n){n||(n=a),n.requestAnimationFrame=t,n.cancelAnimationFrame=l};export{p as r};
