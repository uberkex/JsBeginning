const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

const todo1 = document.querySelector("li:nth-child(1)");
const todo2 = document.querySelector("li:nth-child(2)");
const todo3 = document.querySelector("li:nth-child(3)");
const todo4 = document.querySelectorAll(".list-group-item")[3];

const button1 = document.querySelector("#clear-todos");



/* click */
title.addEventListener("click",clickFunc);

function clickFunc(e){
    console.log(e.type);
}


/* dblclick */
todo1.addEventListener("dblclick",dblclickFunc);
function dblclickFunc(e){
    console.log(e.type);
}


/* mousedown */
// click ile aynı sayılır. mouse bastığımız zaman oluşur (basılı tutma)
todo2.addEventListener("mousedown",mousedownFunc);
function mousedownFunc(e){
    console.log(e.type);
}


/* mouseup */
// mouse basılı tutmayı bıraktığımız zaman
todo3.addEventListener("mouseup",mouseupFunc);
function mouseupFunc(e){
    console.log(e.type);
}


/* mouseover */
// mouse ile elementin üstüne gelince çalışır
// (css hover gibi)
todo4.addEventListener("mouseover",mouseoverFunc);
function mouseoverFunc(e){
    console.log(e.type);
}


/* mouseout */
// mouse ile o elementi girersek, çıktığımız zamanda çalışır
button1.addEventListener("mouseout",mouseoutFunc);
function mouseoutFunc(e){
    console.log(e.type);
}



/* 
mouseover   mouseenter
mouseout    mouseleave

mouseoverda seçtiğimiz elemente girince mouseover çalışır, ayrıca elementin
içindeki elementlere girincede çalışır.

mouseenter seçtiğimiz element alanına girince çalışır. ( bir kere çalışır )

*/


/* mousenter */
cardBody.addEventListener("mouseenter",mouseenterFunc);
function mouseenterFunc(e){
    console.log(e.type);
}


/* mouseleave */
cardBody.addEventListener("mouseleave",mouseleaveFunc);
function mouseleaveFunc(e){
    console.log(e.type);
}