let input = require("readline-sync")
let num1 = input.questionInt('Digite o primeiro numero: ')
let num2 = input.questionInt('Digite o segundo numero: ')
let resp1 = num1 - 3
let resp2 = num2 + 2
let resp3 = resp1 + resp2
let resp4 = resp3 - 1
console.log ("O resultado é : " + resp4)