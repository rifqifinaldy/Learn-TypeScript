// Function

let greet: Function;

greet = () => {
  console.log("hello Again");
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log('simple console mix', a + b);
  console.log(c);
};

add(5, 10, "INI STRING");

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);

console.log('function return', result);

// Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const sayHi = (user: objWithName) => {
  console.log(`${user.name} with ${user.uid} says hello`);
};

const sayHiAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

let resultAliases = sayHi({name: "Mary", uid:"123213"});


// Function Signature

// contoh 1
let sapa: (a: string, b:string) => void;
sapa = (name: string, word: string) => {
  console.log(`${name} says ${word}`)
}

// contoh 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo:number, action: string)=>{
  if (action === 'add'){
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

let hasil = calc(10, 5, "add");
console.log('Function Signature 2', hasil);

// contoh 3
let logSignature3: (obj: {name:string, age: number}) => void;

type person = {name : string, age: number};
logSignature3 = (profile: person) => {
  console.log(`his name is ${profile.name} he is ${profile.age}`)
}

logSignature3({name : "Rifqi", age: 25})