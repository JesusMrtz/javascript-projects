// Los sets te permite crear una lista de valores sin duplicados
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');
carrito.add('Disco 1');

console.log(carrito);

// Ver el tamaño del set
//console.log(carrito.size);

// Saber si tiene un elemento
console.log(carrito.has('Camisa'));
console.log(carrito.has('Guitarra'));

/** Eliminar un elemento (si no existe un elemento que se desea eliminar te da un resultado de false) */
console.log(carrito.delete('Disco 2'));
console.log(carrito.delete('Guitarra'));
console.log(carrito);

console.log('');
carrito.forEach((producto) => {
    console.log(producto);
});
console.log('');

/** Limpiar un set y dejarlo vacio */
console.log(carrito.clear());
console.log(carrito);