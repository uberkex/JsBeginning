
// Todo ekleme alanındaki form ve inputu seçiyoruz
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);
function addTodo(e){

    const value = todoInput.value;

    let todos;
    
    // todos key var mı yok mu kontrol ediyoruz
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // todos varsa veritabanında çekiyoruz ve arraye dönüştürüyoruz
    // sonrasında bu arraye value yani girdiğimiz değeri ekliyoruz
    todos.push(value);


    // oluşan bu yeni arrayi veritabanına tekrardan girmemiz gerekiyor
    localStorage.setItem("todos", JSON.stringify(todos));





    

    e.preventDefault();
}