export class Makanan {
    constructor(nama, jam, porsi) {
        this.nama = nama;
        this.jam = jam;
        this.porsi = porsi;
    }
    format() {
        return `Makan ${this.nama} sebanyak ${this.porsi} porsi pada Pukul ${this.jam}`;
    }
}
