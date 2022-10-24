var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var f={}.hasOwnProperty;function t(){for(var n=[],e=0;e<arguments.length;e++){var s=arguments[e];if(!!s){var o=typeof s;if(o==="string"||o==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var a=t.apply(null,s);a&&n.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var i in s)f.call(s,i)&&s[i]&&n.push(i)}}}return n.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t})()})(c);var l=c.exports;export{l as c};
