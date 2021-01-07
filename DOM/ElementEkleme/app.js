// Oluşturulacak Element :
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>


const cardbody = document.getElementsByClassName("card-body")[1];


/* createElement */
const newLink = document.createElement("a");
// Output ---> <a></a>

newLink.id = "clear-todos";
newLink.className = "btn btn-warning";
newLink.href = "https://www.google.com.tr/";
newLink.target = "_blank";

/* textContent */
// newLink.textContent = "Yeni buton";
// textContent içeriği tamamen siler ve verilen içeriği ekler

/* createTextNode */
const text = document.createTextNode("Element Ekleme Butonu");
/* appendChild */
newLink.appendChild(text);
// newLink Full:
// <a id="clear-todos" class="btn btn-warning" href="https://www.google.com.tr/" target="_blank">Element Ekleme Butonu</a>

cardbody.appendChild(newLink);
// Butonumuz eklendi ++



console.log(newLink);