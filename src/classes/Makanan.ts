import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Makanan implements HasFormatter{
    constructor(
        readonly nama: string,
        private jam: string,
        public porsi: number
    ){}
    format() {
        return `Makan ${this.nama} sebanyak ${this.porsi} porsi pada Pukul ${this.jam}`
    }
}