import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, Min } from "class-validator";
import { IsNameUnique } from "../validation/name-validation";

export class ProductUpdateDTO {
    
    @IsNotEmpty()
    @IsNameUnique({ message: 'Name already exists' })
    @IsOptional()
    name: string;

    @IsString()
    @MaxLength(80)
    @IsOptional()
    description: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @IsOptional()
    amountAvailable: number
}