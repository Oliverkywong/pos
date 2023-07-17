import { Test, TestingModule } from '@nestjs/testing';
import { OrderauthController } from './orderauth.controller';
import { OrderauthService } from './orderauth.service';

describe('OrderauthController', () => {
  let controller: OrderauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderauthController],
      providers: [OrderauthService],
    }).compile();

    controller = module.get<OrderauthController>(OrderauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
