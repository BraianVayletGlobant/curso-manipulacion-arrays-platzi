# Curso de Manipulación de Arrays en JavaScript

- Clase 1: [Tu AS bajo la manga](#Tu-AS-bajo-la-manga)
- Clase 2: [ForEach](#ForEach)
- Clase 3: [Mutable o Inmutable](#Mutable-o-Inmutable)
- Clase 4: [Map](#Map)
- Clase 5: [Map Reloaded](#Map-Reloaded)
- Clase 6: [Filter](#Filter)
- Clase 7: [Reduce](#Reduce)
- Clase 8: [](#)
- Clase 9: [](#)
- Clase 10: [](#)
- Clase 11: [](#)
- Clase 12: [](#)
- Clase 13: [](#)
- Clase 14: [](#)
- Clase 15: [](#)
- Clase 16: [](#)
- Clase 17: [](#)

# Tu AS bajo la manga

Preparamos entorno de trabajo.

> Links:
>
> Slides del curso [aqui]()

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
> [Estructuras de datos inmutables](https://platzi.com/tutoriales/1642-javascript-profesional/4559-estructuras-de-datos-inmutables/)

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
> [Lectura recomendada: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

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
i: iteration
S: Sum
I: Item
R: Return

i | S | I | R
1 | 0 | 1 | 1
2 | 1 | 2 | 3
3 | 3 | 3 | 6
4 | 6 | 4 | 10
```

## Ejemplo Clase:

```javascript

```

> Links
>
> [Lectura recomendada: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
