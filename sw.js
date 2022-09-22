const CACHE_NAME = "pwa-app-cache-v1";

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(['/']);
        cache.add("offline.html");
    })());
});

self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        
        try {
            const fetchResponse = await fetch(event.request);

            cache.put(event.request, fetchResponse.clone());

            return fetchResponse;
        }
        catch(e) {
            // const cachedResponse = await cache.match(event.request);
            const cachedResponse = await cache.match(event.request);

            return cachedResponse;
        }
    })())
});