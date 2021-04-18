const cardDiv = document.querySelector('.card');
const info = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Hiciste click en el card");
});

info.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Hiciste click en el info");
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Hiciste click en el titulo");
});