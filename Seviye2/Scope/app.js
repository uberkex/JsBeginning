/* 
Scope Kavramı

Global scope = herhangi bir fonksiyon içinde olmayan, if durumunda olmayan

Funciton scope = function {} tagleri içerisinde olan

Blog scope = if, while, for blogları içerisinde olan

*/

var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1,value2,value3);
// Output ---> 10 20 30




// *********************************** //

function Func(){
    var value1 = 1;
    let value2 = 2;
    const value3 = 3;

    console.log(value1,value2,value3);
}

Func();
// Output ---> 1 2 3


// *********************************** //

var a = 100;
console.log(a);
// Output --> 100


if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}


/*
a değişkeni 100'dü ama if içerisinde a'yı tekrardan tanımladık ve 10 yaptık.
if blogunda tanımlanan var değişkenleri blog dışına da etki ettiklerinden
if'ten sonraki console.log işleminde a'nın yeni değeri yani 10'u ekrana basıyor
*/

console.log(a);
// Output ---> 10
// blog içinde tanımlanan var değişkenleri, blog dışında da çalışıyorlar.

// console.log(b); @--> Uncaught ReferenceError: b is not defined 
// blog içinde tanımlanan let değişkenleri blog dışında çalışmıyorlar.


// console.log(c); @--> Uncaught ReferenceError: c is not defined
// blog içinde tanımlanan const değişkenleri blog dışında çalışmıyorlar.
