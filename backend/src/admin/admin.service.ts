import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { checkPassword } from '../../util/hash'
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }
    
    create(createAdminDto: CreateAdminDto) {
      return 'This action adds a new Admin';
    }   

    async login(username: string): Promise<any> {
        return await this.prisma.user.findFirst({ where: { name: username } });
    }
}
