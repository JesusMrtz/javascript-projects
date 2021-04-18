class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gasto) {
        this.gastos.push(gasto);
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total += gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo = null) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        div.textContent = mensaje;

        document.querySelector('.primario').insertBefore(div, formulario);

        setTimeout(() => div.remove(), 3000);
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(objPresupuesto) {
        const { presupuesto, restante } = objPresupuesto;
        const restanteDiv = document.querySelector('.restante');

        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-warning', 'alert-danger');
            restanteDiv.classList.add('alert-success');
        }

        if (restante <= 0) {
            this.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else {
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }

    mostrarListadoDeGastos(gastos) {
        this.limpiarHTML();

        gastos.forEach((gasto) => {
            const { id, cantidad, nombre } = gasto;

            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.setAttribute('data-id', id);
            li.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;

            const btnBorrar = document.createElement('button');
            btnBorrar.className = 'btn btn-danger borrar-gasto';
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => eliminarGasto(id);
            li.appendChild(btnBorrar);

            gastoListado.appendChild(li);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.firstChild.remove();
        }
    }
}



const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

const ui = new UI();
let presupuesto;

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}


function preguntarPresupuesto() {
    try {
        const presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

        if (presupuestoUsuario <= 0 || isNaN(presupuestoUsuario)) {
            window.location.reload();
        }

        presupuesto = new Presupuesto(presupuestoUsuario);
        ui.insertarPresupuesto(presupuesto);
    } catch (error) {
        window.location.reload();
    }

}

function agregarGasto(e) {
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value.trim();
    const cantidad = Number(document.querySelector('#cantidad').value.trim());

    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (isNaN(cantidad) || cantidad <= 0) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    const objGasto = { nombre, cantidad, id: Date.now() };
    presupuesto.agregarGasto(objGasto);

    ui.imprimirAlerta('Gasto agregado correctamente');

    const { gastos, restante } = presupuesto;
    ui.mostrarListadoDeGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    const { gastos, restante } = presupuesto
    ui.mostrarListadoDeGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}