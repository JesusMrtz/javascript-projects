const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMinimo = document.querySelector('#minimo');
const selectMaximo = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    marca: '',
    transmision: '',
    color: ''
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelectYear();
});

selectMarca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
selectYear.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
selectMinimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
selectMaximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
selectPuertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
selectTransmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
selectColor.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


function llenarSelectYear() {
    for (let index = maxYear; index >= minYear; index--) {
        const option = document.createElement('option');
        option.textContent = index;
        option.value = index;
        selectYear.appendChild(option);
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        limpiarResultados();
        noResultados();
    }
}

function noResultados() {
    const noResultados = document.createElement('div');
    noResultados.classList.add('alerta', 'error');
    noResultados.textContent = 'No hay resultados';
    resultado.appendChild(noResultados);
}

function mostrarAutos(arrayAutos) {
    limpiarResultados();
    arrayAutos.forEach((auto) => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
        ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmición: ${transmision} - Precio $${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

function limpiarResultados() {
    while (resultado.firstChild) {
        resultado.firstChild.remove();
    }
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }

    return auto;
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }

    return auto;
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }

    return auto;
}