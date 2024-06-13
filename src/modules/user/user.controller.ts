import { Body, Controller, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./dto/user.register.req";
import { SETTINGS } from "app.utils";
import { User } from "./user.entity";

@Controller('user')

export class UserController{
    constructor(private userService: UserService) {}

    @Post('/register')
    async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) 
    userRegisterDto: UserRegisterDto): Promise<User>{
        console.log(userRegisterDto);
       return await this.userService.doUserRegistration(userRegisterDto);
    }
}