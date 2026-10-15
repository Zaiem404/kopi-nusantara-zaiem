// data.js: semua data ada disini, terpisah dari logika program
// ingin menambah menu atau produk ? cukup ubah berkas ini.

const SITE = {
  nama: "kopi Nusantara",
  email: "halo@kopinusantara.nest",
};

const MENU = [
  { id: "beranda", label: "Beranda" },
  { id: "produk", label: "produk" },
  { id: "kontak", label: "kontak" },
];

const PRODUCTS = [
  {
    slug: "toraja",
    nama: "Kopi Toraja",
    asal: "Sulawesi Selatan",
    kategori: "arabika",
    harga: 85000,
    deskripsi: "Body tebal, aroma rempah dan cokelat gelap.",
  },
  {
    slug: "gayo",
    nama: "Kopi Gayo",
    asal: "Aceh",
    kategori: "arabika",
    harga: 80000,
    deskripsi: "Rasa bersih dengan sentuhan karamel.",
  },
  {
    slug: "kintamani",
    nama: "Kopi Kintamani",
    asal: "Bali",
    kategori: "arabika",
    harga: 90000,
    deskripsi: "Keasaman cerah seperti jeruk, ringan dan segar.",
  },
  {
    slug: "bajawa",
    nama: "Kopi Bajawa",
    asal: "Flores",
    kategori: "arabika",
    harga: 88000,
    deskripsi: "Aroma floral dengan aftertaste manis.",
  },
  {
    slug: "lampung",
    nama: "Robusta Lampung",
    asal: "Lampung",
    kategori: "robusta",
    harga: 60000,
    deskripsi: "Pahit tegas dan kental, cocok untuk kopi susu.",
  },
  {
    slug: "temanggung",
    nama: "Robusta Temanggung",
    asal: "Jawa Tengah",
    kategori: "robusta",
    harga: 65000,
    deskripsi: "Rasa earthy dengan aroma kacang panggang.",
  },
];

const arabika = PRODUCTS.filter(function (p) {
  return p.kategori === "arabika";
});

const gayo = PRODUCTS.find(function (p) {
  return p.slug === "gayo";
});

const namaSaja = PRODUCTS.map(function (p) {
  return p.nama;
});
