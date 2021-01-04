/* 

Karşılaştırma Operatörleri

==
===
!=
!==
>
<
>=
<=

*/

console.log(4 == 4);
// true

console.log(4 == "4");
// true
// Bir tarafta sayı bir tarafta string varsa bu otomatik olarak stringe çevrilir

console.log(4 === "4");
// false
// Değerler ve tipler aynı mı?

console.log("Berke" === "Berke");
// true


/* Not operatörürü */
console.log(!(2 != 2));
// true

/* And operatörü */
console.log( (8 == 8) && ("javascript" == "javascript"));
// true

/* Or operatörü */
console.log( (2 == 2) || ("js" == "javascript"));
// true




/* KOŞULLAR IF - ELSE IF - ELSE */
const grade = 83;
if(grade >= 90){
    document.body.innerHTML = "Notunuz A";
}else if( (grade >= 80) && (grade<90)){
    document.body.innerHTML = "Notunuz B";
}else if( (grade >=70 ) && (grade<80) ){
    document.body.innerHTML = "Notunuz C";
}else {
    document.body.innerHTML = "Sınıfta kaldınız..";
}


/* TERNARY OPERATOR */
const number = 100;
console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");


/* alternatif */

if (number === 50)
    console.log("Sayı 50");
else
    console.log("Sayı 50 değil");

if (number === 40) console.log("Sayı 40");
else console.log("Sayı 40 değil");