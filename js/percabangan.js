//materi percabangan if else
const total = 15000000;
if (total >= 2000000) {
  console.log("anda mendapatkan diskon 10%");
} else if (total >= 1000000) {
  console.log("anda mendapatkan diskon 5%");
} else {
  console.log("anda tidak mendapatkan diskon");
}
// materi percabangan switch case

const kategori = "robusta";

switch (kategori) {
  case "arabika":
    console.log("rasa kopi ini " + kategori + " rasa lebih asam dan beraroma");
    break;
  case "robusta":
    console.log(`rasa kopi ${kategori} rasa lebih pahit dan beraroma`);
    break;
  default:
    console.log("kategori kopi tidak dikenal");
}
