const btnAbrir = document.querySelector("#abrir-pantalla-completa");
const btnCerrar = document.querySelector("#salir-pantalla-completa");

btnAbrir.addEventListener('click', pantallaCompleta);
btnCerrar.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta()  {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}