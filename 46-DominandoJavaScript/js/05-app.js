// Explicit binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Jesús'
};

const musicaFavorita = ['Heavy metal', 'Rap'];


// Utilizando explicit binding con call 
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);
console.log('');

// Utilizando explicit binding con apply
persona.apply(informacion, musicaFavorita);
console.log('');

// Utilizando explicit binding con bind 

// bind es lo mismo que call pero te crea una función para despues ejecutarla
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);

// Ejecutar nuevaFn
nuevaFn();