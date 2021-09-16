const VERSION = "v1";
const CACHE = "cache";

const PRECACHE_URLS = ["index.html", "index.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("active", (event) => {
  const cachesActuales = [VERSION, CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        cacheNames.filter((cacheName) => !cachesActuales.includes(cacheName))
      )
      .then((cachesALimpiar) =>
        Promise.all(cachesALimpiar.map((cache) => caches.delete(cache)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((respuestaCacheada) => {
        if (respuestaCacheada) {
          return respuestaCacheada;
        }

        return caches.open(CACHE).then((cache) => {
          return fetch(event.request).then((respuesta) => {
            return cache.put(event.request, respuesta.clone()).then(() => {
              return respuesta;
            });
          });
        });
      })
    );
  }
});
