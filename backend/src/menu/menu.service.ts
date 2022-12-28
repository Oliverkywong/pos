import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return this.prisma.menu.findMany({ where: { soldout: false } });
  }

  findSoup() {
    return this.prisma.menu.findMany({ where: { AND:[ {soldout: false}, {type: 'soup'} ] } });
  }

  findFood() {
    return this.prisma.menu.findMany({ where: { AND:[ {soldout: false}, {type: 'food'} ] } });
  }

  findSalad() {
   return this.prisma.menu.findMany({ where: { AND:[ {soldout: false}, {type: 'salad'} ] } });
  }

  findDrink() {
   return this.prisma.menu.findMany({ where: { AND:[ {soldout: false}, {type: 'drink'} ] } });
  }

  findOne(id: number) {
    return this.prisma.menu.findUnique({ where: { id: id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
