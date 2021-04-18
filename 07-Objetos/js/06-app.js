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

const { nombre, informacion: { fabricacion: { pais } } } = producto;

console.log(pais);