import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './User.service';
import { UserCreateDTO } from './dto/User.create.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guarda';


@Controller('usuarios')
export class UserController {
    constructor(private readonly userService: UserService, 
        private authService: AuthService,
       ) {}

    @UseGuards(JwtAuthGuard)
    @Get() 
    get() {
        return this.userService.getUsers()
    }   
   /* @Post("login")
    validation(@Body() data:UserLoginDto) {       
        return this.userService.validate(data)
    }*/

    @Post("create")
    create(@Body() data: UserCreateDTO) {       
     return this.userService.createUser(data)  
}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req) {
    return this.authService.login(req.user);
    }  
}
