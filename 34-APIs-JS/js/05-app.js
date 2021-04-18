// Detectar si estamos viendo la pagina web actual

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "visible") {
        console.log("El campo está visible");
    } else {
        console.log("No está visible");
    }
});