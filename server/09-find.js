const numbers = [1,30,49,29,10,13];

// For
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for:', rta);
// return: for: undefined

const rta2 = numbers.find(item => item === 302323)
console.log('find:', rta2);
// return: find: undefined

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
// return: find: { name: 'Burger', price: 23, id: '🍔' }

const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);
// return: findIndex: 1