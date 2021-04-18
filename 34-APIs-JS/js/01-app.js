const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click', () => {
    Notification.requestPermission()
        .then((response) => {
            console.log("El resultado es " + response);
        });
});

const btnVerNotificacion = document.querySelector("#verNotificacion");

btnVerNotificacion.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        const notification = new Notification('Esta es la notificación', {
            body: "Estes es el cuerpo de la notificación",
            icon: 'img/hacer1.jpg'
        });

        notification.onclick = function() {
            window.open("http://stackoverflow.com/a/13328397/1269037");
        };
    }
});