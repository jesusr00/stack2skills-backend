import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import ConfigModule, { AppConfigService } from '~/config';
import JwtService from './services/jwt.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: AppConfigService) => ({
        secret: configService.auth.jwt.secret,
        signOptions: { expiresIn: configService.auth.jwt.expiresIn },
      }),
      inject: [AppConfigService],
    }),
    ConfigModule,
  ],
  providers: [JwtStrategy, JwtService],
  exports: [JwtService],
})
export class AuthModule {}
