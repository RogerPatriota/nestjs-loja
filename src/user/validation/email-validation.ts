import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userDb = await this.userRepository.getUserByEmail(value)
        return !userDb 
    }

}

export const EmailIsUnique = (options?: ValidationOptions) => {
    return (obj: Object, prop: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: prop,
            options: options,
            constraints: [],
            validator: EmailValidator
        })
    }
}