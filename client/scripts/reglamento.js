// Selección de las tarjetas
const cards = document.querySelectorAll('.card');

// Función que muestra y oculta el contenido
function toggleDescription(clickedCard) {
    // Quitar la clase .active a todas las tarjetas
    cards.forEach(card => {
        card.classList.remove('active');
    });

    // Agregar la clase .active a la tarjeta que se clickeó
    clickedCard.classList.add('active');
}

// Agregar evento de clic a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => toggleDescription(card));
});
