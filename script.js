// Selección de todas las tarjetas
const cards = document.querySelectorAll('.card');
const btnToggle = document.getElementById('darkModeToggle');

// 1. Lógica para girar las tarjetas
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Al hacer clic, añadimos o quitamos la clase que hace el giro
        card.classList.toggle('is-flipped');
    });
});

// 2. Lógica para el Modo Oscuro
btnToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    
    // Cambiar el texto y el emoji del botón
    if (isDark) {
        btnToggle.innerText = "Modo Claro ☀️";
    } else {
        btnToggle.innerText = "Modo Oscuro 🌙";
    }
});