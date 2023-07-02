import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MenuModule } from './menu/menu.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CartpayModule } from './cartpay/cartpay.module';

@Module({
  imports: [PrismaModule, MenuModule,AdminModule,
    ThrottlerModule.forRoot({
      ttl: 600,
      limit: 100,
    }),
    MulterModule.register({dest:'./uploads'}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'uploads'),
      exclude: ['/api/(.*)'],
    }),
    AdminModule,
    AuthModule,
    CaslModule,
    CartpayModule,
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }
  ],
})
export class AppModule {}
