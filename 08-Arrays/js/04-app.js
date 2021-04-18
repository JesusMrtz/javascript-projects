const numeros = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

numeros[10] = "Octubre";
console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}