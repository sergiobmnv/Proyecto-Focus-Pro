document.addEventListener('DOMContentLoaded', () => {
    const usuarios = document.querySelectorAll('.usuario'); // Selecciona los divs de usuario
    const modal = document.getElementById('modal'); // Selecciona el modal
    const closeModal = document.querySelector('.close'); // Selecciona el botón de cerrar

    // Asegúrate de que el modal esté oculto inicialmente
    modal.style.display = 'none';

    // Abre el modal al hacer clic en un usuario
    usuarios.forEach(usuario => {
        usuario.addEventListener('click', () => {
            modal.style.display = 'flex'; // Mostrar modal
        });
    });

    // Cierra el modal al hacer clic en el botón de cierre
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Ocultar modal
    });

    // Cierra el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
