const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

producto.image = "Hola.jpg";
delete producto.disponible;
console.log(producto);