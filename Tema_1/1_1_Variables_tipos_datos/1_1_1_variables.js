// Las variables en JS se inicializan con la palabra reservada 'var'

var variable = 5

// Para imprimir por consola usamos 'console.log()' y dentro del paréntesis se pone lo que queremos imprimir.

console.log(variable) // 5

// Podemos definir una variable en varias lineas:

var variable1
variable1 = 'Hola'

console.log(variable1) // Hola


// Una de las características de la palabra reservada 'var' es que es una variable de uso global. Es decir, tenemos acceso a ella
// desde cualquier parte del código. Pero si sólo queremos usarla en una parte del código (como una función o un bucle),
// podemos usar la palabra reservada 'let' o 'const'.

// 'const' es una variable de bloque, es decir, solo existe dentro de un bloque de código delimiado por llaves {}. Además las variables
// declaradas con 'const' no pueden ser modificadas, por eso también se les llama constantes.

const constante = 'Hola, soy una constante'

console.log(constante) // Hola, soy una constante

// esto daría un error: const constante = 'Hola, soy otra constante' // ya que no se puede modificar una constante.

// La variable 'let' es una variable de bloque, es decir, solo existe dentro de un bloque de código delimiado por llaves {}.
// Además las variables declaradas con 'let' pueden ser modificadas, por eso también se les llama variables de bloque.

function letTest() {
    let variable_let = 31;
    if (true) {
      let variable_let = 71;  // variable diferente
      console.log(variable_let);  // 71
    }
    console.log(variable_let);  // 31
}
letTest();
