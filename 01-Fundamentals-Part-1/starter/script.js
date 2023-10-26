// values and variables

/*let js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!');

// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Bob";
let first = 'jonas';
console.log(firstName);

let PI = 3.1415; //constant

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher'; //descriptive variables*/

//data types

/*true
let javascriptIsFun = true;

console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof(javascriptIsFun));
console.log(typeof 23);

javascriptIsFun = 'YES!'
console.log(javascriptIsFun);  
console.log(typeof javascriptIsFun);

let year;
console.log(year);

year = 2000;
console.log(year);
console.log(typeof year);

console.log(typeof null);*/

//let, const, var

/*let age = 30;
age = 40; //mutate variable(reassign)

const birthYear = 1991; //cannot reassign

var job = 'programmer';
job = 'teacher';

//create global object not good
lastName = 'fernando';
console.log(lastName);*/

//basic operators

/*//math operators
const now = 2023;
const ageKamal = now - 1998;
const ageAmal = now - 1997;
console.log(ageKamal, ageAmal);

console.log(ageAmal * 2, ageKamal / 2);

const firstName = 'kamal';
const lastName = 'fernando';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10 //x = x + 10
x *= 4;
x++;
x--;
x--;
console.log(x);

//comparison opertors
console.log(ageKamal > ageAmal);
console.log(ageAmal >= 18);

const isFullAge = ageAmal >=18;

console.log(now -1991 > now -2018);*/

//operator precedence

/*let x, y;
x = y = 25-10-5; //minus has more precedence
console.log(x, y);

const now = 2023;
const ageKamal = now - 2004;
const ageAmal = now - 2001;

const averageAge = (ageAmal + ageKamal) / 2; 
console.log(ageAmal, ageKamal, averageAge);*/

//strings and template literals

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2023;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' !';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(jonasNew);

console.log('just a regualr string...');

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines
`)*/

//taking decisions

/*const age = 15;
const isOldEnough = age >= 18;

if( isOldEnough == true) {
    console.log('Sarah can start driving license 🚗');
}else {
    console.log('Sarah cannot start driving license');
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young,  wait another ${yearsLeft} years`)
}
 
const bithYear = 1991;
let century;
if( bithYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/


//type conversion and coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


//coercion
console.log('I am ' + 23 + ' year old');
console.log('I am ' + '23' + ' year old');
console.log('I am ' + String(23) + ' year old');

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);