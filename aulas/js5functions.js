/*

Definir funções
- function declaration
- function expression
- construtor new function()

*/

// function declaration

console.log(3,7); // 10
function soma(a, b) {
    return a + b;
}

// declarar / importar as funcoes sempre no top ou antes de serem utilizadas
// hoisting - o javascript move as function declaration para o topo do programa

// function expression

let multiplicacao = function(a, b) {
    return a*b;
}

console.log(multiplicacao(2,3)); // 6
// function expression nao fazem hoisting

// arrow function
let multiplicacao2 = (a, b) => a*b;
console.log(multiplicacao2(2,3)); // 6
let dobro = (number) => 2*number;
console.log(dobro(10)); // 20