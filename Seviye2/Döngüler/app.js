/* 
Bu bölümde en önemli kısımlar;
- map
- forEach
- for in
*/



/* While Döngüleri */
let i=0;

while(i < 10){
    console.log(i);
    i++;
}


/* While with break */
let x = 0;
while(x < 10){
    console.log(x);
    if(x == 5){
        break;
    }
    x++;
}


/* 
Continue 
Altındaki işlemlerin hiçbirini çalıştırmadan döngünün başına döner
*/

let y = 0;
while(y < 10){ 
    
    if(y == 3 || y == 5){
        // sonsuz döngüyü engellemek için y++ yapmalıyız
        y++;
        continue;
    }

    console.log(y);
    y++;
}


/* Do While */
// En az bir defa çalışma garantili
/* let a = 0;
do {
    console.log(a);
    a++;
}while(a < 10); */



/* For Döngüleri */

const langs = ["Python","Javascript","Java"];

// while ile yapalım
let index = 0;
while(index < langs.length){
    console.log(langs[index]);
    index++;
}


// for ile yapalım
for(let index = 0; index < langs.length; index++){
    console.log(langs[index]);
}


/* FOREACH KULLANIMI */
// callback methodlarımız, fonksiyonlarımız
langs.forEach(function(lang){
    console.log(lang);
});


/* Yukarıdaki 3 döngü de aynı outputu veriyor ;

Python
Javascript
Java */


/* forEach index numaralarıyla beraber */
langs.forEach(function(lang,index){
    console.log(lang,index);
});


/* *************************************** */
/* MAP FONKSİYONU */
// objelerden oluşan bir array oluşturuyoruz
// anahtar kelimelere erişmemizi sağlıyor
// anahtar kelimelerin değerlerini alarak bir array oluşturmamız sağlar

const users = [
    {name:"Berke",last_name:"Karataş",age:24},
    {name:"Ceyda",last_name:"Eyilmez",age:22},
    {name:"Berkay",last_name:"Karataş",age:25},
];

const names = users.map(function(user){
    return user.name;
});
console.log(names);
// Output ---> ["Berke", "Ceyda", "Berkay"]


const lastnames = users.map(function(user){
    return user.last_name;
});
console.log(lastnames);
// Output ---> ["Karataş", "Eyilmez", "Karataş"]


const ages = users.map(function(user){
    return user.age;
});
console.log(ages);
// Output ---> [24, 22, 25]


/* *************************************** */
/* for in Döngüsü */

const user = {
    name:"Martin Eden",
    age:25,
}

for (let key in user){
    console.log(key, user[key]);
}
/*
Output --->
name Martin Eden
age 25
*/