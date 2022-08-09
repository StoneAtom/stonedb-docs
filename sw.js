(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"894229ce87bbac85519ce7be3b168c54","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"1f1e9801c60b621dba41c02cf2a42012","url":"assets/js/074f5d7c.8f861bd4.js"},{"revision":"6a873bcca8f4d13edb43719694bd71ec","url":"assets/js/08e78a0e.2b8adfcb.js"},{"revision":"3ae5434fa9a3b91265a588d1236be2d0","url":"assets/js/0b022f4d.62167ece.js"},{"revision":"a9baa30450e0ef85ea1a5f6698b90822","url":"assets/js/0ef89b26.c825881b.js"},{"revision":"0d5d0c90385a235d14acd538af86aa0a","url":"assets/js/0f4306ae.10e2729b.js"},{"revision":"bf96b55da29b10d8588e38b10ebef0f8","url":"assets/js/0f716783.0f33d693.js"},{"revision":"ffbf8d3436237c11b9cd6f33ca8d4e1f","url":"assets/js/14eb3368.c94ca961.js"},{"revision":"320bcc33b6d691a6584b7a4f20ac42a4","url":"assets/js/17896441.cd9c9751.js"},{"revision":"6c4ece63896cc576ed97db69fc427212","url":"assets/js/18540331.22e98a73.js"},{"revision":"cdf65a63beb7df7093c4e51f9a730a3d","url":"assets/js/18f1d6ea.6a160a8c.js"},{"revision":"39301ebbc6ca8cbe8e2821f47eaa7d82","url":"assets/js/1be78505.409d0c93.js"},{"revision":"bae3ff3c35635c0f48b468854af85c02","url":"assets/js/1c437329.237c3e71.js"},{"revision":"b4f1a9bebe6e95c1c79b52bf6e38b5b3","url":"assets/js/1df93b7f.f0e2f14f.js"},{"revision":"b244ad954060013bf89e88bd7f2cb29e","url":"assets/js/22111832.fae0bbcd.js"},{"revision":"2a8fc4dd98630911ad0e44e6441b2fff","url":"assets/js/22f2b658.13736651.js"},{"revision":"b2848b005a36e6bbd6af06968ef60567","url":"assets/js/230.6f9e9fb4.js"},{"revision":"f922124cf531062ea877c985e06956e4","url":"assets/js/2449e716.e7cdaf77.js"},{"revision":"21821096485a1026303bed4af8cafa43","url":"assets/js/255ff5c9.a7b5f445.js"},{"revision":"d0f7d30e4996b35c0244ccab969ea8cd","url":"assets/js/29654f22.608ec436.js"},{"revision":"0a359a85ff481bc89a96f1005886d432","url":"assets/js/2ce02311.0177e9ee.js"},{"revision":"ff9aa1ebd850105e757bf2b750c54e1f","url":"assets/js/2d89c24a.19250506.js"},{"revision":"36a5d6ca05c8e94392ac71c95aadea01","url":"assets/js/2e06712c.f3142de8.js"},{"revision":"20284e0e56e5df8d9ef034b67f481651","url":"assets/js/30ac1bba.009ace02.js"},{"revision":"5ef2b86cace73f10e4394da87451fc72","url":"assets/js/323a772d.5c1c16bd.js"},{"revision":"fc8421820a34fbc7c3b6f89ada3cd226","url":"assets/js/32890476.c515f4c9.js"},{"revision":"63f1998aba9e9f14432b818c608b98c7","url":"assets/js/3973c022.6ac64057.js"},{"revision":"8c64ce0803bd82d34646ce27a59ad2c5","url":"assets/js/3a0dcde5.4fe00441.js"},{"revision":"8ab7b866b99bf6f94afa3b746f1c100c","url":"assets/js/4260dd22.f8ceb727.js"},{"revision":"031f305866c96dccb70f4f537d94ce3c","url":"assets/js/455ed5a2.e20c6922.js"},{"revision":"568ba4e315d1fe059e98f286651f9c3c","url":"assets/js/483ae289.940fdea1.js"},{"revision":"2750fa3f912babfa85564c29ebd51796","url":"assets/js/486.5532403e.js"},{"revision":"0eaa785bb1c44683e6836d406bf31f3a","url":"assets/js/4a3ff6a4.6fe45141.js"},{"revision":"426278a2be840f72258b02b68a3ea8b9","url":"assets/js/4d282e45.3bad6a15.js"},{"revision":"77cc5ecc5b13250a6f09c328270af5fd","url":"assets/js/4e9af88f.7461b55d.js"},{"revision":"0faf3bb04a37f5c2fa28dd608c16e6e3","url":"assets/js/5131.7ee3fe40.js"},{"revision":"ce7a2f2c6f7a3eaaaf7eab0fbbb3f9ed","url":"assets/js/526483e9.c6d79037.js"},{"revision":"7142d9d6858f31b01edecf05c9b86865","url":"assets/js/5283.43e06db6.js"},{"revision":"964c99a648ea2b6770b8aba881bd9d6d","url":"assets/js/57ca1a6c.6c8f3dbf.js"},{"revision":"13116593540cd4a4d03f819ffbc82308","url":"assets/js/5a60bc19.de2b53cf.js"},{"revision":"2deeee84df834d3c2f7b205fec61c4a1","url":"assets/js/5b24358c.a3f6d264.js"},{"revision":"b35f59cb7b923e969a4f45922fc95af2","url":"assets/js/5c2ee7f2.d5be84eb.js"},{"revision":"6acf5e542b15cbed9d1ffe7fbb217283","url":"assets/js/620f3d5a.f7df0418.js"},{"revision":"6f523f41bc6e55ce46896d52b4962e2a","url":"assets/js/6213bd70.f70f76c1.js"},{"revision":"a5a2e020a6600c594c5c45f3c568b6e8","url":"assets/js/661f9197.636b63a5.js"},{"revision":"92a27d366719cb9e9d5ffd5715527ab1","url":"assets/js/70148c99.5919f3b2.js"},{"revision":"7f192e08204f3191ea6f4dfdc0c52155","url":"assets/js/7025460f.34408505.js"},{"revision":"8bac44caef5cf17c1271b6f11726e3d0","url":"assets/js/710b4d00.2ff1c237.js"},{"revision":"8585f2104f29ab83f6cacbab9bd7d088","url":"assets/js/732bcb33.9137dae4.js"},{"revision":"c8ee4e9a8a96c72a111b059daed92d3a","url":"assets/js/74b4518b.eb2db24d.js"},{"revision":"c30b7ff3915aa644eb04b98169e2cf94","url":"assets/js/762a74d1.a4621247.js"},{"revision":"b3f2dbeefc703beb27eb4e293e0d7900","url":"assets/js/77e8ab63.1aa1212c.js"},{"revision":"253b71e8832142e30f89d86548c2ed64","url":"assets/js/7d884dc4.ae9f655a.js"},{"revision":"8f06c575885990de39d60fb2ac90bbc9","url":"assets/js/827103d9.55cdf1cf.js"},{"revision":"8a96d1e821f9e68f914a24279b91a448","url":"assets/js/88aa99b3.215c2385.js"},{"revision":"a8fdd4af1dd9f26edcd8d5dedb14aa62","url":"assets/js/8e45b355.f4a8bb0e.js"},{"revision":"45da017836e966f90c88d7dba5b5eb21","url":"assets/js/9095.ace644b6.js"},{"revision":"08f23b29432aa697bda31c6bb9cf6556","url":"assets/js/90f39abc.febe9c6b.js"},{"revision":"d14901413591c87ce078c2a109a7fa9d","url":"assets/js/92e4965d.654d1758.js"},{"revision":"ae5599fb6593210b0d7a11995d0737b8","url":"assets/js/935f2afb.8b2a3288.js"},{"revision":"8e6a7556e4d93ebec659b0bfa47d925f","url":"assets/js/9582272a.cfc1a059.js"},{"revision":"7e4e063b7dde3ba42a283c3bce4f10d9","url":"assets/js/978250d5.c90c0663.js"},{"revision":"f70988da5c940e4f4beba10f8babfff0","url":"assets/js/979.4215d9d4.js"},{"revision":"7b2db2e87dbc2b4af8f6b545bcc7ef06","url":"assets/js/99c774cd.7edfaaf1.js"},{"revision":"83f9329ebcf85f37ef6e2fa1bf9d9211","url":"assets/js/9ab16355.552a1672.js"},{"revision":"625a0531e6062f8877aa16d50dff014c","url":"assets/js/9e4087bc.6ec2f1e9.js"},{"revision":"fa7d97591aae2f67d0a2611567e05414","url":"assets/js/a084f012.058c8f6d.js"},{"revision":"4f8ab2f9610f3bea805a9e0555bbf5ae","url":"assets/js/a1cee58a.50483860.js"},{"revision":"4fe7369e94db7c8a807476b1bcce8dba","url":"assets/js/a52d1736.83246838.js"},{"revision":"e7948e79f3fee58999cefb5966d6647a","url":"assets/js/a6aa9e1f.5e640741.js"},{"revision":"63c12055d487acbf0f53bd77d52869ab","url":"assets/js/b47042a7.e27322bc.js"},{"revision":"159b32d47ed98949e0eda9d9f55233aa","url":"assets/js/b5d007fc.aaf05cc3.js"},{"revision":"99d5f159d64f73a991e8096a99f86763","url":"assets/js/b5e1e86c.9dc05375.js"},{"revision":"9ed8daa483df072992810d8228380a7c","url":"assets/js/bbadbe64.c704cfdc.js"},{"revision":"68657157e800642d66d30ab3ac570e78","url":"assets/js/bbef8dd2.cf94d2cd.js"},{"revision":"ef427014862625e18728c84d750e1f01","url":"assets/js/c3b7f9ab.749f1097.js"},{"revision":"5f309b280993fb91f3ee164dfdc4665c","url":"assets/js/c44a072f.c0d75499.js"},{"revision":"e23bef37c680435a5813f00d726b4de6","url":"assets/js/c4577ea8.613340e2.js"},{"revision":"a1b4ec74646366486e23972fd5626413","url":"assets/js/c477196e.fa3f56b6.js"},{"revision":"83943d38c88636a045e3a31d8edc490c","url":"assets/js/c5664fdd.cbea3668.js"},{"revision":"b4924638421e1da002cea16973c6aedf","url":"assets/js/c85fdda8.be56e9cc.js"},{"revision":"61ea7ef472e0d44a39f60011c91836b0","url":"assets/js/ccc49370.acd7b93f.js"},{"revision":"c496adc245974db4b74997ce2741a22e","url":"assets/js/cd49fced.22362c4f.js"},{"revision":"9143a76750eab0c0345776cdeec4ae28","url":"assets/js/d853795f.00f14a52.js"},{"revision":"bdbe1de9ce54b4479681b9f1e0a5cd7c","url":"assets/js/dbaa48bd.22f9cded.js"},{"revision":"6f0f375c5437a23bce83ad046a96d6d9","url":"assets/js/dbc41f12.4b2b744e.js"},{"revision":"eac7467cd7692441cdfe5c8efa5b15b1","url":"assets/js/e2521bdb.92b7dbbc.js"},{"revision":"bfcd8788197392917dddac2911110b6f","url":"assets/js/e426ef98.ec10a877.js"},{"revision":"6965f45295356775baa1c11398d5ed2f","url":"assets/js/ea1d5fbe.9664874a.js"},{"revision":"2638a1bc977a252ba14d55bdbef9569b","url":"assets/js/ebee253d.5af267ed.js"},{"revision":"c92497127b3308773c8d7c54765240da","url":"assets/js/ec0f8f48.7750177a.js"},{"revision":"6da1a2c14f6da8b9f819d3aaaf730939","url":"assets/js/f01bb215.10c921de.js"},{"revision":"4be5095440daf2adc0e2f96929fdaa24","url":"assets/js/f0df5922.0db94fee.js"},{"revision":"786f92c6c346c67398219bbf39e89c38","url":"assets/js/f553487a.a8614daa.js"},{"revision":"e62c62dee5e2d4b1d1ae4e12498bbe1e","url":"assets/js/f56caf0f.4ad84cb1.js"},{"revision":"8b849e272b022f3175b66f2440610092","url":"assets/js/f8f941b3.6bcb88fa.js"},{"revision":"3726afde6d54fe14cd17c101db1a86fd","url":"assets/js/main.356c5ca5.js"},{"revision":"4e5a1fa1b3b9e34b8042a2251a173c9c","url":"assets/js/runtime~main.a6da9a9b.js"},{"revision":"291c23372afe6100aa51d24418fc5900","url":"community/archive/index.html"},{"revision":"08d4b66384d5ef2dcec93f217548289d","url":"community/index.html"},{"revision":"4c03ef8a037ab3ae7c253f911e1fc6a5","url":"community/main/index.html"},{"revision":"30db6798ef3759fd43361e05d1088171","url":"docs/about-stonedb/architecture/index.html"},{"revision":"417723cb3c13bd971c758f53f876df91","url":"docs/about-stonedb/intro/index.html"},{"revision":"37b7837d16e33e3f15f458a398648a42","url":"docs/about-stonedb/limits/index.html"},{"revision":"23efb2fffdd5a86d1fa952d6a79fe483","url":"docs/about-stonedb/terms/index.html"},{"revision":"7e8d68f44f0faf65330eec35de32435c","url":"docs/compiling-methods/index.html"},{"revision":"bf698c3bf907fa9b87015ea9d813ebbb","url":"docs/data-migration-to-stonedb/use-gravity-to-migrate/index.html"},{"revision":"606d89a1fdf75ad0a61a80af9721b826","url":"docs/data-migration-to-stonedb/use-outter-to-migrate/index.html"},{"revision":"f6df11e826b43c86dcd5dc265777c1cf","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"4e68909ddb4cd992b77db9c81a1cb137","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"52d7aaf820cb0ad24006ad5a94b976be","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"11f4af9780dceb016edf05f65a935556","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"43c6d69b3a33696adfb93044707070ff","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"d1c5a443e8d661b20a4775971569f1eb","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"cfd31a29172ce70b991da9256fc2e5d0","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"d2cd227af7a44ec9629ca9b063e2a780","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"4c9480a3b6d7ca8921fe3b0fc94fe1b8","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"a2cd8d6891924fdf14bc782febc217c9","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"1bb7c8acf632c0a5607206135130688e","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"114d02b2a680166d9070581cb5992bfb","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"4e03cbe08659848a776909fc2489a8e2","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"31ac1135dee1bae8e655163d1c79bfc8","url":"docs/developer-guide/DML-statements/index.html"},{"revision":"71dc4a5033766b7427d9f69547cabf9b","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"ab17047724fc4de1ca0fd66a0c6e0973","url":"docs/download/index.html"},{"revision":"558c506d2743a13373a4652f4c483735","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"fa555b4e8f27cfcdb42ec2168730e75e","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"1350c18311bd71638445de1a5e110010","url":"docs/FAQ/install-faq/index.html"},{"revision":"b06964d132fbe28b898372bfc10d37e2","url":"docs/FAQ/stonedb-faq/index.html"},{"revision":"80ae58e275edd40a827e3cb8564dac1d","url":"docs/FAQ/troubleshoot-faq/index.html"},{"revision":"5d310f40b8316af7e5a581a5bbc8bf05","url":"docs/getting-started/basic-operations/index.html"},{"revision":"29bfd366a847b120ca4a29251e0ce7dd","url":"docs/getting-started/quick-deploy-in-docker/index.html"},{"revision":"f24f56bbd3a97b58c0fa018859408583","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"7cf396a3fabbf56a306c910f88768a17","url":"docs/getting-started/quick-start/index.html"},{"revision":"7cfd7fb09b00409bb5322f2c318156c6","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"e07082b41c67c1cd9f455df2600835ca","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"fd10966dc26881e0a7801547e8b141cc","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"d49962b852df8e4ded447587ab43f89e","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"0ebd55fade23505dbbae4d9dd4405b2d","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"5a44d318e7d66a7c648fd22f80f4b7f5","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"170161bc96870835c50a6dc0acf813d2","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"0ff7471aaf227bedd3443e40b39fddcc","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"e56130149028ded23de1e551a5908a9a","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"bdbab9c7d96c33dff958f9ee0ebb26f3","url":"docs/performance-tuning/performance-monitoring-commands/cpu-monitor/index.html"},{"revision":"9dddc3528f105f026d90ec350c07cb26","url":"docs/performance-tuning/performance-monitoring-commands/disk-io-monitor/index.html"},{"revision":"803601bcfefacec5c16c0ecec7dd14d7","url":"docs/performance-tuning/performance-monitoring-commands/mem-monitor/index.html"},{"revision":"12e2fc3aa3e44e4c579aa4e8b86b3f83","url":"docs/performance-tuning/performance-monitoring-commands/network-monitor/index.html"},{"revision":"ab2ac059b9e9a48fc800ce9ff94ce87e","url":"docs/performance-tuning/performance-monitoring-commands/top-commands/index.html"},{"revision":"b6e4a1c4a6c3720e6bad615e92b1ff47","url":"docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method/index.html"},{"revision":"0c56b75f5d90bda1d40e90f9fddeee13","url":"docs/performance-tuning/performance-tests/OLAP/tcph-test-report/index.html"},{"revision":"cfd7c11ef1ceda127a7f5a85ea4dfd15","url":"docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method/index.html"},{"revision":"51cf52d0d9fce86581a71fc4ae7ec4f8","url":"docs/performance-tuning/performance-tuning-overview/index.html"},{"revision":"bf770197351e0fe3107418cea32a227c","url":"docs/release-notes/index.html"},{"revision":"440d46556506fa0341b03fc158cb5d16","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"ad9c9238cd33885795bfb6ffc44cd5e5","url":"docs/SQL-reference/data-types/index.html"},{"revision":"ce4fbd8e683f1a09fc942a8198baffbb","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"b819827eb918611073026b702b47a486","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"60b7187ad365a760651307dca79fbca8","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"393ec6a3331fbd48849df703d9ab61f3","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"da79d6fec3d96a386e702213c594c858","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"74525f722c1a80c18695b4739e03916e","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"f09ed70fa16615b783980a0e809f9253","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"8915095e82b9c7b59978186375c94d0c","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"8bf47d5e9314071c71eb6bece45b0704","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"b309e088cb866b596c2c4308ec011e25","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"31fa1db92f5bf8ab0dfff94602d0c632","url":"docs/troubleshooting/excessive-large-directory/index.html"},{"revision":"1262328a3f29e12659c3c6378da26be3","url":"docs/troubleshooting/failed-to-connect/index.html"},{"revision":"124d1582045c69c07fe4cdeb8c6c9e51","url":"docs/troubleshooting/failed-to-operate-table/index.html"},{"revision":"6d66958f09c9647fa461e75383a80896","url":"docs/troubleshooting/failed-to-start-in-kvm/index.html"},{"revision":"f4a57a5c7d57d96f21a5cad86dd67529","url":"docs/troubleshooting/failed-to-start/index.html"},{"revision":"d7b85e6bcacfe84f1a020dcaaf63b59f","url":"docs/troubleshooting/mdl-wait/index.html"},{"revision":"006ec2f6ef551e8019bbb7dfeca50672","url":"docs/troubleshooting/resource-bottleneck/index.html"},{"revision":"7c8a220381e0e84f48a4caec7b420921","url":"docs/troubleshooting/slow-query/index.html"},{"revision":"33abffffd3b00ad0d46a8ef1cd746b13","url":"docs/troubleshooting/stonedb-crashed/index.html"},{"revision":"4c7ea381e940d20127703010bc3fce8f","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"a8a96a5c642dba13dbdcc4970e6a453b","url":"styles/panel/index.html"},{"revision":"6d1a0a8eb4d6e038099a726bfe52a1ed","url":"assets/images/boost_dir-f70a6179a9ce56e57b326c14180b266a.png"},{"revision":"3cab0b06302758b89b4dc43644f0d663","url":"assets/images/command-output-example-522bc25951d14d9b344148ddc4730b8d.png"},{"revision":"92eeb9fa55875381b00166e838f3ff2a","url":"assets/images/example-1-dd086d4d488bb8369f957e965c0f289f.png"},{"revision":"3b76f287a544deb24c684f4babc2e897","url":"assets/images/example-2-27fb5eb6d609f4d4b11ab86421bb8c78.png"},{"revision":"0f5ae212eb74f5072b0bfdd3c195326c","url":"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},{"revision":"478a9085491a32434fa4e1426801623e","url":"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},{"revision":"264add1ea07d3cff382254e78b53f904","url":"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},{"revision":"7f9de87f3d9b1500d6e5bafbecf9784e","url":"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},{"revision":"d68910942a8c2589892bc1365ffe3f99","url":"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},{"revision":"32bd06eae194c6d8118693e847338dfc","url":"assets/images/marisa_dir-338883c6bd0e89d1209ad7a84cc4b7b0.png"},{"revision":"fc2c97f5c51813aa8c90b9f928e66150","url":"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},{"revision":"9e61a77c3aca4fdaf2bb9aa625bb8072","url":"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},{"revision":"49a82803cd53badf18b0c564346d5d01","url":"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},{"revision":"5bb92f5d74e99d033078c3d396ccad1f","url":"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},{"revision":"118073e57255d386df4980469cabc664","url":"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},{"revision":"0548b942b86e788c1359ff83e9167d77","url":"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"},{"revision":"5470b143ed086e30e52d3303a6cb3af1","url":"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},{"revision":"f1b2459acc6347448ad44f6ff6497bf6","url":"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},{"revision":"1f9abb360460534e553112590f21e50c","url":"assets/images/rocks_dir-1bbecb3f3e5b776ad917c7513ef024f6.png"},{"revision":"253077e6b28a31eedfc164fc3e286f33","url":"assets/images/stonedb-architecture-V1-cc5186dede7f33f3e6e7d6fe5a65ca5b.png"},{"revision":"d6dcae477a97c1e7ce47e317b0810b9c","url":"assets/images/stonedb-vs-clickhouse-814ec519173b47ec54c89ce50b59ba29.png"},{"revision":"cc0c107224e8cf5503ec65ddad8fedd7","url":"assets/images/yuque_diagram-1-ddc693fd0a0e588c620ed8b8bcca4fc1.png"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();