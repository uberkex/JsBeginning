/* Alert */
// alert("Merhaba");

/* Confirm */

/* 
const cevap = confirm("Emin misiniz?");
console.log(cevap)
// Output ---> true veya false

if (cevap){
    console.log("Kabul edildi");
    // Output ---> Kabul edildi
}else {
    console.log("Kabul edilmedi");
    // Output ---> Kabul edilmedi
} 

if (confirm("Emin misiniz?")){
    console.log("Evet");
}else {
    console.log("Hayır");
} 
*/


/* prompt */
/* 
// Kullanıcıdan değer istemek, input alanı
const cvp = prompt("2 + 5 = ?");
console.log(cvp); 
// Output ---> 8
console.log(typeof cvp);
// Output ---> String

if (cvp == "8"){
    console.log("Doğru cevap");
}else {
    console.log("Yanlış cevap");
} 
*/


let value;
value = window.location.host;
// Output ---> 127.0.0.1:5500
value = window.location.hostname;
// Output ---> 127.0.0.1
value = window.location.port;
// Output ---> 5500
value = window.location.href;
// Output ---> http://127.0.0.1:5500/Seviye2/Window/

// window.location.reload() ---> Sayfayı yeniler

value = window.outerHeight;
// Output ---> 1050 @tarayıcının uzunluğunu hesaplıyor
value = window.outerWidth;
// Output ---> 1920 @tarayıcının genişliğini hesaplıyor

value = window.innerHeight;
// Output ---> 947 @websitesinin sergilendiği alanın uzunluğunu hesaplıyor.
value = window.innerWidth;
// Output ---> 947 @console özelliğini altta değil yanda kullanıyoruz. Altta kullanırsak full ekranda 1920 olur

// value = window.scrollX;
// value = window.scrollY;

console.log(value);