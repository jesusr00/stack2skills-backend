import { Module } from '@nestjs/common';
import ConfigModule from '~/config';
import AppConfigService from '~/config';
import databaseProviders from './database.provider';
import AccountModule from './entities/account';

@Module({
  imports: [ConfigModule, AccountModule],
  providers: [AppConfigService, ...databaseProviders],
  exports: [...databaseProviders, AccountModule],
})
export class DatabaseModule {}
