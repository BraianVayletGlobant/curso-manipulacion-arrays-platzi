# Curso de Manipulación de Arrays en JavaScript

## Mis Cursos en Platzi 👉 [Certificados](https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL)

## Clases:

- Clase 1: [Tu AS bajo la manga](#Tu-AS-bajo-la-manga)
- Clase 2: [ForEach](#ForEach)
- Clase 3: [Mutable o Inmutable](#Mutable-o-Inmutable)
- Clase 4: [Map](#Map)
- Clase 5: [Map Reloaded](#Map-Reloaded)
- Clase 6: [Filter](#Filter)
- Clase 7: [Reduce](#Reduce)
- Clase 8: [Reduce Reloaded](#Reduce-Reloaded)
- Clase 9: [Some](#Some)
- Clase 10: [Every](#Every)
- Clase 11: [Find y FindIndex](#Find_y_FindIndex)
- Clase 12: [Includes](#Includes)
- Clase 13: [Join](#Join)
- Clase 14: [Concat](#Concat)
- Clase 15: [Flat](#Flat)
- Clase 16: [FlatMap](#FlatMap)
- Clase 17: [Mutable functions](#Mutable-functions)
- Clase 18: [Sort](#Sort)

# Tu AS bajo la manga

Preparamos entorno de trabajo.

> Links:
>
> - Slides del curso [aqui]()

# ForEach

Vemos For Vs. ForEach

## Ejemplo Clase:

```javascript
const letters = ["a", "b", "c"];

// For
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}
// result:
// for a
// for b
// for c

// ForEach
letters.forEach((item) => console.log("forEach", item));
// result:
// forEach a
// forEach b
// forEach c
```

# Mutable o Inmutable

#### En JS los datos asignados a una variable pueden ser de dos tipos:

- **Primitive type** (undefined, null, boolean, number, string, symbol)
- **Reference type** (objects, arrays , functions).

Una de las diferencia entre estas dos, está en la forma como se almacenan estos datos en memoria, para ser más claro un ejemplo.

```javascript
let name = "Javier";
let name2 = name;
let person = { name: "javier" };
let person2 = person;
```

Cuando creamos **_name_** js _crea un espacio en memoria_ y guarda su valor, ahora cuando creamos **_name2_** js continúa y crea un nuevo espacio en memoria y asigna el mismo valor de la varible name, de esta forma el valor de la variable name2 es totalmente _independiente_ a name.

Ahora si creamos la variable **_person_** como un objeto que contiene un name, y si luego creamos otra variable **_person2_** y le asignamos el mismo objeto person, aquí es donde la cosa cambia con respectos a los datos primitivos, en este caso js guardara el objeto person2 como una **_referencia_** o apuntador al objeto person, _es decir que ambas variables apuntan al mismo objeto en memoria_

#### Ahora si entendamos Mutable o Inmutable.

- **Mutable**: es algo que se puede cambiar o agregar.
- **Inmutable**: es algo que **NO** se puede cambiar ni agregar.

Los valores **primitivos** en js son algo agregado donde _solo se pueden reasignar_ y por lo tanto, todos estos valores son **inmutables**. Entendamos con un ejemplo.

EJ:

```javascript
let name = "Javier";
let name2 = name;
console.log(name); //javier
console.log(name2); //javier
name2 = "platzi";
console.log(name); //javier
console.log(name2); //platzi''
```

Si imprimimos name y name2, ambas nos dan javier, pero si reasignamos un valor de name2 y volvemos a imprimir ocurre que solo cambia el valor de name2, lo que demuestra que js guardas estás variables de forma separada, aun cuando el valor de name2 se copio de name. Por eso los valores primitivos son inmutables.

ahora hagamos lo mismo con los objetos.

Ej:

```javascript
let person = { name: "javier" };
let person2 = person;
console.log(person); //{name: 'javier'}
console.log(person2); //{name: 'javier'}
person2.name = "platzi";
console.log(person); //{name: 'platzi'}
console.log(person2); //{name: 'platzi'}
```

Al inicio obtenemos las mismas propiedades, ahora cambiemos una de las valores de las propiedades y veremos que js cambio el valor tanto de person y peron2, esto debido a que person2 se creo haciendo referencia al objeto person, con reference type js crea una referencia al mismo objeto y el objeto permanece mutable.

ya que el mismo objeto es mutable se puede cambiar o se pueden agregar nuevas propiedades al mismo objeto.

En es6 se creo un operador de propagación que permirte copias un objeto de forma segura sin hacer referencia al mismo objeto y sería así.

```javascript
let person2 = { ...person };
```

## Ejemplo Clase:

> Links:
>
> - [Estructuras de datos inmutables](https://platzi.com/tutoriales/1642-javascript-profesional/4559-estructuras-de-datos-inmutables/)

# Map

#### ¿Qué hace el .map()? TRANSFORMAR.

**.map()** es **INMUTABLE** por lo tanto no modifica el array original, sino que crea uno nuevo con la **“transformación”** aplicada.

Además, mantienes el mismo **length** que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.

#### Diferencia práctica entre .forEach()y .map()

Estos métodos son muy parecidos, ya que ejecutan una función sobre cada elemento de un array, pero hay una diferencia fundamental: **.forEach()** no crea o devuelve, por defecto, un nuevo array con los elementos modificados, en cambio **.map()** si.

## Ejemplo Clase:

```javascript
const letters = ["a", "b", "c"];

// For
const newArrayFor = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArrayFor.push(element + "++");
}

// Map
const newArrayMap = letters.map((item) => item + "++");

console.log("original", letters);
// return original [ 'a', 'b', 'c' ]
console.log("new", newArrayFor, newArrayMap);
// return new [ 'a++', 'b++', 'c++' ] [ 'a++', 'b++', 'c++' ]
```

# Map Reloaded

Usos comunes o clásicos de **map()** sobre los arrays:

- **Limpiar datos**, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
- **Añadir un nuevo elemento**, modificar agregando un nuevo dato al objeto pero sin modificar el array original.

Tener en cuenta que cuando trabajamos con `objetos` y `map()` y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el map(). Esto provoca que como estamos modificando la referencia en memoria, el array original también sea modificado. Entonces en conclusión, por más que map() sea inmutable en este punto estamos copiando la referencia en memoria y por eso hace el cambio en el original.

```javascript
// Estamos retornando el objeto
// por ende se copia la refencia en memoria
const rta = orders.map((item) => {
  item.tax = 0.19;
  return item;
});
```

Para evitarlo, y poder realizar una copia y evitar la referencia en memoria, utilizamos el spread operator de ES6 (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.

```javascript
const rta = orders.map((item) => {
  // retornamos un nuevo objeto
  //pero evitamos hacer ref. en memoria
  return {
    ...item,
    tax: 0.19,
  };
});
```

## Ejemplo Clase:

```javascript
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
  },
  {
    customerName: "Zulema",
    total: 120,
  },
];

const rta = orders.map((item) => item.total);
console.log("rta", rta);
// response:
// rta [ 60, 120 ]
console.log("original", orders);
// response:
// original [
//   { customerName: 'Nicolas', total: 60 },
//   { customerName: 'Zulema', total: 120 }
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
//   { customerName: 'Nicolas', total: 60, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, tax: 0.19 }
// ]
console.log("original", orders);
// response:
// original [
//   { customerName: 'Nicolas', total: 60 },
//   { customerName: 'Zulema', total: 120 }
// ]

// Esto modifica el array orders
const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});
console.log("rta2", rta2);
// response:
// rta2 [
//   { customerName: 'Nicolas', total: 60, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, tax: 0.19 }
// ]
console.log("original", orders);
// response:
// original [
//   { customerName: 'Nicolas', total: 60, tax: 0.19 },
//   { customerName: 'Zulema', total: 120, tax: 0.19 }
// ]
```

> Links"
>
> [Lectura recomendada: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

# Filter

**filter()** lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.

Por lo tanto **filter() es inmutable** y el nuevo array creado solamente puede contener:

- cero coincidencias
- todas coincidencias
- algunas coincidencias

Pero nunca más coincidencias que el tamaño del array original.

> _offtopic: el método **includes()** determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda._

## Ejemplo Clase:

```javascript
const words = ["spray", "limit", "elite", "exuberant"];

// For
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log("newArray", newArray);
// response: newArray [ 'exuberant' ]
console.log("original", words);
// response: original [ 'spray', 'limit', 'elite', 'exuberant' ]

// Filter
const rta = words.filter((item) => item.length >= 6);
console.log("rta", rta);
// response: rta [ 'exuberant' ]
console.log("original", words);
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

const rta3 = orders.filter((item) => item.delivered && item.total >= 100);
console.log("rta3", rta3);
// response:
// rta3 [
//   { customerName: 'Santiago', total: 180, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true }
// ]

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Nico"));
// response:
// [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Nicolas', total: 2322, delivered: false }
// ]
console.log(search("hsdjkfhdsj"));
// response: []
```

> Links:
>
> - [Lectura recomendada: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

# Reduce

El método REDUCE, efectivamente hace eso. Solo reduce a **un solo valor** y no devuelve otro array, simplemente un valor.

**Se utiliza muchísimo para hacer cálculos a partir de la información de un array.**

En su composición, a primeras, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador.

Ej:

```javascript
const totals = [1, 2, 3, 4];
// primer argumento de la f() es el acumulador
// segundo argumento de la f() es el elemento
// segundo parámetro de la f() es el estado inicial del acumulador
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log(rta);
// return: 10
```

Así funciona la iteración del reduce() por dentro:

```cmd
(i): iteration
S: Sum
I: Item
R: Return

(i) | S | I | R
(1) | 0 | 1 | return: 1
(2) | 1 | 2 | return: 3
(3) | 3 | 3 | return: 6
(4) | 6 | 4 | return: 10
```

## Ejemplo Clase:

```javascript
const totals = [1, 2, 3, 4];

// For
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log("sum:", sum); // return sum: 10

// Reduce
// 1 parametro: arrow function.
// - 1 parametro: acumulador
// - 2 parametro: item que estamos iterando
// 2 parametro: estado inicial
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("rta:", rta); // return rta: 10
```

> Links
>
> [Lectura recomendada: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

# Reduce Reloaded

## Ejemplo Clase:

```javascript
const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log("rta: ", rta);
// return: rta:  { '1': 1, '2': 1, '3': 2 }

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log("rta1: ", rta1);
// return: rta1: { low: 2, medium: 2, hight: 2 }
```

# Some

Este método nos devuelve **true** o **false** **sí al menos 1 elemento** de nuestro array cumple con la condición.

## Ejemplo Clase:

```javascript
const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log("rta:", rta);
// return rta: true

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2:", rta2);
// return: rta2: true

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

const rta3 = orders.some((item) => item.delivered);
console.log("rta3:", rta3);
// return: rta3: true

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

console.log("isOverlap:", isOverlap(newAppointment));
// return: isOverlap: false
```

> Links:
>
> - [Lectura recomendada: some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

# Every

Este método es el contrario a **_some()_**, devuelve true o false sí **TODOS** los elementos del array cumplen la condición.

## Ejemplo Clase:

```javascript
const numbers = [1, 30, 39, 29, 10, 13];

// For
let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}
console.log("for:", rta);
// return: for: true

// Every
const rta2 = numbers.every((item) => item <= 40);
console.log("every:", rta2);
// return: every: true
```

> Links:
>
> - [Lectura recomendada: every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

# Find y FindIndex

El método **find()** devuelve el **primer elemento** del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos. A diferencia de filter() que retornaba un array find() retorna el elemento.

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// expected output: 12
```

En cambio el método **findIndex()** es una variante que te devuelve el **index o posición** donde esta ese primer elemento que encuentra con las características de la condición dada. **De no encontrar ninguno devuelve -1** como respuesta del return del método.

```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

## Ejemplo Clase:

```javascript
const numbers = [1, 30, 49, 29, 10, 13];

// For
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log("for:", rta);
// return: for: undefined

const rta2 = numbers.find((item) => item === 302323);
console.log("find:", rta2);
// return: find: undefined

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === "🍔");
console.log("find", rta3);
// return: find: { name: 'Burger', price: 23, id: '🍔' }

const rta4 = products.findIndex((item) => item.id === "🍔");
console.log("findIndex", rta4);
// return: findIndex: 1
```

> Links:
>
> - [Lectura recomendada: find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
> - [Lectura recomendada: findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

# Includes

El método **includes()** determina si una array incluye un determinado elemento, devuelve true o false según corresponda.

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false
```

También posee un segundo parámetro que es el fromIndex, que es la posición donde comenzar a buscar el valor en el array.

```javascript
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

Este **fromIndex** sí es igual o mayor que el tamaño del array, devuelve false automaticamente sin buscar en el vector. Sí el fromIndex es negativo busca en todo el array. Y para los casos 0, -0, +0 lo toma como cero y también lee todo el array.

## Ejemplo Clase:

```javascript
const pets = ["cat", "dog", "bat"];

// For
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}
console.log("for:", includeInArray);
// return: for: true

// Includes
const rta = pets.includes("dog");
console.log("includes", rta);
// return: includes: true
```

> Links:
>
> - [Lectura recomendada: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

# Join

El método **join()** une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

```javascript
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// expected output "Fire,Air,Water"
console.log(elements.join(""));
// expected output "FireAirWater"
console.log(elements.join("-"));
// expected output "Fire-Air-Water"
```

Y el método **split()** divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas

## Ejemplo Clase:

```javascript
const elements = ["Fire", "Air", "Water"];

// For
let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log("for", rtaFinal);
// return: for Fire--Air--Water--

// Join
const rta = elements.join("--");
console.log("join", rta);
// return: join Fire--Air--Water

const title = "Curso de manipulación de arrays";

// join & slpit
const urlFinal = title.split(" ").join("-").toLowerCase();
console.log("urlFinal", urlFinal);
// return: urlFinal curso-de-manipulación-de-arrays
```

> Links:
>
> - [Lectura recomendada: join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
> - [Lectura recomendada: split](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)

# Concat

Metodo que combina dos arrays en uno. Concat en inmutable, por lo que no modifica al array original.

Recordar que al ser inmutable, los arrays (tanto el nuevo como el viejo) quedaran referenciados por memoria, por lo tanto sí modificamos alguno de los dos, los cambios se verán reflejados en ambos.

```javascript
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## Ejemplo Clase:

```javascript
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// For
// const newArray = elements; -> Queda la referencia en memoria, por lo que elements tambien se modifica
const newArray = [...elements]; // -> usamos spread operator para soluciona la ref. en momoria.
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}
console.log("for", newArray);
// return: for [1, 1, 2, 2, 3, 3, 4, 4]

// Concat
const rta = elements.concat(othersElements);
console.log("concat", rta);
// return: concat [1, 1, 2, 2, 3, 3, 4, 4]

// Spread Operator
const rta2 = [...elements, ...othersElements];
console.log("rta2", rta2);
// return: rta2 [1, 1, 2, 2, 3, 3, 4, 4]

const rta3 = [...elements, ..."random"];
console.log("rta3", rta3);
// return: rta3 [1, 1, 2, 2, 'r', 'a', 'n', 'd', 'o', 'm']

// Push
elements.push(...othersElements);
console.log("elements", elements);
// return: elements [1, 1, 2, 2, 3, 3, 4, 4]
```

> Links:
>
> - [Lectura recomendada: concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
> - [Lectura recomendada: sintaxis spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

# Flat

## Ejemplo Clase:

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

// For
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log("for", newArray);
// return: for [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]

// Flat
const rta = matriz.flat(3);
console.log("flat", rta);
// return: flat [ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]
```

> Links:
>
> - [Lectura recomendada: flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

# FlatMap

**flatMap()** realiza un map y luego el flat. Tiene como limitacion 1 solo nivel.

## Ejemplo Clase:

```javascript
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map((user) => user.attributes).flat();
console.log("map-flat", rta);
// return: map-flat [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
const rta2 = users.flatMap((user) => user.attributes);
console.log("rta2", rta2);
// return: rta2 [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta3 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
console.log(rta3);
// returnL rta3 [
//  2021-02-01T18:00:00.000Z,
//  2021-02-01T20:00:00.000Z,
//  2021-02-01T15:00:00.000Z,
//  2021-02-01T12:00:00.000Z
// ]
```

> Links:
>
> - [Lectura recomendada: flatmap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

# Mutable functions

## Ejemplo Clase:

```javascript
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
const productIndex = products.findIndex((item) => item.id === "🍔");

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
    description: "delicioso",
  },
};

const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);
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
```

> Links:
>
> - [Lectura recomendada: splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
> - [Lectura recomendada: push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

# Sort

**Sort()** es un metodo mutable que sirve para ordenar

## Ejemplo Clase:

```javascript
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// return: [ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);
// return:  [ 100000, 30, 21, 4, 1 ]

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort((a, b) => a.localeCompare(b));
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
orders.sort((a, b) => b.total - a.total);
console.log(orders);
// return: [
//   { customerName: 'Santiago', total: 1840, delivered: true },
//   { customerName: 'Nicolas', total: 600, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true },
//   { customerName: 'Zulema', total: 120, delivered: false }
// ]
```

> Links:
>
> - [Lectura recomendada: sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
