const CACHE_NAME = "lab-asis-cache-v17";
const ASSETS = [
  "./",
  "./index.html",
  "./index.html?source=pwa",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./Languages.csv",
  "./privacy.html",
  "./terms.html",
  "./copyright.html",
  "./404.html",
  "./robots.txt",
  "./sitemap.xml",
];

function getAppShellFallback(pathname) {
  if (pathname.endsWith("/styles.css")) return "./styles.css";
  if (pathname.endsWith("/app.js")) return "./app.js";
  if (pathname.endsWith("/manifest.webmanifest")) return "./manifest.webmanifest";
  return "./index.html";
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  const requestUrl = new URL(event.request.url);
  const isAppShellRequest =
    requestUrl.pathname.endsWith("/") ||
    requestUrl.pathname.endsWith("/index.html") ||
    requestUrl.pathname.endsWith("/styles.css") ||
    requestUrl.pathname.endsWith("/app.js") ||
    requestUrl.pathname.endsWith("/manifest.webmanifest");

  if (isAppShellRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned)).catch(() => undefined);
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) {
            return cached;
          }
          return caches.match(getAppShellFallback(requestUrl.pathname));
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
