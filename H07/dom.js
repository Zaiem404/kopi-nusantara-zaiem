// 1. Memilih elemen
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const inputNama = document.getElementById("nama");
const tombol = document.getElementById("tombol");
const daftar = document.getElementById("daftar");
const kopiRobusta = document.getElementById("kopiRobusta");
const elemenTahun = document.getElementById("tahun");

// 2. Event klik pada tombol: membaca input, mengubah teks
tombol.addEventListener("click", function () {
  const nama = inputNama.value.trim();

  if (nama === "") {
    pesan.textContent = "Nama belum diisi.";
  } else {
    pesan.textContent = "Halo, " + nama + "!";
  }
});

// 3. Event klik pada judul: mengganti class
judul.addEventListener("click", function () {
  judul.classList.toggle("aktif");
});

// 4. Membuat elemen dari data (array PRODUCTS di data.js)

PRODUCTS.forEach(function (p) {
  const li = document.createElement("li");
  li.textContent = p.nama + " (" + p.asal + ")";
  daftar.appendChild(li);
});

//kode 1
const nama = "Rahma";
console.log("Halo " + nama);

//kode 2
let total = 0;
for (let i = 0; i <= 5; i++) {
  total = total + i;
}
console.log("Total: " + total);

//kode 3
const produk = { nama: "Kopi Gayo", harga: 80000 };
console.log(produk.harga.toString());

//kode 4
function hitungDiskon(total) {
  if (total > 100000) {
    return total * 0.1;
  }
  return 0;
}
console.log(hitungDiskon(200000));

//kode 5
tombol.addEventListener("click", function () {
  console.log("Diklik");
});

//latihan 1
reset.addEventListener("click", function () {
  inputNama.value = "";
  pesan.textContent = "Belum Ada Aksi";
});

//latihan 2
inputNama.addEventListener("input", function () {
  jumlah.textContent = "jumlah karakter: " + inputNama.value.length;
});

//latihan 3

/* kopi = PRODUCTS.filter(function (p) {
  return p.kategori === "robusta";
});
console.table(kopiRobusta);
 */
//latihan 4

elemenTahun.textContent = new Date().getFullYear();
