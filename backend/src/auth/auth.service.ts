import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async validateUser(body: { username: string, password: string }): Promise<any> {
    const user = await this.adminService.login(body);
    if (user && user.password === body.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}