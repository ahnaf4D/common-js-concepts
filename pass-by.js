let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
 multiply(num1 , num2);
console.log(num1);
// console.log('******')

let student1 = {name : 'Sagor', partner : 'Chayti'};
let student2 = {name : 'Shafayet', partner : 'Swarna'};
function makeMovie(couple1 , couple2){
    couple1.name = 'Jhankar';
    couple1.partner = 'Karina';
    couple2.partner = 'kumu';
}
console.log(student1 , student2);
makeMovie(student1,student2);
console.log(student1,student2);


// object and array pass by reference
// primitive types are pass by value