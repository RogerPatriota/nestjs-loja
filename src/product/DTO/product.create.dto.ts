import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min } from "class-validator";
import { IsNameUnique } from "../validation/name-validation";

export class ProductCreateDTO {

    @IsNotEmpty()
    @IsNameUnique({ message: 'Name already exists' })
    name: string;

    @IsString()
    @MaxLength(80)
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    amountAvailable: number
}