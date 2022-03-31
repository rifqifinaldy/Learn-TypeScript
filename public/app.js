"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Rifqi', 'Working on Alfamart', 25000);
const invTwo = new Invoice('Finaldy', 'Working on Indomaret', 30000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Rifqi';
invTwo.amount = 300;
console.log(invoices);
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
