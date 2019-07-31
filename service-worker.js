/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cbb4c70f665943ddad81953347c68ef2"
  },
  {
    "url": "a/agile-softwareentwicklung-in-kürze.html",
    "revision": "dce12714e30e2aa635fcc6c222cdff39"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "36ea5bcc5727432c4aaf40afbafa5bf8"
  },
  {
    "url": "a/besser-programmieren-mit-coding-games.html",
    "revision": "e9318d5150edbfc9149809fc5d2e404c"
  },
  {
    "url": "a/code-richtig-kommentieren.html",
    "revision": "830bde571778bd8fb6352ea6e6e51ab5"
  },
  {
    "url": "a/deine-beste-werbung-bist-du.html",
    "revision": "a13ba9405916ae48f147d6eef47999a9"
  },
  {
    "url": "a/deine-erfahrungen-sind-gefragt.html",
    "revision": "462a40a4341025ec9470a7f23f310529"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "c0a8f7c253f2daa9df4682c4d19f2eb2"
  },
  {
    "url": "a/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "5d974c3975b4b8d4383e9f77519b8d07"
  },
  {
    "url": "a/die-besten-blogs-zum-weiterlernen.html",
    "revision": "3111f43695617d76bbee0e9a46a0762e"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "1b9a297e7ebaa457848624a623db4d94"
  },
  {
    "url": "a/drei-tipps-für-effizientes-googeln.html",
    "revision": "52e2111e2526ed1c5705553cff4c84c8"
  },
  {
    "url": "a/ein-studium-ist-doch-was-wert.html",
    "revision": "f3c74a2deff05e6e6e150ab8f1487353"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "ec4090e04b554f1cd3bd4484d2d84b8c"
  },
  {
    "url": "a/mit-diesen-voraussetzungen-lernst-du-programmieren.html",
    "revision": "68fe5a208a8be5f0dd43fb141dc2ddc4"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "e82ae00e5b8a612b42db1b66810a1c39"
  },
  {
    "url": "a/nie-wieder-ohne-linter-und-code-formatter.html",
    "revision": "51b7f2b16ff6e5e77c583df0033d6814"
  },
  {
    "url": "a/overengineering-weniger-ist-mehr.html",
    "revision": "fb18ba986836f1a6e4711e68f44b2b68"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "2e0eeb00b46b9dfc478b20dc4c5a83e8"
  },
  {
    "url": "a/refactoring-nur-durch-iteration-wird-code-richtig-gut.html",
    "revision": "0a440da5e9cef4be68155d18c16e83ab"
  },
  {
    "url": "a/testing.html",
    "revision": "2e382951f5c1499214d2f748afc21eb7"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "9e1a0998f85706d42f552280202f76b4"
  },
  {
    "url": "a/warum-du-als-programmierer-nicht-studieren-musst.html",
    "revision": "13f6918c0dd3501effa9bd54354d0ef0"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "164942d06d3abc92344ff09619017d49"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "8b858dcbf6abe774b626726cf09d81fa"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "10b350e119d483e36fe50712050403c4"
  },
  {
    "url": "assets/css/0.styles.9b18cb65.css",
    "revision": "b835516f5a9eb8783dfcb5a072f5f08d"
  },
  {
    "url": "assets/js/10.cf0ba508.js",
    "revision": "fc1ab44580ee2b4a23b8226666de9434"
  },
  {
    "url": "assets/js/11.45a4d563.js",
    "revision": "17a0c7b5f70fd315c1198a65ee0cf823"
  },
  {
    "url": "assets/js/12.f9687485.js",
    "revision": "8f6721d007a5d1c42a20cb04b0a1932d"
  },
  {
    "url": "assets/js/13.e09ff31a.js",
    "revision": "c6bb2924a722f666b82398adeb23a3aa"
  },
  {
    "url": "assets/js/14.0494abd0.js",
    "revision": "91f4b7ca8edaf430952dcf0aafd1e10a"
  },
  {
    "url": "assets/js/15.714a2748.js",
    "revision": "81ad8ade61a7873d6e147d5e2981ea88"
  },
  {
    "url": "assets/js/16.6b4cb45d.js",
    "revision": "d1bff5a87b59f5fd1f5e563bece089cb"
  },
  {
    "url": "assets/js/17.f706ae4f.js",
    "revision": "5506c8597476e2fb0d9b81520b214812"
  },
  {
    "url": "assets/js/18.96257446.js",
    "revision": "d55dead1c25452d5fd44e26ebd8b01df"
  },
  {
    "url": "assets/js/19.3ddfe528.js",
    "revision": "2cf8931202a0fb2c442a07fdff746643"
  },
  {
    "url": "assets/js/2.9cfe1677.js",
    "revision": "245b346c5189ad69374d75a3c608e870"
  },
  {
    "url": "assets/js/20.58729736.js",
    "revision": "e5abf6abcf5f9809c4cd402d5907f883"
  },
  {
    "url": "assets/js/21.3bce99c6.js",
    "revision": "6b59f53b2df7f2806591357e04761f14"
  },
  {
    "url": "assets/js/22.8c6092a1.js",
    "revision": "ea6f0a0fc058f129f250841ef1fffab2"
  },
  {
    "url": "assets/js/23.e55e9113.js",
    "revision": "e8be68bca774e7bcbcbf6bb0829c820d"
  },
  {
    "url": "assets/js/24.16a4d9d4.js",
    "revision": "65f71a7a61d1ce511e6a51200916699c"
  },
  {
    "url": "assets/js/25.19de75cd.js",
    "revision": "8246b1b379d657a17be3fa9f6350e05a"
  },
  {
    "url": "assets/js/26.ae318a53.js",
    "revision": "f91f0d830e001e161961a70575dfa326"
  },
  {
    "url": "assets/js/27.987ed4db.js",
    "revision": "4632fe2bc0ab247fdd388eac39b20e3a"
  },
  {
    "url": "assets/js/28.3ca01567.js",
    "revision": "3dd8d7142452c189c7dd380a3bc1fbf8"
  },
  {
    "url": "assets/js/29.0d14bf26.js",
    "revision": "4b854b402b23ba6a253522c484bbca63"
  },
  {
    "url": "assets/js/3.eac980f5.js",
    "revision": "db37274ebdec3d343f2cc954a9af015b"
  },
  {
    "url": "assets/js/30.db876acb.js",
    "revision": "31121b831803a6bde07fd5a87dbe52db"
  },
  {
    "url": "assets/js/31.f851a1b5.js",
    "revision": "639481fc49131ad65437336726b51b4e"
  },
  {
    "url": "assets/js/32.28875310.js",
    "revision": "4ffd66ac41ecdd43c4946b48b883f319"
  },
  {
    "url": "assets/js/4.34ed3566.js",
    "revision": "4fd628587b60fd7d546154cf7000dbd2"
  },
  {
    "url": "assets/js/5.6d3313a3.js",
    "revision": "cfa5e02d2d681b55c2a5b34c7774d283"
  },
  {
    "url": "assets/js/6.13a527d4.js",
    "revision": "bcbbe94f1eb5ce3c65bec3ba507b6dbc"
  },
  {
    "url": "assets/js/7.fcdbe0f0.js",
    "revision": "0ac354e154345e32cb2fa93bb928cb33"
  },
  {
    "url": "assets/js/8.a8555613.js",
    "revision": "03ad8af973774bca29d7d977330d8ab5"
  },
  {
    "url": "assets/js/9.5297f6e6.js",
    "revision": "bbad2a54cc05f31563c4c4dd2c8bdef9"
  },
  {
    "url": "assets/js/app.31e397b5.js",
    "revision": "779576acb984b4a5bccb7312531c85ea"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d7ed5aa149d0f957f604e0b5946f28d5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7c6cb298ab9c6f3efea0abe6afdc1d78"
  },
  {
    "url": "glossar/index.html",
    "revision": "848aa2fdc62b546f55e615d684d2aac1"
  },
  {
    "url": "impressum/index.html",
    "revision": "081bdb92b1deb52a52b281a5c1467877"
  },
  {
    "url": "index.html",
    "revision": "ed53f27e173aafe1d0e158c37074c81a"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "92c9519cc1903d25e1a97d374daf9734"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3b1cbc0da1041c33442038f326dbdde0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
