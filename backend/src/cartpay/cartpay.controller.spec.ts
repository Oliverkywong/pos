import { Test, TestingModule } from '@nestjs/testing';
import { CartpayController } from './cartpay.controller';
import { CartpayService } from './cartpay.service';

describe('CartpayController', () => {
  let controller: CartpayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartpayController],
      providers: [CartpayService],
    }).compile();

    controller = module.get<CartpayController>(CartpayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
