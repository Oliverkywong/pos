import { Test, TestingModule } from '@nestjs/testing';
import { OrderauthService } from './orderauth.service';

describe('OrderauthService', () => {
  let service: OrderauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderauthService],
    }).compile();

    service = module.get<OrderauthService>(OrderauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
