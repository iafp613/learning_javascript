// OPERADORES RELACIONALES
// 1. Negación (!)

let booleano = true;
console.log(!booleano); // false

// 2. Doble negación (!!)

let booleano1 = true;
console.log(!!booleano1); // true

// 3. Igualdad (===) Con los tres = se puede hacer una comparación del tipo de dato y del valor

let booleano2 = true;
console.log(booleano2 === true); // true
console.log(booleano2 === false); // false

// 4. Igualdad (==) Con los dos = se puede hacer una comparación solo del valor

let booleano3 = 3;
console.log(booleano3 == "3"); // true

// 5. Desigualdad (!==) Es una desigualdad estricta (valor y tipo de dato)

let booleano4 = true;
console.log(booleano4 !== true); // false
console.log(booleano4 !== false); // true

// 6. Mayor que (>)

let booleano5 = 3;
console.log(booleano5 > 2); // true

let booleano5_1 = "a";
console.log(booleano5_1 > "b"); // false (porque a es menor que b ya que va antes en el alfabeto)

// 7. Menor que (<)

let booleano6 = 3;
console.log(booleano6 < 2); // false

let booleano6_1 = "a";
console.log(booleano6_1 < "b"); // true (porque a es menor que b ya que va antes en el alfabeto)

// 8. Mayor o igual que (>=)

let booleano7 = 3;
console.log(booleano7 >= 3); // true

// 9. Menor o igual que (<=)

let booleano8 = 3;
console.log(booleano8 <= 2); // false