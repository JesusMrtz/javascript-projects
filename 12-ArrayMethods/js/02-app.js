const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Conocer el indice de un elemento

const index = meses.findIndex((mes) => mes === 'Diciembre');
console.log(index);

const indexCarrito = carrito.findIndex((producto) => producto.nombre === 'Teclado');
console.log(indexCarrito);