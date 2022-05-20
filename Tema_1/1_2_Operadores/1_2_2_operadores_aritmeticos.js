// OPERADORES ARITMETICOS
// 1. Suma
// 1. 1. Suma de dos números

let suma = 5 + 25;
console.log(suma); // 30

// 1. 2. Concatenación de cadenas de texto
let suma_str = "5" + "25";
console.log(suma_str); // 525

let suma_str1 = "Hola" + " " + "Mundo";
console.log(suma_str1); // Hola Mundo


// 2. Resta
// 2. 1. Resta de dos números

let resta = 25 - 5;
console.log(resta); // 20


// 3. Multiplicación
// 3. 1. Multiplicación de dos números

let multiplicacion = 5 * 25;
console.log(multiplicacion); // 125


// 4. División
// 4. 1. División de dos números

let division = 25 / 5;
console.log(division); // 5

let division1 = 25 / 0;
console.log(division1); // Infinity


// 5. Módulo
// 5. 1. Módulo de dos números

let modulo = 25 % 5;
console.log(modulo); // 0


// 6. Incremento
// 6. 1. Incremento de un número

let incremento = 5;
incremento++;
console.log(incremento); // 6

// 6. 2. Incremento de una variable antes de su uso

let x = 5;
let y = x++;
console.log(y); // 5
console.log(x); // 6

// 6. 3. Incremento de una variable después de su uso

let x1 = 5;
let y1 = ++x1;
console.log(y1); // 6
console.log(x1); // 6


// 7. Decremento
// 7. 1. Decremento de un número

let decremento = 5;
decremento--;
console.log(decremento); // 4

// 7. 2. Decremento de una variable antes de su uso

let x2 = 5;
let y2 = x2--;
console.log(y2); // 5
console.log(x2); // 4

// 7. 3. Decremento de una variable después de su uso

let x3 = 5;
let y3 = --x3;
console.log(y3); // 4
console.log(x3); // 4


// 8. Potencia
// 8. 1. Potencia de dos números

let potencia = 5 ** 2;
console.log(potencia); // 25

// 9. Negación unaria (-)
// 9. 1. Negación unaria de un número

let negacion = 5;
console.log(-negacion); // -5

let negacion1 = -5;
console.log(-negacion1); // 5

// 9. 2. Negación unaria de una variable

let negacion2 = "Hola";
console.log(-negacion2); // NaN

let negacion3 = true;
console.log(-negacion3); // -1 (porque true es 1)

let negacion4 = false;
console.log(-negacion4); // -0 (porque false es 0)


// 10. Positivo unario (+)
// 10. 1. Positivo unario de un número

let positivo = 5;
console.log(+positivo); // 5

let positivo1 = -5;
console.log(+positivo1); // -5

// 10. 2. Positivo unario de una variable
// Intenta transformar la variable en un número

let positivo2 = "Hola";
console.log(+positivo2); // NaN

let positivo3 = true;
console.log(+positivo3); // 1

let positivo4 = false;
console.log(+positivo4); // 0

let positivo5 = null;
console.log(+positivo5); // 0

let positivo6 = undefined;
console.log(+positivo6); // NaN

let positivo7 = "613";
let positivo8 = +positivo7;
console.log(+positivo8, typeof positivo8); // 613 "number"
