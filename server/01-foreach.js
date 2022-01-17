const letters = ['a','b','c'];

// For
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

// ForEach
letters.forEach(item => console.log('forEach', item))