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

Object.seal(producto);

producto.nombre = "Macbook 2012";

console.log(producto);
console.log(Object.isSealed(producto));