/* var f = function () {
    return "aaaaaaa"
}
var obj = {
    a: 1
};
var number = 5;

var sym = Symbol();
var obj = {
    [f]: "11111",
    [obj]: "22222",
    [number]: "333333",
    [sym]:"44444",
}
console.log(Reflect.ownKeys(obj)); */

var sym = Symbol();
var obj = {
    [sym]:5
}
console.log(obj[sym]);