export class Minuman {
    constructor(minuman, jam, porsi) {
        this.minuman = minuman;
        this.jam = jam;
        this.porsi = porsi;
    }
    format() {
        return `Meminum ${this.minuman} sebanyak ${this.porsi} liter pada Pukul ${this.jam}`;
    }
}
