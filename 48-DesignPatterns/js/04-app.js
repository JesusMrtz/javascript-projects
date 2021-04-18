// FActory patterns
// Crea objetos basados en cierta condiciones
let instancia = null;

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`
    }
} 

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch(tipo) {
            case 'text':
                return new InputHTML('text', nombre); 
            case 'tel':
                return new InputHTML('tel', nombre); 
            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText);

const elemento2 = new HTMLFactory();
const inputTel = elemento2.crearElemento('tel', 'nombre-cliente');
console.log(inputTel);