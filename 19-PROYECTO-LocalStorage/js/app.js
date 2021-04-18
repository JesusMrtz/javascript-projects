const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', cargarTweets);
    formulario.addEventListener('submit', agregarTweet);
}

function cargarTweets() {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    crearHTML();
}

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value.trim();

    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    const objTweet = {
        id: Date.now(),
        tweet
    }

    tweets.push(objTweet);
    sincronizarStorage();
    crearHTML();
    formulario.reset();
}

function mostrarError(error) {
    const tagMsjError = document.querySelector('p.error');

    if (!tagMsjError) {
        const msjError = document.createElement('p');
        msjError.textContent = error;
        msjError.classList.add('error');

        const contenido = document.querySelector('#contenido');
        contenido.appendChild(msjError);

        setTimeout(() => msjError.remove(), 3000);
    }
}

function crearHTML() {
    limpiarHTML();

    if (tweets.length) {
        tweets.forEach((tweet) => {
            const linkDeleteTweet = document.createElement('a');
            linkDeleteTweet.classList.add('borrar-tweet');
            linkDeleteTweet.textContent = 'X';
            linkDeleteTweet.onclick = () => borrarTweet(tweet.id);

            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(linkDeleteTweet);

            listaTweets.appendChild(li);
        });
    }
}

function borrarTweet(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
    sincronizarStorage();
    crearHTML();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.firstChild.remove();
    }
}