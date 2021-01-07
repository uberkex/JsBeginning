/* getElementbyId - Id'ye göre elementi seçmek */
let element;
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");


/* getElementsByClassName - Class'a göre elementi seçmek */
// Bir class'a ait birden çok element olduğu için bize ARRAY tarzı bir obje dönecek - HTMLCollection
elements = document.getElementsByClassName("list-group-item")
// @@@ elements = document.querySelectorAll(".list-group-item");


/* getElementsByTagName - Tag'e göre elementi seçmek */
// ARRAY - HTMLCollections
elements = document.getElementsByTagName("li");
elements = document.getElementsByTagName("div");


/* querySelector - Cssde kullandığımız selectorları kullanıyoruz */
// # ---> id / . ---> class
// TEK bir elementi seçiyor (Sayfada ilk bulduğu)
element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");


/* querySelectorAll */
// NodeList dönüyor, (Arraylere benzer, forEach kullanabiliyoruz)
elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(e){
    console.log(e);
});

console.log(element);
console.log(elements);