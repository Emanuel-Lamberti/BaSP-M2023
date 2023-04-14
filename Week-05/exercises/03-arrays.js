console.log("--EXERCISE 3: ARRAYS--");

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log("-Exercise 3.a:");

var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthFive = array[4];
var monthEleven = array[10];
console.log("El mes 5 es: " + monthFive + ", y el mes 11 es: " + monthEleven);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("-Exercise 3.b:");
var orderMonths = array.sort();
console.log(orderMonths);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("-Exercise 3.c:");
var arrayFinal = array.push("Ricardo");
console.log("El array con el elemento agregado al inicio es: " + array);
var arrayInit = array.unshift("Samuel");
console.log("El array con el elemento agregado al final es: " + array);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("-Exercise 3.d:");
var removeFirst = array.shift();
console.log("El array con el elemento eliminado al inicio es: " + array);
var removeLast = array.pop();
console.log("El array con el elemento eliminado al final es: " + array);

// e. Invertir el orden del array (utilizar reverse).

console.log("-Exercise 3.e:");
var reverseOrder = array.reverse();
console.log("El array con el orden invertido es: " + array);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("-Exercise 3.f:");
var arrayJoin = array.join("-");
console.log(arrayJoin);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("-Exercise 3.g:");
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copyaOfArray = array.slice(4, 11);
console.log(copyaOfArray);