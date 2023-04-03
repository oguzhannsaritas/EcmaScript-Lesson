/* const a = "Oğuzhan";
switch (a) {
    case "Oğuzha":
        console.log("sonuç : " + a);
        break;
        case "Oğuzhan":
            console.log("sonuç : " + a);
            break;

    default:
        console.log("sonuç bulunamadı :");
        break;
}  */

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


