/* //let nama = "zaiem";
let umur = 20;
let tinggiBadan = 170;
let beratBadan = 60;
let pacar = null;

if (pacar === null) {
  pacar = "belum punya pacar";
} else {
  pacar = "sudah punya pacar";
}
 */
/* alert(
  "halo nama saya " +
    nama +
    " dan umur saya " +
    umur +
    " tahun, tinggi badan saya " +
    tinggiBadan +
    " cm dan berat badan saya " +
    beratBadan +
    " kg",
); */

console.log("selamat datang di kopi nusantara");
// materi 3: variabel, tipe data, dan operator

const namaProduk = "kopi gayo";
let stock = 20;

stockAkhir = stock - 1;
console.log(stock);
/* document.write(stock); */

//pembuktian tipe data dasar
console.log(typeof namaProduk);
console.log(typeof stock);

//menggabungkan teks dengan operator + dan template literal
// backtick dan ${} untuk menampilkan variabel

const harga = 80000;

console.log("produk : " + namaProduk + ", dengan harga Rp. " + harga);
console.log(`produk : ${namaProduk} dengan harga Rp. ${harga}`);

//tugas sementara
console.log(
  `ini adalah produk ${namaProduk}, stok awal adalah : ${stock} dan stock terkini adalah : ${stockAkhir}`,
);
console.log(
  "ini adalah produk " +
    namaProduk +
    ", stok awal adalah : " +
    stock +
    " dan stock terkini adalah : " +
    stockAkhir,
);

if (stock > 0) {
  console.log("stok tersedia");
} else {
  console.log("stok habis");
}

//materi 4: input dan output secara sederhana
const jumlah = Number(prompt("jumlah bungkus :"));
console.log(`jumlah bungkus yang dibeli : ${jumlah.toLocaleString("id-ID")}`); //console log

alert(`jumlah bungkus yang dibeli : ${jumlah.toLocaleString("id-ID")}`); //popup alert

//materi 4 : tugas sementara
console.log(
  "jumlah rokok Djisamsoe yang dibeli : " +
    jumlah.toLocaleString("id-ID") +
    " bungkus",
);
alert(
  "jumlah rokok Djisamsoe yang dibeli : " +
    jumlah.toLocaleString("id-ID") +
    " bungkus",
);
