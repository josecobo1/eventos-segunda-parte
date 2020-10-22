// Numero uno
let numberOne = document.getElementById("numberOne");

// Numero dos
let numberTwo = document.getElementById("numberTwo");

// Boton 
const boton = document.getElementById("boton");

// Resultado
let result = document.getElementById("result");

// A partir de los numeros introducidos y la operación seleccionada
// ejecuta el calculo correspondiente y devuelve el resultado
const calculation = (value_1, value_2, operation) => {

    switch(operation) {
        case "+":
            return  value_1 + value_2;
            break;
        case "-":
            return  value_1 - value_2;
            break
        case "*":
            return  value_1 * value_2;
            break;
        case "/":
            return  value_1 / value_2;
            break;
    }

}


// Esta función revisa que los caracteres introducidos son numeros
// si no son numeros muestra un aviso y si son numeros pasa los valores
// y la operación seleccionada a la función reponsable de realizar el calculo
const validation = () => {
    isNaN(numberOne.value) || isNaN(numberTwo.value) ? alert("Uno de los valores no es un numero") : result.setAttribute("value", calculation(parseInt(numberOne.value), parseInt(numberTwo.value), document.getElementById("operations").value));
}

// EventListener que al clicar en el boton realiza los calculos
boton.addEventListener('click', validation);



