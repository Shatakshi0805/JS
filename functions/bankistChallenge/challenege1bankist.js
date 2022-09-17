"use strict";

// const checkDogs = function (juliaArr, kateArr) {
//     const juliaCorrectedArr = juliaArr.slice();// creates copy of julia Array
//     juliaCorrectedArr.splice(0, 1);// removes first cat element
//     juliaCorrectedArr.splice(-2);
//     console.log(juliaCorrectedArr);// 
// }

// checkDogs([3,5,2,12,7], [4,1,15,8,3]);

const calcAverageHumanAge = function (dogsAges) {
    const humanAges = dogsAges.map(function (age) {// returns new array of human age based on dogs ages 
        if (age <= 2) return (2 * age);
        else if (age > 2) return (16 + (age * 4));
    })
    console.log(humanAges);
    

    const humanAdults = humanAges.filter(function (age) {// returns new array with filtered age for adults
        return age >= 18;
    })
    console.log(humanAdults);

    const avgHumanAge = humanAdults.reduce(function (acc, age) {
        return acc + age;
    }, 0) / humanAdults.length;
    console.log(avgHumanAge );
}

calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16,6,10,5,6,1,4]);