import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';

@Module({
  imports: [AdminModule],
  providers: [AuthService]
})
export class AuthModule {}
