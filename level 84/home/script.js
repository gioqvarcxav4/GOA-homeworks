// N1

const arrOfNums = [11, 2, 31, 67, 6, 8, 90];
let allEven = arrOfNums.every(num => num % 2 === 0);
console.log(allEven);

// N2

const arrOfStrings = ["Giorgi", 'Chairman', 'Emeperor', 'Car', 'Pineapple', 'Regent', 'Proscription'];
let hasLongString = arrOfStrings.some(str => str.length > 5);
console.log(hasLongString);

// N3

const arrOfNums2 = [1, 1453, 12, 65, 2, 5, 9087];
let doubledNum = [];
arrOfNums2.forEach(num => {
    doubledNum.push(num * 2)
});
console.log(doubledNum);

// N4

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
  { name: "Diana", age: 15 }
];

let allAdults = users.every(users => users.age > 18);
console.log(allAdults);

// N5

const products = [
    {name: 'Banana', price: 3},
    {name: 'Milk', price: 4},
    {name: 'Soda', price: 2},
    {name: 'Sugar', price: 6},
    {name: 'Buckwheat', price: 3}
];

let hasAffordableProduct = products.some(products => products.price < 20);
console.log(hasAffordableProduct);

// N6

const orders = [
  {
    orderId: 101,
    customerId: 1,
    items: [
      { title: "The Catcher in the Rye", price: 12.99, quantity: 1 },
      { title: "To Kill a Mockingbird", price: 15.49, quantity: 2 }
    ],
    shippingAddress: "123 Maple Street, Springfield",
    isDelivered: true
  },
  {
    orderId: 102,
    customerId: 2,
    items: [
      { title: "1984", price: 10.99, quantity: 1 },
      { title: "Brave New World", price: 11.5, quantity: 1 },
      { title: "Fahrenheit 451", price: 9.75, quantity: 3 }
    ],
    shippingAddress: "456 Oak Avenue, Shelbyville",
    isDelivered: false
  },
  {
    orderId: 103,
    customerId: 3,
    items: [
      { title: "Moby Dick", price: 18.25, quantity: 1 }
    ],
    shippingAddress: "789 Pine Road, Capital City",
    isDelivered: true
  },
  {
    orderId: 104,
    customerId: 1,
    items: [
      { title: "The Great Gatsby", price: 13.5, quantity: 2 },
      { title: "Crime and Punishment", price: 17.99, quantity: 1 }
    ],
    shippingAddress: "123 Maple Street, Springfield",
    isDelivered: false
  }
];

let allOrdersHaveItems = orders.every(orders => orders.items.length > 0);
console.log(allOrdersHaveItems);

let hasPendingDelivery = orders.some(orders => orders.isDelivered === false);
console.log(hasPendingDelivery);

orders.forEach(orders => {
    console.log(`Processing Order ID: ${orders.orderId}`);
    orders.items.forEach(items => {
        console.log(`${items.title}(Quantity: ${items.quantity})`);
    });
});

orders.forEach(orders => {
    let hasExpensiveBooks = orders.items.every(items => items.price > 10);
    console.log(`Order ${orders.orderId} contains only expensive books: ${hasExpensiveBooks}`);
});

orders.forEach(orders => {
    let hasAtLeastOneCopy = orders.items.some(items => items.quantity > 1);
    console.log(`Order ${orders.orderId} has multiple copies of at least one book: ${hasAtLeastOneCopy}`);
});
