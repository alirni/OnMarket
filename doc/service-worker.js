/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","6e08748088d4d561cd414aabe3936549"],["bower_components/app-layout/app-drawer/app-drawer.html","bb3a392f3f3545a4dfc8aa1865eb056f"],["bower_components/app-layout/app-header-layout/app-header-layout.html","006ecd6bf7874d9192b6e2a54e4a0a48"],["bower_components/app-layout/app-header/app-header.html","36d138887441dfaadc51821b2dc678d4"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","f04704a4284466cc74a9c1ca256cd3f0"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","7d48d77d189c594b9f34740fbc505f1d"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","d0c24640610fd55cf8d94f0fd5c2f975"],["bower_components/app-layout/app-scroll-effects/effects/material.html","7256c1f1d5560aad7778bb5646ab1103"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","5b329f32b9c35067f3e702f2ca08e716"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","3ba43a8d45e5f4985f8c639d759b8b8b"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","6a3a5a0760969ea0a3ed3248229897aa"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","91253d2bbec0148297e6c9d492e9470d"],["bower_components/app-layout/app-toolbar/app-toolbar.html","8e128e1f46b3bc9fafb5247bce3587bb"],["bower_components/app-layout/helpers/helpers.html","094f23c97f0e4afa221c8939b59541ad"],["bower_components/app-route/app-location.html","646f042f4a6bf1757d00eb73a16c364c"],["bower_components/app-route/app-route-converter-behavior.html","b49c1d4f82afcac702edf5f0cf6cbe8b"],["bower_components/app-route/app-route.html","424469d870fd4bdd96d86c8d3e70a546"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","8c9de760b2c356772af49b6528884c30"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","a286519b8a93e91c017f35fcdc65fb4b"],["bower_components/iron-a11y-keys/iron-a11y-keys.html","1bcacf42f5d79e205a8d6350e10e0ced"],["bower_components/iron-behaviors/iron-button-state.html","a32ef73881402de614e75db6ed02c63b"],["bower_components/iron-behaviors/iron-control-state.html","129eb7bf1c7b2615b570f9d47ecf57d7"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","37fd722700112f1674e052d07717681b"],["bower_components/iron-flex-layout/iron-flex-layout.html","03e6f060e1a174a51cc599efac9de802"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","e03e0c7439d790dea0047de0daa0fcc1"],["bower_components/iron-icon/iron-icon.html","d527e823b946af79baf59169927d59e5"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","d5d3d26c23b6e997735bb9d91770d138"],["bower_components/iron-image/iron-image.html","884cac82a9320f1c14ab5c7894718ad6"],["bower_components/iron-input/iron-input.html","16d5b144b1ca351e85384ef454c4f4f7"],["bower_components/iron-location/iron-location.html","7e2b32264787f9f2bed374c04c33638b"],["bower_components/iron-location/iron-query-params.html","738091bea9f990ae928c439b4380914a"],["bower_components/iron-media-query/iron-media-query.html","84d069efafa8ccf51c48a91fd9f2cca9"],["bower_components/iron-meta/iron-meta.html","a0fba889ed4be6b0179492fad956bd70"],["bower_components/iron-pages/iron-pages.html","b86059007612c1fcbec9fd9c6fba30ae"],["bower_components/iron-range-behavior/iron-range-behavior.html","3c176ae7e876676e011496ae07da6768"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","86401613fb7470dbafe1fdc75e229811"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","5cb6b8cbf11c1670f78124323e411741"],["bower_components/iron-selector/iron-multi-selectable.html","15be7b3ef75c6a048a1264f854d97d67"],["bower_components/iron-selector/iron-selectable.html","f05d367e09160699bc6660be432421d5"],["bower_components/iron-selector/iron-selection.html","51823faa90148fd1327ec8d94a129de1"],["bower_components/iron-selector/iron-selector.html","58db32d56395384c0759c6c9ff980333"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","9b651a80ad56887c1406119b56c25d72"],["bower_components/paper-behaviors/paper-button-behavior.html","26ff1c9492e6a1defaa924b00f1f34a8"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","4c453eaf155c5f84a3c106bda94dc7d3"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","3dffe4ffd5443b36e16d3e0d73b95083"],["bower_components/paper-behaviors/paper-ripple-behavior.html","15e805e642d6388657de9c0e5c375103"],["bower_components/paper-button/paper-button.html","5f68a6705fb0a56ec4181ad76678c0c6"],["bower_components/paper-checkbox/paper-checkbox.html","3c7ff5d6ad3809546c6244671f0ab952"],["bower_components/paper-icon-button/paper-icon-button.html","243511a01f778cf52baaa01397e9e6d0"],["bower_components/paper-input/paper-input-addon-behavior.html","f640b188406dbc2397bed6358b545ccb"],["bower_components/paper-input/paper-input-behavior.html","c1d1f4dc102cb002e656e4e52d3556db"],["bower_components/paper-input/paper-input-char-counter.html","a4fce38b46c553a0bf09ff8888165880"],["bower_components/paper-input/paper-input-container.html","0165752208d9044c810520ecf215db10"],["bower_components/paper-input/paper-input-error.html","bcba43a714347d65351955bd0e392810"],["bower_components/paper-input/paper-input.html","054812264dc68ffec4eb990a4ecfe21a"],["bower_components/paper-material/paper-material-shared-styles.html","0880145bd868df7784d5cd49963468f6"],["bower_components/paper-material/paper-material.html","3e75b3584055dd709c9af3e4b739660d"],["bower_components/paper-progress/paper-progress.html","d75a145fe154371e257ec5108fd7ffe3"],["bower_components/paper-ripple/paper-ripple.html","dfe23f6d40bc060ed74f5a393c71ccbc"],["bower_components/paper-styles/color.html","549925227bc04f9c17b52e2e35cd2e26"],["bower_components/paper-styles/default-theme.html","5357609d26772a270098c0e3ebb1bb98"],["bower_components/paper-styles/element-styles/paper-material-styles.html","8d8d619e6f98be2c5d7e49ca022e423c"],["bower_components/paper-styles/shadow.html","1f23a65a20ed44812df26a9c16468e3f"],["bower_components/paper-styles/typography.html","1f42e982dc4a38351cf8d4d3bc4e5a1a"],["bower_components/polymer/polymer-micro.html","313d462f0bd07d78c8773040f11d528d"],["bower_components/polymer/polymer-mini.html","c69fa8f285e5501d57cefe5d048b477d"],["bower_components/polymer/polymer.html","7fbaffca067b01d3ba50fdbc7cbda91c"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","32b5a9b7ada86304bec6b43d3f2194f0"],["index.html","d10b3ad48ed7841840b44650df007767"],["manifest.json","07a89d356d0779a590c91d63c38ec96e"],["onmarket-data/onmarket.js","207f80e5bc572f99f1d35890cfa27d24"],["src/onmarket-app.html","6e3fc7ac1049573b6416cfcd76080068"],["src/onmarket-config.html","e29da18a03f999402017a252461c687d"],["src/onmarket-icon.html","8b929f5858df2674ec5e968a03319565"],["src/onmarket-menu.html","480dd095ff247cb0c613c7daf531f383"],["src/onmarket-style.html","aad4aacf22142877a0443a7b5787dce1"],["src/page-404.html","3d3cfbc9e5660059331477a95370adf0"],["src/page-cart.html","e11099530d239a2ea3527fae21c5e32c"],["src/page-detail.html","12ead010890f2b158ae89c702f91879d"],["src/page-game.html","d75baaaf9da98fcfa1bf11f3187f21c0"],["src/page-product.html","627b597f88310d86bb9db3f004e0ea63"],["src/page-signin.html","c4d18be7bbe92cac54c165668b48b740"],["src/page-startgame.html","83c1d3ef33bc4fb0363117b600d64a3b"],["src/product-card-cart.html","4581a7469e3902ed3529ea4d805a6901"],["src/product-card.html","a8171309241413e5d07fb019d0d23dd3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







