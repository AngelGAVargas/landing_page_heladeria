// Seleccionamos el botón del menú y el elemento nav
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
const sec_sabores = document.getElementById('sec_sabores');

// Agregamos un evento click al botón del open
open.addEventListener('click', () => {
  // Agregamos la clase 'show' para mostrar el menú
  modal_container.classList.add('show');
  sec_sabores.classList.remove('diplay_sabores');
});

// Agregamos un evento click al botón del close
close.addEventListener('click', () => {
  // Quitamos la clase 'show' para mostrar el menú
  modal_container.classList.remove('show');
  sec_sabores.classList.add('diplay_sabores');
});

close2.addEventListener('click', () => {
  sec_sabores.classList.add('diplay_sabores');
});