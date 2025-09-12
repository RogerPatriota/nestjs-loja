import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailIsUnique } from "../validation/email-validation";

export class UserCreateDTO {

    @IsNotEmpty()
    @MinLength(6)
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Email already exists'})
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string
}
