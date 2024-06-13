import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
    imports: [User,UserRepository],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
