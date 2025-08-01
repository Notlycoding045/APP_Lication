self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('orex-store').then(function(cache) {
      return cache.addAll([
        'index_firebase.html',
        'firebase-config.js',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
