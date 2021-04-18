function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Pasar el prototype del cliente hacia persona
Persona.prototype = Object.create(Cliente.prototype);
// Heredar el constructor del cliente en persona
Persona.prototype.contructor = Cliente;

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

const jesus = new Persona("Jesus", 6000, '0180054305');
console.log(jesus.nombreClienteSaldo());