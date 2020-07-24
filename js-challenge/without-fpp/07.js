const sentence = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

let countAku = sentence.match(/aku/gi);
let countDapat = sentence.match(/dapat/gi);
let countIngin = sentence.match(/ingin/gi);
console.log(`Jumlah kata Aku: ${countAku.length}
Jumlah kata dapat: ${countDapat.length}
Jumlah kata ingin: ${countIngin.length}`);