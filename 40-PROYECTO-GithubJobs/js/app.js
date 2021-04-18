const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e) {
    e.preventDefault();
    const busqueda = document.querySelector('#busqueda').value.trim();

    if (busqueda.length < 3) {
        mostrarMensaje('Ingrese al menos 3 caracteres');
        return;
    }

    consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const githubURL = `https://jobs.github.com/positions.json?search=${busqueda}`;
    // Agregar un proxy para evitar el bloqueo CORS
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githubURL)}`;

    axios.get(url)
    .then(response => mostrarVacantes(JSON.parse(response.data.contents)));
}

function mostrarVacantes(vacantes) {
    limpiarHTML(resultado);

    if (vacantes.length) {
        resultado.classList.add('grid');
        vacantes.forEach(vacante => {
            const {company, title, type, url} = vacante;
            resultado.innerHTML+= `
            <div class="shadow bg-white p-6 rounded">
            <h2 class="text-2xl font-light mb-4">${title}</h2>
            <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
            <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
            <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}" target="_blank" rel="noopener noreferrer">Ver Vacante</a>
        </div>
            `;
        });
    } else {
        resultado.classList.remove('grid');
        const noResultado = document.createElement('p');
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full');
        noResultado.textContent = 'No hay vacantes, intenta con otro término de búsqueda';
        resultado.appendChild(noResultado);
    }
}

function limpiarHTML(tag) {
    while(tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}

function mostrarMensaje(mensaje) {
    const seachAlerta = document.querySelector('.alerta');

    if (!seachAlerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('alerta', 'bg-gray-100', 'p-3', 'text-center', 'mt-3');
        alerta.textContent = mensaje;
        formulario.appendChild(alerta);
        setTimeout(() => alerta.remove(), 3000);
    }

}