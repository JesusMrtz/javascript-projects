const numeros = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

numeros.push("Junio");
numeros.unshift("Mes 0");

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}