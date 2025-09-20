class Movie {
    constructor(name, releaseDate, genre){
        this.name = name;
        this.releaseDate = releaseDate;
        this.genre = genre;
    }

    introduce() {
        return `This is a movie called "${this.name}", it was released in ${this.releaseDate} and it's a ${this.genre}`
    }
};

const movie1 = new Movie('The Godfather', 1972, 'Drama');

console.log(movie1.introduce());




class Operative {
    constructor1(name, rank){
        this.name = name;
        this.rank = rank;
    }

    getInfo(){
        `Name: ${this.name},
         Rank: ${this.rank}`
    }

    static compareRanks(op1, op2) {
        if (op1.rank > op2.rank) {
            return `${op1.name} has a higher status`;
        } else if (op1.rank < op2.rank) {
            return `${op2.name} has a higher status`;
        } else {
            return `${op1.name} and ${op2.name} have an equal status`;
        }
    }
};

class EliteOperative extends Operative {
    constructor(name, rank, specialty) {
        super(name, rank);
        this.specialty = specialty;
    }
};

