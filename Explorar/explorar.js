// Función para abrir el modal y actualizar la información
function openModal(name, location, age, posts) {
    // Actualizar el contenido del modal con los datos del usuario
    document.getElementById("user-name").textContent = name;
    document.getElementById("user-location").textContent = location;
    document.getElementById("user-age").textContent = age;
    document.getElementById("user-posts").textContent = posts;

    // Mostrar el modal
    document.getElementById("usuario-modal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
    // Ocultar el modal
    document.getElementById("usuario-modal").style.display = "none";
}

// Agregar un evento para cerrar el modal si se hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == document.getElementById("usuario-modal")) {
        closeModal();
    }
};
