import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validarObjeto } from './funciones.js';

(function() {

    // Campos del formulario;
    const formulario = document.querySelector('#formulario');
    const idInput = document.querySelector('#id');
    const nombreInput = document.querySelector('#nombre');
    const empresaInput = document.querySelector('#empresa');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        const cliente =  await obtenerCliente(idCliente);
        mostrarCliente(cliente);
    });

    formulario.addEventListener('submit', validarCliente);

    function mostrarCliente(cliente) {
        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            id: parseInt(idInput.value.trim()),
            nombre: nombreInput.value.trim(),
            email: emailInput.value.trim(),
            telefono: telefonoInput.value.trim(),
            empresa: empresaInput.value.trim()
        };
        
        if (!validarObjeto(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente(cliente);
    }

})();