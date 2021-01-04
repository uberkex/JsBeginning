let value;


/* Now time - Şu anki zaman */
const now = new Date() 
// Output ---> Mon Jan 04 2021 21:00:24 GMT+0300 (GMT+03:00)

console.log(now);


/* 
Doğum tarihimiz
01.02.1997 TR --> Gün/Ay/Yıl
02.01.1997 EN --> Ay/Gün/Yıl

*/
const birthdate1 = new Date("2-1-1997 00:05:00");

const birthdate2 = new Date("February 1 1997");

const birthdate3 = new Date("2/1/1997");


const birthdates = `

Time1 = ${birthdate1}<br>
Time2 = ${birthdate2}<br>
Time3 = ${birthdate3}<br>

`;

/* 
____Output____
Time1 = Sat Feb 01 1997 00:05:00 GMT+0200 (GMT+03:00)
Time2 = Sat Feb 01 1997 00:00:00 GMT+0200 (GMT+03:00)
Time3 = Sat Feb 01 1997 00:00:00 GMT+0200 (GMT+03:00)
*/

document.body.innerHTML = birthdates;



/* Date objesi bazı bilgilere ulaşma */
let month = birthdate1.getMonth();
// Output ---> 1 , Ocak Ayı 0 olarak,
month += 1;
// Output ---> 2
console.log(month);


let date = birthdate1.getDate();
// Output ---> 1
console.log(date);

let day = birthdate1.getDay();
// Output ---> 6
/*
Pazar       -- 0
Pazartesi   -- 1
Salı        -- 2
Çarşamba    -- 3
Perşembe    -- 4
Cuma        -- 5
Cumartesi   -- 6
*/
console.log(day);


let hour = birthdate1.getHours();
// Output ---> 0 yani gece 12
console.log(hour);



/* Tarih Bilgileri Değiştirme */
birthdate1.setMonth(5);
birthdate1.setDate(15);
birthdate1.setFullYear(1993);
birthdate1.setHours(4);
birthdate1.setMinutes(27);
birthdate1.setSeconds(48);
// Output ---> Tue Jun 15 1993 04:27:48 GMT+0300 (GMT+03:00)

console.log(birthdate1);