console.log('Swt is working fine and correctly.');

const filesToCache = [
    '/',
    'https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Fascinate+Inline&family=Fredoka:wght@400;500;600&display=swap',
    'index.html',
    '/static/js/bundle.js',
    'static/media/user.d54b5cea3dabfb92c990.png',
    'https://fonts.gstatic.com/s/fredoka/v7/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWu89U.woff2',
    'https://fonts.gstatic.com/s/catamaran/v14/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPJ_a5a7duw.woff2',
    '/favicon.ico',
    '/manifest.json',
    '/src/App.css'
  ];
  
  const staticCacheName = 'pages-cache-v1';
  
  self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });


  self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
  
        // TODO 4 - Add fetched files to the cache
  
      }).catch(error => {
        console.log(error)
      })
    );
  });

  self.addEventListener('activate', event => {
    console.log('Activating new service worker...');
  
    const cacheAllowlist = [staticCacheName];
  
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });