let formField = document.getElementById('cityField');
const boton = document.getElementById('boton');
let answerField = document.getElementById('answer');

const cityTarget = "barcelona";


const checker = () => {
    formField.value.toLowerCase() === cityTarget ? answerField.setAttribute("value", "Estas en Barelona") : answerField.setAttribute("value", "No estas en Barcelona");

    return;
}


boton.addEventListener('click', checker);



