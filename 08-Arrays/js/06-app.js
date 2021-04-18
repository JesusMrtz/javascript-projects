const numeros = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

numeros.push("Junio");
numeros.unshift("Mes 0");
const nombres = ["karely", "Jesus", "Daniel"];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log("");

const copy_numeros = [...numeros, ...nombres];

console.log(copy_numeros);