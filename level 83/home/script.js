const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); 

const array = ["thing", 'chair', 'Georgia', 'land', 'Hydroelectric', 'Deathconsciousness'];
let hasLongString = array.some(string => string.length > 5);
console.log(hasLongString);

const arrayNums = [11, 12, 32, 2, 4, 45, 66, 161, 162, 89];
let doubledNumbers = [];
arrayNums.forEach(num => {
    doubledNumbers.push(num * 2);
});
console.log(doubledNumbers);

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 16 },
  { name: "Diana", age: 27 }
];

let AllAdults = users.every(user => user.age >= 18);
console.log(AllAdults);

const products = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 5 },
  { name: "Notebook", price: 25 },
  { name: "Backpack", price: 50 }
];

const hasAffordableProduct = products.some(product => product.price < 20);

console.log(hasAffordableProduct); 
