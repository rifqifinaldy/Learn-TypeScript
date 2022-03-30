"use strict";
// Function
let greet;
greet = () => {
    console.log("hello Again");
};
const add = (a, b, c = 10) => {
    console.log('simple console mix', a + b);
    console.log(c);
};
add(5, 10, "INI STRING");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log('function return', result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const sayHi = (user) => {
    console.log(`${user.name} with ${user.uid} says hello`);
};
const sayHiAgain = (user) => {
    console.log(`${user.name} says hello`);
};
let resultAliases = sayHi({ name: "Mary", uid: "123213" });
// Function Signature
// contoh 1
let sapa;
sapa = (name, word) => {
    console.log(`${name} says ${word}`);
};
// contoh 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let hasil = calc(10, 5, "add");
console.log('Function Signature 2', hasil);
// contoh 3
let logSignature3;
logSignature3 = (profile) => {
    console.log(`his name is ${profile.name} he is ${profile.age}`);
};
logSignature3({ name: "Rifqi", age: 25 });
