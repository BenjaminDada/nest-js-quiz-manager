import { MESSAGE, REGEX } from "app.utils";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { Column } from "typeorm";

export class UserRegisterDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8,255)
    @Matches(REGEX.PASSWORD_RULE,{message:MESSAGE.PASSWORD_RULE_MESSAGE})
    password: string;

    @IsNotEmpty()
    @Length(8,255)
    @Matches(REGEX.PASSWORD_RULE,{message:MESSAGE.PASSWORD_RULE_MESSAGE})
    confirm: string
}