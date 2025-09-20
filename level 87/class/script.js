const lett = ['G', 'i', 'o', 'r', 'g', 'i'];

const name = lett.reduce((acc, letter) => {
    return acc + letter;
}, '');

console.log(name);