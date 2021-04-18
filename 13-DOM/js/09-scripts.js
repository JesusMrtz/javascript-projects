const enlace = document.createElement('a');
enlace.href = './Hola';
enlace.target = "_blank";
enlace.textContent = 'Nuevo enlace';
console.log(enlace);

// SEleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);