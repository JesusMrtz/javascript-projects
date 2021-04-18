const url = 'http://localhost:3000/clientes';
export const nuevoCliente = async (cliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href='index.html';
    } catch(error) {
        console.log(error);
    }
};

export const obtenerClientes = async () => {
    try {
        const resultados = await fetch(url);
        const clientes = await resultados.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async (idCliente) => {
    try {
        await fetch(`${url}/${idCliente}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerCliente (id) {
    try {
        const resultado = await fetch(`${url}/${id}`);
        return await resultado.json();
    } catch (error) {
        console.log(error);
    }
}

export async function editarCliente(cliente) {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}