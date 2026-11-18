KALENDER BELAJAR 2027 - PAKET APLIKASI (PWA)
============================================

ISI PAKET
  index.html            kalender belajar (seluruh isi ada di satu berkas ini)
  manifest.webmanifest  data aplikasi (nama, ikon, tampilan layar penuh)
  sw.js                 membuat aplikasi tetap terbuka tanpa internet
  icon-*.png, apple-touch-icon.png   ikon aplikasi
  README.txt            panduan ini

PENTING
  Aplikasi PWA hanya bisa dipasang dari alamat https:// (atau http://localhost).
  Berkas yang dibuka langsung dari folder (alamat file://) tidak bisa dipasang,
  tetapi tetap bisa dipakai sebagai halaman web biasa.
  Setelah dipasang dan dibuka sekali saat ada internet, aplikasi berjalan tanpa internet.

CARA 1 - GITHUB PAGES (gratis, alamat tetap, bisa dari HP dan laptop)
  1. Buat akun di github.com, lalu "New repository". Nama bebas (mis. kalender-2027), pilih Public.
  2. Klik "Add file" > "Upload files", unggah SEMUA berkas di folder ini
     (bukan berkas zip-nya), lalu "Commit changes".
  3. Buka Settings > Pages. Pada "Build and deployment" pilih Source: "Deploy from a branch",
     Branch: "main", folder: "/ (root)", lalu Save.
  4. Tunggu 1-2 menit. Alamatnya: https://NAMAPENGGUNA.github.io/NAMA-REPO/
  Catatan: repositori Public berarti siapa pun yang tahu alamatnya bisa membuka kalender.
  Centang, catatan, dan tanggal tes Anda TIDAK ikut ke server; semuanya tersimpan di perangkat Anda.

CARA 2 - DI LAPTOP TANPA HOSTING (hanya untuk laptop itu)
  Jika Python terpasang: buka terminal di folder ini, jalankan
      python -m http.server 8000
  lalu buka http://localhost:8000 di Chrome atau Edge dan pasang (langkah di bawah).
  Setelah terpasang, aplikasi tetap terbuka tanpa server selama cache browser tidak dihapus.

CARA MEMASANG
  Android (Chrome)  : buka alamatnya > menu titik tiga > "Instal aplikasi" / "Tambahkan ke layar utama".
  Windows / Mac     : Chrome atau Edge > ikon instal di ujung kanan bilah alamat,
                      atau menu > "Instal Kalender Belajar...".
  iPhone / iPad     : Safari > tombol Bagikan > "Tambahkan ke Layar Utama".

DATA PRIBADI (centang, catatan, tanggal tes fisik)
  Disimpan di perangkat dan browser/aplikasi masing-masing. Versi web dan versi terpasang
  di perangkat yang sama memakai alamat yang sama, jadi datanya sama. Antar perangkat
  (HP dan laptop) data TIDAK tersinkron otomatis. Untuk memindahkan:
    1. Di perangkat asal: tombol "Cadangkan data" (menyimpan berkas .json).
    2. Kirim berkas itu ke perangkat tujuan (WhatsApp, email, kabel, dsb.).
    3. Di perangkat tujuan: tombol "Pulihkan data", pilih berkas, lalu pilih "gabung"
       (tidak ada data yang hilang) atau "ganti semua".
  Cadangkan rutin (mis. seminggu sekali): menghapus data browser atau aplikasi ikut menghapus datanya.

MEMPERBARUI ISI KALENDER
  Ganti index.html dengan versi baru, lalu naikkan nomor versi di sw.js (V="kalender-2027-v2"),
  unggah ulang. Aplikasi terpasang akan memperbarui diri saat dibuka dengan internet.
