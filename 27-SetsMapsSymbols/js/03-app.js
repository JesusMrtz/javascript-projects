// Los maps son listas ordenadas en llave y valor (puede ser cualquier tipo de dato)
// Los maps si son iterables

const cliente = new Map();

cliente.set('nombre', 'Jesus');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

console.log(cliente);

console.log('');

cliente.forEach((cliente2, key) => {
    console.log(`${key}.- ${cliente2}`);
});

console.log('');

// Saber el tamaño del map
console.log(cliente.size);

// Saber si existe una llave
console.log(cliente.has('nombre2'));

// OBtener un valor que existe en un map
console.log(cliente.get('nombre'));

// Eliminar un valor (si no existe la propiedad, obtienes como false)
cliente.delete('saldo');

// Eliminar todos los elementos
cliente.clear();

// Iniciar un map con valores definidos
const paciente = new Map([
    ['paciente', 'Jesus'],
    ['edad', 25],
    ['sexo', 'Maculino']
]);
console.log(paciente);