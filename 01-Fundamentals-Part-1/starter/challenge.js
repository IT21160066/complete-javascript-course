//1 coding challenge
// BMI calculator

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

/*const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

let mass = 0;
let height = 0;

mass = markMass;
height = markHeight;

const BMICalculatorOne = mass / height ** 2;
const markBMI = BMICalculatorOne;
console.log(markBMI);

mass = johnMass;
height = johnHeight;

const BMICalculatorTwo = mass / (height * height);
const johnBMI = BMICalculatorTwo;
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);*/

//2 coding challenge
//BMI calculator

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const BMICalculatorForMark = markMass / (markHeight * markHeight);
const BMICalculatorForJohn = johnMass / (johnHeight * johnHeight);

const isMarkBMIHigh = BMICalculatorForMark > BMICalculatorForJohn

if(isMarkBMIHigh == true){
    console.log(`Mark's BMI is higher than John's and vlaue is : ${BMICalculatorForMark}`);
} else {
    console.log(`John's BMI is higher than Mark's and value is : ${BMICalculatorForJohn}`);
}
