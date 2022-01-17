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
];

const rta = orders.map((item) => item.total);
console.log("rta", rta); 
// response: 
// rta [ 60, 120 ]
console.log("original", orders);
// response: 
// original [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Zulema', total: 120, delivered: false }
// ]

// Esto NO modifica al array orders
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
// response: 
// rta3 [
//   { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 }
// ]
console.log("original", orders);
// response:
// original [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Zulema', total: 120, delivered: false }
// ]

// Esto modifica el array orders
const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});
console.log("rta2", rta2);
// response:
// rta2 [
//   { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 }
// ]
console.log("original", orders);
// response:
// original [
//   { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 }
// ]
