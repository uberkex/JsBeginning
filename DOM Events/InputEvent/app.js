// input alanını alıyoruz -> Bir Todo Arayın
const filter = document.getElementById("filter");

/* focus */
filter.addEventListener("focus",eventFunc);
// yazı yazma alanına tıkladığımızda

/* blur */
filter.addEventListener("blur",eventFunc);
// yazı yazma alanı dışında bir yere tıkladığımızda

function eventFunc(e){
    console.log(e.type);
}

/* paste */
filter.addEventListener("paste",pasteFunc);
// input alanına bir şey yapıştırdığımız(ctrl v) zaman çalışır
function pasteFunc(e){
    console.log(e.type);
}


/* copy */
filter.addEventListener("copy",copyFunc);
// input alanındaki yazıyı kopyalarsak(ctrl c) çalışır
function copyFunc(e){
    console.log(e.type);
}


/* cut */
filter.addEventListener("cut",cutFunc);
// input alanındaki yazıyı kesersek(ctrl x) çalışır
function cutFunc(e){
    console.log(e.type);
}


/* select */
filter.addEventListener("select",selectFunc);
// input alanında seçme işlemi başlatıp bitirdikten sonra çalışır, belli bir alanı seçince
function selectFunc(e){
    console.log(e.type);
}