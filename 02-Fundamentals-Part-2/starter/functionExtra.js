'use strict';

//anonymus functions

const f = function(){
    //statements
}

const o = {
    firstName: 'Anonymus function',
    // invoke: function(){ 
    //     return 'You called the function'
    // }
    invoke(){
        return 'You called the function'
    }
};

console.log(o.invoke());
console.log(o.invoke);

//array destructuring

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5'];

//const a  = alphabet[0]
//const b =  alphabet[1]

const[a, b,, d, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]
console.log(newArray)

const secondArray = alphabet.concat(numbers)
console.log(secondArray)

console.log(a, b, d)
console.log(rest)

function sumAndMultiply(a, b){
    return [a + b, a * b];
}

const result = sumAndMultiply(5, 6)
console.log(result)

const [sum, multiply, division = 'No division'] = sumAndMultiply(5, 6);
console.log(sum);
console.log(multiply);
console.log(division);

//object destructuring



