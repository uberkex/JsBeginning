/* 
Local Storage'da değerlerimizi depoladıktan sonra, bu değerlerimizi biz silmediğimiz sürece browserda sabit kalıyor. browserı kapatsak bile kalır.
Session Storage oturumumuz açık kaldığı sürece depoladığımız veriler burada kalıyor. Sekmeyi veya browserı kapattığımız zaman bu değerlerimiz siliniyor.
key value yapısı
*/

/* Session Storage - Key, Value*/

// Butonlar
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Input alanları
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// addEventListeners

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e){
    /* setItem */
    // aynı addkeyli bir şeyler eklersek keye karşılık son girdiğimiz value gözükür
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e){
    /* removeItem */
    // key değerini veriyoruz sadece
    sessionStorage.removeItem(deletekey.value);

}

function clearItems(e){
    /* clear */
    sessionStorage.clear();
}