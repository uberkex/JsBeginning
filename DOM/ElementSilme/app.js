const todoList = document.querySelector("ul.list-group"); // ul
todos = document.querySelectorAll("li.list-group-item"); // li array
// NodeList(4)




/* remove() */
todos[0].remove();
// Todo 1 silindi


/* removeChild() */
/* lastElementChild */
todoList.removeChild(todos[3]); 
// Todo 4 silindi
todoList.removeChild(todoList.lastElementChild);
// geriye kalanların son elementi Todo 3 silindi


console.log(todos); 
console.log(todoList);