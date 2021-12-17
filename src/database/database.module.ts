import { Module } from '@nestjs/common';
import ConfigModule from '~/config';
import AppConfigService from '~/config';
import databaseProviders from './database.provider';
import AccountModule from './entities/account';
import RepositorySourceModule from './entities/repository-source';

@Module({
  imports: [ConfigModule, AccountModule, RepositorySourceModule],
  providers: [AppConfigService, ...databaseProviders],
  exports: [...databaseProviders, AccountModule, RepositorySourceModule],
})
export class DatabaseModule {}
