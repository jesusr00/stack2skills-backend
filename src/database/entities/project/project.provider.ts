import { Connection, Repository } from 'typeorm';
import ProjectEntity from './project.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const PROJECT_REPOSITORY = 'PROJECT_REPOSITORY';

export const ProjectProvider = [
  {
    provide: PROJECT_REPOSITORY,
    useFactory: (connection: Connection): Repository<ProjectEntity> =>
      connection.getRepository(ProjectEntity),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
