"use strict";

const checkDogs = function (juliaArr, kateArr) {
    const juliaCorrectedArr = juliaArr.slice();// creates copy of julia Array
    juliaCorrectedArr.splice(0, 1);// removes first cat element
    juliaCorrectedArr.splice(-2);
    console.log(juliaCorrectedArr);// 
}

checkDogs([3,5,2,12,7], [4,1,15,8,3]);