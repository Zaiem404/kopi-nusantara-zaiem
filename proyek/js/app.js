// Nama situs dan email dari SITE
document.getElementById("nama-situs").textContent = SITE.nama;
document.getElementById("email").textContent = SITE.email;

// Menu dari MENU
document.getElementById("menu").innerHTML = MENU.map(
  (m) => `<a href="#${m.id}">${m.label}</a>`,
).join(" | ");

// Fungsi menampilkan produk
function tampilkanProduk(daftar) {
  const wadah = document.getElementById("daftar-produk");

  if (daftar.length === 0) {
    wadah.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  wadah.innerHTML = daftar
    .map(
      (p) => `
      <article>
        <h3>${p.nama}</h3>
        <p>${p.asal} · ${p.kategori}</p>
        <p>${p.deskripsi}</p>
        <strong>Rp${p.harga.toLocaleString("id-ID")}</strong>
      </article>
    `,
    )
    .join("");
}

// Tampilkan semua produk saat halaman dibuka
tampilkanProduk(PRODUCTS);

// Tombol filter kategori
document.querySelectorAll("#filter button").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const kategori = tombol.dataset.kategori;

    if (kategori === "semua") {
      tampilkanProduk(PRODUCTS);
    } else {
      tampilkanProduk(PRODUCTS.filter((p) => p.kategori === kategori));
    }
  });
});
