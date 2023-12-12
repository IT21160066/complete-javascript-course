'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  firstName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterindex, maninIndex) {
    return [this.starterMenu[starterindex], this.mainMenu[maninIndex]];
  },

  orderDelivery: function ({ mainIndex, time = '22.00' }) {
    console.log(mainIndex, time);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`ingredients ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
restaurant.orderDelivery({
  time: '22.30',
  address: 'colombo',
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: 'colombo',
  mainIndex: 2,
});

const { firstName, openingHours, categories } = restaurant;
console.log(firstName, openingHours, categories);

const { firstName: resturantName, openingHours: hours } = restaurant;
console.log(resturantName, hours);

const { menu = ['default'], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p, q = 9, r = 7] = [8, 9];
console.log(p, q, r);
*/

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'new'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuNew);

// const ingredients = [
//   prompt('ingredients 1:'),
//   prompt('ingredients 2:'),
//   prompt('ingredients 3:'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

const newResturant = { ...restaurant, founder: 'kamal' };
console.log(newResturant);

const resturantCopy = { ...restaurant };
resturantCopy.firstName = 'copy resturant';
console.log(resturantCopy.firstName);
console.log(restaurant.firstName);

//rest pattern - pack elements in to array

const numbers = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
