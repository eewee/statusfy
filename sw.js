importScripts('/static/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/static/0825b49ab710456d607b.js",
    "revision": "e9825ca3ee76f4f2c48823b2dcd7b318"
  },
  {
    "url": "/static/2c89c084b48f41415b66.js",
    "revision": "1510408406e6eed49027933e1cd29b8a"
  },
  {
    "url": "/static/37342798223dee0d187a.js",
    "revision": "f9458cdd997445c24e4c5e4ce2d663bd"
  },
  {
    "url": "/static/3811150c7065d75770e8.js",
    "revision": "b02085f48051c67451ca1a7e12f79cba"
  },
  {
    "url": "/static/41e541aea61dd4272b56.js",
    "revision": "5d28c4a36a55b1d4a5b99ee47f26b295"
  },
  {
    "url": "/static/443b8da248c99c145654.js",
    "revision": "5593b9ddfec96c300bb0ba50f6499d8a"
  },
  {
    "url": "/static/466cb1c9a2bcb32e9f27.js",
    "revision": "159a135f681de399c033dd6aadd05b4d"
  },
  {
    "url": "/static/77fcf1b1319fcc51de21.js",
    "revision": "5b4141ee140b6755425cbe3500b5c190"
  },
  {
    "url": "/static/94f333bc5e0a9107050d.js",
    "revision": "ecee96bdc3b1492625c269cee40a8a6d"
  },
  {
    "url": "/static/9ac5cb5fff4287dd9a27.js",
    "revision": "82a85a850eaaa67ddaa35c7a170279ce"
  },
  {
    "url": "/static/9bdd5092ce2b496d5d1e.js",
    "revision": "c8efcfd709aef1c056aeeda294042e52"
  },
  {
    "url": "/static/a95c1d27eb24dff52896.js",
    "revision": "39ca0f8c2b7fd66daf380ab98818333d"
  },
  {
    "url": "/static/c2db63d69239c9410e1c.js",
    "revision": "d0c010fb40f3e1d09ccf0eb89abc0b1e"
  },
  {
    "url": "/static/ebb8ba8f0d8beb0794eb.js",
    "revision": "ea3f9d7fbb554a5515cdb3b5defbf124"
  },
  {
    "url": "/static/f1f94bb492d762f4003d.js",
    "revision": "00a73088ff176569aac6a06165918710"
  },
  {
    "url": "/static/f5e8d567b811d2f2b2b9.js",
    "revision": "872e695832163c3d7043757860eb55f6"
  }
], {
  "cacheId": "eewee",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/offline'])

workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/static/(?!content).*$'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('(/static/content)?/api/v0/.*'), workbox.strategies.networkFirst({"cacheName":"eewee_api","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')



// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/offline'))
})


