import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { RepositorySourceProvider } from './framework.provider';
import RepositorySourceService from './framework.service';

@Module({
  imports: [DatabaseModule],
  providers: [...RepositorySourceProvider, RepositorySourceService],
  exports: [RepositorySourceService],
})
class FrameworkModule {}

export default FrameworkModule;
