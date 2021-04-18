const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1in",
        fabricacion: {
            pais: "China"
        }
    }
};

Object.freeze(producto);

producto.imagen = "Hola.jpg";

console.log(producto);
console.log(Object.isFrozen(producto));