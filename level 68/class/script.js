const academy = {
  name: "Future Coders Academy",
  courses: ["JavaScript", "Python", "HTML/CSS"],
  socialLink: "https://futurecoders.example.com",
  reviews: {
    user1: {
      name: "Natia",
      status: "student",
      review: "Truly a great experience!"
    },
    user2: {
      name: "Giorgi",
      status: "student",
      review: "Very interesting and inclusive lessons!"
    },
    user3: {
      name: "Lika",
      status: "student",
      review: "I'm more than pleased with my results"
    }
  }
};

console.log(Object.entries(academy));
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(Object.hasOwn(academy, "name"));
const newObject = {
    member: 120,
};
const merged = Object.assign(academy, newObject)
Object.freeze(merged)
console.log(Object.isFrozen(merged));
