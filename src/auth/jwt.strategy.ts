import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'helloworld123', // Используй секрет из .env файла
    });
  }

  async validate(payload: any) {
    // В payload будет содержаться информация, которую ты передал в JWT
    return { username: payload.username };
  }
}
