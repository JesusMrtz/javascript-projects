const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('#ciudad').value.trim();
    const pais = document.querySelector('#pais').value;

    if (pais === '' || ciudad === '') {
        mostrarError('Todos los datos son obligatorios');
        return;
    }

    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }

    const alert = document.createElement('div');
    alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alert');
    alert.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span>
    `;
    container.appendChild(alert);

    setTimeout(() => alert.remove(), 4000);
}

function consultarAPI(ciudad, pais) {
    const appID = 'dd78d44a315eb5211380316a8c817193';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    spinner();

    fetch(url)
        .then(response => response.json())
        .then(dates => {
            limpiarHTML(resultado);

            if (dates.cod === '404') {
                mostrarError('Ciudad no encontrada');
                return;
            }

            mostrarClima(dates);
        });
}

function mostrarClima(dates) {
    const { name, main: { temp, temp_max, temp_min } } = dates;
    const centigrados = kelvinACentigrados(temp);
    const temperaturaMaxima = kelvinACentigrados(temp_max);
    const temperaturaMinima = kelvinACentigrados(temp_min);


    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Max: ${temperaturaMaxima} &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${temperaturaMinima} &#8451;`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function kelvinACentigrados(temp) {
    return parseInt(temp - 273.15);
}

function limpiarHTML(tag) {
    while (tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}

function spinner() {
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}