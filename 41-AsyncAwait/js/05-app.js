const url = 'https://picsum.photos/list';


document.addEventListener('DOMContentLoaded', obtenerDatos);


/*function obtenerDatos() {
    fetch(url).then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log("hay un error"));
}*/

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}