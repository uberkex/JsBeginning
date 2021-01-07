/* 
String olarak kaydedilir, 50 diye bir sayı girsekte kendi içinde stringe çevirip tabloda kaydeder.

*/

/* setItem */
localStorage.setItem("age",23);

/* getItem */
const value = localStorage.getItem("age");
console.log(value);
// Output ---> 23
console.log(typeof value);
// Output ---> string

/* getItem kontrol */
if(localStorage.getItem("sport") === null){
    console.log("Böyle bir key değeri bulunamadı");
}else {
    const value = localStorage.getItem("sport");
    console.log("Obje bulunuyor ve değeri = " + value);
}


/* clear */
localStorage.clear();


/* Array */

/* JSON.stringify */
// sadece string değerler kaydedildiği için json kullanıyoruz ve arraymiş gibi yazılıyor

const todos = ["Todo 1", "Todo 2", "Todo 3"];
localStorage.setItem("todos", JSON.stringify(todos));
// LocalStorage value değeri aşağıdaki gibi olacak
// ["Todo 1", "Todo 2", "Todo 3"]

/* JSON.parse */
// string olarak aldığımız değeri arraye çeviriyoruz
const values = JSON.parse(localStorage.getItem("todos"));
console.log(values);
// Output ---> (3) ["Todo 1", "Todo 2", "Todo 3"]