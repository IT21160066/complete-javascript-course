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


//in this point numProducts undefined
console.log(typeof num);
if (!numProducts) deleteShoppiingCart();

var numProducts = 10;
console.log(typeof numProducts);

function deleteShoppiingCart() {
  console.log('all products deleted');
}
*/

/*
console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991);

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrow(1991);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

//jonas.calAge();

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge;
matilda.calAge();

const f = jonas.calAge;
f();

*/

/*
const jonas = {
  year: 1991,
  firstName: 'kamal',
  calAge: function () {
    //console.log(this);
    //console.log(2037 - this.year);

    //solution 1
    const self = this; //self or that
    const isGreater = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    //isGreater();

    //solution 2
    const isLess = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isLess();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },

  greeting: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas.greeting();
// jonas.greet();
jonas.calAge();


let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  firstName: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);

*/

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';

console.log(lastName, oldLastName);

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(jessica, marriedJessica);

const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';
jessicaCopy.family.push('john');

console.log(jessica2, jessicaCopy);
