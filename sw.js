// Install Service Worker and Cache Files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('ayumed-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/favicon.png'
            ]);
        })
    );
});

// Fetch from Cache or Network
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
