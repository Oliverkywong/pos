import { Module } from '@nestjs/common';
import { OrderauthService } from './orderauth.service';
import { OrderauthController } from './orderauth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 60 * 15 },
    }),
  ],
  controllers: [OrderauthController],
  providers: [OrderauthService],
  exports: [OrderauthService]
})
export class OrderauthModule {}
