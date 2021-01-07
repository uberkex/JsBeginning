const todoList = document.querySelector(".list-group");
const cardrow = document.querySelector(".card.row");
const todo2 = document.querySelector("li:nth-child(2)");





/* childNodes - Text Dahil */

value = todoList.childNodes;
/* 
NodeList döner
4 tane li elementimiz olmasına rağmen 9 element dönüyor
html kodları arasındaki boşlukları(alt satıra geçme gibi) da element olarak alıyor */
value = todoList.childNodes[0];
// Output ---> #text





/* children - Sadece Element */

value = todoList.children;
// HTMLCollection - sadece li elementlerimizi aldık
value = todoList.children[3];
value = todoList.children[todoList.children.length - 1];
// Son li elementini aldık 
value = todoList.children[1].style.color = "red";
// Todo2 color red


value = cardrow.children;
// HTMLCollection(3) [dıv.card-header, dıv.card-body, dıv.card-body]
value = cardrow.children[2];
value = cardrow.children[2].children;
// HTMLCollection(7) 
value = cardrow.children[2].children[1];
// h5
value = cardrow.children[2].children[1].textContent = "Todo List değişti";


value = todoList.firstElementChild; // Todo 1
value = todoList.lastElementChild; // Todo 4
value = todoList.childElementCount;
// 4
// todoList.children.length





/* parentElement */

value = cardrow.parentElement; // container
value = cardrow.parentElement.parentElement; // body





/* ElementSibling */

value = todo2.previousElementSibling; // Todo 1
value = todo2.previousElementSibling.previousElementSibling; // null
value = todo2.nextElementSibling; // Todo 3
value = todo2.nextElementSibling.nextElementSibling; // Todo 4





console.log(value);