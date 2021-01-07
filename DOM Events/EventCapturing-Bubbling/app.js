const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme işlemi");
    }
    if(e.target.id === "filter"){
        console.log("Filter input");
    }
    if(e.target.id === "clear-todos"){
        console.log("tüm taskları temizleyin butonuna basıldı");
    }
}