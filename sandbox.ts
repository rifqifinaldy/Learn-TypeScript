let character = "Rifqi";
let age = 25;
let isKasep = false;

character = "Finaldy";
age = 24;
isKasep = true;

const circle = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circle(7.5));

// ---- Using Array ----
// String
let names = ["Rifqi", "Finaldy", "Lala"];
names.push("Rifqi2");

// Mixed
let mixed = ["ken", 4, true];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

console.log("Array Case", names, mixed);

// Object 
let animal = {
    name : 'Singa',
    kind : 'Mamalia',
    diet : 'carnivore'
}

// IT's WORKING
animal.diet = 'herbivore'; 

// IT"S NOT WORKING -> HARUS DEFINE DULU
// animal.skills = ['hunting', 'climbing'];

// Harus Sama
// animal = {
//     name : 'maung',
//     kind : 'mamal',
// }
