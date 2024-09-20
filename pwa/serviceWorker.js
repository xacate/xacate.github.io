// 缓存静态文件
let filesCacheName = 'filesCacheName'
let allFilesToCache = [
    '/',
    "index.html",
    "test.html",
    "icon.png"
]
// install event
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(filesCacheName).then(function (cache) {
            return cache.addAll(allFilesToCache);
        }).then(() => self.skipWaiting())
    );
});

// 获取fetch
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                //该fetch请求已经缓存
                if (response != null) {
                    return response;
                }
                return fetch(event.request.url);
            }
            )
    );
});


// 更新缓存
self.addEventListener('activate', function (event) {
    event.waitUntil(
        Promise.all(
            caches.keys().then(cacheNames => {
                return cacheNames.map(name => {
                    if (name !== filesCacheName) {
                        return caches.delete(name);
                    }
                })
            })
        ).then(() => {
            return self.clients.claim()
        })
    )
});