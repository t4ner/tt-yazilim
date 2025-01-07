const CACHE_NAME = "tt-yazilim-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/src/main.jsx",
  "/src/index.css",
  "/src/assets/brainwave.svg",
  "/src/assets/brainwave-symbol.svg",
  // Diğer statik kaynaklar...
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
