/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   miString = string;
   return miString;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   sum = x + y;
   return sum;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   resultado = x - y;
   return resultado;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   resultado = x / y;
   return resultado;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   resultado = x * y;
   return resultado;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resultado = x % y;
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
