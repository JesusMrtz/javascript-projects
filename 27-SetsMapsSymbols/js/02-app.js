// Weakset solo agrega objetos
// No se pueden iterar y saber el tamaño del mismo :/

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Jesus',
    saldo: 100

};

weakSet.add(cliente);

console.log(weakSet);
console.log(weakSet.has(cliente));

console.log(weakSet.delete(cliente));
console.log(weakSet);