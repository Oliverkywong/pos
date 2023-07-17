import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { checkPassword } from 'util/hash';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService,
              private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.adminService.login(username);
    if (await checkPassword(password, user.password)) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.adminService.login(username);

    if (!await checkPassword(password, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}