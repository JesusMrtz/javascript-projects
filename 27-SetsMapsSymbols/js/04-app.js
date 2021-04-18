// weakMap mantiene una serie de datos como privados
// No se pueden iterar y saber su tamaño

const producto = {
    idProducto: 10
};

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap);

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
weakmap.delete(producto);
console.log(weakmap);