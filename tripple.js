// double equal check only value
// tripple equal check value also data type
// double return 1 and true are equal for type casting behavior in double equal.
// * tripple equal return true when compare between 0 and false
// double equal return true when compare between empyt string and false
// Double equal and tripple equal return false when compare objects , array [It can be empty]
// On Tripple equal if we compare reference suppose I have a object and  I save it also if into new variable it will be true
const first = '0';
const second =  false;
if (first == second) {
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}
// Type coercion


// ! Always use ===
// equal comparison does not work for non-primitive 
// TODO : How to Compare Array and Object with values
