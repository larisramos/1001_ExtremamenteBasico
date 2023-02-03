// RESOLUÇÃO PARA O BEECROWD
var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b] = input.split(" ").map(item => parseInt(item));
console.log('X = ', a+b);


/* RESOLUÇÃO PARA FORA DA PLATAFORMA

let soma = parseInt(), a = parseInt(prompt()), b = parseInt(prompt());
soma = a+b;
console.log("X = ", soma);

*/
