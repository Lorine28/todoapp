const cacheName = 'todo-app';

var filesToCache = [
    '/sw.js',
    '/script.js',
    '/style.css',
    '/index.html',
    "/manifest.json"
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');

    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    if (navigator.onLine) {
        return;
    }

    event.respondWith((async () => {
        const response = await caches.match(event.request, { ignoreSearch: true });
        if (response) {
            return response;
        }

        const cache = await caches.open(cacheName);
        return await cache.match("/index.html");

    })());
});






















