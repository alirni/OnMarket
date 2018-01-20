/* eslint no-console: ["error", { allow: ["info"] }] */

self.addEventListener('install', function () {
  console.warn('Killing old service worker');
  self.skipWaiting();
});
