//N1

function person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
};

let p1 = new person(`Giorgi`, 16, `student`);

console.log(`Hi, I am ${p1.name}, I am ${p1.age} years old and I am a ${p1.profession}`);

//N2

function book(title, author, releaseDate){
    this.title = title;
    this.author = author;
    this.releaseDate = releaseDate;

    this.getSummary = function(){
        return `${this.title} is a book written by ${this.author}, released in ${this.releaseDate}`
    };
};

const book1 = new book(`"Three Comrades"`, `Erich Maria Remarque`, 1936);
const book2 = new book(`"1984"`, `George Orwell`, 1937);
const book3 = new book(`"The Hobbit"`, `J.R.R Tolkien`, 1925);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

//N3

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword){
        newPassword = prompt(`Enter a new password`);
        this.password = newPassword;
        return this.password
    };

    this.getDetails = function(){
        return this.username, this.email;
    };
};

const user1 = new User(`GiorgiOrgi123`, `giogio@gmail.com`, `blablabink123432`);

console.log(user1.getDetails());
console.log(user1.password);
console.log(user1.changePassword());



