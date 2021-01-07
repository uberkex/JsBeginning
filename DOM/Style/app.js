
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>
const element = document.querySelector("#clear-todos");


console.log(element.id);
// Output ---> clear-todos
console.log(element.className);
// Output ---> btn btn-dark
console.log(element.classList);
// DOMTokenList
// Output ---> DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]
console.log(element.classList[0]);
// Output ---> btn
console.log(element.textContent);
// Output ---> Tüm Taskları Temizleyin
console.log(element.innerHTML);
// Output ---> Tüm Taskları Temizleyin
console.log(element.href);
// Output ---> http://127.0.0.1:5500/DOM/Style/# 
console.log(element.style);
//CSSStyleDeclaration objesi döner 
//elementimizin kullanılabilir tüm css özelliklerini görebiliriz



/* Style ve Element özelliklerini değiştirme*/
element.className = "btn btn-warning";
element.style.color = "red";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr/";
element.target = "_blank";
element.textContent = "Tümünü Sil 1";
element.innerHTML = "<span style='color:black'>Tümünü Sil 2</span>";


/* li leri değiştirme */
// Li elementlerinin hepsine istediğimiz özellikleri veririz
/* const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(e){
    e.style.color = "red";
    e.style.background = "#eee";
}); */



/* */
// w3school child selector
let element2; 
element2 = document.querySelector("li:first-child");
element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");

console.log(element2);

/* odd ve event - Tekli ve Çiftli sayıları seçme */
let elements2;
elements2 = document.querySelectorAll("li:nth-child(odd)");
// TEK
elements2 = document.querySelectorAll("li:nth-child(even)");
// ÇİFT

console.log(elements2);

elements2.forEach(function(e){
    e.style.color = "blue";
    e.style.background = " #eee";
    e.style.fontWeight = "700";
})