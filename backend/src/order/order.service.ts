import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) { }

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  async findlast() {
    let on = await this.prisma.order.groupBy({
      by: ['orderNo'],
      orderBy: {
        orderNo: 'desc',
      },
    })
    console.log('data', on)
    console.log('orderNo', on[0].orderNo+1)
    return 'This action returns last orderNo'
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
