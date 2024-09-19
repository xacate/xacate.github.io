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
// 缓存接口数据
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        // 匹配到请求
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                // 缓存响应数据
                let responseClone = response.clone();

                caches.open('v1').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                return caches.match('/gallery/myLittleVader.jpg');
            });
        }
    }));
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