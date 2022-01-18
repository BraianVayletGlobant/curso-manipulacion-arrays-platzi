const numbers = [1,30,39,29,10,13];

// For
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for:', rta);
// return: for: true

// Every
const rta2 = numbers.every(item => item <= 40)
console.log('every:', rta2);
// return: every: true


