import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/orderauth/constants';

@Module({
  imports: [PrismaModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 60 * 15 },
    }),
  ],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
