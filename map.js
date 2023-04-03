/* let map = new Map();
map.set("message", "javascript ecmascript");
map.set("show", "map and WeakMap dersi");
console.log(map);



let map1 = new Map([
    ['1', 'mert'],
    [1, 'ali'],
    [true, 'mehmet'],

])
console.log(map1);
const x = map1.keys();
for(const ley of x){
    console.log(ley);
}
const c =Array.from(map1);
console.log(c);



let map2 = new Map(Object.entries({
    isim: "mert",
    age: 30 // tekbir veri olarak atmadı 2 ye ayırdı
}));
console.log(map2);



const map3 = new Map([
    ["Muz", 1],
    [2, "elma"],
    [3, "Armut"],
    [4,"çilek"]
]);
for (let keys of map3.values()) {
    console.log(keys);
}
for (let keys of map3.keys()) {
    console.log(keys);
}

map3.forEach((value, key)=>{
    console.log('${key} : ${value}');
})



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
 */
let tarih = new Date();
console.log(tarih);
let tarih2 = tarih.getDay();
console.log(tarih2);
let yıl = tarih.getFullYear();
console.log(yıl);

switch (new Date().getDay()) {
    case 0:
        console.log("PAZAR");
        break;
    case 1:
        console.log("PAZARTESİ");
        break;
    case 2:
        console.log("SALI");
        break;
    case 3:
        console.log("ÇARSAMBA");
        break;
    case 4:
        console.log("PERŞEMBE");
        break;
    case 5:
        console.log("CUMA");
        break;
    case 6:
        console.log("CUMARTESİ");
        break;
    default:
        break;
}