// N1

const university = {
    name: 'Future University',
    departments: ['Law', 'Programming', 'Medicine'],
    website: 'https://FutureUni.example.com',
    ratings: {
        user1: {
            name: 'Giorgi',
            status: 'Student',
            rating: 'Amazing university! Experienced professors and the friendliest students of all!'
        },
        user2: {
            name: 'Mari',
            status: 'Student',
            rating: 'More than pleased with the place!'
        },
        user3: {
            name: 'Sandro',
            status: 'Student',
            rating: 'The dream of every student!'
        }
    }
};

console.log(university);
console.log(university.hasOwnProperty('scholarship'));
Object.freeze(university);
university.name = 'Old University';
university.studentsCount = 9999;
console.log(university.name);
console.log(university.studentsCount);
console.log(Object.isFrozen(university));


// N2

const sportsClub = {
  clubName: "Iron Falcons",
  sportType: "Basketball",
  foundedYear: 2010,
  achievements: {
    nationalLeagueChampions: "2020",
    regionalCupWinners: "2018",
    internationalTournamentFinalists: "2022"
  }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log(Object.hasOwn('sponsors'));
const newProp = {
    stadiumCapacity: 30
};
const merged = Object.assign(sportsClub, newProp)
Object.freeze(merged);
console.log(Object.isFrozen(merged));

// N3

const hotel = {
    hotelName: "Golden Horizon",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: {
            name: "Nino",
            review: "Exceptional service and clean rooms!"
        },
        guest2: {
            name: "Luka",
            review: "Great location and friendly staff."
        },
        guest3: {
            name: "Ana",
            review: "One of the best hotel experiences I've had!"
        }
    }
};

console.log(hotel);
console.log(Object.hasOwn('spa'));
const newObj = {
    roomCount: 600
};
const merged2 = Object.assign(hotel, newObj);
Object.freeze(merged2);
console.log(Object.isFrozen(merged2));