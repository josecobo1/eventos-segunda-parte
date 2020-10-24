// Lista con todas las palabras posibles
const lista = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];

let lifes = 3; // Contador de vidas
let victory = false; // flag para saber si el jugaador ya ha ganado

// Selecciona un numero para escoger la palabra aleatoria de la lista
const random = () => {
    return Math.floor(Math.random() * lista.length);
}

// Falta poder leer las proiedades del bton clicado
const playGame = (event) => {

    if(victory){
        alert(`Ya has ganado, que mas quieres?`);
    }
    // Si no has ganado pero te quedan vidas y clicas en el boton correcto cambia el estado de victory y finaliza el juego
    else if (lifes >= 1 && event.target.name==="win") {
        victory = true;
        alert(`Enhorabuena has ganado!`)
    }
    else if (lifes === 1 && event.target.name!="win") {
        lifes -= 1;
        alert(`Has fallado, ya no te quedan intentos`);
    }
    // Si no has ganado y te quedan vidas pero no clicas en el boton correcto, te avisa del error y te muestra las vidas que te quedan; restamos una vida al contador
    else if (lifes >= 1 && event.target.name!="win") {
        lifes -= 1;
        alert(`Has fallado, te quedan ${lifes} intentos`);
    }
    // Si no te quedan vidas no te deja jugar mas
    else if(lifes === 0 ) {
        alert(`No te quedan vidas para jugar`);
    }

}

// Pinta el enunciado en la panrtalla
// where = id del elemento donde pintamos la pregunta (elemento padre)
// type = tag que tendra el nuevo elemento (<p>, <button>, etc)
// value = es la palabra que hay que adivinar en los botones
const newQuestion = (where, type, value) => {
    let position = document.getElementById(where); // Dónde ubicar el nuevo elemento
    let element = document.createElement(type); // TAG del nuevo elemento
    element.textContent = `¿Cual es el botón con ${value}?`; // Texto a mostrar en el nuevo elemento
    position.appendChild(element);
}

// Pinta un boton por cada elemento del array de palabras
// where = id del elemento donde pintamos la pregunta (elemento padre)
// type = tag que tendra el nuevo elemento (<p>, <button>, etc)
// value = es la palabra que hay que adivinar
// r = es la palabra que hay en cada posición del array, se compara la palabra del array con la respuesta y si son iguales se pone como atributo del boton win
const newButton = (where, type, value, r) => {
    let position = document.getElementById(where); // Dónde ubicar el nuevo elemento
    let element = document.createElement(type); // TAG del nuevo elemento
    element.textContent = "Adivina"; // Texto a mostrar en el nuevo elemento
    if(value === r){ // si la palabra del array es la misma que la palabra ganadora se ponde como atributo name="WIN" sino lose, así se controla cuando clican al boton correcto
        element.setAttribute("name", "win");
    }
    else {
        element.setAttribute("name", "lose");
    }
    element.addEventListener('click', playGame);
    position.appendChild(element); // pintamos el boton por pantalla 
}

// Función que escoje una palabra de la lista de manera 
// aleatoria, muestr un mensaje al usuario para que haga clic
// en el boton correspondiente y crea los 6 botones correspondientes
const randomWord = () => {

    let respuesta = lista[random()]; // selecciona una palabra aleatoria de la lista a partir de un numero aleatorio
    newQuestion("mensaje", "p", `¿Cual es el botón con ${respuesta}?`); // pinta la pregunta en la pabntalla


    // Bucle que para cada elemento del string crea un boton (elemento hijo)
    // y lo pinta dentro del padre con los atributos correspondientes
    lista.forEach((element) => {
        // esta funcion pinta en el elemento id "cuerpo" un boton por cada palabra del array (value) i ademas usa la respuesta para saber cual es el ganador
        newButton("cuerpo", "button", element, respuesta);
        
    });

    return;

}

// Ejecutamos la función correspondiente que escoge
// la palabra e inicia todo el proceso
randomWord();




