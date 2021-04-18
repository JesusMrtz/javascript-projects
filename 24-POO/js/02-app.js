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

const juan = new Cliente('Juan', 4000);

// Llamar a un método estatico
console.log(Cliente.bienvenida());
console.log(juan.mostrarInformacion());