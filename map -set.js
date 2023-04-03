/* let map = new Map();
map.set('1', "Mert");
map.set(1, "ali");           ----------    SET EDEREK YAPŞILIR.
map.set(true,'mehmet');
let obje = {name: 'mert'};
map.set(obje,"abc");
console.log(map.get(obje);
 


/* let map = new Map([
    ['1', 'mert'],
    [1, 'ali'],                 // BUNDA DİREKT MAP İLE YAPOILIR.
    [true, 'mehmet'],

])
console.log(map); */

/* 
let map = new Map(Object.entries({
    isim: "mert",
    age: 30                         // tekbir veri olarak atmadı 2 ye ayırdı
}));
console.log(map); */

/* 
let map = new Map([
    ['muz', 100],
    ['elma', 150],
    ['armut', 300]
]);
for (let anahtar of map.values()) {
    console.log(anahtar); //---- sadece value (değerleri)

}
for (let anahtar of map.keys()) {
    console.log(anahtar); //-------- sadece  keys(isimleri )

}

for (let anahtar of map) {
    console.log(anahtar); //-------- tüm verileri getirmiş oldu.

}


map.forEach((value, key, map) => {
    console.log('${key} : ${values}');
}) */


let set = new Set();
let kullanıcı1 = {name : "mert"};
let kullanıcı2 = {name : "ali"};
let kullanıcı3 = {name : "mehmet"};


set.add(kullanıcı1);
set.add(kullanıcı2);
set.add(kullanıcı3);
set.add(kullanıcı1);
set.add(kullanıcı2);
set.add(kullanıcı3);

set.delete(kullanıcı3);  // kullanıcı 3 siliniyor.

console.log(set.has(kullanıcı3)); // kullanıcı varmı diye soruor.
let user ;
for(user of set){
    console.log(user.name);
}

console.log(set.values());
console.log(set.keys());


