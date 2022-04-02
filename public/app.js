import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// DOM
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List Template Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Rifqi", age: 25 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: "People",
    data: { name: 'Rifqi' }
};
const docFour = {
    uid: 2,
    resourceName: 'Shopping List',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
