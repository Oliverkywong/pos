import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OrderauthService {
    constructor(private jwtService: JwtService) { }
    async generateToken() {
        return {
            access_token: await this.jwtService.signAsync({ status: "OK" }),
        };
    }

}
