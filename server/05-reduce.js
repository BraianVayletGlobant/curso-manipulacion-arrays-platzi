const totals = [1,2,3,4];

// For
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log('sum:', sum); // return sum: 10

// Reduce
// 1 parametro: arrow function.
// - 1 parametro: acumulador
// - 2 parametro: item que estamos iterando
// 2 parametro: estado inicial
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta:', rta); // return rta: 10