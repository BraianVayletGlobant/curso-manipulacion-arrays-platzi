const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
// return: products [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   { title: 'Hot cakes', price: 121, id: '🥞' }
// ]
console.log("myProducts", myProducts);
// return: myProducts []
console.log("-".repeat(10));
// return: - ----------


// Ejemplo realizamos busqueda.
const productIndex = products.findIndex(item => item.id === '🍔');

if (productIndex !== -1) {
    myProducts.push(products[productIndex]); // metodo mutable
    products.splice(productIndex, 1); // metodo mutable
}
console.log("products", products);
// return: products [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Hot cakes', price: 121, id: '🥞' }
// ]
console.log("myProducts", myProducts);
// return: myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10));
// return: - ----------


// Ejemplo realizamos update.
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

  const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
// > --- Metodo mutable ---
// productsV2[productIndexV2] = update.changes 
// console.log(productsV2);
// return: [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   { price: 200, description: 'delicioso' }
// ]

// > --- Metodo inmutable ---
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);
// return: [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   {
//     title: 'Hot cakes',
//     price: 200,
//     id: '🥞',
//     description: 'delicioso'
//   }
// ]