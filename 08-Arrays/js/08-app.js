const numeros = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

numeros.push("Junio");
numeros.unshift("Mes 0");


const [, cumpleCuates] = numeros;
const [, , , , cumpleAlexis] = numeros;

console.log(cumpleCuates);
console.log(cumpleAlexis);