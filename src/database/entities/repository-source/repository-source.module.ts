import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../../database.module';
import RepositorySource from './repository-source.entity';
import { RepositorySourceProvider } from './repository-source.provider';
import RepositorySourceService from './repository-source.service';

@Module({
  imports: [DatabaseModule],
  providers: [...RepositorySourceProvider, RepositorySourceService],
  exports: [RepositorySourceService],
})
class RepositorySourceModule {}

export default RepositorySourceModule;
