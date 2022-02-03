import { Connection, Repository } from 'typeorm';
import Account from './application.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const APPLICATIONS_REPOSITORY = 'APPLICATIONS_REPOSITORY';

export const AccountProvider = [
  {
    provide: APPLICATIONS_REPOSITORY,
    useFactory: (connection: Connection): Repository<Account> =>
      connection.getRepository(Account),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
