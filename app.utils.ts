import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*?[A-z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?@!$%^&*-]).{8,}$/;

const PASSWORD_RULE_MESSAGE ='Password should have 1 uppercase, lower letter along with number and special character.'

const VALIDATION_PIPE = new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,})

export const REGEX = {
    PASSWORD_RULE,
}

export const MESSAGE ={
    PASSWORD_RULE_MESSAGE,
}

export const SETTINGS ={
    VALIDATION_PIPE,
}