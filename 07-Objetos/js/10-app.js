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

const producto2 = {
    direccion: {
        calle: "55C",
        cruzamientos: "60B y 60C",
        colonia: "Flamboyanes"
    }
};

console.log(producto);
const producto3 = Object.assign(producto, producto2);

console.log(producto3);

const producto4 = {...producto, ...producto2 };
console.log(producto2);

console.log(JSON.stringify(producto2) === JSON.stringify(producto4));