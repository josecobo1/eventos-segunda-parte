// Numero uno
let numberOne = document.getElementById("numberOne");

// Numero dos
let numberTwo = document.getElementById("numberTwo");

// Boton 
const boton = document.getElementById("boton");

// Resultado
let result = document.getElementById("result");

const checker = () => {
    formField.value.toLowerCase() === cityTarget ? answerField.setAttribute("value", "Estas en Barelona") : answerField.setAttribute("value", "No estas en Barcelona");

    return;
}

const operations = () => {
   // op1 = parseInt(numberOne.value);
   // op2 = parseInt(numberTwo.value);
    
    let operation;

    if(isNaN(numberOne.value) && isNaN(numberTwo.value)){
        alert("Uno de los valores no es un numero");
        //op1 = parseInt(numberOne.value);
        //op2 = parseInt(numberTwo.value);
        }
    else {
        op1 = parseInt(numberOne.value);
        op2 = parseInt(numberTwo.value);

        // Selector de operacions
        const seletOperator = document.getElementById("operations").value;

        console.log("dentro");
        console.log(seletOperator);
        switch(seletOperator) {
            case "+":
                operation = op1 + op2;
                break;
            case "-":
                operation = op1 - op2;
                break
            case "*":
                operation = op1 * op2;
                break;
            case "/":
                operation = op1 / op2;
                break;
        }

        console.log(operation);
        result.setAttribute("value", operation);

    }
    //result.setAttribute("value", r);
    //result.setAttribute("value", r);
    

}


boton.addEventListener('click', operations);



