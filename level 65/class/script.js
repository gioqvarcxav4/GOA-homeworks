let me = {
    name: 'Giorgi',
    lastName: 'Qvartskhava',
    age: 16,
    status: 'student',
    hobby1: 'coding',
    hobby2: 'reading',

    sentence: function(){
        console.log(`Hello, my name is ${this.name}, my lastname is ${this.lastName}. I am ${this.age} years old and I am a ${this.status}. My hobbies are ${this.hobby1} and ${this.hobby2}.`);
    }
}

console.log(me.sentence());