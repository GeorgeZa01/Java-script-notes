console.log("Testing Console");

//Functions
function add(num1, num2) { 
    return num1 + num2
}

console.log(add(5,8));      // Output: 13

// Hoisting
console.log(subtract(9,2)); // Output: 7

function subtract(num1, num2) {
    return num1 - num2;
}

// Arrow function
let multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,7));

let firstName = () => console.log("firstname");
firstName();

function lastname() {
    console.log("lastname");
}
lastname();

// Local and Global scopes

let carName = "Audi";   //Global scope

function carDealer() {
    console.log(carName);
}
carDealer();

function bankName(){ 
let bank = "FNB"    //Local scope
    console.log(bank)
}
bankName();

