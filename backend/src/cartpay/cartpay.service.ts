import { Injectable } from '@nestjs/common';
import { CreateCartpayDto } from './dto/create-cartpay.dto';
import { UpdateCartpayDto } from './dto/update-cartpay.dto';

@Injectable()
export class CartpayService {
  create(createCartpayDto: CreateCartpayDto) {
    return 'This action adds a new cartpay';
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
