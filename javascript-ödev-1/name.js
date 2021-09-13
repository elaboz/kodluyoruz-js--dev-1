let full_name = prompt("please enter your name: ");

let myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML} <span>${full_name}</span>`