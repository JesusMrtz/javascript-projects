function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipoCliente;

    if (this.saldo > 10000) {
        tipoCliente = 'Gold';
    } else if (this.saldo > 5000) {
        tipoCliente = 'Platinum';
    } else {
        tipoCliente = 'Normal';
    }

    return tipoCliente;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `El nombre del cliente es ${this.nombre} con saldo de ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`;
}

const jesus = new Cliente("Jesus", 6000);
console.log(jesus);
console.log(jesus.tipoCliente());
console.log(jesus.nombreClienteSaldo());