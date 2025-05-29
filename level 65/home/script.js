//N1

let book = {
    title: `"Three Comrades"`,
    author: `Erich Maria Remarque`,
    releaseDate: `1936`,
    genre: `fiction`,
    price: `$36.99`
};

console.log(book.title);
console.log(book.author);
console.log(book.releaseDate);
console.log(book.genre);
console.log(book.price);

console.log(book[`title`]);
console.log(book[`author`]);
console.log(book[`releaseDate`]);
console.log(book[`genre`]);
console.log(book[`price`]);

let sentence = `${book.title} is a book by a German author - ${book.author}. It was release in ${book.releaseDate} and it is a prominent piece of ${book.genre}. It is available on our website for only ${book.price}.`;

console.log(sentence);

//N2

let student = {
    name: `Nick`,
    age: `22`,
    faculty: `Law`,
    year: `3`,
    avgScore: `97.8`
}

console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.year);
console.log(student.avgScore);

console.log(student[`name`]);
console.log(student[`age`]);
console.log(student[`faculty`]);
console.log(student[`year`]);
console.log(student[`avgScore`]);

let desc = `${student.name} is a student studying ${student.faculty} at our university. He is ${student.age} years old and is in the ${3}rd year. His average score is  ${student.avgScore}.`

console.log(desc);