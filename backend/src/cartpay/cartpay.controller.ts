import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartpayService } from './cartpay.service';
import { CreateCartpayDto } from './dto/create-cartpay.dto';
import { UpdateCartpayDto } from './dto/update-cartpay.dto';

@Controller('cartpay')
export class CartpayController {
  constructor(private readonly cartpayService: CartpayService) {}

  @Post()
  create(@Body() createCartpayDto: CreateCartpayDto) {
    console.log('createCartpayDto', createCartpayDto['body']);
    return this.cartpayService.create(createCartpayDto);
  }

  @Get()
  findAll() {
    return this.cartpayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartpayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartpayDto: UpdateCartpayDto) {
    return this.cartpayService.update(+id, updateCartpayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartpayService.remove(+id);
  }
}
