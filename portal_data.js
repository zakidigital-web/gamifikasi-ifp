// Data sumber terintegrasi untuk Portal Pembelajaran IFP
window.PPTX_SLIDES = [
  {
    "slide": 1,
    "image": "assets/slides/slide-01.png",
    "title": "Gamifikasi untuk Pembelajaran Informatika di SMP"
  },
  {
    "slide": 2,
    "image": "assets/slides/slide-02.png",
    "title": "Agenda: 6 Bagian · 45 Menit"
  },
  {
    "slide": 3,
    "image": "assets/slides/slide-03.png",
    "title": "Bagian 01: Mengapa Gamifikasi Relevan?"
  },
  {
    "slide": 4,
    "image": "assets/slides/slide-04.png",
    "title": "Definisi: Gamifikasi ≠ Sekadar Bermain Game"
  },
  {
    "slide": 5,
    "image": "assets/slides/slide-05.png",
    "title": "Teori: Tiga Kebutuhan Psikologis Siswa (SDT)"
  },
  {
    "slide": 6,
    "image": "assets/slides/slide-06.png",
    "title": "Kerangka MDA: Mekanika, Dinamika, Estetika"
  },
  {
    "slide": 7,
    "image": "assets/slides/slide-07.png",
    "title": "Manfaat: 4 Dampak Terukur Gamifikasi di Kelas"
  },
  {
    "slide": 8,
    "image": "assets/slides/slide-08.png",
    "title": "Bagian 02: Merancang Aktivitas Gamifikasi IFP"
  },
  {
    "slide": 9,
    "image": "assets/slides/slide-09.png",
    "title": "Proses Desain: 6 Langkah dari Capaian ke Prototipe"
  },
  {
    "slide": 10,
    "image": "assets/slides/slide-10.png",
    "title": "Studi Kasus: Algoritma Petualang (Kelas 8 SMP)"
  },
  {
    "slide": 11,
    "image": "assets/slides/slide-11.png",
    "title": "Peringatan: 4 Jebakan Gamifikasi & Solusinya"
  },
  {
    "slide": 12,
    "image": "assets/slides/slide-12.png",
    "title": "Penutup: Gamifikasi Adalah Jembatan, Bukan Tujuan"
  }
];
window.PROMPT_LEVELS = {
  "mudah": "saya ingin membuat game , dimana game ini digunakan untuk gamifikasi IFP, siswa per kelompok kelompok bisa berupa 2 sampai 4 kelompok agar siswa bisa maju, jawaban masuk ke layar IFP secara live dengan leaderboard. game dengan zombie, game tentang pengetahuan (multiple choice dengan informatika kelas 9) game ini seperti zombie defenc setiap zombie ada angka yang unik di dahinya yang mana angka tersebut adalah HP dari zombie dan setiap benar zombie tersebut HP berkurang/ sampai mati, zombie akan terus berjalan sampai base / darah base hilang (base berbentuk tower), dan ini membutuhkan 2 sampai 4 user yang maju di IFP secara simultan untuk kerjasama mengalahkan zombie tersebut, dengan cara menjawab pertanyaan dengan benar, buat untuk zombie HP muncul random dan ketika jawab soal benar defence tower akan menembak dengan angka default 50 dan kemungkinan muncul lebih diatas nilai itu dengan superpower acak (contoh menjawab dengan cepat atau semacamnya, dobel power, triple power atau yang lainnya), untuk jalur tidak ada, dan buat boss mode dengan HP sekitar 250an nah game ini hampir seperti tower defense, untuk interfacenya buat soal yang dijawab untuk anak\" dibawah sedangkan tampilan tower defence diatas, game ini dibuat agar bagaimana tiap tiap kelompok mampu menyelesaikan game atau tantangan dengan skor tertinggi, dan semua kelompok bermain secara bersamaan, bukan bergiliran (karena yang bergiliran menjawab adalah anggota kelompoknya) seperti tower defense game, dimana untuk HP base itu hanya satu dan tower itu adalah kelompok, dimana semua tower ini nantinya bekerja sama dengan menembakan laser dengan fokus  di musuh yang pertama datang, nah ini yang nantinya di pakai untuk skoring dimana damage yang ditimbulkan oleh tower dan musuh yang tereliminasi menjadikan point penting leaderboard",
  "sedang": "Buatlah game zombie tower defense interaktif yang dirancang khusus untuk gamifikasi program IFP (Interactive Flat Panel) dengan spesifikasi lengkap sebagai berikut: Spesifikasi Dasar Game\n\n1. Mode Multiplayer Simultan : Game dapat dimainkan oleh 2 hingga 4 kelompok siswa secara bersamaan tanpa bergantian giliran bermain. Setiap kelompok dapat mengirimkan jawaban secara real-time yang terlihat langsung di layar IFP. Anggota dalam satu kelompok bisa bergantian menjawab pertanyaan untuk mendukung kelompoknya.\n\n2. Alur Inti Game :\n\n- Zombies berjalan terus menuju base tower yang merupakan pusat pertahanan bersama seluruh kelompok. Jika base tower kehabisan HP, game berakhir.\n\n- Setiap zombie memiliki angka unik di dahinya sebagai nilai HP yang diacak saat spawn.\n\n- Setiap jawaban pertanyaan yang benar akan mengurangi HP zombie yang menjadi target serangan. Jika HP zombie mencapai 0, zombie tersebut mati dan dieliminasi dari peta.\n\n- Seluruh tower kelompok bekerja sama menembakkan laser terfokus ke zombie pertama yang muncul di peta untuk memusnahkan musuh secara berurutan.\n\nSistem Pertahanan & Pertempuran\n\n1. Base Tower & Kerja Sama Kelompok :\n\nBase tower memiliki satu HP pool bersama yang menjadi nyawa utama game.\n\nSetiap kelompok memiliki tower yang berkontribusi pada serangan gabungan, sehingga seluruh kelompok bekerja sama untuk mempertahankan base dari serangan zombie.\n\n2. Sistem Serangan Tower :\n\n- Setiap jawaban benar yang dikirimkan kelompok akan membuat tower menembakkan serangan dengan nilai damage default sebesar 50.\n\n- Ada peluang untuk munculnya superpower acak yang meningkatkan damage menjadi 2x (dobel power) atau 3x (triple power) yang didapatkan melalui kecepatan menjawab soal atau jawaban benar beruntun.\n\nMode Permainan\n\n1. Mode Normal : Zombie biasa muncul dengan rentang HP acak yang sesuai dengan tingkat kesulitan, berjalan menuju base tower untuk mengurangi HP base.\n\n2. Boss Mode : Sediakan mode bos dengan boss zombie yang memiliki HP sekitar 250 poin, dengan kecepatan berjalan yang lebih lambat namun daya serang yang lebih tinggi untuk meningkatkan tantangan game.\n\nKonten Pendidikan\n\n- Semua pertanyaan yang muncul adalah soal pilihan ganda (multiple choice) mata pelajaran Informatika kelas 9 tentang berfikir komputasi, microsoft word, google, internet, dan dampak & etika penggunaan AI yang ditampilkan di bagian bawah\n\nantarmuka game.\n\n- Antarmuka game dibagi menjadi dua bagian utama: bagian atas menampilkan tampilan permainan tower defense, sedangkan bagian bawah menampilkan soal yang harus dijawab oleh siswa.\n\n- Tidak ada jalur terpisah di peta permainan, sehingga zombie bergerak lurus menuju base tower. Sistem Skoring & Leaderboard\n\n1. Kriteria Penilaian Skor : Skor kelompok dihitung dari total damage yang ditimbulkan oleh tower kelompok dan jumlah zombie yang berhasil dieliminasi bersama.\n\n2. Leaderboard Real-time : Leaderboard yang menampilkan skor setiap kelompok diperbarui secara live dan ditampilkan di layar IFP, sehingga seluruh kelompok bisa melihat peringkat mereka secara langsung.\n\n3. Tujuan Akhir Game : Setiap kelompok berkompetisi mengumpulkan skor tertinggi sambil bekerja sama mempertahankan base tower dan menyelesaikan seluruh tantangan zombie yang ada.",
  "advance": "Buatkan game web gamifikasi interaktif dalam bentuk SATU FILE HTML TUNGGAL (Standalone Single File HTML: gabungan HTML, CSS, JS) yang dirancang untuk layar IFP (Interactive Flat Panel) di kelas.\n\nSpesifikasi & Aturan Permainan:\n\n1. KONSEP DASAR:\n- Nama Game: \"Zombie Defense Quiz — Informatika Kelas 9\"\n- Genre: Cooperative Tower Defense dengan Competitive Leaderboard (Tim bekerja sama melindungi 1 Base Castle bersama, namun bersaing meraih skor tertinggi berdasarkan damage & kills).\n- Mode Bermain: 2 sampai 4 kelompok/tim bermain SIMULTAN secara bersamaan di satu layar sentuh IFP.\n\n2. TAMPILAN INTERFACE (Landscape IFP 1920x1080):\n- Atas (Top Bar): Menampilkan Wave Info (Wave 1-5), Progress Bar HP Base Bersama (Shared Base Castle HP: 500), Live Leaderboard Real-time (menampilkan nama tim, skor, dan highlight tim yang memimpin), serta tombol kontrol (Sound & Fullscreen).\n- Tengah (Canvas Tower Defense):\n* 1 Jalur (Path) horizontal di mana Zombie berjalan dari kiri ke kanan menuju Base Castle di ujung kanan.\n* 1 Base Castle (HP 500) di ujung kanan.\n* 2-4 Tower (mewakili 2-4 tim) yang diposisikan di atas/bawah jalur path sesuai warna tim (Merah, Biru, Hijau, Kuning).\n- Bawah (Panel Kuis Simultan): 2-4 Panel Kuis independen (sesuai jumlah tim). Setiap tim memiliki panel kuis sendiri dengan pilihan ganda (A, B, C, D), timer 20 detik, statistik (Damage, Kills, Akurasi), dan flash warna saat benar/salah.\n\n3. MEKANISME GAMEPLAY & SUPERPOWER:\n- Zombie Spawn: Zombie muncul dari kiri jalan ke kanan. Setiap zombie memiliki teks angka HP yang muncul di atas dahinya. HP zombie normal: 50-150.\n- Boss Wave: Di wave 3-5 muncul Boss Zombie dengan HP ~250-300 (ukuran lebih besar, warna beda, ada tanduk emas, gerakan lebih lambat).\n- Menembak & Laser: Ketika anggota kelompok menjawab soal dengan benar, Tower milik tim tersebut akan menembak Laser Beam berwarna khas tim ke zombie TERDEPAN (paling dekat ke base).\n- Sistem Superpower (Random & Berdasarkan Kecepatan Jawab):\n* Normal Shot: Damage 50 (Jawaban benar biasa)\n* Double Power: Damage 100 (Jawab cepat / Chance 15%)\n* Triple Power: Damage 150 (Jawab < 3 detik)\n* Critical Hit: Damage 200 (Chance 5%)\n* Freeze Blast: Damage 50 + Freeze Zombie 3 detik (Chance 10%)\n* Bomb Blast: Damage 100 AOE ke SEMUA zombie di path (Chance 3%)\n\n4. SISTEM SKOR & LEADERBOARD:\n- Skor dihitung dari: Total Damage yang diberikan + (Kills x 100) + (Boss Kills x 400) + Bonus Sisa HP Base jika menang.\n- Leaderboard di atas diperbarui secara real-time. Tim dengan kontribusi terbanyak akan menjadi Juara 1 di Layar Hasil Akhir (Podium).\n\n5. PILIHAN TEMA VISUAL ALTERNATIF (Gunakan salah satu tema di bawah via CSS :root):\n- [Default] Dark Neon / Cyberpunk: Latar gelap pekat (#07080f), border transparan bercahaya, warna tim neon menyala (#ff3366, #00d4ff, #39ff14, #ffd700). Ideal untuk ruangan multimedia redup.\n- [Alternatif 1] Clean Bright / Modern Edu (Light Mode): Latar terang bersih (#f8fafc), kartu putih (#ffffff), teks tajam kontras (#0f172a), aksen tim (#e11d48, #0284c7, #10b981, #d97706). Sangat nyaman untuk ruang kelas terang tanpa silau.\n- [Alternatif 2] Nature & Rainforest: Nuansa hijau botani kanopi rimba (#0a1f14), kartu daun (#123021), border zamrud (#34d399), warna tim natural (#f87171, #38bdf8, #34d399, #fbbf24). Cocok untuk IPA/sains.\n- [Alternatif 3] Retro Arcade 8-Bit: Gaya nostalgia 90-an (#100e1d), border 2.5px solid tebal, hard shadow retro, warna 16-bit pop (#ff0055, #00f0ff, #00ff66, #ffe600).\n- [Alternatif 4] Comic Pop / Cartoon: Latar gading hangat (#fffdf5), outline komik hitam 2.5px, balon ucapan, warna punchy (#ef4444, #3b82f6, #10b981, #f59e0b).\n- [Alternatif 5] Cosmic Galaxy: Ungu gelap antariksa (#060511), nebula violet (#120e29), partikel bintang dan aksen plasma.\n\n6. KONTEN SOAL & INPUT MANUAL GURU:\n- Sediakan array data soal JavaScript (const QUESTIONS = [...]).\n- Guru dapat memasukkan daftar soal dan kunci jawaban buatan sendiri secara manual dengan format:\n  const QUESTIONS = [\n    {\n      question: \"Teks pertanyaan kuis?\",\n      options: [\"Pilihan A\", \"Pilihan B\", \"Pilihan C\", \"Pilihan D\"],\n      answer: 0, // indeks jawaban benar (0=A, 1=B, 2=C, 3=D)\n      topic: \"Nama Bab / KD\"\n    }\n  ];\n- Jika guru tidak memasukkan soal manual, buatkan minimal 40+ butir soal pilihan ganda Informatika Kelas 9 (Algoritma, Pemrograman, Jaringan Komputer, Keamanan Digital, AI, dsb.).\n\n7. TEKNIS & AUDIO (Web Audio API):\n- Efek Suara (Audio): Menggunakan Web Audio API internal (procedural SFX tanpa file audio eksternal) untuk tembakan laser, zombie mati, jawaban benar/salah, boss muncul, dan game over/victory.\n- Portabilitas: Harus 100% dikemas dalam 1 file HTML tunggal (CSS di dalam <style>, JS di dalam <script>), tanpa library eksternal atau server (bisa dibuka offline langsung di browser)."
};
