// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// const form = document.querySelector('form')!;

// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c : string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Rifqi', 'Working on Alfamart', 25000);
const invTwo = new Invoice('Finaldy', 'Working on Indomaret', 30000);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Rifqi';
invTwo.amount = 300;


console.log(invoices);
console.log(invOne, invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})


