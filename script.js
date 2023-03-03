// Seleccionamos el botón del menú y el elemento nav
const open = document.getElementById('open');
const close = document.getElementById('close');
const sec_sabores = document.getElementById('sec_sabores');

// Agregamos un evento click al botón del open
open.addEventListener('click', () => {
  // Agregamos la clase 'show' para mostrar el menú
  sec_sabores.classList.remove('diplay_sabores');
});

// Agregamos un evento click al botón del close
close.addEventListener('click', () => {
  // Quitamos la clase 'show' para mostrar el menú
  sec_sabores.classList.add('diplay_sabores');
});
