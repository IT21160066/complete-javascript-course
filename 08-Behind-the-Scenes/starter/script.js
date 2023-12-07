'use strict';

/*
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
*/

/*
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// console.log(addDecl(1, 3));
// console.log(addExpr(1, 3));
// console.log(addArrow(1, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

//in this point numProducts undefined
console.log(typeof num);
if (!numProducts) deleteShoppiingCart();

var numProducts = 10;
console.log(typeof numProducts);

function deleteShoppiingCart() {
  console.log('all products deleted');
}
