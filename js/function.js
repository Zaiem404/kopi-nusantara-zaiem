function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}
function tampilkanSapaan(nama) {
  console.log;
  "halo, " + nama + "!";
}

const total = hitungTotal(85000, 5);
tampilkanSapaan("Zaiem");

console.log("total belanja : Rp " + total.toLocaleString("id-ID"));
