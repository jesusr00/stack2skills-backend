import { Module } from '@nestjs/common';
import AppConfigService from '~/config';
import ConfigModule from '~/config';
import Controllers from '~/controllers';
import { DatabaseModule } from './database/database.module';
import DatabaseEntities from './database/entities';
import Services from '~/services';
import { GoogleStrategy } from './strategies/google.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    DatabaseModule,
    ...DatabaseEntities,
    AuthModule,
  ],
  controllers: [...Controllers],
  providers: [...Services, GoogleStrategy],
  exports: [...Services],
})
export class AppModule {}
