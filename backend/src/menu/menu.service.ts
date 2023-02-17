import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) { }
  create(createMenuDto: CreateMenuDto) {
    createMenuDto["soldout"] = false
    createMenuDto['price'] = parseInt(createMenuDto["price"].toString())
    return this.prisma.menu.create({ data: createMenuDto });
  }

  findAll() {
    return this.prisma.menu.findMany({ where: { soldout: false } });
  }

  findSoup() {
    return this.prisma.menu.findMany({
      where: {
        AND: [{ soldout: false }, { type: 'soup' }]
      }
    });
  }

  findFood() {
    return this.prisma.menu.findMany({
      where: {
        AND: [{ soldout: false }, { type: 'food' }]
      }
    });
  }

  findSalad() {
    return this.prisma.menu.findMany({
      where: {
        AND: [{ soldout: false }, { type: 'salad' }]
      }
    });
  }

  findDrink() {
    return this.prisma.menu.findMany({
      where: {
        AND: [{ soldout: false }, { type: 'drink' }]
      }
    });
  }

  findOne(id: number) {
    return this.prisma.menu.findUnique({ where: { id: id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.prisma.menu.update({
      where: { id },
      data: updateMenuDto,
    });
  }

  remove(id: number) {
    return this.prisma.menu.delete({ where: { id } });
  }
}
