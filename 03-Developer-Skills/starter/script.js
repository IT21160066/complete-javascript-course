// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperaturesHall = [3, -2, -6, -1, 'error', 6, 7, 8, 14];
const temperaturesRoom = [3, -2, -6, 16, 17, 8, 14];

const bothTemperatures = temperaturesHall.concat(temperaturesRoom);
console.log(bothTemperatures);
let max = 0;
let min = 0;

const amplitude = temps => {
  for (let temp = 0; temp < temps.length; temp++) {
    let valueCheck = bothTemperatures[temp];

    if (valueCheck > max) max = valueCheck;
    if (valueCheck < min) min = valueCheck;
    if (valueCheck != Number) continue;
  }
  console.log(max, min);
};

amplitude(bothTemperatures);
*/

/*
const messureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degrees celcius'),
    value: 10,
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(messureKelvin());

const temperaturesHall = [3, 2, 6, 1, 'error', 6, 7, 8, 14];
const temperaturesRoom = [3, 2, 6, 16, 17, 8, 14];

const bothTemperatures = temperaturesHall.concat(temperaturesRoom);

console.log(bothTemperatures);

let max = 0;
let min = 0;

const amplitudeBug = temps => {
  for (let temp = 0; temp < temps.length; temp++) {
    let valueCheck = bothTemperatures[temp];

    if (valueCheck > max) max = valueCheck;
    if (valueCheck < min) min = valueCheck;
    if (valueCheck != Number) continue;
  }
  console.log(max, min);
};

amplitudeBug(bothTemperatures);
*/

//challlenege

const temperatures = [17, 21, 23];

const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(temperatures);
