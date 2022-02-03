import { Connection, Repository } from 'typeorm';
import RepositorySource from './framework.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const FRAMEWORK_REPOSITORY = 'FRAMEWORK_REPOSITORY';

export const RepositorySourceProvider = [
  {
    provide: FRAMEWORK_REPOSITORY,
    useFactory: (connection: Connection): Repository<RepositorySource> =>
      connection.getRepository(RepositorySource),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
