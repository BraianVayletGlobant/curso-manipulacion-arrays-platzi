const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

// For
// const newArray = elements; -> Queda la referencia en memoria, por lo que elements tambien se modifica
const newArray = [...elements]; // -> usamos spread operator para soluciona la ref. en momoria.
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);
// return: for [1, 1, 2, 2, 3, 3, 4, 4] 

// Concat
const rta = elements.concat(othersElements);
console.log('concat', rta);
// return: concat [1, 1, 2, 2, 3, 3, 4, 4] 

// Spread Operator
const rta2 = [...elements, ...othersElements];
console.log('rta2', rta2);
// return: rta2 [1, 1, 2, 2, 3, 3, 4, 4]

const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);
// return: rta3 [1, 1, 2, 2, 'r', 'a', 'n', 'd', 'o', 'm'] 

// Push
elements.push(...othersElements);
console.log('elements', elements);
// return: elements [1, 1, 2, 2, 3, 3, 4, 4]
