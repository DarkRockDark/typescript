"use strict";
function add(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number")
        || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = add(30, 26);
console.log(combinedAges);
const combinedNames = add(5, 5, 'as-number');
console.log(combinedNames);
