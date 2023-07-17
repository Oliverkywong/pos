import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { Role } from 'util/role.enum';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post()
    @Roles(Role.Admin)
    create(@Body() createAdminDto: CreateAdminDto) {
        this.adminService.create(createAdminDto);
    }
}
