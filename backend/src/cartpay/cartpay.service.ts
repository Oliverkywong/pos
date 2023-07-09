import { Injectable } from '@nestjs/common';
import { CreateCartpayDto } from './dto/create-cartpay.dto';
import { UpdateCartpayDto } from './dto/update-cartpay.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartpayService {
  constructor(private prisma: PrismaService) { }
  async create(createCartpayDto: CreateCartpayDto) {
    let array = []
    for (let i = 0; i < createCartpayDto.orderfood.length; i++) {
      let sql = await this.prisma.order.groupBy({
        by: ['orderNo'],
        orderBy: {
          orderNo: 'desc',
        },
        take: 1
      })

      let orderNo = sql[0].orderNo + 1
      let foodId = createCartpayDto.orderfood[i]
      array.push({
        orderNo: orderNo,
        foodId: foodId
      })
    }
    return await this.prisma.order.createMany({ data: array });
  }

  findAll() {
    return `This action returns all cartpay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartpay`;
  }

  update(id: number, updateCartpayDto: UpdateCartpayDto) {
    return `This action updates a #${id} cartpay`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartpay`;
  }
}
