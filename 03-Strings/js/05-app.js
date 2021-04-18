// Eliminar el espacio en blango al final y al inico de una cadena de texto
const producto = "Monitor de 20 pulgadas";
console.log(producto);

// Reemplazar string
console.log(producto.replace("Monitor", "Monitor curvo"));
console.log(producto.replace("pulgadas", '"'));


// Cortar un string
console.log("Cortar un string");
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(-5));


// Alternativa a slice
console.log("Alternativa a slice");
console.log(producto.substring(2, 1));
console.log(producto.substring(0, 10));