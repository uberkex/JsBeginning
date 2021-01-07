const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

/* class EKLEME - ADD */
// Yöntem1
// todoInput.className = "form-control newClass";
todoInput.classList.add("newClass"); // form-control newClass
todoInput.classList.add("newClass2"); // form-control newClass newClass2


/* class KALDIRMA - REMOVE */
todoInput.classList.remove("newClass2");


/* class DEĞİŞTİRME - REPLACE */
todoInput.classList.replace("newClass","ReplaceClass");


/* getAttribute */
element = todoInput.placeholder;
// Output ---> Bir Todo Girin
element = todoInput.getAttribute("placeholder");
// Output ---> Bir Todo Girin


/* setAttribute */
todoInput.setAttribute("placeholder","Yeni placeholder yazısı");
todoInput.setAttribute("title","title-input");
// <input class="form-control ReplaceClass" type="text" name="todo" id="todo" placeholder="Yeni placeholder yazısı" title="title-input">


/* hasAttribute */
element = todoInput.hasAttribute("required"); 
// false

element = todoInput.hasAttribute("name");
// true


/* removeAttribute */
todoInput.removeAttribute("name");
// name="todo" html'den kalkacak



console.log(element);
console.log(todoInput);
