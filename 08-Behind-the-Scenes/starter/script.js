'use strict';

//global scope
function calcAge(birthYear) {
  //function scope
  console.log(`calAge outpt ${firstName}`);
  const age = 2037 - birthYear;
  function printAge() {
    let outPut = `printAge outpt ${age} and ${firstName}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var str0 = true;
      const firstName = 'kamal';
      const str = `if block output ${firstName}`;
      console.log(str);
      console.log(firstName);

      function add(a, b) {
        return a + b;
      }

      const outPut = 'new output';
      console.log(outPut);
    }
    console.log(str0);
    console.log(outPut);
  }
  printAge();
  return age;
}

const firstName = 'jonas';
calcAge(1991);
