/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('push', (event) => {
  var data = {};
  if (!self.Notification || self.Notification.permission !== 'granted') {
    return;
  } else {
    console.log(`[Service Worker] Push Received but notification is ${self.Notification.permission}`);
  }
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Web Push Notification";
  event.waitUntil(self.registration.showNotification(title));
});

workbox.core.clientsClaim();
workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
