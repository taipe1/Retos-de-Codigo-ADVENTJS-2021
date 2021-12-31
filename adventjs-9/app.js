// En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅
// Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.
// Nos trae un montón de ejemplos:

const groupBy = (collection, it) => {
  // ¡No olvides compartir tu solución en redes!
  if (typeof (it) === 'function')
        return collection.reduce((result, item) => {
            const key = it(item);
            if (result[key]) result[key].push(item);
            else result[key] = [item];
            return result;
        }, {});

    return collection.reduce((result, item) => {
        const key = item[it];
        if (result[key]) result[key].push(item);
        else result[key] = [item];
        return result;
    }, {});
}

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

