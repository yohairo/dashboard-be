import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService : UserService){}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.findAll();
    }
}
