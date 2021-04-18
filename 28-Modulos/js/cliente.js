export const nombreCliente = 'Juan';
export const ahorro = 200;


export function mostrarInformacion() {
    return `Cliente ${nombreCliente}, ahorro: $${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro) {
        return 'Tienes saldo';
    }

    return 'No tienes saldo';
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, ahorro: $${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el nuevo export default');
}