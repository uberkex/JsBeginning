/* Basit Fonksiyon */

function merhaba(){
    console.log("Hello World");
}
merhaba();
// Output ---> Hello World




/* Parametreli Fonksiyon */

function merhaba2(fname,lname){
    console.log(`Merhaba ${fname} ${lname}`);
}
merhaba2("Berke","Karataş");
// Output ---> Merhaba Berke Karataş




/* Undefined Fonksiyon */
function merhaba3(fname,lname){
    console.log(`Merhaba ${fname} ${lname}`);
}
merhaba3();
// Output ---> Merhaba undefined undefined




/* Undefined Fonksiyon -- Varsayılan */
function merhaba4(fname,lname){
    
    if(typeof fname === "undefined") fname = "Ulaş Berke";
    if(typeof lname === "undefined") lname = "Karataş";

    console.log(`Merhaba ${fname} ${lname}`);
}
merhaba4();
// Output ---> Merhaba Ulaş Berke Karataş



/* Varsayılan Değerli Fonksiyon */
function merhaba5(fname="Berke", lname="Karataş"){
    console.log(`Merhaba ${fname} ${lname}`);
}
merhaba5("Beko");
// Output ---> Merhaba Beko Karataş




/* Fonksiyonlarda Return */
function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}


let number = cube( square(2) );
// 2*2 = 4
// 4*4*4 = 64
console.log(number);
// Output ---> 64




/* Fonksiyonu Değişkene Atamak */
const selamlama = function(){
    console.log("Selamın Aleyküm");
};
selamlama();
// Output ---> Selamın Aleyküm

const firstmessage = function(name){
    console.log(`Giriş yapan kullanıcı = ${name}`);
};
firstmessage("Martin Eden");
// Output ---> Giriş yapan kullanıcı = Martin Eden


