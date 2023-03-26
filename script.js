// Seleccionamos el botón del menú y el elemento nav
const open = document.getElementById("open");
const close = document.getElementById("close");
const sec_sabores = document.getElementById("sec_sabores");

// Agregamos un evento click al botón del open
open.addEventListener("click", () => {
  // Agregamos la clase 'show' para mostrar el menú
  sec_sabores.classList.remove("diplay_sabores");
});

// Agregamos un evento click al botón del close
close.addEventListener("click", () => {
  // Quitamos la clase 'show' para mostrar el menú
  sec_sabores.classList.add("diplay_sabores");
});

//mensaje de whatsapp para consulta personalizada
function mensajedewpp(){
  //seleccionamos los valores de los campos de imput
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  //remplazamos los espacios de mensaje por los caracteres %20

  const textmensaje = mensaje.replace(/\s+/g, "%20");
  
  let mensajewpp = "https://api.whatsapp.com/send?phone=+5491132882814&text=Mensaje%20de%20consulta:%0A----------------------------------%0ANombre:%20"+nombre+"%0A----------------------------------%0AMensaje:%20"+textmensaje;
  console.log(mensajewpp);
  window.open(mensajewpp, '_blank');
};