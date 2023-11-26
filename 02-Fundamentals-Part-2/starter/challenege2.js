'use strict';

/*const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const checkWinner = function (dolphinsAverage, koalasAverage){
    if(dolphinsAverage >= koalasAverage * 2)
        console.log(`Dolphins win ${dolphinsAverage} vs. ${koalasAverage}`);
    else if(koalasAverage >= dolphinsAverage * 2)
        console.log(`Koalas win ${koalasAverage} vs. ${dolphinsAverage}`);
    else
        console.log('Nobody wins');
}

checkWinner(dolphinsAverage, koalasAverage);
checkWinner(400, 30);*/

/*
const calcTip = (billValue) => {
    const tipPrecentage = billValue >= 50 && billValue <= 300 ? billValue * 0.15
    : billValue * 0.2;
    return tipPrecentage;
}

const totalBillValue = (bills, tipPrecentage) => {
    const totalBill = bills +  tipPrecentage;
    return totalBill;
}

//const tipCalculated = calcTip(1000);
//console.log(tipCalculated);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips)

const total1 = [totalBillValue(bills[0], tips[0]), 
    totalBillValue(bills[1], tips[1]), totalBillValue(bills[2], tips[2])];
console.log(total1);

const total2 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total2)
*/

//challenge 03

const MarkMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return Math.ceil(this.mass / this.height ** 2);
    }
}
const JohnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return Math.ceil(this.mass / this.height ** 2);
    }
}

const markBMI = MarkMiller.calcBMI();
const johnBMI = JohnSmith.calcBMI();
//console.log(markBMI, johnBMI)

console.log(
    markBMI > johnBMI ? `${MarkMiller.fullName}'s BMI (${markBMI}) is higher than ${JohnSmith.fullName}'s (${johnBMI})!` :
    `${JohnSmith.fullName}'s BMI (${johnBMI}) is higher than ${MarkMiller.fullName}'s (${markBMI})!`
);