import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/roles.guard';

@Module({
  imports: [AdminModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy, 
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },],
  exports: [AuthService],
})
export class AuthModule { }
