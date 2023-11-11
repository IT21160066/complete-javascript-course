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

function logger() {
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