import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(response => response.json())
            .then(value => {
                const { lyrics } = value;

                if (lyrics) {
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `${this.artista} - ${this.cancion}`;
                } else {
                    UI.divMensajes.textContent = `No existe la letra de la canción`;
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

export default API;