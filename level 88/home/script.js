const person = { name: "Alice", age: 30, city: "New York" };

const {name: userName, age, city: userCity} = person;
console.log(userName);
console.log(age);
console.log(userCity); 

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

const {math, english} = student.grades;
console.log(math);
console.log(english);

const numbers = [1, 2, 3, 4, 5];
const [firstNum, , thirdNum] = numbers;
console.log(firstNum);
console.log(thirdNum);



