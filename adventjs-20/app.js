

// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

const pangram = (letter) => {
 // ¡No olvides compartir tu solución en redes!
  const abc = 'abcdefghijklmnñopqrstuvwxyz';
  let auxiliar = letter.split(" ");
  let cadena = "";
  for(let i=0;i<auxiliar.length;i++)
  {
    cadena = cadena + auxiliar[i]
  }
  let minuscula = cadena.toLowerCase()
  let c = 0;
  for(let i=0;i<minuscula.length;i++)
  {
    if(abc.includes(minuscula[i])){
      c++;
    }
  }
  if(c!=0){
    console.log(true);
  }else{
    console.log(false);
  }
}

pangram('Extraño pan de col y kiwi se quemo bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡que figurota exhibes!') // true
pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false

