# Ejercicios para practicar eventos

## Ejercicio 1. 

El objetivo de este ejercicio es practicar con el evento onclick() de un botón.

### Iteración 1: la página HTML
Crea una página HTML que tenga:
- Cabecera
- Título
- Sección con texto e imágenes

### Iteración 2: Añade 2 BOTONES en la cabecera:
- El primer botón debe poner en modo lectura la sección:
  - Pone el fondo de la sección a negro (o gris oscuro) 
  - El texto a blanco (o verde)
  - Oculta las imágenes
- El segundo botón debe poner a modo normal la sección

__Haz que sea responsive__

## Ejercicio 2 

Crea una página HTML con una lista de botones

Cada botón debe tener un valor personalizado que se mostrará en un alert al hacer click en él.

## Ejercicio 3

Sobre la página del ejercicio 2:
### Iteración 1: Crea un array de palabras:
   ```js
   const lista = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];
   ```
### Iteración 2:
Genera tantos botones (todos con el texto “adivina”) como palabras hay en el array y muéstralos en el HTML

- Genera el string con `<button>adivina</button>`
- Ten preparado un `<div></div>` donde añadir los botones e inserta el string (`innerHTML`)

### Iteración 3:
Usa la función `Math.random()` para escoger una palabra del array.
Muestra esa palabra en otro `<div></div>` al usuario: 
   Ej: ¿Cual es el botón con 'ipsum'?

### Iteración 4:
Asocia a cada botón que generaste el evento `click` que determine si el valor botón es igual al de la palabra aleatoria.

### Iteración 5:
El usuario tiene tres intentos

### Ejercicio 4:

Dado el siguiente formulario, si el dato de entrada es la palabra “Barcelona” (independientemente de si está escrito con mayúsculas o minúsculas) en el segundo cuadro de texto debe aparecer el texto: “Estás en Barcelona”. En caso contrario aparecerá el texto: “No estás en Barcelona”.

<img src="https://i.imgur.com/GmErI8X.png">

### Ejercicio 5: EJERCICIO CALCULADORA

Hacer una calculadora que haga uso de los operadores aritméticos: `+, -, *, /`, los evalúe mediante un `if` y guarde la información en una variable que será impresa en un campo de texto.

Controlar, mediante la expresión isNaN(numero) si los números introducidos son o no numéricos (mostrar un alert en caso que no lo sean)

<img src="https://i.imgur.com/h6TlBs4.png">

### Iteración 1:
Confeccionar el formulario con los atributos id para cada campo de input
_Practica css_

### Iteración 2:
Añadir el evento onclick al botón de 'Calcular' 

### Iteración 3:
Definir la función que se encargará de evaluar y realizar las operaciones matemáticas:

  - Recuperar los dos campos numéricos con `getDocumentById()`
  - Asignar el valor a una variable (parsear esta variable)
  - Recuperar el valor de la combo de selección de operaciones con `getDocumentById()` y asignarlo a una variable
  - Evaluar con `if o switch` la variable que contiene la operación para saber que operación matemática hay que realizar
  - El resultado de la operación lo trasladamos al campo del formulario utilizando también `getElementById()`

### Iteración 4:

Repetir el ejercicio de la calculadora pero utilizando la función `eval()` para realizar los cálculos en lugar de `if` 

Permitir la introducción de números decimales:
   - Utilizar campos de input de tipo texto
   - Utilizar `parseFloat()` en vez de `parseInt()`

## Ejercicio 6: Imágenes

### Iteración 1.
Crear un array con cuatro o cinco nombres de imagenes (nombreImagen.jpg)

### Iteración 2.
Al cargar la página recorrer el array y construir tantas etiquetas `<img>` como elementos tenga el array

### Iteración 3.
Una vez hemos trasladado las imagenes al documento, activar un listener para todas ellas de forma que se ejecute una función que muestre un alert con el nombre de la imagen (su atributo src)


### Iteración 4.
Si incorporamos o borramos imagenes del array inicial el ejercicio debe seguir funcionando perfectamente

## Ejercicio 7: The rocket

Vamos a hacer volar un cohete.

### Crea una imagen a partir del siguiente sprite:
![rocket](https://i.imgur.com/mQHglDY.png)

Añade un callback al evento `window.onload` que haga lo siguiente:
- Recoger la posición del sprite
- Evaluar mediante la propiedad `which` de un evento la tecla pulsada. Estableceremos un reconocimiento de las 4 flechas de dirección. El avance será de 10 px en la dirección de la flecha.
- Establecer los límites del movimiento para que no se salga de la pantalla.
- Asignar los valores `x` e `y` a las propiedades `left` y `top`, respectivamente del sprite.

