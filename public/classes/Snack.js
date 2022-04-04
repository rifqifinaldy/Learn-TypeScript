export class Snack {
    constructor(snack, jam, porsi) {
        this.snack = snack;
        this.jam = jam;
        this.porsi = porsi;
    }
    format() {
        return `Memakan ${this.snack} sebanyak ${this.porsi} gram pada Pukul ${this.jam}`;
    }
}
