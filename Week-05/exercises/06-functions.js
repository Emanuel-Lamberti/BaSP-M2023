console.log("--EXERCISE 6: FUNCTIONS--");

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log("-Exercise 6.a:");
function suma() {
    var num1 = prompt("Ingrese un número para el ejercicio a");
    var num2 = prompt("Ingrese otro número para el ejercicio a");
    var numInt1 = parseInt(num1);
    var numInt2 = parseInt(num2);
    var result = numInt1 + numInt2;
    return result;
}
console.log("El resultado de la suma del ejercicio a es: " + suma());

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("-Exercise 6.b:");
function sumaNueva() {
    var number1 = prompt("Ingrese un número para el ejercicio b");
    var number2 = prompt("Ingrese otro número para el ejercicio b");
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var resultB;
    if (isNaN(number1)) {
        alert("El primer numero del ejercicio b es NaN");
        resultB = number1;
    } else {        
        if (isNaN(number2)) {
            alert("El segundo numero del ejercicio b es NaN");
            resultB = number2;
        } else {
            resultB = number1 + number2;     
        }
    }
    return resultB;
}
console.log("El resultado de la suma del ejercicio b es: " + sumaNueva());

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log("-Exercise 6.c:");
function validateInteger(numberC) {
    if (numberC % 1 == 0) {
        return true;
    } else {
        return false;
    }
   //return numberC % 1 == 0;
}
let numeroEjercicioC = parseFloat( prompt("Ingrese un valor para el ejercicio C") );
//console.log("El valor puesto en prompt del C es : " + typeof numeroEjercicioC)
console.log("El numero ingresado en el ejercicio C es entero? " + validateInteger(numeroEjercicioC));

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log("-Exercise 6.d:");
function otraSuma() {
    var Number1 = prompt("Ingrese un número para el ejercicio d");
    var Number2 = prompt("Ingrese otro número para el ejercicio d");    
    Number1 = parseFloat(Number1);
    Number2 = parseFloat(Number2);
    var validacionNumber1 = validateInteger(Number1);
    if(!validacionNumber1){
        alert("El numero ingresado en primer lugar contiene decimales")
        Number1 = parseInt(Number1);
        return Number1;
    }
    var validacionNumber2 = validateInteger(Number2);
    if(!validacionNumber2){
        alert("El numero ingresado en segundo lugar contiene decimales")
        Number2 = parseInt(Number2);
        return Number2;
    }
    var resultD;
    if (isNaN(Number1)) {
        alert("El primer numero del ejercicio d es NaN");
        resultD = Number1;
    } else {        
        if (isNaN(Number2)) {
            alert("El segundo numero del ejercicio d es NaN");
            resultD = Number2;
        } else {
            resultD = Number1 + Number2;     
        }
    }
    return resultD;
}
console.log("El resultado de la suma del ejercicio d es : " + otraSuma());

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.

console.log("-Exercise 6.e:");
function function6E() {
    console.log("El resultado de la suma del ejercicio e es : " + sumaExerciseE());
}
function sumaExerciseE() {
    var NumberE1 = prompt("Ingrese un número para el ejercicio e");
    var NumberE2 = prompt("Ingrese otro número para el ejercicio e");    
    NumberE1 = parseFloat(NumberE1);
    NumberE2 = parseFloat(NumberE2);
    var validacionNumberE1 = validateInteger(NumberE1);
    if(!validacionNumberE1){
        alert("El numero ingresado en primer lugar contiene decimales")
        NumberE1 = parseInt(NumberE1);
        return NumberE1;
    }
    var validacionNumberE2 = validateInteger(NumberE2);
    if(!validacionNumberE2){
        alert("El numero ingresado en segundo lugar contiene decimales")
        NumberE2 = parseInt(NumberE2);
        return NumberE2;
    }
    var resultE;
    if (isNaN(NumberE1)) {
        alert("El primer numero del ejercicio d es NaN");
        resultE = NumberE1;
    } else {        
        if (isNaN(NumberE2)) {
            alert("El segundo numero del ejercicio d es NaN");
            resultE = NumberE2;
        } else {
            resultE = NumberE1 + NumberE2;     
        }
    }
    return resultE;
}
function6E();