import{_ as Rc,m as cs,o as xc,c as Mc,a as Dt,v as Oc,x as Lc,t as Yr,y as Fc}from"./index-2642dd3b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Vc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(f=64)),s.push(n[h],n[l],n[f],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(to(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw new Pc;const f=i<<2|a>>4;if(s.push(f),u!==64){const m=a<<4&240|u>>2;if(s.push(m),l!==64){const S=u<<6&192|l;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Pc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uc=function(e){const t=to(e);return eo.encodeByteArray(t,!0)},ln=function(e){return Uc(e).replace(/\./g,"")},$c=function(e){try{return eo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=()=>Bc().__FIREBASE_DEFAULTS__,jc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$c(e[1]);return t&&JSON.parse(t)},no=()=>{try{return qc()||jc()||Kc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Gc=e=>{var t,n;return(n=(t=no())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zc=e=>{const t=Gc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Hc=()=>{var e;return(e=no())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ln(JSON.stringify(n)),ln(JSON.stringify(o)),a].join(".")}function Xc(){try{return typeof indexedDB=="object"}catch{return!1}}function Yc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="FirebaseError";class ie extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Jc,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Zc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ie(r,a,s)}}function Zc(e,t){return e.replace(tu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const tu=/\{\$([^}]+)}/g;function bs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Jr(i)&&Jr(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Jr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return e&&e._delegate?e._delegate:e}class be{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Qc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(su(t))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=_t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_t){return this.instances.has(t)}getOptions(t=_t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=_t){return this.component?this.component.multipleInstances?t:_t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nu(e){return e===_t?void 0:e}function su(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new eu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const iu={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ou=N.INFO,au={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},cu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=au[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ro{constructor(t){this.name=t,this._logLevel=ou,this._logHandler=cu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const uu=(e,t)=>t.some(n=>e instanceof n);let Zr,ti;function hu(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lu(){return ti||(ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const io=new WeakMap,As=new WeakMap,oo=new WeakMap,us=new WeakMap,er=new WeakMap;function du(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(vt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&io.set(n,e)}).catch(()=>{}),er.set(t,e),t}function fu(e){if(As.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});As.set(e,t)}let Cs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return As.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pu(e){Cs=e(Cs)}function mu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(hs(this),t,...n);return oo.set(s,t.sort?t.sort():[t]),vt(s)}:lu().includes(e)?function(...t){return e.apply(hs(this),t),vt(io.get(this))}:function(...t){return vt(e.apply(hs(this),t))}}function gu(e){return typeof e=="function"?mu(e):(e instanceof IDBTransaction&&fu(e),uu(e,hu())?new Proxy(e,Cs):e)}function vt(e){if(e instanceof IDBRequest)return du(e);if(us.has(e))return us.get(e);const t=gu(e);return t!==e&&(us.set(e,t),er.set(t,e)),t}const hs=e=>er.get(e);function yu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const vu=["get","getKey","getAll","getAllKeys","count"],wu=["put","add","delete","clear"],ls=new Map;function ei(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=wu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ls.set(t,i),i}pu(e=>({...e,get:(t,n,s)=>ei(t,n)||e.get(t,n,s),has:(t,n)=>!!ei(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ds="@firebase/app",ni="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new ro("@firebase/app"),Iu="@firebase/app-compat",Su="@firebase/analytics-compat",bu="@firebase/analytics",Au="@firebase/app-check-compat",Cu="@firebase/app-check",Du="@firebase/auth",_u="@firebase/auth-compat",Nu="@firebase/database",ku="@firebase/database-compat",Ru="@firebase/functions",xu="@firebase/functions-compat",Mu="@firebase/installations",Ou="@firebase/installations-compat",Lu="@firebase/messaging",Fu="@firebase/messaging-compat",Vu="@firebase/performance",Pu="@firebase/performance-compat",Uu="@firebase/remote-config",$u="@firebase/remote-config-compat",Bu="@firebase/storage",qu="@firebase/storage-compat",ju="@firebase/firestore",Ku="@firebase/firestore-compat",Gu="firebase",zu="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]",Hu={[Ds]:"fire-core",[Iu]:"fire-core-compat",[bu]:"fire-analytics",[Su]:"fire-analytics-compat",[Cu]:"fire-app-check",[Au]:"fire-app-check-compat",[Du]:"fire-auth",[_u]:"fire-auth-compat",[Nu]:"fire-rtdb",[ku]:"fire-rtdb-compat",[Ru]:"fire-fn",[xu]:"fire-fn-compat",[Mu]:"fire-iid",[Ou]:"fire-iid-compat",[Lu]:"fire-fcm",[Fu]:"fire-fcm-compat",[Vu]:"fire-perf",[Pu]:"fire-perf-compat",[Uu]:"fire-rc",[$u]:"fire-rc-compat",[Bu]:"fire-gcs",[qu]:"fire-gcs-compat",[ju]:"fire-fst",[Ku]:"fire-fst-compat","fire-js":"fire-js",[Gu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Map,Ns=new Map;function Qu(e,t){try{e.container.addComponent(t)}catch(n){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fn(e){const t=e.name;if(Ns.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;Ns.set(t,e);for(const n of dn.values())Qu(n,e);return!0}function Wu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new so("app","Firebase",Xu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=zu;function ao(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:_s,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw wt.create("bad-app-name",{appName:String(r)});if(n||(n=Hc()),!n)throw wt.create("no-options");const i=dn.get(r);if(i){if(bs(n,i.options)&&bs(s,i.config))return i;throw wt.create("duplicate-app",{appName:r})}const o=new ru(r);for(const c of Ns.values())o.addComponent(c);const a=new Yu(n,s,o);return dn.set(r,a),a}function Zu(e=_s){const t=dn.get(e);if(!t&&e===_s)return ao();if(!t)throw wt.create("no-app",{appName:e});return t}function zt(e,t,n){var s;let r=(s=Hu[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}fn(new be(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="firebase-heartbeat-database",eh=1,Ae="firebase-heartbeat-store";let ds=null;function co(){return ds||(ds=yu(th,eh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})})),ds}async function nh(e){try{return(await co()).transaction(Ae).objectStore(Ae).get(uo(e))}catch(t){if(t instanceof ie)Ft.warn(t.message);else{const n=wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(n.message)}}}async function si(e,t){try{const s=(await co()).transaction(Ae,"readwrite");return await s.objectStore(Ae).put(t,uo(e)),s.done}catch(n){if(n instanceof ie)Ft.warn(n.message);else{const s=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(s.message)}}}function uo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=1024,rh=30*24*60*60*1e3;class ih{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ah(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ri();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=rh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ri(),{heartbeatsToSend:n,unsentEntries:s}=oh(this._heartbeatsCache.heartbeats),r=ln(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ri(){return new Date().toISOString().substring(0,10)}function oh(e,t=sh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ii(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ii(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ah{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xc()?Yc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return si(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return si(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ii(e){return ln(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(e){fn(new be("platform-logger",t=>new Eu(t),"PRIVATE")),fn(new be("heartbeat",t=>new ih(t),"PRIVATE")),zt(Ds,ni,e),zt(Ds,ni,"esm2017"),zt("fire-js","")}ch("");var uh="firebase",hh="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(uh,hh,"app");var lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,nr=nr||{},I=lh||self;function pn(){}function Nn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ve(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function dh(e){return Object.prototype.hasOwnProperty.call(e,fs)&&e[fs]||(e[fs]=++fh)}var fs="closure_uid_"+(1e9*Math.random()>>>0),fh=0;function ph(e,t,n){return e.call.apply(e.bind,arguments)}function mh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=ph:X=mh,X.apply(null,arguments)}function Je(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var gh=0;bt.prototype.s=!1;bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gh!=0)&&dh(this)};bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ho=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function sr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function oi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Nn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var yh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",pn,t),I.removeEventListener("test",pn,t)}catch{}return e}();function mn(e){return/^[\s\xa0]*$/.test(e)}var ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ps(e,t){return e<t?-1:e>t?1:0}function kn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return kn().indexOf(e)!=-1}function rr(e){return rr[" "](e),e}rr[" "]=pn;function vh(e){var t=Th;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var wh=at("Opera"),Xt=at("Trident")||at("MSIE"),lo=at("Edge"),ks=lo||Xt,fo=at("Gecko")&&!(kn().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Eh=kn().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function po(){var e=I.document;return e?e.documentMode:void 0}var gn;t:{var ms="",gs=function(){var e=kn();if(fo)return/rv:([^\);]+)(\)|;)/.exec(e);if(lo)return/Edge\/([\d\.]+)/.exec(e);if(Xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Eh)return/WebKit\/(\S+)/.exec(e);if(wh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(gs&&(ms=gs?gs[1]:""),Xt){var ys=po();if(ys!=null&&ys>parseFloat(ms)){gn=String(ys);break t}}gn=ms}var Th={};function Ih(){return vh(function(){let e=0;const t=ai(String(gn)).split("."),n=ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ps(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ps(r[2].length==0,i[2].length==0)||ps(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Rs;if(I.document&&Xt){var ci=po();Rs=ci||parseInt(gn,10)||void 0}else Rs=void 0;var Sh=Rs;function Ce(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fo){t:{try{rr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:bh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ce.X.h.call(this)}}G(Ce,Y);var bh={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),Ah=0;function Ch(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++Ah,this.ba=this.ea=!1}function Rn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ir(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function mo(e){const t={};for(const n in e)t[n]=e[n];return t}const ui="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function go(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<ui.length;i++)n=ui[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function xn(e){this.src=e,this.g={},this.h=0}xn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ms(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Ch(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function xs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ho(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Rn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ms(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var or="closure_lm_"+(1e6*Math.random()|0),vs={};function yo(e,t,n,s,r){if(s&&s.once)return wo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)yo(e,t[i],n,s,r);return null}return n=ur(n),e&&e[Pe]?e.N(t,n,Ve(s)?!!s.capture:!!s,r):vo(e,t,n,!1,s,r)}function vo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ve(r)?!!r.capture:!!r,a=cr(e);if(a||(e[or]=a=new xn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Dh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)yh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(To(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Dh(){function e(n){return t.call(e.src,e.listener,n)}const t=_h;return e}function wo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)wo(e,t[i],n,s,r);return null}return n=ur(n),e&&e[Pe]?e.O(t,n,Ve(s)?!!s.capture:!!s,r):vo(e,t,n,!0,s,r)}function Eo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Eo(e,t[i],n,s,r);else s=Ve(s)?!!s.capture:!!s,n=ur(n),e&&e[Pe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ms(i,n,s,r),-1<n&&(Rn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=cr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ms(t,n,s,r)),(n=-1<e?t[e]:null)&&ar(n))}function ar(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Pe])xs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(To(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=cr(t))?(xs(n,e),n.h==0&&(n.src=null,t[or]=null)):Rn(e)}}}function To(e){return e in vs?vs[e]:vs[e]="on"+e}function _h(e,t){if(e.ba)e=!0;else{t=new Ce(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ar(e),e=n.call(s,t)}return e}function cr(e){return e=e[or],e instanceof xn?e:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function ur(e){return typeof e=="function"?e:(e[ws]||(e[ws]=function(t){return e.handleEvent(t)}),e[ws])}function q(){bt.call(this),this.i=new xn(this),this.P=this,this.I=null}G(q,bt);q.prototype[Pe]=!0;q.prototype.removeEventListener=function(e,t,n,s){Eo(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var r=t;t=new Y(s,e),go(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ze(o,s,!0,t)&&r}if(o=t.g=e,r=Ze(o,s,!0,t)&&r,r=Ze(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Ze(o,s,!1,t)&&r}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Rn(n[s]);delete e.g[t],e.h--}}this.I=null};q.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&xs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var hr=I.JSON.stringify;function Nh(){var e=bo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class kh{constructor(){this.h=this.g=null}add(t,n){const s=Io.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Io=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Rh,e=>e.reset());class Rh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xh(e){I.setTimeout(()=>{throw e},0)}function So(e,t){Os||Mh(),Ls||(Os(),Ls=!0),bo.add(e,t)}var Os;function Mh(){var e=I.Promise.resolve(void 0);Os=function(){e.then(Oh)}}var Ls=!1,bo=new kh;function Oh(){for(var e;e=Nh();){try{e.h.call(e.g)}catch(n){xh(n)}var t=Io;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ls=!1}function Mn(e,t){q.call(this),this.h=e||1,this.g=t||I,this.j=X(this.lb,this),this.l=Date.now()}G(Mn,q);y=Mn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(lr(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lr(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){Mn.X.M.call(this),lr(this),delete this.g};function dr(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ao(e){e.g=dr(()=>{e.g=null,e.i&&(e.i=!1,Ao(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Lh extends bt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ao(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){bt.call(this),this.h=e,this.g={}}G(De,bt);var hi=[];function Co(e,t,n,s){Array.isArray(n)||(n&&(hi[0]=n.toString()),n=hi);for(var r=0;r<n.length;r++){var i=yo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Do(e){ir(e.g,function(t,n){this.g.hasOwnProperty(n)&&ar(t)},e),e.g={}}De.prototype.M=function(){De.X.M.call(this),Do(this)};De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function On(){this.g=!0}On.prototype.Aa=function(){this.g=!1};function Fh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Vh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Gt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Uh(e,n)+(s?" "+s:"")})}function Ph(e,t){e.info(function(){return"TIMEOUT: "+t})}On.prototype.info=function(){};function Uh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return hr(n)}catch{return t}}var Ut={},li=null;function Ln(){return li=li||new q}Ut.Pa="serverreachability";function _o(e){Y.call(this,Ut.Pa,e)}G(_o,Y);function _e(e){const t=Ln();K(t,new _o(t))}Ut.STAT_EVENT="statevent";function No(e,t){Y.call(this,Ut.STAT_EVENT,e),this.stat=t}G(No,Y);function tt(e){const t=Ln();K(t,new No(t,e))}Ut.Qa="timingevent";function ko(e,t){Y.call(this,Ut.Qa,e),this.size=t}G(ko,Y);function Ue(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Fn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ro={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fr(){}fr.prototype.h=null;function di(e){return e.h||(e.h=e.i())}function xo(){}var $e={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function pr(){Y.call(this,"d")}G(pr,Y);function mr(){Y.call(this,"c")}G(mr,Y);var Fs;function Vn(){}G(Vn,fr);Vn.prototype.g=function(){return new XMLHttpRequest};Vn.prototype.i=function(){return{}};Fs=new Vn;function Be(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new De(this),this.O=$h,e=ks?125:void 0,this.T=new Mn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mo}function Mo(){this.i=null,this.g="",this.h=!1}var $h=45e3,Vs={},yn={};y=Be.prototype;y.setTimeout=function(e){this.O=e};function Ps(e,t,n){e.K=1,e.v=Un(pt(t)),e.s=n,e.P=!0,Oo(e,null)}function Oo(e,t){e.F=Date.now(),qe(e),e.A=pt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),qo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Mo,e.g=ua(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Lh(X(e.La,e,e.g),e.N)),Co(e.S,e.g,"readystatechange",e.ib),t=e.H?mo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),_e(),Fh(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&ft(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=ft(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||ks||this.g&&(this.h.h||this.g.fa()||gi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?_e(3):_e(2)),Pn(this);var n=this.g.aa();this.Y=n;e:if(Lo(this)){var s=gi(this.g);e="";var r=s.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Ee(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Vh(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mn(a)){var u=a;break e}}u=null}if(n=u)Gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Us(this,n);else{this.i=!1,this.o=3,tt(12),Nt(this),Ee(this);break t}}this.P?(Fo(this,h,o),ks&&this.i&&h==3&&(Co(this.S,this.T,"tick",this.hb),this.T.start())):(Gt(this.j,this.m,o,null),Us(this,o)),h==4&&Nt(this),this.i&&!this.I&&(h==4?ia(this.l,this):(this.i=!1,qe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Nt(this),Ee(this)}}}catch{}finally{}};function Lo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Fo(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Bh(e,n),r==yn){t==4&&(e.o=4,tt(14),s=!1),Gt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Vs){e.o=4,tt(15),Gt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Gt(e.j,e.m,r,null),Us(e,r);Lo(e)&&r!=yn&&r!=Vs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ir(t),t.K=!0,tt(11))):(Gt(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),Ee(e))}y.hb=function(){if(this.g){var e=ft(this.g),t=this.g.fa();this.C<t.length&&(Pn(this),Fo(this,e,t),this.i&&e!=4&&qe(this))}};function Bh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?yn:(n=Number(t.substring(n,s)),isNaN(n)?Vs:(s+=1,s+n>t.length?yn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Nt(this)};function qe(e){e.V=Date.now()+e.O,Vo(e,e.O)}function Vo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ue(X(e.gb,e),t)}function Pn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ph(this.j,this.A),this.K!=2&&(_e(),tt(17)),Nt(this),this.o=2,Ee(this)):Vo(this,this.V-e)};function Ee(e){e.l.G==0||e.I||ia(e.l,e)}function Nt(e){Pn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,lr(e.T),Do(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Us(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||$s(n.h,e))){if(!e.J&&$s(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)En(n),qn(n);else break t;Tr(n),tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ue(X(n.cb,n),6e3));if(1>=Go(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kt(n,11)}else if((e.J||n.g==e)&&En(n),!mn(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const S=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=s.h;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(gr(i,i.h),i.h=null))}if(s.D){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,M(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=ca(s,s.H?s.ka:null,s.V),o.J){zo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Pn(a),qe(a)),s.g=o}else sa(s);0<n.i.length&&jn(n)}else u[0]!="stop"&&u[0]!="close"||kt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kt(n,7):Er(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_e(4)}catch{}}function qh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Nn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function jh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Nn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Po(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Nn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=jh(e),s=qh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function xt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof xt){this.h=t!==void 0?t:e.h,vn(this,e.j),this.s=e.s,this.g=e.g,wn(this,e.m),this.l=e.l,t=e.i;var n=new Ne;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),fi(this,n),this.o=e.o}else e&&(n=String(e).match(Uo))?(this.h=!!t,vn(this,n[1]||"",!0),this.s=ge(n[2]||""),this.g=ge(n[3]||"",!0),wn(this,n[4]),this.l=ge(n[5]||"",!0),fi(this,n[6]||"",!0),this.o=ge(n[7]||"")):(this.h=!!t,this.i=new Ne(null,this.h))}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ye(t,pi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ye(t,pi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ye(n,n.charAt(0)=="/"?Hh:zh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ye(n,Wh)),e.join("")};function pt(e){return new xt(e)}function vn(e,t,n){e.j=n?ge(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function wn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function fi(e,t,n){t instanceof Ne?(e.i=t,Xh(e.i,e.h)):(n||(t=ye(t,Qh)),e.i=new Ne(t,e.h))}function M(e,t,n){e.i.set(t,n)}function Un(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ge(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ye(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Gh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var pi=/[#\/\?@]/g,zh=/[#\?:]/g,Hh=/[#\?]/g,Qh=/[#\?@]/g,Wh=/#/g;function Ne(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&Kh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Ne.prototype;y.add=function(e,t){At(this),this.i=null,e=oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $o(e,t){At(e),t=oe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Bo(e,t){return At(e),t=oe(e,t),e.g.has(t)}y.forEach=function(e,t){At(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.oa=function(){At(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.W=function(e){At(this);let t=[];if(typeof e=="string")Bo(this,e)&&(t=t.concat(this.g.get(oe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return At(this),this.i=null,e=oe(this,e),Bo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function qo(e,t,n){$o(e,t),0<n.length&&(e.i=null,e.g.set(oe(e,t),sr(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Xh(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($o(this,s),qo(this,r,n))},e)),e.j=t}var Yh=class{constructor(t,n){this.h=t,this.g=n}};function jo(e){this.l=e||Jh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jh=10;function Ko(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Go(e){return e.h?1:e.g?e.g.size:0}function $s(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function gr(e,t){e.g?e.g.add(t):e.h=t}function zo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}jo.prototype.cancel=function(){if(this.i=Ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ho(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return sr(e.i)}function yr(){}yr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};yr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function Zh(){this.g=new yr}function tl(e,t,n){const s=n||"";try{Po(e,function(r,i){let o=r;Ve(r)&&(o=hr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function el(e,t){const n=new On;if(I.Image){const s=new Image;s.onload=Je(tn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Je(tn,n,s,"TestLoadImage: error",!1,t),s.onabort=Je(tn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Je(tn,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function tn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function je(e){this.l=e.ac||null,this.j=e.jb||!1}G(je,fr);je.prototype.g=function(){return new $n(this.l,this.j)};je.prototype.i=function(e){return function(){return e}}({});function $n(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=vr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G($n,q);var vr=0;y=$n.prototype;y.open=function(e,t){if(this.readyState!=vr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ke(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=vr};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ke(this)),this.g&&(this.readyState=3,ke(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Qo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ke(this):ke(this),this.readyState==3&&Qo(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Ke(this))};y.Ua=function(e){this.g&&(this.response=e,Ke(this))};y.ga=function(){this.g&&Ke(this)};function Ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ke(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ke(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var nl=I.JSON.parse;function O(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wo,this.K=this.L=!1}G(O,q);var Wo="",sl=/^https?$/i,rl=["POST","PUT"];y=O.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fs.g(),this.C=this.u?di(this.u):di(Fs),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){mi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&e instanceof I.FormData,!(0<=ho(rl,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jo(this),0<this.B&&((this.K=il(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=dr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){mi(this,i)}};function il(e){return Xt&&Ih()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof nr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function mi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xo(e),Bn(e)}function Xo(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Bn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),O.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Yo(this):this.fb())};y.fb=function(){Yo(this)};function Yo(e){if(e.h&&typeof nr<"u"&&(!e.C[1]||ft(e)!=4||e.aa()!=2)){if(e.v&&ft(e)==4)dr(e.Ha,0,e);else if(K(e,"readystatechange"),ft(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Uo)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!sl.test(r?r.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<ft(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Xo(e)}}finally{Bn(e)}}}}function Bn(e,t){if(e.g){Jo(e);const n=e.g,s=e.C[0]?pn:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function Jo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function ft(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),nl(t)}};function gi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Wo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zo(e){let t="";return ir(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function wr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Zo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function me(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ta(e){this.Ca=0,this.i=[],this.j=new On,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=me("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=me("baseRetryDelayMs",5e3,e),this.bb=me("retryDelaySeedMs",1e4,e),this.$a=me("forwardChannelMaxRetries",2,e),this.ta=me("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new jo(e&&e.concurrentRequestLimit),this.Fa=new Zh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=ta.prototype;y.ma=8;y.G=1;function Er(e){if(ea(e),e.G==3){var t=e.U++,n=pt(e.F);M(n,"SID",e.I),M(n,"RID",t),M(n,"TYPE","terminate"),Ge(e,n),t=new Be(e,e.j,t,void 0),t.K=2,t.v=Un(pt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=ua(t.l,null),t.g.da(t.v)),t.F=Date.now(),qe(t)}aa(e)}function qn(e){e.g&&(Ir(e),e.g.cancel(),e.g=null)}function ea(e){qn(e),e.u&&(I.clearTimeout(e.u),e.u=null),En(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function jn(e){Ko(e.h)||e.m||(e.m=!0,So(e.Ja,e),e.C=0)}function ol(e,t){return Go(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ue(X(e.Ja,e,t),oa(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Be(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=mo(i),go(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=na(this,r,t),n=pt(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),Ge(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Zo(i)))+"&"+t:this.o&&wr(n,this.o,i)),gr(this.h,r),this.Ya&&M(n,"TYPE","init"),this.O?(M(n,"$req",t),M(n,"SID","null"),r.Z=!0,Ps(r,n,null)):Ps(r,n,t),this.G=2}}else this.G==3&&(e?yi(this,e):this.i.length==0||Ko(this.h)||yi(this))};function yi(e,t){var n;t?n=t.m:n=e.U++;const s=pt(e.F);M(s,"SID",e.I),M(s,"RID",n),M(s,"AID",e.T),Ge(e,s),e.o&&e.s&&wr(s,e.o,e.s),n=new Be(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=na(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gr(e.h,n),Ps(n,s,t)}function Ge(e,t){e.ia&&ir(e.ia,function(n,s){M(t,s,n)}),e.l&&Po({},function(n,s){M(t,s,n)})}function na(e,t,n){n=Math.min(e.i.length,n);var s=e.l?X(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{tl(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function sa(e){e.g||e.u||(e.Z=1,So(e.Ia,e),e.A=0)}function Tr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ue(X(e.Ia,e),oa(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,ra(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ue(X(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),qn(this),ra(this))};function Ir(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function ra(e){e.g=new Be(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=pt(e.sa);M(t,"RID","rpc"),M(t,"SID",e.I),M(t,"CI",e.L?"0":"1"),M(t,"AID",e.T),M(t,"TYPE","xmlhttp"),Ge(e,t),e.o&&e.s&&wr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Un(pt(t)),n.s=null,n.P=!0,Oo(n,e)}y.cb=function(){this.v!=null&&(this.v=null,qn(this),Tr(this),tt(19))};function En(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function ia(e,t){var n=null;if(e.g==t){En(e),Ir(e),e.g=null;var s=2}else if($s(e.h,t))n=t.D,zo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Ln(),K(s,new ko(s,n)),jn(e)}else sa(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&ol(e,t)||s==2&&Tr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:kt(e,5);break;case 4:kt(e,10);break;case 3:kt(e,6);break;default:kt(e,2)}}}function oa(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function kt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=X(e.kb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||vn(n,"https"),Un(n)),el(n.toString(),s)}else tt(2);e.G=0,e.l&&e.l.va(t),aa(e),ea(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function aa(e){if(e.G=0,e.la=[],e.l){const t=Ho(e.h);(t.length!=0||e.i.length!=0)&&(oi(e.la,t),oi(e.la,e.i),e.h.i.length=0,sr(e.i),e.i.length=0),e.l.ua()}}function ca(e,t,n){var s=n instanceof xt?pt(n):new xt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),wn(s,s.m);else{var r=I.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new xt(null,void 0);s&&vn(i,s),t&&(i.g=t),r&&wn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&M(s,n,t),M(s,"VER",e.ma),Ge(e,s),s}function ua(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new O(new je({jb:!0})):new O(e.ra),t.Ka(e.H),t}function ha(){}y=ha.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function Tn(){if(Xt&&!(10<=Number(Sh)))throw Error("Environmental error: no available transport.")}Tn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){q.call(this),this.g=new ta(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!mn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!mn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ae(this)}G(it,q);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ca(e,null,e.V),jn(e)};it.prototype.close=function(){Er(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=hr(e),e=n);t.i.push(new Yh(t.ab++,e)),t.G==3&&jn(t)};it.prototype.M=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,it.X.M.call(this)};function la(e){pr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(la,pr);function da(){mr.call(this),this.status=1}G(da,mr);function ae(e){this.g=e}G(ae,ha);ae.prototype.xa=function(){K(this.g,"a")};ae.prototype.wa=function(e){K(this.g,new la(e))};ae.prototype.va=function(e){K(this.g,new da)};ae.prototype.ua=function(){K(this.g,"b")};Tn.prototype.createWebChannel=Tn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Fn.NO_ERROR=0;Fn.TIMEOUT=8;Fn.HTTP_ERROR=6;Ro.COMPLETE="complete";xo.EventType=$e;$e.OPEN="a";$e.CLOSE="b";$e.ERROR="c";$e.MESSAGE="d";q.prototype.listen=q.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;var al=function(){return new Tn},cl=function(){return Ln()},Es=Fn,ul=Ro,hl=Ut,vi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ll=je,en=xo,dl=O;const wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ce="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new ro("@firebase/firestore");function Ei(){return Vt.logLevel}function v(e,...t){if(Vt.logLevel<=N.DEBUG){const n=t.map(Sr);Vt.debug(`Firestore (${ce}): ${e}`,...n)}}function mt(e,...t){if(Vt.logLevel<=N.ERROR){const n=t.map(Sr);Vt.error(`Firestore (${ce}): ${e}`,...n)}}function Bs(e,...t){if(Vt.logLevel<=N.WARN){const n=t.map(Sr);Vt.warn(`Firestore (${ce}): ${e}`,...n)}}function Sr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: `+e;throw mt(t),new Error(t)}function R(e,t){e||T()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends ie{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(H.UNAUTHENTICATED))}shutdown(){}}class pl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ml{constructor(t){this.t=t,this.currentUser=H.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new fa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new H(t)}}class gl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=H.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class yl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new gl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new vl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=El(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function Yt(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new P(0,0))}static max(){return new b(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Re{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new g(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Tl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Re{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return Tl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new g(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new g(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}function Il(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=b.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new Tt(r,w.empty(),t)}function Sl(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(b.min(),w.empty(),-1)}static max(){return new Tt(b.max(),w.empty(),-1)}}function bl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Al)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new p((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new p((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function He(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}br.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new xe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $t(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ma(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){return e==null}function In(e){return e===0&&1/e==-1/0}function _l(e){return typeof e=="number"&&Number.isInteger(e)&&!In(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Nl("Invalid base64 string: "+r):r}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(R(!!e),typeof e=="string"){let t=0;const n=kl.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jt(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ya(e){const t=e.mapValue.fields.__previous_value__;return ga(t)?ya(t):t}function Me(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ga(e)?4:Rl(e)?9007199254740991:10:T()}function lt(e,t){if(e===t)return!0;const n=Pt(e);if(n!==Pt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Me(e).isEqual(Me(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=It(s.timestampValue),o=It(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Jt(s.bytesValue).isEqual(Jt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return F(s.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return F(s.integerValue)===F(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=F(s.doubleValue),o=F(r.doubleValue);return i===o?In(i)===In(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Yt(e.arrayValue.values||[],t.arrayValue.values||[],lt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ti(i)!==Ti(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!lt(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Oe(e,t){return(e.values||[]).find(n=>lt(n,t))!==void 0}function Zt(e,t){if(e===t)return 0;const n=Pt(e),s=Pt(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=F(r.integerValue||r.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ii(e.timestampValue,t.timestampValue);case 4:return Ii(Me(e),Me(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Jt(r),a=Jt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=k(o[c],a[c]);if(u!==0)return u}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=k(F(r.latitude),F(i.latitude));return o!==0?o:k(F(r.longitude),F(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Zt(o[c],a[c]);if(u)return u}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===nn.mapValue&&i===nn.mapValue)return 0;if(r===nn.mapValue)return 1;if(i===nn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=k(a[h],u[h]);if(l!==0)return l;const f=Zt(o[a[h]],c[u[h]]);if(f!==0)return f}return k(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ii(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=It(e),s=It(t),r=k(n.seconds,s.seconds);return r!==0?r:k(n.nanos,s.nanos)}function te(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=It(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=qs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${qs(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function Si(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function js(e){return!!e&&"integerValue"in e}function Ar(e){return!!e&&"arrayValue"in e}function bi(e){return!!e&&"nullValue"in e}function Ai(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function an(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $t(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Te(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Rl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n){this.position=t,this.inclusive=n}}function Ci(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Zt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Di(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!lt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{}class V extends va{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Ml(t,n,s):n==="array-contains"?new Fl(t,s):n==="in"?new Vl(t,s):n==="not-in"?new Pl(t,s):n==="array-contains-any"?new Ul(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Ol(t,s):new Ll(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zt(n,this.value)):n!==null&&Pt(this.value)===Pt(n)&&this.matchesComparison(Zt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends va{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new ot(t,n)}matches(t){return wa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function wa(e){return e.op==="and"}function Ea(e){return xl(e)&&wa(e)}function xl(e){for(const t of e.filters)if(t instanceof ot)return!1;return!0}function Ks(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+te(e.value);if(Ea(e))return e.filters.map(t=>Ks(t)).join(",");{const t=e.filters.map(n=>Ks(n)).join(",");return`${e.op}(${t})`}}function Ta(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&lt(n.value,s.value)}(e,t):e instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ta(i,s.filters[o]),!0):!1}(e,t):void T()}function Ia(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${te(t.value)}`}(e):e instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Ia).join(" ,")+"}"}(e):"Filter"}class Ml extends V{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Ol extends V{constructor(t,n){super(t,"in",n),this.keys=Sa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ll extends V{constructor(t,n){super(t,"not-in",n),this.keys=Sa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Fl extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ar(n)&&Oe(n.arrayValue,this.value)}}class Vl extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Oe(this.value.arrayValue,n)}}class Pl extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if(Oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Oe(this.value.arrayValue,n)}}class Ul extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ar(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Oe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n="asc"){this.field=t,this.dir=n}}function $l(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sn(this.root,t,this.comparator,!0)}}class sn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??j.RED,this.left=r??j.EMPTY,this.right=i??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new j(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return j.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _i(this.data.getIterator())}getIteratorFrom(t){return new _i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new U(this.comparator);return n.data=t,n}}class _i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new rt([])}unionWith(t){let n=new U(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Yt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!an(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Te(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());an(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];an(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){$t(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new et(Te(this.value))}}function ba(e){const t=[];return $t(e.fields,(n,s)=>{const r=new W([n]);if(an(s)){const i=ba(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,b.min(),b.min(),b.min(),et.empty(),0)}static newFoundDocument(t,n,s,r){return new Q(t,1,n,b.min(),s,r,0)}static newNoDocument(t,n){return new Q(t,2,n,b.min(),b.min(),et.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,b.min(),b.min(),et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Ni(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Bl(e,t,n,s,r,i,o)}function Cr(e){const t=A(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ks(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Kn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>te(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>te(s)).join(",")),t._t=n}return t._t}function Dr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!$l(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ta(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Di(e.startAt,t.startAt)&&Di(e.endAt,t.endAt)}function Gs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function ql(e,t,n,s,r,i,o,a){return new ue(e,t,n,s,r,i,o,a)}function _r(e){return new ue(e)}function ki(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Nr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Gn(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Aa(e){return e.collectionGroup!==null}function Qt(e){const t=A(e);if(t.wt===null){t.wt=[];const n=Gn(t),s=Nr(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Ht(n)),t.wt.push(new Ht(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Ht(W.keyField(),i))}}}return t.wt}function gt(e){const t=A(e);if(!t.gt)if(t.limitType==="F")t.gt=Ni(t.path,t.collectionGroup,Qt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Qt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ht(i.field,o))}const s=t.endAt?new Sn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sn(t.startAt.position,t.startAt.inclusive):null;t.gt=Ni(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.gt}function zs(e,t){t.getFirstInequalityField(),Gn(e);const n=e.filters.concat([t]);return new ue(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Hs(e,t,n){return new ue(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zn(e,t){return Dr(gt(e),gt(t))&&e.limitType===t.limitType}function Ca(e){return`${Cr(gt(e))}|lt:${e.limitType}`}function Qs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ia(s)).join(", ")}]`),Kn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>te(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>te(s)).join(",")),`Target(${n})`}(gt(e))}; limitType=${e.limitType})`}function Hn(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Qt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ci(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Qt(n),s)||n.endAt&&!function(r,i,o){const a=Ci(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Qt(n),s))}(e,t)}function jl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Da(e){return(t,n)=>{let s=!1;for(const r of Qt(e)){const i=Kl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Kl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Zt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:In(t)?"-0":t}}function Na(e){return{integerValue:""+e}}function Gl(e,t){return _l(t)?Na(t):_a(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this._=void 0}}function zl(e,t,n){return e instanceof bn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof ee?Ra(e,t):e instanceof Le?xa(e,t):function(s,r){const i=ka(s,r),o=Ri(i)+Ri(s.It);return js(i)&&js(s.It)?Na(o):_a(s.Tt,o)}(e,t)}function Hl(e,t,n){return e instanceof ee?Ra(e,t):e instanceof Le?xa(e,t):n}function ka(e,t){return e instanceof An?js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class bn extends Qn{}class ee extends Qn{constructor(t){super(),this.elements=t}}function Ra(e,t){const n=Ma(t);for(const s of e.elements)n.some(r=>lt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Le extends Qn{constructor(t){super(),this.elements=t}}function xa(e,t){let n=Ma(t);for(const s of e.elements)n=n.filter(r=>!lt(r,s));return{arrayValue:{values:n}}}class An extends Qn{constructor(t,n){super(),this.Tt=t,this.It=n}}function Ri(e){return F(e.integerValue||e.doubleValue)}function Ma(e){return Ar(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,n){this.field=t,this.transform=n}}function Wl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ee&&s instanceof ee||n instanceof Le&&s instanceof Le?Yt(n.elements,s.elements,lt):n instanceof An&&s instanceof An?lt(n.It,s.It):n instanceof bn&&s instanceof bn}(e.transform,t.transform)}class Xl{constructor(t,n){this.version=t,this.transformResults=n}}class ct{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wn{}function Oa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Fa(e.key,ct.none()):new Qe(e.key,e.data,ct.none());{const n=e.data,s=et.empty();let r=new U(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ct(e.key,s,new rt(r.toArray()),ct.none())}}function Yl(e,t,n){e instanceof Qe?function(s,r,i){const o=s.value.clone(),a=Mi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ct?function(s,r,i){if(!cn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Mi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(La(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ie(e,t,n,s){return e instanceof Qe?function(r,i,o,a){if(!cn(r.precondition,i))return o;const c=r.value.clone(),u=Oi(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ct?function(r,i,o,a){if(!cn(r.precondition,i))return o;const c=Oi(r.fieldTransforms,a,i),u=i.data;return u.setAll(La(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return cn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Jl(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=ka(s.transform,r||null);i!=null&&(n===null&&(n=et.empty()),n.set(s.field,i))}return n||null}function xi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Yt(n,s,(r,i)=>Wl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qe extends Wn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ct extends Wn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function La(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Mi(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Hl(o,a,n[r]))}return s}function Oi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,zl(i,o,t))}return s}class Fa extends Wn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zl extends Wn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,D;function ed(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Va(e){if(e===void 0)return mt("GRPC error has no .code"),d.UNKNOWN;switch(e){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(D=L||(L={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){$t(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ma(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new $(w.comparator);function yt(){return nd}const Pa=new $(w.comparator);function ve(...e){let t=Pa;for(const n of e)t=t.insert(n.key,n);return t}function Ua(e){let t=Pa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Rt(){return Se()}function $a(){return Se()}function Se(){return new he(e=>e.toString(),(e,t)=>e.isEqual(t))}const sd=new $(w.comparator),rd=new U(w.comparator);function C(...e){let t=rd;for(const n of e)t=t.add(n);return t}const id=new U(k);function Ba(){return id}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Xn(b.min(),r,Ba(),yt(),C())}}class We{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new We(s,n,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n,s,r){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=r}}class qa{constructor(t,n){this.targetId=t,this.Rt=n}}class ja{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Li{constructor(){this.Pt=0,this.vt=Vi(),this.bt=J.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.bt=t)}Nt(){let t=C(),n=C(),s=C();return this.vt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new We(this.bt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=Vi()}$t(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class od{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=yt(),this.Kt=Fi(),this.Gt=new U(k)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(t){const n=t.targetId,s=t.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Gs(i))if(s===0){const o=new w(i.path);this.zt(n,o,Q.newNoDocument(o,b.min()))}else R(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Gs(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Q.newNoDocument(c,t))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=C();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new Xn(t,n,this.Gt,this.Ut,s);return this.Ut=yt(),this.Kt=Fi(),this.Gt=new U(k),r}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const r=this.Ht(t);this.ne(t,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Ht(t).Ot()}Ht(t){let n=this.qt.get(t);return n||(n=new Li,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new U(k),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new Li),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function Fi(){return new $(w.comparator)}function Vi(){return new $(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ud=(()=>({and:"AND",or:"OR"}))();class hd{constructor(t,n){this.databaseId=t,this.yt=n}}function Cn(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ka(e,t){return e.yt?t.toBase64():t.toUint8Array()}function ld(e,t){return Cn(e,t.toTimestamp())}function ut(e){return R(!!e),b.fromTimestamp(function(t){const n=It(t);return new P(n.seconds,n.nanos)}(e))}function kr(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ga(e){const t=x.fromString(e);return R(Wa(t)),t}function Ws(e,t){return kr(e.databaseId,t.path)}function Ts(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(za(n))}function Xs(e,t){return kr(e.databaseId,t)}function dd(e){const t=Ga(e);return t.length===4?x.emptyPath():za(t)}function Ys(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function za(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Pi(e,t,n){return{name:Ws(e,t),fields:n.value.mapValue.fields}}function fd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.yt?(R(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:Va(c.code);return new g(u,c.message||"")}(o);n=new ja(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ts(e,s.document.name),i=ut(s.document.updateTime),o=s.document.createTime?ut(s.document.createTime):b.min(),a=new et({mapValue:{fields:s.document.fields}}),c=Q.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new un(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Ts(e,s.document),i=s.readTime?ut(s.readTime):b.min(),o=Q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Ts(e,s.document),i=s.removedTargetIds||[];n=new un([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new td(r),o=s.targetId;n=new qa(o,i)}}return n}function pd(e,t){let n;if(t instanceof Qe)n={update:Pi(e,t.key,t.value)};else if(t instanceof Fa)n={delete:Ws(e,t.key)};else if(t instanceof Ct)n={update:Pi(e,t.key,t.data),updateMask:Sd(t.fieldMask)};else{if(!(t instanceof Zl))return T();n={verify:Ws(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof bn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ee)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Le)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof An)return{fieldPath:i.field.canonicalString(),increment:o.It};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ld(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(e,t.precondition)),n}function md(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ut(s.updateTime):ut(r);return i.isEqual(b.min())&&(i=ut(r)),new Xl(i,s.transformResults||[])}(n,t))):[]}function gd(e,t){return{documents:[Xs(e,t.path)]}}function yd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Xs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Qa(ot.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:jt(h.field),direction:Ed(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Kn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function vd(e){let t=dd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Ha(h);return l instanceof ot&&Ea(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Ht(Kt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Kn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,f=h.values||[];return new Sn(f,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,f=h.values||[];return new Sn(f,l)}(n.endAt)),ql(t,r,o,i,a,"F",c,u)}function wd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ha(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Kt(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Kt(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kt(t.unaryFilter.field);return V.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kt(t.unaryFilter.field);return V.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return V.create(Kt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(n=>Ha(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function Ed(e){return ad[e]}function Td(e){return cd[e]}function Id(e){return ud[e]}function jt(e){return{fieldPath:e.canonicalString()}}function Kt(e){return W.fromServerFormat(e.fieldPath)}function Qa(e){return e instanceof V?function(t){if(t.op==="=="){if(Ai(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NAN"}};if(bi(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ai(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NAN"}};if(bi(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(t.field),op:Td(t.op),value:t.value}}}(e):e instanceof ot?function(t){const n=t.getFilters().map(s=>Qa(s));return n.length===1?n[0]:{compositeFilter:{op:Id(t.op),filters:n}}}(e):T()}function Sd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Wa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Yl(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ie(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ie(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=$a();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Oa(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&Yt(this.mutations,t.mutations,(n,s)=>xi(n,s))&&Yt(this.baseMutations,t.baseMutations,(n,s)=>xi(n,s))}}class Rr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=sd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Rr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n,s,r,i=b.min(),o=b.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ot(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this.oe=t}}function Dd(e){const t=vd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.Ze=new Nd}addToCollectionParentIndex(t,n){return this.Ze.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Tt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Nd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new U(x.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new U(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Vn(){return new ne(0)}static Sn(){return new ne(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.changes=new he(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ie(s.mutation,r,rt.empty(),P.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,C()).next(()=>s))}getLocalViewOfDocuments(t,n,s=C()){const r=Rt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=ve();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Rt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,C()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=yt();const o=Se(),a=Se();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ct)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ie(h.mutation,u,h.mutation.getFieldMask(),P.now())):o.set(u.key,rt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new Rd(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Se();let r=new $((o,a)=>o-a),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||rt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||C()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=$a();h.forEach(f=>{if(!i.has(f)){const m=Oa(n.get(f),s.get(f));m!==null&&l.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Aa(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):p.resolve(Rt());let a=-1,c=i;return o.next(u=>p.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{c=c.insert(h,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,C())).next(h=>({batchId:a,changes:Ua(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=ve();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=ve();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const c=function(u,h){return new ue(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Q.newInvalidDocument(u)))});let o=ve();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Ie(u.mutation,c,rt.empty(),P.now()),Hn(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return p.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ut(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Dd(s.bundledQuery),readTime:ut(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.overlays=new $(w.comparator),this.ss=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Rt();return p.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ce(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const r=Rt(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new $((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Rt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Rt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return p.resolve(a)}ce(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ad(n,s));let i=this.ss.get(n);i===void 0&&(i=C(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.rs=new U(B.os),this.us=new U(B.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new B(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new B(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new w(new x([])),s=new B(n,t),r=new B(n,t+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new w(new x([])),s=new B(n,t),r=new B(n,t+1);let i=C();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new B(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return w.comparator(t.key,n.key)||k(t.gs,n.gs)}static cs(t,n){return k(t.gs,n.gs)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new U(B.os)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),r=new B(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new U(k);return n.forEach(r=>{const i=new B(r,0),o=new B(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),p.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new B(new w(i),0);let a=new U(k);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),p.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return p.forEach(n.mutations,r=>{const i=new B(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ps=s})}Pn(t){}containsKey(t,n){const s=new B(n,0),r=this.ps.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.Rs=t,this.docs=new $(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=yt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Q.newInvalidDocument(r))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=yt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bl(Sl(h),s)<=0||(r.has(h.key)||Hn(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,s,r){T()}Ps(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Vd(this)}getSize(t){return p.resolve(this.size)}}class Vd extends kd{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(t,r)):this.Xn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.persistence=t,this.vs=new he(n=>Cr(n),Dr),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Vs=new xr,this.targetCount=0,this.Ss=ne.Vn()}forEachTarget(t,n){return this.vs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new ne(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.xn(n),p.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new br(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Pd(this),this.indexManager=new _d,this.remoteDocumentCache=function(s){return new Fd(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Cd(n),this.$s=new Md(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Od,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new Ld(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new $d(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(t,n){return p.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class $d extends Cl{constructor(t){super(),this.currentSequenceNumber=t}}class Mr{constructor(t){this.persistence=t,this.Bs=new xr,this.Ls=null}static qs(t){return new Mr(t)}get Us(){if(this.Ls)return this.Ls;throw T()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),p.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,s=>{const r=w.fromPath(s);return this.Ks(t,r).next(i=>{i||n.removeEntry(r,b.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return p.or([()=>p.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Fs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(t,n){let s=C(),r=C();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Or(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Mi(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Fi(t,n))}Mi(t,n){if(ki(n))return p.resolve(null);let s=gt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hs(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=C(...i);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(t,Hs(n,null,"F")):this.qi(t,u,n,c)}))})))}Oi(t,n,s,r){return ki(n)||r.isEqual(b.min())?this.Fi(t,n):this.$i.getDocuments(t,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(t,n):(Ei()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Qs(n)),this.qi(t,o,n,Il(r,-1)))})}Bi(t,n){let s=new U(Da(t));return n.forEach((r,i)=>{Hn(t,i)&&(s=s.add(i))}),s}Li(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(t,n){return Ei()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.$i.getDocumentsMatchingQuery(t,n,Tt.min())}qi(t,n,s,r){return this.$i.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n,s,r){this.persistence=t,this.Ui=n,this.Tt=r,this.Ki=new $(k),this.Gi=new he(i=>Cr(i),Dr),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.$s=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xd(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function jd(e,t,n,s){return new qd(e,t,n,s)}async function Xa(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=C();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Kd(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let f=p.resolve();return l.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(S=>{const E=c.docVersions.get(m);R(E!==null),S.version.compareTo(E)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),u.addEntry(S)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=C();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ya(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function Gd(e,t){const n=A(e),s=t.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];t.targetChanges.forEach((h,l)=>{const f=r.get(l);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Ns.addMatchingKeys(i,h.addedDocuments,l)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?m=m.withResumeToken(J.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(l,m),function(S,E,_){return S.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,m,h)&&a.push(n.Ns.updateTargetData(i,m))});let c=yt(),u=C();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(zd(i,o,t.documentUpdates).next(h=>{c=h.Hi,u=h.Ji})),!s.isEqual(b.min())){const h=n.Ns.getLastRemoteSnapshotVersion(i).next(l=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function zd(e,t,n){let s=C(),r=C();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=yt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Hd(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Qd(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,t).next(i=>i?(r=i,p.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Ot(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function Js(e,t,n){const s=A(e),r=s.Ki.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!He(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(r.target)}function Ui(e,t,n){const s=A(e);let r=b.min(),i=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=A(a),l=h.Gi.get(u);return l!==void 0?p.resolve(h.Ki.get(l)):h.Ns.getTargetData(c,u)}(s,o,gt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?r:b.min(),n?i:C())).next(a=>(Wd(s,jl(t),a),{documents:a,Yi:i})))}function Wd(e,t,n){let s=e.Qi.get(t)||b.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Qi.set(t,s)}class $i{constructor(){this.activeTargetIds=Ba()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xd{constructor(){this.Ur=new $i,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new $i,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn=null;function Is(){return rn===null?rn=268435456+Math.round(2147483648*Math.random()):rn++,"0x"+rn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="WebChannelConnection";class tf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,r,i){const o=Is(),a=this.fo(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(t,a,c,s).then(u=>(v("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw Bs("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}mo(t,n,s,r,i,o){return this.lo(t,n,s,r,i)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}fo(t,n){const s=Jd[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,r){const i=Is();return new Promise((o,a)=>{const c=new dl;c.setWithCredentials(!0),c.listenOnce(ul.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Es.NO_ERROR:const h=c.getResponseJson();v(z,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case Es.TIMEOUT:v(z,`RPC '${t}' ${i} timed out`),a(new g(d.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const l=c.getStatus();if(v(z,`RPC '${t}' ${i} failed with status:`,l,"response text:",c.getResponseText()),l>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const S=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(_)>=0?_:d.UNKNOWN}(m.status);a(new g(S,m.message))}else a(new g(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v(z,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);v(z,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}yo(t,n,s){const r=Is(),i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=al(),a=cl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new ll({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");v(z,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let l=!1,f=!1;const m=new Zd({Yr:E=>{f?v(z,`Not sending because RPC '${t}' stream ${r} is closed:`,E):(l||(v(z,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),v(z,`RPC '${t}' stream ${r} sending:`,E),h.send(E))},Zr:()=>h.close()}),S=(E,_,Z)=>{E.listen(_,st=>{try{Z(st)}catch(dt){setTimeout(()=>{throw dt},0)}})};return S(h,en.EventType.OPEN,()=>{f||v(z,`RPC '${t}' stream ${r} transport opened.`)}),S(h,en.EventType.CLOSE,()=>{f||(f=!0,v(z,`RPC '${t}' stream ${r} transport closed`),m.oo())}),S(h,en.EventType.ERROR,E=>{f||(f=!0,Bs(z,`RPC '${t}' stream ${r} transport errored:`,E),m.oo(new g(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,en.EventType.MESSAGE,E=>{var _;if(!f){const Z=E.data[0];R(!!Z);const st=Z,dt=st.error||((_=st[0])===null||_===void 0?void 0:_.error);if(dt){v(z,`RPC '${t}' stream ${r} received error:`,dt);const fe=dt.status;let pe=function(kc){const Xr=L[kc];if(Xr!==void 0)return Va(Xr)}(fe),Wr=dt.message;pe===void 0&&(pe=d.INTERNAL,Wr="Unknown error status: "+fe+" with message "+dt.message),f=!0,m.oo(new g(pe,Wr)),h.close()}else v(z,`RPC '${t}' stream ${r} received:`,Z),m.uo(Z)}}),S(a,hl.STAT_EVENT,E=>{E.stat===vi.PROXY?v(z,`RPC '${t}' stream ${r} detected buffering proxy`):E.stat===vi.NOPROXY&&v(z,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.ro()},0),m}}function Ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return new hd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,n,s,r,i,o,a,c){this.Ys=t,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ja(t,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(mt(n.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{t(()=>{const r=new g(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ef extends Za{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=fd(this.Tt,t),s=function(r){if(!("targetChange"in r))return b.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?b.min():i.readTime?ut(i.readTime):b.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=Ys(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Gs(a)?{documents:gd(r,a)}:{query:yd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ka(r,i.resumeToken):i.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Cn(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=wd(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=Ys(this.Tt),n.removeTarget=t,this.qo(n)}}class nf extends Za{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const n=md(t.writeResults,t.commitTime),s=ut(t.commitTime);return this.listener.eu(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=Ys(this.Tt),this.qo(t)}tu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>pd(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new g(d.UNKNOWN,r.toString())})}mo(t,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(d.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class rf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(mt(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Bt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.mu.add(4),await Xe(c),c.pu.set("Unknown"),c.mu.delete(4),await Jn(c)}(this))})}),this.pu=new rf(s,r)}}async function Jn(e){if(Bt(e))for(const t of e.gu)await t(!0)}async function Xe(e){for(const t of e.gu)await t(!1)}function tc(e,t){const n=A(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),Vr(n)?Fr(n):le(n).Mo()&&Lr(n,t))}function ec(e,t){const n=A(e),s=le(n);n.wu.delete(t),s.Mo()&&nc(n,t),n.wu.size===0&&(s.Mo()?s.Bo():Bt(n)&&n.pu.set("Unknown"))}function Lr(e,t){e.Iu.Ot(t.targetId),le(e).Jo(t)}function nc(e,t){e.Iu.Ot(t),le(e).Yo(t)}function Fr(e){e.Iu=new od({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),le(e).start(),e.pu.au()}function Vr(e){return Bt(e)&&!le(e).$o()&&e.wu.size>0}function Bt(e){return A(e).mu.size===0}function sc(e){e.Iu=void 0}async function af(e){e.wu.forEach((t,n)=>{Lr(e,t)})}async function cf(e,t){sc(e),Vr(e)?(e.pu.fu(t),Fr(e)):e.pu.set("Unknown")}async function uf(e,t,n){if(e.pu.set("Online"),t instanceof ja&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Dn(e,s)}else if(t instanceof un?e.Iu.Qt(t):t instanceof qa?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(b.min()))try{const s=await Ya(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),nc(r,a);const u=new Ot(c.target,a,1,c.sequenceNumber);Lr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Dn(e,s)}}async function Dn(e,t,n){if(!He(t))throw t;e.mu.add(1),await Xe(e),e.pu.set("Offline"),n||(n=()=>Ya(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await Jn(e)})}function rc(e,t){return t().catch(n=>Dn(e,n,t))}async function Zn(e){const t=A(e),n=St(t);let s=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;hf(t);)try{const r=await Hd(t.localStore,s);if(r===null){t._u.length===0&&n.Bo();break}s=r.batchId,lf(t,r)}catch(r){await Dn(t,r)}ic(t)&&oc(t)}function hf(e){return Bt(e)&&e._u.length<10}function lf(e,t){e._u.push(t);const n=St(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function ic(e){return Bt(e)&&!St(e).$o()&&e._u.length>0}function oc(e){St(e).start()}async function df(e){St(e).su()}async function ff(e){const t=St(e);for(const n of e._u)t.tu(n.mutations)}async function pf(e,t,n){const s=e._u.shift(),r=Rr.from(s,t,n);await rc(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Zn(e)}async function mf(e,t){t&&St(e).Xo&&await async function(n,s){if(r=s.code,ed(r)&&r!==d.ABORTED){const i=n._u.shift();St(n).Fo(),await rc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zn(n)}var r}(e,t),ic(e)&&oc(e)}async function qi(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Bt(n);n.mu.add(3),await Xe(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await Jn(n)}async function gf(e,t){const n=A(e);t?(n.mu.delete(2),await Jn(n)):t||(n.mu.add(2),await Xe(n),n.pu.set("Unknown"))}function le(e){return e.Tu||(e.Tu=function(t,n,s){const r=A(t);return r.ru(),new ef(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:af.bind(null,e),no:cf.bind(null,e),Ho:uf.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.Fo(),Vr(e)?Fr(e):e.pu.set("Unknown")):(await e.Tu.stop(),sc(e))})),e.Tu}function St(e){return e.Eu||(e.Eu=function(t,n,s){const r=A(t);return r.ru(),new nf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:df.bind(null,e),no:mf.bind(null,e),nu:ff.bind(null,e),eu:pf.bind(null,e)}),e.gu.push(async t=>{t?(e.Eu.Fo(),await Zn(e)):(await e.Eu.stop(),e._u.length>0&&(v("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Pr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ur(e,t){if(mt("AsyncQueue",`${t}: ${e}`),He(e))return new g(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=ve(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new Wt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Wt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Wt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.Au=new $(w.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):T():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class se{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new se(t,n,Wt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Pu=void 0,this.listeners=[]}}class vf{constructor(){this.queries=new he(t=>Ca(t),zn),this.onlineState="Unknown",this.vu=new Set}}async function wf(e,t){const n=A(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new yf),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Ur(o,`Initialization of query '${Qs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Pu&&t.Vu(i.Pu)&&$r(n)}async function Ef(e,t){const n=A(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Tf(e,t){const n=A(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&$r(n)}function If(e,t,n){const s=A(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function $r(e){e.vu.forEach(t=>{t.next()})}class Sf{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new se(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.key=t}}class cc{constructor(t){this.key=t}}class bf{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=C(),this.mutatedKeys=C(),this.ju=Da(t),this.zu=new Wt(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new ji,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const f=r.get(h),m=Hn(this.query,l)?l:null,S=!!f&&this.mutatedKeys.has(f.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;f&&m?f.data.isEqual(m.data)?S!==E&&(s.track({type:3,doc:m}),_=!0):this.Yu(f,m)||(s.track({type:2,doc:m}),_=!0,(c&&this.ju(m,c)>0||u&&this.ju(m,u)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),_=!0):f&&!m&&(s.track({type:1,doc:f}),_=!0,(c||u)&&(a=!0)),_&&(m?(o=o.add(m),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort((u,h)=>function(l,f){const m=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(l)-m(f)}(u.type,h.type)||this.ju(u.doc,h.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new se(this.query,t.zu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ji,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=C(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new cc(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new ac(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=C();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return se.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Af{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Cf{constructor(t){this.key=t,this.ic=!1}}class Df{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new he(a=>Ca(a),zn),this.uc=new Map,this.cc=new Set,this.ac=new $(w.comparator),this.hc=new Map,this.lc=new xr,this.fc={},this.dc=new Map,this._c=ne.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function _f(e,t){const n=Pf(e);let s,r;const i=n.oc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Qd(n.localStore,gt(t));n.isPrimaryClient&&tc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nf(n,t,s,a==="current",o.resumeToken)}return r}async function Nf(e,t,n,s,r){e.mc=(l,f,m)=>async function(S,E,_,Z){let st=E.view.Hu(_);st.Li&&(st=await Ui(S.localStore,E.query,!1).then(({documents:pe})=>E.view.Hu(pe,st)));const dt=Z&&Z.targetChanges.get(E.targetId),fe=E.view.applyChanges(st,S.isPrimaryClient,dt);return Gi(S,E.targetId,fe.tc),fe.snapshot}(e,l,f,m);const i=await Ui(e.localStore,t,!0),o=new bf(t,i.Yi),a=o.Hu(i.documents),c=We.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Gi(e,n,u.tc);const h=new Af(t,n,o);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function kf(e,t){const n=A(e),s=n.oc.get(t),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!zn(i,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Js(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ec(n.remoteStore,s.targetId),Zs(n,s.targetId)}).catch(ze)):(Zs(n,s.targetId),await Js(n.localStore,s.targetId,!0))}async function Rf(e,t,n){const s=Uf(e);try{const r=await function(i,o){const a=A(i),c=P.now(),u=o.reduce((f,m)=>f.add(m.key),C());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=yt(),S=C();return a.ji.getEntries(f,u).next(E=>{m=E,m.forEach((_,Z)=>{Z.isValidDocument()||(S=S.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(E=>{h=E;const _=[];for(const Z of o){const st=Jl(Z,h.get(Z.key).overlayedDocument);st!=null&&_.push(new Ct(Z.key,st,ba(st.value.mapValue),ct.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,_,o)}).next(E=>{l=E;const _=E.applyToLocalDocumentSet(h,S);return a.documentOverlayCache.saveOverlays(f,E.batchId,_)})}).then(()=>({batchId:l.batchId,changes:Ua(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new $(k)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ye(s,r.changes),await Zn(s.remoteStore)}catch(r){const i=Ur(r,"Failed to persist write");n.reject(i)}}async function uc(e,t){const n=A(e);try{const s=await Gd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?R(o.ic):r.removedDocuments.size>0&&(R(o.ic),o.ic=!1))}),await Ye(n,s,t)}catch(s){await ze(s)}}function Ki(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=A(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&$r(a)}(s.eventManager,t),r.length&&s.rc.Ho(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function xf(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.hc.get(t),i=r&&r.key;if(i){let o=new $(w.comparator);o=o.insert(i,Q.newNoDocument(i,b.min()));const a=C().add(i),c=new Xn(b.min(),new Map,new U(k),o,a);await uc(s,c),s.ac=s.ac.remove(i),s.hc.delete(t),Br(s)}else await Js(s.localStore,t,!1).then(()=>Zs(s,t,n)).catch(ze)}async function Mf(e,t){const n=A(e),s=t.batch.batchId;try{const r=await Kd(n.localStore,t);lc(n,s,null),hc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ye(n,r)}catch(r){await ze(r)}}async function Of(e,t,n){const s=A(e);try{const r=await function(i,o){const a=A(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);lc(s,t,n),hc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ye(s,r)}catch(r){await ze(r)}}function hc(e,t){(e.dc.get(t)||[]).forEach(n=>{n.resolve()}),e.dc.delete(t)}function lc(e,t,n){const s=A(e);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.fc[s.currentUser.toKey()]=r}}function Zs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||dc(e,s)})}function dc(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&(ec(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),Br(e))}function Gi(e,t,n){for(const s of n)s instanceof ac?(e.lc.addReference(s.key,t),Lf(e,s)):s instanceof cc?(v("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||dc(e,s.key)):T()}function Lf(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.cc.add(s),Br(e))}function Br(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new w(x.fromString(t)),s=e._c.next();e.hc.set(s,new Cf(n)),e.ac=e.ac.insert(n,s),tc(e.remoteStore,new Ot(gt(_r(n.path)),s,2,br.at))}}async function Ye(e,t,n){const s=A(e),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Or.Ni(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.Ci,f=>u.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>p.forEach(l.xi,f=>u.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!He(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const f=u.Ki.get(l),m=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(m);u.Ki=u.Ki.insert(l,S)}}}(s.localStore,i))}async function Ff(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Xa(n.localStore,t);n.currentUser=t,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new g(d.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ye(n,s.Wi)}}function Vf(e,t){const n=A(e),s=n.hc.get(t);if(s&&s.ic)return C().add(s.key);{let r=C();const i=n.uc.get(t);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function Pf(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xf.bind(null,t),t.rc.Ho=Tf.bind(null,t.eventManager),t.rc.gc=If.bind(null,t.eventManager),t}function Uf(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Of.bind(null,t),t}class $f{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=Yn(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return jd(this.persistence,new Bd,t.initialUser,this.Tt)}Tc(t){return new Ud(Mr.qs,this.Tt)}Ic(t){return new Xd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ki(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ff.bind(null,this.syncEngine),await gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new vf}createDatastore(t){const n=Yn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new tf(r));var r;return function(i,o,a,c){return new sf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Ki(this.syncEngine,a,0),o=Bi.C()?new Bi:new Yd,new of(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new Df(s,r,i,o,a,c);return u&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Xe(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):mt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=H.UNAUTHENTICATED,this.clientId=pa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ur(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Kf(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Xa(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Gf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zf(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>qi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>qi(t.remoteStore,i)),e.onlineComponents=t}async function zf(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Kf(e,new $f)),e.offlineComponents}async function fc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Gf(e,new Bf)),e.onlineComponents}function Hf(e){return fc(e).then(t=>t.syncEngine)}async function zi(e){const t=await fc(e),n=t.eventManager;return n.onListen=_f.bind(null,t.syncEngine),n.onUnlisten=kf.bind(null,t.syncEngine),n}const Hi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(e,t,n){if(!n)throw new g(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Qf(e,t,n,s){if(t===!0&&s===!0)throw new g(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qi(e){if(!w.isDocumentKey(e))throw new g(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Wi(e){if(w.isDocumentKey(e))throw new g(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ts(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Lt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new g(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ts(e);throw new g(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new g(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new g(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new g(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fl;switch(n.type){case"gapi":const s=n.client;return new yl(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new g(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Hi.get(t);n&&(v("ComponentProvider","Removing Datastore"),Hi.delete(t),n.terminate())}(this),Promise.resolve()}}function Wf(e,t,n,s={}){var r;const i=(e=Lt(e,es))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Bs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=H.MOCK_USER;else{o=Wc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new g(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new H(c)}e._authCredentials=new pl(new fa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}}class qt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qt(this.firestore,t,this._query)}}class Et extends qt{constructor(t,n,s){super(t,n,_r(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new w(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function kp(e,t,...n){if(e=ht(e),pc("collection","path",t),e instanceof es){const s=x.fromString(t,...n);return Wi(s),new Et(e,null,s)}{if(!(e instanceof nt||e instanceof Et))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Wi(s),new Et(e.firestore,null,s)}}function mc(e,t,...n){if(e=ht(e),arguments.length===1&&(t=pa.R()),pc("doc","path",t),e instanceof es){const s=x.fromString(t,...n);return Qi(s),new nt(e,null,new w(s))}{if(!(e instanceof nt||e instanceof Et))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Qi(s),new nt(e.firestore,e instanceof Et?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ja(this,"async_queue_retry"),this.Hc=()=>{const n=Ss();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=Ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=Ss();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Mt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!He(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const r=Pr.createAndSchedule(this,t,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&T()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}function Yi(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Fe extends es{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Xf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function Yf(e,t){const n=typeof e=="object"?e:Zu(),s=typeof e=="string"?e:t||"(default)",r=Wu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=zc("firestore");i&&Wf(r,...i)}return r}function gc(e){return e._firestoreClient||yc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Dl(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new jf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new re(J.fromBase64String(t))}catch(n){throw new g(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new re(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new g(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new g(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new g(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=/^__.*__$/;class Zf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ct(t,this.data,this.fieldMask,n,this.fieldTransforms):new Qe(t,this.data,n,this.fieldTransforms)}}class vc{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ct(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function wc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class rs{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new rs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.aa(t),r}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.ia(),r}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return _n(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(wc(this.ra)&&Jf.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class tp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||Yn(t)}wa(t,n,s,r=!1){return new rs({ra:t,methodName:n,_a:s,path:W.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function jr(e){const t=e._freezeSettings(),n=Yn(e._databaseId);return new tp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ep(e,t,n,s,r,i={}){const o=e.wa(i.merge||i.mergeFields?2:0,t,n,r);Kr("Data must be an object, but it was:",o,s);const a=Ec(s,o);let c,u;if(i.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const f=tr(t,l,n);if(!o.contains(f))throw new g(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Ic(h,f)||h.push(f)}c=new rt(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Zf(new et(a),c,u)}class is extends ss{_toFieldTransform(t){if(t.ra!==2)throw t.ra===1?t.fa(`${this._methodName}() can only appear at the top level of your update data`):t.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof is}}function np(e,t,n){return new rs({ra:3,_a:t.settings._a,methodName:e._methodName,ca:n},t.databaseId,t.Tt,t.ignoreUndefinedProperties)}class sp extends ss{constructor(t,n){super(t),this.ma=n}_toFieldTransform(t){const n=np(this,t,!0),s=this.ma.map(i=>de(i,n)),r=new ee(s);return new Ql(t.path,r)}isEqual(t){return this===t}}function rp(e,t,n,s){const r=e.wa(1,t,n);Kr("Data must be an object, but it was:",r,s);const i=[],o=et.empty();$t(s,(c,u)=>{const h=Gr(t,c,n);u=ht(u);const l=r.ha(h);if(u instanceof is)i.push(h);else{const f=de(u,l);f!=null&&(i.push(h),o.set(h,f))}});const a=new rt(i);return new vc(o,a,r.fieldTransforms)}function ip(e,t,n,s,r,i){const o=e.wa(1,t,n),a=[tr(t,s,n)],c=[r];if(i.length%2!=0)throw new g(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(tr(t,i[f])),c.push(i[f+1]);const u=[],h=et.empty();for(let f=a.length-1;f>=0;--f)if(!Ic(u,a[f])){const m=a[f];let S=c[f];S=ht(S);const E=o.ha(m);if(S instanceof is)u.push(m);else{const _=de(S,E);_!=null&&(u.push(m),h.set(m,_))}}const l=new rt(u);return new vc(h,l,o.fieldTransforms)}function op(e,t,n,s=!1){return de(n,e.wa(s?4:3,t))}function de(e,t){if(Tc(e=ht(e)))return Kr("Unsupported field value:",t,e),Ec(e,t);if(e instanceof ss)return function(n,s){if(!wc(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=de(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Gl(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=P.fromDate(n);return{timestampValue:Cn(s.Tt,r)}}if(n instanceof P){const r=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cn(s.Tt,r)}}if(n instanceof qr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof re)return{bytesValue:Ka(s.Tt,n._byteString)};if(n instanceof nt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:kr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ts(n)}`)}(e,t)}function Ec(e,t){const n={};return ma(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$t(e,(s,r)=>{const i=de(r,t.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Tc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof qr||e instanceof re||e instanceof nt||e instanceof ss)}function Kr(e,t,n){if(!Tc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ts(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}function tr(e,t,n){if((t=ht(t))instanceof ns)return t._internalPath;if(typeof t=="string")return Gr(e,t);throw _n("Field path arguments must be of type string or ",e,!1,void 0,n)}const ap=new RegExp("[~\\*/\\[\\]]");function Gr(e,t,n){if(t.search(ap)>=0)throw _n(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ns(...t.split("."))._internalPath}catch{throw _n(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _n(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new g(d.INVALID_ARGUMENT,a+e+c)}function Ic(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(os("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cp extends Sc{data(){return super.data()}}function os(e,t){return typeof t=="string"?Gr(e,t):t instanceof ns?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new g(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zr{}class bc extends zr{}function Rp(e,t,...n){let s=[];t instanceof zr&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Hr).length,o=r.filter(a=>a instanceof as).length;if(i>1||i>0&&o>0)throw new g(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class as extends bc{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new as(t,n,s)}_apply(t){const n=this._parse(t);return Ac(t._query,n),new qt(t.firestore,t.converter,zs(t._query,n))}_parse(t){const n=jr(t.firestore);return function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new g(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Zi(h,u);const f=[];for(const m of h)f.push(Ji(a,r,m));l={arrayValue:{values:f}}}else l=Ji(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Zi(h,u),l=op(o,i,h,u==="in"||u==="not-in");return V.create(c,u,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function xp(e,t,n){const s=t,r=os("where",e);return as._create(r,s,n)}class Hr extends zr{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Hr(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Ac(i,a),i=zs(i,a)}(t._query,n),new qt(t.firestore,t.converter,zs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qr extends bc{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Qr(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new g(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new g(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ht(r,i);return function(a,c){if(Nr(a)===null){const u=Gn(a);u!==null&&Cc(a,u,c.field)}}(s,o),o}(t._query,this._field,this._direction);return new qt(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ue(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Mp(e,t="asc"){const n=t,s=os("orderBy",e);return Qr._create(s,n)}function Ji(e,t,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new g(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Aa(t)&&n.indexOf("/")!==-1)throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(x.fromString(n));if(!w.isDocumentKey(s))throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Si(e,new w(s))}if(n instanceof nt)return Si(e,n._key);throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ts(n)}.`)}function Zi(e,t){if(!Array.isArray(e)||e.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ac(e,t){if(t.isInequality()){const s=Gn(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new g(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Nr(e);i!==null&&Cc(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Cc(e,t,n){if(!n.isEqual(t))throw new g(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class hp{convertValue(t,n="none"){switch(Pt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return $t(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new qr(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ya(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Me(t));default:return null}}convertTimestamp(t){const n=It(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);R(Wa(s));const r=new xe(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||mt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dc extends Sc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(os("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class hn extends Dc{data(t={}){return super.data(t)}}class dp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new we(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new hn(this._firestore,this._userDataWriter,s.key,s,new we(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new g(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:fp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class _c extends hp{constructor(t){super(),this.firestore=t}convertBytes(t){return new re(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function pp(e,t,n,...s){e=Lt(e,nt);const r=Lt(e.firestore,Fe),i=jr(r);let o;return o=typeof(t=ht(t))=="string"||t instanceof ns?ip(i,"updateDoc",e._key,t,n,s):rp(i,"updateDoc",e._key,t),Nc(r,[o.toMutation(e._key,ct.exists(!0))])}function Op(e,t){const n=Lt(e.firestore,Fe),s=mc(e),r=lp(e.converter,t);return Nc(n,[ep(jr(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,ct.exists(!1))]).then(()=>s)}function Lp(e,...t){var n,s,r;e=ht(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Yi(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Yi(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof nt)u=Lt(e.firestore,Fe),h=_r(e._key.path),c={next:l=>{t[o]&&t[o](mp(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Lt(e,qt);u=Lt(l.firestore,Fe),h=l._query;const f=new _c(u);c={next:m=>{t[o]&&t[o](new dp(u,f,l,m))},error:t[o+1],complete:t[o+2]},up(e._query)}return function(l,f,m,S){const E=new qf(S),_=new Sf(f,E,m);return l.asyncQueue.enqueueAndForget(async()=>wf(await zi(l),_)),()=>{E.bc(),l.asyncQueue.enqueueAndForget(async()=>Ef(await zi(l),_))}}(gc(u),h,a,c)}function Nc(e,t){return function(n,s){const r=new Mt;return n.asyncQueue.enqueueAndForget(async()=>Rf(await Hf(n),s,r)),r.promise}(gc(e),t)}function mp(e,t,n){const s=n.docs.get(t._key),r=new _c(e);return new Dc(e,r,t._key,s,new we(n.hasPendingWrites,n.fromCache),t.converter)}function gp(...e){return new sp("arrayUnion",e)}(function(e,t=!0){(function(n){ce=n})(Ju),fn(new be("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Fe(new ml(n.getProvider("auth-internal")),new wl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xe(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),zt(wi,"3.9.0",e),zt(wi,"3.9.0","esm2017")})();const on={VITE_PATH:"/path-to-nowhere",VITE_FIREBASE_API_KEY:"AIzaSyCqTYUPzjafRb_9fqx536hzkRhSZdokBSw",VITE_MESSAGE_SNEDER_ID:"516073625497",VITE_APP_ID:"1:516073625497:web:58c0a91a4c63172eea2508",VITE_MEASUREMENT_ID:"G-MT8BMK99QB",BASE_URL:"/path-to-nowhere",MODE:"production",DEV:!1,PROD:!0},yp={apiKey:on.VITE_FIREBASE_API_KEY,authDomain:"path-to-nowhere-b1391.firebaseapp.com",projectId:"path-to-nowhere-b1391",storageBucket:"path-to-nowhere-b1391.appspot.com",messagingSenderId:on.VITE_MESSAGE_SNEDER_ID,appId:on.VITE_APP_ID,measurementId:on.VITE_MEASUREMENT_ID},vp=ao(yp),wp=Yf(vp),Ep=async()=>{let e;return await fetch("https://jsonip.com",{mode:"cors"}).then(t=>t.json()).then(t=>e=t),e};const Tp=["onSubmit"],Ip={class:"col p-0"},Sp={class:"col flex-grow-0 ms-1 p-0"},bp=["disabled"],Ap={class:"col flex-grow-0 ms-1 p-0"},Cp={__name:"CommentReply",props:{commentId:String},setup(e){const t=e,n=cs(null),s=cs(""),r=cs(null),i=c=>{const u=document.querySelector(`#reply_btn_${c}`),h=document.querySelector(`#reply_${c}`);u.classList.remove("d-none"),h.classList.add("d-none")},o=()=>{const c=s.value.trim();c&&a(c)},a=async c=>{n.value.disabled=!0;const u=await Ep(),h=mc(wp,"comments",t.commentId),l={content:c,ip:u.ip,country:u.country,verified:!0,created_at:P.fromDate(new Date)};pp(h,{replies:gp(l)}),r.value.click(),n.value.disabled=!1};return(c,u)=>(xc(),Mc("form",{onSubmit:Fc(o,["prevent"]),class:"row flex-nowrap align-items-center m-0"},[Dt("fieldset",{ref_key:"replyForm",ref:n,class:"row flex-nowrap align-items-center"},[Dt("div",Ip,[Oc(Dt("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h),type:"text",id:"inputPassword6",class:"form-control rounded-0 font-14","aria-describedby":"passwordHelpInline"},null,512),[[Lc,s.value]])]),Dt("div",Sp,[Dt("button",{disabled:!s.value,type:"submit",class:"btn btn-sm btn-primary rounded-0 font-14 text-nowrap"},Yr(c.$t("comment.reply")),9,bp)])],512),Dt("div",Ap,[Dt("button",{onClick:u[1]||(u[1]=h=>i(t.commentId)),ref_key:"cancelBtn",ref:r,type:"reset",class:"btn btn-sm btn-light rounded-0 font-14 text-nowrap"},Yr(c.$t("comment.cancel")),513)])],40,Tp))}},Dp=Rc(Cp,[["__scopeId","data-v-427609ea"]]),Fp=Object.freeze(Object.defineProperty({__proto__:null,default:Dp},Symbol.toStringTag,{value:"Module"}));export{Dp as C,kp as X,Rp as a,Op as b,Fp as c,wp as d,Ep as g,xp as l,Mp as m,P as n,Lp as s};
