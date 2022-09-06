"use strict";

const restraunts = {
    name: "Harmony Inn",
    location: "Opposite rangeeli mandap, behind petrol pump",
    categories: ["Italian", "Vegetarian", "Pizzeria"],
    starterMenu: ["Garlic Bread", "Salad"],
    mainMenu: ["Pizza", "Pasta"],

    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const [x, y, z] = arr; // distructuring array here these are all variables
console.log(x, y, z);

const [firstDish, secondDish] = restraunts.categories;// gives first and second values out of array
console.log(firstDish, secondDish);

// to extract first and third value i.e skip second value out of array
let [a, , b] = restraunts.categories;
console.log(a, b);

// switching variables
// below is method 1:
// const temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// method 2 of swtiching variables
[a, b] = [b, a];
console.log(a, b);

const [starter, mainCourse] = restraunts.order(1, 0);
console.log(starter, mainCourse);

const nums = [2, 1, [3, 4]];

const [i, , [j, k]] = nums;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);










