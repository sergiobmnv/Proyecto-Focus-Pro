// Selecciona el modal y los botones
const modal = document.getElementById('modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

// Abre el modal al hacer clic en el texto de comentarios
openModal.addEventListener('click', () => {
    modal.style.display = 'flex'; // Muestra el modal
});

// Cierra el modal al hacer clic en el botón "×"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

