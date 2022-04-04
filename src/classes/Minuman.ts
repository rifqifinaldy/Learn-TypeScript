import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Minuman implements HasFormatter{
    constructor(
        readonly minuman: string,
        private jam: string,
        public porsi: number
    ){}
    format() {
        return `Meminum ${this.minuman} sebanyak ${this.porsi} liter pada Pukul ${this.jam}`
    }
}