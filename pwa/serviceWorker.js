// 缓存静态文件
let filesCacheName = 'filesCacheName'
let allFilesToCache = []
// install event
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(filesCacheName).then(function (cache) {
            return cache.addAll(allFilesToCache);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request);
                }
            )
    );
});


// 更新缓存
self.addEventListener('activate', function (event) {
    event.waitUntil(
        // 获取所有 cache 名称
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                // 获取所有不同于当前版本名称 cache 下的内容
                cacheNames.filter(function (cacheName) {
                    return cacheName != filesCacheName;
                }).map(function (cacheName) {
                    // 删除内容
                    return caches.delete(cacheName);
                })
            );
        })
    );
});