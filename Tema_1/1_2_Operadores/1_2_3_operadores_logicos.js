// OPERADORES LÓGICOS
// 1. Operador AND (&&) - Operador lógico que devuelve true si y solo si todas las expresiones son true.

let x = 5;
let y = 10;
console.log(x > 5 && y > 5); // false
console.log(x >= 5 && y > 5); // true

// 2. Operador OR (||) - Operador lógico que devuelve true si al menos una de las expresiones es true.

let x1 = 5;
let y1 = 10;
console.log(x1 > 5 || y1 > 5); // true
console.log(x1 > 5 || y1 < 5); // false