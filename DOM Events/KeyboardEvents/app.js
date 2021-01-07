/* keypress */
// Sadece harf ve sayı tuşları kabul ediliyor, diğer tuşlar kabul edilmiyor
// e.which ---> ASCII tablosu değeri
// e.key ---> basılan harf


/* keydown */
// klavyedeki her tuş kabul ediliyor


/* keyup */
// basmayı bıraktığımız zaman çalışır


/* 
Todo List yazısını seçicez ve anlık olarak input alanına girdiğimiz değere dönecek.

*/
const cardheader = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");


todoInput.addEventListener("keyup", changeText);

function changeText(e){
    // cardheader başlığını sürekli olarak input alanına girilen değerle değiştirmek istiyoruz
    cardheader.textContent = e.target.value;
}