'use strict';

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

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
checkWinner(400, 30);