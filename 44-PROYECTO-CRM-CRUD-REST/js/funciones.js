export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span>${mensaje}</span>
        `;

        const formularo = document.querySelector('#formulario');
        formularo.appendChild(alerta);

        setTimeout(() => alerta.remove(), 3000);
    }
}

export function validarObjeto(objeto) {
    return Object.values(objeto).every((input) => input !== '');
}