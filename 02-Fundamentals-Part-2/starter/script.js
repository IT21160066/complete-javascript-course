'use strict';

//let hasDriversLicense = false;
//const passTest = true;

//if(passTest) hasDriversLicense = true;
//if(hasDriversLicense) console.log('I can drive');

//future reserved
//const interface ='Audio';
//const private = 56;
//const if = 23;

//functions

/*function logger() {
    console.log('My name is kamal');
}

logger(); //calling/invoking/running function //function call
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges)
    const juice = `Juice produced with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//juice variable return value  replace with the fruitProcessor
const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

//function declaration

const age1 = calAge1(1991);
console.log(age1);

function calAge1(birthYear) {
    return 2037 - birthYear;
}

//function expression
//anonymus function
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(1991);
console.log(age2);

//arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementAge = 70 - age;
//     //return retirementAge;
//     return `${firstName} retires in ${retirementAge}`
// }

// console.log(yearsUntilRetirement(1991, 'John'));
// console.log(yearsUntilRetirement(1994, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePeices = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    //console.log(apples, oranges)
    const juice = `Juice produced with ${applePeices} peices of apples and ${orangepieces} peices of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//convert to a normal function

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirementAge = 70 - age;

    if(retirementAge > 0) 
        //return `${firstName} retires in ${retirementAge} years`
        return retirementAge;
    else
        console.log( `Redired ${Math.abs(retirementAge)} years ago`);
        return -1;
}

console.log(yearsUntilRetirement(1961, 'James'));
*/

//Arrays

// const firend1 = 'Michel';
// const freind2 = 'Steven';
// const freind3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1998, 1995, 2005);
//console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);

//friends = ['amal', 'nimal'];

const firstName = 'Jonas';
const jonas = [firstName, 'peris', 2037 - 1995, friends];
console.log(jonas);


const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = new Array(1998, 1995, 2005);

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2])];
console.log(ages);