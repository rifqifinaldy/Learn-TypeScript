var character = "Rifqi";
var age = 25;
var isKasep = false;
character = "Finaldy";
age = 24;
isKasep = true;
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(7.5));
// ---- Using Array ----
// String
var names = ["Rifqi", "Finaldy", "Lala"];
names.push("Rifqi2");
// Mixed
var mixed = ["ken", 4, true];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
console.log("Array Case", names, mixed);
// Object 
var animal = {
    name: 'Singa',
    kind: 'Mamalia',
    diet: 'carnivore'
};
// IT's WORKING
animal.diet = 'herbivore';
// IT"S NOT WORKING -> HARUS DEFINE DULU
// animal.skills = ['hunting', 'climbing'];
// Harus Sama
// animal = {
//     name : 'maung',
//     kind : 'mamal',
// }
