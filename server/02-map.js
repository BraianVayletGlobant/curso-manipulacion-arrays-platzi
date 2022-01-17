const letters = ['a','b','c'];

// For
const newArrayFor = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArrayFor.push(element + '++');
}

// Map
const newArrayMap = letters.map(item => item + '++');

console.log('original', letters);
console.log('new', newArrayFor, newArrayMap);