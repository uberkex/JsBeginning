// Değiştirilecek Element h5 başlık 
// <h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];


/* Yeni Element Oluşturuyoruz */
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Değiştirdiğimiz Başlık Todolar";

/* Eski Element */
const oldElement = document.querySelector("#tasks-title");

/* replaceChild */
cardbody.replaceChild(newElement, oldElement);

console.log(newElement);