import { Makanan } from "./classes/Makanan.js";
import { Minuman } from "./classes/Minuman.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Snack } from "./classes/Snack.js";
// DOM
const dateTime = new Date();
const tanggal = document.getElementById('tanggal');
tanggal === null || tanggal === void 0 ? void 0 : tanggal.append("" + dateTime.toDateString());
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
    let doc;
    if (jenis.value === "makanan") {
        doc = new Makanan(...values);
    }
    else if (jenis.value === "minuman") {
        doc = new Minuman(...values);
    }
    else {
        doc = new Snack(...values);
    }
    list.render(doc, jenis.value, "end");
});
