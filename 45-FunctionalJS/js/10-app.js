// Copositions 

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando el email de: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente (nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    };

    // Toma una función y la copia dentro del objeto
    return Object.assign(info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info));
}

function Empleado (nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    };

    // Toma una función y la copia dentro del objeto
    return Object.assign(info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info));
}

const cliente = Cliente('Jesus', null, 'Jesus Company');
cliente.mostrarNombre();
cliente.agregarEmail('jesus@correo.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('');

const empleado = Empleado('Karely', null, 'Administrador');
empleado.mostrarNombre();
empleado.agregarEmail('karely@correo.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();