var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=i);var n=i("iQIUW");function r(e,o){return new Promise(((t,i)=>{const n=Math.random();setTimeout((()=>{n>.3?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let[o,t,i]=e.target;i=Number(i.value),o=Number(o.value),t=Number(t.value);for(let e=0;e<i;e++){r(e+1,o+t*e).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.385d7e3e.js.map
