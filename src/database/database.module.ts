import { Module } from '@nestjs/common';
import ConfigModule from '~/config';
import AppConfigService from '~/config';
import databaseProviders from './database.provider';

@Module({
  imports: [ConfigModule],
  providers: [AppConfigService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
