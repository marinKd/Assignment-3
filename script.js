//1
document.getElementById("container");
//2
document.querySelector("section");
//3
document.getElementsByClassName("second");
//4
document.querySelector("ol > .third");
//5
document.querySelector("#container").innerText = "Hello";
//6
document.getElementsByClassName("footer")[0].classList.add("main");

//7

let rem = document.getElementsByClassName("footer");
for(let i=0;i<rem.length;i++){
  rem[i].classList.remove("main");
}

//8
var newElem = document.createElement("li")

//9
newElem.innerText = "four";

//10
var appendix = document.getElementsByTagName("ul")
for(let i=0;i<appendix.length;i++){
  appendix.appendChild(newElem);
}
//12
let looper = document.querySelectorAll("ol li");
for(let i=0;i<looper.length;i++){
  looper[i].style.backgroundColor = "green";
}

//13
let remover = document.getElementsByClassName("footer");
for(let i=0;i<remover.length;i++){
  remover[i].remove();
}
