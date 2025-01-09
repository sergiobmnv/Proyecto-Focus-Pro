// Obtener el modal y el botón de cierre
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

// Función para abrir el modal y mostrar los comentarios
function openModal() {
    modal.style.display = 'flex'; // Mostrar el modal
}

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera de la ventana del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera
    }
});

// Obtener todos los elementos con la clase 'open-modal' (la palabra Comentarios)
const openModalLinks = document.querySelectorAll('.open-modal');

// Añadir evento de clic a cada elemento de "Comentarios"
openModalLinks.forEach(link => {
    link.addEventListener('click', () => {
        openModal(); // Abre el modal cuando se hace clic en "Comentarios"
    });
});
