// Singleton patterns
// PReviene que no se cree nuevas instancias
let instancia = null;

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
const persona2 = new Persona('jesus', 'jesus@jesus.com');
console.log(persona);
console.log(persona2);