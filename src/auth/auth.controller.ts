import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  async login(@Body() body: { password: string }) {
    const { password } = body;

    // Проверка правильности пароля
    if (password !== 'admin') {
      throw new UnauthorizedException('Invalid password');
    }

    // Если пароль правильный, генерируем JWT токен
    return this.authService.generateToken({ username: 'admin' });
  }
}
