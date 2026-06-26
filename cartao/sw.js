const CACHE = 'cartao-v1';
const ASSETS = ['/cartao/', '/cartao/index.html', '/cartao/card.png', '/cartao/icon-192.png', '/cartao/icon-512.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
