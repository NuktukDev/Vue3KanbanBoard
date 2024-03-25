(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const V={},xe=[],yt=()=>{},vs=()=>!1,Kn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qr=t=>t.startsWith("onUpdate:"),rt=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bs=Object.prototype.hasOwnProperty,H=(t,e)=>bs.call(t,e),R=Array.isArray,_e=t=>Vn(t)==="[object Map]",Li=t=>Vn(t)==="[object Set]",F=t=>typeof t=="function",tt=t=>typeof t=="string",Ie=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",Fi=t=>(q(t)||F(t))&&F(t.then)&&F(t.catch),Di=Object.prototype.toString,Vn=t=>Di.call(t),ys=t=>Vn(t).slice(8,-1),ji=t=>Vn(t)==="[object Object]",Zr=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$e=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xs=/-(\w)/g,Oe=Wn(t=>t.replace(xs,(e,n)=>n?n.toUpperCase():"")),_s=/\B([A-Z])/g,Te=Wn(t=>t.replace(_s,"-$1").toLowerCase()),$i=Wn(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=Wn(t=>t?`on${$i(t)}`:""),qt=(t,e)=>!Object.is(t,e),ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ln=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ws=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Na;const zi=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=tt(r)?Ss(r):Qr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(tt(t)||q(t))return t}const As=/;(?![^(]*\))/g,ks=/:([^]+)/,Os=/\/\*[^]*?\*\//g;function Ss(t){const e={};return t.replace(Os,"").split(As).forEach(n=>{if(n){const r=n.split(ks);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ta(t){let e="";if(tt(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=ta(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Es="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cs=Xr(Es);function Hi(t){return!!t||t===""}const Ui=t=>tt(t)?t:t==null?"":R(t)||q(t)&&(t.toString===Di||!F(t.toString))?JSON.stringify(t,Bi,2):String(t),Bi=(t,e)=>e&&e.__v_isRef?Bi(t,e.value):_e(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[dr(r,i)+" =>"]=a,n),{})}:Li(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dr(n))}:Ie(e)?dr(e):q(e)&&!R(e)&&!ji(e)?String(e):e,dr=(t,e="")=>{var n;return Ie(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Ps{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Is(t,e=_t){e&&e.active&&e.effects.push(t)}function Ts(){return _t}let ce;class ea{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Is(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pe();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ns(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),he()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Wt,n=ce;try{return Wt=!0,ce=this,this._runnings++,Ma(this),this.fn()}finally{Ra(this),this._runnings--,ce=n,Wt=e}}stop(){var e;this.active&&(Ma(this),Ra(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ns(t){return t.value}function Ma(t){t._trackId++,t._depsLength=0}function Ra(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yi(t.deps[e],t);t.deps.length=t._depsLength}}function Yi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Wt=!0,kr=0;const Ki=[];function pe(){Ki.push(Wt),Wt=!1}function he(){const t=Ki.pop();Wt=t===void 0?!0:t}function na(){kr++}function ra(){for(kr--;!kr&&Or.length;)Or.shift()()}function Vi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Yi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Or=[];function Wi(t,e,n){na();for(const r of t.keys()){let a;r._dirtyLevel<e&&(a??(a=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(a??(a=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Or.push(r.scheduler)))}ra()}const Gi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Sr=new WeakMap,ue=Symbol(""),Er=Symbol("");function mt(t,e,n){if(Wt&&ce){let r=Sr.get(t);r||Sr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Gi(()=>r.delete(n))),Vi(ce,a)}}function Ft(t,e,n,r,a,i){const o=Sr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Ie(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?Zr(n)&&s.push(o.get("length")):(s.push(o.get(ue)),_e(t)&&s.push(o.get(Er)));break;case"delete":R(t)||(s.push(o.get(ue)),_e(t)&&s.push(o.get(Er)));break;case"set":_e(t)&&s.push(o.get(ue));break}na();for(const l of s)l&&Wi(l,4);ra()}const Ms=Xr("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ie)),La=Rs();function Rs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pe(),na();const r=B(this)[e].apply(this,n);return ra(),he(),r}}),t}function Ls(t){const e=B(this);return mt(e,"has",t),e.hasOwnProperty(t)}class qi{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Gs:to:i?Qi:Zi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!a){if(o&&H(La,n))return Reflect.get(La,n,r);if(n==="hasOwnProperty")return Ls}const s=Reflect.get(e,n,r);return(Ie(n)?Xi.has(n):Ms(n))||(a||mt(e,"get",n),i)?s:pt(s)?o&&Zr(n)?s:s.value:q(s)?a?eo(s):Ke(s):s}}class Ji extends qi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._isShallow){const l=Se(i);if(!Fn(r)&&!Se(r)&&(i=B(i),r=B(r)),!R(e)&&pt(i)&&!pt(r))return l?!1:(i.value=r,!0)}const o=R(e)&&Zr(n)?Number(n)<e.length:H(e,n),s=Reflect.set(e,n,r,a);return e===B(a)&&(o?qt(r,i)&&Ft(e,"set",n,r):Ft(e,"add",n,r)),s}deleteProperty(e,n){const r=H(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Ft(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Ie(n)||!Xi.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",R(e)?"length":ue),Reflect.ownKeys(e)}}class Fs extends qi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ds=new Ji,js=new Fs,$s=new Ji(!0),aa=t=>t,Gn=t=>Reflect.getPrototypeOf(t);function dn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(qt(e,i)&&mt(a,"get",e),mt(a,"get",i));const{has:o}=Gn(a),s=r?aa:n?sa:Ve;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function mn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(qt(t,a)&&mt(r,"has",t),mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function pn(t,e=!1){return t=t.__v_raw,!e&&mt(B(t),"iterate",ue),Reflect.get(t,"size",t)}function Fa(t){t=B(t);const e=B(this);return Gn(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Da(t,e){e=B(e);const n=B(this),{has:r,get:a}=Gn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?qt(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function ja(t){const e=B(this),{has:n,get:r}=Gn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ft(e,"delete",t,void 0),i}function $a(){const t=B(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function hn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?aa:t?sa:Ve;return!t&&mt(s,"iterate",ue),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function gn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=_e(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?aa:e?sa:Ve;return!e&&mt(i,"iterate",l?Er:ue),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zs(){const t={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:Fa,set:Da,delete:ja,clear:$a,forEach:hn(!1,!1)},e={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:Fa,set:Da,delete:ja,clear:$a,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),e[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[t,n,e,r]}const[Hs,Us,Bs,Ys]=zs();function ia(t,e){const n=e?t?Ys:Bs:t?Us:Hs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Ks={get:ia(!1,!1)},Vs={get:ia(!1,!0)},Ws={get:ia(!0,!1)},Zi=new WeakMap,Qi=new WeakMap,to=new WeakMap,Gs=new WeakMap;function Xs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qs(t){return t.__v_skip||!Object.isExtensible(t)?0:Xs(ys(t))}function Ke(t){return Se(t)?t:oa(t,!1,Ds,Ks,Zi)}function Js(t){return oa(t,!1,$s,Vs,Qi)}function eo(t){return oa(t,!0,js,Ws,to)}function oa(t,e,n,r,a){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=qs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function we(t){return Se(t)?we(t.__v_raw):!!(t&&t.__v_isReactive)}function Se(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function no(t){return we(t)||Se(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function ro(t){return Object.isExtensible(t)&&Ln(t,"__v_skip",!0),t}const Ve=t=>q(t)?Ke(t):t,sa=t=>q(t)?eo(t):t;class ao{constructor(e,n,r,a){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ea(()=>e(this._value),()=>En(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return(!e._cacheable||e.effect.dirty)&&qt(e._value,e._value=e.effect.run())&&En(e,4),io(e),e.effect._dirtyLevel>=2&&En(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Zs(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=yt):(r=t.get,a=t.set),new ao(r,a,i||!a,n)}function io(t){var e;Wt&&ce&&(t=B(t),Vi(ce,(e=t.dep)!=null?e:t.dep=Gi(()=>t.dep=void 0,t instanceof ao?t:void 0)))}function En(t,e=4,n){t=B(t);const r=t.dep;r&&Wi(r,e)}function pt(t){return!!(t&&t.__v_isRef===!0)}function oo(t){return Qs(t,!1)}function Qs(t,e){return pt(t)?t:new tl(t,e)}class tl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:Ve(e)}get value(){return io(this),this._value}set value(e){const n=this.__v_isShallow||Fn(e)||Se(e);e=n?e:B(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ve(e),En(this,4))}}function oe(t){return pt(t)?t.value:t}const el={get:(t,e,n)=>oe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return pt(a)&&!pt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function so(t){return we(t)?t:new Proxy(t,el)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gt(t,e,n,r){try{return r?t(...r):t()}catch(a){Xn(a,e,n)}}function Ot(t,e,n,r){if(F(t)){const i=Gt(t,e,n,r);return i&&Fi(i)&&i.catch(o=>{Xn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Ot(t[i],e,n,r));return a}function Xn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gt(l,null,10,[t,o,s]);return}}nl(t,n,a,r)}function nl(t,e,n,r=!0){console.error(t)}let We=!1,Cr=!1;const at=[];let It=0;const Ae=[];let Yt=null,ie=0;const lo=Promise.resolve();let la=null;function rl(t){const e=la||lo;return t?e.then(this?t.bind(this):t):e}function al(t){let e=It+1,n=at.length;for(;e<n;){const r=e+n>>>1,a=at[r],i=Ge(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function fa(t){(!at.length||!at.includes(t,We&&t.allowRecurse?It+1:It))&&(t.id==null?at.push(t):at.splice(al(t.id),0,t),fo())}function fo(){!We&&!Cr&&(Cr=!0,la=lo.then(uo))}function il(t){const e=at.indexOf(t);e>It&&at.splice(e,1)}function ol(t){R(t)?Ae.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?ie+1:ie))&&Ae.push(t),fo()}function za(t,e,n=We?It+1:0){for(;n<at.length;n++){const r=at[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;at.splice(n,1),n--,r()}}}function co(t){if(Ae.length){const e=[...new Set(Ae)].sort((n,r)=>Ge(n)-Ge(r));if(Ae.length=0,Yt){Yt.push(...e);return}for(Yt=e,ie=0;ie<Yt.length;ie++)Yt[ie]();Yt=null,ie=0}}const Ge=t=>t.id==null?1/0:t.id,sl=(t,e)=>{const n=Ge(t)-Ge(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function uo(t){Cr=!1,We=!0,at.sort(sl);try{for(It=0;It<at.length;It++){const e=at[It];e&&e.active!==!1&&Gt(e,null,14)}}finally{It=0,at.length=0,co(),We=!1,la=null,(at.length||Ae.length)&&uo()}}function ll(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||V;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||V;v&&(a=n.map(w=>tt(w)?w.trim():w)),m&&(a=n.map(ws))}let s,l=r[s=cr(e)]||r[s=cr(Oe(e))];!l&&i&&(l=r[s=cr(Te(e))]),l&&Ot(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ot(c,t,6,a)}}function mo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=mo(c,e,!0);u&&(s=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(q(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>o[l]=null):rt(o,i),q(t)&&r.set(t,o),o)}function qn(t,e){return!t||!Kn(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Te(e))||H(t,e))}let gt=null,po=null;function Dn(t){const e=gt;return gt=t,po=t&&t.type.__scopeId||null,e}function fl(t,e=gt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&qa(-1);const i=Dn(e);let o;try{o=t(...a)}finally{Dn(i),r._d&&qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:w,ctx:D,inheritAttrs:N}=t;let z,A;const E=Dn(t);try{if(n.shapeFlag&4){const j=a||r,U=j;z=Pt(u.call(U,j,m,i,w,v,D)),A=l}else{const j=e;z=Pt(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),A=e.props?l:cl(l)}}catch(j){Ue.length=0,Xn(j,t,1),z=it(Xe)}let P=z;if(A&&N!==!1){const j=Object.keys(A),{shapeFlag:U}=P;j.length&&U&7&&(o&&j.some(qr)&&(A=ul(A,o)),P=Ce(P,A))}return n.dirs&&(P=Ce(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),z=P,Dn(E),z}const cl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kn(n))&&((e||(e={}))[n]=t[n]);return e},ul=(t,e)=>{const n={};for(const r in t)(!qr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!qn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!qn(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const pl=Symbol.for("v-ndc"),hl=t=>t.__isSuspense;function gl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):ol(t)}const vl=Symbol.for("v-scx"),bl=()=>In(vl),vn={};function Cn(t,e,n){return ho(t,e,n)}function ho(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=V){if(e&&i){const L=e;e=(...Q)=>{L(...Q),U()}}const l=lt,c=L=>r===!0?L:se(L,r===!1?1:void 0);let u,m=!1,v=!1;if(pt(t)?(u=()=>t.value,m=Fn(t)):we(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(L=>we(L)||Fn(L)),u=()=>t.map(L=>{if(pt(L))return L.value;if(we(L))return c(L);if(F(L))return Gt(L,l,2)})):F(t)?e?u=()=>Gt(t,l,2):u=()=>(w&&w(),Ot(t,l,3,[D])):u=yt,e&&r){const L=u;u=()=>se(L())}let w,D=L=>{w=P.onStop=()=>{Gt(L,l,4),w=P.onStop=void 0}},N;if(tr)if(D=yt,e?n&&Ot(e,l,3,[u(),v?[]:void 0,D]):u(),a==="sync"){const L=bl();N=L.__watcherHandles||(L.__watcherHandles=[])}else return yt;let z=v?new Array(t.length).fill(vn):vn;const A=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(v?L.some((Q,ft)=>qt(Q,z[ft])):qt(L,z)))&&(w&&w(),Ot(e,l,3,[L,z===vn?void 0:v&&z[0]===vn?[]:z,D]),z=L)}else P.run()};A.allowRecurse=!!e;let E;a==="sync"?E=A:a==="post"?E=()=>ut(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),E=()=>fa(A));const P=new ea(u,yt,E),j=Ts(),U=()=>{P.stop(),j&&Jr(j.effects,P)};return e?n?A():z=P.run():a==="post"?ut(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(U),U}function yl(t,e,n){const r=this.proxy,a=tt(t)?t.includes(".")?go(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=rn(this),s=ho(a,i.bind(r),n);return o(),s}function go(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function se(t,e,n=0,r){if(!q(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),pt(t))se(t.value,e,n,r);else if(R(t))for(let a=0;a<t.length;a++)se(t[a],e,n,r);else if(Li(t)||_e(t))t.forEach(a=>{se(a,e,n,r)});else if(ji(t))for(const a in t)se(t[a],e,n,r);return t}function vo(t,e){if(gt===null)return t;const n=er(gt)||gt.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[i,o,s,l=V]=e[a];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&se(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return t}function ne(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(pe(),Ot(l,n,8,[t.el,s,t,e]),he())}}/*! #__NO_SIDE_EFFECTS__ */function nn(t,e){return F(t)?rt({name:t.name},e,{setup:t}):t}const Pn=t=>!!t.type.__asyncLoader,bo=t=>t.type.__isKeepAlive;function xl(t,e){yo(t,"a",e)}function _l(t,e){yo(t,"da",e)}function yo(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Jn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)bo(a.parent.vnode)&&wl(r,e,n,a),a=a.parent}}function wl(t,e,n,r){const a=Jn(e,t,r,!0);xo(()=>{Jr(r[e],a)},n)}function Jn(t,e,n=lt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pe();const s=rn(n),l=Ot(e,n,t,o);return s(),he(),l});return r?a.unshift(i):a.push(i),i}}const zt=t=>(e,n=lt)=>(!tr||t==="sp")&&Jn(t,(...r)=>e(...r),n),Al=zt("bm"),kl=zt("m"),Ol=zt("bu"),Sl=zt("u"),El=zt("bum"),xo=zt("um"),Cl=zt("sp"),Pl=zt("rtg"),Il=zt("rtc");function Tl(t,e=lt){Jn("ec",t,e)}function _o(t,e,n,r){let a;const i=n&&n[r];if(R(t)||tt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(q(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Pr=t=>t?Ro(t)?er(t)||t.proxy:Pr(t.parent):null,ze=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$emit:t=>t.emit,$options:t=>ca(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,fa(t.update)}),$nextTick:t=>t.n||(t.n=rl.bind(t.proxy)),$watch:t=>yl.bind(t)}),pr=(t,e)=>t!==V&&!t.__isScriptSetup&&H(t,e),Nl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(pr(r,e))return o[e]=1,r[e];if(a!==V&&H(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,i[e];if(n!==V&&H(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const u=ze[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==V&&H(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,H(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return pr(a,e)?(a[e]=n,!0):r!==V&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==V&&H(t,o)||pr(e,o)||(s=i[0])&&H(s,o)||H(r,o)||H(ze,o)||H(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ua(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ir=!0;function Ml(t){const e=ca(t),n=t.proxy,r=t.ctx;Ir=!1,e.beforeCreate&&Ba(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:w,updated:D,activated:N,deactivated:z,beforeDestroy:A,beforeUnmount:E,destroyed:P,unmounted:j,render:U,renderTracked:L,renderTriggered:Q,errorCaptured:ft,serverPrefetch:bt,expose:Mt,inheritAttrs:Me,components:ln,directives:fn,filters:or}=e;if(c&&Rl(c,r,null),o)for(const J in o){const K=o[J];F(K)&&(r[J]=K.bind(n))}if(a){const J=a.call(n,n);q(J)&&(t.data=Ke(J))}if(Ir=!0,i)for(const J in i){const K=i[J],te=F(K)?K.bind(n,n):F(K.get)?K.get.bind(n,n):yt,cn=!F(K)&&F(K.set)?K.set.bind(n):yt,ee=ae({get:te,set:cn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ee.value,set:St=>ee.value=St})}if(s)for(const J in s)wo(s[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{zl(K,J[K])})}u&&Ba(u,t,"c");function ot(J,K){R(K)?K.forEach(te=>J(te.bind(n))):K&&J(K.bind(n))}if(ot(Al,m),ot(kl,v),ot(Ol,w),ot(Sl,D),ot(xl,N),ot(_l,z),ot(Tl,ft),ot(Il,L),ot(Pl,Q),ot(El,E),ot(xo,j),ot(Cl,bt),R(Mt))if(Mt.length){const J=t.exposed||(t.exposed={});Mt.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:te=>n[K]=te})})}else t.exposed||(t.exposed={});U&&t.render===yt&&(t.render=U),Me!=null&&(t.inheritAttrs=Me),ln&&(t.components=ln),fn&&(t.directives=fn)}function Rl(t,e,n=yt){R(t)&&(t=Tr(t));for(const r in t){const a=t[r];let i;q(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ba(t,e,n){Ot(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wo(t,e,n,r){const a=r.includes(".")?go(n,r):()=>n[r];if(tt(t)){const i=e[t];F(i)&&Cn(a,i)}else if(F(t))Cn(a,t.bind(n));else if(q(t))if(R(t))t.forEach(i=>wo(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&Cn(a,i,t)}}function ca(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,e,o)),q(e)&&i.set(e,l),l}function jn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&jn(t,i,n,!0),a&&a.forEach(o=>jn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ll={data:Ya,props:Ka,emits:Ka,methods:De,computed:De,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:De,directives:De,watch:Dl,provide:Ya,inject:Fl};function Ya(t,e){return e?t?function(){return rt(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Fl(t,e){return De(Tr(t),Tr(e))}function Tr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function De(t,e){return t?rt(Object.create(null),t,e):e}function Ka(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:rt(Object.create(null),Ua(t),Ua(e??{})):e}function Dl(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function Ao(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jl=0;function $l(t,e){return function(r,a=null){F(r)||(r=rt({},r)),a!=null&&!q(a)&&(a=null);const i=Ao(),o=new WeakSet;let s=!1;const l=i.app={_uid:jl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=it(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,er(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=He;He=l;try{return c()}finally{He=u}}};return l}}let He=null;function zl(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=lt||gt;if(r||He){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:He._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function Hl(t,e,n,r=!1){const a={},i={};Ln(i,Qn,1),t.propsDefaults=Object.create(null),ko(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Js(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Ul(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(qn(t.emitsOptions,v))continue;const w=e[v];if(l)if(H(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const D=Oe(v);a[D]=Nr(l,s,D,w,t,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{ko(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!H(e,m)&&((u=Te(m))===m||!H(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Nr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!H(e,m))&&(delete i[m],c=!0)}c&&Ft(t,"set","$attrs")}function ko(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if($e(l))continue;const c=e[l];let u;a&&H(a,u=Oe(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:qn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||V;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Nr(a,l,m,c[m],t,!H(c,m))}}return o}function Nr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=rn(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Te(n))&&(r=!0))}return r}function Oo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[v,w]=Oo(m,e,!0);rt(o,v),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return q(t)&&r.set(t,xe),xe;if(R(i))for(let u=0;u<i.length;u++){const m=Oe(i[u]);Va(m)&&(o[m]=V)}else if(i)for(const u in i){const m=Oe(u);if(Va(m)){const v=i[u],w=o[m]=R(v)||F(v)?{type:v}:rt({},v);if(w){const D=Xa(Boolean,w.type),N=Xa(String,w.type);w[0]=D>-1,w[1]=N<0||D<N,(D>-1||H(w,"default"))&&s.push(m)}}}const c=[o,s];return q(t)&&r.set(t,c),c}function Va(t){return t[0]!=="$"&&!$e(t)}function Wa(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ga(t,e){return Wa(t)===Wa(e)}function Xa(t,e){return R(e)?e.findIndex(n=>Ga(n,t)):F(e)&&Ga(e,t)?0:-1}const So=t=>t[0]==="_"||t==="$stable",ua=t=>R(t)?t.map(Pt):[Pt(t)],Bl=(t,e,n)=>{if(e._n)return e;const r=fl((...a)=>ua(e(...a)),n);return r._c=!1,r},Eo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(So(a))continue;const i=t[a];if(F(i))e[a]=Bl(a,i,r);else if(i!=null){const o=ua(i);e[a]=()=>o}}},Co=(t,e)=>{const n=ua(e);t.slots.default=()=>n},Yl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Ln(e,"_",n)):Eo(e,t.slots={})}else t.slots={},e&&Co(t,e);Ln(t.slots,Qn,1)},Kl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=V;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(rt(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Eo(e,a)),o=e}else e&&(Co(t,e),o={default:1});if(i)for(const s in a)!So(s)&&o[s]==null&&delete a[s]};function Mr(t,e,n,r,a=!1){if(R(t)){t.forEach((v,w)=>Mr(v,e&&(R(e)?e[w]:e),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,H(m,c)&&(m[c]=null)):pt(c)&&(c.value=null)),F(l))Gt(l,s,12,[o,u]);else{const v=tt(l),w=pt(l);if(v||w){const D=()=>{if(t.f){const N=v?H(m,l)?m[l]:u[l]:l.value;a?R(N)&&Jr(N,i):R(N)?N.includes(i)||N.push(i):v?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,H(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?(D.id=-1,ut(D,n)):D()}}}const ut=gl;function Vl(t){return Wl(t)}function Wl(t,e){const n=zi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:w=yt,insertStaticContent:D}=t,N=(f,d,p,h=null,g=null,x=null,k=void 0,y=null,_=!!d.dynamicChildren)=>{if(f===d)return;f&&!Le(f,d)&&(h=un(f),St(f,g,x,!0),f=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:b,ref:S,shapeFlag:T}=d;switch(b){case Zn:z(f,d,p,h);break;case Xe:A(f,d,p,h);break;case gr:f==null&&E(d,p,h,k);break;case wt:ln(f,d,p,h,g,x,k,y,_);break;default:T&1?U(f,d,p,h,g,x,k,y,_):T&6?fn(f,d,p,h,g,x,k,y,_):(T&64||T&128)&&b.process(f,d,p,h,g,x,k,y,_,ge)}S!=null&&g&&Mr(S,f&&f.ref,x,d||f,!d)},z=(f,d,p,h)=>{if(f==null)r(d.el=s(d.children),p,h);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},A=(f,d,p,h)=>{f==null?r(d.el=l(d.children||""),p,h):d.el=f.el},E=(f,d,p,h)=>{[f.el,f.anchor]=D(f.children,d,p,h,f.el,f.anchor)},P=({el:f,anchor:d},p,h)=>{let g;for(;f&&f!==d;)g=v(f),r(f,p,h),f=g;r(d,p,h)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),a(f),f=p;a(d)},U=(f,d,p,h,g,x,k,y,_)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),f==null?L(d,p,h,g,x,k,y,_):bt(f,d,g,x,k,y,_)},L=(f,d,p,h,g,x,k,y)=>{let _,b;const{props:S,shapeFlag:T,transition:I,dirs:M}=f;if(_=f.el=o(f.type,x,S&&S.is,S),T&8?u(_,f.children):T&16&&ft(f.children,_,null,h,g,hr(f,x),k,y),M&&ne(f,null,h,"created"),Q(_,f,f.scopeId,k,h),S){for(const Y in S)Y!=="value"&&!$e(Y)&&i(_,Y,null,S[Y],x,f.children,h,g,Rt);"value"in S&&i(_,"value",null,S.value,x),(b=S.onVnodeBeforeMount)&&Ct(b,h,f)}M&&ne(f,null,h,"beforeMount");const $=Gl(g,I);$&&I.beforeEnter(_),r(_,d,p),((b=S&&S.onVnodeMounted)||$||M)&&ut(()=>{b&&Ct(b,h,f),$&&I.enter(_),M&&ne(f,null,h,"mounted")},g)},Q=(f,d,p,h,g)=>{if(p&&w(f,p),h)for(let x=0;x<h.length;x++)w(f,h[x]);if(g){let x=g.subTree;if(d===x){const k=g.vnode;Q(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},ft=(f,d,p,h,g,x,k,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Kt(f[b]):Pt(f[b]);N(null,S,d,p,h,g,x,k,y)}},bt=(f,d,p,h,g,x,k)=>{const y=d.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=d;_|=f.patchFlag&16;const T=f.props||V,I=d.props||V;let M;if(p&&re(p,!1),(M=I.onVnodeBeforeUpdate)&&Ct(M,p,d,f),S&&ne(d,f,p,"beforeUpdate"),p&&re(p,!0),b?Mt(f.dynamicChildren,b,y,p,h,hr(d,g),x):k||K(f,d,y,null,p,h,hr(d,g),x,!1),_>0){if(_&16)Me(y,d,T,I,p,h,g);else if(_&2&&T.class!==I.class&&i(y,"class",null,I.class,g),_&4&&i(y,"style",T.style,I.style,g),_&8){const $=d.dynamicProps;for(let Y=0;Y<$.length;Y++){const X=$[Y],nt=T[X],xt=I[X];(xt!==nt||X==="value")&&i(y,X,nt,xt,g,f.children,p,h,Rt)}}_&1&&f.children!==d.children&&u(y,d.children)}else!k&&b==null&&Me(y,d,T,I,p,h,g);((M=I.onVnodeUpdated)||S)&&ut(()=>{M&&Ct(M,p,d,f),S&&ne(d,f,p,"updated")},h)},Mt=(f,d,p,h,g,x,k)=>{for(let y=0;y<d.length;y++){const _=f[y],b=d[y],S=_.el&&(_.type===wt||!Le(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,h,g,x,k,!0)}},Me=(f,d,p,h,g,x,k)=>{if(p!==h){if(p!==V)for(const y in p)!$e(y)&&!(y in h)&&i(f,y,p[y],null,k,d.children,g,x,Rt);for(const y in h){if($e(y))continue;const _=h[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,k,d.children,g,x,Rt)}"value"in h&&i(f,"value",p.value,h.value,k)}},ln=(f,d,p,h,g,x,k,y,_)=>{const b=d.el=f?f.el:s(""),S=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,p,h),r(S,p,h),ft(d.children||[],p,S,g,x,k,y,_)):T>0&&T&64&&I&&f.dynamicChildren?(Mt(f.dynamicChildren,I,p,g,x,k,y),(d.key!=null||g&&d===g.subTree)&&Po(f,d,!0)):K(f,d,p,S,g,x,k,y,_)},fn=(f,d,p,h,g,x,k,y,_)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,h,k,_):or(d,p,h,g,x,k,_):Sa(f,d,_)},or=(f,d,p,h,g,x,k)=>{const y=f.component=af(f,h,g);if(bo(f)&&(y.ctx.renderer=ge),of(y),y.asyncDep){if(g&&g.registerDep(y,ot),!f.el){const _=y.subTree=it(Xe);A(null,_,d,p)}}else ot(y,f,d,p,g,x,k)},Sa=(f,d,p)=>{const h=d.component=f.component;if(dl(f,d,p))if(h.asyncDep&&!h.asyncResolved){J(h,d,p);return}else h.next=d,il(h.update),h.effect.dirty=!0,h.update();else d.el=f.el,h.vnode=d},ot=(f,d,p,h,g,x,k)=>{const y=()=>{if(f.isMounted){let{next:S,bu:T,u:I,parent:M,vnode:$}=f;{const ve=Io(f);if(ve){S&&(S.el=$.el,J(f,S,k)),ve.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=S,X;re(f,!1),S?(S.el=$.el,J(f,S,k)):S=$,T&&ur(T),(X=S.props&&S.props.onVnodeBeforeUpdate)&&Ct(X,M,S,$),re(f,!0);const nt=mr(f),xt=f.subTree;f.subTree=nt,N(xt,nt,m(xt.el),un(xt),f,g,x),S.el=nt.el,Y===null&&ml(f,nt.el),I&&ut(I,g),(X=S.props&&S.props.onVnodeUpdated)&&ut(()=>Ct(X,M,S,$),g)}else{let S;const{el:T,props:I}=d,{bm:M,m:$,parent:Y}=f,X=Pn(d);if(re(f,!1),M&&ur(M),!X&&(S=I&&I.onVnodeBeforeMount)&&Ct(S,Y,d),re(f,!0),T&&fr){const nt=()=>{f.subTree=mr(f),fr(T,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&nt()):nt()}else{const nt=f.subTree=mr(f);N(null,nt,p,h,f,g,x),d.el=nt.el}if($&&ut($,g),!X&&(S=I&&I.onVnodeMounted)){const nt=d;ut(()=>Ct(S,Y,nt),g)}(d.shapeFlag&256||Y&&Pn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ut(f.a,g),f.isMounted=!0,d=p=h=null}},_=f.effect=new ea(y,yt,()=>fa(b),f.scope),b=f.update=()=>{_.dirty&&_.run()};b.id=f.uid,re(f,!0),b()},J=(f,d,p)=>{d.component=f;const h=f.vnode.props;f.vnode=d,f.next=null,Ul(f,d.props,h,p),Kl(f,d.children,p),pe(),za(f),he()},K=(f,d,p,h,g,x,k,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){cn(b,T,p,h,g,x,k,y,_);return}else if(I&256){te(b,T,p,h,g,x,k,y,_);return}}M&8?(S&16&&Rt(b,g,x),T!==b&&u(p,T)):S&16?M&16?cn(b,T,p,h,g,x,k,y,_):Rt(b,g,x,!0):(S&8&&u(p,""),M&16&&ft(T,p,h,g,x,k,y,_))},te=(f,d,p,h,g,x,k,y,_)=>{f=f||xe,d=d||xe;const b=f.length,S=d.length,T=Math.min(b,S);let I;for(I=0;I<T;I++){const M=d[I]=_?Kt(d[I]):Pt(d[I]);N(f[I],M,p,null,g,x,k,y,_)}b>S?Rt(f,g,x,!0,!1,T):ft(d,p,h,g,x,k,y,_,T)},cn=(f,d,p,h,g,x,k,y,_)=>{let b=0;const S=d.length;let T=f.length-1,I=S-1;for(;b<=T&&b<=I;){const M=f[b],$=d[b]=_?Kt(d[b]):Pt(d[b]);if(Le(M,$))N(M,$,p,null,g,x,k,y,_);else break;b++}for(;b<=T&&b<=I;){const M=f[T],$=d[I]=_?Kt(d[I]):Pt(d[I]);if(Le(M,$))N(M,$,p,null,g,x,k,y,_);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,$=M<S?d[M].el:h;for(;b<=I;)N(null,d[b]=_?Kt(d[b]):Pt(d[b]),p,$,g,x,k,y,_),b++}}else if(b>I)for(;b<=T;)St(f[b],g,x,!0),b++;else{const M=b,$=b,Y=new Map;for(b=$;b<=I;b++){const ht=d[b]=_?Kt(d[b]):Pt(d[b]);ht.key!=null&&Y.set(ht.key,b)}let X,nt=0;const xt=I-$+1;let ve=!1,Pa=0;const Re=new Array(xt);for(b=0;b<xt;b++)Re[b]=0;for(b=M;b<=T;b++){const ht=f[b];if(nt>=xt){St(ht,g,x,!0);continue}let Et;if(ht.key!=null)Et=Y.get(ht.key);else for(X=$;X<=I;X++)if(Re[X-$]===0&&Le(ht,d[X])){Et=X;break}Et===void 0?St(ht,g,x,!0):(Re[Et-$]=b+1,Et>=Pa?Pa=Et:ve=!0,N(ht,d[Et],p,null,g,x,k,y,_),nt++)}const Ia=ve?Xl(Re):xe;for(X=Ia.length-1,b=xt-1;b>=0;b--){const ht=$+b,Et=d[ht],Ta=ht+1<S?d[ht+1].el:h;Re[b]===0?N(null,Et,p,Ta,g,x,k,y,_):ve&&(X<0||b!==Ia[X]?ee(Et,p,Ta,2):X--)}}},ee=(f,d,p,h,g=null)=>{const{el:x,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){ee(f.component.subTree,d,p,h);return}if(b&128){f.suspense.move(d,p,h);return}if(b&64){k.move(f,d,p,ge);return}if(k===wt){r(x,d,p);for(let T=0;T<_.length;T++)ee(_[T],d,p,h);r(f.anchor,d,p);return}if(k===gr){P(f,d,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(x),r(x,d,p),ut(()=>y.enter(x),g);else{const{leave:T,delayLeave:I,afterLeave:M}=y,$=()=>r(x,d,p),Y=()=>{T(x,()=>{$(),M&&M()})};I?I(x,$,Y):Y()}else r(x,d,p)},St=(f,d,p,h=!1,g=!1)=>{const{type:x,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:T,dirs:I}=f;if(y!=null&&Mr(y,null,p,f,!0),S&256){d.ctx.deactivate(f);return}const M=S&1&&I,$=!Pn(f);let Y;if($&&(Y=k&&k.onVnodeBeforeUnmount)&&Ct(Y,d,f),S&6)gs(f.component,p,h);else{if(S&128){f.suspense.unmount(p,h);return}M&&ne(f,null,d,"beforeUnmount"),S&64?f.type.remove(f,d,p,g,ge,h):b&&(x!==wt||T>0&&T&64)?Rt(b,d,p,!1,!0):(x===wt&&T&384||!g&&S&16)&&Rt(_,d,p),h&&Ea(f)}($&&(Y=k&&k.onVnodeUnmounted)||M)&&ut(()=>{Y&&Ct(Y,d,f),M&&ne(f,null,d,"unmounted")},p)},Ea=f=>{const{type:d,el:p,anchor:h,transition:g}=f;if(d===wt){hs(p,h);return}if(d===gr){j(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,_=()=>k(p,x);y?y(f.el,x,_):_()}else x()},hs=(f,d)=>{let p;for(;f!==d;)p=v(f),a(f),f=p;a(d)},gs=(f,d,p)=>{const{bum:h,scope:g,update:x,subTree:k,um:y}=f;h&&ur(h),g.stop(),x&&(x.active=!1,St(k,f,d,p)),y&&ut(y,d),ut(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Rt=(f,d,p,h=!1,g=!1,x=0)=>{for(let k=x;k<f.length;k++)St(f[k],d,p,h,g)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let sr=!1;const Ca=(f,d,p)=>{f==null?d._vnode&&St(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,p),sr||(sr=!0,za(),co(),sr=!1),d._vnode=f},ge={p:N,um:St,m:ee,r:Ea,mt:or,mc:ft,pc:K,pbc:Mt,n:un,o:t};let lr,fr;return e&&([lr,fr]=e(ge)),{render:Ca,hydrate:lr,createApp:$l(Ca,lr)}}function hr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Po(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Kt(a[i]),s.el=o.el),n||Po(o,s)),s.type===Zn&&(s.el=o.el)}}function Xl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Io(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Io(e)}const ql=t=>t.__isTeleport,wt=Symbol.for("v-fgt"),Zn=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Ue=[];let At=null;function Xt(t=!1){Ue.push(At=t?null:[])}function Jl(){Ue.pop(),At=Ue[Ue.length-1]||null}let qe=1;function qa(t){qe+=t}function To(t){return t.dynamicChildren=qe>0?At||xe:null,Jl(),qe>0&&At&&At.push(t),t}function Ee(t,e,n,r,a,i){return To(dt(t,e,n,r,a,i,!0))}function No(t,e,n,r,a){return To(it(t,e,n,r,a,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function Le(t,e){return t.type===e.type&&t.key===e.key}const Qn="__vInternal",Mo=({key:t})=>t??null,Tn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||pt(t)||F(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function dt(t,e=null,n=null,r=0,a=null,i=t===wt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mo(e),ref:e&&Tn(e),scopeId:po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:gt};return s?(da(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),qe>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const it=Zl;function Zl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===pl)&&(t=Xe),Rr(t)){const s=Ce(t,e,!0);return n&&da(s,n),qe>0&&!i&&At&&(s.shapeFlag&6?At[At.indexOf(t)]=s:At.push(s)),s.patchFlag|=-2,s}if(cf(t)&&(t=t.__vccOpts),e){e=Ql(e);let{class:s,style:l}=e;s&&!tt(s)&&(e.class=ta(s)),q(l)&&(no(l)&&!R(l)&&(l=rt({},l)),e.style=Qr(l))}const o=tt(t)?1:hl(t)?128:ql(t)?64:q(t)?4:F(t)?2:0;return dt(t,e,n,r,a,o,i,!0)}function Ql(t){return t?no(t)||Qn in t?rt({},t):t:null}function Ce(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?ef(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Mo(s),ref:e&&e.ref?n&&a?R(a)?a.concat(Tn(e)):[a,Tn(e)]:Tn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function tf(t=" ",e=0){return it(Zn,null,t,e)}function Pt(t){return t==null||typeof t=="boolean"?it(Xe):R(t)?it(wt,null,t.slice()):typeof t=="object"?Kt(t):it(Zn,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ce(t)}function da(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),da(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Qn in e)?e._ctx=gt:a===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[tf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ef(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=ta([e.class,r.class]));else if(a==="style")e.style=Qr([e.style,r.style]);else if(Kn(a)){const i=e[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Ct(t,e,n,r=null){Ot(t,e,7,[n,r])}const nf=Ao();let rf=0;function af(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||nf,i={uid:rf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,a),emitsOptions:mo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ll.bind(null,i),t.ce&&t.ce(i),i}let lt=null,$n,Lr;{const t=zi(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};$n=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Lr=e("__VUE_SSR_SETTERS__",n=>tr=n)}const rn=t=>{const e=lt;return $n(t),t.scope.on(),()=>{t.scope.off(),$n(e)}},Ja=()=>{lt&&lt.scope.off(),$n(null)};function Ro(t){return t.vnode.shapeFlag&4}let tr=!1;function of(t,e=!1){e&&Lr(e);const{props:n,children:r}=t.vnode,a=Ro(t);Hl(t,n,a,e),Yl(t,r);const i=a?sf(t,e):void 0;return e&&Lr(!1),i}function sf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ro(new Proxy(t.ctx,Nl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?ff(t):null,i=rn(t);pe();const o=Gt(r,t,0,[t.props,a]);if(he(),i(),Fi(o)){if(o.then(Ja,Ja),e)return o.then(s=>{Za(t,s,e)}).catch(s=>{Xn(s,t,0)});t.asyncDep=o}else Za(t,o,e)}else Lo(t,e)}function Za(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=so(e)),Lo(t,n)}let Qa;function Lo(t,e,n){const r=t.type;if(!t.render){if(!e&&Qa&&!r.render){const a=r.template||ca(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=rt(rt({isCustomElement:i,delimiters:s},o),l);r.render=Qa(a,c)}}t.render=r.render||yt}{const a=rn(t);pe();try{Ml(t)}finally{he(),a()}}}function lf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function ff(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return lf(t)},slots:t.slots,emit:t.emit,expose:e}}function er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(so(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ze)return ze[n](t)},has(e,n){return n in e||n in ze}}))}function cf(t){return F(t)&&"__vccOpts"in t}const ae=(t,e)=>Zs(t,e,tr);function uf(t,e,n){const r=arguments.length;return r===2?q(e)&&!R(e)?Rr(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),it(t,e,n))}const df="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mf="http://www.w3.org/2000/svg",pf="http://www.w3.org/1998/Math/MathML",Vt=typeof document<"u"?document:null,ti=Vt&&Vt.createElement("template"),hf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Vt.createElementNS(mf,t):e==="mathml"?Vt.createElementNS(pf,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ti.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gf=Symbol("_vtc");function vf(t,e,n){const r=t[gf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zn=Symbol("_vod"),Fo=Symbol("_vsh"),Do={beforeMount(t,{value:e},{transition:n}){t[zn]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fe(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Fe(t,!0),r.enter(t)):r.leave(t,()=>{Fe(t,!1)}):Fe(t,e))},beforeUnmount(t,{value:e}){Fe(t,e)}};function Fe(t,e){t.style.display=e?t[zn]:"none",t[Fo]=!e}const bf=Symbol(""),yf=/(^|;)\s*display\s*:/;function xf(t,e,n){const r=t.style,a=tt(n);let i=!1;if(n&&!a){if(e)if(tt(e))for(const o of e.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Nn(r,s,"")}else for(const o in e)n[o]==null&&Nn(r,o,"");for(const o in n)o==="display"&&(i=!0),Nn(r,o,n[o])}else if(a){if(e!==n){const o=r[bf];o&&(n+=";"+o),r.cssText=n,i=yf.test(n)}}else e&&t.removeAttribute("style");zn in t&&(t[zn]=i?r.display:"",t[Fo]&&(r.display="none"))}const ei=/\s*!important$/;function Nn(t,e,n){if(R(n))n.forEach(r=>Nn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_f(t,e);ei.test(n)?t.setProperty(Te(r),n.replace(ei,""),"important"):t[r]=n}}const ni=["Webkit","Moz","ms"],vr={};function _f(t,e){const n=vr[e];if(n)return n;let r=Oe(e);if(r!=="filter"&&r in t)return vr[e]=r;r=$i(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in t)return vr[e]=i}return e}const ri="http://www.w3.org/1999/xlink";function wf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ri,e.slice(6,e.length)):t.setAttributeNS(ri,e,n);else{const i=Cs(e);n==null||i&&!Hi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function kf(t,e,n,r){t.addEventListener(e,n,r)}function Of(t,e,n,r){t.removeEventListener(e,n,r)}const ai=Symbol("_vei");function Sf(t,e,n,r,a=null){const i=t[ai]||(t[ai]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Ef(e);if(r){const c=i[e]=If(r,a);kf(t,s,c,l)}else o&&(Of(t,s,o,l),i[e]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Ef(t){let e;if(ii.test(t)){e={};let r;for(;r=t.match(ii);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Te(t.slice(2)),e]}let br=0;const Cf=Promise.resolve(),Pf=()=>br||(Cf.then(()=>br=0),br=Date.now());function If(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ot(Tf(r,n.value),e,5,[r])};return n.value=t,n.attached=Pf(),n}function Tf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nf=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?vf(t,r,c):e==="style"?xf(t,n,r):Kn(e)?qr(e)||Sf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mf(t,e,r,c))?Af(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wf(t,e,r,c))};function Mf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&oi(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return oi(e)&&tt(n)?!1:e in t}const Rf=["ctrl","shift","alt","meta"],Lf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rf.some(n=>t[`${n}Key`]&&!e.includes(n))},Tt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<e.length;o++){const s=Lf[e[o]];if(s&&s(a,e))return}return t(a,...i)})},Ff=rt({patchProp:Nf},hf);let si;function Df(){return si||(si=Vl(Ff))}const jf=(...t)=>{const e=Df().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=zf(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,$f(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function $f(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zf(t){return tt(t)?document.querySelector(t):t}function li(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?li(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hn(t){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hn(t)}function Hf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Uf(t,e,n){return e&&fi(t.prototype,e),n&&fi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ma(t,e){return Yf(t)||Vf(t,e)||jo(t,e)||Gf()}function an(t){return Bf(t)||Kf(t)||jo(t)||Wf()}function Bf(t){if(Array.isArray(t))return Fr(t)}function Yf(t){if(Array.isArray(t))return t}function Kf(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vf(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function jo(t,e){if(t){if(typeof t=="string")return Fr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(t,e)}}function Fr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Wf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},pa={},$o={},zo=null,Ho={mark:ci,measure:ci};try{typeof window<"u"&&(pa=window),typeof document<"u"&&($o=document),typeof MutationObserver<"u"&&(zo=MutationObserver),typeof performance<"u"&&(Ho=performance)}catch{}var Xf=pa.navigator||{},ui=Xf.userAgent,di=ui===void 0?"":ui,Jt=pa,G=$o,mi=zo,bn=Ho;Jt.document;var Ht=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Uo=~di.indexOf("MSIE")||~di.indexOf("Trident/"),yn,xn,_n,wn,An,Dt="___FONT_AWESOME___",Dr=16,Bo="fa",Yo="svg-inline--fa",de="data-fa-i2svg",jr="data-fa-pseudo-element",qf="data-fa-pseudo-element-pending",ha="data-prefix",ga="data-icon",pi="fontawesome-i2svg",Jf="async",Zf=["HTML","HEAD","STYLE","SCRIPT"],Ko=function(){try{return!0}catch{return!1}}(),W="classic",Z="sharp",va=[W,Z];function on(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[W]}})}var Je=on((yn={},et(yn,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),et(yn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yn)),Ze=on((xn={},et(xn,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(xn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xn)),Qe=on((_n={},et(_n,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(_n,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),Qf=on((wn={},et(wn,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(wn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wn)),tc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Vo="fa-layers-text",ec=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nc=on((An={},et(An,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(An,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),An)),Wo=[1,2,3,4,5,6,7,8,9,10],rc=Wo.concat([11,12,13,14,15,16,17,18,19,20]),ac=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Ze[W]).map(tn.add.bind(tn));Object.keys(Ze[Z]).map(tn.add.bind(tn));var ic=[].concat(va,an(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(Wo.map(function(t){return"".concat(t,"x")})).concat(rc.map(function(t){return"w-".concat(t)})),Be=Jt.FontAwesomeConfig||{};function oc(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var lc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lc.forEach(function(t){var e=ma(t,2),n=e[0],r=e[1],a=sc(oc(n));a!=null&&(Be[r]=a)})}var Go={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bo,replacementClass:Yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Pe=O(O({},Go),Be);Pe.autoReplaceSvg||(Pe.observeMutations=!1);var C={};Object.keys(Go).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Pe[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Pe[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Pe.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Pe.cssPrefix}});Jt.FontAwesomeConfig=C;var Ye=[];function fc(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Bt=Dr,Nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cc(t){if(!(!t||!Ht)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(e,r),t}}var uc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var t=12,e="";t-- >0;)e+=uc[Math.random()*62|0];return e}function Ne(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ba(t){return t.classList?Ne(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Xo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Xo(t[n]),'" ')},"").trim()}function nr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ya(t){return t.size!==Nt.size||t.x!==Nt.x||t.y!==Nt.y||t.rotate!==Nt.rotate||t.flipX||t.flipY}function mc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function pc(t){var e=t.transform,n=t.width,r=n===void 0?Dr:n,a=t.height,i=a===void 0?Dr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(e.x/Bt-r/2,"em, ").concat(e.y/Bt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Bt,"em), calc(-50% + ").concat(e.y/Bt,"em)) "):l+="translate(".concat(e.x/Bt,"em, ").concat(e.y/Bt,"em) "),l+="scale(".concat(e.size/Bt*(e.flipX?-1:1),", ").concat(e.size/Bt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qo(){var t=Bo,e=Yo,n=C.cssPrefix,r=C.replacementClass,a=hc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function yr(){C.autoAddCss&&!hi&&(cc(qo()),hi=!0)}var gc={mixout:function(){return{dom:{css:qo,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},jt=Jt||{};jt[Dt]||(jt[Dt]={});jt[Dt].styles||(jt[Dt].styles={});jt[Dt].hooks||(jt[Dt].hooks={});jt[Dt].shims||(jt[Dt].shims=[]);var kt=jt[Dt],Jo=[],vc=function t(){G.removeEventListener("DOMContentLoaded",t),Un=1,Jo.map(function(e){return e()})},Un=!1;Ht&&(Un=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Un||G.addEventListener("DOMContentLoaded",vc));function bc(t){Ht&&(Un?setTimeout(t,0):Jo.push(t))}function sn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Xo(t):"<".concat(e," ").concat(dc(r),">").concat(i.map(sn).join(""),"</").concat(e,">")}function gi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},xr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?yc(n,a):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function xc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function $r(t){var e=xc(t);return e.length===1?e[0].toString(16):null}function _c(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function zr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(e);typeof kt.hooks.addPack=="function"&&!a?kt.hooks.addPack(t,vi(e)):kt.styles[t]=O(O({},kt.styles[t]||{}),i),t==="fas"&&zr("fa",e)}var kn,On,Sn,be=kt.styles,wc=kt.shims,Ac=(kn={},et(kn,W,Object.values(Qe[W])),et(kn,Z,Object.values(Qe[Z])),kn),xa=null,Zo={},Qo={},ts={},es={},ns={},kc=(On={},et(On,W,Object.keys(Je[W])),et(On,Z,Object.keys(Je[Z])),On);function Oc(t){return~ic.indexOf(t)}function Sc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Oc(a)?a:null}var rs=function(){var e=function(i){return xr(be,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};Zo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Qo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ns=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in be||C.autoFetchSvg,r=xr(wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ts=r.names,es=r.unicodes,xa=rr(C.styleDefault,{family:C.familyDefault})};fc(function(t){xa=rr(t.styleDefault,{family:C.familyDefault})});rs();function _a(t,e){return(Zo[t]||{})[e]}function Ec(t,e){return(Qo[t]||{})[e]}function fe(t,e){return(ns[t]||{})[e]}function as(t){return ts[t]||{prefix:null,iconName:null}}function Cc(t){var e=es[t],n=_a("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zt(){return xa}var wa=function(){return{prefix:null,iconName:null,rest:[]}};function rr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?W:n,a=Je[r][t],i=Ze[r][t]||Ze[r][a],o=t in kt.styles?t:null;return i||o||null}var bi=(Sn={},et(Sn,W,Object.keys(Qe[W])),et(Sn,Z,Object.keys(Qe[Z])),Sn);function ar(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},et(e,W,"".concat(C.cssPrefix,"-").concat(W)),et(e,Z,"".concat(C.cssPrefix,"-").concat(Z)),e),o=null,s=W;(t.includes(i[W])||t.some(function(c){return bi[W].includes(c)}))&&(s=W),(t.includes(i[Z])||t.some(function(c){return bi[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=Sc(C.cssPrefix,u);if(be[u]?(u=Ac[s].includes(u)?Qf[s][u]:u,o=u,c.prefix=u):kc[s].indexOf(u)>-1?(o=u,c.prefix=rr(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==i[W]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?as(c.iconName):{},w=fe(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!be.far&&be.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},wa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(be.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=fe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Zt()||"fas"),l}var Pc=function(){function t(){Hf(this,t),this.definitions={}}return Uf(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=Qe[W][s];l&&zr(l,o[s]),rs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),yi=[],ye={},ke={},Ic=Object.keys(ke);function Tc(t,e){var n=e.mixoutsTo;return yi=t,ye={},Object.keys(ke).forEach(function(r){Ic.indexOf(r)===-1&&delete ke[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function Hr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ye[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function me(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ye[t]||[];a.forEach(function(i){i.apply(null,n)})}function $t(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ke[t]?ke[t].apply(null,e):void 0}function Ur(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Zt();if(e)return e=fe(n,e)||e,gi(is.definitions,n,e)||gi(kt.styles,n,e)}var is=new Pc,Nc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,me("noAuto")},Mc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(me("beforeI2svg",e),$t("pseudoElements2svg",e),$t("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,bc(function(){Lc({autoReplaceSvgRoot:n}),me("watch",e)})}},Rc={icon:function(e){if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=rr(e[0]);return{prefix:r,iconName:fe(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(tc))){var a=ar(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Zt(),iconName:fe(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Zt();return{prefix:i,iconName:fe(i,e)||e}}}},vt={noAuto:Nc,config:C,dom:Mc,parse:Rc,library:is,findIconDefinition:Ur,toHtml:sn},Lc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(kt.styles).length>0||C.autoFetchSvg)&&Ht&&C.autoReplaceSvg&&vt.dom.i2svg({node:r})};function ir(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ht){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=nr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Dc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Aa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,w=v===void 0?!1:v,D=r.found?r:n,N=D.width,z=D.height,A=a==="fak",E=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),P={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},j=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};w&&(P.attributes[de]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||en())},children:[l]}),delete P.attributes.title);var U=O(O({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),L=r.found&&n.found?$t("generateAbstractMask",U)||{children:[],attributes:{}}:$t("generateAbstractIcon",U)||{children:[],attributes:{}},Q=L.children,ft=L.attributes;return U.children=Q,U.attributes=ft,s?Dc(U):Fc(U)}function xi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[de]="");var u=O({},o.styles);ya(a)&&(u.transform=pc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=nr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function jc(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _r=kt.styles;function Br(t){var e=t[0],n=t[1],r=t.slice(4),a=ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var $c={found:!1,width:512,height:512};function zc(t,e){!Ko&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=Zt()),new Promise(function(r,a){if($t("missingIconAbstract"),n==="fa"){var i=as(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_r[e]&&_r[e][t]){var o=_r[e][t];return r(Br(o))}zc(t,e),r(O(O({},$c),{},{icon:C.showMissingIcons&&t?$t("missingIconAbstract")||{}:{}}))})}var _i=function(){},Kr=C.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:_i,measure:_i},je='FA "6.5.1"',Hc=function(e){return Kr.mark("".concat(je," ").concat(e," begins")),function(){return os(e)}},os=function(e){Kr.mark("".concat(je," ").concat(e," ends")),Kr.measure("".concat(je," ").concat(e),"".concat(je," ").concat(e," begins"),"".concat(je," ").concat(e," ends"))},ka={begin:Hc,end:os},Mn=function(){};function wi(t){var e=t.getAttribute?t.getAttribute(de):null;return typeof e=="string"}function Uc(t){var e=t.getAttribute?t.getAttribute(ha):null,n=t.getAttribute?t.getAttribute(ga):null;return e&&n}function Bc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function Yc(){if(C.autoReplaceSvg===!0)return Rn.replace;var t=Rn[C.autoReplaceSvg];return t||Rn.replace}function Kc(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function Vc(t){return G.createElement(t)}function ss(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Kc:Vc:n;if(typeof t=="string")return G.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ss(o,{ceFn:r}))}),a}function Wc(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(ss(a),n)}),n.getAttribute(de)===null&&C.keepOriginalSource){var r=G.createComment(Wc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ba(n).indexOf(C.replacementClass))return Rn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(de,""),n.innerHTML=o}};function Ai(t){t()}function ls(t,e){var n=typeof e=="function"?e:Mn;if(t.length===0)n();else{var r=Ai;C.mutateApproach===Jf&&(r=Jt.requestAnimationFrame||Ai),r(function(){var a=Yc(),i=ka.begin("mutate");t.map(a),i(),n()})}}var Oa=!1;function fs(){Oa=!0}function Vr(){Oa=!1}var Bn=null;function ki(t){if(mi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Mn:e,r=t.nodeCallback,a=r===void 0?Mn:r,i=t.pseudoElementsCallback,o=i===void 0?Mn:i,s=t.observeMutationsRoot,l=s===void 0?G:s;Bn=new mi(function(c){if(!Oa){var u=Zt();Ne(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~ac.indexOf(m.attributeName))if(m.attributeName==="class"&&Uc(m.target)){var v=ar(ba(m.target)),w=v.prefix,D=v.iconName;m.target.setAttribute(ha,w||u),D&&m.target.setAttribute(ga,D)}else Bc(m.target)&&a(m.target)})}}),Ht&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gc(){Bn&&Bn.disconnect()}function Xc(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qc(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=ar(ba(t));return a.prefix||(a.prefix=Zt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ec(a.prefix,t.innerText)||_a(a.prefix,$r(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Jc(t){var e=Ne(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||en()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qc(t),r=n.iconName,a=n.prefix,i=n.rest,o=Jc(t),s=Hr("parseNodeAttributes",{},t),l=e.styleParser?Xc(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Qc=kt.styles;function cs(t){var e=C.autoReplaceSvg==="nest"?Oi(t,{styleParser:!1}):Oi(t);return~e.extra.classes.indexOf(Vo)?$t("generateLayersText",t,e):$t("generateSvgReplacementMutation",t,e)}var Qt=new Set;va.map(function(t){Qt.add("fa-".concat(t))});Object.keys(Je[W]).map(Qt.add.bind(Qt));Object.keys(Je[Z]).map(Qt.add.bind(Qt));Qt=an(Qt);function Si(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?Qt:va.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Qc));i.includes("fa")||i.push("fa");var o=[".".concat(Vo,":not([").concat(de,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ne(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(u,m){try{var v=cs(m);v&&u.push(v)}catch(w){Ko||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){ls(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function tu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cs(t).then(function(n){n&&ls([n],e)})}function eu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ur(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ur(a||{})),t(r,O(O({},n),{},{mask:a}))}}var nu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Nt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,D=w===void 0?null:w,N=n.classes,z=N===void 0?[]:N,A=n.attributes,E=A===void 0?{}:A,P=n.styles,j=P===void 0?{}:P;if(e){var U=e.prefix,L=e.iconName,Q=e.icon;return ir(O({type:"icon"},e),function(){return me("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?E["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(D||en()):(E["aria-hidden"]="true",E.focusable="false")),Aa({icons:{main:Br(Q),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:L,transform:O(O({},Nt),a),symbol:o,title:v,maskId:u,titleId:D,extra:{attributes:E,styles:j,classes:z}})})}},ru={mixout:function(){return{icon:eu(nu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Si,n.nodeCallback=tu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return Si(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,D){Promise.all([Yr(a,s),u.iconName?Yr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=ma(N,2),A=z[0],E=z[1];w([n,Aa({icons:{main:A,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(D)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nr(s);l.length>0&&(a.style=l);var c;return ya(o)&&(c=$t("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},au={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},iu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ir({type:"counter",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:r}),jc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Nt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,w=v===void 0?{}:v;return ir({type:"text",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:O(O({},Nt),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},su=new RegExp('"',"ug"),Ei=[1105920,1112319];function lu(t){var e=t.replace(su,""),n=_c(e,0),r=n>=Ei[0]&&n<=Ei[1],a=e.length===2?e[0]===e[1]:!1;return{value:$r(a?e[0]:e),isSecondary:r||a}}function Ci(t,e){var n="".concat(qf).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ne(t.children),o=i.filter(function(Q){return Q.getAttribute(jr)===e})[0],s=Jt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(ec),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:W,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ze[v][l[2].toLowerCase()]:nc[v][c],D=lu(m),N=D.value,z=D.isSecondary,A=l[0].startsWith("FontAwesome"),E=_a(w,N),P=E;if(A){var j=Cc(N);j.iconName&&j.prefix&&(E=j.iconName,w=j.prefix)}if(E&&!z&&(!o||o.getAttribute(ha)!==w||o.getAttribute(ga)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var U=Zc(),L=U.extra;L.attributes[jr]=e,Yr(E,w).then(function(Q){var ft=Aa(O(O({},U),{},{icons:{main:Q,mask:wa()},prefix:w,iconName:P,extra:L,watchable:!0})),bt=G.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=ft.map(function(Mt){return sn(Mt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function fu(t){return Promise.all([Ci(t,"::before"),Ci(t,"::after")])}function cu(t){return t.parentNode!==document.head&&!~Zf.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pi(t){if(Ht)return new Promise(function(e,n){var r=Ne(t.querySelectorAll("*")).filter(cu).map(fu),a=ka.begin("searchPseudoElements");fs(),Promise.all(r).then(function(){a(),Vr(),e()}).catch(function(){a(),Vr(),n()})})}var uu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;C.searchPseudoElements&&Pi(a)}}},Ii=!1,du={mixout:function(){return{dom:{unwatch:function(){fs(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){ki(Hr("mutationObserverCallbacks",{}))},noAuto:function(){Gc()},watch:function(n){var r=n.observeMutationsRoot;Ii?Vr():ki(Hr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},mu={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function Ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pu(t){return t.tag==="g"?t.children:[t]}var hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(o){return o.trim()})):wa();return i.prefix||(i.prefix=Zt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,w=mc({transform:l,containerWidth:m,iconWidth:c}),D={tag:"rect",attributes:O(O({},wr),{},{fill:"white"})},N=u.children?{children:u.children.map(Ni)}:{},z={tag:"g",attributes:O({},w.inner),children:[Ni(O({tag:u.tag,attributes:O(O({},u.attributes),w.path)},N))]},A={tag:"g",attributes:O({},w.outer),children:[z]},E="mask-".concat(s||en()),P="clip-".concat(s||en()),j={tag:"mask",attributes:O(O({},wr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,A]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:pu(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(E,")")},wr)}),{children:r,attributes:a}}}},gu={provides:function(e){var n=!1;Jt.matchMedia&&(n=Jt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},bu=[gc,ru,au,iu,ou,uu,du,mu,hu,gu,vu];Tc(bu,{mixoutsTo:vt});vt.noAuto;vt.config;vt.library;vt.dom;var Wr=vt.parse;vt.findIconDefinition;vt.toHtml;var yu=vt.icon;vt.layer;vt.text;vt.counter;function Mi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mi(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yn(t){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yn(t)}function ct(t,e,n){return e=Au(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function _u(t,e){if(t==null)return{};var n=xu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function wu(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Au(t){var e=wu(t,"string");return typeof e=="symbol"?e:String(e)}var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};(function(t){(function(e){var n=function(A,E,P){if(!c(E)||m(E)||v(E)||w(E)||l(E))return E;var j,U=0,L=0;if(u(E))for(j=[],L=E.length;U<L;U++)j.push(n(A,E[U],P));else{j={};for(var Q in E)Object.prototype.hasOwnProperty.call(E,Q)&&(j[A(Q,P)]=n(A,E[Q],P))}return j},r=function(A,E){E=E||{};var P=E.separator||"_",j=E.split||/(?=[A-Z])/;return A.split(j).join(P)},a=function(A){return D(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(E,P){return P?P.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var E=a(A);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(A,E){return r(A,E).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},u=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},v=function(A){return s.call(A)=="[object RegExp]"},w=function(A){return s.call(A)=="[object Boolean]"},D=function(A){return A=A-0,A===A},N=function(A,E){var P=E&&"process"in E?E.process:E;return typeof P!="function"?A:function(j,U){return P(j,A,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(A,E){return n(N(a,E),A)},decamelizeKeys:function(A,E){return n(N(o,E),A,E)},pascalizeKeys:function(A,E){return n(N(i,E),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=z:e.humps=z})(ku)})(us);var Ou=us.exports,Su=["class","style"];function Eu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ou.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Cu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ds(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ds(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Cu(u);break;case"style":l.style=Eu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=_u(n,Su);return uf(t.tag,Lt(Lt(Lt({},e),{},{class:a.class,style:Lt(Lt({},a.style),o)},a.attrs),s),r)}var ms=!1;try{ms=!0}catch{}function Pu(){if(!ms&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ar(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function Iu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ri(t){if(t&&Yn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wr.icon)return Wr.icon(t);if(t===null)return null;if(Yn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Gr=nn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=ae(function(){return Ri(e.icon)}),i=ae(function(){return Ar("classes",Iu(e))}),o=ae(function(){return Ar("transform",typeof e.transform=="string"?Wr.transform(e.transform):e.transform)}),s=ae(function(){return Ar("mask",Ri(e.mask))}),l=ae(function(){return yu(a.value,Lt(Lt(Lt(Lt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Cn(l,function(u){if(!u)return Pu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ae(function(){return l.value?ds(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Tu={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},ps={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};const Nu={class:"ghost w-full mt-2 p-4 drag"},Mu=nn({__name:"KanbanCard",props:{id:{},title:{}},emits:["updateCards","dragging"],setup(t,{emit:e}){const n=t,r=e,a=oo(!1),i=(c,u)=>{c.dataTransfer&&(c.dataTransfer.dropEffect="move",c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("cardID",u))},o=()=>{a.value=!0},s=()=>{a.value=!1},l=c=>{c.dataTransfer&&(r("updateCards",{draggingID:c.dataTransfer.getData("cardID"),placementID:n.id}),a.value=!1)};return(c,u)=>(Xt(),Ee("div",{class:"my-2",onDrop:Tt(l,["prevent"]),onDragleave:Tt(s,["prevent"]),onDragover:Tt(o,["prevent"])},[dt("div",{class:"draggable border w-full p-2 bg-gray-100 rounded hover:bg-gray-200",draggable:"true",onDragstart:u[0]||(u[0]=m=>i(m,c.id))},Ui(c.title),33),vo(dt("div",Nu,null,512),[[Do,a.value]])],32))}}),Ru={class:"border h-full grow shrink basis-1/3 min-w-[250px] relative p-4"},Lu={class:"text-xl font-semibold text-center mb-4"},Fu=nn({__name:"KanbanLane",props:{id:{},title:{},cards:{}},emits:["updateCards","moveCard","addCard"],setup(t,{emit:e}){const n=t,r=e,a=s=>{r("updateCards",{...s,laneID:n.id})},i=s=>{s.dataTransfer&&r("moveCard",{draggingID:s.dataTransfer.getData("cardID"),laneID:n.id})},o=()=>{r("addCard",{title:"Placeholder",lane:n.id})};return(s,l)=>(Xt(),Ee("div",Ru,[dt("h2",Lu,Ui(s.title),1),(Xt(!0),Ee(wt,null,_o(s.cards,c=>(Xt(),No(Mu,{key:c.id,id:c.id,title:c.title,onUpdateCards:a},null,8,["id","title"]))),128)),vo(dt("div",{class:"ghost w-full mt-2 p-4",onDragover:l[0]||(l[0]=Tt(()=>{},["prevent"])),onDragleave:l[1]||(l[1]=Tt(()=>{},["prevent"])),onDrop:Tt(i,["prevent"])},null,544),[[Do,s.cards.length===0]]),dt("div",{class:"w-full hover:bg-gray-200 cursor-pointer border py-4 absolute bottom-0 left-0 text-center",onClick:Tt(o,["prevent"])},[it(oe(Gr),{icon:oe(ps),size:"2x"},null,8,["icon"])])]))}}),Du={class:"overflow-y-hidden mx-auto gap-x-8 flex flex-col md:py-10 md:flex-row relative w-screen h-dvh items-center md:justify-center"},ju={class:"flex h-full items-center justify-center text-gray-500"},$u={class:"overflow-x-auto flex flex-nowrap whitespace-nowrap h-full w-full gap-x-8 p-8 md:p-0"},zu={class:"bg-white z-10 grow-0 border p-10 w-screen md:w-[200px] h-[100px] md:h-full sticky bottom-0 left-0 right-0 hover:bg-gray-200"},Hu={class:"flex h-full items-center justify-center text-gray-500"},Uu=nn({__name:"KanbanBoard",setup(t){const e=oo(1),n=Ke([{id:1,title:"Ready For Development"},{id:2,title:"In-Progress"},{id:3,title:"Done"}]),r=Ke([]),a=l=>{const c=r.findIndex(w=>w.id==l.draggingID),u=r.findIndex(w=>w.id==l.placementID),m=l.laneID;r[c].lane=m;const v=r.splice(c,1);r.splice(u,0,...v)},i=l=>{const c=r.findIndex(m=>m.id==l.draggingID),u=l.laneID;r[c].lane=u},o=l=>{r.push({...l,id:e.value}),e.value++},s=l=>{if(l.dataTransfer){const c=r.findIndex(u=>{var m;return(u==null?void 0:u.id.toString())===((m=l.dataTransfer)==null?void 0:m.getData("cardID"))});r.splice(c,1)}};return(l,c)=>(Xt(),Ee("div",Du,[dt("div",{class:"bg-white z-10 grow-0 border p-10 w-screen md:w-[200px] h-[100px] md:h-full sticky top-0 left-0 hover:bg-gray-200",onDragover:c[0]||(c[0]=Tt(()=>{},["prevent"])),onDragleave:c[1]||(c[1]=Tt(()=>{},["prevent"])),onDrop:Tt(s,["prevent"])},[dt("div",ju,[it(oe(Gr),{icon:oe(Tu),size:"3x"},null,8,["icon"])])],32),dt("div",$u,[(Xt(!0),Ee(wt,null,_o(n,u=>(Xt(),No(Fu,{key:u.id,id:u.id,title:u.title,cards:r.filter(m=>m.lane===u.id),onUpdateCards:a,onMoveCard:i,onAddCard:o},null,8,["id","title","cards"]))),128))]),dt("div",zu,[dt("div",Hu,[it(oe(Gr),{icon:oe(ps),size:"3x"},null,8,["icon"])])])]))}}),Bu={id:"app"},Yu=dt("a",{href:"https://github.com/NuktukDev/Vue3KanbanBoard",title:"GitHub Repo",class:"hidden md:block text-center"},"Click for GitHub Repo",-1),Ku={class:"relative"},Vu=nn({__name:"App",setup(t){return(e,n)=>(Xt(),Ee("div",Bu,[Yu,dt("main",Ku,[it(Uu)])]))}});jf(Vu).mount("#app");
