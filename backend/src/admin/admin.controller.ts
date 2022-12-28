import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post()
    login(username: string, password: string) {
        return this.adminService.login(username, password)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.adminService.findOne(+id);
    }
}
