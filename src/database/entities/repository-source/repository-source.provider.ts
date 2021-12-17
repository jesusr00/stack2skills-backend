import { Connection, Repository } from 'typeorm';
import RepositorySource from './repository-source.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const REPOSITORYS_SOURCE_REPOSITORY = 'REPOSITORYS_SOURCE_REPOSITORY';

export const RepositorySourceProvider = [
  {
    provide: REPOSITORYS_SOURCE_REPOSITORY,
    useFactory: (connection: Connection): Repository<RepositorySource> =>
      connection.getRepository(RepositorySource),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
