import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// DOM

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List Template Instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// Enums
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docONe: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'Lord of the ring'}
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    data: {name: 'Rifqi'}
}

console.log(docONe, docTwo)