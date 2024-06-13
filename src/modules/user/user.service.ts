import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { UserRegisterDto } from "./dto/user.register.req";

@Injectable()
export class UserService{
     
    async doUserRegistration(userRegisterDto: UserRegisterDto):Promise<User>{
      
        const user = new User();
        user.name = userRegisterDto.name
        user.email = userRegisterDto.email
        user.password = userRegisterDto.password
        
        return await user.save()
    }
}