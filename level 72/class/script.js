let person1 = prompt('Enter the name of the first person: ');
let person2 = prompt('Enter the name of the second person: ');

if(person1 && person2){
    const lovePercent = Math.floor(Math.random() *101);
    alert(`${person1} and ${person2} are in love ${lovePercent}%`);
}
else{
    alert('Please write both names.')
}