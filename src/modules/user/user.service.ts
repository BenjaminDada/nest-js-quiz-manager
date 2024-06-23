import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { UserRegisterDto } from "./dto/user.register.req";
import { UserRepository } from "./user.repository";
import { InjectRepository } from '@nestjs/typeorm';
import { relative } from "path";
import { Like } from "typeorm";


@Injectable()
export class UserService{
     constructor(@InjectRepository(User) private userRepository: UserRepository){}

    async doUserRegistration(userRegisterDto: UserRegisterDto):Promise<User>{
      
        const user = new User();
        user.name = userRegisterDto.name
        user.email = userRegisterDto.email
        user.password = userRegisterDto.password
        
        return await user.save()
    }

    async getUserByEmail(email:string): Promise<User|undefined>{
        const result = await this.userRepository.findOne({where: {email} })

            if(result === undefined || result === null) 
                throw new BadRequestException('the user is either null or undefined');

            return result;
    }

    async allUser(): Promise<User[]|undefined>{
        const result = await this.userRepository.find();
        return result;
    }
}