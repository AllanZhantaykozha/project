import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Метод для генерации JWT токена
  async generateToken(payload: any) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
