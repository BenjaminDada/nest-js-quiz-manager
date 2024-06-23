import { Controller, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<any> {
     return this.authService.generateToken(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
        return req.user;
    }

   
}
