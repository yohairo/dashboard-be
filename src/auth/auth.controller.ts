import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('sign-in')
    async signIn(@Body() user){
        return this.authService.signInUser(user);
    }
}
