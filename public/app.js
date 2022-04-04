import { Makanan } from "./classes/Makanan.js";
import { Minuman } from "./classes/Minuman.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// DOM
const form = document.querySelector(".new-item-form");
// Inputs
const jenis = document.querySelector("#jenis");
const nama = document.querySelector("#nama");
const jam = document.querySelector("#jam");
const porsi = document.querySelector("#porsi");
// List Template Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   Tuples
    let values;
    values = [nama.value, jam.value, porsi.valueAsNumber];
    console.log(values);
    let doc;
    if (jenis.value === "makanan") {
        doc = new Makanan(...values);
    }
    else {
        doc = new Minuman(...values);
    }
    list.render(doc, jenis.value, "end");
});
