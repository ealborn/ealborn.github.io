'use strict';

// Define a version number to tell the browser which version of application
// it is using. Update this key whenever assets such as styles,
// scripts and images are updated.
const VERSION = 'v1';

// This is a list of assets which should work offline. It works both with local
// and external assets.
const urls = [
  '/',
  '/index.html',
  '/style.css',
];

// First we need to install our service worker with the given version.
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(urls)));
});

// Then we need to active the service worker and/or delete older versions.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== VERSION)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Finally we fetch the assets from the service worker or from the network if
// the browser haven't yet fetched the items.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
