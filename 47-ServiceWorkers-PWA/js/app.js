if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log('REgistrado... ', registrado))
    .catch(error => console.error(error));
} else {
    console.log('No soporta service Workers');
}