"use strict";var precacheConfig=[["/index.html","c3332dcf527dfd0c188d2229dfedf039"],["/static/css/main.c5e98d14.css","90a552c031e09dacf5122052ee72cb22"],["/static/js/0.d238e28a.chunk.js","c92bffb367e097c39b436b402495e92e"],["/static/js/1.2d12318d.chunk.js","4038bfa6e37de8ce29a9faaad8f64184"],["/static/js/10.f5c725d3.chunk.js","74db1036155c36c1196074ad2fa04a6c"],["/static/js/11.be194196.chunk.js","a2bff89aca7ca6ee259b77cd694833dc"],["/static/js/12.26fc432f.chunk.js","0fdf609b630f3f7de22cd7a51ae55b2d"],["/static/js/2.2c8cb318.chunk.js","5db37cc453698c4232c32a8a04d822ff"],["/static/js/3.fe59e1c1.chunk.js","e64d93790478d0324d1fc88f92d4a5ed"],["/static/js/4.5280c390.chunk.js","f0978371c3300ea388126041fb1cc752"],["/static/js/5.f8f94500.chunk.js","437c6589ecc12c2b65b2871e0db352ab"],["/static/js/6.d9f72e5b.chunk.js","490f1f04e8c91732a29b8994a73bdcdc"],["/static/js/7.bc9922b8.chunk.js","9a7ce05e5dd93954333652af909811b8"],["/static/js/8.b133ef59.chunk.js","f289c261f63a1023c9205fb246d40c4d"],["/static/js/9.aaa055c6.chunk.js","f4bda8e959ba04ae0f64674cbd4980c0"],["/static/js/main.5f31ffc3.js","8faeca38e32d5ceaa32f8eb78aa723e0"],["/static/media/GraphQLLanguageService.js.5dced02f.flow","5dced02fa80fddc89f762795577f3b1a"],["/static/media/autocompleteUtils.js.4ce7ba19.flow","4ce7ba191f7ebee4426768f246b2f0e0"],["/static/media/bold-italic.6218c213.eot","6218c213bb8cf22b25710da6f3a90e48"],["/static/media/bold-italic.7657144e.woff","7657144ec477cd61ac4a5d1af3fa2d28"],["/static/media/bold-italic.b6690626.ttf","b6690626036a7d6824632769305b1978"],["/static/media/bold.1d9c7945.eot","1d9c7945c7bc7dd0909105119bfbc191"],["/static/media/bold.2e90d515.woff","2e90d5152ce92858b62ba053c7b9d2cb"],["/static/media/bold.76cc6be5.ttf","76cc6be5d8a231dc012fef4bdb86f79c"],["/static/media/getAutocompleteSuggestions.js.ca3a401f.flow","ca3a401fe3e6763aebb94b9cc061afc8"],["/static/media/getDefinition.js.0c48668e.flow","0c48668e93256ede6063a998178626c1"],["/static/media/getDiagnostics.js.889c0b27.flow","889c0b278692b77ce63f49f1150227c2"],["/static/media/getHoverInformation.js.d9411837.flow","d94118379d362fc161aa1246bcc14d43"],["/static/media/getOutline.js.458a3518.flow","458a3518255745f2de5b5238bba05ba1"],["/static/media/index.js.02c24280.flow","02c24280c5e4a7eb3c6cfcb079a8f1e3"],["/static/media/italic.43d53429.eot","43d5342998f3607bd61a8239e98b1160"],["/static/media/italic.de7ef31e.ttf","de7ef31e6295902347c5c3643b2d82da"],["/static/media/italic.f42641ee.woff","f42641eed834f7b97a9499362c6c8855"],["/static/media/light.09e00aa7.eot","09e00aa7622ece30a0f1e06b55f66c2a"],["/static/media/light.2e98fc3c.ttf","2e98fc3ce85f31f63010b706259cb604"],["/static/media/light.45b47f3e.woff","45b47f3e9c7d74b80f5c6e0a3c513b23"],["/static/media/regular.488d5cc1.ttf","488d5cc145299ba07b75495100419ee6"],["/static/media/regular.79515ad0.woff","79515ad0788973c533405f7012dfeccd"],["/static/media/regular.c4d82460.eot","c4d82460ef260eb1589e73528cbfb257"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});