"use strict";

const restaurant = {
    hotelName: "Harmony Inn",
    location: "Opposite rangeeli mandap, behind petrol pump",
    categories: ["Italian", "Vegetarian", "Pizzeria"],
    starterMenu: ["Garlic Bread", "Salad", "Toast"],
    mainMenu: ["Pizza", "Pasta"],
    openingHours: {
        thu: {
            open: 12,
            close: 12,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    // below is one method of object destructure from functions IMPORTANT
    // orderDelivery: function (obj) {// this performs object destructuring right away
    //     console.log(obj);
    // }

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
        console.log(`Delivery confirmed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

restaurant.orderDelivery({
    time: "22:30",
    starterIndex: 1,
    mainIndex: 0,
    address: "Local Market, Sunshine road"
})

const arr = [2, 3, 4];
const [x, y, z] = arr; // distructuring array here these are all variables
console.log(x, y, z);

const [firstDish, secondDish] = restaurant.categories;// gives first and second values out of array
console.log(firstDish, secondDish);

// to extract first and third value i.e skip second value out of array
let [a, , b] = restaurant.categories;
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

const [starter, mainCourse] = restaurant.order(1, 0);
console.log(starter, mainCourse);

const nums = [2, 1, [3, 4]];

const [i, , [j, k]] = nums;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// in objects order does not matter hence variable name should exactly match property name
const {hotelName, openingHours, categories} = restaurant;
console.log(hotelName, openingHours, categories);

// if we want object data but with different variable names as that of object properties contrast to above commented statement =>
const {hotelName: hn, openingHours: hours, categories: tags} = restaurant;
console.log(hn, hours, tags); // gives same result as above

// default values just like arrays
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);









