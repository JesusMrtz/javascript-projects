// PArtials and Currryng

const suma = (a, b, c) => a + b + c ;

const partial = a => (b, c) => suma(a, b, c);

const primerNumero = partial(5);
const resultado = primerNumero(12, 3);
console.log(resultado);