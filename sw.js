(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"baeabb243bea595aa752e962fdcd953e","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"949ff91865b30a91dd02641d42086051","url":"assets/js/074f5d7c.bade64f7.js"},{"revision":"6a873bcca8f4d13edb43719694bd71ec","url":"assets/js/08e78a0e.2b8adfcb.js"},{"revision":"467727289de1e70d20eab253ff5df0da","url":"assets/js/0b022f4d.f469396e.js"},{"revision":"557e760bc538dbf36bbcb85038e91f33","url":"assets/js/0ef89b26.de766604.js"},{"revision":"6cbcff40d39e4c44e6ab77635dcc5263","url":"assets/js/0f4306ae.c215220e.js"},{"revision":"bf96b55da29b10d8588e38b10ebef0f8","url":"assets/js/0f716783.0f33d693.js"},{"revision":"ffbf8d3436237c11b9cd6f33ca8d4e1f","url":"assets/js/14eb3368.c94ca961.js"},{"revision":"c58260cf1e9ece21fcae0250a78cffed","url":"assets/js/17896441.f5483d46.js"},{"revision":"7ce6b7caf9bc0cc18425c25a24333758","url":"assets/js/18540331.c78752b9.js"},{"revision":"f125779daf018efd955762ee6f7f3d0f","url":"assets/js/18f1d6ea.9168036d.js"},{"revision":"39301ebbc6ca8cbe8e2821f47eaa7d82","url":"assets/js/1be78505.409d0c93.js"},{"revision":"32dac4feb270d75fdd7c956981a0874a","url":"assets/js/1c437329.f77f5cd1.js"},{"revision":"b4f1a9bebe6e95c1c79b52bf6e38b5b3","url":"assets/js/1df93b7f.f0e2f14f.js"},{"revision":"b3ade68cbb743c9476dc9999e4067240","url":"assets/js/22111832.5f85ef25.js"},{"revision":"677421115f38b89797082ffea7dc9271","url":"assets/js/22f2b658.2b1482f8.js"},{"revision":"b2848b005a36e6bbd6af06968ef60567","url":"assets/js/230.6f9e9fb4.js"},{"revision":"a04ff9c1d7fbdb3956f4a26ae4142515","url":"assets/js/2449e716.39409eab.js"},{"revision":"136b4b1db41a5590636cf07644a65685","url":"assets/js/255ff5c9.ecfb8823.js"},{"revision":"c9ca4499cd398bb267a48d891ec05d21","url":"assets/js/29654f22.59b012b4.js"},{"revision":"e0f632880384fa3acb26efa29043bec5","url":"assets/js/2ce02311.61e67c6a.js"},{"revision":"c4109987bdd485d58275c5380a86d78b","url":"assets/js/2d89c24a.61ceb6d7.js"},{"revision":"b25e168cfb03cd994380081e9785a4ab","url":"assets/js/2e06712c.e1d07870.js"},{"revision":"20284e0e56e5df8d9ef034b67f481651","url":"assets/js/30ac1bba.009ace02.js"},{"revision":"0cea5fc48884220b099953addb862a07","url":"assets/js/323a772d.313af9ef.js"},{"revision":"3eb9dfd888ba1d1dfe22136df8a28681","url":"assets/js/32890476.decd9254.js"},{"revision":"ab5078ed5f901f3d0a3f9ca3c88a6f8c","url":"assets/js/3973c022.8fd3c73e.js"},{"revision":"db0b46cc0bcce48fddd5a0463fbe0e7a","url":"assets/js/3a0dcde5.e3f2dc5b.js"},{"revision":"5930e1947aacbabe3de57928529fdfc4","url":"assets/js/4260dd22.3e7269a0.js"},{"revision":"358268fe254bd22bd26b8ccf4296dc12","url":"assets/js/455ed5a2.b1a552fe.js"},{"revision":"b57c9ab2e55d34aa2de4cff37abaf10f","url":"assets/js/483ae289.b215e81b.js"},{"revision":"2750fa3f912babfa85564c29ebd51796","url":"assets/js/486.5532403e.js"},{"revision":"11cff27582661a3a6dfa899527be5eb3","url":"assets/js/4a3ff6a4.f69d33fe.js"},{"revision":"e805d5078b022e6918d5714630e6369d","url":"assets/js/4d282e45.37d26f9c.js"},{"revision":"29bb308e263755fb040716444b3db93b","url":"assets/js/4e9af88f.057d76fe.js"},{"revision":"0faf3bb04a37f5c2fa28dd608c16e6e3","url":"assets/js/5131.7ee3fe40.js"},{"revision":"5d98546b4a48c1420f970aca160f6ef4","url":"assets/js/526483e9.a805f187.js"},{"revision":"7142d9d6858f31b01edecf05c9b86865","url":"assets/js/5283.43e06db6.js"},{"revision":"1b8c91ae329d98a22c347c39312db751","url":"assets/js/57ca1a6c.6454c5bc.js"},{"revision":"c7baff784ec7d4197870c5e797bfaf56","url":"assets/js/5a60bc19.a92a778b.js"},{"revision":"eb8d933c55cbda56faac6aeefa144109","url":"assets/js/5b24358c.ed28108d.js"},{"revision":"a7433cd4d4a9782e24662db15432a174","url":"assets/js/5c2ee7f2.987b399e.js"},{"revision":"d4118ccec4f3f85787c101670d7371ce","url":"assets/js/620f3d5a.ec25efa2.js"},{"revision":"0b09449e349e2510028c1e0edd98faa5","url":"assets/js/6213bd70.1db5eaa1.js"},{"revision":"29d450d9bcd1df90d712572e9a526c82","url":"assets/js/661f9197.b4e1da61.js"},{"revision":"0e91ae66ce048510818434bd6fd3ddd4","url":"assets/js/70148c99.53cd8937.js"},{"revision":"7f192e08204f3191ea6f4dfdc0c52155","url":"assets/js/7025460f.34408505.js"},{"revision":"90b937d350b3b196c57b403061c84fea","url":"assets/js/710b4d00.023c97b5.js"},{"revision":"d51350e52081cd6744544d18f86928c2","url":"assets/js/732bcb33.5d3ffae3.js"},{"revision":"5efff39706f8672d3d8b02e350170af3","url":"assets/js/74b4518b.3eacb429.js"},{"revision":"f0dac6f8846cbb9113074e5bad34cc74","url":"assets/js/762a74d1.f6cced7a.js"},{"revision":"b5a84f97f17624acf42df98c39d65b8d","url":"assets/js/77e8ab63.8d13be24.js"},{"revision":"b2bfa70fc04fe9b83144d200a3956e53","url":"assets/js/7d884dc4.5bce5bed.js"},{"revision":"5a5b44952cf5d2a900c9fe346b12e8e6","url":"assets/js/827103d9.ba65b6a0.js"},{"revision":"4c6ee7b4a9bbea5160097a84a4561307","url":"assets/js/88aa99b3.7085fc9c.js"},{"revision":"1b134958ca4c0669c2d553a5247e22e0","url":"assets/js/8e45b355.a6bb5f5f.js"},{"revision":"45da017836e966f90c88d7dba5b5eb21","url":"assets/js/9095.ace644b6.js"},{"revision":"cead92c4cf3a10bdaa3e407ed75c32b0","url":"assets/js/90f39abc.6acc58c6.js"},{"revision":"4adfc6e667aa68de318d8f9afe19d119","url":"assets/js/92e4965d.f7baa79c.js"},{"revision":"ae5599fb6593210b0d7a11995d0737b8","url":"assets/js/935f2afb.8b2a3288.js"},{"revision":"0711155caed0bb280c49443f65f1e79a","url":"assets/js/9582272a.da038ed5.js"},{"revision":"7821ae6a214decb6c120356517e0d740","url":"assets/js/978250d5.2b1ee5db.js"},{"revision":"f70988da5c940e4f4beba10f8babfff0","url":"assets/js/979.4215d9d4.js"},{"revision":"dd0da58714533c26ab1e5c6b4b69f61c","url":"assets/js/99c774cd.cf9637d1.js"},{"revision":"713f4e6bc656e384e2afe0e67f1a3d62","url":"assets/js/9ab16355.dfbbbd4b.js"},{"revision":"625a0531e6062f8877aa16d50dff014c","url":"assets/js/9e4087bc.6ec2f1e9.js"},{"revision":"6fd04964b20718a0df44d5e52cc7918c","url":"assets/js/a084f012.297f3771.js"},{"revision":"aeb0b5a9fbfad828c1c6b825808fac02","url":"assets/js/a1cee58a.9a97ce68.js"},{"revision":"4fe7369e94db7c8a807476b1bcce8dba","url":"assets/js/a52d1736.83246838.js"},{"revision":"d466cb12b142a1e79d5bc699a5d499df","url":"assets/js/a6aa9e1f.7c52a3ef.js"},{"revision":"c6e6f65a7c24a9273bb052a3e02fb1af","url":"assets/js/b47042a7.ab553115.js"},{"revision":"675c3a37c5456fd4db0c77d80a7e9609","url":"assets/js/b5d007fc.e148b4f5.js"},{"revision":"99d5f159d64f73a991e8096a99f86763","url":"assets/js/b5e1e86c.9dc05375.js"},{"revision":"e13f4567eb15d4b95eccf57b5d20c311","url":"assets/js/bbadbe64.e5e21b96.js"},{"revision":"68657157e800642d66d30ab3ac570e78","url":"assets/js/bbef8dd2.cf94d2cd.js"},{"revision":"b4fc49d3437e9423dc79fbd18764cfd1","url":"assets/js/c3b7f9ab.475fd915.js"},{"revision":"879c630fbeb921a90eb1930583a01559","url":"assets/js/c44a072f.293ab893.js"},{"revision":"733f1c698db15450b3e496ef9a4796c9","url":"assets/js/c4577ea8.e67e23c3.js"},{"revision":"81da04b54791584d2aac031c5b318e1b","url":"assets/js/c477196e.11d93b22.js"},{"revision":"80ccda43e397f4f1365de7c62b20ae01","url":"assets/js/c5664fdd.096f20f4.js"},{"revision":"ee31dbc1b39a1cf9ea3b9d6f8acb88d5","url":"assets/js/c85fdda8.7b542a79.js"},{"revision":"9435ecb5fde79fd55f469455af3a20a3","url":"assets/js/ccc49370.012099c2.js"},{"revision":"3f6a9ae994a9d4f64fbf86c5af805842","url":"assets/js/cd49fced.07b0fe87.js"},{"revision":"bfaadbf3f3c4dcd22e97fac8450ab770","url":"assets/js/d853795f.5fd6b7c6.js"},{"revision":"e415cd9d0b8cb4e82904e4a40b6f3514","url":"assets/js/dbaa48bd.dc13598a.js"},{"revision":"cba9d63cb5edaf019a55c3fea7faf5b4","url":"assets/js/dbc41f12.1691724c.js"},{"revision":"865e8123d7a7d46413db623e85ba6c0f","url":"assets/js/e2521bdb.31477f8c.js"},{"revision":"6d72447d27482ef17daa12de964ba49a","url":"assets/js/e426ef98.e5c12503.js"},{"revision":"b18d50f747033db78e2c33b871575335","url":"assets/js/ea1d5fbe.0fd36592.js"},{"revision":"05d66a5eeb701bbef4763b6afc93430a","url":"assets/js/ebee253d.96e9c9f9.js"},{"revision":"dda71011f164a2f0905b319cefee75ba","url":"assets/js/ec0f8f48.881d99e6.js"},{"revision":"e9640e22b0253e2b27dcf0909b06eeb3","url":"assets/js/f01bb215.8bd7a000.js"},{"revision":"2fbdc5090564860a301ff64779eaf5ed","url":"assets/js/f0df5922.3df17963.js"},{"revision":"3e15a344fde73cfa40cd15756dd39982","url":"assets/js/f553487a.52c8161c.js"},{"revision":"4841f0ba20c94b53f94d0659e1397f2f","url":"assets/js/f56caf0f.622ebaca.js"},{"revision":"21db7d0743f3d2789ca88a0bbefb94d3","url":"assets/js/f8f941b3.d7b3d0cc.js"},{"revision":"3726afde6d54fe14cd17c101db1a86fd","url":"assets/js/main.356c5ca5.js"},{"revision":"8309a262ddd052b0becd8ee829e37dd5","url":"assets/js/runtime~main.fcf319fd.js"},{"revision":"6ff82c7493571b81e6f5d0d5a74a5066","url":"community/archive/index.html"},{"revision":"54ae4120e626823fd6bf508011aff6c7","url":"community/index.html"},{"revision":"1065eb0f0c26396c7ccaecb9de67c014","url":"community/main/index.html"},{"revision":"1a8e0308c67bd041e49c96c62ff3d43e","url":"docs/about-stonedb/architecture/index.html"},{"revision":"a0beb1853566297abd892740a459bc00","url":"docs/about-stonedb/intro/index.html"},{"revision":"0a3109775a2156a2466d241b5fca2ec1","url":"docs/about-stonedb/limits/index.html"},{"revision":"c7ea6ef552f145bc670d8c8c70496ef1","url":"docs/about-stonedb/terms/index.html"},{"revision":"280dfe8af9f3c2208a33ad7b32c2c0d0","url":"docs/compiling-methods/index.html"},{"revision":"6f71ef4fd0cf8da51624ddccf12f263e","url":"docs/data-migration-to-stonedb/use-gravity-to-migrate/index.html"},{"revision":"30b2142eda56ef480f847bcc915c7082","url":"docs/data-migration-to-stonedb/use-outter-to-migrate/index.html"},{"revision":"d7b1633bf7b875d460a1d68b5ddc91f7","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"633264e971dc97894f9395ab85a4b02a","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"27f02af20eefb612f44e0e08d6056411","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"55890075a94d248b6bd542b9b8bf335f","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"441331894d010a1879156da6f694c610","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"ba017689b754ca1a24b4e07a36baed3c","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"5868d8a54f4432d16b4bc10a0898ad99","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"9983074589c88f289e4d77be28408921","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"d07bb24fd7ffdce0a7f1b102d7ad7f6d","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"123eb3ccb8167ff2f6a3b2b53bd8c803","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"ad1f3423a9c06e5b3439c263ad3a8c24","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"046ef9bda16084f228c0ec209848c6b7","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"7359aa3f21d2863cd07370b22ef348f4","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"ef89d6af546c25d3d07c073adb0e6de7","url":"docs/developer-guide/DML-statements/index.html"},{"revision":"df048d25479b8d83254f7df422fc4004","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"92c9f4890ae959ccfcfbd3d00b63836a","url":"docs/download/index.html"},{"revision":"cf9e020b0e8b66b81120f9e269816be3","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"2b1c9ceee3bd7d78eccad61a7f531592","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"40315628599fb6e797ab20cb2ea24335","url":"docs/FAQ/install-faq/index.html"},{"revision":"5dc106bd8956d3e5d22cd7b3d5df4f25","url":"docs/FAQ/stonedb-faq/index.html"},{"revision":"1b22bd4b96ff3028eda5e609151eda8f","url":"docs/FAQ/troubleshoot-faq/index.html"},{"revision":"b3d935da40cc7a27ff2370411edc5967","url":"docs/getting-started/basic-operations/index.html"},{"revision":"33a45fbc505ebe3c1ca699ee045d23be","url":"docs/getting-started/quick-deploy-in-docker/index.html"},{"revision":"5b02a40ab88b29acab0fe3e4a39f5c0a","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"49fb26e55492074628bdc06723564e21","url":"docs/getting-started/quick-start/index.html"},{"revision":"beba24b92eb199a854dc9aab65e30f96","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"331a7dd59b0e4547233f1eb23e1f853f","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"f51ef20a09bcf5fe9507319b0a1cee3c","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"5b26d1a6da125a72d0de7ed8bb34decb","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"9abaf3d2c9ef5df6f56bd96019e91d91","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"51b4baf93d23c5b51168028290fea7df","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"1005b09a1395b7c39523b7c808b0b266","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"07ee1eefe37908aa4cad10dbe832cabb","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"903e64ef7c88ab8d17e62d3752d0c9ea","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"8a064086c7e80adcff5e6c43fe3b5c58","url":"docs/performance-tuning/performance-monitoring-commands/cpu-monitor/index.html"},{"revision":"76b93ef4a354e6bf67e357dc8901c49e","url":"docs/performance-tuning/performance-monitoring-commands/disk-io-monitor/index.html"},{"revision":"ca43263a391ea38be31b52276132de70","url":"docs/performance-tuning/performance-monitoring-commands/mem-monitor/index.html"},{"revision":"0c24af427288d4c524801de96a776d62","url":"docs/performance-tuning/performance-monitoring-commands/network-monitor/index.html"},{"revision":"bbf733bd8e83cb84321fa4d372630105","url":"docs/performance-tuning/performance-monitoring-commands/top-commands/index.html"},{"revision":"faaebb74d66765e9b7fd8e051924b86d","url":"docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method/index.html"},{"revision":"dfaca2e31e4fd3f1e34845204b1d019a","url":"docs/performance-tuning/performance-tests/OLAP/tcph-test-report/index.html"},{"revision":"626a10ddd441f8c82b40aac350c048e6","url":"docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method/index.html"},{"revision":"b4e1f1fc51ecd7a5b2adf54ca1fdbc5d","url":"docs/performance-tuning/performance-tuning-overview/index.html"},{"revision":"1d31c5145012e060c234480cd72cb7e4","url":"docs/release-notes/index.html"},{"revision":"af91968015544bc3dbb6cf30a77259f5","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"00427216c15032cb2056b45a7ee869f6","url":"docs/SQL-reference/data-types/index.html"},{"revision":"dc5650cb6079ca7a29dffa6b5c452dde","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"c8d17180bf4d3ce31115167764634e45","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"4b6866392dab9024482ff6b8641d83d4","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"87f416b0d70ba90dbc5ceb6260fe1bd5","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"ac8005b083428316e57fa6fa4b9146eb","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"bc7f889a7e203a6af5df9205747c3525","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"63e78551f45de583eee9cf2ee983023e","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"55108103c7ff0ce10ced443feac27516","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"6514bbced5b36bcf9a7ebce6d465cd9c","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"5174fcbe282184ced4cb6a964fee4169","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"a7d1d179955654a064a7d3d0e5ce74e1","url":"docs/troubleshooting/excessive-large-directory/index.html"},{"revision":"cb1ee5e923557aa8652f38683ec62bd2","url":"docs/troubleshooting/failed-to-connect/index.html"},{"revision":"69fcb8d94d83300140c3a779ec80bd9f","url":"docs/troubleshooting/failed-to-operate-table/index.html"},{"revision":"5d45bbfc8de548dccbad0d6b6ce3e20f","url":"docs/troubleshooting/failed-to-start-in-kvm/index.html"},{"revision":"08134f978b6f642973e725d493187fe2","url":"docs/troubleshooting/failed-to-start/index.html"},{"revision":"79e79059e7de410355c7a9514af407e8","url":"docs/troubleshooting/mdl-wait/index.html"},{"revision":"8f4ac000e101be3989effb1abdfeb972","url":"docs/troubleshooting/resource-bottleneck/index.html"},{"revision":"a8c6cc66d17d8217bb0ddb3f41f3baf0","url":"docs/troubleshooting/slow-query/index.html"},{"revision":"9d6a5f9bc14c6f120ef4ee2e80ef5ca0","url":"docs/troubleshooting/stonedb-crashed/index.html"},{"revision":"6c8b88fb682b60af50e207493ec3ee1b","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"5cb0ac2212b0c0983e612eeb264247b5","url":"styles/panel/index.html"},{"revision":"5d5d660968e722cf3b871a63e65c7ad6","url":"assets/images/boost_dir-f09f86eb37da3bc21e28bc47fc46edf4.png"},{"revision":"3cab0b06302758b89b4dc43644f0d663","url":"assets/images/command-output-example-522bc25951d14d9b344148ddc4730b8d.png"},{"revision":"92eeb9fa55875381b00166e838f3ff2a","url":"assets/images/example-1-dd086d4d488bb8369f957e965c0f289f.png"},{"revision":"3b76f287a544deb24c684f4babc2e897","url":"assets/images/example-2-27fb5eb6d609f4d4b11ab86421bb8c78.png"},{"revision":"0f5ae212eb74f5072b0bfdd3c195326c","url":"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},{"revision":"478a9085491a32434fa4e1426801623e","url":"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},{"revision":"264add1ea07d3cff382254e78b53f904","url":"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},{"revision":"7f9de87f3d9b1500d6e5bafbecf9784e","url":"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},{"revision":"d68910942a8c2589892bc1365ffe3f99","url":"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},{"revision":"2ed86e673909ea2d3cd94a37a82fd99b","url":"assets/images/marisa_dir-75eb57fbce88e88ab035ae0ceb6dd196.png"},{"revision":"fc2c97f5c51813aa8c90b9f928e66150","url":"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},{"revision":"9e61a77c3aca4fdaf2bb9aa625bb8072","url":"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},{"revision":"49a82803cd53badf18b0c564346d5d01","url":"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},{"revision":"5bb92f5d74e99d033078c3d396ccad1f","url":"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},{"revision":"118073e57255d386df4980469cabc664","url":"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},{"revision":"0548b942b86e788c1359ff83e9167d77","url":"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"},{"revision":"5470b143ed086e30e52d3303a6cb3af1","url":"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},{"revision":"f1b2459acc6347448ad44f6ff6497bf6","url":"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},{"revision":"b10a57fe1679f801597c3a98421aa8e6","url":"assets/images/rocks_dir-fc2d9e40f3d2a745dc17f1e766578bbd.png"},{"revision":"253077e6b28a31eedfc164fc3e286f33","url":"assets/images/stonedb-architecture-V1-cc5186dede7f33f3e6e7d6fe5a65ca5b.png"},{"revision":"d6dcae477a97c1e7ce47e317b0810b9c","url":"assets/images/stonedb-vs-clickhouse-814ec519173b47ec54c89ce50b59ba29.png"},{"revision":"cc0c107224e8cf5503ec65ddad8fedd7","url":"assets/images/yuque_diagram-1-ddc693fd0a0e588c620ed8b8bcca4fc1.png"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();