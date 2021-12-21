import { Module } from '@nestjs/common';
import AppConfigService from '~/config';
import ConfigModule from '~/config';
import Controllers from '~/controllers';
import { DatabaseModule } from './database/database.module';
import DatabaseEntities from './database/entities';
import Services from '~/services';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ...DatabaseEntities,
    JwtModule.register({
      secret: 'Stack2Skills',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [...Controllers],
  providers: [AppConfigService, ...Services, GoogleStrategy],
  exports: [...Services],
})
export class AppModule {}
