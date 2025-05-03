// N1
let name = prompt("Enter your name:");
let age = prompt("Enter your age: ");
let country = prompt("Enter your country of origin: ");
let prof = prompt("Enter your profession: ");
let sentence = `Hello, my name is ${name}. I am ${age} years old. I'm from ${country} and I am ${prof}.`;
console.log(sentence);


//N2

let x = Number(prompt("Enter a number: "));
let y = Number(prompt("Enter a number: "));
let z = Number(prompt("Enter a number: "));
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter a number: "));


console.log(x + y);
console.log(a - z);
console.log(y * b);
console.log(a / b);
console.log(x % z);
console.log(Math.pow(y, b));
console.log(Math.sqrt(a));
console.log(x + y * z);
console.log((x + y) * z);
console.log(z ** 2 + b);
console.log(a / (b + z));
console.log((x + y + z + a + b) / 5);
console.log(Math.max(x, y, z, a, b));
console.log(Math.min(x, y, z, a, b));
console.log((x - a) * (b + z));


//N3
let user1 = 'Giorgi';
let user2 = 'David'
let sent1 = prompt(`Start a conversation with ${user1}: `);
let sent2 = prompt(`${user2} started a conversation with you! What will you answer?: `);
let sent3 = prompt("Enter a message: ");
let sent4 = prompt("Enter a message: ");
let sent5 = prompt("Enter a message: ");
let sent6 = prompt("OOPS! The message limit is over!!! Enter your last message: ");
let sent7 = prompt("OOPS! The message limit is over!!! Enter your last message: ");
console.log(`${user2}-${sent1}`);
console.log(`${user1}-${sent2}`);
console.log(`${user2}-${sent3}`);
console.log(`${user1}-${sent4}`);
console.log(`${user2}-${sent5}`);
console.log(`${user1}-${sent6}`);
console.log(`${user2}-${sent7}`);

//N4

//Incrementation
 let num = 6;
 num++;
 console.log(num);

 //Decrementation
 num = 7;
 num--;
 console.log(num);

 //Postfix
 let num2 = 4;
 console.log(++num2);
console.log(num2);

//Prefix
num2 = 4;
console.log(num2++);
