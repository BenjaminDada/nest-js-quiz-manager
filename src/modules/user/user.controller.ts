import { Body, Controller, HttpStatus, Post,Get,Query, ValidationPipe } from "@nestjs/common";
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

    @Get()
    async getAll(): Promise<User[]| undefined>{
        return this.userService.allUser();
    }
    
    @Get('get-user')
    async getUserByName(@Query('name') name:string): Promise<User|undefined>{
        return await this.userService.getUserByEmail(name);
    }

    @Get('get-user')
    async getUserByEmail(@Query('email') email:string){
        return await this.userService.getUserByEmail(email);
    }
}