const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('paste', (e) => {
    console.log(e.target.value);
});