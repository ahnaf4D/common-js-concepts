/**
 Truthy Rules
 1. If I write directly false
 2. Any Number positive or negative whatever is truthy other than 0
 3. any String is truthy other than empty string
 4. '0' , 'false'
 5. any object also empty object {}
 6. any array also empty array []
 ================================================
 Falsy  Rules
 ===========
 1. If I write directly
 2. If the value is 0
 3. empty string
 4. Undefined
 5. null value
 */
let x = [] ;
console.log(x);
if(x){
    console.log('value of x is Truthy');
}
else{
    console.log('Value of x is false');
}

// optional
const y = '';

if(!y){
    console.log('Value is Falsy');
}

// Check Truthy
if(!!x){
    console.log('Value is Truthy');
}