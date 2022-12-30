import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService,
              private jwtService: JwtService) {}

  async validateUser(body: { username: string, password: string }): Promise<any> {
    const user = await this.adminService.login(body);
    if (user && user.password === body.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}