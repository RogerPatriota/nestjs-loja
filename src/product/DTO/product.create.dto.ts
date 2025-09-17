import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min } from "class-validator";
import { IsNameUnique } from "../validation/name-validation";
import { ProductEntity } from "../product-entity";
import { Type } from "class-transformer";

export class ProductDetailsCreate {
    id: string
    
    name: string

    description: string

    product: ProductEntity
}
export class ProductCreateDTO {

    @IsNotEmpty()
    @IsNameUnique({ message: 'Name already exists' })
    name: string;

    @IsString()
    @MaxLength(80)
    description: string;

    @IsString()
    @MaxLength(100)
    category: string

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    amountAvailable: number

    @IsArray()
    @Type(() => ProductDetailsCreate)
    details: ProductDetailsCreate[]
}