import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Snack implements HasFormatter{
    constructor(
        readonly snack: string,
        private jam: string,
        public porsi: number
    ){}
    format() {
        return `Memakan ${this.snack} sebanyak ${this.porsi} gram pada Pukul ${this.jam}`
    }
}