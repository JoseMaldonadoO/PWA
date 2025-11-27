const CACHE_NAME = 'proyecto-awp-v1';
const urlsToCache = [
  './',
  './index.html',
  './administracion.html',
  './contabilidad.html',
  './ti.html',
  './styles.css',
  './script.js',
  './datos.json',
  './manifest.json'
  // Si tienes imágenes importantes en la carpeta img, agrégalas aquí así:
  // './img/logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Abriendo caché');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});