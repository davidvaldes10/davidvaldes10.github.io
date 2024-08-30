window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('main-nav');

    if (window.scrollY > 0) {
        header.style.transform = 'translateY(-100%)';
        nav.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(0)';
        nav.style.transform = 'translateY(-100%)';
    }
});

// Alternar entre modo claro y oscuro
document.getElementById('theme-toggle').addEventListener('click', function() {
    const darkModeEnabled = document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(function(card) {
        card.classList.toggle('dark-mode');
    });

    // Cambiar el texto del botón según el modo
    this.textContent = darkModeEnabled ? 'Modo Claro' : 'Modo Oscuro';

    // Guardar la preferencia del modo oscuro en localStorage
    localStorage.setItem('dark-mode', darkModeEnabled);
});

// Aplicar la preferencia al cargar la página
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
    document.querySelectorAll('.card').forEach(function(card) {
        card.classList.add('dark-mode');
    });
    document.getElementById('theme-toggle').textContent = 'Modo Claro';
}

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Comprobar el modo actual
const currentMode = localStorage.getItem('theme');
if (currentMode) {
    body.classList.add(currentMode);
    toggleButton.textContent = currentMode === 'dark-mode' ? 'Modo Claro' : 'Modo Oscuro';
}

// Alternar el modo
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
    
    // Guardar el modo en localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});


const container = document.querySelector('.testimonios-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const testimonialWidth = container.querySelector('.testimonio').offsetWidth;
let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${index * testimonialWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (index < container.children.length - 1) {
        index++;
        updateCarousel();
    }
});





