import { Module } from '@nestjs/common';
import { CartpayService } from './cartpay.service';
import { CartpayController } from './cartpay.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CartpayController],
  providers: [CartpayService]
})
export class CartpayModule {}
