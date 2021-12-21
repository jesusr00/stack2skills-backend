import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AppConfigService } from '~/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private appConfigService: AppConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: appConfigService.isDevelopment(),
      secretOrKey: appConfigService.auth.jwt.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
