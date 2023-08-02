let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
let totalWaktu = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktuBermain.length; i++) {
  totalWaktu += waktuBermain[i];
  
  if (waktuBermain[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${totalWaktu}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");