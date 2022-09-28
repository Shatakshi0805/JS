"use strict";

// const checkDogs = function (juliaArr, kateArr) {
//     const juliaCorrectedArr = juliaArr.slice();// creates copy of julia Array
//     juliaCorrectedArr.splice(0, 1);// removes first cat element
//     juliaCorrectedArr.splice(-2);
//     console.log(juliaCorrectedArr);// 
// }

// checkDogs([3,5,2,12,7], [4,1,15,8,3]);

// const calcAverageHumanAge = function (dogsAges) {
//     const humanAges = dogsAges.map(function (age) {// returns new array of human age based on dogs ages 
//         if (age <= 2) return (2 * age);
//         else if (age > 2) return (16 + (age * 4));
//     })
//     console.log(humanAges);
    

//     const humanAdults = humanAges.filter(function (age) {// returns new array with filtered age for adults
//         return age >= 18;
//     })
//     console.log(humanAdults);

//     const avgHumanAge = humanAdults.reduce(function (acc, age) {
//         return acc + age;
//     }, 0) / humanAdults.length;
//     console.log(avgHumanAge );
// }

// calcAverageHumanAge([5,2,4,1,15,8,3]);
// calcAverageHumanAge([16,6,10,5,6,1,4]);

// // chaining=> reduce can be done in only way listed below
// const calcAverageHumanAgeChain = function (dogsAges) {
//     const humanAvg = dogsAges.map(age => {
//         if (age <= 2) {
//             (2 * age);
//         } else if (age > 2) {
//             (16 + (age * 4));
//         }}).filter(age => {
//             age >= 18
//         }).reduce((acc, age, humanAdults) => {
//             acc + age/humanAdults.length;
//         }, 0);
// }

//CHALLENGE - 4
const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
];

dogs.forEach(function (cur, i, dogs) {
    const recommendedFoodPortion = Math.trunc(cur.weight ** 0.75 * 28);
    cur.recommendedFood = recommendedFoodPortion;
})
console.log(dogs.flat(2));

const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
if (dogSarah.curFood > dogSarah.recommendedFood) console.log("Sarah's dog eating too much");
else console.log("Sarah's dog eating too little");
console.log(dogSarah);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!'`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!'`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

console.log(dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)));

const dogsEatOkay = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));
console.log(dogsEatOkay);

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);



