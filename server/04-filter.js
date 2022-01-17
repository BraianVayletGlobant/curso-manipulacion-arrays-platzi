const words = ['spray', 'limit', 'elite', 'exuberant'];

// For
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
// response: newArray [ 'exuberant' ]
console.log('original', words );
// response: original [ 'spray', 'limit', 'elite', 'exuberant' ]

// Filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
// response: rta [ 'exuberant' ]
console.log('original', words );
// response: original [ 'spray', 'limit', 'elite', 'exuberant' ]

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);
// response: 
// rta3 [
//   { customerName: 'Santiago', total: 180, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true }
// ]

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));
// response:
// [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Nicolas', total: 2322, delivered: false }
// ]
console.log(search('hsdjkfhdsj'));
// response: []