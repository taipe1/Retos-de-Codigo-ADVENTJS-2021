
// Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.
// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
// Si no se encuentra, se devuelve null.

const sumPairs = (numbers, result) => {
  // ¡Y no olvides compartir tu solución en redes!
  let arreglo = []
  let bandera = false;
  for(let i=0;i<numbers.length;i++){
    for(let j=i+1; j< numbers.length;j++){
      if(numbers[j] + numbers[i] === result){
        console.log([numbers[i],numbers[j]])
        bandera = true;
        break;
      }
    }
    if(bandera){
      break;
    }
  }
  if(bandera == false){
    console.log(null);
  }
}
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

















