const btnCargarTXT = document.querySelector('#cargarTxt');

btnCargarTXT.addEventListener('click', () => obtenerDatos('./data/datos.txt'));

function obtenerDatos(url) {
    fetch(url).then((response) => {
            console.log(response);

            return response.text();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}