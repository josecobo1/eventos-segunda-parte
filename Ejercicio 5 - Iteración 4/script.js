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
    console.log("Valor1: " + value_1);
    console.log("Valor2: "+ value_2);
    switch(operation) {
        case "+":
            return  eval(value_1 + value_2);
            break;
        case "-":
            return  eval(value_1 - value_2);
            break
        case "*":
            return  eval(value_1 * value_2);
            break;
        case "/":
            return  eval(value_1 / value_2);
            break;
    }

    return res;
}

// esta funcion reemplaza la coma de los decimales por un punto (.)
const replaceComa = str => {
    return str.replace(",", ".");
}


// Esta función revisa que los caracteres introducidos son numeros
// si no son numeros muestra un aviso y si son numeros pasa los valores
// y la operación seleccionada a la función reponsable de realizar el calculo
const validation = () => {
    isNaN(replaceComa(numberOne.value)) || isNaN(replaceComa(numberTwo.value)) ? alert("Uno de los valores no es un numero") : result.setAttribute("value", calculation(parseFloat(replaceComa(numberOne.value)), parseFloat(replaceComa(numberTwo.value)), document.getElementById("operations").value));
}

// EventListener que al clicar en el boton realiza los calculos
boton.addEventListener('click', validation);



