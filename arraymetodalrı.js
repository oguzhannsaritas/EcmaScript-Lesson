/* let items = [1, 2, 3, 4, 5]
// array içiçnde array

let femaleUSERS = ["ayşe", "fatma", "merve"]
let maleUSERS = ["ahmet", "ali", "mehmet"]

items.unshift(femaleUSERS)
items.push(maleUSERS)
console.log(items);
console.log(items.length);
console.log(items[0].length); // array içindeki istediğimiz arrayin length bilgisini ulaşmış olduk.
console.log(items[0][0]) //ayşe bilgisine ulaşmış olduk */

// Array Find metodu

/* const numbers = [5, 12, 8, 130, 44]

const found = numbers.find(number => number > 10 )

console.log(found); */


const users = [{
        id: 1,
        name: "tayfun"
    },
    {
        id: 2,
        name: "mehmet"
    },
    {
        id: 3,
        name: "gökhan"
    }

]
 const founduser = users.find(c => c.id == 2)
console.log(founduser);                                 // YENİ VE KISA HALİ 
 
/* const founduser = users.find(function (user) {
    return user.id == 2                             ------  UZUN HALİ
})
console.log(founduser); */

