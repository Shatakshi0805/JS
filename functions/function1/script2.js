"use strict";

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}!`);
//     }
// }

// const greeterHey = greet('hey');
// greeterHey('Steve');

// greet('hello')('Jonathan');

const greet = (greet) => {
    return (name) => {
        console.log(`${greet}, ${name}!!. This is an example of arrow functions returning arrow functions`);
    }
}

const greeterHey = greet('hello there');
greeterHey('Barb');

greet('Hello')('Barb');