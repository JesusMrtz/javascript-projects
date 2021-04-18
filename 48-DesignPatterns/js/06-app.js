//Namespases
// Evitan la colision con nombres en el scope global de JavaScript

const restaurantAPP = {};

restaurantAPP.platillos = [
    {
        platillo: 'Pizza',
        precio: 24
    },
    {
        platillo: 'Hamburguesa',
        precio: 25
    },
    {
        platillo: 'Hot dog',
        precio: 20
    }
];

restaurantAPP.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenido, aqui está el menu');
        platillos.forEach((platillo, index) => {
            console.log(`${index + 1}.- ${platillo.platillo}: $${platillo.precio}`);
        })
    },

    ordenar: (id) => {
        console.log(`Ordenaste el platillo ${platillos[id - 1].platillo} con un precio de $${platillos[id - 1].precio}`);
    },

    agregarPlatillo: (platillo, precio) => {
        platillos.push({platillo, precio});
    }
}

const { platillos } = restaurantAPP;

restaurantAPP.funciones.mostrarMenu(platillos);
restaurantAPP.funciones.ordenar(1);
console.log('');
restaurantAPP.funciones.agregarPlatillo('Mole', 100);
restaurantAPP.funciones.mostrarMenu(platillos);