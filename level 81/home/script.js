const person = {
    name: "Giorgi",
    age: 16,
    city: "Zugdidi"
};

for(let key in person){
    console.log(key + ": " + person[key]);
};

const prices = {
  apple: 2,
  bread: 3.5,
  milk: 4
};

let total = 0;

for(let item in prices){
    total += prices[item];
};

console.log(`Total: ${total}`);

const mixedData = {
    name: "Mari",
    age: 16,
    HasaJob: false,
    height: 168,
    city: "Kutaisi"
};

for(let key in mixedData){
    if(typeof mixedData[key] === "number"){
        console.log(`${key}: ${mixedData[key]}`)
    };
};

const books = {
    "100 Years of Solitude": "Gabriel Garcia Marques",
    "Catcher in The Rye": "J.D Salinger",
    "The First Garment": "Guram Dochanashvili"
}

const bookTitles = [];

for(let titles in books){
    bookTitles.push(titles);
}

console.log(bookTitles);

const arr = [12, 33, 44, 123, 5, 22, 1];

let sum = 0;

for(let num of arr){
    sum += num;
};
console.log(`Sum: ${sum}`);

let string = "Hydroelectric Station";

for(let char of string){
    console.log(char);
};

let arr1 =["Georgia", "Power", "KoolThing", "All", "Submarine"];

for(let string of arr1){
    if(string.length > 5){
        console.log(string);
    }
};

let arrOfNums = [12, 21, 33, 44, 4, 51, 1, 13];

let squares = [];

for(let num of arrOfNums){
    squares.push(num ** 2);
};

console.log(squares);
