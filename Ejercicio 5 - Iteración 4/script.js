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

    return res;
}

const replaceComa = str => {
    return str.replace(",", ".");
}


// Esta función revisa que los caracteres introducidos son numeros
// si no son numeros muestra un aviso y si son numeros pasa los valores
// y la operación seleccionada a la función reponsable de realizar el calculo
const validation = () => {
    let value_1 = replaceComa(numberOne.value);
    let value_2 = replaceComa(numberTwo.value);
    console.log("Valor1: " + isNaN(value_1));
    console.log("Valor2: " + isNaN(value_2));
    isNaN(value_1) || isNaN(value_2) ? alert("Uno de los valores no es un numero") : result.setAttribute("value", calculation(parseFloat(value_1), parseFloat(value_2), document.getElementById("operations").value));
}

// EventListener que al clicar en el boton realiza los calculos
boton.addEventListener('click', validation);



