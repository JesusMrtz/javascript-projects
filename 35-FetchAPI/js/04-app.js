const btnCargarAPI = document.querySelector('#cargarAPI');

btnCargarAPI.addEventListener('click', () => obtenerDatos('https://picsum.photos/list'));

function obtenerDatos(url) {
    fetch(url).then((response) => {
            console.log(response);

            return response.json();
        })
        .then((data) => {
            mostrarHTML(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function mostrarHTML(values) {
    const contenido = document.querySelector('.contenido');
    let html = "";

    values.forEach((value) => {
        const { author, post_url } = value;
        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver imagen</a>
        `
    });

    contenido.innerHTML = html;
}