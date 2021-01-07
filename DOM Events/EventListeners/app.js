const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

/* Eski yöntem focus */
/* filterInput.onfocus = function(){
    console.log("onfocus çalıştı");
} */


/* addEventListeners */


/* focus */
filterInput.addEventListener("focus", function(e){
    console.log(e);
    // FocusEvent objesi
    console.log(e.type);
    // focus
    console.log(e.target);
    // html kodu
    console.log(e.target.placeholder);
    // Bir Todo Arayın
    console.log(e.target.className);
    // form-control
    console.log("addEventListener focus çalıştı");
})


/* submit */
todoForm.addEventListener("submit", submitFunc);

function submitFunc(e){
    console.log("addEventListener submit çalıştı");


    // Submit işleminden sonra aynı sayfada kalmak istiyoruz
    // formda verilen actiona değil aynı sayfaya dönmek
    e.preventDefault();
}