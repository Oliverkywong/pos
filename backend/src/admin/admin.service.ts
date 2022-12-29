import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkPassword } from '../../util/hash'

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    async login(body: { username: string, password: string }) {
        const user = await this.prisma.admin.findFirst({ where: { name: body.username } });

        if (await checkPassword(body.password, user.password)) {
            return user
        } else {
            return false;
        }
    }
}
