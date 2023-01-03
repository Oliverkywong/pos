import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkPassword } from '../../util/hash'
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }
    create(createAdminDto: CreateAdminDto) {
      return 'This action adds a new Admin';
    }   

    async login(body: { username: string, password: string }) {
        const user = await this.prisma.admin.findFirst({ where: { name: body.username } });

        if (await checkPassword(body.password, user.password)) {
            return user
        } else {
            return false;
        }
    }
}
