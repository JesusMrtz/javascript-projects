const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');
const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;


window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value.trim();

    if (terminoBusqueda === '') {
        mostrarAlerta('Necesitar un termino de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.alerta');

    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);
        setTimeout(() => alerta.remove(), 3000);
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value.trim();
    const key = '20902770-0c954825aab3a980504adb245';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            totalPaginas = calcularPaginas(data.totalHits);
            //console.log(totalPaginas);
            mostrarImagenes(data.hits);
        });
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes) {
    limpiarHTML(resultado);

    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
        <div class="w-1/2 md:1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" loading="lazy" src="${previewURL}">
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>
                    <a class="w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1 block" href="${largeImageURL}" target="_blank" rel="nofollow noopener noreferrer">
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
        `;
    });
    limpiarHTML(paginacionDiv);
    imprimirPaginador();
}

function limpiarHTML(tag) {
    while (tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);
    while (true) {
        const {value, done}  = iterador.next();

        if (done) return;

        // Caso contrario, generar un botón para cada elemento en el generador
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-2', 'mr-2', 'font-bold', 'mb-4', 'uppercase', 'rounded');

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}