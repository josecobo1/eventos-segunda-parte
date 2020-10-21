const boton1 = document.getElementById("boton_1");
const boton2 = document.getElementById("boton_2");
const boton3 = document.getElementById("boton_3");
const boton4 = document.getElementById("boton_4");
const boton5 = document.getElementById("boton_5");


const message = id => {
    alert(id);
}

//boton1.addEventListener('click', message(boton1.textContent));

boton_1.addEventListener('click', (event) => {

    message(event.target.textContent);

});

boton_2.addEventListener('click', (event) => {

    message(event.target.textContent);

});

boton_3.addEventListener('click', (event) => {

    message(event.target.textContent);

});

boton_4.addEventListener('click', (event) => {

    message(event.target.textContent);

});

boton_5.addEventListener('click', (event) => {

    message(event.target.textContent);

});