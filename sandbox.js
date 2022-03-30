// Explicit Type
var character;
var age;
var isLoggedIn;
// masukin data
age = 25;
isLoggedIn = true;
// arrays
var names = [];
names.push("rifqi");
console.log("single type", names);
// union types
var mixed = [];
mixed.push("Rifqi");
mixed.push(25);
mixed.push(true);
console.log("mixed array", mixed);
var uid;
uid = "123";
uid = 123;
console.log("union single", uid);
// Objects
var animalOne;
animalOne = { name: "lion", age: 20 };
console.log("object", animalOne);
var animalTwo;
animalTwo = {
    name: "maung",
    age: 25
};
console.log("explicit object", animalTwo);
// Any Type
var height = 250;
height = true;
console.log("any variabel", height);
var anyHeight = [];
anyHeight.push(100);
anyHeight.push("100");
anyHeight.push(false);
console.log("any array", anyHeight);
var birds;
birds = { name: "unta", age: 20 };
console.log('any object', birds);
