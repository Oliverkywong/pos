import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post()
    login(@Body() body) {
        const login = this.adminService.login(body)
        if (!login) {
            return { result: false, msg: "login failed" }
        }
        return login
    }
}
