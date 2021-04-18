// Mixins pattern
// Agregar funciones a una clase, una vez creada

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre PErsona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase Persona
 Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Jesús', 'jesus@correo.com');
cliente.mostrarInformacion();
cliente.mostrarNombre();