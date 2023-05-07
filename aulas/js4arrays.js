let alunos = ['Andreia', 'Pedro', 'Hugo', 'David'];
alunos[4] = 'Ruben';
alunos.push('Gonçalo');
alunos[alunos.length] = 'J Pedro';

// copiar array
let alunosCorrentes = alunos.slice(0);
let alunosCorrentes1 = [...alunos]; // spread operator converte numa lista

// dado um array de temperaturas
let temperaturas = [19,23,12,9,-3,34];
// calcular a minima e a maxima  e a media das temperaturas
let min = Math.min(...temperaturas);
let max = Math.max(...temperaturas);

let soma = 0;
for (let temp of temperaturas) {
    soma += temp;
}
let media = soma / temperaturas.length;

let average = temperaturas.reduce((a, b) => a + b) / temperaturas.length;//  is used to "reduce" an array of values to a single value. It iterates over the elements of an array and applies a callback function to each element, accumulating the result in a variable, which is ultimately returned as the final result.

console.log(min, max, media);

// other way para fazer comparações vai usar o valor mais pequeno e maior a comparar pelos arrays
let tempMax = -Infinity;
let tempMin = +Infinity;

// using sort()
// se usar o sort simplesmnente ele vai comparar como fosse uma string
console.log(temperaturas.sort((a, b) => a - b)); // ascendente
console.log(temperaturas.sort((a, b) => b - a)); // descendente

// arrays multi dimensional

let dados = [
    ["Pedro", "Ermesinde"],["Hugo", "Valongo"],["Andreia", "Porto"]
]
console.log(dados[0][1]); // ermesinde
console.log(dados[1][1]); // valongo
dados.push(["Ruben", "Gaia"]);
console.table(dados);