function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
    let cantidad;
    let base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    const diferencia = new Date().getFullYear() - parseInt(this.year);
    cantidad -= ((diferencia * 3) * 3) / 100;

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() {}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 21;

    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, formulario.querySelector('#resultado'));
    setTimeout(() => div.remove(), 3000);
}

UI.prototype.mostrarResultado = (seguro, total) => {
    let marca;

    if (seguro.marca === '1') {
        marca = 'americano';
    } else if (seguro.marca === '2') {
        marca = 'asiatico';
    } else {
        marca = 'europeo';
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
    <p class="header">Tu resumen</p>
    <p class="font-bold">Marca: <span class="font-normal capitalize">${marca}</span></p>
    <p class="font-bold">Año: <span class="font-normal">${seguro.year}</span></p>
    <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize">${seguro.tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
};

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

eventListener();

function eventListener() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'success');

    const resultados = document.querySelector('#resultado div');

    if (resultados) {
        resultados.remove();
    }

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    ui.mostrarResultado(seguro, total);
}