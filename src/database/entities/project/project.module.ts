import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { ProjectProvider } from './project.provider';
import ProjectService from './project.service';

@Module({
  imports: [DatabaseModule],
  providers: [...ProjectProvider, ProjectService],
  exports: [ProjectService],
})
class ProjectModule {}

export default ProjectModule;
