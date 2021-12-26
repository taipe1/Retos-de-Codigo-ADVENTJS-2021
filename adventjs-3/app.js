// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...


const isValid = (letter) => {
  // ¡No dejes que el Grinch gane!
  let clave = ['{','}','[',']'];
  const convertir = letter.split(" ").join("").split("")
  let contador = 0;
  for(let i = 0 ;i < convertir.length; i++){
    if(convertir[i] == '(' && convertir[i+1] !== ')'){
      contador++;
    }else if(convertir[i] == ')'){
      contador--;
    }else if(clave.includes(convertir[i])){
      contador = 0;
    }
  }
  if(contador == 0){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
isValid("bici coche (balón) bici coche peluche") // -> ✅
isValid("(muñeca) consola bici") // ✅
isValid("bici coche (balón bici coche") // -> ❌
isValid("peluche (bici [coche) bici coche balón") // -> ❌
isValid("(peluche {) bici") // -> ❌
isValid("() bici") // ❌
      


















