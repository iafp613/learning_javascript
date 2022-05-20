// Existen, principalmente, cuatro tipos de datos en JavaScript:

// 1. Números. Los números son valores que pueden ser enteros (números enteros) o decimales (números con decimales).
// Con el operador typeof podemos saber el tipo de datos de una variable.
let numero = 10;
console.log(typeof numero, numero); // number 10

let numero1 = 10.5;
console.log(typeof numero1, numero1); // number 10.5

let numero2 = -10;
console.log(typeof numero2, numero2); // number -10

let numero3 = -10.5;
console.log(typeof numero3, numero3); // number -10.5


// 2. Cadenas de texto. Las cadenas de texto son una secuencia de caracteres.
// Las cadenas de texto se escriben entre comillas dobles, simples o backticks.
let cadena = "Hola dobles";
console.log(typeof cadena, cadena); // string "Hola dobles"

let cadena2 = 'Hola simples';
console.log(typeof cadena2, cadena2); // string Hola simples

let cadena3 = `Hola backticks`;
console.log(typeof cadena3, cadena3); // string Hola backticks


// 3. Booleanos. Los booleanos son valores lógicos (true o false).
// Los booleanos se escriben con la palabra reservada "true" o "false".
let booleano = true;
console.log(typeof booleano, booleano); // boolean true

let booleano1 = false;
console.log(typeof booleano1, booleano1); // boolean false


// 4. Undefined. El tipo undefined es un valor que no se ha definido.
// Este tipo de datos es utilizado para declarar variables sin inicializar:
let dato_undefined;
console.log(typeof dato_undefined, dato_undefined); // undefined undefined