// Selección de elementos
const overlay = document.getElementById('overlay');
const openOverlayButtons = document.querySelectorAll('.flip-card-back p:nth-child(3)'); // Selecciona los elementos de comentarios
const closeOverlayButton = document.querySelector('.close-overlay');

// Mostrar el overlay al hacer clic en los comentarios
openOverlayButtons.forEach((button) => {
    button.addEventListener('click', () => {
        overlay.style.display = 'flex'; // Muestra el overlay
    });
});

// Ocultar el overlay al hacer clic en el botón de cerrar
closeOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'none'; // Oculta el overlay
});
