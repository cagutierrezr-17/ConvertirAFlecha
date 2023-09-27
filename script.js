// document.getElementById("button").onclick = function() {
//     setBackgroundColorById("paragraph", "blue");
// }
// document.getElementById("alert").onclick = function(){
//     alert(document.getElementById("popup-input").value);
// }
// document.getElementById("hover-this").onmouseover = function(){
//     setBackgroundColorById("body", "red");
// }
// document.getElementById("hover-this").onmouseout = function(){
//     setBackgroundColorById("body", "white");
// }

// function getValueFromId(id){
//     return document.getElementById(id).value;
// }
// function setBackgroundColorById(id, color){
//     document.getElementById(id).style = "background-color: " + color;
// }
// function mouseOverFunction(el){
//     el.style = "background-color: green";
// }


//UTILIZZANDO LAS FUNCIONES DE FLECHA
document.getElementById("button").onclick = () => {
    setBackgroundColorById("paragraph", "blue");
}

document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}

document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "red");
}

document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
}

var getValueFromId = (id) => {
    return document.getElementById(id).value;
}

var setBackgroundColorById = (id, color) => {
    document.getElementById(id).style = "background-color: " + color;
}

var colorInput = document.getElementById("input").value;
var mouseOverFunction = (el) => {
    el.style.background = colorInput;
}


