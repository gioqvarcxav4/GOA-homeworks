let grade = Number(prompt("Enter your grade: "));

if (grade > 90 && grade <= 100) {
    console.log("A");
} else if (grade > 70 && grade <= 80) {
    console.log("B");
} else if (grade > 50 && grade <= 65) {
    console.log("C");
} else if (grade > 25 && grade <= 50) {
    console.log("D");
} else {
    console.log("წადი, ისწავლე და მერე მოდი!");
}