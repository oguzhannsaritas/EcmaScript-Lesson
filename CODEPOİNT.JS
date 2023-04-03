const myStr = "This is my String";
console.log(myStr);

let MyString = myStr.codePointAt(3);   // burda yapılan işlem söyledir;
console.log(MyString);                  //  verilen string dizesinin 
                                        // codePoinAt() denilerek string verilen değerin 
                                        // mesala codePoint(3) dediğimiz zaman
                                        // "This is my string" dizesinin
                                        // içindeki 3 üncü indexi olan 
                                        //  s harfini bulur ve onun bize 
                                        // UNİCODE değerini verir.



console.log(String.fromCodePoint(9999, 0000, 1111, 0x2F804));



let bab = String.fromCodePoint(0x1d306, 0x61, 0x1d307);
console.log(bab);