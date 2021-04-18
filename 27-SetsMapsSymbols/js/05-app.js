// Los Symbols permite crear una propiedad unica

const symbol = Symbol('1');
const symbol2 = Symbol('1');

/*if (symbol === symbol2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}*/


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = "Jesus";
persona[apellido] = "Martinez";
persona.tipoCliente = "Premium";
persona.saldo = 2500;

console.log(persona);

console.log(persona[nombre]);
console.log('');

// LAs propiedades que utilizan un Symbol no son iterables

for (let i in persona) {
    console.log(i);
}

// DEfinir una description dle symbol

const nombreCliente = Symbol('nombre del cliente');
const cliente = {};
cliente[nombreCliente] = "Hola mundo";

console.log(cliente);
console.log(cliente[nombreCliente]);