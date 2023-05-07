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
    return this.prisma.food.create({ data: createMenuDto });
  }

  findAll() {
    return this.prisma.food.findMany({ where: { soldout: false } });
  }

  findSoup() {
    return this.prisma.food.findMany({
      where: {
        AND: [{ soldout: false }, { categoryId: 1 }]
      }
    });
  }

  findFood() {
    return this.prisma.food.findMany({
      where: {
        AND: [{ soldout: false }, { categoryId: 2 }]
      }
    });
  }

  findSalad() {
    return this.prisma.food.findMany({
      where: {
        AND: [{ soldout: false }, { categoryId: 3 }]
      }
    });
  }

  findDrink() {
    return this.prisma.food.findMany({
      where: {
        AND: [{ soldout: false }, { categoryId: 4 }]
      }
    });
  }

  findOne(id: number) {
    return this.prisma.food.findUnique({ where: { id: id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.prisma.food.update({
      where: { id },
      data: updateMenuDto,
    });
  }

  remove(id: number) {
    return this.prisma.food.delete({ where: { id } });
  }
}
