import { Module } from '@nestjs/common';
import { CartpayService } from './cartpay.service';
import { CartpayController } from './cartpay.controller';

@Module({
  controllers: [CartpayController],
  providers: [CartpayService]
})
export class CartpayModule {}
