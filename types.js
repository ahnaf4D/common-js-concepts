// Strongly typed language
// int a = 5
// string b = 'alim halim khalim'
// bool c = True
// object student = {name : 'noya daman' , id : 55}
// int[] numbers = [12,45,25,63]
// string[] friends = ['abul', 'babul']

// JavaScript is a Dynamic type language

// primitive type data
const a = 5;
const b = 'Samsu kopai na ar';
// non primitive type data
const ages = [45, 63, 96];
const d = true;
const student = { id: 25, class: 7 };
// console.log(typeof a, typeof b, typeof d , typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);

// let p = {job : 'Web Developer'};
// let q = p;
// q.job = 'Front end'
// console.log(p , q);
let p = [12,25,36,14];
let q = p;
q[0] = 255;
console.log(p , q);
q = [14,52,63];
console.log(p , q);