import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ProductRepository } from "../product.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class NameValidator implements ValidatorConstraintInterface {

    constructor (private productRepository: ProductRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const productDb = await this.productRepository.getProductByName(value)
        return !productDb
    }
}

export const IsNameUnique = (options?: ValidationOptions) => {
    return (obj: Object, prop: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: prop,
            options: options,
            constraints: [],
            validator: NameValidator
        })
    }
}