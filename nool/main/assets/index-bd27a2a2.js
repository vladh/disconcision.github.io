(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const S={},Ae=(e,t)=>e===t,$=Symbol("solid-proxy"),X=Symbol("solid-track"),B={equals:Ae};let me=ce;const E=1,q=2,ne={owned:null,cleanups:null,context:null,owner:null};var p=null;let x=null,d=null,g=null,O=null,J=0;function I(e,t){const n=d,s=p,i=e.length===0,l=i?ne:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>U(()=>W(l)));p=l,d=null;try{return _(r,!0)}finally{d=n,p=s}}function se(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),oe(n,i));return[le.bind(n),s]}function P(e,t,n){const s=re(e,t,!1,E);V(s)}function Se(e,t,n){n=n?Object.assign({},B,n):B;const s=re(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,V(s),le.bind(s)}function xe(e){return _(e,!1)}function U(e){const t=d;d=null;try{return e()}finally{d=t}}function Oe(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ie(){return d}function le(){const e=x;if(this.sources&&(this.state||e))if(this.state===E||e)V(this);else{const t=g;g=null,_(()=>M(this),!1),g=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=x&&x.running;r&&x.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?g.push(l):O.push(l),l.observers&&ue(l)),r||(l.state=E)}if(g.length>1e6)throw g=[],new Error},!1)),t}function V(e){if(!e.fn)return;W(e);const t=p,n=d,s=J;d=p=e,$e(e,e.value,s),d=n,p=t}function $e(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=E,e.owned&&e.owned.forEach(W),e.owned=null),ae(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,s):e.value=s,e.updatedAt=n)}function re(e,t,n,s=E,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==ne&&(p.owned?p.owned.push(l):p.owned=[l]),l}function fe(e){const t=x;if(e.state===0||t)return;if(e.state===q||t)return M(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===E||t)V(e);else if(e.state===q||t){const i=g;g=null,_(()=>M(e,n[0]),!1),g=i}}function _(e,t){if(g)return e();let n=!1;t||(g=[]),O?n=!0:O=[],J++;try{const s=e();return Ee(n),s}catch(s){g||(O=null),g=null,ae(s)}}function Ee(e){if(g&&(ce(g),g=null),e)return;const t=O;O=null,t.length&&_(()=>me(t),!1)}function ce(e){for(let t=0;t<e.length;t++)fe(e[t])}function M(e,t){const n=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===E||n?i!==t&&fe(i):(i.state===q||n)&&M(i,t))}}function ue(e){const t=x;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=q,s.pure?g.push(s):O.push(s),s.observers&&ue(s))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ce(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ae(e){throw e=Ce(e),e}const Ne=Symbol("fallback");function z(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let s=[],i=[],l=[],r=0,o=t.length>1?[]:null;return Oe(()=>z(l)),()=>{let c=e()||[],u,f;return c[X],U(()=>{let a=c.length,y,A,k,L,D,b,w,m,C;if(a===0)r!==0&&(z(l),l=[],s=[],i=[],r=0,o&&(o=[])),n.fallback&&(s=[Ne],i[0]=I(we=>(l[0]=we,n.fallback())),r=1);else if(r===0){for(i=new Array(a),f=0;f<a;f++)s[f]=c[f],i[f]=I(h);r=a}else{for(k=new Array(a),L=new Array(a),o&&(D=new Array(a)),b=0,w=Math.min(r,a);b<w&&s[b]===c[b];b++);for(w=r-1,m=a-1;w>=b&&m>=b&&s[w]===c[m];w--,m--)k[m]=i[w],L[m]=l[w],o&&(D[m]=o[w]);for(y=new Map,A=new Array(m+1),f=m;f>=b;f--)C=c[f],u=y.get(C),A[f]=u===void 0?-1:u,y.set(C,f);for(u=b;u<=w;u++)C=s[u],f=y.get(C),f!==void 0&&f!==-1?(k[f]=i[u],L[f]=l[u],o&&(D[f]=o[u]),f=A[f],y.set(C,f)):l[u]();for(f=b;f<a;f++)f in k?(i[f]=k[f],l[f]=L[f],o&&(o[f]=D[f],o[f](f))):i[f]=I(h);i=i.slice(0,r=a),s=c.slice(0)}return i});function h(a){if(l[f]=a,o){const[y,A]=se(f);return o[f]=A,t(c[f],y)}return t(c[f])}}}function de(e,t){return U(()=>e(t||{}))}function ke(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Se(_e(()=>e.each,e.children,t||void 0))}function Te(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,c=t[i-1].nextSibling,u=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const f=l<s?o?n[o-1].nextSibling:n[l-o]:c;for(;o<l;)e.insertBefore(n[o++],f)}else if(l===o)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!u){u=new Map;let h=o;for(;h<l;)u.set(n[h],h++)}const f=u.get(t[r]);if(f!=null)if(o<f&&f<l){let h=r,a=1,y;for(;++h<i&&h<l&&!((y=u.get(t[h]))==null||y!==f+a);)a++;if(a>f-o){const A=t[r];for(;o<f;)e.insertBefore(n[o++],A)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const ee="_$DX_DELEGATE";function Pe(e,t,n,s={}){let i;return I(l=>{i=l,t===document?e():G(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function he(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ve(e,t=window.document){const n=t[ee]||(t[ee]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Le))}}function je(e,t){t==null?e.removeAttribute("class"):e.className=t}function G(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);P(i=>R(e,t(),i,n),s)}function Le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),S.registry&&!S.done&&(S.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,i){for(S.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(S.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=N(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(S.context)return n;n=N(e,n,s)}else{if(l==="function")return P(()=>{let o=t();for(;typeof o=="function";)o=o();n=R(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(H(o,t,n,i))return P(()=>n=R(e,o,n,s,!0)),()=>n;if(S.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=N(e,n,s),r)return n}else c?n.length===0?te(e,o,s):Te(e,n,o):(n&&N(e),te(e,o));n=o}else if(t instanceof Node){if(S.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=N(e,n,s,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function H(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],c=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=H(e,o,c)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=H(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function te(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function N(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Q=Symbol("store-raw"),v=Symbol("store-node"),De=Symbol("store-name");function ge(e,t){let n=e[$];if(!n&&(Object.defineProperty(e,$,{value:n=new Proxy(e,qe)}),!Array.isArray(e))){const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let l=0,r=s.length;l<r;l++){const o=s[l];i[o].get&&Object.defineProperty(e,o,{enumerable:i[o].enumerable,get:i[o].get.bind(n)})}}return n}function F(e){let t;return e!=null&&typeof e=="object"&&(e[$]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function j(e,t=new Set){let n,s,i,l;if(n=e!=null&&e[Q])return n;if(!F(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,o=e.length;r<o;r++)i=e[r],(s=j(i,t))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=r.length;c<u;c++)l=r[c],!o[l].get&&(i=e[l],(s=j(i,t))!==i&&(e[l]=s))}return e}function Z(e){let t=e[v];return t||Object.defineProperty(e,v,{value:t={}}),t}function Y(e,t,n){return e[t]||(e[t]=ye(n))}function Ie(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===v||t===De||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}function pe(e){if(ie()){const t=Z(e);(t._||(t._=ye()))()}}function Be(e){return pe(e),Reflect.ownKeys(e)}function ye(e){const[t,n]=se(e,{equals:!1,internal:!0});return t.$=n,t}const qe={get(e,t,n){if(t===Q)return e;if(t===$)return n;if(t===X)return pe(e),n;const s=Z(e),i=s.hasOwnProperty(t);let l=i?s[t]():e[t];if(t===v||t==="__proto__")return l;if(!i){const r=Object.getOwnPropertyDescriptor(e,t);ie()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(l=Y(s,t,l)())}return F(l)?ge(l):l},has(e,t){return t===Q||t===$||t===X||t===v||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Be,getOwnPropertyDescriptor:Ie};function K(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],l=e.length;n===void 0?delete e[t]:e[t]=n;let r=Z(e),o;(o=Y(r,t,i))&&o.$(()=>n),Array.isArray(e)&&e.length!==l&&(o=Y(r,"length",l))&&o.$(e.length),(o=r._)&&o.$()}function be(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];K(e,i,t[i])}}function Me(e,t){if(typeof t=="function"&&(t=t(e)),t=j(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&K(e,n,i)}K(e,"length",s)}else be(e,t)}function T(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const r=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)T(e,[s[c]].concat(t),n);return}else if(o&&r==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&T(e,[c].concat(t),n);return}else if(o&&r==="object"){const{from:c=0,to:u=e.length-1,by:f=1}=s;for(let h=c;h<=u;h+=f)T(e,[h].concat(t),n);return}else if(t.length>1){T(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||s===void 0&&l==null||(l=j(l),s===void 0||F(i)&&F(l)&&!Array.isArray(l)?be(i,l):K(e,s,l))}function Re(...[e,t]){const n=j(e||{}),s=Array.isArray(n),i=ge(n);function l(...r){xe(()=>{s&&r.length===1?Me(n,r[0]):T(n,r)})}return[i,l]}const Fe=he('<div class="container mt-5 text-center"><h1 class="mb-4">nool</h1><form class="mb-5 row row-cols-2 justify-content-center"><input type="text" class="input-group-text p-1 w-25" placeholder="wat do.." id="taskInput" required><button class="btn btn-primary ms-3 w-auto" type="submit">taskify</button></form><div><h4 class="text-muted mb-4">tasks</h4></div></div>'),Ke=he('<div class="row row-cols-3 mb-3 justify-content-center"><button class="btn btn-danger w-auto">X</button><div></div><input type="checkbox" role="button" class="form-check-input h-auto px-3"></div>'),Ue=()=>{const[e,t]=Re([]),n=l=>{l.preventDefault();const r=document.querySelector("#taskInput"),o={id:Math.random().toString(36).substring(2),text:r.value,completed:!1};t([o,...e]),r.value=""},s=l=>{t(e.filter(r=>r.id!=l))},i=l=>{t(r=>r.id===l,"completed",r=>!r)};return(()=>{const l=Fe.cloneNode(!0),r=l.firstChild,o=r.nextSibling,c=o.nextSibling;return c.firstChild,o.addEventListener("submit",n),G(c,de(ke,{each:e,children:u=>(()=>{const f=Ke.cloneNode(!0),h=f.firstChild,a=h.nextSibling,y=a.nextSibling;return h.$$click=A=>s(u.id),G(a,()=>u.text),y.$$click=A=>i(u.id),P(()=>je(a,`bg-light p-2 mx-2 ${u.completed&&"text-decoration-line-through text-success"}`)),P(()=>y.checked=u.completed),f})()}),null),l})()};ve(["click"]);const Ve=document.getElementById("root");Pe(()=>de(Ue,{}),Ve);
