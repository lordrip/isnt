function $parcel$export(e,$,a,t){Object.defineProperty(e,$,{get:a,set:t,enumerable:!0,configurable:!0})}function $parcel$interopDefault(e){return e&&e.__esModule?e.default:e}function $parcel$exportWildcard(e,$){return Object.keys($).forEach((function(a){"default"===a||"__esModule"===a||e.hasOwnProperty(a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return $[a]}})})),e}var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequire3afd,$2150b2eb64e3c55e$var$t;null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var $=$parcel$inits[e];delete $parcel$inits[e];var a={id:e,exports:{}};return $parcel$modules[e]=a,$.call(a.exports,a,a.exports),a.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t},parcelRequire.register=function(e,$){$parcel$inits[e]=$},$parcel$global.parcelRequire3afd=parcelRequire),parcelRequire.register("5BMSj",(function(module,exports){$parcel$export(module.exports,"getOperation",(()=>getOperation));const getRandomNumber=e=>{const $=Math.floor(Math.random()*e);return $<=0?getRandomNumber(e):$},getOperation=(operator,range)=>{const allocatedNumbers=[];let num1=getRandomNumber(range),num2=getRandomNumber(range);if("-"===operator&&num2>num1){const e=num2;num1=num2,num2=e}else if("/"===operator&&num1%num2!=0)return getOperation(operator,range);const answer=eval(`${num1}${operator}${num2}`);allocatedNumbers.push(answer);const opt1=getRandomResult(range,allocatedNumbers),opt2=getRandomResult(range,allocatedNumbers),opt3=getRandomResult(range,allocatedNumbers);return{num1:num1,num2:num2,opt1:opt1,opt2:opt2,opt3:opt3,answer:answer,operator:operator}},getRandomResult=(e,$)=>{const a=getRandomNumber(e);return $.includes(a)?getRandomResult(e,$):($.push(a),a)}}));const $2150b2eb64e3c55e$var$i=globalThis.trustedTypes,$2150b2eb64e3c55e$var$s=$2150b2eb64e3c55e$var$i?$2150b2eb64e3c55e$var$i.createPolicy("lit-html",{createHTML:e=>e}):void 0,$2150b2eb64e3c55e$var$e=`lit$${(Math.random()+"").slice(9)}$`,$2150b2eb64e3c55e$var$o="?"+$2150b2eb64e3c55e$var$e,$2150b2eb64e3c55e$var$n=`<${$2150b2eb64e3c55e$var$o}>`,$2150b2eb64e3c55e$var$l=document,$2150b2eb64e3c55e$var$h=(e="")=>$2150b2eb64e3c55e$var$l.createComment(e),$2150b2eb64e3c55e$var$r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$2150b2eb64e3c55e$var$d=Array.isArray,$2150b2eb64e3c55e$var$u=e=>{var $;return $2150b2eb64e3c55e$var$d(e)||"function"==typeof(null===($=e)||void 0===$?void 0:$[Symbol.iterator])},$2150b2eb64e3c55e$var$c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$2150b2eb64e3c55e$var$v=/-->/g,$2150b2eb64e3c55e$var$a=/>/g,$2150b2eb64e3c55e$var$f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$2150b2eb64e3c55e$var$_=/'/g,$2150b2eb64e3c55e$var$m=/"/g,$2150b2eb64e3c55e$var$g=/^(?:script|style|textarea|title)$/i,$2150b2eb64e3c55e$var$p=e=>($,...a)=>({_$litType$:e,strings:$,values:a}),$2150b2eb64e3c55e$export$c0bb0b647f701bb5=$2150b2eb64e3c55e$var$p(1),$2150b2eb64e3c55e$export$7ed1367e7fa1ad68=$2150b2eb64e3c55e$var$p(2),$2150b2eb64e3c55e$export$9c068ae9cc5db4e8=Symbol.for("lit-noChange"),$2150b2eb64e3c55e$export$45b790e32b2810ee=Symbol.for("lit-nothing"),$2150b2eb64e3c55e$var$T=new WeakMap,$2150b2eb64e3c55e$export$b3890eb0ae9dca99=(e,$,a)=>{var t,r;const b=null!==(t=null==a?void 0:a.renderBefore)&&void 0!==t?t:$;let c=b._$litPart$;if(void 0===c){const e=null!==(r=null==a?void 0:a.renderBefore)&&void 0!==r?r:null;b._$litPart$=c=new $2150b2eb64e3c55e$var$N($.insertBefore($2150b2eb64e3c55e$var$h(),e),e,void 0,null!=a?a:{})}return c._$AI(e),c},$2150b2eb64e3c55e$var$A=$2150b2eb64e3c55e$var$l.createTreeWalker($2150b2eb64e3c55e$var$l,129,null,!1),$2150b2eb64e3c55e$var$C=(e,$)=>{const a=e.length-1,t=[];let r,b=2===$?"<svg>":"",c=$2150b2eb64e3c55e$var$c;for(let $=0;$<a;$++){const a=e[$];let n,o,i=-1,s=0;for(;s<a.length&&(c.lastIndex=s,o=c.exec(a),null!==o);)s=c.lastIndex,c===$2150b2eb64e3c55e$var$c?"!--"===o[1]?c=$2150b2eb64e3c55e$var$v:void 0!==o[1]?c=$2150b2eb64e3c55e$var$a:void 0!==o[2]?($2150b2eb64e3c55e$var$g.test(o[2])&&(r=RegExp("</"+o[2],"g")),c=$2150b2eb64e3c55e$var$f):void 0!==o[3]&&(c=$2150b2eb64e3c55e$var$f):c===$2150b2eb64e3c55e$var$f?">"===o[0]?(c=null!=r?r:$2150b2eb64e3c55e$var$c,i=-1):void 0===o[1]?i=-2:(i=c.lastIndex-o[2].length,n=o[1],c=void 0===o[3]?$2150b2eb64e3c55e$var$f:'"'===o[3]?$2150b2eb64e3c55e$var$m:$2150b2eb64e3c55e$var$_):c===$2150b2eb64e3c55e$var$m||c===$2150b2eb64e3c55e$var$_?c=$2150b2eb64e3c55e$var$f:c===$2150b2eb64e3c55e$var$v||c===$2150b2eb64e3c55e$var$a?c=$2150b2eb64e3c55e$var$c:(c=$2150b2eb64e3c55e$var$f,r=void 0);const l=c===$2150b2eb64e3c55e$var$f&&e[$+1].startsWith("/>")?" ":"";b+=c===$2150b2eb64e3c55e$var$c?a+$2150b2eb64e3c55e$var$n:i>=0?(t.push(n),a.slice(0,i)+"$lit$"+a.slice(i)+$2150b2eb64e3c55e$var$e+l):a+$2150b2eb64e3c55e$var$e+(-2===i?(t.push(void 0),$):l)}const n=b+(e[a]||"<?>")+(2===$?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$2150b2eb64e3c55e$var$s?$2150b2eb64e3c55e$var$s.createHTML(n):n,t]};class $2150b2eb64e3c55e$var$E{constructor({strings:e,_$litType$:$},a){let t;this.parts=[];let r=0,b=0;const c=e.length-1,n=this.parts,[o,i]=$2150b2eb64e3c55e$var$C(e,$);if(this.el=$2150b2eb64e3c55e$var$E.createElement(o,a),$2150b2eb64e3c55e$var$A.currentNode=this.el.content,2===$){const e=this.el.content,$=e.firstChild;$.remove(),e.append(...$.childNodes)}for(;null!==(t=$2150b2eb64e3c55e$var$A.nextNode())&&n.length<c;){if(1===t.nodeType){if(t.hasAttributes()){const e=[];for(const $ of t.getAttributeNames())if($.endsWith("$lit$")||$.startsWith($2150b2eb64e3c55e$var$e)){const a=i[b++];if(e.push($),void 0!==a){const e=t.getAttribute(a.toLowerCase()+"$lit$").split($2150b2eb64e3c55e$var$e),$=/([.?@])?(.*)/.exec(a);n.push({type:1,index:r,name:$[2],strings:e,ctor:"."===$[1]?$2150b2eb64e3c55e$var$M:"?"===$[1]?$2150b2eb64e3c55e$var$H:"@"===$[1]?$2150b2eb64e3c55e$var$I:$2150b2eb64e3c55e$var$S})}else n.push({type:6,index:r})}for(const $ of e)t.removeAttribute($)}if($2150b2eb64e3c55e$var$g.test(t.tagName)){const e=t.textContent.split($2150b2eb64e3c55e$var$e),$=e.length-1;if($>0){t.textContent=$2150b2eb64e3c55e$var$i?$2150b2eb64e3c55e$var$i.emptyScript:"";for(let a=0;a<$;a++)t.append(e[a],$2150b2eb64e3c55e$var$h()),$2150b2eb64e3c55e$var$A.nextNode(),n.push({type:2,index:++r});t.append(e[$],$2150b2eb64e3c55e$var$h())}}}else if(8===t.nodeType)if(t.data===$2150b2eb64e3c55e$var$o)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=t.data.indexOf($2150b2eb64e3c55e$var$e,e+1));)n.push({type:7,index:r}),e+=$2150b2eb64e3c55e$var$e.length-1}r++}}static createElement(e,$){const a=$2150b2eb64e3c55e$var$l.createElement("template");return a.innerHTML=e,a}}function $2150b2eb64e3c55e$var$P(e,$,a=e,t){var r,b,c,n;if($===$2150b2eb64e3c55e$export$9c068ae9cc5db4e8)return $;let o=void 0!==t?null===(r=a._$Cl)||void 0===r?void 0:r[t]:a._$Cu;const i=$2150b2eb64e3c55e$var$r($)?void 0:$._$litDirective$;return(null==o?void 0:o.constructor)!==i&&(null===(b=null==o?void 0:o._$AO)||void 0===b||b.call(o,!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,a,t)),void 0!==t?(null!==(c=(n=a)._$Cl)&&void 0!==c?c:n._$Cl=[])[t]=o:a._$Cu=o),void 0!==o&&($=$2150b2eb64e3c55e$var$P(e,o._$AS(e,$.values),o,t)),$}class $2150b2eb64e3c55e$var$V{constructor(e,$){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=$}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var $;const{el:{content:a},parts:t}=this._$AD,r=(null!==($=null==e?void 0:e.creationScope)&&void 0!==$?$:$2150b2eb64e3c55e$var$l).importNode(a,!0);$2150b2eb64e3c55e$var$A.currentNode=r;let b=$2150b2eb64e3c55e$var$A.nextNode(),c=0,n=0,o=t[0];for(;void 0!==o;){if(c===o.index){let $;2===o.type?$=new $2150b2eb64e3c55e$var$N(b,b.nextSibling,this,e):1===o.type?$=new o.ctor(b,o.name,o.strings,this,e):6===o.type&&($=new $2150b2eb64e3c55e$var$L(b,this,e)),this.v.push($),o=t[++n]}c!==(null==o?void 0:o.index)&&(b=$2150b2eb64e3c55e$var$A.nextNode(),c++)}return r}m(e){let $=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,$),$+=a.strings.length-2):a._$AI(e[$])),$++}}class $2150b2eb64e3c55e$var$N{constructor(e,$,a,t){var r;this.type=2,this._$AH=$2150b2eb64e3c55e$export$45b790e32b2810ee,this._$AN=void 0,this._$AA=e,this._$AB=$,this._$AM=a,this.options=t,this._$Cg=null===(r=null==t?void 0:t.isConnected)||void 0===r||r}get _$AU(){var e,$;return null!==($=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==$?$:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const $=this._$AM;return void 0!==$&&11===e.nodeType&&(e=$.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,$=this){e=$2150b2eb64e3c55e$var$P(this,e,$),$2150b2eb64e3c55e$var$r(e)?e===$2150b2eb64e3c55e$export$45b790e32b2810ee||null==e||""===e?(this._$AH!==$2150b2eb64e3c55e$export$45b790e32b2810ee&&this._$AR(),this._$AH=$2150b2eb64e3c55e$export$45b790e32b2810ee):e!==this._$AH&&e!==$2150b2eb64e3c55e$export$9c068ae9cc5db4e8&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):$2150b2eb64e3c55e$var$u(e)?this.S(e):this.$(e)}A(e,$=this._$AB){return this._$AA.parentNode.insertBefore(e,$)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==$2150b2eb64e3c55e$export$45b790e32b2810ee&&$2150b2eb64e3c55e$var$r(this._$AH)?this._$AA.nextSibling.data=e:this.k($2150b2eb64e3c55e$var$l.createTextNode(e)),this._$AH=e}T(e){var $;const{values:a,_$litType$:t}=e,r="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=$2150b2eb64e3c55e$var$E.createElement(t.h,this.options)),t);if((null===($=this._$AH)||void 0===$?void 0:$._$AD)===r)this._$AH.m(a);else{const e=new $2150b2eb64e3c55e$var$V(r,this),$=e.p(this.options);e.m(a),this.k($),this._$AH=e}}_$AC(e){let $=$2150b2eb64e3c55e$var$T.get(e.strings);return void 0===$&&$2150b2eb64e3c55e$var$T.set(e.strings,$=new $2150b2eb64e3c55e$var$E(e)),$}S(e){$2150b2eb64e3c55e$var$d(this._$AH)||(this._$AH=[],this._$AR());const $=this._$AH;let a,t=0;for(const r of e)t===$.length?$.push(a=new $2150b2eb64e3c55e$var$N(this.A($2150b2eb64e3c55e$var$h()),this.A($2150b2eb64e3c55e$var$h()),this,this.options)):a=$[t],a._$AI(r),t++;t<$.length&&(this._$AR(a&&a._$AB.nextSibling,t),$.length=t)}_$AR(e=this._$AA.nextSibling,$){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,$);e&&e!==this._$AB;){const $=e.nextSibling;e.remove(),e=$}}setConnected(e){var $;void 0===this._$AM&&(this._$Cg=e,null===($=this._$AP)||void 0===$||$.call(this,e))}}class $2150b2eb64e3c55e$var$S{constructor(e,$,a,t,r){this.type=1,this._$AH=$2150b2eb64e3c55e$export$45b790e32b2810ee,this._$AN=void 0,this.element=e,this.name=$,this._$AM=t,this.options=r,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=$2150b2eb64e3c55e$export$45b790e32b2810ee}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,$=this,a,t){const r=this.strings;let b=!1;if(void 0===r)e=$2150b2eb64e3c55e$var$P(this,e,$,0),b=!$2150b2eb64e3c55e$var$r(e)||e!==this._$AH&&e!==$2150b2eb64e3c55e$export$9c068ae9cc5db4e8,b&&(this._$AH=e);else{const t=e;let c,n;for(e=r[0],c=0;c<r.length-1;c++)n=$2150b2eb64e3c55e$var$P(this,t[a+c],$,c),n===$2150b2eb64e3c55e$export$9c068ae9cc5db4e8&&(n=this._$AH[c]),b||(b=!$2150b2eb64e3c55e$var$r(n)||n!==this._$AH[c]),n===$2150b2eb64e3c55e$export$45b790e32b2810ee?e=$2150b2eb64e3c55e$export$45b790e32b2810ee:e!==$2150b2eb64e3c55e$export$45b790e32b2810ee&&(e+=(null!=n?n:"")+r[c+1]),this._$AH[c]=n}b&&!t&&this.C(e)}C(e){e===$2150b2eb64e3c55e$export$45b790e32b2810ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class $2150b2eb64e3c55e$var$M extends $2150b2eb64e3c55e$var$S{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===$2150b2eb64e3c55e$export$45b790e32b2810ee?void 0:e}}const $2150b2eb64e3c55e$var$k=$2150b2eb64e3c55e$var$i?$2150b2eb64e3c55e$var$i.emptyScript:"";class $2150b2eb64e3c55e$var$H extends $2150b2eb64e3c55e$var$S{constructor(){super(...arguments),this.type=4}C(e){e&&e!==$2150b2eb64e3c55e$export$45b790e32b2810ee?this.element.setAttribute(this.name,$2150b2eb64e3c55e$var$k):this.element.removeAttribute(this.name)}}class $2150b2eb64e3c55e$var$I extends $2150b2eb64e3c55e$var$S{constructor(e,$,a,t,r){super(e,$,a,t,r),this.type=5}_$AI(e,$=this){var a;if((e=null!==(a=$2150b2eb64e3c55e$var$P(this,e,$,0))&&void 0!==a?a:$2150b2eb64e3c55e$export$45b790e32b2810ee)===$2150b2eb64e3c55e$export$9c068ae9cc5db4e8)return;const t=this._$AH,r=e===$2150b2eb64e3c55e$export$45b790e32b2810ee&&t!==$2150b2eb64e3c55e$export$45b790e32b2810ee||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,b=e!==$2150b2eb64e3c55e$export$45b790e32b2810ee&&(t===$2150b2eb64e3c55e$export$45b790e32b2810ee||r);r&&this.element.removeEventListener(this.name,this,t),b&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var $,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===($=this.options)||void 0===$?void 0:$.host)&&void 0!==a?a:this.element,e):this._$AH.handleEvent(e)}}class $2150b2eb64e3c55e$var$L{constructor(e,$,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=$,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){$2150b2eb64e3c55e$var$P(this,e)}}const $2150b2eb64e3c55e$export$8613d1ca9052b22e={P:"$lit$",L:$2150b2eb64e3c55e$var$e,V:$2150b2eb64e3c55e$var$o,I:1,N:$2150b2eb64e3c55e$var$C,R:$2150b2eb64e3c55e$var$V,D:$2150b2eb64e3c55e$var$u,j:$2150b2eb64e3c55e$var$P,H:$2150b2eb64e3c55e$var$N,O:$2150b2eb64e3c55e$var$S,F:$2150b2eb64e3c55e$var$H,B:$2150b2eb64e3c55e$var$I,W:$2150b2eb64e3c55e$var$M,Z:$2150b2eb64e3c55e$var$L},$2150b2eb64e3c55e$var$z=window.litHtmlPolyfillSupport;null==$2150b2eb64e3c55e$var$z||$2150b2eb64e3c55e$var$z($2150b2eb64e3c55e$var$E,$2150b2eb64e3c55e$var$N),(null!==($2150b2eb64e3c55e$var$t=globalThis.litHtmlVersions)&&void 0!==$2150b2eb64e3c55e$var$t?$2150b2eb64e3c55e$var$t:globalThis.litHtmlVersions=[]).push("2.2.0");class $df8264a215c5193f$export$b8a61e5c71402559{constructor(e=1,$=1,a=3){this.currentIndex=e,this.minPage=$,this.maxPage=a}back(){this.currentIndex!==this.minPage&&(this.currentIndex-=1)}next(){this.currentIndex!==this.maxPage&&(this.currentIndex+=1)}getCurrentIndex(){return this.currentIndex}isInitialPage(){return this.currentIndex===this.minPage}isLastPage(){return this.currentIndex===this.maxPage}}var $e1fd294a74c63a5d$exports={};$parcel$export($e1fd294a74c63a5d$exports,"arrayShuffle",(()=>$35f8b75642d84c10$export$4c32836ea5e8013e)),$parcel$export($e1fd294a74c63a5d$exports,"domEventHandler",(()=>$212677815303244a$export$1867bc18c73d5349));const $35f8b75642d84c10$export$4c32836ea5e8013e=e=>{let $=e.length,a=0,t=0;for(;0!==$;)t=Math.floor(Math.random()*$),$-=1,a=e[$],e[$]=e[t],e[t]=a;return e},$212677815303244a$export$1867bc18c73d5349=e=>$=>{const a=$.currentTarget.value;e(a)};var $5BMSj=parcelRequire("5BMSj");$parcel$exportWildcard($e1fd294a74c63a5d$exports,$5BMSj);var $b91b448943f58835$exports={};$b91b448943f58835$exports=JSON.parse('["Mary Anning","Archimedes","Aristotle","Alexander Graham Bell","Elizabeth Blackwell","Tycho Brahe","Robert Boyle","Brahmagupta","Rachel Carson","George Washington Carver","Subrahmanyan Chandrasekhar","Erwin Chargaff","Nicolaus Copernicus","Jacques Cousteau","Marie Curie","John Dalton","Charles Darwin","Democritus","Frank Drake","Albert Einstein","Euclid","Fibonacci","Alexander Fleming","Benjamin Franklin","Rosalind Franklin","Galileo Galilei","Galen","Cecilia Payne-Gaposchkin","Carl Friedrich Gauss","Sophie Germain","Jane Goodall","Caroline Herschel","Heinrich Hertz","Hipparchus","Grace Hopper","Edwin Hubble","Omar Khayyam","Stephanie Kwolek","Henrietta Swan Leavitt","Antonie van Leeuwenhoek","Ada Lovelace","Barbara McClintock","James Clerk Maxwell","Lise Meitner","Dmitri Mendeleev","Henry Moseley","Isaac Newton","Florence Nightingale","Alfred Nobel","Emmy Noether","Louis Pasteur","Max Planck","Pythagoras","Claudius Ptolemy","C. V. Raman","Srinivasa Ramanujan","J. J. Thomson","Alessandro Volta","Chen-Ning Yang","James Watt"]');const $22cd4da97b970ec2$var$getRandomUser=()=>{const e=Math.floor(Math.random()*$parcel$interopDefault($b91b448943f58835$exports).length);return $parcel$interopDefault($b91b448943f58835$exports)[e]},$22cd4da97b970ec2$var$onRandomClick=e=>{e($22cd4da97b970ec2$var$getRandomUser())},$22cd4da97b970ec2$export$e4d29f0c4f6a05ae=(e,$)=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<h1>1 of 3</h1>
<p>Who are you today?</p>
<div class="player">
  <select .value=${e} @change=${$212677815303244a$export$1867bc18c73d5349($)}>
    <option disabled selected></option>
    ${$parcel$interopDefault($b91b448943f58835$exports).map(($=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`<option ?selected=${$===e}>${$}</option>`))}
  </select>
  <button @click=${()=>$22cd4da97b970ec2$var$onRandomClick($)}>Random</button>
</div>
`;var $5BMSj=parcelRequire("5BMSj");const $39b9620effd339d4$var$onClick=(e,$)=>{e.answer===$&&$caa06bd1a7ca8f23$export$bd45a425ac802846(!0)},$39b9620effd339d4$export$498da71459db0b43=(e,$)=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<div class="operation">
  <span>${e.num1}</span>
  <span class='operator ${$.replace(" ","")}'>${e.operator}</span>
  <span>${e.num2}</span>
  <span>=</span>
  <span>?</span>
</div>
<div class="result">
  ${$35f8b75642d84c10$export$4c32836ea5e8013e([e.answer,e.opt1,e.opt2,e.opt3]).map(($=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
        <button @click=${()=>$39b9620effd339d4$var$onClick(e,$)}>${$}</button>
      `))}
</div>
`;let $b8e250e3e30d2c85$var$value="";const $b8e250e3e30d2c85$var$onClick=e=>{e.answer===Number.parseInt($b8e250e3e30d2c85$var$value,10)&&($b8e250e3e30d2c85$var$value="",$caa06bd1a7ca8f23$export$bd45a425ac802846(!0))},$b8e250e3e30d2c85$var$onChange=e=>{$b8e250e3e30d2c85$var$value=e},$b8e250e3e30d2c85$export$3c7a630e066a4764=(e,$)=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<div class="operation">
  <span>${e.num1}</span>
  <span class='operator ${$.replace(" ","")}'>${e.operator}</span>
  <span>${e.num2}</span>
  <span>=</span>
  <span>?</span>
</div>
<div class="result">
  <input .value=${$b8e250e3e30d2c85$var$value} type="number" @change=${$212677815303244a$export$1867bc18c73d5349($b8e250e3e30d2c85$var$onChange)}>
  <button @click=${()=>$b8e250e3e30d2c85$var$onClick(e)}>Go!</button>
</div>
`,$1c3b4ef8ef5a321e$export$d21f825faef2be9f={sum1:$1c3b4ef8ef5a321e$var$getOperationComponent($39b9620effd339d4$export$498da71459db0b43,"Sum 1","+",10),sum2:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Sum 2","+",20),sum3:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Sum 3","+",100),subtraction1:$1c3b4ef8ef5a321e$var$getOperationComponent($39b9620effd339d4$export$498da71459db0b43,"Subtraction 1","-",10),subtraction2:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Subtraction 2","-",20),subtraction3:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Subtraction 3","-",100),multiplication1:$1c3b4ef8ef5a321e$var$getOperationComponent($39b9620effd339d4$export$498da71459db0b43,"Multiplication 1","*",10),multiplication2:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Multiplication 2","*",20),multiplication3:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Multiplication 3","*",100),division1:$1c3b4ef8ef5a321e$var$getOperationComponent($39b9620effd339d4$export$498da71459db0b43,"Division 1","/",10),division2:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Division 2","/",20),division3:$1c3b4ef8ef5a321e$var$getOperationComponent($b8e250e3e30d2c85$export$3c7a630e066a4764,"Division 3","/",100)};function $1c3b4ef8ef5a321e$var$getOperationComponent(e,$,a,t){return{title:$,component:()=>{const r=$5BMSj.getOperation(a,t);return e(r,$)}}}const $60f69eeeeb753d82$export$758a6c2e06db4cda=(e,$)=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<a @click=${$}>Back</a>
<p>Operations</p>
<p>Selected operations was: ${e}</p>

${$1c3b4ef8ef5a321e$export$d21f825faef2be9f[e]}
`,$cc43ddd6220049a3$export$160f8d7e9205fb35=e=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<select @change=${$212677815303244a$export$1867bc18c73d5349(e)}>
  <option disabled selected></option>
  ${Object.keys($1c3b4ef8ef5a321e$export$d21f825faef2be9f).map((e=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
      <option value=${e}>${$1c3b4ef8ef5a321e$export$d21f825faef2be9f[e].title}</option>
    `))}
</select>
`,$40ab9a129e897dfb$export$ea983f8f94c1a3bd=(e,$)=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<h1>2 of 3</h1>

<p>Hello ${e}, what do you wanna play today?</p>
${$cc43ddd6220049a3$export$160f8d7e9205fb35($)}
`,$0bd8e3093bd57d6f$export$88e3273e895d21c=e=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<h1>3 of 3</h1>

<p>Let's play ${$1c3b4ef8ef5a321e$export$d21f825faef2be9f[e].title}!</p>
${$1c3b4ef8ef5a321e$export$d21f825faef2be9f[e].component()}
`,$caa06bd1a7ca8f23$var$navigationHandler=new $df8264a215c5193f$export$b8a61e5c71402559;let $caa06bd1a7ca8f23$var$currentPlayer="",$caa06bd1a7ca8f23$var$currentOperationKey;const $caa06bd1a7ca8f23$var$onChangePlayer=e=>{$caa06bd1a7ca8f23$var$currentPlayer=e,$caa06bd1a7ca8f23$export$bd45a425ac802846(!1)},$caa06bd1a7ca8f23$var$onChangeOperationKey=e=>{$caa06bd1a7ca8f23$var$currentOperationKey=e,$caa06bd1a7ca8f23$export$bd45a425ac802846(!1)},$caa06bd1a7ca8f23$var$onBackClick=()=>{$caa06bd1a7ca8f23$var$navigationHandler.back(),$caa06bd1a7ca8f23$export$bd45a425ac802846(!1)},$caa06bd1a7ca8f23$var$onNextClick=()=>{$caa06bd1a7ca8f23$var$navigationHandler.next(),$caa06bd1a7ca8f23$export$bd45a425ac802846(!1)},$caa06bd1a7ca8f23$var$test=()=>{$caa06bd1a7ca8f23$export$bd45a425ac802846(!1)},$caa06bd1a7ca8f23$var$getPage=e=>{switch(e){case 2:return $40ab9a129e897dfb$export$ea983f8f94c1a3bd($caa06bd1a7ca8f23$var$currentPlayer,$caa06bd1a7ca8f23$var$onChangeOperationKey);case 3:return $0bd8e3093bd57d6f$export$88e3273e895d21c($caa06bd1a7ca8f23$var$currentOperationKey);default:return $22cd4da97b970ec2$export$e4d29f0c4f6a05ae($caa06bd1a7ca8f23$var$currentPlayer,$caa06bd1a7ca8f23$var$onChangePlayer)}},$caa06bd1a7ca8f23$var$getBackButton=()=>$caa06bd1a7ca8f23$var$navigationHandler.isInitialPage()?$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
  <div class="empty">
  </div>`:$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
  <button class="prev" @click=${$caa06bd1a7ca8f23$var$onBackClick}>
  </button>`,$caa06bd1a7ca8f23$var$getNextButton=()=>$caa06bd1a7ca8f23$var$navigationHandler.isLastPage()?$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
 <div class="empty">
 </div>`:$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
 <button @click=${$caa06bd1a7ca8f23$var$onNextClick}>
 </button>`,$caa06bd1a7ca8f23$var$HomePage=e=>$2150b2eb64e3c55e$export$c0bb0b647f701bb5`
<div class="root">
  <div class="page">${$caa06bd1a7ca8f23$var$getPage($caa06bd1a7ca8f23$var$navigationHandler.getCurrentIndex())}</div>
  <div class="navigation">
    ${$caa06bd1a7ca8f23$var$getBackButton()}
    ${$caa06bd1a7ca8f23$var$getNextButton()}
  </div>
</div>
<div class="bg">
  <ul class="rectangles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
${e?$2150b2eb64e3c55e$export$c0bb0b647f701bb5`<div class="t">
  <div class="check">
    <div class="checkmark-circle">
      <div class="background"></div>
      <div class="checkmark draw"></div>
    </div>
    <span>Good job!</span>
  </div>
  <button class="again" @click=${$caa06bd1a7ca8f23$var$test}>
    <span class="restart">&#x21bb;</span>
    <span>Play again</span>
  </button>
  </div>`:""}
`,$caa06bd1a7ca8f23$export$bd45a425ac802846=e=>{$2150b2eb64e3c55e$export$b3890eb0ae9dca99($caa06bd1a7ca8f23$var$HomePage(e),document.body)};$caa06bd1a7ca8f23$export$bd45a425ac802846();