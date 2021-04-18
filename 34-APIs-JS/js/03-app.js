window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado() {
    if (navigator.onLine) {
        console.log("Tienes internet");
    } else {
        console.log("No tienes internet");
    }
}