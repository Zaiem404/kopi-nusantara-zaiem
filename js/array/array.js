//array
const kopi = ["toraja", "gayo", "kintamani"];

console.log("Kopi pertama:", kopi[0]);
console.log("Jumlah kopi:", kopi.length);
kopi.push("bajawa");
console.log("Daftar kopi:", kopi);
console.log("Apakah 'gayo' ada dalam daftar?", !!kopi.includes("gayo"));

//menelusuri array dengan for loop
for (const jenisKopi of kopi) {
  console.log("jenis");
}
kopi.forEach(function (jenis, index) {
  console.log(index + 1 + ". " + jenis);
});

//array multidimensi
const stok = [
  ["toraja", 10],
  ["gayo", 10],
];
console.log(stok[1][0]); // gayo
console.log(stok[1][1]); // 10
console.log();

//pengurutan array
const harga = [85000, 60000, 900000, 80000, 70000];
harga.sort(function (a, b) {
  return a - b;
});
console.log(harga); // [60000, 70000, 80000, 85000, 900000]

//objek dan array objek
const produk = {
  nama: "Kopi Toraja",
  asal: "Sulawesi Selatan",
  kategori: "kopi",
  harga: 85000,
};

console.log("produk nama :" + produk.nama);
produk.harga = 90000;

console.log("harga dari produk ini adalah :" + produk.harga);
console.log("asal dari kopi ini adalah :" + produk.asal);

//varibale products
let produkBelanja = ["kopi", "gula", "susu"];

//filter produk
