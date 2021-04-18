import nuevaFuncion, { ahorro, nombreCliente, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion());
console.log(tieneSaldo(20));
console.log(nuevaFuncion());

const jesus = new Cliente('Jesus', 58);
console.log(jesus);
console.log(jesus.mostrarInformacion());

console.log();
const empresa = new Empresa('Jesus company', 60754, 'Tutoriales');
console.log(empresa.mostrarInformacion());