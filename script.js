// take num1 from the user
// take num2 from the user
// take operator from the user
// according to the operator do the calculation
// ex: if user give operator as "+" then add those two numbers 
// and display that result


const firstNumberInput = document.querySelector (".firstNumberInput")
const secondNumberInput = document.querySelector (".secondNumberInput")
const selectOperator = document.querySelector ("#selectOperator")
const button = document.querySelector (".button")
const resultText = document.querySelector(".resultText")

let a
let b
let operator

let result = secondNumberInput.value


button.addEventListener ("click", function(event) {
    a = Number(firstNumberInput.value )
    b = Number(secondNumberInput.value)
    operator = selectOperator.value

    switch (operator) {
        case "+":
            result = add(a,b)
            break;
        case "-":
            result = subtract(a,b)
            break;
        case "*":
            result = multiply(a,b)
        break;
        case "/":
            result = divide(a,b)
        break;
        default:
            console.log("INVALID INPUT")
            break;
    }

    
    resultText.textContent = result
})



function add(a, b) {
        return a + b
}

function subtract(a,b) {
        return a - b 
}

function divide (a, b) {
        return a / b 
}
function multiply (a,b) {
        return a * b
}


// const obj = {
//     username: "Hans",
//     password: "secret"
// }

// console.log(obj.username)



/*
//  old script, no dom

let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let result = 0
let operator = prompt ("enter the operator")
if (operator == "+") {
  result = a+b
}
else if (operator == "-"){
    result = a-b
}
else if (operator == "/") {
    result = a/b
}
else if (operator == "*"){
    result = a*b
}
console.log ("here is your result:", result)
*/