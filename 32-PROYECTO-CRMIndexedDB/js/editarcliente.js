(function() {
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', async() => {
        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        conectarDB(idCliente);
    });

    formulario.addEventListener('submit', actualizarCliente);



    function actualizarCliente(e) {
        e.preventDefault();

        if (nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '') {
            imprimirAlerta('Todos los campos son requeridos', 'error');
            return;
        }

        // Actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)
        };

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            imprimirAlerta('Actualizado correctamente');
        }

        transaction.onerror = function() {
            imprimirAlerta('No se pudo actualizar el usuario', 'error');
        }
    }

    function conectarDB(idCliente) {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
            if (idCliente) {
                obtenerCliente(idCliente);
            }
        }
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();

        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }

                cursor.continue();
            }
        }
    }

    function llenarFormulario(user) {
        const { nombre, email, telefono, empresa } = user;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }
})();