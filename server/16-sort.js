const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// return: [ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
// return:  [ 100000, 30, 21, 4, 1 ]

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
// return: [
//   'adieu',
//   'banana',
//   'café',
//   'communiqué',
//   'éclair',
//   'premier',
//   'réservé'
// ]

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);
  console.log(orders);
  // return: [
//   { customerName: 'Santiago', total: 1840, delivered: true },
//   { customerName: 'Nicolas', total: 600, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true },
//   { customerName: 'Zulema', total: 120, delivered: false }
// ]
