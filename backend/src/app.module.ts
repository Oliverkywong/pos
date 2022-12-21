import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MenuModule } from './menu/menu.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PrismaModule, MenuModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }
  ],
})
export class AppModule {}
