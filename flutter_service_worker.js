'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c1ee4792a6aaa4aeb8b6c56cdc07942d",
"splash/img/light-2x.png": "26cfb6830ac8f227d9d43e3c5cc1f8c4",
"splash/img/dark-4x.png": "47de7be639fc27b473b6b1f90825f60b",
"splash/img/light-3x.png": "7a19ac91526bf31c8e8cade00c253c32",
"splash/img/dark-3x.png": "7a19ac91526bf31c8e8cade00c253c32",
"splash/img/light-4x.png": "47de7be639fc27b473b6b1f90825f60b",
"splash/img/dark-2x.png": "26cfb6830ac8f227d9d43e3c5cc1f8c4",
"splash/img/dark-1x.png": "75eaa3c990d9aff94e388af4c9e7121a",
"splash/img/light-1x.png": "75eaa3c990d9aff94e388af4c9e7121a",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "9df25b413bc18c7815c9231fa22f3f27",
"index.html": "ce96d6a8ba571572f58c465d303d0343",
"/": "ce96d6a8ba571572f58c465d303d0343",
"main.dart.js": "21f7790545c017c2b538f1ebc6383293",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "768c39cd67984b1c3904f87eba2604b9",
"icons/favicon-16x16.png": "768c39cd67984b1c3904f87eba2604b9",
"icons/favicon.ico": "b8cbb7933d36686ba53f2d13a8fb5446",
"icons/apple-icon.png": "7c987c42580daf0f352f703b9bd3966c",
"icons/apple-icon-144x144.png": "0acf7e4504ab777470b75f6ff417dbe7",
"icons/android-icon-192x192.png": "1630950bf35901d29cc2fbaddd10684c",
"icons/apple-icon-precomposed.png": "7c987c42580daf0f352f703b9bd3966c",
"icons/apple-icon-114x114.png": "2b4a09bebac0fed9a97e4aa72a6b7d9d",
"icons/ms-icon-310x310.png": "a82562f495c891a8ef322ca5993d8f35",
"icons/icon-192.png": "7c987c42580daf0f352f703b9bd3966c",
"icons/ms-icon-144x144.png": "0acf7e4504ab777470b75f6ff417dbe7",
"icons/apple-icon-57x57.png": "8f61db739ce23f740ee608bc0a71f4c8",
"icons/apple-icon-152x152.png": "2eecaab419649decd4d6d6e3aee42e55",
"icons/ms-icon-150x150.png": "270b7ae16bcd21b246cd4a688897275d",
"icons/android-icon-72x72.png": "84808f659d81aef9930e2d632b94c8cb",
"icons/android-icon-96x96.png": "caa9bb6377f187892c503e52054e0b49",
"icons/android-icon-36x36.png": "8d12e4693ab6500bb436c2e35275474a",
"icons/apple-icon-180x180.png": "6d575b96b314240c7fa115e4352939c0",
"icons/favicon-96x96.png": "caa9bb6377f187892c503e52054e0b49",
"icons/android-icon-48x48.png": "2ec67741fff7b670f86a915077418ebf",
"icons/apple-icon-76x76.png": "7e55c161935fe441bb58d2585b6a10d3",
"icons/apple-icon-60x60.png": "a8fdb9bc68153f2c31bdf9eef90331b3",
"icons/android-icon-144x144.png": "0acf7e4504ab777470b75f6ff417dbe7",
"icons/apple-icon-72x72.png": "a654e8cbf94641681434b5226a4e20e5",
"icons/apple-icon-120x120.png": "ede25c3558787f326ffbdcf315059f9d",
"icons/favicon-32x32.png": "fd0e83eb1b1f52704d16de31daf55c03",
"icons/ms-icon-70x70.png": "a944c7e391d37050e13629cdbcc1defc",
"manifest.json": "14a30318cf0aba519c7d5a1b45a98b8b",
"assets/res/logo/logo.png": "b646ec647727ae2117b65a1293241a83",
"assets/res/fonts/SVN-Gilroy-Medium-Italic.otf": "ebefcaca02270f061c6a55d57e0e31a7",
"assets/res/fonts/SVN-Gilroy-SemiBold.otf": "82e5334b9753f83c1a97ac8419ee3c71",
"assets/res/fonts/SVN-Gilroy-Medium.otf": "1ae06bc5340fe8ecc9689f7435f4d57e",
"assets/res/fonts/SVN-Gilroy-Bold.otf": "83a4e50a248e2b9da6b2e6802834646d",
"assets/res/fonts/SVN-Gilroy-Light.otf": "500ee3f8d1beb34b515976e9b27e3706",
"assets/res/fonts/SVN-Gilroy-Regular.otf": "6655e711b71fad445f2fc2e071ea6f5b",
"assets/AssetManifest.json": "471e2340e198a6c8fa8e760dce1edb0c",
"assets/NOTICES": "dd906e84cfd5cdbaeef5e9ba0acf11f9",
"assets/FontManifest.json": "602be9ff99fa6b78b342e6fe88a0bcbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b677c950ebe9599b07e2cc2a2fa17aca",
"assets/graphics/logo.png": "d8b65616dd001e45ae474bef2ca9761a",
"assets/fonts/SVN-Gilroy-Medium-Italic.otf": "ebefcaca02270f061c6a55d57e0e31a7",
"assets/fonts/SVN-Gilroy-SemiBold.otf": "82e5334b9753f83c1a97ac8419ee3c71",
"assets/fonts/SVN-Gilroy-Medium.otf": "1ae06bc5340fe8ecc9689f7435f4d57e",
"assets/fonts/SVN-Gilroy-Bold.otf": "83a4e50a248e2b9da6b2e6802834646d",
"assets/fonts/SVN-Gilroy-Light.otf": "500ee3f8d1beb34b515976e9b27e3706",
"assets/fonts/MaterialIcons-Regular.otf": "92bc14f7ee5a0b1ca4fd8fa384bffaa6",
"assets/fonts/SVN-Gilroy-Regular.otf": "6655e711b71fad445f2fc2e071ea6f5b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
