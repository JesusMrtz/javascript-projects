class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 4000);
console.log(juan);