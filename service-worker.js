if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"0bdf32fa0563d53cf4e3eee9afc35f1c"},{url:"main.92fd9299.js",revision:"0a06e166b2ad4e0ab15fe9225a5330a8"},{url:"next.78c65c16.svg",revision:"0fd94a1ac79a2cc77ec0f1d5e17b7cd3"},{url:"styles.0e218e49.css",revision:"fba823f5e27d0596e73cd16b1f144690"}],{})}));
//# sourceMappingURL=service-worker.js.map
