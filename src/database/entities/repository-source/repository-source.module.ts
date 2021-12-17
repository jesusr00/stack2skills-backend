import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { RepositorySourceProvider } from './repository-source.provider';
import RepositorySourceService from './repository-source.service';

@Module({
  imports: [forwardRef(() => DatabaseModule)],
  providers: [...RepositorySourceProvider, RepositorySourceService],
  exports: [RepositorySourceService],
})
class RepositorySourceModule {}

export default RepositorySourceModule;
