function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jesus = new Cliente("Jesus", 10000);


function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}