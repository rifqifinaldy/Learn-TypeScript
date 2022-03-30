// Explicit Type
let character: string;
let age: number;
let isLoggedIn: boolean;

// masukin data
age = 25;
isLoggedIn = true;

// arrays
let names: string[] = [];
names.push("rifqi");

console.log("single type", names);

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("Rifqi");
mixed.push(25);
mixed.push(true);

console.log("mixed array", mixed);

let uid: string | number;
uid = "123";
uid = 123;
console.log("union single", uid);

// Objects
let animalOne: object;
animalOne = { name: "lion", age: 20 };
console.log("object", animalOne);

let animalTwo: {
  name: string;
  age: number;
};

animalTwo = {
  name: "maung",
  age: 25,
};
console.log("explicit object", animalTwo);

// Any Type
let height: any = 250;

height = true;
console.log("any variabel", height);

let anyHeight: any[] = [];
anyHeight.push(100);
anyHeight.push("100");
anyHeight.push(false);
console.log("any array", anyHeight);

let birds: { name: any; age: any };
birds = {name: "unta", age: 20};
console.log('any object', birds)