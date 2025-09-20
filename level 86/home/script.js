let name = 'Giorgi';
let lastName = 'Kvartskhava';
let profession = 'Student';

let person = {
    name,
    lastName,
    profession,
    sentence(){
        return `My name is ${this.name} ${this.lastName} and I'm a ${this.profession}.`
    }
};
console.log(person.sentence());


let nameOfCountry = 'Georgia';
let capital = 'Tbilisi';
let president = 'dumbass';

let country = {
    nameOfCountry,
    capital,
    president,
    sentence(){
        return `The name of our country is ${this.nameOfCountry}, it's capital is ${this.capital} and our president is a ${this.president}.`
    }
};
console.log(country.sentence(0));

