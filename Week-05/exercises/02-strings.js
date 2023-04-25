console.log("--EXERCISE 2: STRINGS--");

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log("-Exercise 2.a:");
var str = "hola soy e";
var mayus = str.toUpperCase();
console.log(mayus);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.b:");
var str = "extrañezas";
var letters = str.substring(0, 5);
console.log(letters);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.c:");
var str = "extrañezas";
var n = 3;
var last = str.substring(str.length - n);
console.log(last);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.d:");
var str = "extrañezas";
var stringMayus = str.substring(0, 1).toUpperCase();
var stringMinus = str.substring(1, 9).toLowerCase();
var stringSet = stringMayus + stringMinus;
console.log(stringSet);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Exercise 2.e:");
var str = "extra ñeza";
var space = str.indexOf(" ");
console.log(space);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.f:");
var word = "semejanzas";
var characters = "extrañezas";
var wordModifiedMayus = word.substring(0, 1).toUpperCase();
var wordModifiedMinus = word.substring(1,9).toLowerCase();
var wordModifiedResult = wordModifiedMayus + wordModifiedMinus;
var charactersModifiedMayus = characters.substring(0, 1).toUpperCase();
var charactersModifiedMinus = characters.substring(1,9).toLowerCase();
var charactersModifiedResult = charactersModifiedMayus + charactersModifiedMinus;
var newWord = wordModifiedResult + " " + charactersModifiedResult;
console.log(newWord);