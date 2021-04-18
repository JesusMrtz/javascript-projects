const btnCargarJSON = document.querySelector('#cargarJSON');

btnCargarJSON.addEventListener('click', () => obtenerDatos('./data/empleado.json'));

function obtenerDatos(url) {
    fetch(url).then((response) => {
            console.log(response);

            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}