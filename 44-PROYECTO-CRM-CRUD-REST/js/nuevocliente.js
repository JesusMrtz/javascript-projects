import { mostrarAlerta, validarObjeto } from './funciones.js';
import { nuevoCliente } from './API.js';

(function() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', validarCliente);


    function validarCliente(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        };

        if (!validarObjeto(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
    }


})();