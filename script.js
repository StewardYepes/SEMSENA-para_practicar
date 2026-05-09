// 1. Selección de elementos del DOM
const cards = document.querySelectorAll('.card');
const btnToggle = document.getElementById('darkModeToggle');

// 2. Interactividad de las tarjetas
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Generar un color aleatorio hexadecimal válido
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        card.style.borderLeft = `10px solid #${randomColor}`;
        
        const titulo = card.querySelector('h3').innerText;
        console.log(`Interés en: ${titulo}`);
        alert(`¡Genial! Estás interesado en: ${titulo}`);
    });

    // Cambiar el cursor al entrar
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
});

// 3. Lógica del Modo Oscuro
btnToggle.addEventListener('click', () => {
    // Alternar clase en el body
    const isDark = document.body.classList.toggle('dark-mode');
    
    // Cambiar el texto del botón según el estado
    btnToggle.innerText = isDark ? "Modo Claro ☀️" : "Modo Oscuro 🌙";
});