print5();
console.log(print10)
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(`Outside ${i}`);
function print5() {
    console.log('inside prints', 5);
}
var print10 = function(){
    console.log('Inside prints', 10);
}