// Kalkulator belanja Kopi Nusantara

// 1. Input
const hargaPerBungkus = Number(prompt("Harga per bungkus (Rp):"));
const jumlah = Number(prompt("Jumlah bungkus:"));

if (
  isNaN(hargaPerBungkus) ||
  isNaN(jumlah) ||
  hargaPerBungkus <= 0 ||
  jumlah <= 0
) {
  alert("Harga dan jumlah harus berupa angka lebih dari 0. Silakan coba lagi.");
} else {
  // 2. Proses
  const total = hargaPerBungkus * jumlah;
  let diskon = 0;

  if (total >= 200000) {
    diskon = total * 0.1;
  } else if (total >= 100000) {
    diskon = total * 0.05;
  }

  const totalBayar = total - diskon;

  // 3. Output
  console.log(`Total      : Rp ${total.toLocaleString("id-ID")}`);
  console.log(`Diskon     : Rp ${diskon.toLocaleString("id-ID")}`);
  console.log(`Total bayar: Rp ${totalBayar.toLocaleString("id-ID")}`);
  alert(`Total bayar:       Rp ${totalBayar.toLocaleString("id-ID")}`);
}
