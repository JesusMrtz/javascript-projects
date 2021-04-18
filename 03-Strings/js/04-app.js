// Eliminar el espacio en blango al final y al inico de una cadena de texto
const producto = "           Monitor de 20 pulgadas      ";
console.log(producto);
console.log(producto.length);
console.log(producto.trimStart());
console.log(producto.trimStart().length);
console.log(producto.trimEnd());
console.log(producto.trimEnd().length);
console.log(producto.trim());
console.log(producto.trim().length);