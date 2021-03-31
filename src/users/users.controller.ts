import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly uService: UserService){}

    @Get('/')
    getHello():string{
        return this.uService.getHello();
    }
}
