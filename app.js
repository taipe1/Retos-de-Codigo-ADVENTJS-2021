// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:


//usaremos recursividad

const contains = (store, product) => {
  // ¡Y no olvides compartir tu solución en redes!
  if(store === product) return true;
  if (!(store && typeof store == 'object' && Object.values(store).length) || Array.isArray(store)) return false;

  const valor = Object.values(store);
  for (let i = 0; i < valor.length; i++){
    if(contains(valor[i], product)){
      return true;
    }
  }
  return false;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
console.log(contains(almacen, 'camiseta')) // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
console.log(contains(otroAlmacen, 'gameboy')) // false








