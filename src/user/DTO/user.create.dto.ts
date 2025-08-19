import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailIsUnique } from "../validation/email-validation";

export class UserCreateDTO {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Email already exists'})
    email: string;

    @MinLength(6)
    password: string
}
