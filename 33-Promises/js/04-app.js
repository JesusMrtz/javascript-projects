const paises = [];

const nuevoPais = (pais) => new Promise((resolve, reject) => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregando ${pais}`);
    }, 3000);
});


nuevoPais('Alemania').then((response) => {
        console.log(response);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then((response) => {
        console.log(response);
        console.log(paises);
        return nuevoPais('México');
    })
    .then((response) => {
        console.log(response);
        console.log(paises);
    });