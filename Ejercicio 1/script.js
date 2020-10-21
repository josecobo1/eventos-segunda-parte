const lectura = document.getElementById("lectura"); // boton modo lectura
const normal = document.getElementById("normal"); // boton modo normal
const body = document.getElementsByTagName("body")[0]; // elemenot body
const image = document.getElementsByTagName("img")[0]; // elemento img

// Función que añade las classes lectura y img_hide al 
//texto y la imagen para cambiar colores y esconder imagen
const setLectura = () => {
   body.classList.add("lectura");
   image.classList.add("img_hide");
}

// Función que elimina las classes lectura y hide para
// volver al estilo normal
const setNormal = () => {
    body.classList.remove("lectura");
    image.classList.remove("img_hide");
}

// Listeners para ejecutar las funciones modo lectura y normal
// al clicar en el boton correspondiente
lectura.addEventListener('click', setLectura);
normal.addEventListener('click', setNormal);
