const btnCargarJSONArray = document.querySelector('#cargarJSONArray');

btnCargarJSONArray.addEventListener('click', () => obtenerDatos('./data/empleados.json'));

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