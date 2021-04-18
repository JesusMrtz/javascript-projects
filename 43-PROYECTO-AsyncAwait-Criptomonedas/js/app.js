const criptomonedaSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};

const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', validarFormulario);
    criptomonedaSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

async function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    try {
        const respuesta = await fetch(url);
        const result = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(result.Data);
        selectCriptoMonedas(criptomonedas)
    } catch (error) {
        console.log(error);
    }
}

function selectCriptoMonedas(criptomonedas) {
    criptomonedas.forEach((criptomoneda) => {
        const {FullName, Name} = criptomoneda.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedaSelect.appendChild(option);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function validarFormulario(e) {
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}

function mostrarAlerta(message) {
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        const crearAlerta = document.createElement('div');
        crearAlerta.classList.add('error', 'alerta');
        crearAlerta.textContent = message;
        formulario.appendChild(crearAlerta);
        setTimeout(() => crearAlerta.remove(), 3000);
    }
}

async function consultarAPI() {
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner(); 

    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarCotizacionHTML(data.DISPLAY[criptomoneda][moneda])  
    } catch (error) {
        console.log(error);
    }
}

function mostrarSpinner() {
    limpiarHTML(resultado);
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>`; 

    resultado.appendChild(spinner);
}

function mostrarCotizacionHTML(data) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE} = data;
    
    limpiarHTML(resultado);

    const precio = document.createElement('p');
    precio.classList.add('p');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación ultimas 24 horas: <span>${CHANGE24HOUR}%</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(tag) {
    while (tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}