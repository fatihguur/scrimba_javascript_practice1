/* let firstName = "Fatih";
let lastName = "Gur";
let fullName = firstName + " " + lastName;

console.log(fullName); */

/* let myName = "Fatih";
let greeting = "Hi there";

function greet() {
    console.log(greeting + "," + myName + "!");
}

greet(); */

/* let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function remove1Points(){
    myPoints--;
}


add3Points();
add3Points();
add3Points();
remove1Points();
remove1Points();

console.log(myPoints); */

let errorText = document.getElementById("error");

function purchase() {
console.log("Button clicked..!!");
errorText.innerText = "Something went wrong, please try again";
}