/**
  8 Ways to get undefined
1. variable that is not initialized give undefined.
2. Function with not return
3. Parameter that will not pass undefined.
4. if return has nothing on the right side will undefined
5. property that doesn't exists on an object will give you undefined.
6. Accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
 */
let first;
function second(a, b) {
    const total = a + b;
}
const result = second();
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
function noNegative(a , b) {
    if (a < 0 || b < a) {
        return
    }
    return a + b;
}
const total = noNegative(2,-5);
console.log(total);
// console.log(result);
// console.log(first);
const fifth = {
    id : 2,
    name : 'poncom',
    age : 40
}
// console.log(fifth.id , fifth);
const sixth = [4,89,87,56,54];
// you should not do it. Instead use splice
delete sixth[1]
// console.log(sixth[1],sixth[5] , sixth[100]);
// console.log(sixth);

const eight = undefined;
console.log(eight);
const n = null;
const data = {
    result : [],
    updated : null
}
console.log(typeof null);
