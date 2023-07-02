import { Test, TestingModule } from '@nestjs/testing';
import { CartpayService } from './cartpay.service';

describe('CartpayService', () => {
  let service: CartpayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartpayService],
    }).compile();

    service = module.get<CartpayService>(CartpayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
