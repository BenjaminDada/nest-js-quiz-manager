import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([
        User,UserRepository
    ])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
