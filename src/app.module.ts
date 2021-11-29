import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import AppConfigService, * as ConfigurationUtils from '~/config';
import Controllers from '~/controllers';
import { DatabaseModule } from './database/database.module';
import Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ConfigurationUtils.loadConfig],
      isGlobal: true,
    }),
    ...Services,
    DatabaseModule
  ],
  controllers: [...Controllers],
  providers: [AppConfigService, ...Services],
})
export class AppModule {}
