import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkPassword } from '../../util/hash'

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    login(username: string, password: string) {
        return this.prisma.admin.findMany({ where: { name: username }});
    }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id: id } });
  }

}
