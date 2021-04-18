const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnReset = document.querySelector('#resetBtn');


eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    inputEmail.addEventListener('blur', validarFormulario);
    inputAsunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    formulario.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', resetearFormulario);
}



function enviarEmail(e) {
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'p-2', 'bg-green-500', 'my-5', 'text-white');
        formulario.insertBefore(parrafo, spinner);

        resetearFormulario();
        setTimeout(() => parrafo.remove(), 5000);
    }, 3000);
}

function validarFormulario(e) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.length > 0) {
        esInputEmail(e, regexEmail);
    } else {
        removeErrorInput(e);
        mostrarError('Todos los campos son obligatorios');
    }

    if (regexEmail.test(inputEmail.value) && inputAsunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }

}

function mostrarError(mensaje) {
    const errores = document.querySelectorAll('.error');

    if (!errores.length) {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = mensaje;
        mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

        formulario.appendChild(mensajeError);
    }
}

function resetearFormulario() {
    formulario.reset();
    inputEmail.classList.remove('border-green-500');
    inputAsunto.classList.remove('border-green-500');
    mensaje.classList.remove('border-green-500');
    iniciarApp();
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function esInputEmail(e, regex) {
    if (e.target.type === 'email') {
        const resultado = regex.test(e.target.value);
        if (resultado) {
            removeErrorInput(e);
            removeError();
        } else {
            addErrorInput(e);
            mostrarError('Este campo debe ser un email válido');
        }
    } else {
        removeErrorInput(e);
        removeError();
    }
}

function removeError() {
    const error = document.querySelector('p.error');

    if (error) {
        error.remove();
    }
}

function addErrorInput(e) {
    e.target.classList.remove('border-green-500');
    e.target.classList.add('border', 'border-red-500');
}

function removeErrorInput(e) {
    e.target.classList.remove('border-red-500');
    e.target.classList.add('border', 'border-green-500');
}