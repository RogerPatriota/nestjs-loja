import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailIsUnique } from "../validation/email-validation";

export class UserUpdateDTO {

    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Email already exists'})
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    password: string
}
