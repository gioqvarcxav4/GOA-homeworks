// N1

const users = [
  { name: "Alice Johnson", email: "alice.johnson@example.com" },
  { name: "Bob Smith", email: "bob.smith@example.com" },
  { name: "Charlie Brown", email: "charlie.brown@example.com" },
  { name: "Diana Evans", email: "diana.evans@example.com" },
  { name: "Ethan Clark", email: "ethan.clark@example.com" }
];

const formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);

// N2

const arrOfNums = [11, 22, 1, 3, 8945, 90, 81, 4, 55, 15];

const arrOfEvenNums = arrOfNums.filter(num => num % 2 === 0);

const squaredEvens = arrOfEvenNums.map(num => num ** 2);
console.log(squaredEvens);

// N3

const items = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 15 },
  { name: "Orange", price: 0.7, quantity: 8 },
  { name: "Milk", price: 1.2, quantity: 5 },
  { name: "Bread", price: 1.5, quantity: 7 }
];

const totalValue = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(totalValue);

// N4

const reverseWords = ['Giorgi', 'am', 'I'];

const constructSentence = reverseWords.reduceRight((acc, str) => acc + str + " ", '').trim() + '.';
console.log(constructSentence);

// N5

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    grades: {
      Math: [90, 85, 92],
      Science: [88, 90, 91],
      History: [75, 80, 78]
    },
    attendance: [true, true, false, true, true],
    extracurricular: ["Chess Club", "Soccer"]
  },
  {
    id: 2,
    name: "Bob Smith",
    grades: {
      Math: [70, 75, 80],
      Science: [65, 70, 72],
      History: [85, 88, 90]
    },
    attendance: [true, false, true, true, false],
    extracurricular: ["Debate Team", "Basketball"]
  },
  {
    id: 3,
    name: "Charlie Brown",
    grades: {
      Math: [95, 93, 97],
      Science: [92, 94, 96],
      History: [88, 90, 85]
    },
    attendance: [true, true, true, true, true],
    extracurricular: ["Music Club", "Art Club"]
  },
  {
    id: 4,
    name: "Diana Evans",
    grades: {
      Math: [60, 65, 70],
      Science: [75, 80, 78],
      History: [82, 85, 80]
    },
    attendance: [true, false, false, true, true],
    extracurricular: ["Volunteering", "Soccer"]
  },
  {
    id: 5,
    name: "Ethan Clark",
    grades: {
      Math: [85, 88, 90],
      Science: [67, 60, 69],
      History: [90, 92, 91]
    },
    attendance: [true, true, true, false, true],
    extracurricular: ["Drama Club", "Swimming"]
  }
];

students.forEach(students => {
  console.log(`Hello ${students.name}`)
});

const studentNames = students.map(student => student.name);
console.log(studentNames);

const studentAverages = students.map(student => {
  const allGrades = Object.values(student.grades).flat();
  const total = allGrades.reduce((acc, grade) => acc + grade, 0);
  const average = total / allGrades.length;

  return {
    name: student.name,
    AverageGrade: average
  }
});

console.log(studentAverages);

const highPerformingStudents = studentAverages.filter(student => student.AverageGrade > 85);
console.log(highPerformingStudents);

const strugglingStudents = students.filter(student => Object.values(student.grades).some(subjectGrade => subjectGrade.every(score => score < 70)));

console.log(strugglingStudents);

const totalExtracur = students.reduce((acc, student) => acc + student.extracurricular.length, 0);
console.log(totalExtracur);




