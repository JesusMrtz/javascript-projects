// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


eventListener();

function eventListener() {
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
}



function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        const cursoID = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);
        carritoHTML();
    }
}

function vaciarCarrito(e) {
    articulosCarrito = [];
    limpiarHTML();
}


function leerDatosCurso(curso) {
    const infoCurso = {
        image: curso.querySelector('img').src,
        title: curso.querySelector('h4').textContent,
        price: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        total: 1
    };

    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

    if (existe) {
        articulosCarrito = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.total++;
            }
            return curso;
        });
    } else {
        articulosCarrito.push(infoCurso);
    }

    carritoHTML();
}

function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach((curso) => {
        const { id, image, title, price, total } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src='${image}' alt='${title}' width='100'>
        </td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}