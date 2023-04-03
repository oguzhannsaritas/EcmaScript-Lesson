 const numbers = [-1, -2, 0, 3, 5];

 function PozitifKontrol(item, index, arr) { // item :Dizimden gelen değer
   return item == -2; // index : dizimden gelen değerin indexi
 }
 const result = numbers.findIndex(PozitifKontrol); // arr : dizimi temsil ediyor.
 console.log(result);



 const number2 = [-1, -2, -3, 0, 1, 2, 3];

 const x =function(element){
  return element ==3;
 }
 console.log(number2.findIndex(x));



 function asal(param) {
  return param >=2;
   }
   console.log(number2.findIndex(asal));


   const number3 = (element1)=>element1 >2;
   console.log(number2.findIndex(number3));