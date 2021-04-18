(function() {
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
    });

    formulario.addEventListener('submit', validarFormulario);

    function validarFormulario(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' ||  empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Crear un nuevo objeto con información

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        };

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);

        transaction.onerror = function() {
            imprimirAlerta('El correo está duplicado', 'error');
        }

        transaction.oncomplete = function() {
            imprimirAlerta('El cliente se agregó correctatemente');
            formulario.reset();
            //setTimeout(() => window.location.href = './index.html', 3000);
        }
    }
})();