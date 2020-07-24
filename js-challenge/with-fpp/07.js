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

console.log(`Jumlah kata Aku: ${sentence.match(/aku/gi).length}
Jumlah kata dapat: ${sentence.match(/dapat/gi).length}
Jumlah kata ingin: ${sentence.match(/ingin/gi).length}`);