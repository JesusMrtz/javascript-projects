// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Jesus Martinez');
const fn = obtenerCliente();
fn();