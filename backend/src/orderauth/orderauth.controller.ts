import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { OrderauthService } from './orderauth.service';
import { AuthGuard } from './auth.guard';

@Controller('orderauth')
export class OrderauthController {
  constructor(private readonly orderauthService: OrderauthService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  generateToken() {
    return this.orderauthService.generateToken();
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.tokeninfo;
  }
}