const elemanlar = ["ali", "okan", "elif", "yasin", "yusuf", "nazli"];
document.write("normal liste  <br></br>");
document.write(elemanlar + "<br><br>");

elemanlar.copyWithin(1, 2, 4); // verilen değerde 1 verilen değer başlangıc noktası
// 2 verilen değer hengi değerden başlıyacagı
// 4 verilen değer nereye kadar yazdıracagını söylüyor. 
document.write("copy liste  <br></br>");
document.write(elemanlar + "<br><br>");