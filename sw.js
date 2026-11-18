/* Service worker Kalender Belajar 2027: membuat aplikasi tetap terbuka tanpa internet.
   Jika Anda mengubah index.html, naikkan nomor versi di bawah agar cache lama dibuang. */
const V="kalender-2027-v1";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request;
 if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 /* ambil dari cache dulu (cepat, bisa offline); perbarui cache di latar bila ada internet */
 const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>null);
 e.waitUntil(net);
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||net.then(res=>res||caches.match("index.html"))));
});
