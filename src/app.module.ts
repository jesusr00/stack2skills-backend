import { Module } from '@nestjs/common';

import AppConfigService from '~/config';
import ConfigModule from '~/config';
import Controllers from '~/controllers';
import { DatabaseModule } from './database/database.module';
import Services from './services';

@Module({
  imports: [ConfigModule, ...Services, DatabaseModule],
  controllers: [...Controllers],
  providers: [AppConfigService, ...Services],
  exports: [...Services],
})
export class AppModule {}
