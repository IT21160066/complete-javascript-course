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
/*
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
console.log(ages);*/
/*
//Array methods
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //return value length
console.log(friends);
console.log(newLength);

friends.unshift('James');
console.log(friends);

//remove elements
console.log(`elemet removed >>> ${friends.pop()}`);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Micheal'));

console.log(friends.includes('Steven'));

friends.push(23);
console.log(friends.includes('23'));

//objects

//value pills

//we are literally writing down entire object
//objects for unstructured data
//arrays for orderd/structured data

const jonas = { //object literal synatx
    firstName: 'Jonas',
    lastName: "John",
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Steven', 'Peter']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey =  'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interset = prompt('What do  you want to knowabout jonas choose between firstName, lastname age, job and friends');
//console.log(jonas[interset]);

// if(jonas[interset])
//     console.log(jonas[interset])
// else
//     console.log('Invalid')


jonas.locations = 'New York';
jonas['twitter'] = 'jonastw';
console.log(jonas);

//challenge
const challenge = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(challenge);


const james = { //object literal synatx
    firstName: 'Jonas',
    lastName: "John",
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Steven', 'Peter'],
    hasDriversLicense: true,
    // calAge: function(birthYear){ //any function attached to object is called method
    //     return 2023 - birthYear;
    // }

    // calAge: function(){ 
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calAge: function(){ 
        this.age =  2037 - this.birthYear;
        return this.age;
    },
    getsummary: function() {
        return `${this.firstName} is a ${this.calAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} drivers license`
    }
};

// console.log(james.calAge(`${1991}`));
// console.log(james.calAge(1991));
// console.log(james['calAge'](1991));
// console.log(`Age >> ${james.calAge(james.birthYear)}`);

console.log(james.calAge()); //only need to calculate age once
console.log(james.age);

//challenge

if(james.hasDriversLicense)
    console.log(`${james.firstName} is a ${james.age} old ${james.job}, and he has a drivers license`)
else
    console.log(`${james.firstName} is a ${james.age} old ${james.job}, and he has not  drivers license`)

console.log(james.getsummary())


const jimmy = { 
    firstName: 'Jimmy',
    lastName: "Jamey",
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Steven', 'Peter'],
    hasDriversLicense: true,
    // calcAge : function(birthYear) { //function value
    //     return 2037 - birthYear
    // }
    calcAge : function() { //function value
        return 2037 - this.birthYear
    }
}

console.log(jimmy.calcAge());
//console.log(jimmy['calcAge'](1991));

//loops

// for(let rep = 1; rep <= 5; rep++) {
//     console.log(`lifting weight repition ${rep}`)
// }

const SamArray = [
    'Sam', 
    "Johnson", 
    2037 - 1991, 
    'teacher', 
    ['Micheal', 'Steven', 'Peter'], 
    true
]

const types1 = [];
const types2 = [];

for(let i = 0; i < SamArray.length; i++) {
    console.log(SamArray[i], typeof(SamArray[i]));

    types1[i] = typeof SamArray[i];
    types2.push(typeof SamArray[i]);
}

console.log(types1);
console.log(types2);

const years = [1991, 2007, 1996, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}

console.log(ages);

//continue and break
console.log('---ONLY STRINGS---')
for(let i = 0; i < SamArray.length; i++) {
    if(typeof SamArray[i] !== 'string') continue;
    console.log(SamArray[i], typeof(SamArray[i]));
}

console.log('---BREAK WITH NUMBERS---')
for(let i = 0; i < SamArray.length; i++) {
    if(typeof SamArray[i] === 'number') break;
    console.log(SamArray[i], typeof(SamArray[i]));
}

for(let i = SamArray.length - 1; i >= 0; i--) {
    console.log(i, SamArray[i])
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----Starting exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep ++){
        console.log(`Lifting weight repition ${rep}`)
    }
}

//while loop

let rep  = 1;
while(rep <= 5) {
    console.log(`rep ${rep}`)
    rep++;
}
*/

let num = Math.trunc(Math.random() * 6) + 1;
//console.log(num)
while(num !== 6) {
    console.log(`rolled dice ${num}`)
    num = Math.trunc(Math.random() * 6) + 1;
    if(num === 6) console.log('rolled 6')
}


