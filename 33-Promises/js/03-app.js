const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar descuento');
    }
});


/**
 * Hay tres valores en los promises
 * fulfilled - El promise se cumplio
 * reject - El promise no se cumplio
 * pending - No se ha ejecutado el promise
 */
aplicarDescuento.then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });