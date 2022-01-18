const elements = ["Fire", "Air", "Water"];

// For
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);
// return: for Fire--Air--Water--

// Join
const rta = elements.join('--')
console.log('join', rta);
// return: join Fire--Air--Water

const title = 'Curso de manipulación de arrays';

// join & slpit
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log('urlFinal', urlFinal);
// return: urlFinal curso-de-manipulación-de-arrays