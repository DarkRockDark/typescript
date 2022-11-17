"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
try {
    const result = generateError('An error occured', 500);
    console.log(result);
}
catch (e) {
    console.log(e);
}
