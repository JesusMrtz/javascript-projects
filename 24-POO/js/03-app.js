class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `El nombre es ${this.nombre} y el saldo es de $${this.saldo}`;
    }

    // Métodos estaticos
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}

const juan = new Cliente('Juan', 4000);
const empresa = new Empresa('JesusCompany', 50000, '9991010203', 'Cursos en linea');

console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());

// Llamar a un método estatico
console.log(Cliente.bienvenida());
console.log(juan.mostrarInformacion());