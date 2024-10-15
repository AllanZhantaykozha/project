import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; // Для защиты маршрутов

@Module({
  imports: [
    JwtModule.register({
      secret: 'helloworld123', // Используй секрет из .env файла
      signOptions: { expiresIn: '1h' }, // Время жизни токена
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
