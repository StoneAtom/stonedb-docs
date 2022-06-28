(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1c4044561c360bd9b2235b46644f7a6a","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"1df4b60d5866f9973f435644fb14b1f2","url":"assets/js/04a1ff1d.c463123c.js"},{"revision":"0f0a9ad91792c052283840fbed24a110","url":"assets/js/08e78a0e.a24ae71d.js"},{"revision":"1c3d3ad7fab72ad100e8100ba9286dad","url":"assets/js/09bd8251.1a385e3f.js"},{"revision":"465465605d803b776953d3e740382729","url":"assets/js/0ad4fb1f.aa4b641b.js"},{"revision":"2936d0eea64cdb2d553c359c33a773db","url":"assets/js/0f716783.3fb6ecf3.js"},{"revision":"fe6e142f2248f440417d3f9a2873a1b0","url":"assets/js/12d4b11f.fafc97ff.js"},{"revision":"dbd304360336c7a099653ad888751e09","url":"assets/js/13caa995.3cd4cffb.js"},{"revision":"3aafe329ecbd0c48f477a85c152325b6","url":"assets/js/13e82bbd.50d37a20.js"},{"revision":"76c5dff0a59cc35711eb0c4d71ca9603","url":"assets/js/145f8dde.336bac33.js"},{"revision":"5ab8c840e65669d305b250ec1aee97c3","url":"assets/js/14eb3368.19ca2084.js"},{"revision":"cffb56a6361eaf7312c6ff2a046c8a64","url":"assets/js/17896441.d65bbfe4.js"},{"revision":"809453e3edcfd9b10e0fb36755ac3e72","url":"assets/js/1be78505.9607912b.js"},{"revision":"9a29ff1808f444ac5b56408363faea7b","url":"assets/js/1df93b7f.57cc8227.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"798b892f2c1ba7bcf7ac92028dedc2c8","url":"assets/js/2b1e257e.922319a5.js"},{"revision":"3abfd892f1ee41ca84a65b562c8e50e6","url":"assets/js/2fd5ee2e.58976eff.js"},{"revision":"cadcea6fad85ebbe3c27b79f95294874","url":"assets/js/323a772d.d46f0d56.js"},{"revision":"15cc5d5c3a0266eb1287ebff4a8b88fd","url":"assets/js/362dbadd.a923cfd5.js"},{"revision":"d480993519c62a2008ad2da23029076b","url":"assets/js/3819a278.5473f13d.js"},{"revision":"6bb8da7e857904ca96238fe222b84b04","url":"assets/js/47a2ab89.9d0d58ed.js"},{"revision":"12a46c824c22cf78a6555fce8d02f57e","url":"assets/js/4972.ec6cfa17.js"},{"revision":"c35f71855e95dbb17008d7d1b8e707d9","url":"assets/js/4a65324b.f4fb7e73.js"},{"revision":"e169f31d44839f5b2014e81c3fd65c1b","url":"assets/js/4b23bafa.f47bfc9b.js"},{"revision":"31ce709329da4c05767542c57532c04f","url":"assets/js/4e9af88f.324da6d2.js"},{"revision":"bf25f9e3caa46d6052fb2764ac607587","url":"assets/js/5131.2c346bfc.js"},{"revision":"8609fbee032dc7d2e116cb64e5a93e47","url":"assets/js/5283.3f2d0697.js"},{"revision":"cf7573f8a5b42e23a045689ab227cd15","url":"assets/js/5503f11d.3282e253.js"},{"revision":"7e201b3b3adb6b00c2b15737ca4233c6","url":"assets/js/598ea675.146f7872.js"},{"revision":"11ef227992fd6aa6c8b66b2afb68d898","url":"assets/js/5ed9614c.a335178c.js"},{"revision":"e6a533c92d288e6235ef5d6f62f590ee","url":"assets/js/60598a8e.58023bb4.js"},{"revision":"7cb2aeab1e3a12d2b0a06d54fab93e0d","url":"assets/js/6f8bdcd2.2d928347.js"},{"revision":"0ebb85f9750b3fe995f0c378828631be","url":"assets/js/70cb9d50.48f75ded.js"},{"revision":"944759d5f14d207a6e8347d21b2bccdd","url":"assets/js/71baf73a.3132f09f.js"},{"revision":"364273885b5ac95ba1096ec33137f067","url":"assets/js/7acb1c21.8a667f7c.js"},{"revision":"cef0751b3c5e2b9e03c98e496a4cf02e","url":"assets/js/7ceb65cf.5f1ae7fe.js"},{"revision":"5b9c593138f36fff857a9553e2726f11","url":"assets/js/85e76eb8.1288f6fd.js"},{"revision":"e2f31cbe9fd54318cb0c422c6a334f29","url":"assets/js/88aa99b3.88c64994.js"},{"revision":"0bdbea21a29252297c0f0368a03cec1f","url":"assets/js/9095.0fc2c9a4.js"},{"revision":"f017b87f0af22b32f7fb7efb0702ffba","url":"assets/js/935f2afb.b5d82094.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"8df29753d176f173928d75467fe00ace","url":"assets/js/9babdf19.3a83710e.js"},{"revision":"7e885cb87b801bcccc8a483773a4df9b","url":"assets/js/9e4087bc.54902b5d.js"},{"revision":"c111f47a78dd3b841011547f03838925","url":"assets/js/a1aff75e.26e540c6.js"},{"revision":"ef13958c5e9200935ee3bf862c8072d9","url":"assets/js/a30d9234.d68b62bd.js"},{"revision":"65a85fd0398f0eb7ccefef5caa201284","url":"assets/js/a60863b3.89cc6ca5.js"},{"revision":"51221b8c82d836a0b3b34bfbb85e804a","url":"assets/js/a6aa9e1f.be9cfeeb.js"},{"revision":"76cdaa655bfddb267f6b656d70ea0659","url":"assets/js/b0461066.28220b39.js"},{"revision":"ed24c11e7a2210d483f523d928319e03","url":"assets/js/b5e1e86c.6b598a46.js"},{"revision":"be4fc3d3592d1f59310a6a157c4b8915","url":"assets/js/b6a2d028.96fc060a.js"},{"revision":"bc20f8366141289539a5f5b1e3425056","url":"assets/js/b6dcf72c.7f679068.js"},{"revision":"c83aceb22687aa19f64937f4002b247f","url":"assets/js/b89ea502.044d210a.js"},{"revision":"370b2a665a7d7ed3ffc6f6a724220482","url":"assets/js/b9e5bc89.7febf8dc.js"},{"revision":"ff98ecd4c2048c12f440a59f53a82904","url":"assets/js/ba368d59.f93f5bda.js"},{"revision":"c6b12e1eb268b1f388fb30dd497ee8f2","url":"assets/js/bbef8dd2.6a9aff85.js"},{"revision":"ad2cae17fdff8fb10b199627952b340d","url":"assets/js/c0b8e79e.bc1ed4b6.js"},{"revision":"9b1f043bc4844e0c16172d34da09cfae","url":"assets/js/c0fdcace.40d5dbce.js"},{"revision":"fa264169be1eeaaad2d2cc34c6c8f3c1","url":"assets/js/c52b4cc1.4ea37ed0.js"},{"revision":"ada6b2fe2040d2eaf506145076725f95","url":"assets/js/c9277353.14414217.js"},{"revision":"22c2b912a0e50cb9f97d669dfe22502c","url":"assets/js/cc79c185.1113616c.js"},{"revision":"a53dc62b37a7ccd074b9a5fb0e7fd44a","url":"assets/js/ccc49370.0f944677.js"},{"revision":"60cd0a378543ed42baf52d3210c7aeec","url":"assets/js/da63d0b1.0e51436a.js"},{"revision":"085adf087634ba7a3be4005627f30963","url":"assets/js/db6eec97.da853fb4.js"},{"revision":"40693d26fb09b9ae5a556f26b71be01b","url":"assets/js/dc4bb4c7.4e1bf8c1.js"},{"revision":"c4ebedeeb1b37d7c32f321c191a8239e","url":"assets/js/e5c6d364.12ed1ebb.js"},{"revision":"e5a0b6adaa89df8a72a33fc04673bcd7","url":"assets/js/e771297a.d20a321b.js"},{"revision":"67bc5d40a8a3b407798bf34a323487cf","url":"assets/js/eb1be72d.b6ba1893.js"},{"revision":"2506afd3fa5c2447cd3467d0111e3964","url":"assets/js/ec7e31c8.18ceb935.js"},{"revision":"0a2f2f0aa08049f666da69c8e689e331","url":"assets/js/f0e3321f.152f822a.js"},{"revision":"e1f15ada97d205e99b3d9b1af588984a","url":"assets/js/f1094363.64908e9c.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"58244d5c43e8ded80bfef41740d19d8f","url":"assets/js/f6aa66e6.092882e5.js"},{"revision":"bb3c2ebc600a54d9c9329c0fece39e37","url":"assets/js/f6e40cbe.15a8d568.js"},{"revision":"7b270938eea1288b965f3e9c407d599b","url":"assets/js/f7366610.1f8ce7ec.js"},{"revision":"b4b7f9dafe540d4c96f8fda6ca8a9858","url":"assets/js/f9e23376.3467d4b4.js"},{"revision":"f846424707e9a7c9b290f746f581da71","url":"assets/js/fa2a2f5f.62683c4b.js"},{"revision":"6e67cc60618681939c75d89a14051d4d","url":"assets/js/fe0fd020.af186374.js"},{"revision":"a9830ad52a1d7d47ffad9ba1f4dbd737","url":"assets/js/main.4623f002.js"},{"revision":"e53e83a323b67d8f28495078c1333f51","url":"assets/js/runtime~main.3da4328b.js"},{"revision":"8f2b5569ed47a9f50a652567db248f2c","url":"community/archive/index.html"},{"revision":"5574784b2571d81e9a4fe5dbaac743eb","url":"community/index.html"},{"revision":"66d81288616ed3af2e8566d442799dd3","url":"community/main/index.html"},{"revision":"cc9e63b972de6280769e9952e2eac7d1","url":"docs/about-stonedb/architecture/index.html"},{"revision":"0c55709e3a088c5645c46b90e8e81ca6","url":"docs/about-stonedb/intro/index.html"},{"revision":"4941f6e7c4fd97f6bf36e5fb59000aaa","url":"docs/about-stonedb/limits/index.html"},{"revision":"607f7b43196af181e7cd3e031fddac41","url":"docs/about-stonedb/terms/index.html"},{"revision":"6560205fa64d5e14785428c9e905d8e1","url":"docs/compiling-methods/index.html"},{"revision":"14048df6c3f20d54c91852b64eda6dc4","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"46e5aec3a8b6eb9541a8f8377f84bcc0","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"dbe41b5b37653f5b8b08af91aac1257b","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"43253c41554b2c8129ab612a035f2f93","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"965e6c37b23083572a2d651c1c9470e6","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"0847e5d24eb20e60f7fcf02d5c46390b","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"8419c94912162aa08eea13d237f460b2","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"66ab6eb543781197864fac8421777478","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"2c5ba933855687c730960119689c8050","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"69b89bbece57b5fa364e639a2910c4b6","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"20e8d9de277b86edfe77a9f70850de75","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"ad500f6cde400320506632f6377187ba","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"9abf3620e60abc2edccb67976e4c6570","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"df8784684180030a12cbfb829adb31bd","url":"docs/developer-guide/regular-change-operations/index.html"},{"revision":"06049626a0e2f9e407d0e90e0009071d","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"7244f050f60a3a8fecd6d1714db47641","url":"docs/download/index.html"},{"revision":"378a30e0ce25336b880b43f09aae0a3f","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"084fb5809c0732c447214a399f64a73c","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"4387cc2cd31dd657400ceca2072c4664","url":"docs/getting-started/basic-operations/index.html"},{"revision":"ea54f9098e1ca51510ee0d3506c2adb0","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"cfdde1124b01ec0866b9bdee311f2639","url":"docs/getting-started/quick-start/index.html"},{"revision":"0a45e28cbf5555014db9f11e9c655fc4","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"20880fa2182596d5d6e2a21e45cf9e89","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"8e4e2c0c0b322aa98d97fa76c0244851","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"697cb32ffc218d938c54016f6e8ba7b7","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"c8c0c6440b4a816c4146328a6e397c7e","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"8ef03ca3a7879426244da05be7155700","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"c143755ab67a3b9db3159c1d9f073f5f","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"a54c91d81b27828dc599450dec05a8a0","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"50eca479870a44cf9cec6d5613e024b9","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"acb6779a44cb27ff5401f0572b70144d","url":"docs/performance-tuning/overview/index.html"},{"revision":"2b1bcb4b3bb4cefd3fa39335877f97e6","url":"docs/performance-tuning/performance-monitoring-tools/cpu-monitor/index.html"},{"revision":"52f8e64e738255f99c3b8d1a53c0c1c9","url":"docs/performance-tuning/performance-monitoring-tools/disk-io-monitor/index.html"},{"revision":"82db267628006c7ef89ebd65d1c0820d","url":"docs/performance-tuning/performance-monitoring-tools/mem-monitor/index.html"},{"revision":"500ff4d6e1dbe03bd3887d661f405a3d","url":"docs/performance-tuning/performance-monitoring-tools/network-monitor/index.html"},{"revision":"ed1f42f00de8fd1894489f9cca5c958a","url":"docs/performance-tuning/performance-monitoring-tools/top-commands/index.html"},{"revision":"e3cf49545cadb876b1ed1efe419cc4a7","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"8a64f07427887f5a32ae7f9bf03618a0","url":"docs/SQL-reference/data-types/index.html"},{"revision":"4961ee5c02badd82554f7a95e4bd9069","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"7e959a875ae79cf2c95d0e63c0d6424e","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"6ceedd6e75e5e9b66bd15e8a198c4aba","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"9b19ad52159924486b532992e8f0c980","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"8c103995c1140c1f832e97516519a503","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"d4c7dc94cd58f7e3335de90220884d7b","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"b867b49c20dc3e0a9d42cd1ccc611fb5","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"8a0003a47b6f1097bbdc6d5489342be6","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"333ae58a4d7821ebaa500253390ecbab","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"b2d878e828c11af8d5a8b6aaea154af0","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"5adca28ed1f9e495bfdc26f710e906cf","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"30fa7df34f6582da9ae0564f64127e6e","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();