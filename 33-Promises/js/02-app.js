const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregando el pais ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('México', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();