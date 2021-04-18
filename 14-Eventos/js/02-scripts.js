const navegacion = document.querySelector('.navegacion');

/*navegacion.addEventListener('click', () => {
    console.log('click en la navegación');
});*/

navegacion.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');
});

navegacion.addEventListener('mouseout', () => {
    console.log('Saliendo a la navegación');
});

navegacion.addEventListener('dblclick', () => {
    console.log('Doble click a la navegación');
});