// Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.
let prompt = require("prompt-sync")();
let Oinput= prompt("Enter operator(+,-,*,/) or Exit to close: ").toLocaleLowerCase()

switch (Oinput) {
    case "+" :
         num1= Number(prompt("Enter first number: "))
         num2= Number(prompt("Enter secound number: "))

        console.log(num1 + num2);
        break;
    case "-":
         num1= Number(prompt("Enter first number: "))
         num2= Number(prompt("Enter secound number: "))
        console.log(num1-num2);
        break;

    case "/":
         num1= Number(prompt("Enter first number: "))
         num2= Number(prompt("Enter secound number: "))

        console.log(num1/num2);
            break;  
    case "*":
         num1= Number(prompt("Enter first number: "))
         num2= Number(prompt("Enter secound number: "))

        console.log(num1*num2);
            break;

    case "exit":
        console.log("BYE BYE");
            break;


    default:
        console.log("wrong input");
        break;
}

