// Self 

self.onload = () => {
    console.log('Ventana lista');
}

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo() {
        const self = this;
        return `El producto ${self.nombre} y el precio de ${this.nombre}`
    }
}

console.log(producto.mostrarInfo());