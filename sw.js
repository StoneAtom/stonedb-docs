(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"277d30508318f969a385a1228bdf303e","url":"404.html"},{"revision":"b911ed4d410a68440d2738cf3a3496ea","url":"assets/css/styles.f0a06bf9.css"},{"revision":"15bf948d5fa6d9f3d8ac5b213da864f9","url":"assets/js/08e78a0e.bfd7208a.js"},{"revision":"faf411d2312622779bcf877ad59fca59","url":"assets/js/0ad4fb1f.2aa9a3c4.js"},{"revision":"40a060965344053f4c5959d22dbcc53f","url":"assets/js/0f716783.506cbc41.js"},{"revision":"5abbe99955f685121a12d5dd136ff06b","url":"assets/js/131.22a31100.js"},{"revision":"a846a5e7ecf8a3d74cdf6a9cf0b952fe","url":"assets/js/13e82bbd.cff85fab.js"},{"revision":"ebd8abbd7bfb40fb54795ac4c4d563f9","url":"assets/js/17896441.557157e1.js"},{"revision":"51274a3540472cfe9fa1bf2df6733a5f","url":"assets/js/1be78505.364d21b6.js"},{"revision":"a1c71bb159ec76015bbe2750fe817236","url":"assets/js/1df93b7f.a09381ca.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"19d806b47ef0ca9c1b99969fe6419684","url":"assets/js/283.cd2f1bc1.js"},{"revision":"6dfead17b8c1761843c9c7d3b4d9c580","url":"assets/js/2b1e257e.7b0de2f3.js"},{"revision":"3dbaf689ef2287594de14faa5c2dc58a","url":"assets/js/323a772d.7d635f12.js"},{"revision":"955907d9848c20a7a75e443a779d498c","url":"assets/js/362dbadd.eab2434e.js"},{"revision":"fbed453d1c9ee17a2fe90b04a3dc1b76","url":"assets/js/3819a278.e1e537fc.js"},{"revision":"341e48eabc211f2d0f60ca1c53a0dd3f","url":"assets/js/47a2ab89.988b5e4b.js"},{"revision":"678eff8b5288b2e46b7e0aee0eaab687","url":"assets/js/4e9af88f.09998395.js"},{"revision":"71438db6cdb36938585ca87ec467cfb9","url":"assets/js/515.bbaa89ed.js"},{"revision":"c8cb85b6b84c0b8aee70f31a87cb41af","url":"assets/js/5ed9614c.7aa9e936.js"},{"revision":"f8e967222ab4d30e654ff73105074691","url":"assets/js/647.bdaab8f1.js"},{"revision":"4a9e72ce1f571922386f5cce13a53436","url":"assets/js/7acb1c21.27bef84b.js"},{"revision":"772870e14643ae0eb3c50eca6ca49afe","url":"assets/js/7ceb65cf.44b7b031.js"},{"revision":"7d7c17267b78f795785a78e8da0e0ef5","url":"assets/js/85e76eb8.ac96ca11.js"},{"revision":"d8d7abaa7bfb309a862ad3840cc7c4ed","url":"assets/js/88aa99b3.0903db9e.js"},{"revision":"f856ab7f63b5fc7c81462ce81b19ea2a","url":"assets/js/935f2afb.aaaa6d2b.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"9aa8dc5ab8d9bbd0bfdab2f29a0b5efc","url":"assets/js/9e4087bc.968a11bd.js"},{"revision":"2e600699464ff683901f60dcb89cb85e","url":"assets/js/a30d9234.101fd980.js"},{"revision":"a59d652e275edd7093526429794a1c7e","url":"assets/js/a60863b3.762ba60b.js"},{"revision":"eb47ec9cb7dcf2ad648a45d43dd2d1d3","url":"assets/js/a6aa9e1f.5f8eb6af.js"},{"revision":"94f712c5ec95833828222e1f72a104ad","url":"assets/js/b0461066.2c679e50.js"},{"revision":"f259a34b4b64c7470ab50bf0c93090c0","url":"assets/js/b5e1e86c.f8c36356.js"},{"revision":"4569166d3335debc96adf54b3d50ad57","url":"assets/js/b6a2d028.378ef763.js"},{"revision":"0169e5c2b814145d4e606c49f624e288","url":"assets/js/b6dcf72c.61621521.js"},{"revision":"be3392ef431251dc21cea56bbaedb170","url":"assets/js/c0b8e79e.bcfeedb4.js"},{"revision":"b532c1cb49bbc5388b5428947f595cfb","url":"assets/js/c9277353.692d62ae.js"},{"revision":"ea233eb8a0d74df2efbaa6e4dc203071","url":"assets/js/ccc49370.6b6f0324.js"},{"revision":"11b89ff06b7eb52101b0cf189d9fa14c","url":"assets/js/f0e3321f.62a1bf46.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"89c110a4ea44c176bc24719bd083c76e","url":"assets/js/f7366610.2c462303.js"},{"revision":"b70c878c16aa0ceb10ab7afb3f04b739","url":"assets/js/f9e23376.565615e7.js"},{"revision":"fbd79eb0f9c384b6920085d00fd26bbc","url":"assets/js/fe0fd020.2fc824ab.js"},{"revision":"00d0ba1d1eba5a0e256c9903bcb6105d","url":"assets/js/main.b2944265.js"},{"revision":"a006bdaf299020832d32d4a5b0383ba5","url":"assets/js/runtime~main.d28b2ebe.js"},{"revision":"f641804e7c8db34e4c38ccff3e0b4f36","url":"community/archive/index.html"},{"revision":"9a369875cc7f53d1a0b9ba117699f4f6","url":"community/index.html"},{"revision":"84b52f06f9047a4b411f20540ec5a9ef","url":"community/main/index.html"},{"revision":"ef8127e28ba5c2d676497f19f43fa218","url":"docs/about-stonedb/architecture/index.html"},{"revision":"510ab31613786675469e37187ee576e3","url":"docs/about-stonedb/intro/index.html"},{"revision":"7d71cedc55e8cc6ad21cf19327d6121d","url":"docs/about-stonedb/limits/index.html"},{"revision":"c8893de3c85c8cde9be4a043a94aa667","url":"docs/about-stonedb/terms/index.html"},{"revision":"3f802a3d31ff8afa044abb9331b5b0d3","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"0bf4e3d04842d97304317f061925faa0","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"16dad0af8c5576fe63562c07b91caefd","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"39436ad8a2ef81f56c084275dcf9a7fd","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"e84f43e4653ff9c4f90d58ab2a174122","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"1a2081817c39c24b6d4952644af2d876","url":"docs/download/index.html"},{"revision":"8f5231f08381266fd8a1a89d9058f8d6","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"0e16e5d7cb713cd6de3acb28eeee6bbc","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"f45b8e0207d799ae288b94e7c7f9ee59","url":"docs/getting-started/basic-operations/index.html"},{"revision":"415e0547526ae3d5fa9668117fcad11b","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"f321849b8a46b8e3b09eb26e673472d6","url":"docs/getting-started/quick-start/index.html"},{"revision":"58eb0c07ea378482064aeab02029a844","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"7a6f02a3025fc9999598cc99f679fb0e","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"cfa30532dab4d894d73c4328cd3983c3","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"8479186c15688c503ffc1d1a6e62c660","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"d7b4a34e6bfeedf846af56bb6e5368f1","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"fe0d61f30158bd4421bae44058605f35","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();