import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductReadDto {

    constructor(
        readonly id: string,
        readonly name: string,
        readonly price: number
    ) {}

}